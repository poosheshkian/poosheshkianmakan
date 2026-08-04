import { cn } from "@/lib/utils";
import type { TimelineEvent } from "@/lib/data/about";

export interface TimelineProps {
  events: TimelineEvent[];
  className?: string;
}

export function Timeline({ events, className }: TimelineProps) {
  return (
    <ol className={cn("space-y-0", className)}>
      {events.map((event, index) => (
        <li
          key={event.year}
          className={cn(
            "grid grid-cols-[80px_1fr] gap-6 border-t border-border py-6 sm:grid-cols-[120px_1fr]",
            index === events.length - 1 && "border-b"
          )}
        >
          <span className="font-display text-2xl text-accent md:text-3xl">{event.year}</span>
          <div>
            <h3 className="font-display text-base uppercase tracking-wide text-foreground">
              {event.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{event.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
