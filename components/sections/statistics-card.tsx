import { cn } from "@/lib/utils";

export interface StatisticsCardProps {
  value: string;
  label: string;
  description?: string;
  className?: string;
}

export function StatisticsCard({ value, label, description, className }: StatisticsCardProps) {
  return (
    <div className={cn("border-l-2 border-accent pl-5", className)}>
      <p className="font-display text-4xl text-foreground md:text-5xl">{value}</p>
      <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted">{label}</p>
      {description && <p className="mt-2 text-sm text-muted/80">{description}</p>}
    </div>
  );
}
