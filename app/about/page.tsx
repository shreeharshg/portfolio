'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/context/ThemeProvider";
import { Book, GraduationCap, FileText, Rocket, Music } from "lucide-react";

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
              A developer, problem-solver, and tech enthusiast, passionate about crafting scalable web applications.  
              Currently pursuing M.Sc. in Data & Computer Science at Heidelberg University, I am looking forward to dive deep into the software engineering field with my personal interest currently in frontend engineering, cloud computing, and AI-powered solutions.
              As the Tech World is every growing and that motivates me to learn new things every day. This profile is a testament to my journey so far and the exciting road ahead.
            </p>
          </div>
        </motion.div>

{/* ✅ Education Section */}
<section className="mt-16">
  <div className="flex items-center space-x-3">
    <GraduationCap size={28} className="text-blue-500" />
    <h2 className="text-3xl font-bold">Education 🎓</h2>
  </div>

  {/* ✅ M.Sc. Data & Computer Science */}
  <p className="mt-4 text-lg">
    <strong>M.Sc. in Data & Computer Science</strong> - Heidelberg University, Germany <br />
    <span className="text-sm text-gray-500">10/2022 – Present</span>
  </p>
  <p className="text-lg">
    Advancing skills in:
    <ul className="list-disc list-inside mt-2">
      <li>Algorithms and Data structures with, Distributed & Parallel Algorithms - focus on software & algorithm performance.</li>
      <li>Machine Learning, NLP with Transformers, Data mining techniques</li>
      <li>Software Engineering Core Concepts, Tools & Performance Optimization.</li>
      <li>Visual Computing with graphics, modelling, animations and visualizations</li>
    </ul>
  </p>

  {/* ✅ B.E. Computer Science */}
  <p className="mt-6 text-lg">
    <strong>B.E. in Computer Science & Engineering</strong> - BMS Institute of Technology, Bengaluru <br />
    <span className="text-sm text-gray-500">08/2018 – 07/2022</span>
  </p>
  <p className="text-lg">
    Built a strong foundation in:
    <ul className="list-disc list-inside mt-2">
      <li>Data Structures & Algorithms.</li>
      <li>Software Development & Database Management.</li>
      <li>Operating Systems, Computer Networks & Microcontrollers.</li>
    </ul>
  </p>
</section>


{/* ✅ Courses & Certifications */}
<section className="mt-16">
  <div className="flex items-center space-x-3">
    <Book size={28} className="text-blue-500" />
    <h2 className="text-3xl font-bold">Courses & Certifications 📜</h2>
  </div>
  <ul className="mt-4 space-y-3 text-lg">

    <li>MongoDB - Associate Developer  <span className="text-blue-400 text-sm">Current</span></li>
    <li>AWS Solutions Architect - Knowledge Badge <span className="text-blue-400 text-sm">Current</span></li>
    <li>GitHub Foundations Certification <span className="text-blue-400 text-sm">Current</span></li>
    <li>Microsoft 365 Certified: Fundamentals (MS-900)</li>
    <li>Salesforce Superbadges - Apex Specialist, Process Automation Specialist </li>
    <li>Python Bootcamp, Java Programming Masterclass (Udemy)</li>
    <li>Advanced React Course (Scrimba)</li>
    <li>Web Developer Bootcamp (Udemy)</li>
    <li>Developer Learning Plan (AWS Training & Certification)</li>
    <li>Google IT Support Professional Certificate (Coursera)</li>
  </ul>
</section>

        {/* ✅ Publications Section */}
        <section className="mt-16">
          <div className="flex items-center space-x-3">
            <FileText size={28} className="text-blue-500" />
            <h2 className="text-3xl font-bold">Publications & Research 📄</h2>
          </div>
          <p className="mt-4 text-lg">
            Predictive and Preventive Methods in Agriculture using Machine Learning - Published in IJARESM.
          </p>
          <a href="http://www.ijaresm.com/predictive-and-preventive-methods-in-agriculture-using-machine-learning" 
            className="text-blue-300 hover:underline">
            Read Publication
          </a>
        </section>


{/* ✅ Hobbies & Fun */}
<section className="mt-16">
  <div className="flex items-center space-x-3">
    <Music size={28} className="text-blue-500" />
    <h2 className="text-3xl font-bold">Beyond Coding 🎸</h2>
  </div>
  <p className="mt-4 text-lg">
    When I&apos;m not coding, I love exploring my creative side.  
    🎨 Painting & Calligraphy - Expressing thoughts through colors and artistic lettering.  
    🌍 Traveling - Discovering new cultures, landscapes, and cuisines.  
    🎮 Gaming - Enjoying immersive gameplay with friends whenever we all manage to get free time.  
  </p>
</section>


        {/* ✅ Future Aspirations */}
        <section className="mt-16">
          <div className="flex items-center space-x-3">
            <Rocket size={28} className="text-blue-500" />
            <h2 className="text-3xl font-bold">What’s Next? 🚀</h2>
          </div>
          <p className="mt-4 text-lg">
            I aim to continuously enhance my skills and my career goal is to become a highly skilled software engineer, focusing on performance optimization, interactive UI/UX, and AI-driven web apps. I thrive on solving complex problems, and building scalable software solutions.    
          </p>
        </section>

        {/* ✅ View & Download Resume */}
<section className="mt-16 text-center">

  <div className="mt-4 space-x-4">
    <a 
      href="/Resume.pdf" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold hover:bg-blue-600 transition">
      📄 View Resume
    </a>
    <a 
      href="/Resume.pdf" 
      download="Shreeharsh_Resume.pdf" 
      className="inline-block px-6 py-3 border border-blue-500 text-blue-500 rounded-lg text-lg font-semibold hover:bg-blue-500 hover:text-white transition">
      ⬇️ Download Resume
    </a>
  </div>
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
