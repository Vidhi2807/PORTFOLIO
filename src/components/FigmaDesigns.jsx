import React from "react";
import { motion } from "framer-motion";
import { Figma, ExternalLink, Eye, Layout, Palette, MousePointer2 } from "lucide-react";
import ScrambleWord from "./ScrambleWord";

const designs = [
  {
    title: "EcoConnect Mobile App",
    desc: "A wellness and sustainability tracking app designed for Gen Z. Focused on minimalist aesthetics and intuitive navigation.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=2070&auto=format&fit=crop",
    link: "https://www.figma.com/community/file/123456789",
    category: "Mobile UI",
    stats: { screens: 24, prototype: "Advanced" }
  },
  {
    title: "Aura Productivity Dashboard",
    desc: "The visual language for the Aura platform. Dark mode first, featuring custom glassmorphism components.",
    image: "https://images.unsplash.com/photo-1613909209432-7b1ef0658bbg?q=80&w=2070&auto=format&fit=crop",
    link: "https://www.figma.com/community/file/987654321",
    category: "Web Dashboard",
    stats: { screens: 12, prototype: "Linked" }
  }
];

export default function FigmaDesigns() {
  return (
    <section id="figma" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-2 text-primary font-bold tracking-widest uppercase text-[10px] mb-4"
          >
            <Palette size={14} />
            Visual Architecture
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">
            <ScrambleWord text="Figma " delay={0} />
            <ScrambleWord text="Masterpieces" className="gradient-text" delay={280} />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-foreground/40 max-w-2xl mx-auto text-sm"
          >
            Showcasing UI/UX designs where every pixel is purposeful. I bridge
            the gap between creative vision and technical implementation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {designs.map((design, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              className="group relative glass rounded-[2.5rem] border-white/5 overflow-hidden transition-all duration-500"
            >
              {/* Preview Image */}
              <div className="relative h-[300px] overflow-hidden">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />

                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="px-3 py-1 bg-primary text-white text-[8px] font-black uppercase tracking-widest rounded-lg shadow-xl">
                    {design.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/20 backdrop-blur-sm">
                  <motion.a
                    href={design.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-4 bg-white text-black rounded-full shadow-2xl"
                  >
                    <Figma size={24} />
                  </motion.a>
                </div>
              </div>

              {/* Info Section */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{design.title}</h3>
                  <div className="flex gap-4 text-foreground/40 text-[10px] font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Layout size={12} /> {design.stats.screens} Screens</span>
                    <span className="flex items-center gap-1"><MousePointer2 size={12} /> {design.stats.prototype}</span>
                  </div>
                </div>
                <p className="text-foreground/50 text-sm leading-relaxed mb-8">{design.desc}</p>

                <a
                  href={design.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary text-xs font-black uppercase tracking-widest hover:underline"
                >
                  View Prototype <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
