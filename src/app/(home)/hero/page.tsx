'use client';

import Link from 'next/link';
import Typewriter from '@/components/Typewriter';

const phrases = [
  "A passionate software engineer.",
  "A dedicated systems administrator.",
  "Lifelong learner and tech enthusiast."
];

const listPhrases = [
  "Full Stack Development",
  "System Administration",
  "Cloud Architecture",
  "DevOps Practices",
  "Security Implementation"
];

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-300 to-white bg-clip-text text-transparent">
          Hi, I'm Emily
        </h1>
        <div className="text-xl md:text-2xl max-w-3xl mx-auto mb-10">
          <Typewriter 
            phrases={phrases}
            typingSpeed={80}
            pauseDuration={2000}
          />
        </div>
        <div className="text-left max-w-xl mx-auto mb-10">
          <h2 className="text-2xl font-semibold mb-4">Specializing in:</h2>
          <Typewriter 
            phrases={listPhrases}
            typingSpeed={50}
            pauseDuration={1000}
            isList={true}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link 
            href="#work"
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:opacity-90 transition"
          >
            My Work
          </Link>
          <Link 
            href="#contact"
            className="px-8 py-4 bg-white/10 rounded-full text-white font-semibold hover:bg-white/20 transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
} 