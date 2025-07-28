"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface DotProps {
  width: string;
  height: string;
  left: string;
  top: string;
  id: number;
}

export function FooterBackgroundDots() {
  const [dots, setDots] = useState<DotProps[]>([]);

  // Generate random dots on client-side only
  useEffect(() => {
    const generatedDots = Array.from({ length: 20 }).map((_, i) => ({
      width: `${Math.random() * 10 + 3}px`,
      height: `${Math.random() * 10 + 3}px`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      id: i
    }));
    
    setDots(generatedDots);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((dot) => (
        <motion.div
          key={`footer-dot-${dot.id}`}
          className="absolute rounded-full bg-white/10"
          style={{
            width: dot.width,
            height: dot.height,
            left: dot.left,
            top: dot.top,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
