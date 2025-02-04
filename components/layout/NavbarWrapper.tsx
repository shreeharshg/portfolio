"use client"; // ✅ Mark this as a client component

import { usePathname } from "next/navigation";
import Navigation from "@/components/layout/Navigation";

export default function NavbarWrapper() {
  const pathname = usePathname(); // ✅ Get current route

  // ✅ Show Navbar on all pages except "/about"
  if (pathname === "/about") return null;

  return <Navigation />;
}
