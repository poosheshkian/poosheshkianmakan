"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { primaryNav, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <Container className="flex h-18 items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center border border-accent text-accent">
            <span className="font-display text-sm">F</span>
          </span>
          <span className="font-display text-lg uppercase tracking-wide text-foreground">
            {siteConfig.shortName}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-display text-sm uppercase tracking-wider text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="sm">
            <Link href="/contact">
              Request a Quote
              <ArrowUpRight />
            </Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background transition-[max-height] duration-300 ease-in-out lg:hidden",
          open ? "max-h-96" : "max-h-0 border-t-0"
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-border py-3 font-display text-base uppercase tracking-wider text-muted last:border-b-0 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-4 w-full">
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </Container>
      </div>
    </header>
  );
}
