const { default: build } = require('next/dist/build');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  generateBuildId: () => build
}
