import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ServicesPageHero } from "@/components/services-page/ServicesPageHero";
import { CoreServicesSection } from "@/components/services-page/CoreServicesSection";
import { DeliveryApproachSection } from "@/components/services-page/DeliveryApproachSection";
import { InnerPageCinematicSection } from "@/components/shared/InnerPageCinematicSection";
import { ScopeExamplesSection } from "@/components/services-page/ScopeExamplesSection";
import { WhyClientsChooseSection } from "@/components/services-page/WhyClientsChooseSection";
import { InnerPageStatementSection } from "@/components/shared/InnerPageStatementSection";
import { ServicesCTASection } from "@/components/services-page/ServicesCTASection";

export const metadata: Metadata = {
  title: "Commercial Interior Fit-Out Services | Zyra Builds",
  description:
    "Commercial fit-out, interior design coordination, renovation, and custom joinery. Structured execution for offices, retail, hospitality, clinics, and showrooms in Saudi Arabia."
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <ServicesPageHero />
        <RevealOnScroll>
          <CoreServicesSection />
        </RevealOnScroll>
        <RevealOnScroll>
          <DeliveryApproachSection />
        </RevealOnScroll>
        <InnerPageCinematicSection
          imageSrc="/images/services-cinematic.jpg"
          proxyVariant="services"
          cinematicKey="services"
        />
        <RevealOnScroll>
          <ScopeExamplesSection />
        </RevealOnScroll>
        <RevealOnScroll>
          <WhyClientsChooseSection />
        </RevealOnScroll>
        <InnerPageStatementSection statementKey="services" />
        <RevealOnScroll>
          <ServicesCTASection />
        </RevealOnScroll>
      </main>
      <SiteFooter />
    </div>
  );
}

