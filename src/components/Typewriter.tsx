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

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    let charIndex = 0;

    const typePhrase = () => {
      if (charIndex < currentPhrase.length) {
        setDisplayedText(prev => {
          const newText = currentPhrase.substring(0, charIndex + 1);
          if (isList) {
            // If we're at the first character, add new item to array
            if (charIndex === 0) {
              return [...prev, newText];
            }
            // Otherwise update the last item
            return [...prev.slice(0, -1), newText];
          }
          // For single line mode, just return array with one item
          return [newText];
        });
        charIndex++;
        timeoutRef.current = setTimeout(typePhrase, typingSpeed);
      } else {
        setIsTyping(false);
        if (!isList) {
          timeoutRef.current = setTimeout(() => {
            setDisplayedText([]);
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
            setIsTyping(true);
          }, pauseDuration);
        } else if (currentPhraseIndex < phrases.length - 1) {
          timeoutRef.current = setTimeout(() => {
            setCurrentPhraseIndex(prev => prev + 1);
            setIsTyping(true);
          }, pauseDuration / 2);
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
