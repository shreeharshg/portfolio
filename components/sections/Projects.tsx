'use client';

import { motion } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";
import { Code, Server, Globe, Terminal, Database, ShieldCheck } from "lucide-react";

const projects = [
  {
    title: "FeReRe Jira Plug-In",
    description:
      "Developed a Jira plug-in integrating external feedback-requirements data using Feed.UVL API. Designed a secure backend for API communication and data storage.",
    icon: <Server size={48} />,
    technologies: ["Java", "Jira API", "Servlets", "Velocity Templates", "REST API", "JSON"],
  },
  {
    title: "Code Submission Chrome Extension",
    description:
      "A Chrome extension that automatically commits a user's coding submissions from LeetCode and HackerRank into a newly created repository categorized by platform name.",
    icon: <Globe size={48} />,
    technologies: ["JavaScript", "Chrome Extensions", "GitHub API", "OAuth", "REST API"],
  },
  {
    title: "Domain-Specific QA System",
    description:
      "Built a QnA system using NLP techniques and transformers to generate contextually relevant answers.",
    icon: <Code size={48} />,
    technologies: ["Python", "Transformers", "NLP", "Cosine Similarity"],
  },
  {
    title: "Crypto Payment Gateway",
    description:
      "Developed a secure cryptocurrency payment gateway integrating web development and blockchain.",
    icon: <ShieldCheck size={48} />,
    technologies: ["Blockchain", "React.js", "Node.js", "Smart Contracts"],
  },
  {
    title: "Hostel Management System",
    description:
      "A comprehensive system for hostel administration with user and warden functionalities.",
    icon: <Database size={48} />,
    technologies: ["Django", "PostgreSQL", "REST API"],
  },
  {
    title: "Socket Programming Project",
    description:
      "Developed a network tool using Python sockets for reverse shell operations and remote access.",
    icon: <Terminal size={48} />,
    technologies: ["Python", "Multithreading", "Socket Programming"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        {/* ✅ Section Title */}
        <motion.h2
          className="text-4xl font-bold gradient-text text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        {/* ✅ Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              icon={project.icon}
              technologies={project.technologies}
            />
          ))}
        </div>

        {/* ✅ More Projects on GitHub */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/shreeharshg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 text-lg transition inline-flex items-center"
          >
            More projects on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
