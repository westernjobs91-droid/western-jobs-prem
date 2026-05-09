/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,           // ← Add this line

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