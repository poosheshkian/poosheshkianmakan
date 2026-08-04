import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url,
      title: `${title} — ${siteConfig.shortName}`,
      description,
      siteName: siteConfig.name,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${siteConfig.shortName}`,
      description,
      images: ["/og-image.jpg"],
    },
  };
}
