import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Izinkan gambar dari Unsplash
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com', // Jika nanti pakai gambar dari GDrive
      },
    ],
  },
};

export default nextConfig;