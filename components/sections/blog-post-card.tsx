import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BlogPostCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  className?: string;
}

export function BlogPostCard({
  slug,
  title,
  excerpt,
  category,
  date,
  readTime,
  className,
}: BlogPostCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${slug}`} className="block h-full">
      <article
        className={cn(
          "group flex h-full flex-col border border-border bg-surface p-6 transition-colors hover:border-accent",
          className
        )}
      >
        <span className="text-eyebrow">{category}</span>
        <h3 className="mt-4 font-display text-lg uppercase leading-snug tracking-wide text-foreground">
          {title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{excerpt}</p>

        <div className="mt-6 flex items-center justify-between border-t border-border pt-4 font-mono text-xs text-muted">
          <span>
            {formattedDate} · {readTime}
          </span>
          <ArrowUpRight
            size={14}
            className="text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </article>
    </Link>
  );
}
