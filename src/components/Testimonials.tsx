"use client";

import { motion } from "framer-motion";
import { CardStack } from "./ui/card-stack";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: (
      <div className="space-y-4">
        <div className="flex gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-foreground leading-relaxed">
          "Nishant delivered our React Native app ahead of schedule with exceptional quality. 
          His attention to detail and smooth animations made our product stand out."
        </p>
        <div className="pt-4 border-t border-border/50">
          <p className="font-semibold text-foreground">Sarah Chen</p>
          <p className="text-sm text-muted-foreground">Founder, TechStart</p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="space-y-4">
        <div className="flex gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-foreground leading-relaxed">
          "Working with Nishant was a game-changer. He understood our vision and built a 
          beautiful, performant Next.js platform that exceeded expectations."
        </p>
        <div className="pt-4 border-t border-border/50">
          <p className="font-semibold text-foreground">Michael Rodriguez</p>
          <p className="text-sm text-muted-foreground">CTO, BuildFast</p>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="space-y-4">
        <div className="flex gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-foreground leading-relaxed">
          "Incredible work! Nishant transformed our rough idea into a polished MVP in weeks. 
          His code quality and communication are top-notch."
        </p>
        <div className="pt-4 border-t border-border/50">
          <p className="font-semibold text-foreground">Emily Watson</p>
          <p className="text-sm text-muted-foreground">Product Lead, InnovateCo</p>
        </div>
      </div>
    ),
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client Testimonials
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center"
        >
          <CardStack items={testimonials} offset={15} scaleFactor={0.06} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center text-muted-foreground mt-8"
        >
          Click the cards to cycle through testimonials
        </motion.p>
      </div>
    </section>
  );
}