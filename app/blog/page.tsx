import type { Metadata } from "next";
import { Hero, SectionTitle } from "@/components/sections";
import { Section } from "@/components/layout/section";
import { BlogPostCard } from "@/components/sections/blog-post-card";
import { buildMetadata } from "@/lib/seo";
import { blogPosts } from "@/lib/data/blog-posts";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Notes from FERRUM Industrial's engineering, quality, and operations teams on machining, automation, and supply chain.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <Hero
        eyebrow="Blog"
        title="Notes from"
        highlight="the production floor."
        description="Practical writing from the people who quote, machine, and inspect the parts — not marketing copy about them."
      />

      <Section>
        <SectionTitle eyebrow="Latest posts" title="Engineering, quality, and operations" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogPostCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              category={post.category}
              date={post.date}
              readTime={post.readTime}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
