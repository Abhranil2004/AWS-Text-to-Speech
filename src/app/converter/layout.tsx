import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AWS Text-to-Speech",
  description: "AI-powered text-to-speech conversion",
};

export default function ConverterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
  <Header/>
  {children}
  </>;
}
