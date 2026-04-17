import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";

const certificates = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "Dec 2023",
    icon: <Award className="text-orange-400" />,
    link: "#",
  },
  {
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Coursera",
    date: "Aug 2023",
    icon: <Award className="text-blue-500" />,
    link: "#",
  },
  {
    name: "Full Stack Open 2023",
    issuer: "University of Helsinki",
    date: "May 2023",
    icon: <Award className="text-red-500" />,
    link: "#",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-12">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            My Certifications
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-8 tracking-tight"
          >
            Professional <span className="gradient-text">Recognition</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl border-white/5 hover:bg-white/5 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-primary/10 transition-colors">
                    {cert.icon}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-foreground/40 uppercase tracking-widest">
                    <Calendar size={14} />
                    {cert.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                  {cert.name}
                </h3>
                <p className="text-foreground/40 text-sm font-medium mb-8">
                  Issued by <span className="text-foreground/60">{cert.issuer}</span>
                </p>
              </div>

              <a 
                href={cert.link}
                className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 rounded-xl text-sm font-bold text-foreground/60 hover:text-white hover:bg-primary transition-all group-hover:border-primary/20 border border-transparent"
              >
                View Certificate <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
