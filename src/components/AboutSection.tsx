"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 50 }); // Reduced offset for mobile trigger
  }, []);

  const techStack = [
    "React", "Next.js", "TailwindCSS", "AWS Polly", 
    "Node.js", "JavaScript", "Vercel", "Lucide Icons"
  ];

  return (
    <main className="min-h-screen text-white relative overflow-hidden">
      
      {/* --- Intro Section --- */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 px-6 max-w-6xl mx-auto relative">
        {/* Background Blob - Resized for mobile */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[700px] md:h-[700px] rounded-full blur-[80px] md:blur-[150px] bg-purple-900/30" />
        </div>

        <h1
          data-aos="fade-up"
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center tracking-tight bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent mb-10 md:mb-16 leading-tight"
        >
          About Our Project
        </h1>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Container */}
          <div data-aos="fade-right" className="flex justify-center order-2 md:order-1">
            <img
              src="/project-demo.png"
              alt="Project Preview"
              className="w-full max-w-sm md:max-w-md rounded-2xl shadow-xl border border-white/10 hover:scale-[1.02] transition-all duration-300"
            />
          </div>

          {/* Text Content */}
          <div data-aos="fade-left" className="order-1 md:order-2 text-center md:text-left">
            <p className="text-gray-400 md:text-gray-500 text-base md:text-lg leading-relaxed">
              This is a modern <strong>AI Text-to-Speech Converter</strong>{" "}
              built using <strong>AWS Polly</strong>. Users can convert any text into
              premium-quality, human-like audio. Currently, the app supports{" "}
              <strong>4 different AWS Polly voices</strong>, allowing users to
              choose the voice that fits their needs.
            </p>

            <p className="text-gray-400 md:text-gray-500 text-base md:text-lg mt-4 leading-relaxed">
              The project focuses on speed, stability, smooth UI and the best
              audio clarity provided by Amazon Polly’s neural engine.
            </p>
          </div>
        </div>
      </section>

      {/* --- Tech Stack Infinite Scroll --- */}
      <section className="py-8 md:py-10 overflow-hidden bg-white/5 md:bg-transparent">
        <div className="w-full whitespace-nowrap overflow-hidden relative">
          <div className="animate-scroll inline-block">
            {/* Render list twice for seamless loop */}
            {[...techStack, ...techStack].map((tech, index) => (
              <span 
                key={index} 
                className="inline-block mx-6 md:mx-10 text-xl md:text-2xl font-semibold text-gray-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .animate-scroll {
          animation: scroll-left 25s linear infinite;
        }
        /* Pause scroll on hover for better UX */
        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
        }
      `}</style>

      <div className="max-w-4xl mx-auto h-px bg-white/10 my-12 md:my-16"></div>

      {/* --- Team Section --- */}
      <section className="px-6 max-w-6xl mx-auto mb-20">
        <h2
          data-aos="fade-right"
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-center tracking-tight bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent"
        >
          Our Team Members
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10">
          {[
            { id: 1, name: "Abhranil Dutta", img: "/members/Abhranil-Dutta.png", roll: "14542723002"},
            { id: 2, name: "Avijit Dey", img: "/members/Avijit-Dey.jpeg" , roll: "14542723028"},
            { id: 3, name: "Tista Samui", img: "/members/Tista-Samui.jpg" , roll: "14542723136"},
            { id: 4, name: "Sritama Ghosh", img: "/members/Sritama-Ghosh.jpg" , roll: "14542723119"},
            { id: 5, name: "PALAS MALAKAR", img: "/members/PALAS-MALAKAR.jpg" , roll: "14542723063"},
            { id: 6, name: "Milan Pradhan", img: "/members/Milan-Pradhan.JPG" , roll: "14542723054"},
          ].map((m, index) => (
            <div
              key={m.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100} // Slightly faster delay
              className="group relative overflow-hidden rounded-xl shadow-lg bg-[#20252b] cursor-pointer"
            >
              {/* Image Aspect Ratio wrapper */}
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500"
                />
              </div>

              {/* Overlay - visible on hover for desktop, tap for mobile */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4 text-center backdrop-blur-sm">
                <p className="text-xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{m.name}</p>
                <p className="text-sm font-medium text-purple-300 tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{m.roll}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}