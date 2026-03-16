"use client";

import { usePathname } from "next/navigation";
import { MaxWidthWrapper } from "../layout/MaxWidthWrapper";
import { getDictionary, getLocaleFromPath } from "@/lib/locale";

export function WhyZyraSection() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const dict = getDictionary(locale);
  const isArabic = locale === "ar";
  const w = dict.home.whyZyra;

  return (
    <section className="bg-slate-50/60 py-20 sm:py-24 lg:py-28">
      <MaxWidthWrapper>
        <div className={`max-w-3xl space-y-3 ${isArabic ? "text-right" : ""}`} dir={isArabic ? "rtl" : "ltr"}>
          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
            {w.eyebrow}
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-semibold tracking-tight text-slate-900">
            {w.title}
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl">
            {w.intro}
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {w.reasons.map((reason, idx) => (
            <div
              key={idx}
              className={`space-y-3.5 rounded-3xl border border-slate-100/90 bg-white p-6 sm:p-7 lg:p-8 shadow-sm transition-all duration-200 hover:border-slate-200 hover:shadow-md ${isArabic ? "text-right" : ""}`}
              dir={isArabic ? "rtl" : "ltr"}
            >
              <h3 className="text-base md:text-lg font-medium tracking-tight text-slate-900">
                {reason.title}
              </h3>
              <p className="text-sm md:text-[15px] leading-relaxed text-slate-500">
                {reason.body}
              </p>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
