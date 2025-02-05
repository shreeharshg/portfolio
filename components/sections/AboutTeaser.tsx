'use client';

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeProvider";
import { ArrowRight, ExternalLink, Github, Linkedin, Mail } from "lucide-react";

export default function AboutTeaser() {
  useTheme();

  return (
    <section id="about" className="py-24"> {/* ✅ Increased padding for better spacing */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center md:space-x-16 text-center md:text-left">
        
        {/* ✅ Profile Picture with Increased Size & More Space */}
        <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg mb-8 md:mb-0">
          <Image 
            src="/profile.png" 
            alt="Profile Picture" 
            width={208} 
            height={208} 
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* ✅ About Me Content with More Spacing */}
        <div className="max-w-2xl">
          <h2 className="text-5xl font-bold gradient-text mb-6">About Me</h2> {/* ✅ Bigger Title & More Space */}
          <p className="mt-4 text-lg text-gray-300 leading-relaxed"> {/* ✅ Increased Line Spacing */}
            Passionate developer with expertise in full-stack development, AI, and cloud computing.  
            Currently pursuing M.Sc. in Data & Computer Science at Heidelberg University.  
            Aiming to build innovative digital solutions!
          </p>

          {/* ✅ Social Media Links with More Spacing */}
          <div className="flex justify-center md:justify-start space-x-8 mt-8">
            <a href="https://github.com/shreeharshg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/shreeharsh-gudibandi/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <Linkedin size={28} />
            </a>
            <a href="mailto:shreeharshg65@gmail.com" className="text-gray-400 hover:text-white transition">
              <Mail size={28} />
            </a>
          </div>

          {/* ✅ Resume Buttons with Increased Space */}
          <div className="flex justify-center md:justify-start space-x-6 mt-8">
            <a
              href="/resume_.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition text-lg"
            >
              <ExternalLink size={20} />
              <span>View Resume</span>
            </a>


          </div>

          {/* ✅ "More About Me" Link with Extra Spacing */}
          <div className="mt-10">
            <Link href="/about">
              <span className="inline-flex items-center text-blue-600 hover:text-blue-500 transition cursor-pointer text-lg">
                More About Me <ArrowRight className="ml-2" size={22} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
