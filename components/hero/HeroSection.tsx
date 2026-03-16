"use client";

import { MaxWidthWrapper } from "../layout/MaxWidthWrapper";
import { HeroCinematicImage } from "./HeroCinematicImage";
import { HeroActions } from "./HeroActions";
import { getDictionary, getLocaleFromPath } from "@/lib/locale";
import { usePathname } from "next/navigation";

export function HeroSection() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const dict = getDictionary(locale);
  const isArabic = locale === "ar";

  return (
    <section className="relative bg-white pt-1">
      <div className="relative w-full min-h-[78vh] overflow-hidden rounded-b-2xl shadow-[0_28px_80px_rgba(15,23,42,0.07),0_12px_32px_rgba(15,23,42,0.04)] ring-1 ring-slate-100/50 md:min-h-[82vh] lg:min-h-[85vh]">
        <HeroCinematicImage fillStage />

        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_left,rgba(0,0,0,0.35),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/50 via-black/20 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[2] bg-black/25"
          aria-hidden
        />

        <div className="absolute inset-x-0 bottom-0 z-10 pb-10 pt-28 sm:pb-12 sm:pt-32 md:pb-16 md:pt-40 lg:pb-20 lg:pt-48">
          <MaxWidthWrapper className={`flex flex-col ${isArabic ? "items-end text-right" : "items-start text-left"}`}>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:leading-[1] md:text-6xl lg:text-7xl [text-shadow:0_2px_10px_rgba(0,0,0,0.25)]">
              {dict.home.hero.headline1}
              <br />
              {dict.home.hero.headline2}
            </h1>
            <p className="mt-5 max-w-[520px] text-base text-white/85 sm:mt-6 md:text-lg md:leading-relaxed lg:mt-7 [text-shadow:0_2px_10px_rgba(0,0,0,0.25)]">
              {dict.home.hero.subline}
            </p>
            <div className={`mt-8 sm:mt-9 flex flex-wrap items-center gap-4 ${isArabic ? "justify-end" : ""}`}>
              <HeroActions />
            </div>
          </MaxWidthWrapper>
        </div>
      </div>
    </section>
  );
}
