"use client";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function FAQ() {
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
        
        <h1 className="text-4xl font-bold text-center mb-16">
          Frequently Asked Questions
        </h1>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "How does the free trial work?",
                answer:
                  "You get full access to all features for 7 days. No credit card required to start.",
              },
              {
                question: "What happens after the trial?",
                answer:
                  "You can purchase the extension for a one-time fee of $19.99 to continue using it.",
              },
              {
                question: "Can I get a refund?",
                answer:
                  "Yes, we offer a 30-day money-back guarantee if you're not satisfied.",
              },
              {
                question: "Which browsers are supported?",
                answer:
                  "Currently, the extension is available for Google Chrome and Microsoft Edge.",
              },
              {
                question: "Can I copy image URLs instead of downloading?",
                answer:
                  "Yes! You can choose to either download images or copy their URLs directly to your clipboard with a single click.",
              },
              {
                question: "Is there a limit to how many images I can download?",
                answer:
                  "No, there are no limits on the number of images you can download or URLs you can copy.",
              },
              {
                question: "Do you offer bulk discounts for teams?",
                answer:
                  "Yes, we offer special pricing for teams of 5 or more. Please contact us for details.",
              },
              {
                question: "How do updates work?",
                answer:
                  "The extension automatically updates through the Chrome Web Store. All updates are included with your purchase.",
              },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}