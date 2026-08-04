import type { MetadataRoute } from "next";
import { siteConfig, primaryNav } from "@/lib/site-config";
import { blogPosts } from "@/lib/data/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", ...primaryNav.map((item) => item.href), "/faq", "/blog"];

  const routes: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const postRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...routes, ...postRoutes];
}
