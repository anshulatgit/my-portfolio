/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable MDX support
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
    ],
  },

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      { source: "/cv", destination: "/resume", permanent: true },
      { source: "/career", destination: "/roadmaps", permanent: true },
    ];
  },
};

module.exports = nextConfig;