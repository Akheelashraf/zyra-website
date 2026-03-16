"use client";

import { usePathname } from "next/navigation";
import { MaxWidthWrapper } from "../layout/MaxWidthWrapper";
import { getDictionary, getLocaleFromPath } from "@/lib/locale";

export function ServicesSection() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const dict = getDictionary(locale);
  const isArabic = locale === "ar";
  const s = dict.home.services;

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <MaxWidthWrapper>
        <div className={`max-w-3xl space-y-3 ${isArabic ? "text-right" : ""}`} dir={isArabic ? "rtl" : "ltr"}>
          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
            {s.eyebrow}
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-semibold tracking-tight text-slate-900">
            {s.title}
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl">
            {s.intro}
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {s.items.map((service, idx) => (
            <div
              key={idx}
              className={`group space-y-3.5 rounded-3xl border border-slate-100/90 bg-slate-50/70 p-6 sm:p-7 lg:p-8 transition-all duration-200 hover:border-slate-200 hover:bg-white hover:shadow-sm ${isArabic ? "text-right" : ""}`}
              dir={isArabic ? "rtl" : "ltr"}
            >
              <h3 className="text-base md:text-lg font-medium tracking-tight text-slate-900">
                {service.title}
              </h3>
              <p className="text-sm text-[15px] leading-relaxed text-slate-500">
                {service.body}
              </p>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
