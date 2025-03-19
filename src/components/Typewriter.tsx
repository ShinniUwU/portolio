'use client';

import { useEffect, useState, useRef } from 'react';

interface TypewriterProps {
  phrases: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  isList?: boolean; // if true, each phrase is rendered as a list item
}

// ────────────── LIST MODE ──────────────
function TypewriterList({
  phrases,
  typingSpeed,
  pauseDuration,
}: {
  phrases: string[];
  typingSpeed: number;
  pauseDuration: number;
}) {
  const [displayedTexts, setDisplayedTexts] = useState<string[]>([]);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const completedPhrases = useRef<string[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    let charIndex = 0;

    const typePhrase = () => {
      if (charIndex < currentPhrase.length) {
        const newText = currentPhrase.substring(0, charIndex + 1);
        setDisplayedTexts([...completedPhrases.current, newText]);
        charIndex++;
        timeoutRef.current = setTimeout(typePhrase, typingSpeed);
      } else {
        setIsTyping(false);
        if (currentPhraseIndex < phrases.length - 1) {
          // store completed phrase and move on after a short pause
          completedPhrases.current = [...completedPhrases.current, currentPhrase];
          timeoutRef.current = setTimeout(() => {
            setCurrentPhraseIndex((prev) => prev + 1);
            setIsTyping(true);
          }, pauseDuration / 2);
        } else {
          // reset the list after a longer pause
          timeoutRef.current = setTimeout(() => {
            completedPhrases.current = [];
            setDisplayedTexts([]);
            setCurrentPhraseIndex(0);
            setIsTyping(true);
          }, pauseDuration * 2);
        }
      }
    };

    if (isTyping) {
      typePhrase();
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentPhraseIndex, isTyping, phrases, typingSpeed, pauseDuration]);

  return (
    <div className="text-gray-300">
      <ul className="list-disc list-inside space-y-2">
        {displayedTexts.map((text, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span>{text}</span>
            {index === displayedTexts.length - 1 && isTyping && (
              <span className="animate-pulse">|</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ────────────── SINGLE-LINE MODE ──────────────
function TypewriterSingle({
  phrases,
  typingSpeed,
  pauseDuration,
}: {
  phrases: string[];
  typingSpeed: number;
  pauseDuration: number;
}) {
  // Use a state machine with two phases: 'typing' and 'deleting'
  const [phase, setPhase] = useState<'typing' | 'deleting'>('typing');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  const currentPhrase = phrases[currentPhraseIndex];

  // Update displayedText based on current charIndex
  useEffect(() => {
    setDisplayedText(currentPhrase.substring(0, charIndex));
  }, [charIndex, currentPhrase]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (phase === 'typing') {
      if (charIndex < currentPhrase.length) {
        timeout = setTimeout(() => {
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        // When full phrase is displayed, pause then switch to deletion
        timeout = setTimeout(() => {
          setPhase('deleting');
        }, pauseDuration);
      }
    } else if (phase === 'deleting') {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setCharIndex((prev) => prev - 1);
        }, typingSpeed);
      } else {
        // When deletion is complete, move to next phrase and restart typing
        timeout = setTimeout(() => {
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          setPhase('typing');
        }, typingSpeed);
      }
    }
    return () => clearTimeout(timeout);
  }, [phase, charIndex, currentPhrase.length, typingSpeed, pauseDuration, phrases.length]);

  return (
    <div className="text-gray-300">
      <span>
        {displayedText}
        <span className="animate-pulse">|</span>
      </span>
    </div>
  );
}

// ────────────── MAIN COMPONENT ──────────────
export default function Typewriter({
  phrases,
  typingSpeed = 100,
  pauseDuration = 2000,
  isList = false,
}: TypewriterProps) {
  return isList ? (
    <TypewriterList phrases={phrases} typingSpeed={typingSpeed} pauseDuration={pauseDuration} />
  ) : (
    <TypewriterSingle phrases={phrases} typingSpeed={typingSpeed} pauseDuration={pauseDuration} />
  );
}
