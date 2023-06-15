/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
  env: {
    baseUrl: "http://localhost:3000",
  },
  images: {
    domains: ["images.unsplash.com", "plus.unsplash.com"],
  },
};

module.exports = nextConfig;
