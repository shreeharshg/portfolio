'use client'

import { motion } from 'framer-motion'

interface Experience {
  date: string
  title: string
  company: string
  description: string
}

export default function TimelineItem({ 
  experience, 
  index 
}: { 
  experience: Experience
  index: number 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`flex flex-col md:flex-row ${
        index % 2 === 0 ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className="md:w-1/2" />
      <div
        className={`glass-morphism p-6 md:w-1/2 relative ${
          index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
        }`}
      >
        {/* Timeline dot */}
        <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500 left-0 md:left-auto md:right-0">
          <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75" />
        </div>

        <span className="text-sm text-blue-400">{experience.date}</span>
        <h3 className="text-xl font-bold mt-2">{experience.title}</h3>
        <p className="text-gray-400 mb-2">{experience.company}</p>
        <p className="text-gray-300">{experience.description}</p>
      </div>
    </motion.div>
  )
}