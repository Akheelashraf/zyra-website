import { MaxWidthWrapper } from "../layout/MaxWidthWrapper";

const points = [
  {
    title: "Clear Scope Control",
    body: "Defined work packages and drawings so decisions are anchored and scope creep is managed, not ignored."
  },
  {
    title: "Weekly Visibility",
    body: "Regular, structured updates that focus on progress, risks and upcoming decisions, not just site photos."
  },
  {
    title: "Design-Aware Delivery",
    body: "Respecting the design while resolving details with consultants, so the finished space matches the intent."
  },
  {
    title: "Commercial Focus",
    body: "Built around the needs of growing businesses, where time, disruption and brand experience all matter."
  }
];

export function WhyClientsChooseSection() {
  return (
    <section className="bg-slate-50/60 py-16 sm:py-20 lg:py-24">
      <MaxWidthWrapper>
        <div className="max-w-3xl space-y-3">
          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
            Why clients choose Zyra
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-semibold tracking-tight text-slate-900">
            Execution built around clarity, not chaos.
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl">
            Zyra focuses on structure, coordination and visibility so your team can trust how
            the project is being delivered, not just how it looks at the end.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {points.map((point) => (
            <div
              key={point.title}
              className="space-y-3.5 rounded-3xl border border-slate-100/90 bg-white p-6 shadow-sm transition-all duration-200 hover:border-slate-200 hover:shadow-sm sm:p-7 lg:p-8"
            >
              <h3 className="text-base md:text-lg font-medium text-slate-900">
                {point.title}
              </h3>
              <p className="text-sm md:text-[15px] leading-relaxed text-slate-500">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

