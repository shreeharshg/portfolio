"use client"; // ✅ Required for React hooks in Next.js

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

// ✅ Keep your existing structure but define an explicit type
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// ✅ Fix: Ensure createContext has an explicit type
export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

// ✅ Keep your existing logic
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "dark";
    setTheme(storedTheme);
    document.documentElement.classList.add(storedTheme); // ✅ Keep this as it is
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    // ✅ Keep existing class switching logic
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div> {/* ✅ Keep this structure */}
    </ThemeContext.Provider>
  );
};

// ✅ Keep `useTheme` logic but add error handling for safety
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
