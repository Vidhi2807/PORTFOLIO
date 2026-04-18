import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, BookOpen, Code2, Globe, Cpu, ChevronDown, MapPin, Calendar } from "lucide-react";
import ScrambleWord from "./ScrambleWord";

const entries = [
  {
    num: "01",
    degree: "B.Tech Computer Science",
    institution: "Swaminarayan University",
    location: "Gujarat, India",
    period: "2025 – 2029",
    status: "Ongoing",
    color: "#6366f1",
    icon: <GraduationCap size={20} />,
    desc: "Pursuing a full-time B.Tech degree specializing in Web Development, Data Structures, and Software Engineering. Actively participating in hackathons and building real-world projects alongside academics.",
    subjects: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks", "Web Development", "Software Engineering"],
  },
  {
    num: "02",
    degree: "Higher Secondary — CBSE",
    institution: "Swaminarayan Vidyapeeth, Anand",
    location: "Anand, Gujarat",
    period: "2023 – 2025",
    status: "Completed",
    color: "#f43f5e",
    icon: <BookOpen size={20} />,
    desc: "Completed higher secondary education in the CBSE board with a strong foundation in core subjects, building the analytical base for software engineering.",
    subjects: ["Physics", "Chemistry", "Mathematics", "Computer Science", "English", "Physical Education"],
  },
  {
    num: "03",
    degree: "Self-Directed Learning",
    institution: "Udemy · freeCodeCamp · Languages",
    location: "Online",
    period: "2022 – Present",
    status: "Active",
    color: "#10b981",
    icon: <Code2 size={20} />,
    desc: "Consistently learning beyond academia through structured online courses and practice. Currently expanding my linguistic skills by actively learning the German language alongside mastering modern full-stack development tools.",
    subjects: ["React & Next.js", "Firebase & Backend", "German Language", "UI/UX Design", "DSA Practice", "Python"],
  },
  {
    num: "04",
    degree: "Hackathons & Leadership",
    institution: "Rashtrapati Puraskar · ElectroSphere",
    location: "India",
    period: "2024 – Present",
    status: "Active",
    color: "#f59e0b",
    icon: <Cpu size={20} />,
    desc: "Honored with the Rashtrapati Puraskar in Scouts and Guides. Consistently participating in rigorous events to build working prototypes under strict deadlines.",
    subjects: ["ElectroSphere 2K26", "SU Hackathon 2K26", "Craftathon 2K26", "Rashtrapati Puraskar (Scouts & Guides)"],
  },
];

function AccordionCard({ entry, isOpen, onToggle, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      onMouseEnter={onToggle}
      onMouseLeave={onClose}
      className="group relative"
    >
      {/* Left accent bar */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full origin-top"
        animate={{ scaleY: isOpen ? 1 : 0.3, opacity: isOpen ? 1 : 0.3 }}
        transition={{ duration: 0.4 }}
        style={{ background: entry.color }}
      />

      {/* Card */}
      <div
        className="ml-6 glass rounded-2xl border border-white/5 overflow-hidden transition-all duration-500"
        style={{ boxShadow: isOpen ? `0 0 0 1px ${entry.color}30, 0 20px 60px ${entry.color}12` : "none" }}
      >
        {/* ── Header (always visible) ── */}
        <div
          className="w-full text-left px-8 py-6 flex items-center justify-between gap-6 group/btn cursor-default"
        >
          <div className="flex items-center gap-5 flex-1 min-w-0">

            {/* Icon */}
            <div
              className="p-2.5 rounded-xl shrink-0 transition-transform duration-300 group-hover/btn:scale-110"
              style={{ background: `${entry.color}20`, color: entry.color, border: `1px solid ${entry.color}35` }}
            >
              {entry.icon}
            </div>

            {/* Title block */}
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-black tracking-tight leading-tight">{entry.degree}</h3>
              <p className="text-sm font-semibold text-foreground/40 mt-1">{entry.institution}</p>
            </div>
          </div>

          {/* Right: year + status + chevron */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="hidden sm:flex flex-col items-end gap-1">
              <span className="text-xs font-black text-foreground/50 flex items-center gap-1.5">
                <Calendar size={12} /> {entry.period}
              </span>
              <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest"
                style={{ color: entry.status === "Completed" ? "#6b7280" : "#10b981" }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: entry.status === "Completed" ? "#6b7280" : "#10b981" }} />
                {entry.status}
              </span>
            </div>

            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-foreground/30 group-hover/btn:text-foreground/60 transition-colors"
            >
              <ChevronDown size={20} />
            </motion.div>
          </div>
        </div>

        {/* ── Expandable body ── */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="body"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="px-8 pb-8">
                {/* Divider */}
                <div className="h-px mb-6" style={{ background: `linear-gradient(90deg, ${entry.color}50, transparent)` }} />

                {/* Location */}
                <p className="flex items-center gap-2 text-[11px] font-bold text-foreground/30 uppercase tracking-widest mb-4">
                  <MapPin size={12} style={{ color: entry.color }} />
                  {entry.location}
                </p>

                {/* Description */}
                <p className="text-foreground/55 text-sm leading-relaxed mb-6">{entry.desc}</p>

                {/* Subject tags */}
                <div className="flex flex-wrap gap-2">
                  {entry.subjects.map((s, i) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="px-3 py-1.5 rounded-xl text-[11px] font-bold"
                      style={{
                        background: `${entry.color}15`,
                        border: `1px solid ${entry.color}35`,
                        color: entry.color + "dd",
                      }}
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Education() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section id="education" className="py-24 px-6 relative overflow-hidden bg-white/[0.01]">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-[10px] mb-3 block"
          >
            Education Path
          </motion.span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              <ScrambleWord text="My Academic " delay={0} />
              <ScrambleWord text="Journey" className="gradient-text" delay={350} />
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="text-foreground/35 text-sm"
            >
              Click any row to expand ✦
            </motion.p>
          </div>
        </div>

        {/* Accordion stack */}
        <div className="space-y-4">
          {entries.map((entry, i) => (
            <AccordionCard
              key={entry.num}
              entry={entry}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(i)}
              onClose={() => setOpenIdx(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
