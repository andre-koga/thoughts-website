/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // if your website has no www, drop it
      },
    ],
  },
};

module.exports = nextConfig;
