"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const wordsArray = words.split(" ");

  return (
    <div className={cn("", className)}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: idx * 0.03,
            ease: "easeOut",
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};