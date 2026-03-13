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
          headline="A clear project starts with a clear first conversation."
          supportingText="The more structured the first discussion, the easier it is to define scope, priorities, and the right next step."
          imageSrc="/images/contact-cinematic.jpg"
          proxyVariant="contact"
        />
        <InnerPageStatementSection>
          Clarity at the start
          <br />
          improves everything after.
        </InnerPageStatementSection>
        <RevealOnScroll>
          <ContactCTASection />
        </RevealOnScroll>
      </main>
      <SiteFooter />
    </div>
  );
}
