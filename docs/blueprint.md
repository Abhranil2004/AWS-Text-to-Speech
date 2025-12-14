# **App Name**: PollyTalk

## Core Features:

- Text Input: A textarea component where users can input text to be converted to speech.
- Voice Selection: A dropdown menu to select from a list of predefined Amazon Polly voices (e.g., Joanna, Matthew).
- Speech Conversion: Converts the input text into speech using Amazon Polly API, handling any API calls to AWS services. Acts as a tool by making its decisions based on context to convert appropriate input into desired speech patterns.
- Audio Playback: An audio player component to play the generated speech.
- Audio Download: A button to download the generated audio file in MP3 format.
- Loading Animation: A loading animation (e.g., spinner or pulsing button) displayed while the text is being converted to speech.
- Success Message: Display a brief success message, such as 'Speech generated successfully!' after conversion.

## Style Guidelines:

- Primary color: Dark charcoal (#333333), providing a sophisticated base.
- Background color: Deep gray (#222222), ensuring comfortable contrast.
- Accent color: Electric blue (#7DF9FF) to highlight interactive elements.
- Body and headline font: 'Roboto', a sans-serif for readability.
- Use Lucide React icons for a clean and modern aesthetic.
- Card layout centered on the screen, using grid or flexbox for responsiveness.
- Use Framer Motion for smooth animations and transitions, especially for button hover effects and component fade-ins.