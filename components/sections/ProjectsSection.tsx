"use client";

import { usePathname } from "next/navigation";
import { MaxWidthWrapper } from "../layout/MaxWidthWrapper";
import { ProjectCardImage } from "../ui/ProjectCardImage";
import { getDictionary, getLocaleFromPath } from "@/lib/locale";

const imageSrcByIndex = [
  "/images/projects/project-office.jpg",
  "/images/projects/project-restaurant.jpg",
  "/images/projects/project-retail.jpg"
] as const;

const proxyVariantByIndex = ["office", "restaurant", "retail"] as const;

export function ProjectsSection() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const dict = getDictionary(locale);
  const isArabic = locale === "ar";
  const p = dict.home.projects;

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
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

        <div className="mt-10 grid gap-8 sm:mt-12 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {p.items.map((project, idx) => (
            <article key={idx} className={`group flex flex-col gap-6 ${isArabic ? "text-right" : ""}`} dir={isArabic ? "rtl" : "ltr"}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-slate-100/90 shadow-sm ring-1 ring-slate-100/50 transition-[transform,box-shadow,border-color] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:hover:-translate-y-1 md:hover:border-slate-200 md:hover:shadow-[0_24px_48px_rgba(0,0,0,0.12)] md:hover:ring-slate-200/60 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                <div className="h-full w-full transition-transform duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover:scale-[1.03] motion-reduce:duration-0 motion-reduce:group-hover:scale-100">
                  <ProjectCardImage
                    src={imageSrcByIndex[idx]}
                    alt={project.title}
                    proxyVariant={proxyVariantByIndex[idx]}
                  />
                </div>
              </div>
              <div className="space-y-2 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 motion-reduce:duration-0 motion-reduce:group-hover:translate-y-0">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  {project.tag}
                </p>
                <h3 className="text-base md:text-lg font-medium tracking-tight text-slate-900">
                  {project.title}
                </h3>
                <p className="text-sm md:text-[15px] leading-relaxed text-slate-500">
                  {project.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
