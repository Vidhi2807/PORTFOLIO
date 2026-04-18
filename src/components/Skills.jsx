import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrambleWord from "./ScrambleWord";
import {
  Code, Database, Layout, Settings, Palette, Terminal, Zap,
  Globe, GitMerge, Layers, Search, MousePointer, BarChart2,
} from "lucide-react";

/* ─── 4-color palette from Education ──────────────────── */
const C1 = "#6366f1";
const C2 = "#f43f5e";
const C3 = "#10b981";
const C4 = "#f59e0b";

/* ─── Tech Icon Map (Devicons CDN) ────────────────────── */
const ICON_MAP = {
  "React.js":        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js":         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "TypeScript":      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "JavaScript":      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "Tailwind CSS":    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "HTML5":           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS3":            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "Node.js":         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express.js":      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "Firebase":        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "MongoDB":         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "PostgreSQL":      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "Python":          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Figma":           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "Git":             "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "GitHub":          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "Docker":          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Vite":            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
  "Vercel":          "https://cdn.simpleicons.org/vercel/ffffff",
  "Netlify":         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
  "C / C++":         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "Java":            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "SQL":             "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "Bash":            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
};

const FALLBACK_ICON = {
  "Framer Motion":     <Layers size={28} />,
  "REST APIs":         <Globe size={28} />,
  "Wireframing":       <MousePointer size={28} />,
  "Prototyping":       <GitMerge size={28} />,
  "Design Systems":    <Layers size={28} />,
  "Responsive Design": <Code size={28} />,
  "User Research":     <Search size={28} />,
  "CI/CD":             <BarChart2 size={28} />,
};

/* ─── Categories ───────────────────────────────────────── */
const CATEGORIES = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Layout,
    color: C1,
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Database,
    color: C2,
    skills: ["Node.js", "Express.js", "Firebase", "MongoDB", "PostgreSQL", "REST APIs", "Python"],
  },
  {
    id: "uiux",
    title: "UI / UX",
    icon: Palette,
    color: C3,
    skills: ["Figma", "Wireframing", "Prototyping", "Design Systems", "Responsive Design", "User Research"],
  },
  {
    id: "devops",
    title: "DevOps",
    icon: Settings,
    color: C4,
    skills: ["Git", "GitHub", "Docker", "Vite", "Vercel", "Netlify", "CI/CD"],
  },
  {
    id: "languages",
    title: "Languages",
    icon: Code,
    color: C1,
    skills: ["C / C++", "Python", "JavaScript", "Java", "SQL", "Bash"],
  },
];

