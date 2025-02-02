'use client'

import { motion } from 'framer-motion'
import ProjectCard from '../ui/ProjectCard'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory management',
    image: '/projects/ecommerce.jpg',
    tags: ['Next.js', 'TypeScript', 'MongoDB'],
    demoLink: 'https://demo.com',
    githubLink: 'https://github.com',
  },
  {
    title: '3D Portfolio',
    description: 'Interactive 3D portfolio with Three.js animations',
    image: '/projects/portfolio.jpg',
    tags: ['React', 'Three.js', 'GSAP'],
    demoLink: 'https://demo.com',
    githubLink: 'https://github.com',
  },
  // Add more projects as needed
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center gradient-text"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}