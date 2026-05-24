"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function AnimatedSection({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const directionMap = {
    up:    { hidden: { y: 32 }, visible: { y: 0 } },
    down:  { hidden: { y: -32 }, visible: { y: 0 } },
    left:  { hidden: { x: -32 }, visible: { x: 0 } },
    right: { hidden: { x: 32 }, visible: { x: 0 } },
    none:  { hidden: {}, visible: {} },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directionMap[direction].hidden }}
      animate={isInView ? { opacity: 1, ...directionMap[direction].visible } : {}}
      transition={{ duration: 0.6, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}