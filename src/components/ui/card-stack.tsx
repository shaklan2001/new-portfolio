"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const CardStack = ({
  items,
  offset = 10,
  scaleFactor = 0.06,
}: {
  items: { id: number; content: React.ReactNode }[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const [cards, setCards] = useState(items);

  const handleCardClick = () => {
    setCards((prevCards) => {
      const newArray = [...prevCards];
      newArray.unshift(newArray.pop()!);
      return newArray;
    });
  };

  return (
    <div className="relative h-60 w-full max-w-md mx-auto">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className={cn(
              "absolute bg-card border border-border rounded-xl p-6 shadow-xl cursor-pointer w-full",
              "hover:shadow-2xl transition-shadow duration-300"
            )}
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -offset,
              scale: 1 - index * scaleFactor,
              zIndex: cards.length - index,
            }}
            onClick={handleCardClick}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 20px rgba(247, 147, 30, 0.3)",
            }}
          >
            {card.content}
          </motion.div>
        );
      })}
    </div>
  );
};