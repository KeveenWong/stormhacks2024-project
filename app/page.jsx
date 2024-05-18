'use client';
// pages/index.js

import Head from 'next/head';
import SpeechCard from '../components/SpeechCard';

export default function Home() {
  const sampleText = "Hello, this is a simulated speech being displayed in the card.";
  return (
    <div>
      <Head>
        <title>Speech Simulation</title>
      </Head>
      <main>
        <h1>Speech Card</h1>
        <SpeechCard text={sampleText} />
        <button onClick={() => console.log("Button clicked!")}>Click me</button>
      </main>
    </div>
  );
}