const isGitHubPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  ...(isGitHubPages
    ? {
        basePath: "/studio",
        assetPrefix: "/studio/",
      }
    : {}),
};

module.exports = nextConfig;
