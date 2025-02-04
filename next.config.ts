import type { NextConfig } from "next";
import dotenv from "dotenv";

// ✅ Load environment variables from `.env.local`
dotenv.config();

const nextConfig: NextConfig = {
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
  },
};

export default nextConfig;
