/** @type {import('next').NextConfig} */

const nextConfig = {
  output: process.env.GITHUB_ACTION ? 'export' : undefined,
  images: {
    unoptimized: true
  },
  reactStrictMode: true
};

export default nextConfig;
