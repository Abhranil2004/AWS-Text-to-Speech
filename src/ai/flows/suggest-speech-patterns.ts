'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting speech patterns based on user input text.
 *
 * It includes:
 * - `suggestSpeechPatterns`: An async function that takes user input text and returns suggested speech patterns.
 * - `SuggestSpeechPatternsInput`: The input type for the `suggestSpeechPatterns` function, which is a text string.
 * - `SuggestSpeechPatternsOutput`: The output type for the `suggestSpeechPatterns` function, which is a string containing the suggested speech patterns.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestSpeechPatternsInputSchema = z.string().describe('The text for which to suggest speech patterns.');
export type SuggestSpeechPatternsInput = z.infer<typeof SuggestSpeechPatternsInputSchema>;

const SuggestSpeechPatternsOutputSchema = z.string().describe('Suggested speech patterns for the input text.');
export type SuggestSpeechPatternsOutput = z.infer<typeof SuggestSpeechPatternsOutputSchema>;


export async function suggestSpeechPatterns(input: SuggestSpeechPatternsInput): Promise<SuggestSpeechPatternsOutput> {
  return suggestSpeechPatternsFlow(input);
}

const suggestSpeechPatternsPrompt = ai.definePrompt({
  name: 'suggestSpeechPatternsPrompt',
  input: {schema: SuggestSpeechPatternsInputSchema},
  output: {schema: SuggestSpeechPatternsOutputSchema},
  prompt: `You are an AI assistant specialized in suggesting speech patterns for text-to-speech conversion.
  Given the following text, suggest speech patterns to use to generate speech with the desired emotional tone and emphasis.
  Provide your response in a clear and concise manner.

  Text: {{{$input}}}
  `, 
});

const suggestSpeechPatternsFlow = ai.defineFlow(
  {
    name: 'suggestSpeechPatternsFlow',
    inputSchema: SuggestSpeechPatternsInputSchema,
    outputSchema: SuggestSpeechPatternsOutputSchema,
  },
  async input => {
    const {text} = await suggestSpeechPatternsPrompt(input);
    return text!;
  }
);
