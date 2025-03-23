"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Terms() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <Button
          variant="ghost"
          className="mb-8"
          onClick={() => router.push("/")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p>
                By installing and using the Image Hover Download extension, you agree to these Terms of Service.
                If you disagree with any part of the terms, you may not use our extension.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. License</h2>
              <p className="mb-4">
                Image Hover Download grants you a limited, non-exclusive, non-transferable license to:
              </p>
              <ul className="list-disc pl-6">
                <li>Install and use the extension for personal or commercial use</li>
                <li>Use all features included with your subscription</li>
                <li>Receive updates and support during your subscription period</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Restrictions</h2>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc pl-6">
                <li>Modify, reverse engineer, or decompile the extension</li>
                <li>Use the extension for any illegal purposes</li>
                <li>Share or redistribute your license key</li>
                <li>Create derivative works based on the extension</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Payment and Refunds</h2>
              <p className="mb-4">
                After the 7-day free trial, continued use requires a one-time payment.
                We offer a 30-day money-back guarantee if you're not satisfied with the extension.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify users of any
                significant changes via email or through the extension.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Contact</h2>
              <p>
                For questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:shiftwithai@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  shiftwithai@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}