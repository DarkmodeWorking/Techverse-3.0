"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  word,
  className,
}: {
  word: string;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(word);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure we are on the client side
  }, []);

  useEffect(() => {
    if (isClient && currentWord !== word) {
      setCurrentWord(word); // Update the word only on the client side
    }
  }, [word, currentWord, isClient]);

  if (!isClient) {
    // Render a placeholder during SSR to prevent hydration mismatch
    return <span className={cn("static-text-class", className)}>...</span>;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
        }}
        className={cn(
          "z-10 inline-block relative text-left font-mono text-neutral-100 px-2",
          className
        )}
        key={currentWord}
      >
        {currentWord.split("").map((letter, letterIndex) => (
          <motion.span
            key={letter + letterIndex}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: letterIndex * 0.05,
              duration: 0.2,
            }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export const CountdownTimer = ({ initialTime }: { initialTime: number }) => {
  const [time, setTime] = useState(initialTime);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Wait for client-side render
  }, []);

  useEffect(() => {
    if (isClient) {
      // Start countdown on client side
      const interval = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);

      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [isClient]);

  if (!isClient) {
    // Render static content during SSR
    return <div>...</div>;
  }

  return (
    <div>
      <FlipWords word={time.toString()} />
    </div>
  );
};
