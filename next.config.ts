import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index", destination: "/", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/features.html", destination: "/features", permanent: true },
      { source: "/pricing.html", destination: "/pricing", permanent: true },
      { source: "/comparison.html", destination: "/comparison", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
