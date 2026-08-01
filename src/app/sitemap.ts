import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/**
 * sitemap.xml генерується автоматично на основі списку маршрутів.
 * Доступний за адресою /sitemap.xml.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // Лише наявні маршрути — sitemap не має вести на 404.
  const routes = ["", "/what-we-do", "/industries", "/about", "/faq"];
  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
