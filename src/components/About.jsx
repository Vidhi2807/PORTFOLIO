import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Sparkles } from "lucide-react";
import ScrambleWord from "./ScrambleWord";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">About Me</span>
            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">
              <ScrambleWord text="Passionate Web Developer and " delay={0} />
              <ScrambleWord text="Designer" className="gradient-text" delay={400} />
            </h2>
            
            <p className="text-lg text-foreground/60 mb-10 leading-relaxed">
             I'm a 1st-year Computer Engineering student who loves exploring the world of web development. I enjoy building frontend experiences using React.js, HTML, and CSS, and I also have knowledge of Node.js, Java, C, and C++. I’ve participated in hackathons, worked on a cybersecurity project, and continuously improve my problem-solving skills through LeetCode. I’m curious by nature and always excited to learn new things and create technology that actually matters.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <Code2 style={{ color: "#6366f1" }} />, title: "Strategy", desc: "Digital roadmap" },
                { icon: <Palette style={{ color: "#10b981" }} />, title: "Design", desc: "User-centric UI" },
                { icon: <Sparkles style={{ color: "#f59e0b" }} />, title: "Quality", desc: "Clean codebase" },
              ].map((item, i) => (
                <div key={i} className="glass p-5 rounded-2xl border-white/5 hover:bg-white/5 transition-all">
                  <div className="mb-4 bg-white/5 w-fit p-3 rounded-xl">{item.icon}</div>
                  <h3 className="font-bold text-base mb-1">{item.title}</h3>
                  <p className="text-xs text-foreground/40">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="mt-12 text-foreground/60 leading-relaxed italic border-l-4 border-primary/40 pl-6">
              "Technology is best when it brings people together and solves complex problems 
              with simple, beautiful interfaces."
            </p>
          </motion.div>

          {/* Image Container (Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full" />
            <div className="relative z-10 p-4 glass rounded-3xl border-white/5 overflow-hidden shadow-2xl max-w-sm mx-auto lg:mx-0 lg:ml-auto">
              <img
                src="https://res.cloudinary.com/db3htfvvx/image/upload/v1774803546/vidhi_photo_fr1ptk.jpg"
                alt="Profile"
                className="w-full h-[450px] rounded-2xl object-cover hover:scale-105 transition-transform duration-700 shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
