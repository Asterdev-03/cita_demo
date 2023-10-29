/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  // experimental: {
  //   serverActions: true,
  //   serverComponentsExternalPackages: ["cloudinary"],
  // },
};

module.exports = nextConfig;
