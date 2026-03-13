import { MaxWidthWrapper } from "../layout/MaxWidthWrapper";

const reasons = [
  {
    title: "Clear Scope Control",
    body: "Defined packages, drawings and responsibilities so decisions stay anchored and change is managed."
  },
  {
    title: "Weekly Visibility",
    body: "Structured updates that give you a clear view of progress, risks and upcoming decisions."
  },
  {
    title: "Design-Aware Execution",
    body: "Respecting design intent while resolving details on site, so the finished space matches what was imagined."
  },
  {
    title: "Commercial Focus",
    body: "Built specifically for growing businesses that need their space to support teams, clients and operations."
  }
];

export function WhyZyraSection() {
  return (
    <section className="bg-slate-50/60 py-20 sm:py-24 lg:py-28">
      <MaxWidthWrapper>
        <div className="max-w-3xl space-y-3">
          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
            Why Zyra
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-semibold tracking-tight text-slate-900">
            Built for businesses that value structure.
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl">
            Zyra is not a general contractor. It is a focused interior execution partner
            for commercial spaces where structure and coordination matter.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="space-y-3.5 rounded-3xl border border-slate-100/90 bg-white p-6 sm:p-7 lg:p-8 shadow-sm transition-all duration-200 hover:border-slate-200 hover:shadow-md"
            >
              <h3 className="text-base md:text-lg font-medium tracking-tight text-slate-900">
                {reason.title}
              </h3>
              <p className="text-sm md:text-[15px] leading-relaxed text-slate-500">
                {reason.body}
              </p>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

