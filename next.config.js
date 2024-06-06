/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   appDir: true,
  // },
  images: {
    domains: ["firebasestorage.googleapis.com"], // Add your Firebase Storage domain here
  },
  webpack: (config) => {

    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil",
      canvas: "commonjs canvas",
    });
    return config;
  }
};

module.exports = nextConfig;
