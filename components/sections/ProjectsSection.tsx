import { MaxWidthWrapper } from "../layout/MaxWidthWrapper";
import { ProjectCardImage } from "../ui/ProjectCardImage";

const projects = [
  {
    title: "Corporate Office Fit-Out — Dammam",
    subtitle: "Workspace fit-out for a growing Saudi team.",
    tag: "Office · Dammam",
    imageSrc: "/images/projects/project-office.jpg",
    proxyVariant: "office" as const
  },
  {
    title: "Restaurant Interior Renovation — Al Khobar",
    subtitle: "A focused F&B space built around clarity and flow.",
    tag: "Restaurant · Al Khobar",
    imageSrc: "/images/projects/project-restaurant.jpg",
    proxyVariant: "restaurant" as const
  },
  {
    title: "Retail Showroom Interior — Eastern Province",
    subtitle: "Phased renovations to keep operations running smoothly.",
    tag: "Retail · Eastern Province",
    imageSrc: "/images/projects/project-retail.jpg",
    proxyVariant: "retail" as const
  }
];

export function ProjectsSection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <MaxWidthWrapper>
        <div className="max-w-3xl space-y-3">
          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
            Projects
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-semibold tracking-tight text-slate-900">
            Selected spaces shaped with precision.
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl">
            A selection of the types of spaces Zyra delivers for offices, retail
            and hospitality across Saudi Arabia.
          </p>
        </div>

        <div className="mt-10 grid gap-8 sm:mt-12 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group flex flex-col gap-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-slate-100/90 shadow-sm ring-1 ring-slate-100/50 transition-[transform,box-shadow,border-color] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:hover:-translate-y-1 md:hover:border-slate-200 md:hover:shadow-[0_24px_48px_rgba(0,0,0,0.12)] md:hover:ring-slate-200/60 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                <div className="h-full w-full transition-transform duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover:scale-[1.03] motion-reduce:duration-0 motion-reduce:group-hover:scale-100">
                  <ProjectCardImage
                    src={project.imageSrc}
                    alt={project.title}
                    proxyVariant={project.proxyVariant}
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

