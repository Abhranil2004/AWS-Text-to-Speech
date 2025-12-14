"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

const Header = () => {
  const pathname = usePathname();

  // Show Go Home button ONLY on /converter page
  const showGoHome = pathname === "/converter";

  return (
    <header className="fixed top-0 left-0 w-full z-40 backdrop-blur-xl bg-background/60 border-b border-border/40 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">

        {/* Logo & Title */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/logo/aws-logo.png"
            alt="AWS Logo"
            className="w-10 h-10 rounded-full transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-lg sm:text-xl font-semibold tracking-wide transition-colors group-hover:text-primary">
            AWS Polly TTS
          </span>
        </Link>

        {/* Right Controls */}
        <div className="flex items-center gap-4">

          {showGoHome && (
            <Link
              href="/"
              className="
                px-4 py-2 text-sm font-medium
                rounded-md border border-purple-400/40
                bg-white/10 backdrop-blur-md
                hover:bg-white/20 transition-all duration-300
              "
            >
              Go Home
            </Link>
          )}

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
