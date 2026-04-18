import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/me.jpg";

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
      <div className="max-w-6xl mx-auto px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-rose-500 blur-[6px] opacity-60 group-hover:opacity-90 transition-opacity" />
            <img
              src={logo}
              alt="Vidhi Mandaliya"
              className="relative w-9 h-9 rounded-full object-cover border-2 border-white/20 shadow-lg"
            />
          </div>
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

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground/70 hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-foreground/70 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border/50 flex justify-center">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
