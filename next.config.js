const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /canvas\.node$/,
      loader: "node-loader",
    });

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
