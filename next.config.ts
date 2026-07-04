import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// GitHub Pages serves project sites from /<repo-name>/, so the base path
// only applies to the production (CI) build, not local dev.
const isGithubPagesBuild = process.env.GITHUB_PAGES === "true";
const repoName = "blend-by-malak";

const basePath = isGithubPagesBuild ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: isGithubPagesBuild ? `/${repoName}/` : "",
  // next/image renders a plain <img> when unoptimized and does NOT
  // auto-prepend basePath to local src paths in that mode, so we expose it
  // here and prefix manually via lib/assetPath.ts wherever we reference a
  // /public file directly (this was causing gallery photos to 404 on
  // GitHub Pages, where the site is served from /blend-by-malak/).
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

export default withNextIntl(nextConfig);
