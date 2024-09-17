/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '**',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/blogs',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
