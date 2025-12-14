import { z } from "zod";

export const speechFormSchema = z.object({
  text: z.string().min(10, { message: "Please enter at least 10 characters." }).max(2000, { message: "Text cannot exceed 2000 characters." }),
  voice: z.string({ required_error: "Please select a voice." }),
});

export type SpeechFormState = z.infer<typeof speechFormSchema>;
