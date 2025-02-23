/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // This can help if you're having image optimization issues
  },
  // Add this if you want to deploy to GitHub Pages
  // output: 'export',
}

export default nextConfig 