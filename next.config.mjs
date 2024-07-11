/** @type {import('next').NextConfig} */
const nextConfig = { experimental: { instrumentationHook: JSON.parse(process.env.INSTRUMENTATION_HOOK) } };

export default nextConfig;
