/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [{ hostname: "**", protocol: "https" }] },
  // experimental: { instrumentationHook: JSON.parse(process.env.INSTRUMENTATION_HOOK) },
};

export default nextConfig;
