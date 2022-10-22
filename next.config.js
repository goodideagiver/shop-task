/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.picsum.photos', 'loremflickr.com'],
  },
}

module.exports = nextConfig
