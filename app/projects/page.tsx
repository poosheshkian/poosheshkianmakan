import type { Metadata } from "next";
import { Hero, SectionTitle, CTABanner } from "@/components/sections";
import { Section } from "@/components/layout/section";
import { ProjectCard } from "@/components/sections/project-card";
import { buildMetadata } from "@/lib/seo";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description:
    "Selected engineering programs across aerospace, energy, medical device, semiconductor, heavy equipment, and automotive production.",
  path: "/projects",
});

export default function ProjectsPage() {
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <>
      <Hero
        eyebrow="Projects"
        title="Selected programs,"
        highlight="measured in outcomes."
        description="A sample of engineering programs across the industries we serve — each one specced, machined, and delivered under the same quality system."
      />

      {featured.length > 0 && (
        <Section>
          <SectionTitle eyebrow="Featured programs" title="Recent work worth a closer look" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                industry={project.industry}
                year={project.year}
                summary={project.summary}
                specs={project.specs}
              />
            ))}
          </div>
        </Section>
      )}

      <Section className="border-t border-border bg-surface">
        <SectionTitle eyebrow="Program archive" title="More completed work" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              industry={project.industry}
              year={project.year}
              summary={project.summary}
              specs={project.specs}
            />
          ))}
        </div>
      </Section>

      <Section>
        <CTABanner
          eyebrow="Have a similar program"
          title="Let's scope your next production run"
          description="Send over your print or a description of the part family — we'll tell you what it takes to get it into production."
          primaryCta={{ label: "Request a Quote", href: "/contact" }}
        />
      </Section>
    </>
  );
}
