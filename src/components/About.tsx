"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 lg:px-16 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            About Me
          </h2>

          <div className="flex flex-col items-center gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20"
              style={{
                boxShadow: "0 0 40px rgba(247, 147, 30, 0.2)",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                alt="Nishant Shaklan"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="max-w-3xl"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent">
                Freelance Full Stack & React Native Developer
              </h3>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  With <span className="text-primary font-semibold">1+ year of professional experience</span>, 
                  I specialize in transforming ideas into polished, production-ready applications.
                </p>
                
                <p>
                  My focus is on delivering <span className="text-foreground font-medium">fast, scalable MVPs</span> that 
                  combine elegant design with robust functionality. From mobile-first experiences to complex web platforms, 
                  I bring precision and craftsmanship to every project.
                </p>
                
                <p>
                  I work with <span className="text-foreground font-medium">technical product leads and startup founders</span> who 
                  value speed, quality, and attention to detail. My approach combines clean code, smooth animations, 
                  and user-centric design to create experiences that stand out.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { label: "Projects Delivered", value: "15+" },
              { label: "Years Experience", value: "1+" },
              { label: "Client Satisfaction", value: "100%" },
              { label: "Technologies", value: "20+" },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + idx * 0.1, duration: 0.5 }}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-[0_0_20px_rgba(247,147,30,0.2)]"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}