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
    sitemap: "https://qretix.ai/sitemap.xml",
    host: "https://qretix.ai",
  };
}
