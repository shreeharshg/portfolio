'use client'

import { motion } from 'framer-motion'
import TimelineItem from '../ui/TimeLineItem'

const experiences = [
  {
    date: '2022 - Present',
    title: 'Senior Frontend Developer',
    company: 'Tech Corp',
    description: 'Leading the frontend development team, implementing modern web solutions.',
  },
  {
    date: '2020 - 2022',
    title: 'Full Stack Developer',
    company: 'Startup Inc',
    description: 'Developed and maintained full-stack applications using modern technologies.',
  },
  // Add more experiences
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center gradient-text"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <TimelineItem
                key={index}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}