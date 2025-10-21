"use client";

import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import MobileNav from "@/components/MobileNav";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      
      <Hero />
      <Skills />
      <Projects />
      <About />
      {/* <Testimonials /> */}
      <Contact />
      <MobileNav />
      
      {/* <footer className="relative py-8 px-4 text-center border-t border-border/50">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Nishant Shaklan. Crafted with precision and passion.
        </p>
      </footer> */}
    </main>
  );
}