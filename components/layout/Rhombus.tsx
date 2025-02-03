"use client";

import { motion, useScroll, useTransform } from "framer-motion";


interface RhombusProps {
  x: number;
  y: number;
  size: number;
  opacity: number;
  index: number;
  totalRhombuses: number;
}

const Rhombus = ({ x, y, size, opacity, index, totalRhombuses }: RhombusProps) => {
  const { scrollYProgress } = useScroll(); // ✅ Track full scroll range

  // ✅ Ensure scrolling motion continues throughout the full page scroll
  let maxMovement;
  if (index < totalRhombuses * 0.3) {
    maxMovement = -600; // ✅ Top Rhombuses (Move fully down)
  } else if (index < totalRhombuses * 0.6) {
    maxMovement = -400; // ✅ Middle Rhombuses (Move 60% down)
  } else {
    maxMovement = -200; // ✅ Bottom Rhombuses (Move 30-40% down)
  }

  // ✅ Ensure rhombuses move throughout the entire scrolling
  const yMovement = useTransform(scrollYProgress, [0, 1], ["0px", `${maxMovement}px`]);

  return (
    <motion.div
      className="rhombus"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${x}px`,
        top: `${y}px`,
        opacity: opacity,
        y: yMovement,
      }}
  
      transition={{
        duration: 40, // ✅ Even **slower** transition for smoother effect
        ease: "linear",
      }}
    />
  );
};

export default Rhombus;
