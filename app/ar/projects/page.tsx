import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ProjectsPageHero } from "@/components/projects-page/ProjectsPageHero";
import { FeaturedProjectsSection } from "@/components/projects-page/FeaturedProjectsSection";
import { ProjectTypesSection } from "@/components/projects-page/ProjectTypesSection";
import { ExecutionPerspectiveSection } from "@/components/projects-page/ExecutionPerspectiveSection";
import { WhyWorkMattersSection } from "@/components/projects-page/WhyWorkMattersSection";
import { InnerPageCinematicSection } from "@/components/shared/InnerPageCinematicSection";
import { InnerPageStatementSection } from "@/components/shared/InnerPageStatementSection";
import { ProjectsCTASection } from "@/components/projects-page/ProjectsCTASection";

export const metadata: Metadata = {
  title: "Commercial Interior Projects | Zyra Builds",
  description:
    "Selected commercial interior projects: offices, retail, restaurants, clinics, showrooms. Delivered in Al Khobar, Dammam, and Eastern Province."
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <ProjectsPageHero />
        <FeaturedProjectsSection />
        <RevealOnScroll>
          <ProjectTypesSection />
        </RevealOnScroll>
        <RevealOnScroll>
          <ExecutionPerspectiveSection />
        </RevealOnScroll>
        <RevealOnScroll>
          <WhyWorkMattersSection />
        </RevealOnScroll>
        <InnerPageCinematicSection
          imageSrc="/images/projects-cinematic.jpg"
          proxyVariant="projects"
          cinematicKey="projects"
        />
        <InnerPageStatementSection statementKey="projects" />
        <RevealOnScroll>
          <ProjectsCTASection />
        </RevealOnScroll>
      </main>
      <SiteFooter />
    </div>
  );
}
