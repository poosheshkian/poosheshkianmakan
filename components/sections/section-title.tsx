import { cn } from "@/lib/utils";

export interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <p className="text-eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl font-medium text-foreground md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 font-body text-base normal-case tracking-normal text-muted md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
