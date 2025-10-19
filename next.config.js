/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // SEO optimizations
  trailingSlash: false,
  // Static optimization
  output: 'export',
  distDir: 'out',
  basePath: '',
  assetPrefix: '',
}

module.exports = nextConfig