/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Reuse existing production cache keys while dropping the 2048px and 3840px variants.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [64, 96, 128, 256, 384],
    formats: ["image/webp"],
    qualities: [75],
    // Raise this further only after CMS image URLs are guaranteed to be immutable.
    minimumCacheTTL: 2678400,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/db7oldgdh/image/upload/**",
        search: "",
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
    {
      source: "/veranstaltungen/dmFormationen2026",
      destination: "https://www.dm-rot-gold-casino.de/",
      permanent: true,
    },
    {
      source: "/tag-der-offenen-tuer-2026",
      destination: "/tag-der-offenen-tuer",
      permanent: true,
    },
    {
      source: "/veranstaltungen/tag-der-offenen-tuer-2026",
      destination: "/tag-der-offenen-tuer",
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
