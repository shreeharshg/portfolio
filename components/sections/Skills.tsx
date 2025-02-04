'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useTheme } from '@/context/ThemeProvider';

const skills = [
  { name: 'Frontend', level: 90, color: ['#3b82f6', '#2563eb'], technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'Material UI'] },
  { name: 'Backend', level: 85, color: ['#22c55e', '#16a34a'], technologies: ['Node.js', 'Express', 'Spring Boot', 'Django'] },
  { name: 'Cloud & DevOps', level: 80, color: ['#f59e0b', '#d97706'], technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes'] },
  { name: 'Databases', level: 80, color: ['#8b5cf6', '#6d28d9'], technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase'] },
  { name: 'Machine Learning & NLP', level: 75, color: ['#ec4899', '#db2777'], technologies: ['Python', 'TensorFlow', 'PyTorch', 'Transformers', 'Scikit-Learn', 'NLP'] },
  { name: 'Automation & Testing', level: 70, color: ['#ef4444', '#dc2626'], technologies: ['Selenium', 'Robot Framework', 'Jenkins', 'CI/CD'] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6 text-center">
        {/* ✅ Section Title */}
        <motion.h2
          className="text-4xl font-bold gradient-text mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>

        {/* ✅ Horizontal Scrollable Skills Row */}
        <div className="flex overflow-x-auto space-x-8 justify-center items-center px-4 py-4 scrollbar-hide">
          {skills.map((skill, index) => (
            <FlippingSkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ✅ Flipping Card Component */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FlippingSkillCard = ({ skill }: { skill: any }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { theme } = useTheme(); // ✅ Get the current theme

  return (
    <motion.div
      className="relative w-40 h-48 cursor-pointer flex-shrink-0"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className={`relative w-full h-full transition-transform duration-500 rounded-lg `}
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* ✅ Front Side (Progress Bar) */}
        <div
          className={`absolute w-full h-full flex flex-col items-center justify-center rounded-lg p-4 ${
            theme === 'dark' ? 'bg-gray-800/60' : 'bg-gray-200 shadow-md'
          }`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="w-24 h-24">
            <CircularProgressbar
              value={skill.level}
              text={`${skill.level}%`}
              styles={buildStyles({
                textColor: theme === 'dark' ? '#fff' : '#1E293B',
                pathColor: skill.color[0],
                trailColor: skill.color[1],
              })}
            />
          </div>
          <h3 className={`text-sm font-bold mt-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {skill.name}
          </h3>
        </div>

        {/* ✅ Back Side (Technologies) */}
        <div
          className={`absolute w-full h-full flex flex-col items-center justify-center rounded-lg p-4 ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
          }`}
          style={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
          }}
        >
          <h3 className={`text-sm font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Technologies
          </h3>
          <ul className="text-xs text-center">
            {skill.technologies.map((tech: string) => (
              <li key={tech} className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};
