/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const nextConfig = {
   reactCompiler: true,

   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'i.pinimg.com',
            pathname: '/**',
         },
      ],
   },
};

export default nextConfig;
