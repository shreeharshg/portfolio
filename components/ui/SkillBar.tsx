'use client';

import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
}

export default function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  return (
    <div className="w-full">
      {/* Skill Name & Percentage */}
      <div className="flex justify-between mb-2">
        <span className="text-gray-300">{name}</span>
        <span className="text-gray-400">{level}%</span>
      </div>

      {/* Background Bar */}
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden relative">
        {/* Animated Filling */}
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ width: "0%" }} // ✅ Starts empty
          whileInView={{ width: `${level}%` }} // ✅ Animates to skill level
          viewport={{ once: true }} // ✅ Ensures animation runs only once
          transition={{ duration: 1, delay }}
        />
      </div>
    </div>
  );
}
