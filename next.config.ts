import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/jaeren-resume' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/jaeren-resume/' : '',
};

export default nextConfig;
