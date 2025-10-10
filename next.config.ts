import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Remove turbopack configuration for production builds
  ...(process.env.NODE_ENV === 'development' && {
    experimental: {
      turbo: {
        rules: {
          "*.{jsx,tsx}": {
            loaders: [require.resolve('./src/visual-edits/component-tagger-loader.js')]
          }
        }
      }
    }
  })
};

export default nextConfig;
// Orchids restart: 1760049063104
