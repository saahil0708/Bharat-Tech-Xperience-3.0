import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '14wgjdss3w.ufs.sh',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'izvkii57x4.ufs.sh',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
