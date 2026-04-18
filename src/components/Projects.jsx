import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import ScrambleWord from "./ScrambleWord";
import { ExternalLink, Github, FileText, ArrowUpRight, ShieldCheck, Sparkles, Activity, Lock, Globe, Code2, Cpu, Sprout, Database, Youtube } from "lucide-react";

/* ─── 4 Education palette colors ───────────────────────── */
const C1 = "#6366f1";
const C2 = "#f43f5e";
const C3 = "#10b981";
const C4 = "#f59e0b";

const projects = [
  {
    title: "Aura: AI-Powered Productivity",
    category: "Full Stack",
    accentColor: C1,
    desc: "An all-in-one productivity ecosystem designed to eliminate 'app fatigue' through intelligent context switching. Features include an AI-driven task timeline, dynamic integrated note-taking, and a minimalist interface that completely prioritizes user focus.",
    fullDesc: "Aura is a digital brain designed to solve 'App Fatigue.' It integrates notes, tasks, and AI assistance into one cohesive workspace.",
    tech: ["React.js", "Firebase", "Google Gemini API"],
    image: "/aura_app_preview_1775795767021.png",
    link: "https://aura-eight-phi.vercel.app/",
    github: "https://github.com/Vidhi2807/aura",
    docs: "https://docs.google.com/document/d/1ClnPJun81YwJ5NJFKO_SOxBQeTHGiS8DRThQOmdYLOo/edit?usp=sharing",
    youtube: "https://www.youtube.com/shorts/Ni2YHZd58vc",
    postman: "https://www.postman.com/workspace/aura-api",
    icon: <Sparkles style={{ color: C1 }} size={24} />
  },
  {
    title: "CERS: Emergency Response",
    category: "Full Stack",
    accentColor: C2,
    desc: "A professional-grade Emergency Response System deployed for rapid field coordination. Harnesses live satellite tracking and AI-powered dispatch automation to optimize ambulance routing, actively minimizing critical response delays during complex crisis scenarios.",
    fullDesc: "CERS+ bridges the gap between patients, hospitals, and responders. It leverages Google Maps AI for traffic routing.",
    tech: ["React 19", "Firebase", "Google Maps API"],
    image: "/cers_app_preview_1775795782655.png",
    link: "https://cers-plus.web.app/",
    github: "https://github.com/Vidhi2807/CERS-final",
    docs: "https://docs.google.com/document/d/14ZjNFonU1irIVIhCVTTQ3LGwMjdZT8sMr1dZ0HN732Y/edit?usp=sharing",
    youtube: "https://youtube.com/demo-cers",
    postman: "https://postman.com/cers-api",
    icon: <Activity style={{ color: C2 }} size={24} />
  },
  {
    title: "Hackers Panel",
    category: "Games",
    accentColor: C3,
    desc: "Interactive, gamified learning platform built for the iFest Hackathon to teach technical security concepts.",
    fullDesc: "A hands-on environment giving users a front-row seat to how cyberattacks work through interactive simulations.",
    tech: ["HTML5", "JavaScript", "Animations"],
    image: "/hackers_panel_preview_1775795799335.png",
    link: "https://github.com/Vidhi2807/cybersecurity-prj",
    github: "https://github.com/Vidhi2807/cybersecurity-prj",
    docs: "https://docs.google.com/document/d/1sT7jKXFQB1DxBCT-WN5Pbe2jVgghKJ_GtL8NjbxZ_0M/edit?usp=sharing",
    youtube: "https://youtube.com/hackers-panel",
    icon: <ShieldCheck style={{ color: C3 }} size={24} />
  },
  {
    title: "EBake Clone",
    category: "Clones",
    accentColor: C4,
    desc: "A fully responsive, pixel-perfect clone of the EBake platform. Demonstrates advanced UI translation and interactive layout mastery.",
    tech: ["React", "CSS", "UI/UX"],
    image: "https://images.unsplash.com/photo-1557308536-ee471ef2c390?q=80&w=2000&auto=format&fit=crop",
    link: "https://vebake.netlify.app/ebake",
    github: "https://github.com/Vidhi2807",
    icon: <Globe style={{ color: C4 }} size={24} />
  },
  {
    title: "Zepto Clone",
    category: "Clones",
    accentColor: C4,
    desc: "A fast, scalable clone of Zepto's UI, focusing on quick-commerce layout grids and smooth mobile-first front-end interactions.",
    tech: ["React", "Tailwind", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2000&auto=format&fit=crop",
    link: "https://vzepto.netlify.app/zepto",
    github: "https://github.com/Vidhi2807",
    icon: <Globe style={{ color: C4 }} size={24} />
  },
  {
    title: "Lenskart Clone",
    category: "Clones",
    accentColor: C4,
    desc: "A comprehensive clone of the Lenskart e-commerce storefront. Features dynamic rendering and pixel-perfect component architecture.",
    tech: ["React", "JavaScript", "CSS"],
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=2000&auto=format&fit=crop",
    link: "https://vlenskart.netlify.app/lenskart",
    github: "https://github.com/Vidhi2807",
    icon: <Globe style={{ color: C4 }} size={24} />
  },
  {
    title: "FasalRakshak: Smart Agriculture",
    category: "Full Stack",
    accentColor: C3,
    desc: "An intelligent, comprehensive agriculture platform bringing applied AI to farmers. Provides instant, hyper-local weather alerts alongside machine-learning-driven crop disease diagnosis, empowering rural communities with immediate tech assistance.",
    fullDesc: "An intelligent ecosystem for farmers featuring real-time crop disease diagnosis and hyper-local weather tracking.",
    tech: ["React", "Firebase", "AI/ML", "Leaflet"],
    image: "/fasalrakshak_preview_1775797410081.png",
    link: "https://fasalrakshak.vercel.app",
    github: "https://github.com/Vidhi2807/fasalrakshak",
    docs: "https://docs.google.com/document/d/1RNWOhx0Y8nU3cvCcI_uGzPHpLsUmFcn4yBj7hnDC1LU/edit?usp=sharing",
    youtube: "https://youtube.com/fasalrakshak",
    postman: "https://postman.com/fasalrakshak-api",
    icon: <Sprout size={24} style={{ color: C3 }} />
  }
];

const categoryData = [
  { name: "All", icon: <Globe size={16} /> },
  { name: "Full Stack", icon: <Cpu size={16} /> },
  { name: "Games", icon: <ShieldCheck size={16} /> },
  { name: "Clones", icon: <Code2 size={16} /> },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-16 px-6 relative overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full glass border-border text-primary text-[9px] font-black uppercase tracking-[0.2em] mb-6 shadow-lg"
          >
            <Sparkles size={12} className="animate-pulse" />
            Project Showcase
          </motion.div>
          {/* Scramble-decode heading — fires on scroll */}
          <h2 className="text-5xl md:text-7xl font-black mb-4 tracking-tight leading-[0.9] select-none">
            <ScrambleWord text="Pushing " delay={0} />
            <ScrambleWord text="Technological" className="gradient-text" delay={250} />
            <ScrambleWord text=" Boundaries" delay={500} />
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mt-8">
            {categoryData.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setFilter(cat.name)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                  filter === cat.name 
                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                    : "glass border-border text-foreground/40 hover:text-primary"
                }`}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="w-full"
                style={{ "--hover-accent": project.accentColor }}
              >
                <div className="relative h-full flex flex-col group rounded-[2rem] overflow-hidden border border-border transition-all duration-500 shadow-lg bg-card hover:shadow-2xl hover:border-primary/30">
                  
                  <div className="relative h-[200px] overflow-hidden bg-slate-900 shrink-0">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <div className="px-3 py-1 rounded-xl text-white text-[8px] font-black uppercase tracking-widest shadow-xl" style={{ background: project.accentColor }}>
                        {project.category}
                      </div>
                    </div>

                    {/* Hover Overlay with Action Icons */}
                    <div className="absolute inset-0 z-30 flex items-center justify-center gap-3 bg-black/50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       {[
                         { icon: <Github size={20} />, link: project.github, color: "#171515" },
                         { icon: <ExternalLink size={20} />, link: project.link, color: "#3b82f6" },
                         { icon: <Youtube size={20} />, link: project.youtube, color: "#ff0000" },
                         { icon: <Database size={20} />, link: project.postman, show: project.postman, color: "#eab308" },
                         { icon: <FileText size={20} />, link: project.figma, show: project.figma, color: "#ec4899" }
                       ].filter(a => a.show !== false && a.link).map((action, idx) => (
                         <motion.a
                           key={idx}
                           href={action.link}
                           target="_blank"
                           rel="noopener noreferrer"
                           whileHover={{ scale: 1.15 }}
                           whileTap={{ scale: 0.95 }}
                           className="flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-2xl transition-colors hover:text-white"
                           style={{ color: action.color }}
                           onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = action.color; e.currentTarget.style.color = '#fff'; }}
                           onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.color = action.color; }}
                         >
                           {action.icon}
                         </motion.a>
                       ))}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow space-y-4">
                    <div className="flex-grow">
                      <h3 className="text-xl md:text-2xl font-black text-foreground tracking-tight mb-2 group-hover:text-[var(--hover-accent)] transition-colors leading-tight">
                        {project.title.split(":")[0]}
                      </h3>
                      <p className="text-muted-foreground text-xs leading-relaxed font-medium">
                        {project.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
