"use client";

import { motion } from "framer-motion";
import { ExternalLink, Smartphone, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { LampContainer } from "./ui/lamp";

const projects = [
  {
    title: "Betterway Paramedic Service App",
    description:
      "This app is designed to support Betterway paramedics in managing their daily operations — including appointment schedules, procedure sessions, order management, ticket creation, and booking follow-ups.With features like quick patient check-in, job handover, and real-time escalation handling, the app helps ensure smooth, effective service delivery. It also displays daily performance metrics to help paramedics stay aligned, improve care quality, and serve patients more efficiently",
    tech: ["React Native", "Node.js", "Postgress", "Push Notifications", "Typescript", "Expo", "Shopify Restyle", "Reanimated-2"],
    image: "/assets/projects/service_app.png",
    playStore: "https://play.google.com/store/apps/details?id=com.betterway.service&pcampaignid=web_share",
    appStore: "https://apps.apple.com/in/app/betterway-service/id6747738257BetterWayService",
  },
  {
    title: "Betterway User App",
    description:
      "This app is designed to support BetterWay Ayurvedic doctors and patients in managing their health journey — including appointment booking, Nadi Parikshan report access, document management, Ayurvedic information, and doctor insights. With features like easy scheduling, report tracking, and knowledge access, the app helps ensure smooth, effective care delivery. It also empowers users to stay informed, improve health outcomes, and experience the transformative power of Ayurved.",
    tech: ["React Native", "Expo", "Shopify Restyle", "Reanimated-3", "Skia", "Gravity", "Node.js", "Postgress", "Push Notifications", "Typescript"],
    image: "/assets/projects/betterway_app.png",
    playStore: "https://play.google.com/store/apps/details?id=com.betterway.user.app&pcampaignid=web_share",
    appStore: "https://apps.apple.com/in/app/betterway/id6502288128BetterWay",
  },
  {
    title: "MuscleScript",
    description:
      "This app is designed to support Muscle Script users in managing their personalized fitness journey — including AI-powered workout planning, exercise tracking, and goal-based training adaptations. With features like intelligent routine generation, automatic set and rep tracking, and real-time workout guidance, the app ensures smooth, effective fitness progress. It empowers users to take full control of their training, stay consistent, and achieve their goals — all with the AI coach of their choice.",
    tech: ["React Native", "Expo", "Unistyle", "OpenApi", "OAuth", "RevenueCat", 'Ai'],
    image: "/assets/projects/Feature Graphic.png",
    playStore: "https://play.google.com/store/apps/details?id=com.shubhamdeol.MuscleScript&pcampaignid=web_sharet",
    appStore: "https://apps.apple.com/in/app/musclescript-fitness-app/id6753226583MuscleScript: Fitness App",
  },
  {
    title: "Redfine Gaming Live",
    description:
      "Interactive gaming showcase with GSAP-driven animations, smooth scrolling, and immersive user experience.",
    tech: ["React", "GSAP"],
    image: "/assets/projects/gaminggg.png",
    link: "https://redfine-gaming.netlify.app/",
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden transition-all duration-350"
            >
              <div className="relative h-100 md:h-96 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>

              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
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
                    <a href={project.playStore} target="_blank" className="group/link">
                      <button className="inline-flex h-10 animate-shimmer items-center justify-center rounded-full border border-border bg-[linear-gradient(110deg,#050507,45%,#1a1a1d,55%,#050507)] bg-[length:200%_100%] px-4 font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none text-sm">
                        <Smartphone className="w-4 h-4 mr-2" />
                        Play Store
                        <ArrowUpRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                      </button>
                    </a>
                  )}
                  {project.appStore && (
                    <a href={project.appStore} target="_blank" className="group/link">
                      <button className="inline-flex h-10 animate-shimmer items-center justify-center rounded-full border border-border bg-[linear-gradient(110deg,#050507,45%,#1a1a1d,55%,#050507)] bg-[length:200%_100%] px-4 font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none text-sm">
                        <Smartphone className="w-4 h-4 mr-2" />
                        App Store
                        <ArrowUpRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                      </button>
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" className="group/link">
                      <button className="inline-flex h-10 animate-shimmer items-center justify-center rounded-full border border-border bg-[linear-gradient(110deg,#050507,45%,#1a1a1d,55%,#050507)] bg-[length:200%_100%] px-4 font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none text-sm">
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
