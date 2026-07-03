import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// GitHub Pages serves project sites from /<repo-name>/, so the base path
// only applies to the production (CI) build, not local dev.
const isGithubPagesBuild = process.env.GITHUB_PAGES === "true";
const repoName = "blend-by-malak";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isGithubPagesBuild ? `/${repoName}` : "",
  assetPrefix: isGithubPagesBuild ? `/${repoName}/` : "",
};

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

export default withNextIntl(nextConfig);
