import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { AboutPageHero } from "@/components/about-page/AboutPageHero";
import { WhoZyraIsSection } from "@/components/about-page/WhoZyraIsSection";
import { ZyraApproachSection } from "@/components/about-page/ZyraApproachSection";
import { BuiltForSection } from "@/components/about-page/BuiltForSection";
import { WhyTrustZyraSection } from "@/components/about-page/WhyTrustZyraSection";
import { InnerPageCinematicSection } from "@/components/shared/InnerPageCinematicSection";
import { InnerPageStatementSection } from "@/components/shared/InnerPageStatementSection";
import { AboutCTASection } from "@/components/about-page/AboutCTASection";

export const metadata: Metadata = {
  title: "About Zyra Builds | Commercial Interior Execution",
  description:
    "Zyra Builds is an execution partner for commercial interiors in Saudi Arabia — structure, coordination, and design-aware delivery for growing businesses in the Eastern Province."
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <AboutPageHero />
        <RevealOnScroll>
          <WhoZyraIsSection />
        </RevealOnScroll>
        <RevealOnScroll>
          <ZyraApproachSection />
        </RevealOnScroll>
        <RevealOnScroll>
          <BuiltForSection />
        </RevealOnScroll>
        <RevealOnScroll>
          <WhyTrustZyraSection />
        </RevealOnScroll>
        <InnerPageCinematicSection
          imageSrc="/images/about-cinematic.jpg"
          proxyVariant="about"
          cinematicKey="about"
        />
        <InnerPageStatementSection statementKey="about" />
        <RevealOnScroll>
          <AboutCTASection />
        </RevealOnScroll>
      </main>
      <SiteFooter />
    </div>
  );
}