/* ─── Typewriter ────────────────────────────────────────────── */
function Typewriter({ text, speed = 45 }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const id = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return (
    <span>
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

/* ─── Icon Tile ─────────────────────────────────────────── */
function IconTile({ name, color }) {
  const src = ICON_MAP[name];
  const fallback = FALLBACK_ICON[name];

  return (
    <motion.div
      whileHover={{ scale: 1.18, y: -6 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      title={name}
      className="relative flex items-center justify-center rounded-2xl cursor-default overflow-hidden"
      style={{
        aspectRatio: "1 / 1",
        background: `linear-gradient(135deg, ${color}14 0%, ${color}06 100%)`,
        border: `1px solid ${color}30`,
      }}
    >
      {/* Corner glow blob */}
      <div
        className="absolute -top-3 -right-3 w-10 h-10 rounded-full blur-xl opacity-30 pointer-events-none"
        style={{ background: color }}
      />

      {/* Icon */}
      {src ? (
        <img
          src={src}
          alt={name}
          title={name}
          className="w-10 h-10 object-contain drop-shadow-sm relative z-10"
          loading="lazy"
          onError={(e) => { e.target.style.display = "none"; }}
        />
      ) : (
        <span className="relative z-10" style={{ color }}>
          {fallback ?? <Code size={28} />}
        </span>
      )}
    </motion.div>
  );
}

/* ─── Category Tab ─────────────────────────────────────── */
function CategoryTab({ cat, isActive, onHover }) {
  const Icon = cat.icon;
  return (
    <motion.button
      onMouseEnter={onHover}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-150 outline-none"
      style={{
        color: isActive ? cat.color : "hsl(var(--muted-foreground))",
        background: isActive ? `${cat.color}14` : "transparent",
        border: `1px solid ${isActive ? cat.color + "40" : "transparent"}`,
      }}
    >
      <Icon size={15} />
      <span className="hidden sm:inline">{cat.title}</span>
      {isActive && (
        <motion.span
          layoutId="tab-underline"
          className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full"
          style={{ background: cat.color }}
          transition={{ duration: 0.15 }}
        />
      )}
    </motion.button>
  );
}

/* ─── Floating Orb ─────────────────────────────────────── */
function FloatingOrb({ color }) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl pointer-events-none"
      animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      style={{
        width: 320,
        height: 320,
        background: `radial-gradient(circle, ${color}20, transparent 70%)`,
        top: "5%",
        right: "-5%",
      }}
    />
  );
}

/* ─── Main Section ─────────────────────────────────────── */
export default function Skills() {
  const [activeId, setActiveId] = useState(CATEGORIES[0].id);
  const activeCat = CATEGORIES.find((c) => c.id === activeId);

  return (
    <section id="skills" className="relative py-16 px-6 overflow-hidden">
      {/* Ambient bg */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, ${C1}20 0%, transparent 40%),
                            radial-gradient(circle at 80% 20%, ${C3}18 0%, transparent 40%)`,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Header ── */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
            style={{ background: `${C1}15`, border: `1px solid ${C1}30` }}
          >
            <Terminal size={11} style={{ color: C1 }} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: C1 }}>
              My Expertise
            </span>
          </motion.div>

          {/* Scramble-decode heading — fires on scroll */}
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight select-none">
            <ScrambleWord text="Technical " delay={0} />
            <ScrambleWord text="Proficiency" className="gradient-text" delay={300} />
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm text-muted-foreground max-w-md"
          >
            Hover a category to explore the tools I work with.
          </motion.p>
        </div>

        {/* ── Panel ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="rounded-3xl relative overflow-hidden"
          style={{
            border: "1px solid hsl(var(--foreground)/0.07)",
            background: "hsl(var(--background)/0.6)",
            backdropFilter: "blur(24px)",
          }}
        >
          <FloatingOrb color={activeCat.color} />

          {/* Tabs */}
          <div
            className="relative z-10 flex flex-wrap gap-1 p-4 border-b"
            style={{ borderColor: "hsl(var(--foreground)/0.06)" }}
          >
            {CATEGORIES.map((cat) => (
              <CategoryTab
                key={cat.id}
                cat={cat}
                isActive={cat.id === activeId}
                onHover={() => setActiveId(cat.id)}
              />
            ))}

            {/* Terminal label */}
            <div
              className="ml-auto hidden md:flex items-center gap-2 px-3 text-[10px] font-mono"
              style={{ color: "hsl(var(--muted-foreground)/0.5)" }}
            >
              <Zap size={10} style={{ color: activeCat.color }} />
              <Typewriter text={`skills.${activeCat.id}`} key={activeCat.id} />
            </div>
          </div>

          {/* Icon Grid — renders instantly on hover, no animation */}
          <div className="relative z-10 p-8">
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4">
              {activeCat.skills.map((name) => (
                <IconTile
                  key={name}
                  name={name}
                  color={activeCat.color}
                />
              ))}
            </div>
          </div>

          {/* Footer stat */}
          <div
            className="relative z-10 flex items-center gap-4 px-6 py-4 border-t"
            style={{ borderColor: "hsl(var(--foreground)/0.05)" }}
          >
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: activeCat.color }} />
            <span className="text-xs font-semibold" style={{ color: activeCat.color }}>
              {activeCat.title}
            </span>
            <span className="text-xs text-muted-foreground">
              {activeCat.skills.length} tools
            </span>
          </div>
        </motion.div>

        {/* Bottom pill nav */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 flex flex-wrap gap-2 justify-center"
        >
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onMouseEnter={() => setActiveId(cat.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold transition-all duration-150"
                style={{
                  background: activeId === cat.id ? `${cat.color}20` : "transparent",
                  color: activeId === cat.id ? cat.color : "hsl(var(--muted-foreground))",
                  border: `1px solid ${activeId === cat.id ? cat.color + "40" : "hsl(var(--foreground)/0.08)"}`,
                }}
              >
                <Icon size={11} />
                {cat.title}
              </button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
