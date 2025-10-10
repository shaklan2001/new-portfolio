"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Smartphone } from "lucide-react";
import { useState } from "react";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
    color: "#ffffff",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
    color: "#0077b5",
  },
  {
    icon: Smartphone,
    label: "Play Store",
    href: "https://play.google.com",
    color: "#34a853",
  },
  {
    icon: Smartphone,
    label: "App Store",
    href: "https://apps.apple.com",
    color: "#007aff",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const mailtoLink = `mailto:nishant.ns171@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
            Let's Build Together
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's turn your ideas into reality.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 mb-12"
          style={{
            boxShadow: "0 0 40px rgba(247, 147, 30, 0.1)",
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2 text-foreground"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-foreground"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-[#1A110A] via-[#A35709] to-[#F7931E] text-white font-medium py-3 rounded-lg hover:shadow-[0_0_30px_rgba(247,147,30,0.4)] transition-all duration-300"
            >
              Send Message
            </motion.button>
          </form>

          <div className="mt-8 pt-8 border-t border-border/50">
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
              <Mail className="w-5 h-5" />
              <a
                href="mailto:nishant.ns171@gmail.com"
                className="hover:text-primary transition-colors"
              >
                nishant.ns171@gmail.com
              </a>
            </div>

            <div className="flex justify-center gap-4">
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.1, duration: 0.3 }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: `0 0 20px ${link.color}40`,
                  }}
                  className="p-3 bg-secondary/50 border border-border rounded-lg hover:border-primary/50 transition-all"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center text-muted-foreground text-lg"
        >
          Let's build something impactful together.
        </motion.p>
      </div>
    </section>
  );
}