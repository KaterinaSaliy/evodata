import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/**
 * sitemap.xml is generated from the list of routes.
 * Served at /sitemap.xml.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // Existing routes only — the sitemap must not point at 404s.
  const routes = ["", "/what-we-do", "/industries", "/about", "/faq"];
  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
