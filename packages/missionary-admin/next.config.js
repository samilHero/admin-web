const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        module: false,
      };
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      '@design-system': path.resolve(__dirname, '../design-system/src'),
      '@assets': path.resolve(__dirname, '../design-system/src/assets'),
      '@components': path.resolve(__dirname, '../design-system/src/components'),
      '@hooks': path.resolve(__dirname, '../design-system/src/hooks'),
      '@utils': path.resolve(__dirname, '../design-system/src/utils'),
      '@styles': path.resolve(__dirname, '../design-system/src/styles'),
    };

    return config;
  },
};

module.exports = nextConfig;
