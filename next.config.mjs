/** @type {import('next').NextConfig} */
const nextConfig = {
  //reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'loremflickr.com',
        port: '',
      },
    ]
  }
};

export default nextConfig;
