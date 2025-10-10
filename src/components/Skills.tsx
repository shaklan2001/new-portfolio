"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Code2, Smartphone, Server, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    skills: ["React Native", "Expo", "iOS", "Android", "Cross-Platform"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "GraphQL", "Serverless"],
  },
  {
    icon: Database,
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "Firebase", "Supabase", "Redis"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["Git", "AWS", "Docker", "GSAP", "Figma"],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll(".skill-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 px-4 md:px-8 lg:px-16 relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 0 30px rgba(247, 147, 30, 0.2)"
              }}
              className="skill-card bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-secondary/50 rounded-full border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}