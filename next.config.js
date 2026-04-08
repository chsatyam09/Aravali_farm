/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
}

module.exports = {

  output: 'export', // Tells Next to produce a static export (out/)

  // trailingSlash: true, // optional if you want folder-based routes like /about/index.html

}
