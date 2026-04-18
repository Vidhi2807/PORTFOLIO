import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!?";

/**
 * ScrambleWord — scroll-triggered character decode animation.
 *
 * Props:
 *   text      — the real text to reveal
 *   className — optional class (e.g. "gradient-text")
 *   delay     — ms before decode starts (default 0)
 *   speed     — ms between each character reveal (default 36)
 */
export default function ScrambleWord({ text, className = "", delay = 0, speed = 36 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [chars, setChars] = useState(() =>
    text.split("").map((c) => (c === " " ? " " : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
  );
  const done = useRef(false);

  useEffect(() => {
    if (!inView || done.current) return;
    done.current = true;
    const tid = setTimeout(() => {
      let step = 0;
      const iid = setInterval(() => {
        setChars(
          text.split("").map((char, i) => {
            if (char === " ") return " ";
            if (i < step) return char;
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
        );
        step++;
        if (step > text.length) clearInterval(iid);
      }, speed);
    }, delay);
    return () => clearTimeout(tid);
  }, [inView, text, delay, speed]);

  return (
    <span ref={ref} className={className}>
      {chars.map((ch, i) => (
        <span key={i} style={{ display: "inline" }}>
          {ch}
        </span>
      ))}
    </span>
  );
}
