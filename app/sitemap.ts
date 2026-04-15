import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://danny.schapeit.com";
  const now = new Date();
  const routes = ["", "/links"];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: now,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}/de${route}`,
          en: `${baseUrl}/en${route}`,
        },
      },
    })),
  );
}
