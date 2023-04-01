/** @type {import('next').NextConfig} */


module.exports = {
  reactStrictMode: true, 
  images: {
    domains: ['res.cloudinary.com'],
    loader: 'akamai',
    path: ''
  },
}
