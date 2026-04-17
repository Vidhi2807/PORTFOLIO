import React from "react";
import { motion } from "framer-motion";

export default function Logo({ className = "" }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`flex items-center justify-center w-10 h-10 border-2 border-white rounded-full ${className}`}
    >
      <span className="text-white text-base font-black tracking-tight leading-none">VM</span>
    </motion.div>
  );
}
