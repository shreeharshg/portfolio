'use client'

import { motion, useScroll, useSpring, } from 'framer-motion'
import { useTheme } from '@/context/ThemeProvider'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const { theme } = useTheme()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <>
      {/* ✅ Ensure Progress Bar is Visible */}
      <motion.div
        className={`progress-bar ${theme}`} // ✅ Apply theme class
        style={{
          scaleX,
          height: "3px", // ✅ Ensure height is set
          opacity: 1, // ✅ Ensure it's visible
          background: theme === "dark"
            ? "linear-gradient(to right, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.5))"
            : "linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4))"
        }}
      />

      {/* ✅ Circular Scroll Indicator (Optional) */}
      {/* <div className="fixed right-4 bottom-4 z-50">
        <motion.div
          className="w-16 h-16 rounded-full glass-morphism flex items-center justify-center text-sm font-medium"
          style={{
            rotate: useTransform(scrollYProgress, [0, 1], [0, 360])
          }}
        >
          <motion.div
            style={{
              textAlign: 'left',
              rotate: useTransform(scrollYProgress, [0, 1], [0, -360])
            }}
          >
            {Math.round(useTransform(scrollYProgress, [0, 1], [0, 100]).get())}%
          </motion.div>
        </motion.div>
      </div> */}
    </>
  )
}
