/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // TODO: remove, once the livestream feature is live
  redirects: () => [
    {
      source: "/livestream",
      destination: "/",
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
