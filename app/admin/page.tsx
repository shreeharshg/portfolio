"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeProvider"; // Import Theme Hook

interface Message {
  name: string;
  email: string;
  message: string;
}

export default function AdminPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const router = useRouter();
  const { theme } = useTheme(); // Get theme (light or dark)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminInput, setAdminInput] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(""); // Stores login error

  // Fetch messages from API on page load
  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch("/api/messages");
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  // Handle Admin Login
  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      adminInput.username === "Shreeharsh Ashok Gudibandi" &&
      adminInput.password === "pass"
    ) {
      setIsAuthenticated(true);
      setErrorMessage(""); // Clear error on successful login
    } else {
      setErrorMessage("Invalid username or password."); // Show error below inputs
    }
  };

  // Clear error message when user starts typing
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdminInput({ ...adminInput, [e.target.name]: e.target.value });
    setErrorMessage(""); // Clear error message as user types
  };

  // Handle Message Deletion
  const handleDeleteMessage = async (index: number) => {
    try {
      await fetch("/api/messages", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ index }),
      });
      fetchMessages(); // Refresh messages after deletion
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  // Redirect to home
  const handleBackToHome = () => {
    router.push("/");
  };

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} flex flex-col items-center justify-center p-6`}>
      {/* If not authenticated, show login form */}
      {!isAuthenticated ? (
        <div className={`${theme === "dark" ? "bg-gray-800" : "bg-white"} p-8 rounded-lg shadow-lg w-full max-w-md`}>
          <h2 className="text-3xl font-semibold mb-4 text-center">Admin Login</h2>
          <form onSubmit={handleAdminLogin} className="space-y-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={adminInput.username}
              onChange={handleInputChange}
              className={`w-full p-3 rounded ${theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-200 text-black"}`}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={adminInput.password}
              onChange={handleInputChange}
              className={`w-full p-3 rounded ${theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-200 text-black"}`}
              required
            />

            {/* Display Error Message Below Input Fields */}
            {errorMessage && (
              <p className="text-red-500 text-sm text-center mt-2">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-500 py-3 rounded text-white font-semibold  border border-gray-700 hover:bg-blue-600"
            >
              Login
            </button>
            <div className="mt-6 text-center">
            <button
              onClick={handleBackToHome}
              className="bg-gray-700 py-3 px-6 rounded-lg text-white font-semibold hover:bg-gray-600"
            >
              ← Back to Home
            </button>
          </div>
          </form>
        </div>
      ) : (
        // If authenticated, show messages
        <div className="w-full max-w-3xl">
          <h2 className="text-3xl font-semibold mb-6 text-center">Admin Dashboard</h2>
          {messages.length === 0 ? (
            <p className="text-gray-400 text-center">No messages available.</p>
          ) : (
            <ul className="space-y-4">
              {messages.map((msg, index) => (
                <li key={index} className={`${theme === "dark" ? "bg-gray-800" : "bg-white"} p-4 rounded shadow`}>
                  <p><strong>Name:</strong> {msg.name}</p>
                  <p><strong>Email:</strong> {msg.email}</p>
                  <p><strong>Message:</strong> {msg.message}</p>
                  <button
                    onClick={() => handleDeleteMessage(index)}
                    className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}

          {/* Back to Home Button */}
          <div className="mt-6 text-center">
            <button
              onClick={handleBackToHome}
              className="bg-gray-700 py-3 px-6 rounded-lg text-white font-semibold hover:bg-gray-600"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
}