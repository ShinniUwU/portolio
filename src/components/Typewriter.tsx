'use client';

import { useEffect, useState, useRef } from 'react';

interface TypewriterProps {
  phrases: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  isList?: boolean; // New prop to determine if it should render as a list
}

function Typewriter({ 
  phrases, 
  typingSpeed = 100, 
  pauseDuration = 2000,
  isList = false 
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const completedPhrases = useRef<string[]>([]);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    let charIndex = 0;

    const typePhrase = () => {
      if (charIndex < currentPhrase.length) {
        setDisplayedText(prev => {
          const newText = currentPhrase.substring(0, charIndex + 1);
          if (isList) {
            if (charIndex === 0) {
              return [...completedPhrases.current, newText];
            }
            return [...completedPhrases.current, newText];
          }
          return [newText];
        });
        charIndex++;
        timeoutRef.current = setTimeout(typePhrase, typingSpeed);
      } else {
        setIsTyping(false);
        if (!isList) {
          // For single line mode, cycle through phrases
          timeoutRef.current = setTimeout(() => {
            setDisplayedText([]);
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
            setIsTyping(true);
          }, pauseDuration);
        } else if (currentPhraseIndex < phrases.length - 1) {
          // For list mode, add to completed phrases and continue
          completedPhrases.current = [...completedPhrases.current, currentPhrase];
          timeoutRef.current = setTimeout(() => {
            setCurrentPhraseIndex(prev => prev + 1);
            setIsTyping(true);
          }, pauseDuration / 2);
        } else {
          // Start over with empty list after a longer pause
          timeoutRef.current = setTimeout(() => {
            completedPhrases.current = [];
            setDisplayedText([]);
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
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentPhraseIndex, phrases, typingSpeed, pauseDuration, isTyping, isList]);

  return (
    <div className="text-gray-300">
      {isList ? (
        <ul className="list-disc list-inside space-y-2">
          {displayedText.map((text, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span>{text}</span>
              {index === displayedText.length - 1 && isTyping && (
                <span className="animate-pulse">|</span>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <span>
          {displayedText[0]}
          {isTyping && <span className="animate-pulse">|</span>}
        </span>
      )}
    </div>
  );
}

export default Typewriter;
