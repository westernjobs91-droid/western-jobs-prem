/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.westernjobs.ca',
          },
        ],
        destination: 'https://westernjobs.ca/:path*',
        permanent: true,
      },
    ]
  },

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
};

export default nextConfig;