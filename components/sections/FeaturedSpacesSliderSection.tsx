"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

const CARD_WIDTH = 420;
const GAP = 32; // gap-8

const spaces = [
  {
    id: "offices",
    category: "Offices",
    description: "Workspaces built for focus, collaboration and growth.",
    imageSrc: "/images/projects/project-office.jpg",
    imageAlt: "Office interior — Zyra Builds"
  },
  {
    id: "restaurants",
    category: "Restaurants",
    description: "F&B environments shaped for clarity, flow and experience.",
    imageSrc: "/images/projects/project-restaurant.jpg",
    imageAlt: "Restaurant interior — Zyra Builds"
  },
  {
    id: "retail",
    category: "Retail",
    description: "Showrooms and retail spaces that keep operations running.",
    imageSrc: "/images/projects/project-retail.jpg",
    imageAlt: "Retail interior — Zyra Builds"
  },
  {
    id: "showrooms",
    category: "Showrooms & Exhibition",
    description: "Exhibition booths and showroom interiors that stand out.",
    imageSrc: "/images/home-cinematic.jpg",
    imageAlt: "Showroom interior — Zyra Builds"
  }
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function FeaturedSpacesSliderSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const step = CARD_WIDTH + GAP;
    el.scrollBy({ left: direction === "left" ? -step : step, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 flex flex-col gap-6 sm:mb-14 md:flex-row md:items-end md:justify-between"
          initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.6, ease }}
        >
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl lg:text-[2.1rem]">
              Featured Spaces
            </h2>
            <p className="mt-3 text-sm text-slate-500 md:text-base md:leading-relaxed">
              Explore the types of commercial environments we create.
            </p>
          </div>
          {/* Arrow controls — desktop only */}
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/90 bg-white/95 shadow-md transition-colors hover:border-slate-300 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-zyra-blue focus-visible:ring-offset-2"
              aria-label="Previous"
            >
              <svg className="h-5 w-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/90 bg-white/95 shadow-md transition-colors hover:border-slate-300 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-zyra-blue focus-visible:ring-offset-2"
              aria-label="Next"
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
            {spaces.map((space, index) => (
              <motion.article
                key={space.id}
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
                      src={space.imageSrc}
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
                  <div className="space-y-1.5">
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
