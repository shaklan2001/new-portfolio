"use client";

import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "The understand of Pixel Prefect UI and the ablity to solve problem is best i have seen. Working with nishnat feel that every problem is solved with ease.",
    name: "Victor Chodary",
    title: "CTO, betterway",
  },
  {
    quote:
      "Nishant is a great developer and he is always willing to help. He is a great team player and he is always willing to help. He is a great team player and he is always willing to help.",
    name: "Shubham Chaudhary",
    title: "Founder, MuscleScript",
  },
  {
    quote:
      "Nishant is a great developer and he is always willing to help. He is a great team player and he is always willing to help. He is a great team player and he is always willing to help.",
    name: "Zyan Mehra",
    title: "CEO, TagCash",
  }
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
            Testimonials
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What people say about my work and working with me 
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