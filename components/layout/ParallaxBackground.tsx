"use client";

import { useEffect, useState } from "react";
import Rhombus from "./Rhombus"; 

const RHOMBUS_COUNT = 25; // ✅ Increase count for better coverage

// ✅ Generate Stacked Rhombus Properties
const generateRhombuses = () => {
  if (typeof window === "undefined") return [];

  return Array.from({ length: RHOMBUS_COUNT }, (_, index) => ({
    id: `rhombus-${index}`,
    size: Math.floor(Math.random() * 250) + 150, // ✅ Medium to Large Rhombuses (150px - 400px)
    x: Math.random() * window.innerWidth, // ✅ Spread across entire width
    y: Math.random() * window.innerHeight * 2, // ✅ Spread **beyond full page height**
    speed: Math.random() * 0.5 + 0.2, // ✅ Some move faster, some slower
    opacity: Math.random() * 0.5 + 0.5, // ✅ More visible
    index,
  }));
};

export default function ParallaxBackground() {
  const [rhombuses, setRhombuses] = useState<Array<{
    id: string;
    size: number;
    x: number;
    y: number;
    speed: number;
    opacity: number;
    index: number;
  }>>([]);

  useEffect(() => {
    setRhombuses(generateRhombuses());
  }, []);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {rhombuses.map((rhombus) => (
        <Rhombus key={rhombus.id} {...rhombus} index={rhombus.index} totalRhombuses={RHOMBUS_COUNT} />
      ))}
    </div>
  );
}
