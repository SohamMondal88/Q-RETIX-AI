import { MetadataRoute } from "next";
import { validSlugs } from "./blog/[slug]/validSlugs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.q-retix.app";

  const staticRoutes = [
    "",
    "/about",
    "/blog",
    "/contact",
    "/careers",
    "/community",
    "/delivery",
    "/docs",
    "/docs/api",
    "/press",
    "/support",
    "/legal",
    "/legal/privacy",
    "/legal/terms",
    "/legal/cookies",
    "/legal/gdpr",
    "/legal/disclaimer",
    "/legal/acceptable-use",
    "/legal/accessibility",
    "/legal/security",
    "/legal/ai-transparency",
    "/legal/data-rights",
  ];

  const blogPosts = validSlugs.map((slug) => `/blog/${slug}`);

  const allRoutes = [...staticRoutes, ...blogPosts];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/blog") ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/blog/") ? 0.8 : 0.6,
  }));
}
