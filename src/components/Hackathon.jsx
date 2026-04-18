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
    alignBtn: "items-end",
    image: "/Sangamuni.png", // Copy image 1 here with this name!
  },
  {
    title: "Craftathon",
    role: "UI/UX Designer & Developer",
    team: "Team Fasal Rakshak",
    date: "Apr 3–4, 2025",
    duration: "36 hrs",
    problem: "Farmers receive complex soil reports (N, P, K, pH, micronutrients) that are hard to interpret, leading to poor crop selection and inefficient fertilizer usage.",
    solution: "Built Fasal Rakshak — an AgriTech platform providing smart crop recommendations, fertilizer guidance, soil health analysis with deficiency detection, and multi-input support (manual, PDF, image OCR) in a farmer-friendly interface.",
    outcome: "🥈 Ranked 2nd Domain-wise and 9th overall out of 130+ teams. Cleared multiple rounds.",
    tech: ["React", "Firebase", "AI/ML", "OCR", "Leaflet"],
    achievements: ["2nd Winner (Domain-wise) 🥈", "9th Position out of 130+ Teams"],
    teammates: ["Dhvanit Kanabar", "Rishikesh Singh", "Kamlesh Chandela"],
    link: "https://fasalrakshak.vercel.app",
    color: "#10b981",  // emerald — Craftathon
    alignBtn: "items-end",
    image: "/Craftathon.png", // Copy image 2 here with this name!
  },
  {
    title: "ElectroSphere 2K26",
    role: "Full Stack Developer",
    team: "Team InnovateX",
    date: "Jan 7, 2026",
    duration: "24 hrs",
    problem: "Security tools often glorify exploitation. There was a gap for an ethical, explainable platform that teaches security through structured risk reasoning rather than live attacks.",
    solution: "Built ThreatLens — a static cybersecurity analysis & threat-modeling platform that analyzes system architectures to identify risks, attack surfaces, and trust boundaries with clear, academically defensible explanations. No payloads. No weaponization.",
    outcome: "🥈 Secured 2nd Place in Software Edition at ElectroSphere DM 2K26 organized by TechX Club, Swaminarayan University.",
    tech: ["React", "Firebase", "Node.js", "Security Modeling"],
    achievements: ["2nd Place — Software Edition 🥈", "TechX Club, Swaminarayan University"],
    teammates: ["Chitt Hirapara", "Rachit Kakkad", "Vineet Prajapati"],
    link: "https://aura-eight-phi.vercel.app/",
    color: "#6366f1",  // indigo — ElectroSphere
    alignBtn: "items-start",
    image: "/electrosphere.png", // Copy image 3 here with this name!
  },
];

