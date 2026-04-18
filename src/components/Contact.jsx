import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, User, AtSign, Github, Linkedin, Youtube, Twitter, Code2 } from "lucide-react";
import ScrambleWord from "./ScrambleWord";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully!");
      setFormState({ name: "", email: "", message: "" });
    }, 2000);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Get In Touch
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">
            <ScrambleWord text="Let's Build Something " delay={0} />
            <ScrambleWord text="Great" className="gradient-text" delay={500} />
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
            <p className="text-foreground/50 text-lg leading-relaxed mb-12">
              Have a project in mind or just want to say hi? I&apos;m always 
              open to discussing new projects, creative ideas or 
              opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              {[
                { 
                  icon: <Mail className="text-blue-400" />, 
                  label: "Email", 
                  value: "vidhimandaliya81@gmail.com",
                  href: "mailto:vidhimandaliya81@gmail.com"
                },
                { 
                  icon: <Phone className="text-purple-400" />, 
                  label: "Phone", 
                  value: "+91 8140460927",
                  href: "tel:+918140460927"
                },
                { 
                  icon: <MapPin className="text-pink-400" />, 
                  label: "Location", 
                  value: "India, Bharuch",
                  href: "https://www.google.com/maps/search/?api=1&query=Bharuch,+India"
                },
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href}
                  target={item.label === "Location" ? "_blank" : undefined}
                  rel={item.label === "Location" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-6 glass p-6 rounded-3xl border-white/5 hover:bg-white/5 transition-all group cursor-pointer"
                >
                  <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-primary/10 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-foreground/40 text-xs font-bold uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-lg font-bold">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-xl font-bold mb-6">Social Profiles</h4>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: <Github size={22} />, href: "https://github.com/Vidhi2807", label: "GitHub", color: "hover:text-[#333]" },
                  { icon: <Linkedin size={22} />, href: "https://www.linkedin.com/in/vidhi-mandaliya-325240388/", label: "LinkedIn", color: "hover:text-[#0077b5]" },
                  { icon: <Twitter size={22} />, href: "https://x.com/VidhiM_2810", label: "Twitter", color: "hover:text-[#1da1f2]" },
                  { icon: <Youtube size={22} />, href: "https://www.youtube.com/shorts/Ni2YHZd58vc", label: "YouTube", color: "hover:text-[#ff0000]" },
                  { icon: <Code2 size={22} />, href: "https://leetcode.com/u/VidhiM_2810/", label: "LeetCode", color: "hover:text-[#ffa116]" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className={`p-4 glass rounded-2xl border-white/5 ${social.color} transition-all duration-300 flex items-center justify-center`}
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[2.5rem] border-white/5"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <div className="relative">
                  <User size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-foreground/20" />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full pl-14 pr-6 py-5 bg-white/5 border border-white/5 rounded-2xl focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-foreground placeholder:text-foreground/20 font-medium"
                  />
                </div>
                
                <div className="relative">
                  <AtSign size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-foreground/20" />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full pl-14 pr-6 py-5 bg-white/5 border border-white/5 rounded-2xl focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-foreground placeholder:text-foreground/20 font-medium"
                  />
                </div>

                <div className="relative">
                  <MessageSquare size={18} className="absolute left-6 top-6 text-foreground/20" />
                  <textarea
                    name="message"
                    required
                    rows="6"
                    placeholder="Tell me about your project..."
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full pl-14 pr-6 py-6 bg-white/5 border border-white/5 rounded-2xl focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-foreground placeholder:text-foreground/20 font-medium resize-none"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full py-5 bg-primary text-white rounded-2xl font-black flex items-center justify-center gap-3 shadow-xl shadow-primary/25 hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                {!isSubmitting && <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
