"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";

import { speechFormSchema } from "@/lib/schemas";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

import { Download, Loader2, Sparkles } from "lucide-react";
import Link from "next/link";

import Footer from "@/components/Footer";   

type SpeechFormData = z.infer<typeof speechFormSchema>;

const voices = [
  { id: "Kajal", name: "Kajal (Hindi, Female)" },
  { id: "Matthew", name: "Matthew (Male, Natural English)" },
  { id: "Brian", name: "Brian (British Male)" },
  { id: "Joey", name: "Joey (Male, English)" },
];

async function generateSpeech(text: string, voice: string) {
  const res = await fetch("/api/generate-speech", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, voice }),
  });

  return res.json();
}

export function PollyTalk() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [improvedText, setImprovedText] = useState<string | null>(null);

  const { toast } = useToast();

  const form = useForm<SpeechFormData>({
    resolver: zodResolver(speechFormSchema),
    defaultValues: {
      text: "",
      voice: "Kajal",
    },
  });

  const onSubmit = async (data: SpeechFormData) => {
    setIsGenerating(true);
    setAudioUrl(null);
    setImprovedText(null);

    const result = await generateSpeech(data.text, data.voice);

    if (result.success) {
      setAudioUrl(result.audioUrl);
      setImprovedText(result.improvedText);
      toast({
        title: "Speech Ready!",
        description: "Enjoy your generated audio file.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: result.error,
      });
    }

    setIsGenerating(false);
  };

  return (
    <div className="w-full flex flex-col items-center gap-10 pb-10">

      {/* MAIN CARD */}
      <Card
        className="
        w-full max-w-3xl rounded-2xl border bg-white/5
        backdrop-blur-xl shadow-[0_0_40px_rgba(255,255,255,0.08)]
        transition-all duration-300 border-purple-400/40 mt-10
      "
      >


        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-500">
            🎤 Text-to-Speech Studio
          </CardTitle>
          <CardDescription className="text-gray-400 text-base">
            Generate natural AI-powered speech instantly.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* TEXT AREA */}
              <FormField
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500">Your Text</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message here..."
                        {...field}
                        disabled={isGenerating}
                        className="
                          min-h-[150px] bg-white/10 border-gray-500 text-black 
                          placeholder:text-black focus:ring-2 focus:ring-purple-400/40
                        "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* VOICE SELECT */}
              <FormField
                control={form.control}
                name="voice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500">Select Voice</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      disabled={isGenerating}
                    >
                      <FormControl>
                        <SelectTrigger
                          className="
                          bg-white/10 border-gray-500 text-gray-500
                          hover:border-purple-300/40 transition
                        "
                        >
                          <SelectValue placeholder="Select Voice" />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent className="bg-[#30333a] text-gray-500 border-white/10">
                        {voices.map((v) => (
                          <SelectItem
                            key={v.id}
                            value={v.id}
                            className="hover:bg-white/10 cursor-pointer"
                          >
                            {v.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* GENERATE BUTTON */}
              <Button
                type="submit"
                disabled={isGenerating}
                className="
                  w-full h-12 text-lg font-semibold rounded-xl
                  bg-gradient-to-r from-purple-600 to-indigo-600 
                  hover:shadow-[0_0_15px_rgba(139,92,246,0.6)]
                  transition-all duration-300
                "
              >
                {isGenerating ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>
                    <Sparkles className="mr-2" /> Generate Speech
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>

        {/* AUDIO + IMPROVED TEXT */}
        {audioUrl && (
          <div className="px-6 pb-8 space-y-6">
            <Separator className="bg-white/20" />

            <h3 className="text-xl font-semibold text-gray-500">
              🔊 Your Generated Audio
            </h3>

            <div
              className="
                flex flex-col sm:flex-row items-center gap-4 
                rounded-xl border bg-white/10 border-white/20 p-4
              "
            >
              <audio controls className="w-full" src={audioUrl} />

              <Button
                asChild
                variant="secondary"
                size="icon"
                className="bg-gray-400 hover:bg-white/30"
              >
                <a href={audioUrl} download="speech.mp3">
                  <Download className="h-6 w-6" />
                </a>
              </Button>
            </div>

            {improvedText && (
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-500">
                  ✨ AI-Enhanced Text
                </h4>
                <div className="rounded-md border p-4 bg-white/10 border-white/20 text-gray-600">
                  {improvedText}
                </div>
              </div>
            )}
          </div>
        )}

        <CardFooter />
      </Card>
      <Footer />
    </div>
  );
}
