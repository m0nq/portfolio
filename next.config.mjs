/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: '',
  output: 'export',
  images: {
    // formats: ['image/avif', 'image/webp'],
    unoptimized: true
  },
  reactStrictMode: true
};

export default nextConfig;
