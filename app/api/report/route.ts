import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ALLOWED_ORIGIN_PREFIX = "chrome-extension://";
const REPORT_TO = "shiftwithai@gmail.com";

function corsHeaders(origin: string | null) {
  const allow =
    origin && origin.startsWith(ALLOWED_ORIGIN_PREFIX) ? origin : "*";
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}

export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders(req.headers.get("origin")),
  });
}

export async function POST(req: NextRequest) {
  const headers = corsHeaders(req.headers.get("origin"));

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON" },
      { status: 400, headers }
    );
  }

  const url = typeof body.url === "string" ? body.url.slice(0, 2000) : "";
  const title =
    typeof body.title === "string" ? body.title.slice(0, 500) : "";
  const message =
    typeof body.message === "string" ? body.message.slice(0, 4000) : "";
  const replyEmail =
    typeof body.replyEmail === "string" ? body.replyEmail.slice(0, 200) : "";
  const extensionVersion =
    typeof body.extensionVersion === "string"
      ? body.extensionVersion.slice(0, 50)
      : "";
  const userAgent =
    typeof body.userAgent === "string" ? body.userAgent.slice(0, 500) : "";
  const isPremium = body.isPremium === true;
  const trialActive = body.trialActive === true;
  const submittedAt =
    typeof body.submittedAt === "string"
      ? body.submittedAt.slice(0, 50)
      : new Date().toISOString();

  if (!url) {
    return NextResponse.json(
      { error: "Missing url" },
      { status: 400, headers }
    );
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPassword = process.env.GMAIL_APP_PASSWORD;
  if (!gmailUser || !gmailPassword) {
    console.error("Report endpoint missing GMAIL_USER or GMAIL_APP_PASSWORD");
    return NextResponse.json(
      { error: "Email not configured" },
      { status: 500, headers }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailPassword },
  });

  const status = isPremium ? "Premium" : trialActive ? "Trial" : "Expired";
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  const subject = `[Image Hover Download] Page report: ${title || url}`.slice(
    0,
    200
  );

  const text = [
    "A user reported a page from the Image Hover Download extension.",
    "",
    `URL: ${url}`,
    `Title: ${title || "(none)"}`,
    `Submitted: ${submittedAt}`,
    `Extension version: ${extensionVersion || "(unknown)"}`,
    `Subscription: ${status}`,
    `Reply email: ${replyEmail || "(not provided)"}`,
    `User agent: ${userAgent || "(unknown)"}`,
    `IP: ${ip}`,
    "",
    "Message:",
    message || "(no message)",
  ].join("\n");

  try {
    await transporter.sendMail({
      from: `"Image Hover Download" <${gmailUser}>`,
      to: REPORT_TO,
      replyTo: replyEmail || undefined,
      subject,
      text,
    });
  } catch (err) {
    console.error("Failed to send report email:", err);
    return NextResponse.json(
      { error: "Failed to send report" },
      { status: 500, headers }
    );
  }

  return NextResponse.json({ ok: true }, { headers });
}
