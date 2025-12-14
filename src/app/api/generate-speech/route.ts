import { NextResponse } from "next/server";
import { PollyClient, SynthesizeSpeechCommand } from "@aws-sdk/client-polly";

const polly = new PollyClient({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

// Only working voices after removing Aditi + Raveena
const voiceConfig: Record<
  string,
  { engine: "neural"; language: string }
> = {
  Kajal: { engine: "neural", language: "hi-IN" },

  // Male Voices
  Matthew: { engine: "neural", language: "en-US" },
  Brian: { engine: "neural", language: "en-GB" },
  Joey: { engine: "neural", language: "en-US" },
};

export async function POST(req: Request) {
  try {
    const { text, voice } = await req.json();

    if (!text || text.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Text is required." },
        { status: 400 }
      );
    }

    if (!voiceConfig[voice]) {
      return NextResponse.json(
        { success: false, error: "Invalid voice selected." },
        { status: 400 }
      );
    }

    const { engine, language } = voiceConfig[voice];

    const command = new SynthesizeSpeechCommand({
      Text: text,
      OutputFormat: "mp3",
      VoiceId: voice,
      Engine: engine,
      LanguageCode: language,
    });

    const result = await polly.send(command);

    if (!result.AudioStream) {
      return NextResponse.json(
        { success: false, error: "AWS Polly returned no audio stream." },
        { status: 500 }
      );
    }

    const bytes = await result.AudioStream.transformToByteArray();
    const base64Audio = Buffer.from(bytes).toString("base64");

    return NextResponse.json({
      success: true,
      audioUrl: `data:audio/mp3;base64,${base64Audio}`,
      improvedText: text,
    });
  } catch (error: any) {
    console.error("POLLY ERROR:", error);
    return NextResponse.json(
      { success: false, error: error.message || "AWS Polly failed." },
      { status: 500 }
    );
  }
}
