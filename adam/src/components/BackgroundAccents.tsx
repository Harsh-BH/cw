"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface BackgroundAccentsProps {
  variant?: "primary" | "secondary" | "contact";
  colorTheme?: "blue";
}

interface DotProps {
  background: string;
  left: string;
  top: string;
  id: number;
}

export function BackgroundAccents({ 
  variant = "primary", 
  colorTheme = "blue" 
}: BackgroundAccentsProps) {
  const blueTheme = {
    primary: {
      base: "#3b82f6",
      accent: "#60a5fa",
      gradient: "linear-gradient(135deg, #3b82f6, #60a5fa)"
    },
    secondary: {
      base: "#1d4ed8",
      accent: "#3b82f6",
      gradient: "linear-gradient(135deg, #1d4ed8, #3b82f6)"
    },
    contact: {
      base: "#2563eb",
      accent: "#60a5fa",
      gradient: "linear-gradient(135deg, #2563eb, #60a5fa)"
    }
  };

  const selectedColors = blueTheme[variant];
  
  // State to hold client-side generated dots
  const [dots, setDots] = useState<DotProps[]>([]);

  // Generate random dots on client-side only
  useEffect(() => {
    const generatedDots = Array.from({ length: 20 }).map((_, i) => ({
      background: i % 2 === 0 ? selectedColors.base : selectedColors.accent,
      left: `${10 + Math.random() * 80}%`,
      top: `${10 + Math.random() * 80}%`,
      id: i
    }));
    setDots(generatedDots);
  }, [selectedColors.base, selectedColors.accent]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0 opacity-30">
      {/* Corner gradient accents */}
      <motion.div
        className="absolute -top-20 -left-20 w-60 h-60 rounded-full"
        style={{ background: selectedColors.gradient, opacity: 0.3 }}
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 20, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full"
        style={{ background: selectedColors.gradient, opacity: 0.4 }}
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -20, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Floating gradient shapes */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-20 h-20"
        style={{ 
          background: selectedColors.gradient,
          borderRadius: "40%",
          opacity: 0.35
        }}
        animate={{ 
          y: [0, -30, 0],
          x: [0, 15, 0],
          rotate: [0, 15, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-16 h-16"
        style={{ 
          background: selectedColors.gradient,
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          opacity: 0.3
        }}
        animate={{ 
          y: [0, 40, 0],
          x: [0, -20, 0],
          rotate: [0, 360, 0],
          borderRadius: [
            "30% 70% 70% 30% / 30% 30% 70% 70%",
            "70% 30% 30% 70% / 70% 70% 30% 30%",
            "30% 70% 70% 30% / 30% 30% 70% 70%"
          ]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Gradient background mesh */}
      <div className="absolute inset-0 opacity-15" style={{
        background: `radial-gradient(circle at 30% 40%, ${selectedColors.base}40, transparent 35%), 
                    radial-gradient(circle at 70% 60%, ${selectedColors.accent}40, transparent 35%)`
      }}></div>
      
      {/* Small dots - client-side rendered */}
      {dots.map((dot) => (
        <motion.div
          key={`accent-dot-${dot.id}`}
          className="absolute rounded-full w-2 h-2"
          style={{ 
            background: dot.background,
            left: dot.left,
            top: dot.top
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.7, 0]
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: dot.id * 0.7,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