export default function Hackathon() {
  return (
    <section id="hackathons" className="py-24 px-6 relative overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto">
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

        <div className="flex flex-wrap justify-center gap-8">
          {hackathons.map((hack, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-full w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              <div className="group [perspective:1000px] h-[480px]">
                <div className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ease-in-out group-hover:[transform:rotateY(180deg)]">
                  
                  {/* ── FRONT (Image + Basic Info) ── */}
                  <div className="absolute inset-0 [backface-visibility:hidden] rounded-[2.5rem] border overflow-hidden bg-black/80"
                       style={{ borderColor: `${hack.color}40`, boxShadow: `0 20px 40px ${hack.color}15` }}>
                     
                     {/* Gorgeous Blurred Background Layer */}
                     <img src={hack.image} alt={hack.title} className="absolute inset-0 w-full h-full object-cover scale-125 blur-[30px] opacity-40 mix-blend-screen" />
                     
                     {/* Deep Text Gradient (Now safely behind the photo!) */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

                     {/* Crisp Uniform Foreground Photo */}
                     <div className="absolute inset-x-0 top-0 h-[60%] p-5 pb-0 flex items-center justify-center z-10 w-full">
                       <img src={hack.image} alt={hack.title} className="w-full h-full object-cover object-center rounded-2xl shadow-2xl transition-transform duration-1000 group-[.group-hover]:scale-105" />
                     </div>
                     
                     <div className="absolute top-6 left-6 p-3 rounded-2xl text-white shadow-xl backdrop-blur-md z-20" style={{ background: `${hack.color}90` }}>
                        <Trophy size={24} />
                     </div>
                     <div className="absolute top-6 right-6 z-20">
                        <div className="px-3 py-1.5 rounded-xl bg-black/60 text-white backdrop-blur-md border border-white/10 text-[9px] font-black uppercase tracking-widest flex items-center gap-2">
                           <Calendar size={12} /> {hack.date}
                        </div>
                     </div>
                     
                     <div className="absolute bottom-6 left-6 right-6 z-20">
                        <h3 className="text-2xl md:text-3xl font-black mb-2 text-white leading-tight">{hack.title}</h3>
                        <div className="flex items-center gap-2 font-bold text-[10px] mb-3 uppercase tracking-widest opacity-90" style={{ color: hack.color }}>
                          <Users size={14} /> {hack.role}
                        </div>
                        {hack.team && (
                          <div className="text-[10px] font-bold text-white/70 uppercase tracking-widest">
                            {hack.team}
                            {hack.teammates?.length > 0 && (
                               <span className="normal-case ml-2 text-white/40 font-normal truncate inline-block align-bottom max-w-[150px] sm:max-w-[200px]">
                               · {hack.teammates.join(", ")}
                               </span>
                            )}
                          </div>
                        )}
                        <p className="mt-5 text-[9px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-2">
                          Hover to view details <Sparkles size={12} />
                        </p>
                     </div>
                  </div>

                  {/* ── BACK (Text Details + Actions) ── */}
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[2.5rem] border overflow-hidden glass p-6 sm:p-8 flex flex-col"
                       style={{ borderColor: `${hack.color}40` }}>
                      <div className="absolute inset-0 opacity-[0.03]" style={{ background: `radial-gradient(circle at 50% 50%, ${hack.color}, transparent 70%)` }} />
                      
                      <div className="relative z-10 flex-grow space-y-4 overflow-y-auto">
                        <div>
                          <span className="text-[9px] font-black uppercase tracking-widest mb-1 block" style={{ color: hack.color }}>Problem</span>
                          <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed font-medium">{hack.problem}</p>
                        </div>
                        <div>
                          <span className="text-[9px] font-black uppercase tracking-widest mb-1 block" style={{ color: "#10b981" }}>Solution</span>
                          <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed font-medium">{hack.solution}</p>
                        </div>
                        <div>
                          <span className="text-[9px] font-black uppercase tracking-widest mb-1 block" style={{ color: "#f59e0b" }}>Outcome</span>
                          <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed font-bold">{hack.outcome}</p>
                        </div>
                        
                        <div className="pt-2 flex flex-wrap gap-2">
                          {hack.tech.map((t, idx) => (
                            <span key={idx} className="px-2.5 py-1 bg-white/5 rounded text-[9px] font-bold text-foreground/50 border border-white/5">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Footer Actions */}
                      <div className={`relative z-10 mt-4 pt-4 border-t border-white/10 flex ${hack.alignBtn} justify-between`}>
                         <div className="flex flex-col gap-1.5">
                           {hack.achievements.map((ach, idx) => (
                             <div key={idx} className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest mt-1" style={{ color: hack.color }}>
                               <Target size={12} /> <span className="truncate max-w-[150px] sm:max-w-[200px]">{ach}</span>
                             </div>
                           ))}
                         </div>
                         <a href={hack.link} target="_blank" rel="noopener noreferrer" 
                            className="flex items-center gap-1.5 p-2 sm:px-3 sm:py-2 rounded-lg text-white shadow-md hover:scale-105 transition-all outline-none shrink-0"
                            style={{ background: hack.color }}>
                           <span className="hidden sm:block text-[9px] font-black uppercase tracking-widest whitespace-nowrap">Demo</span>
                           <ExternalLink size={12} />
                         </a>
                      </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
