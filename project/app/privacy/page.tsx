"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Privacy() {
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
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="mb-4">
                The Image Hover Download extension collects minimal information necessary for its operation:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Extension settings and preferences</li>
                <li>Basic usage statistics to improve the extension</li>
                <li>Technical information for error reporting</li>
              </ul>
              <p>
                We do not collect or store any personal information, browsing history, or downloaded images.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p>
                The information collected is used solely for:
              </p>
              <ul className="list-disc pl-6">
                <li>Improving the extension's functionality</li>
                <li>Fixing bugs and technical issues</li>
                <li>Enhancing user experience</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect against unauthorized access,
                alteration, disclosure, or destruction of your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes
                by posting the new Privacy Policy on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{" "}
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