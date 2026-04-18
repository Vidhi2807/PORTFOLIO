import React from "react";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink, ImageOff } from "lucide-react";

const certificates = [
  {
    name: "SU Hackathon 2026",
    subtitle: "Certificate of Participation",
    issuer: "Sangam University, Bhilwara",
    date: "Mar 14–15, 2026",
    badge: "Participant",
    badgeColor: "#6366f1",
    desc: "Code Pulse — Innovation & Technological Advancement in Textile City Bhilwara, organized by Dept. of CS & Engineering.",
    image: "/certificates/su.jpg",
  },
  {
    name: "ElectroSphere 2K26",
    subtitle: "2nd Place Winner — Software Edition",
    issuer: "TechX Club, Swaminarayan University",
    date: "Jan 7, 2026",
    badge: "🥈 2nd Place",
    badgeColor: "#f59e0b",
    desc: "Secured 2nd Place in the Software Edition as Team InnovateX, organized by TechX DM Club under Faculty of Engineering.",
    image: "/certificates/electrosphere.jpeg",
  },
];

function CertCard({ cert, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      className="group [perspective:1000px] h-80"
    >
      <div className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ease-in-out group-hover:[transform:rotateY(180deg)]">

        {/* ── FRONT ── */}
        <div
          className="absolute inset-0 [backface-visibility:hidden] rounded-3xl border border-white/8 glass overflow-hidden flex flex-col p-7"
        >
          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: `linear-gradient(90deg, transparent, ${cert.badgeColor}, transparent)` }} />
          <div className="absolute inset-0 opacity-[0.06]"
            style={{ background: `radial-gradient(circle at 20% 20%, ${cert.badgeColor}, transparent 60%)` }} />

          {/* Header */}
          <div className="relative z-10 flex items-start justify-between mb-5">
            <div className="p-3 bg-white/5 rounded-2xl"
              style={{ border: `1px solid ${cert.badgeColor}30` }}>
              <Award size={24} style={{ color: cert.badgeColor }} />
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-xs font-black uppercase tracking-widest"
                style={{ color: cert.badgeColor }}>{cert.badge}</span>
              <span className="flex items-center gap-1 text-[10px] font-bold text-foreground/30 uppercase tracking-widest">
                <Calendar size={10} /> {cert.date}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex-1">
            <h3 className="text-xl font-black tracking-tight mb-1">{cert.name}</h3>
            <p className="text-xs font-bold mb-1" style={{ color: cert.badgeColor + "cc" }}>{cert.subtitle}</p>
            <p className="text-[10px] font-bold text-foreground/30 uppercase tracking-widest mb-4">
              {cert.issuer}
            </p>
            <p className="text-foreground/45 text-xs leading-relaxed">{cert.desc}</p>
          </div>

          {/* Bottom hint */}
          <p className="relative z-10 text-center text-[9px] font-bold uppercase tracking-widest text-foreground/20 mt-4">
            Hover to view certificate →
          </p>
        </div>

        {/* ── BACK (certificate image) ── */}
        <div
          className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl border overflow-hidden"
          style={{ borderColor: `${cert.badgeColor}40` }}
        >
          {/* Certificate image */}
          <img
            src={cert.image}
            alt={cert.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />

          {/* Fallback if image not found */}
          <div
            className="absolute inset-0 flex-col items-center justify-center gap-3 bg-card hidden"
            style={{ display: "none" }}
          >
            <ImageOff size={32} className="text-foreground/20" />
            <p className="text-xs font-bold text-foreground/30 text-center px-6">
              Add your certificate image to<br />
              <code className="font-mono text-primary/60">public/certificates/</code>
            </p>
          </div>

          {/* Overlay gradient at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-white font-black text-sm">{cert.name}</p>
            <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest">{cert.issuer}</p>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-[10px] mb-4 block"
          >
            My Certifications
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-4 tracking-tight"
          >
            Professional <span className="gradient-text">Recognition</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/35 text-sm"
          >
            Hover any card to view the certificate ✦
          </motion.p>
        </div>

        {/* 2-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, i) => (
            <CertCard key={i} cert={cert} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
