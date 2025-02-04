"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<{ success: boolean | null; message: string }>({ success: null, message: "" });

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ success: null, message: "Sending..." });

    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setStatus({ success: true, message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ success: false, message: data.message });
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setStatus({ success: false, message: "Error sending message." });
    }

    setTimeout(() => setStatus({ success: null, message: "" }), 3000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center gradient-text"
        >
          Get In Touch
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="glass-morphism p-8 space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-gray-200/1000 mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-gray-400/50 rounded-lg p-3 transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-200/1000 mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-gray-400/50 rounded-lg p-3 transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-200/1000 mb-2">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full bg-gray-400/50 rounded-lg p-3 transition-colors"
              required
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg border border-gray-800 font-medium"
          >
            Send Message
          </motion.button>
        </motion.form>

        {status.success !== null && (
          <p className={`mt-4 text-center ${status.success ? "text-green-500" : "text-red-500"}`}>
            {status.message}
          </p>
        )}
      </div>
    </section>
  );
}
