/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "/s2/**",
      },
    ],
    unoptimized: true,
  },
  output: 'export',  // Generate static HTML files
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  compress: true,
  poweredByHeader: false,
  distDir: 'out', // Output to 'out' directory
  trailingSlash: true, // Add trailing slashes for static hosting
  outputFileTracingExcludes: {
    '*': ['node_modules/**'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'react-devtools-feature-flags': 'react-devtools-feature-flags/dist/prod',
      };
    }
    return config;
  },
};

export default nextConfig; 