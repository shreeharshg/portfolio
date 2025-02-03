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

  // Load stored theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "dark";
    setTheme(storedTheme);
    document.documentElement.classList.add(storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    // Ensure old theme is removed and new one applied
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <AnimatePresence mode="wait">
        {/* ✅ Smooth Transition for Theme Change */}
        <motion.div
          key={theme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }} // ✅ Smooth Theme Change
          className="absolute inset-0"
          style={{
            zIndex: -1, // ✅ Keeps it behind content
          }}
        />

        {/* ✅ Keep Theme Class Applied to Entire Page */}
        <div className={theme}>{children}</div>
      </AnimatePresence>
    </ThemeContext.Provider>
  );
};

// Custom Hook for easier usage
export const useTheme = () => useContext(ThemeContext);
