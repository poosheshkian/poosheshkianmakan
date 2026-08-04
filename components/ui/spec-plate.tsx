import { cn } from "@/lib/utils";

export function SpecPlate({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "spec-corners border border-border bg-surface p-6",
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * A labeled mono-spaced data readout, e.g. TOLERANCE — ±0.0002 IN
 * Used inside SpecPlate to give content an authentic instrumentation feel.
 */
export function SpecReadout({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-baseline justify-between gap-4 border-t border-border py-2 first:border-t-0 first:pt-0", className)}>
      <span className="font-mono text-xs uppercase tracking-widest text-muted">{label}</span>
      <span className="font-mono text-sm text-foreground">{value}</span>
    </div>
  );
}
