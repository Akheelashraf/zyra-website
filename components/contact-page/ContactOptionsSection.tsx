"use client";

import { MaxWidthWrapper } from "../layout/MaxWidthWrapper";
import { useAudio } from "@/components/audio/AudioProvider";

const contactOptions = [
  {
    label: "Email",
    value: "info@zyrabuilds.com",
    href: "mailto:info@zyrabuilds.com",
    note: "For project inquiries and general questions."
  },
  {
    label: "Phone",
    value: "+966 566 32 5017",
    href: "tel:+966566325017",
    note: "For direct conversation when timing matters."
  },
  {
    label: "Location",
    value: "Al Khobar / Dammam",
    note: "Eastern Province, Saudi Arabia. Serving commercial clients across the region."
  }
];

export function ContactOptionsSection() {
  const { playClick } = useAudio();
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <MaxWidthWrapper>
        <div className="max-w-3xl space-y-3">
          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
            Contact options
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-semibold tracking-tight text-slate-900">
            Choose the most direct way to reach Zyra.
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl">
            Whether you prefer email, phone or a brief written outline, Zyra will respond
            with clarity on next steps.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {contactOptions.map((option) => (
            <div
              key={option.label}
              className="space-y-3.5 rounded-3xl border border-slate-100/90 bg-slate-50/70 p-6 sm:p-7 lg:p-8 transition-all duration-200 hover:border-slate-200 hover:bg-white hover:shadow-sm"
            >
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
                {option.label}
              </p>
              {"href" in option && option.href ? (
                <a
                  href={option.href}
                  onClick={playClick}
                  className="text-base md:text-lg font-medium text-slate-900 transition hover:text-zyra-blue hover:underline hover:underline-offset-2"
                >
                  {typeof option.href === "string" && option.href.startsWith("tel:") ? (
                    <bdi dir="ltr">{option.value}</bdi>
                  ) : (
                    option.value
                  )}
                </a>
              ) : (
                <p className="text-base md:text-lg font-medium text-slate-900">
                  {option.value}
                </p>
              )}
              <p className="text-sm leading-relaxed text-slate-500">
                {option.note}
              </p>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
