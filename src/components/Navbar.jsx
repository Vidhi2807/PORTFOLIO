import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/me.jpg";

/* simple logo avatar */
function LogoAvatar({ size = 12 }) {
  return (
    <motion.div
      className="relative flex-shrink-0"
      whileHover={{ scale: 1.12 }}
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
    >
      <img
        src={logo}
        alt="Vidhi Mandaliya"
        className="relative rounded-full object-cover shadow-[0_0_15px_rgba(255,255,255,0.1)] border-2 border-white/10"
        style={{ width: `${size * 4}px`, height: `${size * 4}px` }}
      />
    </motion.div>
  );
}

const navLinks = [
  { name: "About",        to: "/about" },
  { name: "Education",    to: "/education" },
  { name: "Skills",       to: "/skills" },
  { name: "Projects",     to: "/projects" },
  { name: "Certificates", to: "/certificates" },
  { name: "Hackathons",   to: "/hackathons" },
  { name: "Figma",        to: "/figma" },
  { name: "Contact",      to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass py-4 shadow-xl" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <LogoAvatar size={12} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={link.to}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden relative z-[60]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 bg-white/5 rounded-full text-foreground/70 hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Screen Dimming Overlay */}
            <motion.div 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }} 
               exit={{ opacity: 0 }} 
               onClick={() => setIsOpen(false)}
               className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] md:hidden"
            />
            
            {/* Right Side Sliding Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80vw] max-w-sm bg-background/95 backdrop-blur-3xl border-l border-white/10 z-[60] shadow-2xl flex flex-col md:hidden pt-8"
            >
              {/* Internal Close Button */}
              <div className="flex justify-end px-8 mb-8">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 bg-white/5 rounded-full text-foreground/70 hover:text-white transition-colors border border-white/10"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col px-8 space-y-6 overflow-y-auto w-full">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (i * 0.05) }}
                  >
                    <Link
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className="text-3xl font-black text-foreground/80 hover:text-primary transition-colors flex items-center group"
                    >
                      <span className="text-primary/0 group-hover:text-primary transition-colors mr-2 text-xl block">•</span>
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-auto p-8 flex justify-center border-t border-white/10">
                <ThemeToggle />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
