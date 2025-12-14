import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";   
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "AWS Polly TTS",
  description: "AI-powered text-to-speech conversion",
  icons: {
    icon: "/logo/aws-logo.png",        // <- Your logo path
    shortcut: "/logo/aws-logo.png",
    apple: "/logo/aws-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="
          font-body antialiased
          bg-background text-foreground
          transition-colors
          dark:bg-gradient-to-b dark:from-[#0d0f12] dark:via-[#0d0f12] dark:to-[#0d0f12]
        "
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>

        <Toaster />
      </body>
    </html>
  );
}
