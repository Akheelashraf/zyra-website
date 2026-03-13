"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper";
import { ProcessStageVisual } from "./ProcessStageVisual";

const PHASES = [
  {
    label: "IDEA",
    text: "Every project begins with a clear brief, spatial intent, and the first decisions that shape how the space should work."
  },
  {
    label: "DESIGN",
    text: "Scope, coordination, and design intent are aligned before execution begins, reducing ambiguity and improving control."
  },
  {
    label: "BUILT SPACE",
    text: "The final result is a commercial interior delivered with control, clarity, and attention to how the business will use the space."
  }
] as const;

export function StructuredProcessScrollSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
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
        aria-label="Structured process: Idea, Design, Built Space"
      >
        <MaxWidthWrapper className="flex w-full flex-col items-center">
          {/* Section introduction */}
          <div className="max-w-3xl space-y-5 text-center">
            <h2 className="text-2xl font-semibold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-[2.1rem]">
              Structured delivery,
              <br />
              stage by stage.
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base">
              From concept to completed space, Zyra executes commercial interiors
              through a disciplined sequence of decisions and coordination.
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
                  IDEA → DESIGN → BUILT SPACE
                </p>
                <p className="text-sm leading-relaxed text-slate-500 md:text-base">
                  From brief and spatial intent, through coordinated design and
                  scope alignment, to a commercial interior delivered with
                  control and clarity.
                </p>
              </div>
            ) : (
              <>
                <motion.div
                  className="absolute left-1/2 top-0 w-full -translate-x-1/2 px-4 text-center"
                  style={{ opacity: ideaTextOpacity }}
                >
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500">
                    {PHASES[0].label}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500 md:text-base">
                    {PHASES[0].text}
                  </p>
                </motion.div>
                <motion.div
                  className="absolute left-1/2 top-0 w-full -translate-x-1/2 px-4 text-center"
                  style={{ opacity: designTextOpacity }}
                >
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zyra-blue">
                    {PHASES[1].label}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500 md:text-base">
                    {PHASES[1].text}
                  </p>
                </motion.div>
                <motion.div
                  className="absolute left-1/2 top-0 w-full -translate-x-1/2 px-4 text-center"
                  style={{ opacity: builtTextOpacity }}
                >
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-700">
                    {PHASES[2].label}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500 md:text-base">
                    {PHASES[2].text}
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
