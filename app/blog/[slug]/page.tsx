import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { buildMetadata } from "@/lib/seo";
import { blogPosts, getBlogPostBySlug } from "@/lib/data/blog-posts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return buildMetadata({
      title: "Post not found",
      description: "This blog post could not be found.",
      path: `/blog/${slug}`,
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <Section className="pt-28 md:pt-36">
        <Container as="article" className="max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted hover:text-accent"
          >
            <ArrowLeft size={14} />
            Back to blog
          </Link>

          <p className="text-eyebrow mt-8 mb-3">{post.category}</p>
          <h1 className="text-3xl font-medium text-foreground md:text-5xl">{post.title}</h1>

          <div className="mt-6 flex items-center gap-3 border-b border-border pb-6 font-mono text-xs text-muted">
            <span>{post.author}</span>
            <span aria-hidden>·</span>
            <time dateTime={post.date}>{formattedDate}</time>
            <span aria-hidden>·</span>
            <span>{post.readTime}</span>
          </div>

          <div className="mt-8 space-y-6">
            {post.content.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-foreground/90 md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
