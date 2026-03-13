import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { HeroSection } from "@/components/hero/HeroSection";
import { InsideZyraVideoSection } from "@/components/sections/InsideZyraVideoSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturedSpacesSliderSection } from "@/components/sections/FeaturedSpacesSliderSection";
import { CinematicSection } from "@/components/sections/CinematicSection";
import { LargeStatementSection } from "@/components/sections/LargeStatementSection";
import { StructuredProcessScrollSection } from "@/components/home-process/StructuredProcessScrollSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { WhyZyraSection } from "@/components/sections/WhyZyraSection";
import { StatementSection } from "@/components/sections/StatementSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const metadata: Metadata = {
  title: "Zyra Builds | Commercial Interior Fit-Out in Saudi Arabia",
  description:
    "Structured commercial interior execution for growing businesses in Saudi Arabia. Offices, restaurants, retail, clinics, showrooms, exhibition booths."
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <RevealOnScroll>
          <HeroSection />
        </RevealOnScroll>
        <InsideZyraVideoSection />
        <RevealOnScroll>
          <ServicesSection />
        </RevealOnScroll>
        <FeaturedSpacesSliderSection />
        <RevealOnScroll>
          <CinematicSection />
        </RevealOnScroll>
        <LargeStatementSection />
        <StructuredProcessScrollSection />
        <RevealOnScroll>
          <ProcessSection />
        </RevealOnScroll>
        <RevealOnScroll>
          <ProjectsSection />
        </RevealOnScroll>
        <RevealOnScroll>
          <WhyZyraSection />
        </RevealOnScroll>
        <RevealOnScroll>
          <StatementSection />
        </RevealOnScroll>
        <RevealOnScroll>
          <FinalCTASection />
        </RevealOnScroll>
      </main>
      <SiteFooter />
    </div>
  );
}

