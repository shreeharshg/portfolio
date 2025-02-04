'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/context/ThemeProvider";
import { Book, GraduationCap, Award, FileText, Rocket, Music } from "lucide-react";

export default function AboutPage() {
  const { theme } = useTheme();

  return (
    <main className={`py-20 px-6 ${theme === "dark" ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-900"}`}>
      <div className="container mx-auto max-w-5xl">
        
        {/* ✅ Profile Section */}
        <motion.div className="flex flex-col md:flex-row items-center md:space-x-12">
          

          {/* ✅ Short Bio */}
          <div className="mt-6 md:mt-0 text-center md:text-left">
            <h1 className="text-5xl font-bold gradient-text">Hey, I&apos;m Shreeharsh!</h1>
            <p className="mt-3 text-lg">
              A **developer, problem-solver, and tech enthusiast**, passionate about crafting **beautiful & scalable web applications**.  
              Currently pursuing **M.Sc. in Data & Computer Science** at **Heidelberg University**, I love diving into **frontend engineering, cloud computing, and AI-powered solutions**.
            </p>
          </div>
        </motion.div>

        {/* ✅ Education Section */}
        <section className="mt-16">
          <div className="flex items-center space-x-3">
            <GraduationCap size={28} className="text-blue-500" />
            <h2 className="text-3xl font-bold">Education 🎓</h2>
          </div>
          <p className="mt-4 text-lg"><strong>M.Sc. in Data & Computer Science</strong> - **Heidelberg University, Germany**</p>
          <p className="mt-1 text-lg"><strong>B.E. in Computer Science</strong> - **BMS Institute of Technology, Bengaluru**</p>
        </section>

        {/* ✅ Certifications & Courses */}
        <section className="mt-16">
          <div className="flex items-center space-x-3">
            <Book size={28} className="text-blue-500" />
            <h2 className="text-3xl font-bold">Courses & Certifications 📜</h2>
          </div>
          <ul className="mt-4 space-y-3">
            <li>✅ **Microsoft 365 Certified: Fundamentals**</li>
            <li>✅ **AWS Solutions Architect - Knowledge Badge**</li>
            <li>✅ **Meta Front-End Developer (Coursera)**</li>
            <li>✅ **Advanced React Course (Scrimba)**</li>
          </ul>
        </section>

        {/* ✅ Publications Section */}
        <section className="mt-16">
          <div className="flex items-center space-x-3">
            <FileText size={28} className="text-blue-500" />
            <h2 className="text-3xl font-bold">Publications & Research 📄</h2>
          </div>
          <p className="mt-4 text-lg">
            **Predictive and Preventive Methods in Agriculture using Machine Learning** - Published in **IJARESM**.
          </p>
          <a href="http://www.ijaresm.com/predictive-and-preventive-methods-in-agriculture-using-machine-learning" 
            className="text-blue-300 hover:underline">
            Read Publication
          </a>
        </section>

        {/* ✅ Achievements Section */}
        <section className="mt-16">
          <div className="flex items-center space-x-3">
            <Award size={28} className="text-blue-500" />
            <h2 className="text-3xl font-bold">Proud Moments 🏆</h2>
          </div>
          <ul className="mt-4 space-y-4">
            <motion.li className="hover:text-blue-500 transition">
              🏆 **Won Hackathon XYZ** - Built an AI-powered chatbot that secured 1st place.
            </motion.li>
            <motion.li className="hover:text-blue-500 transition">
              🏆 **Finalist in International Coding Competition** - Solved complex coding problems under time pressure.
            </motion.li>
            <motion.li className="hover:text-blue-500 transition">
              🏆 **Published Research Paper** - On predictive modeling using machine learning.
            </motion.li>
          </ul>
        </section>

        {/* ✅ Hobbies & Fun */}
        <section className="mt-16">
          <div className="flex items-center space-x-3">
            <Music size={28} className="text-blue-500" />
            <h2 className="text-3xl font-bold">Beyond Coding 🎸</h2>
          </div>
          <p className="mt-4 text-lg">
            When I&apos;m not coding, you can find me **playing guitar, cycling, gaming, or exploring new tech gadgets**.
          </p>
        </section>

        {/* ✅ Future Aspirations */}
        <section className="mt-16">
          <div className="flex items-center space-x-3">
            <Rocket size={28} className="text-blue-500" />
            <h2 className="text-3xl font-bold">What’s Next? 🚀</h2>
          </div>
          <p className="mt-4 text-lg">
            I’m on a mission to become a **highly skilled front-end engineer**, focusing on performance optimization, interactive UI/UX, and AI-driven web apps.  
            My long-term vision? **Build my own startup and mentor future developers**.
          </p>
        </section>
        {/* ✅ Back to Home */}
        <div className="mt-16 text-center">
          <Link href="/" className="text-blue-500 hover:text-blue-600 text-lg font-semibold transition">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
