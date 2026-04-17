import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Layout, Settings, Palette } from "lucide-react";

const PRIMARY = "#6366f1";
const ACCENT  = "#06b6d4";

const categories = [
  {
    title: "Frontend",
    icon: <Layout size={40} />,
    color: PRIMARY,
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    icon: <Database size={40} />,
    color: ACCENT,
    skills: ["Node.js", "Express.js", "Firebase", "MongoDB", "PostgreSQL", "REST APIs", "Python"],
  },
  {
    title: "UI / UX",
    icon: <Palette size={40} />,
    color: PRIMARY,
    skills: ["Figma", "Wireframing", "Prototyping", "Design Systems", "Responsive Design", "User Research"],
  },
  {
    title: "DevOps",
    icon: <Settings size={40} />,
    color: ACCENT,
    skills: ["Git", "GitHub", "Docker", "Vite", "Vercel", "Netlify", "CI/CD"],
  },
  {
    title: "Languages",
    icon: <Code size={40} />,
    color: PRIMARY,
    skills: ["C / C++", "Python", "JavaScript", "Java", "SQL", "Bash"],
  },
];

function FlipCard({ cat, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08 }}
      className="group [perspective:1000px] h-64"
    >
      <div className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ease-in-out group-hover:[transform:rotateY(180deg)]">

        {/* ── FRONT ── */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-3xl border border-white/8 flex flex-col items-center justify-center gap-4 glass overflow-hidden">
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: `linear-gradient(90deg, transparent, ${cat.color}, transparent)` }} />

          {/* Soft glow */}
          <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ background: `radial-gradient(circle at 50% 40%, ${cat.color}, transparent 70%)` }} />

          {/* Icon */}
          <div style={{ color: cat.color }}>
            {cat.icon}
          </div>

          {/* Title */}
          <div className="text-center">
            <h3 className="text-base font-black tracking-tight">{cat.title}</h3>
            <p className="text-[9px] font-bold uppercase tracking-widest mt-1"
              style={{ color: `${cat.color}88` }}>
              {cat.skills.length} skills
            </p>
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl border overflow-hidden flex flex-col p-5 glass"
          style={{ borderColor: `${cat.color}35`, boxShadow: `0 0 0 1px ${cat.color}25, 0 20px 60px ${cat.color}18` }}
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: `linear-gradient(90deg, transparent, ${cat.color}, transparent)` }} />

          {/* Ambient tint */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: `${cat.color}08` }} />

          {/* Header */}
          <div className="relative z-10 flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
            <div style={{ color: cat.color }}>
              {React.cloneElement(cat.icon, { size: 16 })}
            </div>
            <h4 className="font-black text-xs tracking-tight">{cat.title}</h4>
          </div>

          {/* Ordered skill list */}
          <ol className="relative z-10 space-y-1.5 overflow-hidden">
            {cat.skills.map((skill, idx) => (
              <li key={skill} className="flex items-center gap-2.5">
                <span
                  className="text-[9px] font-black w-4 text-right shrink-0 tabular-nums"
                  style={{ color: `${cat.color}66` }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span
                  className="text-[11px] font-semibold truncate"
                  style={{ color: `${cat.color}dd` }}
                >
                  {skill}
                </span>
              </li>
            ))}
          </ol>
        </div>

      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-12">

        {/* Header */}
        <div className="mb-14">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-[10px] mb-3 block"
          >
            My Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight"
          >
            Technical <span className="gradient-text">Proficiency</span>
          </motion.h2>
        </div>

        {/* Single row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
            <FlipCard key={cat.title} cat={cat} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
