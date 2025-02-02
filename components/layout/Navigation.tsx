"use client";

import { useTheme } from "@/context/ThemeProvider";  
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  useScroll();

  return (
<motion.nav
  className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 
    ${theme === "dark" ? "bg-transparent backdrop-blur-md" : "bg-transparent backdrop-blur-md"}
  `}
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.5 }}
>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* ✅ Logo / Brand Name */}
        <Link href="#home">
          <motion.span
            className={`text-2xl font-bold ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.span>
        </Link>

        {/* ✅ Navbar Links */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="relative group">
              <span className={`text-sm font-medium transition-colors ${
                theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-800"
              }`}>
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* ✅ Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full transition-all hover:scale-110"
        >
          {theme === "dark" ? <Sun className="text-gray-300" size={22} /> : <Moon className="text-gray-600" size={22} />}
        </button>
      </div>
    </motion.nav>
  );
}
