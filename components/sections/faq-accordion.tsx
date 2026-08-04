"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FaqCategory } from "@/lib/data/faqs";

export interface FaqAccordionProps {
  categories: FaqCategory[];
  className?: string;
}

export function FaqAccordion({ categories, className }: FaqAccordionProps) {
  return (
    <div className={cn("space-y-12", className)}>
      {categories.map((category) => (
        <div key={category.category}>
          <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
            {category.category}
          </h3>
          <Accordion.Root type="single" collapsible className="mt-4 border-t border-border">
            {category.items.map((item) => (
              <Accordion.Item
                key={item.question}
                value={item.question}
                className="border-b border-border"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left font-display text-base uppercase tracking-wide text-foreground transition-colors hover:text-accent">
                    {item.question}
                    <Plus
                      size={18}
                      className="shrink-0 text-accent transition-transform duration-200 group-data-[state=open]:rotate-45"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-sm leading-relaxed text-muted transition-all data-[state=open]:pb-5">
                  {item.answer}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      ))}
    </div>
  );
}
