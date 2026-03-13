import { MaxWidthWrapper } from "../layout/MaxWidthWrapper";

const outcomes = [
  {
    title: "Better team environments",
    body: "Spaces that support focus, informal interaction and the practical needs of teams on site."
  },
  {
    title: "Stronger customer-facing spaces",
    body: "Front-of-house areas that quietly communicate how your business operates and what it stands for."
  },
  {
    title: "Controlled upgrades",
    body: "Renovations and refreshes planned to limit disruption, protect assets and keep operations moving."
  },
  {
    title: "Spaces that signal maturity",
    body: "Interiors that reflect where your business is heading, not just where it started."
  }
];

export function WhyWorkMattersSection() {
  return (
    <section className="bg-slate-50/60 py-16 sm:py-20 lg:py-24">
      <MaxWidthWrapper>
        <div className="max-w-3xl space-y-3">
          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
            Why the work matters
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-semibold tracking-tight text-slate-900">
            Built spaces should support the business behind them.
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl">
            Zyra’s projects are measured by how they help teams work, serve customers and
            reflect the stage of the business, not only by how they photograph.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {outcomes.map((outcome) => (
            <div
              key={outcome.title}
              className="space-y-3.5 rounded-3xl border border-slate-100/90 bg-white p-6 shadow-sm transition-all duration-200 hover:border-slate-200 hover:shadow-sm sm:p-7 lg:p-8"
            >
              <h3 className="text-base md:text-lg font-medium text-slate-900">
                {outcome.title}
              </h3>
              <p className="text-sm md:text-[15px] leading-relaxed text-slate-500">
                {outcome.body}
              </p>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

