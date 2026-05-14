/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.westernjobs.ca' }],
        destination: 'https://westernjobs.ca/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;