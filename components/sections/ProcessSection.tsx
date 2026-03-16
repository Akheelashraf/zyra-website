"use client";

import { usePathname } from "next/navigation";
import { MaxWidthWrapper } from "../layout/MaxWidthWrapper";
import { getDictionary, getLocaleFromPath } from "@/lib/locale";

export function ProcessSection() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const dict = getDictionary(locale);
  const isArabic = locale === "ar";
  const p = dict.home.process;

  return (
    <section className="bg-slate-50/60 py-20 sm:py-24 lg:py-28">
      <MaxWidthWrapper>
        <div className={`max-w-3xl space-y-3 ${isArabic ? "text-right" : ""}`} dir={isArabic ? "rtl" : "ltr"}>
          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
            {p.eyebrow}
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-semibold tracking-tight text-slate-900">
            {p.title}
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl">
            {p.intro}
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-4">
          {p.steps.map((step, idx) => (
            <div key={idx} className={`space-y-4 ${isArabic ? "text-right" : ""}`} dir={isArabic ? "rtl" : "ltr"}>
              <div className="flex items-center gap-3 text-xs font-medium tracking-[0.24em] text-slate-400 uppercase">
                <span className="text-slate-700">{step.label}</span>
                <span className="h-px w-8 bg-slate-200" />
              </div>
              <h3 className="text-base md:text-lg font-medium text-slate-900">
                {step.title}
              </h3>
              <p className="text-sm md:text-[15px] leading-relaxed text-slate-500">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
