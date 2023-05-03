/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'i.dailymail.co.uk', 'static.independent.co.uk']
  }
}

module.exports = nextConfig
