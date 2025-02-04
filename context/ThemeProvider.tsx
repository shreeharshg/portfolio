"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Creating Theme Context
const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false); // ✅ Prevent flickering

  // ✅ Load stored theme from localStorage & apply it immediately
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(storedTheme);
    setTheme(storedTheme);
    setMounted(true); // ✅ Prevent flicker on initial load
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  if (!mounted) return <div className="bg-gray-900 text-white min-h-screen" />;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="min-h-screen"
        >
          <div className={theme}>{children}</div>
        </motion.div>
      </AnimatePresence>
    </ThemeContext.Provider>
  );
};

// Custom Hook for easier usage
export const useTheme = () => useContext(ThemeContext);
