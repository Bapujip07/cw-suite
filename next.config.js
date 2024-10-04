/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ['in', 'ae', 'uk'],
    defaultLocale: 'in',
  },
  staticPageGenerationTimeout: 300
};

module.exports = nextConfig;

module.exports = {
  async redirects() {
    return [
      // {
      //   source: '/',
      //   destination: '/home',
      //   permanent: false,
      // }
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',},
    ], 
  },
}