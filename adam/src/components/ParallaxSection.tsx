"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  gradientOverlay?: boolean;
  id?: string; // Make sure id is in the props interface
}

export function ParallaxSection({ 
  children, 
  className = "",
  strength = 10,
  gradientOverlay = true,
  id // Accept the id prop
}: ParallaxSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Enhanced parallax effect with configurable strength
  const translateY = useTransform(scrollYProgress, [0, 1], ["0%", `-${strength}%`]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.6, 1, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    // Pass the id to the section element
    <section id={id} ref={ref} className={`${className} overflow-hidden relative`}>
      {gradientOverlay && (
        <div className="absolute inset-0 z-0 opacity-30 bg-gradient-to-b from-transparent via-white/30 to-transparent pointer-events-none"></div>
      )}
      <motion.div style={{ y: translateY, opacity, scale }} className="relative z-10">
        {children}
      </motion.div>
    </section>
  );
}
