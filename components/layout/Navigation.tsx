"use client";

import { useTheme } from "@/context/ThemeProvider";
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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        theme === "dark"
          ? "bg-transparent backdrop-blur-md"
          : "bg-white shadow-md border-b border-gray-200"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* ✅ Logo */}
        <Link href="/">
          <span
            className={`text-2xl font-bold ${
              theme === "dark" ? "text-gray-300" : "text-gray-800"
            }`}
          >
            Portfolio
          </span>
        </Link>

        {/* ✅ Navbar Links */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <span
                className={`text-sm font-medium transition-colors ${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* ✅ Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full transition-all hover:scale-110"
        >
          {theme === "dark" ? (
            <Sun className="text-gray-300" size={22} />
          ) : (
            <Moon className="text-gray-800" size={22} />
          )}
        </button>
      </div>
    </nav>
  );
}
