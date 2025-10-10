"use client";

import { motion } from "framer-motion";
import { Home, Code2, Briefcase, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { icon: Home, label: "Home", href: "#" },
  { icon: Code2, label: "Skills", href: "#skills" },
  { icon: Briefcase, label: "Projects", href: "#projects" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

export default function MobileNav() {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide nav when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);

      // Update active section based on scroll position
      const sections = ["home", "skills", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section === "home" ? "" : section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleClick = (href: string, label: string) => {
    const sectionId = href.replace("#", "");
    if (sectionId) {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setActiveSection(label.toLowerCase());
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : 100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden"
    >
      <div className="bg-card/80 backdrop-blur-lg border border-border rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center gap-6">
          {navItems.map((item, idx) => {
            const isActive = activeSection === item.label.toLowerCase();
            return (
              <motion.button
                key={item.label}
                onClick={() => handleClick(item.href, item.label)}
                className="relative flex flex-col items-center gap-1 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground group-hover:text-primary"
                  }`}
                  style={{
                    boxShadow: isActive
                      ? "0 0 15px rgba(247, 147, 30, 0.3)"
                      : "none",
                  }}
                >
                  <item.icon className="w-5 h-5" />
                </div>
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-2 w-1 h-1 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}