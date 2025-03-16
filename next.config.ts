import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Required for GitHub Pages which serves content from a subdirectory
  basePath: process.env.NODE_ENV === 'production' ? '/webdesign' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/webdesign/' : '',
};

export default nextConfig;
