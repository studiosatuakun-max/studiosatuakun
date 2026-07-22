import { imageHosts } from './image-hosts.config.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  distDir: process.env.DIST_DIR || '.next',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: imageHosts,
  },
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/', // Or a specific anchor if preferred
        permanent: true, // 301 Permanent Redirect for SEO
      },
      {
        source: '/services',
        destination: '/#services',
        permanent: true,
      },
      {
        source: '/process',
        destination: '/#work',
        permanent: true,
      },
      {
        source: '/portfolio',
        destination: '/#work',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
