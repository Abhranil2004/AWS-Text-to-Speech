import { PollyTalk } from "@/components/polly-talk";
import { Mic } from "lucide-react";

export default function ConverterPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4  pt-28">

      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 via-transparent to-transparent blur-3xl"></div>

      <div className="mx-auto w-full max-w-3xl relative z-10">

        <div className="text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-xl p-5 border border-white/10 shadow-xl mb-4">
            <Mic className="h-10 w-10 text-purple-400" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            AI Text-to-Speech Studio
          </h1>

          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            Convert your words into ultra-natural speech. Powered by AWS Polly + AI text enhancement.
          </p>
        </div>

        <div className="my-10">
          <PollyTalk />
        </div>

      </div>
    </main>
  );
}
