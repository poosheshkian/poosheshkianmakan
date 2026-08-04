import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";

export function Section({
  className,
  children,
  blueprint = false,
  id,
  ariaLabel,
}: {
  className?: string;
  children: React.ReactNode;
  blueprint?: boolean;
  id?: string;
  ariaLabel?: string;
}) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn(
        "relative py-20 md:py-28",
        blueprint && "bg-blueprint",
        className
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
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
