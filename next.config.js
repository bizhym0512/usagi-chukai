/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: false,   // ← これを追加（重要！！）
  },
};

module.exports = nextConfig;
