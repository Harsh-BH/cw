"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface AnimatedSvgProps {
  colorScheme?: "blue";
}

interface CircleProps {
  cx: number;
  cy: number;
  r: number;
  fill: string;
}

export function AnimatedSvg({ colorScheme = "blue" }: AnimatedSvgProps) {
  // Blue color scheme values
  const colors = {
    primary: "#3b82f6",
    secondary: "#60a5fa",
    accent1: "#93c5fd",
    accent2: "#1d4ed8",
    dark: "#1e40af"
  };

  // State to hold client-side generated circles
  const [circles, setCircles] = useState<CircleProps[]>([]);

  // Generate random circles on client-side only
  useEffect(() => {
    const generatedCircles = Array.from({ length: 10 }).map((_, index) => ({
      cx: 100 + Math.random() * 600,
      cy: 100 + Math.random() * 600,
      r: 5 + Math.random() * 20,
      fill: index % 2 === 0 ? colors.secondary : colors.accent1
    }));
    setCircles(generatedCircles);
  }, [colors.secondary, colors.accent1]);

  return (
    <div className="absolute inset-0 w-full h-full opacity-15">
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 800 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Enhanced gradient definitions */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <motion.stop
              offset="0%"
              stopColor={colors.primary}
              animate={{
                stopColor: [colors.primary, colors.secondary, colors.accent1, colors.primary],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.stop
              offset="100%"
              stopColor={colors.accent2}
              animate={{
                stopColor: [colors.accent2, colors.primary, colors.secondary, colors.accent2],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </linearGradient>
          
          <radialGradient id="circleGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor={colors.primary} stopOpacity="0.4" />
            <stop offset="100%" stopColor={colors.primary} stopOpacity="0" />
          </radialGradient>
          
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <motion.stop
              offset="0%"
              stopColor={colors.secondary}
              animate={{
                stopColor: [colors.secondary, colors.accent1, colors.primary, colors.secondary],
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.stop
              offset="100%"
              stopColor={colors.accent1}
              animate={{
                stopColor: [colors.accent1, colors.primary, colors.accent2, colors.accent1],
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </linearGradient>
        </defs>
        
        {/* Background main circle with gradient */}
        <motion.circle 
          cx="400" 
          cy="400" 
          r="200" 
          fill="none" 
          stroke="url(#gradient1)" 
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Flowing path with gradient */}
        <motion.path
          d="M100,100 Q400,50 700,100 T800,400 T700,700 T400,800 T100,700 T0,400 T100,100"
          fill="none"
          stroke="url(#gradient2)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
        />
        
        {/* Gradient circle background */}
        <motion.circle
          cx="400"
          cy="400"
          r="300"
          fill="url(#circleGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2 }}
        />
        
        {/* Floating circles - client-side rendered */}
        {circles.map((circle, index) => (
          <motion.circle
            key={index}
            cx={circle.cx}
            cy={circle.cy}
            r={circle.r}
            fill={circle.fill}
            opacity={0.6}
            initial={{ scale: 0 }}
            animate={{ 
              scale: [0, 1, 0.8, 1],
              opacity: [0, 0.8, 0.6, 0.8]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: index * 0.3
            }}
          />
        ))}
        
        {/* Dynamic waves */}
        <motion.path
          d="M0,400 C100,350 200,450 300,400 C400,350 500,450 600,400 C700,350 800,450 900,400"
          fill="none"
          stroke={colors.secondary}
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 2 }}
        />
        
        <motion.path
          d="M0,450 C100,400 200,500 300,450 C400,400 500,500 600,450 C700,400 800,500 900,450"
          fill="none"
          stroke={colors.primary}
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 2.3 }}
        />
      </motion.svg>
    </div>
  );
}
