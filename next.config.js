/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  "next/router": "next-router-mock",

  reactStrictMode: false,
};

module.exports = nextConfig;
