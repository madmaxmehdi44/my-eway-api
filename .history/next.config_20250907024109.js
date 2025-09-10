/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: {
    //   logging: "verbose"
    // },
    reactStrictMode: true,
    allowedDevOrigins,
  };
  // module.exports = {

  //   // env: {
  //   //   EWAY_API_KEY: process.env.EWAY_API_KEY,
  //   //   EWAY_PASSWORD: process.env.EWAY_PASSWORD,
  //   // },
  // };
  module.exports = nextConfig;