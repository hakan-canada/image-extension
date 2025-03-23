"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Download, ImageIcon, MousePointer2, Package, Link2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleInstall = () => {
    window.open(
      "https://chrome.google.com/webstore/detail/your-extension-id",
      "_blank"
    );
  };

  const openLightbox = (imageUrl: string) => {
    setCurrentImage(imageUrl);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={[{ src: currentImage }]}
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-background" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <Image
                src="https://res.cloudinary.com/duhs2q0vd/image/upload/v1742102242/Image_Hover_Download_Logo_ipw4xq.svg"
                alt="Image Hover Download Logo"
                width={200}
                height={200}
                priority
                className="h-20 w-auto"
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Download Images with a Simple Hover
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Save time and streamline your workflow with our intuitive Chrome
              extension. Download images or copy their URLs with a single hover.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <Button size="lg" onClick={handleInstall}>
                Install Extension
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://player.vimeo.com/video/1066264465?h=75999ddb73&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="image-extension"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Powerful Features
          </h2>
          
          <div className="space-y-24">
            {/* One-Click Downloads */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div 
                className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl cursor-pointer transform transition-transform hover:scale-[1.02]"
                onClick={() => openLightbox("https://res.cloudinary.com/duhs2q0vd/image/upload/v1742104416/One-Click_Downloads_kjw3k0.png")}
              >
                <Image
                  src="https://res.cloudinary.com/duhs2q0vd/image/upload/v1742104416/One-Click_Downloads_kjw3k0.png"
                  alt="One-Click Downloads Feature"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="bg-gray-100 dark:bg-gray-800 p-4"
                />
              </div>
              <div>
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  <MousePointer2 className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4">One-Click Downloads</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Download images instantly by hovering over them - no more right-clicks needed. 
                  Our intuitive interface makes saving images faster and more efficient than ever before.
                </p>
              </div>
            </div>

            {/* Quick URL Copy */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div 
                className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl cursor-pointer transform transition-transform hover:scale-[1.02]"
                onClick={() => openLightbox("https://res.cloudinary.com/duhs2q0vd/image/upload/v1742104415/Quick_URL_Copy_nbooxv.png")}
              >
                <Image
                  src="https://res.cloudinary.com/duhs2q0vd/image/upload/v1742104415/Quick_URL_Copy_nbooxv.png"
                  alt="Quick URL Copy Feature"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="bg-gray-100 dark:bg-gray-800 p-4"
                />
              </div>
              <div>
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  <Link2 className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Quick URL Copy</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Copy image URLs directly to your clipboard with a single click. 
                  Perfect for sharing images or referencing them in your work without downloading.
                </p>
              </div>
            </div>

            {/* Batch Downloads */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div 
                className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl cursor-pointer transform transition-transform hover:scale-[1.02]"
                onClick={() => openLightbox("https://res.cloudinary.com/duhs2q0vd/image/upload/v1742104415/Batch_Downloads_ahoqyo.png")}
              >
                <Image
                  src="https://res.cloudinary.com/duhs2q0vd/image/upload/v1742104415/Batch_Downloads_ahoqyo.png"
                  alt="Batch Downloads Feature"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="bg-gray-100 dark:bg-gray-800 p-4"
                />
              </div>
              <div>
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  <Package className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Batch Downloads</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Select and download multiple images simultaneously. 
                  Save time by downloading entire galleries or collections with just a few clicks.
                </p>
              </div>
            </div>

            {/* Additional Features */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  <ImageIcon className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4">All Image Sizes</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Support for various image formats and sizes. Download high-resolution images
                  without any quality loss or compression.
                </p>
              </Card>

              <Card className="p-8">
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  <Download className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4">7-Day Free Trial</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Try all premium features free for 7 days. Experience the full power
                  of Image Hover Download before making a decision.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Install Extension",
                description: "Add Image Hover Download to Chrome in one click",
              },
              {
                step: "2",
                title: "Hover Over Images",
                description: "Move your cursor over any image you want to save or copy",
              },
              {
                step: "3",
                title: "Download or Copy",
                description: "Choose to download the image or copy its URL instantly",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Simple Pricing</h2>
          <Card className="max-w-lg mx-auto p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">One-Time Payment</h3>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                $9.99
              </div>
              <ul className="text-left space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="mr-2">✓</span> 7-day free trial
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Unlimited downloads
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Quick URL copying
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> All premium features
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Lifetime updates
                </li>
              </ul>
              <Button className="w-full" size="lg" onClick={handleInstall}>
                Start Free Trial
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
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
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Contact Us</h2>
          <div className="max-w-md mx-auto text-center">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Have questions or need support? We're here to help!
            </p>
            <Button
              size="lg"
              className="w-full"
              onClick={() => window.location.href = 'mailto:shiftwithai@gmail.com'}
            >
              Email Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="https://res.cloudinary.com/duhs2q0vd/image/upload/v1742102242/Image_Hover_Download_Logo_ipw4xq.svg"
                  alt="Image Hover Download Logo"
                  width={40}
                  height={40}
                  className="h-8 w-auto"
                />
                <h3 className="text-xl font-bold">Image Hover Download</h3>
              </div>
              <p className="text-gray-400">
                The easiest way to download images and copy URLs from the web.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="/privacy" className="text-gray-400 hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms" className="text-gray-400 hover:text-white">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="/faq" className="text-gray-400 hover:text-white">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="mailto:shiftwithai@gmail.com" className="text-gray-400 hover:text-white">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Image Hover Download. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
