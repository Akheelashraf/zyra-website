import { MaxWidthWrapper } from "../layout/MaxWidthWrapper";

const lenses = [
  {
    title: "Scope control",
    body: "Defining what is included, what is not, and how change will be handled before work begins."
  },
  {
    title: "Coordination",
    body: "Aligning drawings, services and suppliers so decisions are made once, not repeatedly on site."
  },
  {
    title: "Phasing",
    body: "Planning how works move through a space so operations and teams can keep working safely."
  },
  {
    title: "Finish quality",
    body: "Detailing and supervision that close the gap between drawings, mock-ups and the finished space."
  },
  {
    title: "Operational function",
    body: "Checking that circulation, storage and services actually support how the business uses the space."
  }
];

export function ExecutionPerspectiveSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <MaxWidthWrapper>
        <div className="grid gap-10 lg:grid-cols-[1.1fr,1.3fr] lg:items-start">
          <div className="space-y-3">
            <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
              Execution perspective
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-semibold tracking-tight text-slate-900">
              Every project is shaped by more than appearance.
            </h2>
            <p className="text-sm md:text-base text-slate-500 max-w-xl">
              Zyra evaluates projects through scope, coordination, phasing and operational
              function, not just the visuals, so the built space can support everyday use.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {lenses.map((lens) => (
              <div key={lens.title} className="space-y-2.5 rounded-3xl border border-slate-100/90 bg-slate-50/70 p-5 shadow-sm transition-all duration-200 hover:border-slate-200 hover:bg-white hover:shadow-sm md:p-6">
                <h3 className="text-sm md:text-[15px] font-medium text-slate-900">
                  {lens.title}
                </h3>
                <p className="text-xs md:text-[13px] leading-relaxed text-slate-500">
                  {lens.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

