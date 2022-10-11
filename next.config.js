/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: process.env.BASE_PATH,
  basePath: process.env.BASE_PATH,
}

module.exports = nextConfig
