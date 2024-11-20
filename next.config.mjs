/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: false,
  "react/no-unescaped-entities": ["error", { forbid: [">", "'"] }],
};

export default nextConfig;
