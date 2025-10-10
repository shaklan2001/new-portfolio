"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const MovingBorderButton = ({
  children,
  className,
  containerClassName,
  borderClassName,
  duration = 0.6,
  ...otherProps
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  [key: string]: any;
}) => {
  return (
    <button
      className={cn(
        "relative p-[1px] overflow-hidden rounded-full",
        containerClassName
      )}
      {...otherProps}
    >
      <div className="absolute inset-0">
        <motion.div
          className={cn(
            "h-full w-full opacity-100",
            borderClassName
          )}
          style={{
            background: "linear-gradient(135deg, #1A110A 0%, #A35709 50%, #F7931E 100%)",
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: duration * 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      <div
        className={cn(
          "relative bg-background rounded-full px-8 py-3 text-foreground font-medium",
          className
        )}
      >
        {children}
      </div>
    </button>
  );
};