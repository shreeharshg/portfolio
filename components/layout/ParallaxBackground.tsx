'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #1a237e 0%, #000000 100%)',
          x: mousePosition.x,
          y: mousePosition.y,
          backgroundPositionY: backgroundY
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-80" />
      <div className="absolute inset-0" 
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(29, 78, 216, 0.15), transparent 80%)',
          filter: 'blur(80px)'
        }} 
      />
    </div>
  )
}