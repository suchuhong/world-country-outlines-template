/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Route groups with parentheses in Next.js are not actual route segments
  // They are used for organization purposes only
  // So we don't need any special i18n configuration here
};

module.exports = nextConfig;
