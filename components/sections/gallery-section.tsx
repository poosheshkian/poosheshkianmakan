import Image from "next/image";
import { cn } from "@/lib/utils";

export interface GalleryItem {
  caption: string;
  meta?: string;
  src?: string;
  /** Spans two grid columns on md+ screens, for a varied editorial layout. */
  wide?: boolean;
}

export interface GallerySectionProps {
  items: GalleryItem[];
  className?: string;
}

function GalleryPlaceholder({ caption }: { caption: string }) {
  return (
    <div
      aria-hidden
      className="bg-blueprint flex h-full w-full items-center justify-center bg-surface-raised"
    >
      <span className="font-mono text-xs uppercase tracking-widest text-muted-2">{caption}</span>
    </div>
  );
}

export function GallerySection({ items, className }: GallerySectionProps) {
  return (
    <div className={cn("grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-4", className)}>
      {items.map((item) => (
        <figure
          key={item.caption}
          className={cn(
            "group relative aspect-4/3 overflow-hidden bg-surface",
            item.wide && "sm:col-span-2"
          )}
        >
          {item.src ? (
            <Image
              src={item.src}
              alt={item.caption}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <GalleryPlaceholder caption={item.caption} />
          )}

          <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-linear-to-t from-background/90 to-transparent p-4">
            <span className="font-display text-sm uppercase tracking-wide text-foreground">
              {item.caption}
            </span>
            {item.meta && (
              <span className="font-mono text-xs text-muted">{item.meta}</span>
            )}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
