/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["http://localhost:3000"],
  transpilePackages: [
    "@repo/auth",
    "@repo/db",
    "@repo/ui",
  ],
};

export default nextConfig;
