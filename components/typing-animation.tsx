"use client";

import { useEffect, useRef, useState } from "react";

interface TypingAnimationProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function TypingAnimation({ text, speed = 50, className = "" }: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    // Reset when component mounts or text changes
    setDisplayedText("");
    setIsTyping(true);
    currentIndexRef.current = 0;
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const typeNextChar = () => {
      const currentIndex = currentIndexRef.current;
      if (currentIndex < text.length) {
        const char = text.charAt(currentIndex);
        setDisplayedText((prev) => prev + char);
        currentIndexRef.current = currentIndex + 1;
        timeoutRef.current = setTimeout(typeNextChar, speed);
      } else {
        setIsTyping(false);
      }
    };

    // Start typing immediately
    timeoutRef.current = setTimeout(typeNextChar, speed);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, speed]);

  return (
    <span className={className}>
      {displayedText}
      {isTyping && <span className="animate-pulse inline-block">|</span>}
    </span>
  );
}


