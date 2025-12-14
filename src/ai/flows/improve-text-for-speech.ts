'use server';
/**
 * @fileOverview An AI agent that improves text for speech synthesis.
 *
 * - improveTextForSpeech - A function that handles the text improvement process.
 * - ImproveTextForSpeechInput - The input type for the improveTextForSpeech function.
 * - ImproveTextForSpeechOutput - The return type for the improveTextForSpeech function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ImproveTextForSpeechInputSchema = z.string().describe('The text to improve for speech synthesis.');
export type ImproveTextForSpeechInput = z.infer<typeof ImproveTextForSpeechInputSchema>;

const ImproveTextForSpeechOutputSchema = z.object({
  improvedText: z.string().describe('The improved text for speech synthesis.'),
});
export type ImproveTextForSpeechOutput = z.infer<typeof ImproveTextForSpeechOutputSchema>;

export async function improveTextForSpeech(input: ImproveTextForSpeechInput): Promise<ImproveTextForSpeechOutput> {
  return improveTextForSpeechFlow(input);
}

const prompt = ai.definePrompt({
  name: 'improveTextForSpeechPrompt',
  input: {schema: ImproveTextForSpeechInputSchema},
  output: {schema: ImproveTextForSpeechOutputSchema},
  prompt: `You are an expert in improving text for speech synthesis.

  Your goal is to take the user provided text and improve it to sound more natural and professional when converted to speech.
  Correct any grammatical errors and suggest more natural-sounding phrasing.

  Original Text: {{{$input}}}
  Improved Text: `,
});

const improveTextForSpeechFlow = ai.defineFlow(
  {
    name: 'improveTextForSpeechFlow',
    inputSchema: ImproveTextForSpeechInputSchema,
    outputSchema: ImproveTextForSpeechOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
