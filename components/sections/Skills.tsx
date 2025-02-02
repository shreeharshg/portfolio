'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import SkillBar from '../ui/SkillBar'

const skills = [
  { name: 'React/Next.js', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Three.js', level: 75 },
  { name: 'Node.js', level: 80 },
  { name: 'UI/UX Design', level: 70 }
]

export default function Skills() {
  const { ref, controls, variants } = useScrollAnimation()

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="glass-morphism p-8 md:p-12"
        >
          <h2 className="text-4xl font-bold mb-12 gradient-text text-center">
            Skills & Expertise
          </h2>

          <div className="space-y-8">
            {skills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={index * 0.2}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}