import React from "react";
import { motion } from "framer-motion";
import { Trophy, Calendar, Users, Target, ExternalLink, Sparkles } from "lucide-react";

const hackathons = [
  {
    title: "Smart India Hackathon 2024",
    role: "Lead Developer",
    date: "Dec 2024",
    problem: "Inefficient resource allocation during natural disasters leading to delayed response times.",
    solution: "Developed an AI-driven platform that uses real-time data to predict resource needs and automate dispatch logistics.",
    outcome: "Reduced simulated response time by 40% and won the 'Innovation Excellence' award.",
    tech: ["React", "TensorFlow", "Node.js"],
    achievements: ["Grand Finalist", "Top 5 in India"],
    link: "#",
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "iFest 2024 - Cybersecurity",
    role: "Security Analyst",
    date: "Oct 2024",
    problem: "Lack of interactive tools to teach complex cyberattack vectors to beginners.",
    solution: "Built a gamified 'Hackers Panel' where users can safely execute and defend against simulated MITM and XSS attacks.",
    outcome: "Secured 1st place in the Technical Execution category and adopted as a teaching tool by the university club.",
    tech: ["JavaScript", "Python", "Docker"],
    achievements: ["Winner - Best Technical Execution"],
    link: "https://github.com/Vidhi2807/cybersecurity-prj",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Global AI Hackathon",
    role: "AI/ML Engineer",
    date: "Aug 2024",
    problem: "High cognitive load in managing multi-platform digital workflows.",
    solution: "Created 'Aura', an LLM-powered context-aware assistant that automates task categorization and scheduling.",
    outcome: "Recognized among the Top 10 global entries for 'Human-Centric AI Design'.",
    tech: ["PyTorch", "OpenAI", "React"],
    achievements: ["Special Mention for UX", "Global Top 10"],
    link: "https://aura-eight-phi.vercel.app/",
    color: "from-blue-500 to-indigo-500",
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
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-6 tracking-tight"
          >
            Hackathon <span className="gradient-text">Experiences</span>
          </motion.h2>
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
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${hack.color} text-white shadow-lg`}>
                    <Trophy size={24} />
                  </div>
                  <div className="text-xs font-bold text-foreground/40 uppercase tracking-widest flex items-center gap-2">
                    <Calendar size={14} /> {hack.date}
                  </div>
                </div>

                <h3 className="text-2xl font-black mb-2 group-hover:text-primary transition-colors">{hack.title}</h3>
                <div className="flex items-center gap-2 text-primary font-bold text-xs mb-8 uppercase tracking-widest opacity-60">
                  <Users size={16} /> {hack.role}
                </div>

                {/* Detailed Narrative */}
                <div className="space-y-6 mb-8">
                  <div>
                    <span className="text-[10px] font-black uppercase text-primary tracking-widest mb-1 block">Problem</span>
                    <p className="text-sm text-foreground/60 leading-relaxed">{hack.problem}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-emerald-500 tracking-widest mb-1 block">Solution</span>
                    <p className="text-sm text-foreground/60 leading-relaxed">{hack.solution}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-amber-500 tracking-widest mb-1 block">Outcome</span>
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
                      <Target size={14} className="text-amber-500" />
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
