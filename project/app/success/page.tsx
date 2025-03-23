"use client";

import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckCircle } from "lucide-react";

export default function Success() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-md w-full mx-auto p-8">
        <div className="text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Thank You for Your Purchase!</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Your extension will automatically activate within the next few minutes.
            You can close this window and continue using the extension.
          </p>
          <Button
            onClick={() => router.push("/")}
            className="w-full"
            size="lg"
          >
            Return to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
}