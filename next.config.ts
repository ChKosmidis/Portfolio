/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio/' : undefined,
    images: {
        remotePatterns: [],
    },
};

export default nextConfig;
