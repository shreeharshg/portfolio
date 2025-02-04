'use client';

import { motion } from "framer-motion";
import TimelineItem from "../ui/TimeLineItem";

const experiences = [
  {
    date: "Currently",
    title: "Open to Internship & Working Student Roles",
    company: "",
    description:
      "",
    technologies: [],
  },
  {
    date: "April 2022 - June 2022",
    title: "Salesforce Developer Internship",
    company: "SmartBridge",
    description:
      "Gained hands-on experience in Salesforce development, working with Apex, Lightning components, and automation tools.",
    technologies: ["Salesforce", "Apex", "Process Automation"],
  },
  {
    date: "Dec 2021 - April 2022",
    title: "Azure Cloud Internship",
    company: "Future Ready Talent",
    description:
      "Worked on Microsoft Azure cloud, web applications and security skills and built project aligned with industry needs.",
    technologies: ["Azure Cloud", "Virtual Machines", "Web Apps", "Cloud Security"],
  },
  {
    date: "Nov 2021 - Dec 2021",
    title: "Web Development Intern",
    company: "Let's Grow More",
    description:
      "Developed frontend and full stack projects using React.js, PHP, and MySQL. Learned about UI/UX best practices.",
    technologies: ["React.js", "PHP", "MySQL", "UI/UX"],
  },

];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        {/* ✅ Section Title */}
        <motion.h2
          className="text-4xl font-bold gradient-text text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* ✅ Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          {/* ✅ Timeline Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <TimelineItem key={index} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
