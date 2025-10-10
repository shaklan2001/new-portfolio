"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const GeminiEffect = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <motion.div
        className="w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(247, 147, 30, 0.3) 0%, rgba(163, 87, 9, 0.2) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          scale: [0.98, 1.02, 0.98],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};