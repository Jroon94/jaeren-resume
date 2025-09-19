import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/jaeren-resume',
  assetPrefix: '/jaeren-resume/',
};

export default nextConfig;
