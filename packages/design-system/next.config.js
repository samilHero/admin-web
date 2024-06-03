/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  webpack: (config) => {
    config.module.rules.push({ // 웹팩설정에 로더 추가함
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config
  },
};

module.exports = nextConfig;
