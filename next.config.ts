import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
