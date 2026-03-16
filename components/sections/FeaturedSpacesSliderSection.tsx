"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useAudio } from "@/components/audio/AudioProvider";
import { getDictionary, getLocaleFromPath } from "@/lib/locale";

const CARD_WIDTH = 420;
const GAP = 32; // gap-8

const imageSrcByKey = [
  "/images/projects/project-office.jpg",
  "/images/projects/project-restaurant.jpg",
  "/images/projects/project-retail.jpg",
  "/images/home-cinematic.jpg"
] as const;

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function FeaturedSpacesSliderSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const dict = getDictionary(locale);
  const isArabic = locale === "ar";
  const f = dict.home.featuredSpaces;
  const { playClick } = useAudio();

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const step = CARD_WIDTH + GAP;
    const delta = direction === "left" ? -step : step;
    el.scrollBy({ left: isArabic ? -delta : delta, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className={`mb-12 flex flex-col gap-6 sm:mb-14 md:flex-row md:items-end ${isArabic ? "md:justify-between" : "md:justify-between"}`}
          initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.6, ease }}
        >
          <div className={isArabic ? "text-right" : ""} dir={isArabic ? "rtl" : "ltr"}>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl lg:text-[2.1rem]">
              {f.title}
            </h2>
            <p className="mt-3 text-sm text-slate-500 md:text-base md:leading-relaxed">
              {f.subtitle}
            </p>
          </div>
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              onClick={() => {
                playClick();
                scroll("left");
              }}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/90 bg-white/95 shadow-md transition-colors hover:border-slate-300 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-zyra-blue focus-visible:ring-offset-2"
              aria-label={f.previous}
            >
              <svg className="h-5 w-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => {
                playClick();
                scroll("right");
              }}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/90 bg-white/95 shadow-md transition-colors hover:border-slate-300 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-zyra-blue focus-visible:ring-offset-2"
              aria-label={f.next}
            >
              <svg className="h-5 w-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>

        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-8 overflow-x-auto overflow-y-hidden px-4 pb-4 scroll-smooth [scrollbar-width:none] sm:px-6 md:gap-8 lg:px-8 [&::-webkit-scrollbar]:hidden"
          >
            {f.spaces.map((space, index) => (
              <motion.article
                key={index}
                className="group flex min-w-[320px] shrink-0 snap-center snap-always sm:min-w-[380px] md:min-w-[420px]"
                initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.6,
                  delay: reduceMotion ? 0 : index * 0.06,
                  ease
                }}
              >
                <div className="flex w-full flex-col gap-5">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:duration-0 motion-reduce:group-hover:scale-100">
                    <Image
                      src={imageSrcByKey[index]}
                      alt={space.imageAlt}
                      fill
                      sizes="(max-width: 640px) 320px, (max-width: 768px) 380px, 420px"
                      className="object-cover object-center"
                      onError={(e) => {
                        const img = e.currentTarget;
                        const wrapper = img.parentElement;
                        img.style.display = "none";
                        wrapper?.nextElementSibling?.classList.remove("hidden");
                      }}
                    />
                    <div
                      className="absolute inset-0 hidden bg-gradient-to-br from-slate-200/80 via-slate-100/70 to-slate-300/60"
                      aria-hidden
                    />
                  </div>
                  <div className={`space-y-1.5 ${isArabic ? "text-right" : ""}`} dir={isArabic ? "rtl" : "ltr"}>
                    <h3 className="text-lg font-semibold tracking-tight text-slate-900 md:text-xl">
                      {space.category}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-500 md:text-[15px]">
                      {space.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
