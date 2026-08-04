import Link from "next/link";
import { Container } from "@/components/layout/container";
import { footerNav, siteConfig } from "@/lib/site-config";

function FooterColumn({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-widest text-muted">{title}</p>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-sm text-foreground/80 hover:text-accent">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center border border-accent text-accent">
                <span className="font-display text-sm">F</span>
              </span>
              <span className="font-display text-lg uppercase tracking-wide text-foreground">
                {siteConfig.shortName}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted">{siteConfig.description}</p>
            <div className="mt-6 space-y-1 font-mono text-xs text-muted">
              <p>{siteConfig.contact.address}</p>
              <p>{siteConfig.contact.phone}</p>
              <p>{siteConfig.contact.email}</p>
            </div>
          </div>

          <FooterColumn title="Company" items={footerNav.company} />
          <FooterColumn title="Work" items={footerNav.work} />
          <FooterColumn title="Legal" items={footerNav.legal} />
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2 font-mono uppercase tracking-widest">
            <span className="h-2 w-2 rounded-full bg-status" aria-hidden />
            All facilities operational
          </p>
        </div>
      </Container>
    </footer>
  );
}
