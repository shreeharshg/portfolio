'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useTheme } from '@/context/ThemeProvider';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const { theme } = useTheme();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[4px] z-[9999] origin-left" // ✅ Ensure transform starts from left
      style={{
        scaleX, // ✅ Controls the progress
        transformOrigin: "left", // ✅ Fix for starting at center
        background:
          theme === 'dark'
            ? 'linear-gradient(to right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 1))'
            : 'linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6))',
      }}
    />
  );
}
