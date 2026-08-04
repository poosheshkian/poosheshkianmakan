import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
  return (
    <div className={cn("flex gap-4", className)}>
      <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-border-strong text-accent">
        <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
      </div>
      <div>
        <h3 className="font-display text-base uppercase tracking-wide text-foreground">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </div>
  );
}
