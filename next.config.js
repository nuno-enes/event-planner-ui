/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['tsx', 'ts'],
  async rewrites() {
      return [
        {
          source: '/api/events',
          destination: 'http://localhost:8080/events',
        },
      ]
    },
};

module.exports = nextConfig
