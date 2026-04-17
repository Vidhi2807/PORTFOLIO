import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, FileText, ArrowUpRight, ShieldCheck, Sparkles, Activity, Lock, Globe, Code2, Cpu, Sprout, Database, Youtube } from "lucide-react";

const projects = [
  {
    title: "Aura: AI-Powered Productivity",
    category: "Full Stack",
    catColor: "from-purple-500 to-indigo-500",
    desc: "An all-in-one productivity ecosystem designed to eliminate 'context switching'. AI-driven task management with a minimalist interface.",
    fullDesc: "Aura is a digital brain designed to solve 'App Fatigue.' It integrates notes, tasks, and AI assistance into one cohesive workspace.",
    tech: ["React.js", "Firebase", "Google Gemini API"],
    image: "/aura_app_preview_1775795767021.png",
    link: "https://aura-eight-phi.vercel.app/",
    github: "https://github.com/Vidhi2807/aura",
    docs: "https://docs.google.com/document/d/1ClnPJun81YwJ5NJFKO_SOxBQeTHGiS8DRThQOmdYLOo/edit?usp=sharing",
    youtube: "https://www.youtube.com/shorts/Ni2YHZd58vc",
    postman: "https://www.postman.com/workspace/aura-api",
    figma: "https://www.figma.com/file/aura-design",
    icon: <Sparkles className="text-purple-400" size={24} />
  },
  {
    title: "CERS: Emergency Response",
    category: "Full Stack",
    catColor: "from-red-500 to-orange-500",
    desc: "Professional-grade Emergency Response System featuring AI dispatch and live satellite tracking.",
    fullDesc: "CERS+ bridges the gap between patients, hospitals, and responders. It leverages Google Maps AI for traffic routing.",
    tech: ["React 19", "Firebase", "Google Maps API"],
    image: "/cers_app_preview_1775795782655.png",
    link: "https://cers-plus.web.app/",
    github: "https://github.com/Vidhi2807/CERS-final",
    docs: "https://docs.google.com/document/d/14ZjNFonU1irIVIhCVTTQ3LGwMjdZT8sMr1dZ0HN732Y/edit?usp=sharing",
    youtube: "https://youtube.com/demo-cers",
    postman: "https://postman.com/cers-api",
    icon: <Activity className="text-red-400" size={24} />
  },
  {
    title: "Hackers Panel",
    category: "Games",
    catColor: "from-green-500 to-emerald-500",
    desc: "Interactive, gamified learning platform built for the iFest Hackathon to teach technical security concepts.",
    fullDesc: "A hands-on environment giving users a front-row seat to how cyberattacks work through interactive simulations.",
    tech: ["HTML5", "JavaScript", "Animations"],
    image: "/hackers_panel_preview_1775795799335.png",
    link: "https://github.com/Vidhi2807/cybersecurity-prj",
    github: "https://github.com/Vidhi2807/cybersecurity-prj",
    docs: "https://docs.google.com/document/d/1sT7jKXFQB1DxBCT-WN5Pbe2jVgghKJ_GtL8NjbxZ_0M/edit?usp=sharing",
    youtube: "https://youtube.com/hackers-panel",
    icon: <ShieldCheck className="text-green-400" size={24} />
  },
  {
    title: "Eco Cart Clone",
    category: "Clones",
    catColor: "from-blue-500 to-cyan-500",
    desc: "A high-fidelity clone of a modern e-commerce platform focusing on performance and clean UI transitions.",
    fullDesc: "Built to demonstrate mastery of complex layouts and state management in a shopping environment.",
    tech: ["React", "Redux", "Tailwind"],
    image: "/secure_comm_preview_1775795813773.png",
    link: "https://github.com/Vidhi2807/Secure-Comm",
    github: "https://github.com/Vidhi2807/Secure-Comm",
    docs: "https://github.com/Vidhi2807/Secure-Comm",
    icon: <Globe className="text-blue-400" size={24} />
  },
  {
    title: "FasalRakshak: Smart Agriculture",
    category: "Full Stack",
    catColor: "from-green-500 to-emerald-500",
    desc: "AI ecosystem for farmers featuring real-time crop disease diagnosis and expert consultations.",
    fullDesc: "An intelligent ecosystem for farmers featuring real-time crop disease diagnosis and hyper-local weather tracking.",
    tech: ["React", "Firebase", "AI/ML", "Leaflet"],
    image: "/fasalrakshak_preview_1775797410081.png",
    link: "https://fasalrakshak.vercel.app",
    github: "https://github.com/Vidhi2807/fasalrakshak",
    docs: "https://docs.google.com/document/d/1RNWOhx0Y8nU3cvCcI_uGzPHpLsUmFcn4yBj7hnDC1LU/edit?usp=sharing",
    youtube: "https://youtube.com/fasalrakshak",
    postman: "https://postman.com/fasalrakshak-api",
    icon: <Sprout size={24} className="text-green-400" />
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
    <section id="projects" className="py-32 px-6 relative overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-6xl mx-auto px-12">
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-4 tracking-tight leading-[0.85] text-foreground"
          >
            Pushing <span className="gradient-text">Technological</span> Boundaries
          </motion.h2>

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
          className="flex flex-wrap justify-center gap-8 lg:gap-12"
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
                className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(50%-2rem)] max-w-3xl"
              >
                <div className="relative group rounded-[2.5rem] overflow-hidden border border-border transition-all duration-500 shadow-lg bg-card hover:shadow-2xl hover:border-primary/30">
                  
                  <div className="relative h-[260px] overflow-hidden bg-slate-900">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute top-6 left-6 z-20">
                      <div className={`px-4 py-1.5 rounded-xl bg-gradient-to-r ${project.catColor} text-white text-[8px] font-black uppercase tracking-widest shadow-xl`}>
                        {project.category}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 space-y-6">
                    <div>
                      <h3 className="text-3xl font-black text-foreground tracking-tight mb-3 group-hover:text-primary transition-colors">
                        {project.title.split(":")[0]}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 font-medium">
                        {project.desc}
                      </p>
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border/50">
                       {[
                         { icon: <Github size={16} />, link: project.github, label: "Code", color: "bg-foreground text-background" },
                         { icon: <ExternalLink size={16} />, link: project.link, label: "Live", color: "bg-primary text-white" },
                         { icon: <Youtube size={16} />, link: project.youtube, label: "Demo", color: "bg-red-500/10 text-red-500 border border-red-500/20" },
                         { icon: <Database size={16} />, link: project.postman, label: "API Docs", color: "bg-orange-500/10 text-orange-500 border border-orange-500/20", show: project.postman },
                         { icon: <FileText size={16} />, link: project.figma, label: "Figma", color: "bg-purple-500/10 text-purple-500 border border-purple-500/20", show: project.figma }
                       ].filter(a => a.show !== false && a.link).map((action, idx) => (
                         <motion.a
                           key={idx}
                           href={action.link}
                           target="_blank"
                           rel="noopener noreferrer"
                           whileHover={{ scale: 1.05, y: -2 }}
                           whileTap={{ scale: 0.95 }}
                           className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${action.color}`}
                         >
                           {action.icon}
                           {action.label}
                         </motion.a>
                       ))}
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
