/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const repo = 'portfolio-next';
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '/';

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

module.exports = {
  nextConfig,
  images: {
    loader: 'imgix',
    path: 'http://factoriaf5-4966.imgix.net/',
  },

  assetPrefix: assetPrefix,
  basePath: basePath,
};
