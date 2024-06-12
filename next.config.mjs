/** @type {import('next').NextConfig} */

const nextConfig = {
  // output: process.env.GITHUB_ACTION ? 'export' : undefined,
  // output: 'export',
  images: {
    unoptimized: true
  },
  reactStrictMode: true
};

export default nextConfig;
