import React from "react";
import { motion } from "framer-motion";
import { Trophy, Calendar, Users, Target, ExternalLink, Sparkles } from "lucide-react";
import ScrambleWord from "./ScrambleWord";

const hackathons = [
  {
    title: "SU2026",
    role: "Full Stack Developer (MERN)",
    team: "Team CodePulse",
    date: "Mar 14–15, 2026",
    duration: "36 hrs",
    problem: "Delays in emergency response due to lack of coordination between hospitals, police, and fire departments, causing critical loss of time.",
    solution: "Built CERS — a Centralized Emergency Response System with real-time location tracking, one-click distress signals, and a unified network for all emergency services using MERN stack.",
    outcome: "🏆 Selected as Finalist after clearing 3 rigorous evaluation rounds and a final presentation among many talented teams.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Firebase", "Maps API"],
    achievements: ["Finalist 🏆", "Cleared 3 Evaluation Rounds", "Final Presentation Stage"],
    teammates: ["Dhvanit Kanabar", "Harshit Pandya", "Devanshi Vadiya"],
    link: "https://cers-plus.web.app/",
    color: "#f59e0b",  // amber — SU2026
  },
  {
    title: "Craftathon",
    role: "UI/UX Designer & Developer",
    team: "Team Fasal Rakshak",
    date: "Apr 3–4, 2025",
    duration: "36 hrs",
    problem: "Farmers receive complex soil reports (N, P, K, pH, micronutrients) that are hard to interpret, leading to poor crop selection and inefficient fertilizer usage.",
    solution: "Built Fasal Rakshak — an AgriTech platform providing smart crop recommendations, fertilizer guidance, soil health analysis with deficiency detection, and multi-input support (manual, PDF, image OCR) in a farmer-friendly interface.",
    outcome: "🏆 Ranked 9th out of 134 teams. Cleared multiple rounds to reach Top 25, then Top 10 in the final standings.",
    tech: ["React", "Firebase", "AI/ML", "OCR", "Leaflet"],
    achievements: ["Top 10 🏆", "9th / 134 Teams", "Cleared Multiple Evaluation Rounds"],
    teammates: ["Dhvanit Kanabar", "Rishikesh Singh", "Kamlesh Chandela"],
    link: "https://fasalrakshak.vercel.app",
    color: "#10b981",  // emerald — Craftathon
  },
  {
    title: "ElectroSphere 2K26",
    role: "Full Stack Developer",
    team: "Team InnovateX",
    date: "Jan 2026",
    problem: "Security tools often glorify exploitation. There was a gap for an ethical, explainable platform that teaches security through structured risk reasoning rather than live attacks.",
    solution: "Built ThreatLens — a static cybersecurity analysis & threat-modeling platform that analyzes system architectures to identify risks, attack surfaces, and trust boundaries with clear, academically defensible explanations. No payloads. No weaponization.",
    outcome: "🥈 Secured 2nd Place in Software Edition at ElectroSphere DM 2K26 organized by TechX Club, Swaminarayan University.",
    tech: ["React", "Firebase", "Node.js", "Security Modeling"],
    achievements: ["2nd Place — Software Edition 🥈", "TechX Club, Swaminarayan University"],
    teammates: ["Chitt Hirapara", "Rachit Kakkad", "Vineet Prajapati"],
    link: "https://aura-eight-phi.vercel.app/",
    color: "#6366f1",  // indigo — ElectroSphere
  },
];

export default function Hackathon() {
  return (
    <section id="hackathons" className="py-24 px-6 relative overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/10 text-primary text-xs font-bold uppercase tracking-wider mb-6"
          >
            <Sparkles size={14} className="text-primary" />
            Competitive Coding
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            <ScrambleWord text="Hackathon " delay={0} />
            <ScrambleWord text="Experiences" className="gradient-text" delay={350} />
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {hackathons.map((hack, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-full"
            >
              <div className="glass p-8 rounded-[2.5rem] border-white/5 h-full transition-all duration-500 hover:border-primary/30 hover:shadow-2xl">
                
                <div className="flex items-center justify-between mb-8">
                  <div className="p-4 rounded-2xl text-white shadow-lg" style={{ background: hack.color }}>
                    <Trophy size={24} />
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="text-xs font-bold text-foreground/40 uppercase tracking-widest flex items-center gap-2">
                      <Calendar size={14} /> {hack.date}
                    </div>
                    {hack.duration && (
                      <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                        ⏱ {hack.duration}
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-black mb-2 group-hover:text-primary transition-colors">{hack.title}</h3>
                <div className="flex items-center gap-2 text-primary font-bold text-xs mb-1 uppercase tracking-widest opacity-60">
                  <Users size={16} /> {hack.role}
                </div>
                {hack.team && (
                  <div className="text-[10px] font-bold text-foreground/30 uppercase tracking-widest mb-4">
                    {hack.team}
                    {hack.teammates?.length > 0 && (
                      <span className="normal-case ml-2 text-foreground/20 font-normal">
                        · {hack.teammates.join(", ")}
                      </span>
                    )}
                  </div>
                )}

                {/* Detailed Narrative */}
                <div className="space-y-6 mb-8">
                  <div>
                    <span className="text-[10px] font-black uppercase text-primary tracking-widest mb-1 block">Problem</span>
                    <p className="text-sm text-foreground/60 leading-relaxed">{hack.problem}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest mb-1 block" style={{ color: "#10b981" }}>Solution</span>
                    <p className="text-sm text-foreground/60 leading-relaxed">{hack.solution}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest mb-1 block" style={{ color: "#f59e0b" }}>Outcome</span>
                    <p className="text-sm text-foreground/60 leading-relaxed font-bold">{hack.outcome}</p>
                  </div>
                </div>

                {/* Achievements & Tags */}
                <div className="pt-6 border-t border-white/5 flex flex-wrap gap-2 mb-6">
                  {hack.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/5 rounded-lg text-[9px] font-bold text-foreground/40 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="space-y-2">
                  {hack.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[10px] font-bold text-primary/80 uppercase tracking-wider">
                      <Target size={14} style={{ color: "#f59e0b" }} />
                      {ach}
                    </div>
                  ))}
                </div>

                <a 
                  href={hack.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-primary text-xs font-black uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  View Repo <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
