import type { Metadata } from "next";
import "./globals.css";

/**
 * NOTE: metadataBase intentionally omitted — set NEXT_PUBLIC_SITE_URL
 * (or hardcode the production domain here) once it's confirmed, so
 * Open Graph / Twitter URLs resolve to absolute paths correctly.
 *
 * NOTE: Open Graph / Twitter `images` are intentionally omitted — add
 * a real social share image (e.g. /og-image.jpg in /public) and wire
 * it in below once one exists. Referencing a path that doesn't exist
 * yet would silently break link previews.
 */
export const metadata: Metadata = {
  title: {
    default: "PKm | پوشش کیان ماکان — Industrial Surface Treatment & Coating Solutions",
    template: "%s | PKm",
  },
  description:
    "Pooshesh Kian Makan (PKm) provides industrial surface treatment, protective coatings, and metal finishing services for manufacturers, contractors, and engineering teams.",
  openGraph: {
    title: "PKm | پوشش کیان ماکان — Industrial Surface Treatment & Coating Solutions",
    description:
      "Industrial surface treatment, protective coatings, and metal finishing services for manufacturers, contractors, and engineering teams.",
    siteName: "PKm — Pooshesh Kian Makan",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PKm | پوشش کیان ماکان — Industrial Surface Treatment & Coating Solutions",
    description:
      "Industrial surface treatment, protective coatings, and metal finishing services for manufacturers, contractors, and engineering teams.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className="bg-[#0F1214] text-[#EDEFEF] antialiased">
        {children}
      </body>
    </html>
  );
}
