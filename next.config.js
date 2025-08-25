/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', 'prisma']
  },
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: ['cdn.420nation.com', 'localhost'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Environment variables available to the client
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/dispensaries',
        destination: '/stores',
        permanent: true,
      },
      {
        source: '/dispensary/:slug',
        destination: '/stores/:slug',
        permanent: true,
      },
    ]
  },

  // Headers for security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },

  // Webpack configuration
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    return config
  },

  // Output configuration for different deployment targets
  // output: 'standalone', // Uncomment for Docker deployments
}

module.exports = nextConfig