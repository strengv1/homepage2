import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Static export: `npm run build` writes the site to ./out
  output: "export",
  images: { unoptimized: true },
  // Next 16 blocks dev scripts/HMR for hosts other than "localhost", which leaves the page
  // un-hydrated (nothing interactive works). Extra hosts (e.g. your network IP, for testing on
  // a phone) go in .env.local as a comma-separated list: ALLOWED_DEV_ORIGINS=192.168.1.10
  allowedDevOrigins: [
    "127.0.0.1",
    ...(process.env.ALLOWED_DEV_ORIGINS?.split(",").map((h) => h.trim()).filter(Boolean) ?? []),
  ],
};

export default nextConfig;
