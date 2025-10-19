"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const XIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/shaklan2001",
    color: "#ffffff",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nishant-shaklan-b68a151a6/",
    color: "#ffffff",
  },
  {
    icon: XIcon,
    label: "X",
    href: "https://x.com/NShaklan",
    color: "#ffffff",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:nishant.ns171@gmail.com",
    color: "#ffffff",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to collaborate? Let's build something amazing together.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl">
            {socialLinks.map((link, idx) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <CardSpotlight
                  radius={200}
                  color="rgba(255, 255, 255, 0.1)"
                  className="group"
                >
                  <motion.a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center justify-center p-8 h-32 bg-card/50 backdrop-blur-sm border border-border rounded-2xl transition-all duration-300 hover:border-white/50"
                    aria-label={link.label}
                  >
                    <div className="p-3 bg-secondary/50 rounded-xl mb-3 group-hover:bg-white/10 transition-colors">
                      <link.icon 
                        className="w-6 h-6 text-muted-foreground group-hover:text-white transition-colors" 
                        style={{ color: link.color }}
                      />
                    </div>
                    <span className="text-sm font-medium text-foreground group-hover:text-white transition-colors">
                      {link.label}
                    </span>
                  </motion.a>
                </CardSpotlight>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center text-muted-foreground text-lg mt-12"
        >
          Let's build something impactful together.
        </motion.p>
      </div>
    </section>
  );
}