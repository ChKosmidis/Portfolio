/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    basePath: '/Portfolio',
    assetPrefix: '/Portfolio/',
    images: {
        unoptimized: true,
        remotePatterns: [],
    },
};

export default nextConfig;
