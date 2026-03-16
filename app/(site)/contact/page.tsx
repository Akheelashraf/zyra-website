import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ContactPageHero } from "@/components/contact-page/ContactPageHero";
import { ContactOptionsSection } from "@/components/contact-page/ContactOptionsSection";
import { ContactMapSection } from "@/components/contact-page/ContactMapSection";
import { InquiryGuidanceSection } from "@/components/contact-page/InquiryGuidanceSection";
import { ProjectFitSection } from "@/components/contact-page/ProjectFitSection";
import { ContactFormSection } from "@/components/contact-page/ContactFormSection";
import { InnerPageCinematicSection } from "@/components/shared/InnerPageCinematicSection";
import { InnerPageStatementSection } from "@/components/shared/InnerPageStatementSection";
import { ContactCTASection } from "@/components/contact-page/ContactCTASection";

export const metadata: Metadata = {
  title: "Contact Zyra Builds | Commercial Interior Projects",
  description:
    "Contact Zyra Builds for commercial interior fit-out, renovation, and execution. Al Khobar, Dammam, Eastern Province, Saudi Arabia."
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <ContactPageHero />
        <RevealOnScroll>
          <ContactOptionsSection />
        </RevealOnScroll>
        <RevealOnScroll>
          <ContactMapSection />
        </RevealOnScroll>
        <RevealOnScroll>
          <InquiryGuidanceSection />
        </RevealOnScroll>
        <RevealOnScroll>
          <ProjectFitSection />
        </RevealOnScroll>
        <RevealOnScroll>
          <ContactFormSection />
        </RevealOnScroll>
        <InnerPageCinematicSection
          imageSrc="/images/contact-cinematic.jpg"
          proxyVariant="contact"
          cinematicKey="contact"
        />
        <InnerPageStatementSection statementKey="contact" />
        <RevealOnScroll>
          <ContactCTASection />
        </RevealOnScroll>
      </main>
      <SiteFooter />
    </div>
  );
}
