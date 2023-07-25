/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}




module.exports = {nextConfig,
images:{
  loader: 'imgix',
  path: 'http://factoriaf5-4966.imgix.net/'
}}
