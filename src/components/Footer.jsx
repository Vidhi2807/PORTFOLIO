import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Youtube, Code2 } from "lucide-react";
import logo from "../assets/me.jpg";

function LogoAvatar({ size = 14 }) {
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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <a href="#" className="flex items-center">
            <LogoAvatar size={14} />
          </a>
          <p className="text-foreground/40 text-sm max-w-sm text-center md:text-left">
            Built with React, Tailwind CSS, and Framer Motion.
            Designed for performance and aesthetics.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            {[
              { icon: <Github size={20} />, href: "https://github.com/Vidhi2807", label: "GitHub" },
              { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/vidhi-mandaliya-325240388/", label: "LinkedIn" },
              { icon: <Twitter size={20} />, href: "https://x.com/VidhiM_2810", label: "Twitter" },
              { icon: <Youtube size={20} />, href: "https://www.youtube.com/shorts/Ni2YHZd58vc", label: "YouTube" },
              { icon: <Code2 size={20} />, href: "https://leetcode.com/u/VidhiM_2810/", label: "LeetCode" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                className="p-3 bg-white/5 rounded-xl text-foreground/40 hover:text-primary hover:bg-white/10 transition-all border border-white/5"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-foreground/20 text-xs font-bold uppercase tracking-[0.2em]">
            © {currentYear} Vidhi Mandaliya. ALL RIGHTS RESERVED.
          </p>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <a href="#about" className="text-xs font-bold uppercase tracking-widest text-foreground/40 hover:text-primary transition-colors">About</a>
          <a href="#projects" className="text-xs font-bold uppercase tracking-widest text-foreground/40 hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="text-xs font-bold uppercase tracking-widest text-foreground/40 hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
