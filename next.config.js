/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains: ['res.cloudinary.com'],
  },
  reactStrictMode: true,
  swcMinify : false
}

module.exports = nextConfig
