import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'b.fssta.com',
      },
    ],
  },
};

export default nextConfig;
