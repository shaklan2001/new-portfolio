"use client";

import { motion } from "framer-motion";
import { ExternalLink, Smartphone } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Betterway Paramedic Service App",
    description: "Emergency response mobile application connecting paramedics with real-time dispatch and patient management systems.",
    tech: ["React Native", "Firebase", "Google Maps API", "Push Notifications"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    playStore: "#",
    appStore: "#",
  },
  {
    title: "Betterway User App",
    description: "User-facing companion app with dynamic onboarding, emergency calling, and live tracking features.",
    tech: ["React Native", "Expo", "Real-time Database", "Geolocation"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    playStore: "#",
    appStore: "#",
  },
  {
    title: "UA Sneakers Hub",
    description: "Modern e-commerce platform for sneaker enthusiasts with advanced filtering, cart management, and checkout.",
    tech: ["Next.js", "Stripe", "Supabase", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    link: "#",
  },
  {
    title: "Redfine Gaming Live",
    description: "Interactive gaming showcase with GSAP-driven animations, smooth scrolling, and immersive user experience.",
    tech: ["Next.js", "GSAP", "Framer Motion", "Three.js"],
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 lg:px-16 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing impactful work across mobile and web platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{
                scale: 1.03,
                rotateY: 6,
                rotateX: -6,
              }}
              className="group bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-350"
              style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
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
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-primary/10 border border-primary/20 rounded-full text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.playStore && (
                    <a
                      href={project.playStore}
                      className="flex items-center gap-2 px-4 py-2 bg-secondary/50 hover:bg-secondary rounded-lg transition-colors group/link"
                    >
                      <Smartphone className="w-4 h-4" />
                      <span className="text-sm">Play Store</span>
                    </a>
                  )}
                  {project.appStore && (
                    <a
                      href={project.appStore}
                      className="flex items-center gap-2 px-4 py-2 bg-secondary/50 hover:bg-secondary rounded-lg transition-colors group/link"
                    >
                      <Smartphone className="w-4 h-4" />
                      <span className="text-sm">App Store</span>
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      className="flex items-center gap-2 px-4 py-2 bg-secondary/50 hover:bg-secondary rounded-lg transition-colors group/link"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">View Live</span>
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