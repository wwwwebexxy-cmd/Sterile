import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Keep generated output separate from stale Next build artifacts.
  distDir: ".next-local",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
