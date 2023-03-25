/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.179.12",
        port: "9000",
        pathname: "/**",
      }
    ],
  },
};

module.exports = nextConfig;
