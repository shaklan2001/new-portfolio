"use client";

import { MovingBorderButton } from "./ui/moving-border";
import { BackgroundRipple } from "./ui/background-ripple";
import { GeminiEffect } from "./ui/gemini-effect";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { ShootingStars } from "./ui/shooting-stars";
import { useState, useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";


export default function Hero() {
  const [isAvailable] = useState(true);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      <BackgroundRipple />
      <ShootingStars />
      <GeminiEffect />
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-[95%] mx-auto absolute top-0 left-0 right-0 z-20 flex justify-between items-center py-6 px-4 md:px-8"
      >
        {/* Left - Name */}
        <div className="text-xl md:text-2xl font-bold text-white">
          Nishant Shaklan
        </div>
        
        {/* Right - GitHub */}
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="a"
          href="https://github.com/shaklan2001"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span className="text-white font-medium">shaklan2001</span>
        </HoverBorderGradient>
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center mb-8"
        >
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`w-2.5 h-2.5 rounded-full ${
                isAvailable 
                  ? 'bg-green-400 shadow-[0_0_10px_rgba(34,197,94,0.5)]' 
                  : 'bg-red-400 shadow-[0_0_10px_rgba(239,68,68,0.5)]'
              }`}
            />
            <span className="text-white font-medium text-xs">
              {isAvailable ? "Available for New Projects" : "Currently Working on a Projects"}
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <TextGenerateEffect
              words="Building bold mobile apps that move like magic"
              className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#F7931E]"
            />
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto"
        >
          I blend code and creativity to craft fast, flawless mobile and web experiences.
        </motion.p>

         <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap gap-4 justify-center items-center mb-8"
        >
          {[
            {
              icon: (
                <svg className="w-5 h-5" fill="#8B5CF6" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ),
              text: "AI-Powered Apps"
            },
            {
              icon: (
                <svg className="w-5 h-5" fill="#3B82F6" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              ),
              text: "Subscription Paywalls"
            },
            {
              icon: (
                <svg className="w-5 h-5" fill="#10B981" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              ),
              text: "App Store & Play Store Ready"
            }
          ].map((card, idx) => (
            <motion.div
              key={card.text}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + idx * 0.1, duration: 0.5 }}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 shadow-lg"
            >
              <div>
                {card.icon}
              </div>
              <span className="text-white font-medium text-sm">
                {card.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <MovingBorderButton
            className="bg-background text-foreground hover:bg-background/80"
            data-cal-namespace="15min"
            data-cal-link="nishant-shaklan"
            data-cal-config='{"layout":"month_view"}'
          >
            Hire Me
          </MovingBorderButton>
          
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 rounded-full border border-border hover:border-primary/50 transition-all duration-300 font-medium hover:shadow-[0_0_20px_rgba(247,147,30,0.3)]"
          >
            View Projects →
          </button>
        </motion.div>       
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-center justify-center"
        >
          <svg
            className="w-3 h-3 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}