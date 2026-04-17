import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Hackathon from "./components/Hackathon";
import FigmaDesigns from "./components/FigmaDesigns";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary/30 selection:text-primary-foreground">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
        <Hackathon />
        <FigmaDesigns />
        <Contact />
      </main>
      
      <Footer />

      {/* Background decoration */}
      <div className="fixed inset-0 z-[-1] pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[10%] w-[40rem] h-[40rem] bg-primary/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 p-4 glass rounded-2xl hover:bg-primary/20 hover:text-primary transition-all z-50 shadow-xl border-white/5 group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:-translate-y-1 transition-transform"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
    </div>
  );
}

export default App;
