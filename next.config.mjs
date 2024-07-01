/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    compiler: {
        removeConsole: true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cirquitree.com',
                port: '',
                pathname: '/wp-content/**'
            }
        ]
    }
};

export default nextConfig;
