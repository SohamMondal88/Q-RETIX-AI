import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/404"],
      },
    ],
    sitemap: "https://www.q-retix.app/sitemap.xml",
    host: "https://www.q-retix.app",
  };
}
