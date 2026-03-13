import { MaxWidthWrapper } from "../layout/MaxWidthWrapper";

const projectTypes = [
  {
    title: "Offices",
    body: "Workplaces for growing teams, designed around focus, collaboration and client interaction."
  },
  {
    title: "Retail",
    body: "Retail environments where circulation, sightlines and product visibility are carefully controlled."
  },
  {
    title: "Hospitality",
    body: "Guest-facing spaces and back-of-house areas that need to stay operational while being upgraded."
  },
  {
    title: "Commercial Renovations",
    body: "Reconfigurations and refreshes of existing commercial spaces with clear phasing and protection planning."
  }
];

export function ProjectTypesSection() {
  return (
    <section className="bg-slate-50/60 py-16 sm:py-20 lg:py-24">
      <MaxWidthWrapper>
        <div className="max-w-3xl space-y-3">
          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
            Project types
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-semibold tracking-tight text-slate-900">
            Built for the way commercial spaces actually operate.
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl">
            Zyra focuses on environments where execution quality, timing and disruption
            directly affect teams, customers and brand perception.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projectTypes.map((type) => (
            <div
              key={type.title}
              className="rounded-3xl border border-slate-100/90 bg-white p-6 shadow-sm transition-all duration-200 hover:border-slate-200 hover:shadow-sm sm:p-7 lg:p-8"
            >
              <h3 className="text-base md:text-lg font-medium text-slate-900">
                {type.title}
              </h3>
              <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-slate-500">
                {type.body}
              </p>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

