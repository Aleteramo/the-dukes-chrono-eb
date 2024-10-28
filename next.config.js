/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  distDir: '.next',
  cleanDistDir: true,
  experimental: {
    serverActions: {}, // Imposta come oggetto, come richiesto
    typedRoutes: true,
  },
  serverExternalPackages: [], // Modifica applicata come suggerito per `serverComponentsExternalPackages`
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    domains: ['placehold.co'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: '**.placeholder.com',
      }
    ],
  },
  // Configurazione per i font con intestazione di cache
  async headers() {
    return [
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  }
};

module.exports = nextConfig;
