import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Figma, ExternalLink, ChevronLeft, ChevronRight, Layout, Palette } from "lucide-react";
import ScrambleWord from "./ScrambleWord";

const designs = [
  {
    title: "StreamVibe OTT UI",
    desc: "A premium, dark-themed OTT streaming platform design template. Features dynamic movie carousels, immersive hero banners, and a polished user experience.",
    image: "/streamvibe.jpg", // Placeholders to match your designs. Update these paths if you have the local images!
    link: "https://www.figma.com",
    category: "Web App UI",
    stats: { screens: 15, prototype: "Interactive" }
  },
  {
    title: "Book my show UI",
    desc: "A modernized interface design for BookMyShow, featuring event highlights, seamless navigation, and an improved booking flow.",
    image: "/bookmyshow.jpg",
    link: "https://www.figma.com",
    category: "Web Dashboard",
    stats: { screens: 12, prototype: "Advanced" }
  },
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
  },
  {
    title: "Quantum Fintech App",
    desc: "Next-gen banking app interface with 3D elements, real-time data visualization, and secure transaction flows.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff0f?q=80&w=2070&auto=format&fit=crop",
    link: "https://www.figma.com",
    category: "Finance UI",
    stats: { screens: 18, prototype: "Interactive" }
  },
  {
    title: "Harmony Music Player",
    desc: "An elegant, distraction-free music player concept with dynamic color themes based on album art.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074&auto=format&fit=crop",
    link: "https://www.figma.com",
    category: "Mobile App",
    stats: { screens: 8, prototype: "Linked" }
  }
];

export default function FigmaDesigns() {
  const [rotation, setRotation] = useState(0);

  const angle = 360 / designs.length;
  const radius = window.innerWidth < 768 ? 200 : 280;

  const handleNext = () => setRotation(prev => prev - angle);
  const handlePrev = () => setRotation(prev => prev + angle);

  return (
    <section id="figma" className="py-24 px-6 bg-white/[0.01] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-2 text-primary font-bold tracking-widest uppercase text-[10px] mb-4"
          >
            <Palette size={14} />
            Visual Architecture
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            <ScrambleWord text="Explore My " delay={0} />
            <ScrambleWord text="Design Work" className="gradient-text" delay={280} />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-foreground/40 max-w-2xl mx-auto text-sm"
          >
            <span className="hidden md:inline">— crafted with precision in Figma. </span>
            Showcasing UI/UX designs where every pixel is purposeful.
          </motion.p>
        </div>

        {/* 3D Ring Carousel Wrapper */}
        <div className="relative w-full h-[350px] md:h-[400px] flex items-center justify-center" style={{ perspective: "1500px" }}>

          <motion.div
            className="relative w-full max-w-[200px] md:max-w-[260px] h-full"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: rotation }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          >
            {designs.map((design, i) => {
              const currentAngle = i * angle;
              return (
                <div
                  key={i}
                  className="absolute top-0 left-0 w-full"
                  style={{
                    transform: `rotateY(${currentAngle}deg) translateZ(${radius}px)`,
                    backfaceVisibility: "hidden"
                  }}
                >
                  <div className="group relative glass rounded-2xl md:rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 bg-slate-900/60 backdrop-blur-xl hover:border-primary/50 mx-auto flex flex-col h-[280px] md:h-[320px]">
                    {/* Preview Image */}
                    <div className="relative h-[130px] md:h-[160px] shrink-0 overflow-hidden">
                      <img
                        src={design.image}
                        alt={design.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80" />

                      <div className="absolute top-3 left-3 flex gap-2 z-10">
                        <span className="px-2 py-1 bg-[#8b5cf6]/20 backdrop-blur-md text-[#c4b5fd] border border-[#8b5cf6]/30 text-[8px] font-black uppercase tracking-widest rounded-md flex items-center gap-1">
                          <Figma size={10} /> FIGMA DESIGN
                        </span>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/20 backdrop-blur-sm z-20">
                        <a
                          href={design.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white text-black rounded-full shadow-2xl hover:scale-110 transition-transform"
                        >
                          <Figma size={18} />
                        </a>
                      </div>
                    </div>

                    {/* Info Section */}
                    <div className="p-4 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-base md:text-lg font-bold group-hover:text-primary transition-colors line-clamp-1">{design.title}</h3>
                      </div>
                      <p className="text-foreground/50 text-[10px] md:text-[11px] leading-relaxed mb-3 flex-grow line-clamp-3">
                        {design.desc}
                      </p>

                      <div className="flex justify-between items-center mt-auto shrink-0 pt-2 border-t border-white/5">
                        <div className="flex gap-2 md:gap-4 text-foreground/40 text-[8px] md:text-[9px] font-bold uppercase tracking-widest">
                          <span className="flex items-center gap-1"><Layout size={10} /> {design.stats.screens} Screens</span>
                        </div>

                        <a
                          href={design.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-primary text-[8px] md:text-[9px] font-black uppercase tracking-widest hover:underline"
                        >
                          View <ExternalLink size={10} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-6 z-50">
            <button
              onClick={handlePrev}
              className="p-3 md:p-4 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-full text-white/50 hover:text-primary hover:border-primary/50 transition-all hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-2 md:right-6 z-50">
            <button
              onClick={handleNext}
              className="p-3 md:p-4 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-full text-white/50 hover:text-primary hover:border-primary/50 transition-all hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
