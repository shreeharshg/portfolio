'use client';

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeProvider";

interface ProjectProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  technologies: string[];
}

export default function ProjectCard({ title, description, icon, technologies }: ProjectProps) {
  const { theme } = useTheme(); // ✅ Get the current theme

  return (
    <motion.div
      className={`p-6 rounded-lg shadow-md transition hover:scale-105 ${
        theme === "dark"
          ? "bg-gray-800/50 text-white" // ✅ Dark Mode
          : "bg-gray-300/60 text-gray-900" // ✅ Light Mode
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {/* ✅ Project Icon */}
      <div className="flex justify-center items-center text-blue-400 mb-4 text-5xl">
        {icon}
      </div>

      {/* ✅ Project Title */}
      <h3 className="text-xl font-bold">{title}</h3>

      {/* ✅ Description */}
      <p className="mt-2">{description}</p>

      {/* ✅ Technologies Used */}
      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="bg-gray-700 text-sm px-3 py-1 rounded-full text-gray-300 dark:text-gray-300 light:text-gray-700">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
