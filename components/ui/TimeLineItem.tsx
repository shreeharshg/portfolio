'use client';

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeProvider";

interface TimelineProps {
  experience: {
    date: string;
    title: string;
    company: string;
    description: string;
    technologies: string[];
  };
  index: number;
}

export default function TimelineItem({ experience, index }: TimelineProps) {
  const { theme } = useTheme(); // ✅ Get current theme

  const isLookingForJob = experience.title.includes("Open to Internship");

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative flex flex-col md:flex-row items-center"
    >
      {/* ✅ Timeline Dot (Now Centered on Timeline) */}
      <div className="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-blue-500 z-10">
        <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
      </div>

      {/* ✅ Experience Content (Alternating Left & Right) */}
      <div
        className={`p-6 w-full md:w-5/12 relative rounded-lg ${
          isLookingForJob
            ? theme === "dark"
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border border-blue-400/10 shadow-lg"
              : "bg-blue-300/60 text-blue-900 border border-blue-400/10 shadow-md"
            : "glass-morphism"
        } ${index % 2 === 0 ? "md:ml-auto md:mr-12" : "md:mr-auto md:ml-12"}`}
      >
        <span className="text-sm text-blue-500">{experience.date}</span>
        <h3 className="text-xl font-bold mt-2">{experience.title}</h3>
        <p className="text-gray-400 mb-2">{experience.company}</p>
        <p className="text-gray-300">{experience.description}</p>

        {/* ✅ Technologies Used */}
        <div className="mt-4 flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span key={tech} className="bg-gray-700 text-sm px-3 py-1 rounded-full text-gray-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
