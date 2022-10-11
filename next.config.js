/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: process.env.BASE_PATH,
  publicRuntimeConfig: {
    basePath: process.env.BASE_PATH,
  },
}

module.exports = nextConfig
