"use client";

import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Nishant delivered our React Native app ahead of schedule with exceptional quality. His attention to detail and smooth animations made our product stand out.",
    name: "Sarah Chen",
    title: "Founder, TechStart",
  },
  {
    quote:
      "Working with Nishant was a game-changer. He understood our vision and built a beautiful, performant Next.js platform that exceeded expectations.",
    name: "Michael Rodriguez",
    title: "CTO, BuildFast",
  },
  {
    quote:
      "Incredible work! Nishant transformed our rough idea into a polished MVP in weeks. His code quality and communication are top-notch.",
    name: "Emily Watson",
    title: "Product Lead, InnovateCo",
  },
  {
    quote:
      "Nishant's expertise in React Native and Next.js is unmatched. He delivered a flawless mobile app that our users absolutely love.",
    name: "David Kim",
    title: "CEO, MobileFirst",
  },
  {
    quote:
      "Professional, reliable, and incredibly talented. Nishant brought our vision to life with clean code and beautiful UI/UX design.",
    name: "Lisa Thompson",
    title: "Design Director, CreativeCo",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 md:px-8 lg:px-16 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client Testimonials
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="h-[30rem] rounded-md flex flex-col antialiased bg-background items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
            className="[mask-image:linear-gradient(to_right,transparent,white,white,transparent)]"
          />
        </motion.div>
      </div>
    </section>
  );
}