/** @type {import('next').NextConfig} */
const runtimeCaching = require('next-pwa/cache')  
const withPWA = require('next-pwa')({
    dest: 'public',
    runtimeCaching
})

const nextConfig = withPWA({
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
})

module.exports = nextConfig
