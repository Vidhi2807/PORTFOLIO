import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Youtube, Twitter, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen py-24 flex flex-col justify-center items-center text-center px-12 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl"
      >

        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Hi, I&apos;m <br className="hidden md:block" /> 
          <motion.span 
            className="gradient-text whitespace-nowrap inline-block"
            initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          >
            Vidhi Mandaliya
          </motion.span>
        </motion.h1>
        
        <motion.h2 
          className="text-2xl md:text-3xl text-foreground/60 font-medium mb-6 overflow-hidden flex justify-center flex-wrap gap-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {"Full Stack Developer & Creative UI/UX Designer".split(" ").map((word, i) => (
            <motion.span
              key={i}
              className="inline-block whitespace-nowrap"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.5 + i * 0.1,
                duration: 0.5,
                ease: "easeOut"
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>
        
        <p className="text-lg md:text-xl text-foreground/40 max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
          Transforming complex problems into intuitive digital solutions. Specialized in building high-performance 
          full-stack applications with an eye for premium user experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href="/Vidhi_Mandaliya_FlowCV_Resume_2026-04-10 (2).pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 py-4 bg-primary text-white rounded-2xl font-black flex items-center justify-center gap-3 shadow-xl shadow-primary/30 hover:shadow-primary/40 transition-all uppercase tracking-wider text-xs"
          >
            View Resume <ArrowRight size={18} />
          </motion.a>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 py-4 glass border-white/10 rounded-2xl font-black hover:bg-white/5 transition-all uppercase tracking-wider text-xs"
          >
            Get In Touch
          </motion.a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 mt-8">
          {[
            { icon: <Github size={24} />, href: "https://github.com/Vidhi2807", label: "GitHub" },
            { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/vidhi-mandaliya-325240388/", label: "LinkedIn" },
            { icon: <Twitter size={24} />, href: "https://x.com/VidhiM_2810", label: "Twitter" },
            { icon: <Youtube size={24} />, href: "https://www.youtube.com/shorts/Ni2YHZd58vc", label: "YouTube" },
            { icon: <Mail size={24} />, href: "mailto:vidhimandaliya81@gmail.com", label: "Email" },
            { icon: <Code2 size={24} />, href: "https://leetcode.com/u/VidhiM_2810/", label: "LeetCode" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              title={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="p-3 bg-white/5 rounded-xl text-foreground/60 hover:text-primary hover:bg-white/10 transition-all border border-white/5"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/20"
      >
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-current rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
