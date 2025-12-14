
"use client";

import { Button } from "@/components/ui/button";
import { Mic, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [aosReady, setAosReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.init({
        duration: 900,
        once: true,
        offset: 120,
      });
      setAosReady(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      className="
        relative w-full min-h-screen
        bg-background text-foreground
        transition-all duration-500
        dark:bg-gradient-to-b dark:from-[#0d0f12] dark:via-[#0d0f12] dark:to-[#0d0f12]
     
        "
    >
      

      <section
        className={`min-h-screen flex flex-col items-center justify-center text-center px-6 transition-all duration-500 ${
          aosReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div
          data-aos="zoom-in"
          className="relative mx-auto flex items-center justify-center w-[110px] h-[110px]"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/60 to-indigo-500/60 blur-xl opacity-50" />
          <div className="absolute w-28 h-28 rounded-full border border-white/10 dark:border-white/20 backdrop-blur-xl" />
          <div className="relative rounded-full p-6 bg-[#e1e1e1]/40 dark:bg-[#1b1f24] border border-black/10 dark:border-white/10 shadow-xl">
            <Mic className="w-10 h-10 text-purple-600 dark:text-purple-400" />
          </div>
        </div>

        <h1
          data-aos="fade-up"
          className="text-4xl sm:text-6xl font-bold leading-tight mt-8"
        >
          Convert Your Text Into{" "}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
            Natural Speech
          </span>
        </h1>

        
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-muted-foreground text-lg sm:text-xl max-w-xl mx-auto mt-5"
        >
          Experience expressive, studio-quality speech using AWS Polly. Fast.
          Smooth. Ultra-natural.
        </p>

      
        <div
          data-aos="fade-up"
          data-aos-delay="250"
          className="flex justify-center gap-4 mt-10"
        >
          <Link href="/converter">
            <Button className="px-7 py-6 text-lg font-semibold flex items-center gap-2 shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
              Start Converting
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>

          <Link href="">
            <Button
              variant="outline"
              className="px-7 py-6 text-lg font-semibold border-purple-400/40 hover:bg-purple-200/20 transition-all duration-300"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      
    </main>
  );
}
