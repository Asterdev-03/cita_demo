/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["cloudinary"],
  },
};

module.exports = nextConfig;
