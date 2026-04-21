import type { MetadataRoute } from "next";
import { projects, siteConfig } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects.map((project) => ({
      url: `${siteConfig.url}/work/${project.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.72,
    })),
  ];
}
