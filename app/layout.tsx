import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavbarWrapper from "@/components/layout/NavbarWrapper"; // ✅ Import the new wrapper
import ParallaxBackground from "@/components/layout/ParallaxBackground";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgress from "@/components/layout/ScrollProgess";
import { ThemeProvider } from "@/context/ThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Advanced Portfolio",
  description: "Interactive developer portfolio with advanced animations",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} transition-colors duration-300`}>
        <ThemeProvider>
          <CustomCursor />
          <ScrollProgress />
          <ParallaxBackground />
          <NavbarWrapper /> {/* ✅ Conditionally renders the Navbar */}
          <main className="relative">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
