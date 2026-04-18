import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Database,
  Layout,
  Settings,
  Palette,
  Terminal,
  Zap,
} from "lucide-react";

/* ─── 4-color palette from Education ──────────────────── */
const C1 = "#6366f1"; // indigo
const C2 = "#f43f5e"; // rose
const C3 = "#10b981"; // emerald
const C4 = "#f59e0b"; // amber

const CATEGORIES = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Layout,
    color: C1,
    skills: [
      { name: "React.js",       level: 95 },
      { name: "Next.js",        level: 88 },
      { name: "TypeScript",     level: 80 },
      { name: "JavaScript",     level: 95 },
      { name: "Tailwind CSS",   level: 92 },
      { name: "Framer Motion",  level: 85 },
      { name: "HTML5",          level: 98 },
      { name: "CSS3",           level: 95 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Database,
    color: C2,
    skills: [
      { name: "Node.js",    level: 85 },
      { name: "Express.js", level: 82 },
      { name: "Firebase",   level: 80 },
      { name: "MongoDB",    level: 78 },
      { name: "PostgreSQL", level: 70 },
      { name: "REST APIs",  level: 90 },
      { name: "Python",     level: 75 },
    ],
  },
  {
    id: "uiux",
    title: "UI / UX",
    icon: Palette,
    color: C3,
    skills: [
      { name: "Figma",             level: 90 },
      { name: "Wireframing",       level: 88 },
      { name: "Prototyping",       level: 85 },
      { name: "Design Systems",    level: 82 },
      { name: "Responsive Design", level: 95 },
      { name: "User Research",     level: 78 },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    icon: Settings,
    color: C4,
    skills: [
      { name: "Git",     level: 92 },
      { name: "GitHub",  level: 95 },
      { name: "Docker",  level: 65 },
      { name: "Vite",    level: 88 },
      { name: "Vercel",  level: 90 },
      { name: "Netlify", level: 85 },
      { name: "CI/CD",   level: 70 },
    ],
  },
  {
    id: "languages",
    title: "Languages",
    icon: Code,
    color: C1,
    skills: [
      { name: "C / C++",    level: 80 },
      { name: "Python",     level: 82 },
      { name: "JavaScript", level: 95 },
      { name: "Java",       level: 72 },
      { name: "SQL",        level: 78 },
      { name: "Bash",       level: 60 },
    ],
  },
];

/* ─── Typewriter ───────────────────────────────────────── */
function Typewriter({ text, speed = 55 }) {
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

/* ─── Skill Bubble ─────────────────────────────────────── */
function SkillBubble({ skill, color, index }) {
  const [filled, setFilled] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setFilled(true), index * 60 + 200);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.5, y: -10 }}
      transition={{ delay: index * 0.04, type: "spring", stiffness: 300, damping: 20 }}
      whileHover={{ scale: 1.04, y: -4 }}
      className="relative rounded-2xl p-4 cursor-default overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${color}12 0%, ${color}06 100%)`,
        border: `1px solid ${color}30`,
      }}
    >
      {/* Corner glow */}
      <div
        className="absolute -top-4 -right-4 w-12 h-12 rounded-full blur-xl opacity-40 pointer-events-none"
        style={{ background: color }}
      />

      {/* Skill name + % */}
      <div className="flex items-center justify-between mb-3 relative z-10">
        <span className="text-sm font-bold tracking-tight" style={{ color }}>
          {skill.name}
        </span>
        <span
          className="text-[10px] font-black px-2 py-0.5 rounded-full"
          style={{ background: `${color}22`, color }}
        >
          {skill.level}%
        </span>
      </div>

      {/* Progress bar */}
      <div
        className="relative z-10 h-1.5 rounded-full overflow-hidden"
        style={{ background: `${color}18` }}
      >
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: filled ? `${skill.level}%` : 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: index * 0.06 }}
          style={{
            background: `linear-gradient(90deg, ${color}88, ${color})`,
            boxShadow: `0 0 8px ${color}80`,
          }}
        />
      </div>
    </motion.div>
  );
}

/* ─── Category Tab (hover-triggered) ──────────────────── */
function CategoryTab({ cat, isActive, onHover }) {
  const Icon = cat.icon;
  return (
    <motion.button
      onMouseEnter={onHover}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 outline-none"
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
      style={{
        width: 340,
        height: 340,
        background: `radial-gradient(circle, ${color}18, transparent 70%)`,
        top: "10%",
        right: "-5%",
      }}
      animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/* ─── Main Section ─────────────────────────────────────── */
export default function Skills() {
  const [activeId, setActiveId] = useState(CATEGORIES[0].id);
  const activeCat = CATEGORIES.find((c) => c.id === activeId);

  return (
    <section id="skills" className="relative py-28 px-6 overflow-hidden">
      {/* Ambient background */}
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
            <span
              className="text-[10px] font-black uppercase tracking-[0.2em]"
              style={{ color: C1 }}
            >
              My Expertise
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="text-4xl md:text-5xl font-black tracking-tight"
          >
            Technical <span className="gradient-text">Proficiency</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm text-muted-foreground max-w-md"
          >
            Hover a category to explore the skills within it.
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

          {/* ── Tabs row ── */}
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

            {/* Terminal prompt */}
            <div
              className="ml-auto hidden md:flex items-center gap-2 px-3 text-[10px] font-mono"
              style={{ color: "hsl(var(--muted-foreground)/0.5)" }}
            >
              <Zap size={10} style={{ color: activeCat.color }} />
              <Typewriter text={`skills.${activeCat.id}`} key={activeCat.id} />
            </div>
          </div>

          {/* ── Skills grid ── */}
          <div className="relative z-10 p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
              >
                {activeCat.skills.map((skill, i) => (
                  <SkillBubble
                    key={skill.name}
                    skill={skill}
                    color={activeCat.color}
                    index={i}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Footer stat bar ── */}
          <div
            className="relative z-10 flex items-center gap-6 px-6 py-4 border-t"
            style={{ borderColor: "hsl(var(--foreground)/0.05)" }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: activeCat.color }}
              />
              <span className="text-xs font-semibold" style={{ color: activeCat.color }}>
                {activeCat.title}
              </span>
            </div>
            <span className="text-xs text-muted-foreground">
              {activeCat.skills.length} skills
            </span>
            <span className="text-xs text-muted-foreground ml-auto">
              avg{" "}
              <strong style={{ color: activeCat.color }}>
                {Math.round(
                  activeCat.skills.reduce((s, sk) => s + sk.level, 0) /
                    activeCat.skills.length
                )}
                %
              </strong>{" "}
              proficiency
            </span>
          </div>
        </motion.div>

        {/* ── Bottom mini-legend ── */}
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
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold transition-all duration-200"
                style={{
                  background: activeId === cat.id ? `${cat.color}20` : "transparent",
                  color:
                    activeId === cat.id
                      ? cat.color
                      : "hsl(var(--muted-foreground))",
                  border: `1px solid ${
                    activeId === cat.id
                      ? cat.color + "40"
                      : "hsl(var(--foreground)/0.08)"
                  }`,
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
