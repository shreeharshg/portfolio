import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900/50 text-white py-6 text-center">
      <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      <Link href="/admin" className="text-blue-400 hover:text-blue-500 underline mt-2 block">
        Admin Dashboard
      </Link>
    </footer>
  );
}
