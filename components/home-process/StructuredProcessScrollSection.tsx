"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper";
import { ProcessStageVisual } from "./ProcessStageVisual";
import { getDictionary, getLocaleFromPath } from "@/lib/locale";

export function StructuredProcessScrollSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const dict = getDictionary(locale);
  const p = dict.home.processScroll;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const ideaTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.33, 0.4],
    [1, 1, 0, 0]
  );
  const designTextOpacity = useTransform(
    scrollYProgress,
    [0.28, 0.33, 0.6, 0.66, 0.73],
    [0, 0, 1, 1, 0]
  );
  const builtTextOpacity = useTransform(
    scrollYProgress,
    [0.6, 0.66, 1],
    [0, 1, 1]
  );

  return (
    <section
      ref={sectionRef}
      className={`relative bg-white ${!reduceMotion ? "structured-process-scroll-height" : ""}`}
    >
      <div
        className="sticky top-0 flex min-h-screen flex-col items-center justify-center py-20 sm:py-24 lg:py-32"
        aria-label={p.ariaLabel}
      >
        <MaxWidthWrapper className={`flex w-full flex-col items-center ${locale === "ar" ? "text-right" : ""}`} dir={locale === "ar" ? "rtl" : "ltr"}>
          <div className="max-w-3xl space-y-5 text-center">
            <h2 className="text-2xl font-semibold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-[2.1rem]">
              {p.titleLine1}
              <br />
              {p.titleLine2}
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base">
              {p.intro}
            </p>
          </div>

          {/* Central visual stage */}
          <div className="mt-14 w-full max-w-[720px] sm:mt-16 lg:mt-20">
            <ProcessStageVisual
              scrollProgress={scrollYProgress}
              reduceMotion={!!reduceMotion}
            />
          </div>

          {/* Phase label + supporting text */}
          <div className="relative mt-10 min-h-[140px] w-full max-w-xl sm:mt-12 lg:mt-14">
            {reduceMotion ? (
              <div className="space-y-6 text-center">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zyra-blue">
                  {p.reducedMotionLabel}
                </p>
                <p className="text-sm leading-relaxed text-slate-500 md:text-base">
                  {p.reducedMotionText}
                </p>
              </div>
            ) : (
              <>
                <motion.div
                  className="absolute left-1/2 top-0 w-full -translate-x-1/2 px-4 text-center"
                  style={{ opacity: ideaTextOpacity }}
                >
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500">
                    {p.phases[0].label}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500 md:text-base">
                    {p.phases[0].text}
                  </p>
                </motion.div>
                <motion.div
                  className="absolute left-1/2 top-0 w-full -translate-x-1/2 px-4 text-center"
                  style={{ opacity: designTextOpacity }}
                >
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zyra-blue">
                    {p.phases[1].label}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500 md:text-base">
                    {p.phases[1].text}
                  </p>
                </motion.div>
                <motion.div
                  className="absolute left-1/2 top-0 w-full -translate-x-1/2 px-4 text-center"
                  style={{ opacity: builtTextOpacity }}
                >
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-700">
                    {p.phases[2].label}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500 md:text-base">
                    {p.phases[2].text}
                  </p>
                </motion.div>
              </>
            )}
          </div>
        </MaxWidthWrapper>
      </div>

      {/* Spacer when reduced motion so layout still has breathing room */}
      {reduceMotion && <div className="h-24" />}
    </section>
  );
}
