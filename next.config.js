/** @type {import('next').NextConfig} */
const removeImports = require("next-remove-imports")();

const nextConfig = {
  experimental: { esmExternals: true },
  reactStrictMode: true,
}

module.exports = removeImports(nextConfig);
