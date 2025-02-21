import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['res.cloudinary.com'], // Add Cloudinary domain to the allowed list
  },
};

export default nextConfig;
