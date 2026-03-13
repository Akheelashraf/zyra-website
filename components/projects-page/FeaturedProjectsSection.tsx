"use client";

import { MaxWidthWrapper } from "../layout/MaxWidthWrapper";
import { FeaturedProjectImage } from "@/components/ui/FeaturedProjectImage";
import { motion, useReducedMotion } from "framer-motion";

const featuredProjects = [
  {
    title: "Corporate Office Fit-Out — Dammam",
    imageSrc: "/images/projects/project-office.jpg",
    proxyVariant: "office" as const,
    subtitle: "A workspace for a growing Saudi team, built around focus and collaboration.",
    tag: "Office · Dammam",
    note: "Complete interior execution including partitions, ceilings, joinery and services coordination."
  },
  {
    title: "Restaurant Interior Renovation — Al Khobar",
    imageSrc: "/images/projects/project-restaurant.jpg",
    proxyVariant: "restaurant" as const,
    subtitle: "F&B space re-shaped for clarity, circulation and customer experience.",
    tag: "Restaurant · Al Khobar",
    note: "Phased works to keep operations active while zones were upgraded and refreshed."
  },
  {
    title: "Retail Showroom Interior — Eastern Province",
    imageSrc: "/images/projects/project-retail.jpg",
    proxyVariant: "retail" as const,
    subtitle: "Public areas and back-of-house spaces renewed without disrupting operations.",
    tag: "Retail · Eastern Province",
    note: "Targeted interventions to update finishes, lighting and customer-facing details."
  }
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function FeaturedProjectsSection() {
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : 0.7;

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <MaxWidthWrapper>
        <div className="max-w-3xl space-y-3">
          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
            Featured projects
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl lg:text-[2.1rem]">
            Selected environments shaped around execution.
          </h2>
          <p className="max-w-2xl text-sm text-slate-500 md:text-base">
            Selected corporate, retail and hospitality spaces Zyra delivers for
            clients in Saudi Arabia.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group grid gap-6 rounded-3xl border border-slate-100/90 bg-white p-6 shadow-sm ring-1 ring-slate-100/50 sm:p-7 lg:grid-cols-[1.4fr,1fr] lg:gap-10 lg:p-8"
              initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration,
                delay: reduceMotion ? 0 : index * 0.08,
                ease
              }}
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-slate-100 transition-[transform,box-shadow] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:hover:-translate-y-1 md:hover:shadow-[0_24px_48px_rgba(0,0,0,0.12)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                <div className="h-full w-full transition-transform duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover:scale-[1.03] motion-reduce:duration-0 motion-reduce:group-hover:scale-100">
                  <FeaturedProjectImage
                    src={project.imageSrc}
                    alt={project.title}
                    proxyVariant={project.proxyVariant}
                  />
                </div>
              </div>

              <div className="flex flex-col justify-between space-y-5">
                <div className="space-y-2.5">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                    {project.tag}
                  </p>
                  <h3 className="text-base font-medium tracking-tight text-slate-900 md:text-lg">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500 md:text-[15px]">
                    {project.subtitle}
                  </p>
                </div>
                <p className="border-t border-slate-100 pt-4 text-xs leading-relaxed text-slate-500 md:text-[13px]">
                  {project.note}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
