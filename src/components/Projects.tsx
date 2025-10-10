"use client";

import { motion } from "framer-motion";
import { ExternalLink, Smartphone, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { LampContainer } from "./ui/lamp";

const projects = [
  {
    title: "Betterway Paramedic Service App",
    description:
      "Emergency response mobile application connecting paramedics with real-time dispatch and patient management systems.",
    tech: ["React Native", "Firebase", "Google Maps API", "Push Notifications"],
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    playStore: "#",
    appStore: "#",
  },
  {
    title: "Betterway User App",
    description:
      "User-facing companion app with dynamic onboarding, emergency calling, and live tracking features.",
    tech: ["React Native", "Expo", "Real-time Database", "Geolocation"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    playStore: "#",
    appStore: "#",
  },
  {
    title: "UA Sneakers Hub",
    description:
      "Modern e-commerce platform for sneaker enthusiasts with advanced filtering, cart management, and checkout.",
    tech: ["Next.js", "Stripe", "Supabase", "TailwindCSS"],
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    link: "#",
  },
  {
    title: "Redfine Gaming Live",
    description:
      "Interactive gaming showcase with GSAP-driven animations, smooth scrolling, and immersive user experience.",
    tech: ["Next.js", "GSAP", "Framer Motion", "Three.js"],
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 lg:px-16 relative">
      <div className="max-w-7xl mx-auto">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Featured Projects
          </motion.h1>
        </LampContainer>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden transition-all duration-350"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-secondary/50 border border-border rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.playStore && (
                    <a href={project.playStore} className="group/link">
                      <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-border bg-[linear-gradient(110deg,#050507,45%,#1a1a1d,55%,#050507)] bg-[length:200%_100%] px-6 font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-border focus:ring-offset-2 focus:ring-offset-background">
                        <Smartphone className="w-4 h-4 mr-2" />
                        Play Store
                        <ArrowUpRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                      </button>
                    </a>
                  )}
                  {project.appStore && (
                    <a href={project.appStore} className="group/link">
                      <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-border bg-[linear-gradient(110deg,#050507,45%,#1a1a1d,55%,#050507)] bg-[length:200%_100%] px-6 font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-border focus:ring-offset-2 focus:ring-offset-background">
                        <Smartphone className="w-4 h-4 mr-2" />
                        App Store
                        <ArrowUpRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                      </button>
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} className="group/link">
                      <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-border bg-[linear-gradient(110deg,#050507,45%,#1a1a1d,55%,#050507)] bg-[length:200%_100%] px-6 font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-border focus:ring-offset-2 focus:ring-offset-background">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                        <ArrowUpRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
