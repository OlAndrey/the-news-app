/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'res.cloudinary.com',
      'i.dailymail.co.uk',
      'static.independent.co.uk',
      'i.guim.co.uk',
      'static.standard.co.uk',
      'www.expressandstar.com'
    ]
  }
}

module.exports = nextConfig
