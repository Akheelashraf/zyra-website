import { MaxWidthWrapper } from "../layout/MaxWidthWrapper";

const approachPoints = [
  {
    title: "Clarity before execution",
    body: "Defining scope, interfaces and responsibilities before work starts so ambiguity is reduced early."
  },
  {
    title: "Disciplined scope definition",
    body: "Clear work packages and drawings so everyone knows what is in, what is out, and how change is handled."
  },
  {
    title: "Coordination across stakeholders",
    body: "Aligning designers, consultants and suppliers so decisions are made once and communicated clearly."
  },
  {
    title: "Controlled delivery",
    body: "Sequenced on-site execution with supervision, quality checks and structured updates on progress and risks."
  },
  {
    title: "Practical, business-aware decisions",
    body: "Resolving details in a way that supports how the space will actually be used and operated."
  }
];

export function ZyraApproachSection() {
  return (
    <section className="bg-slate-50/60 py-16 sm:py-20 lg:py-24">
      <MaxWidthWrapper>
        <div className="max-w-3xl space-y-3">
          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
            The Zyra approach
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-semibold tracking-tight text-slate-900">
            Execution begins long before work starts on site.
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl">
            Zyra approaches projects by reducing ambiguity early, aligning teams clearly
            and building around real operational needs.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {approachPoints.map((point, index) => (
            <div
              key={point.title}
              className="flex gap-6 rounded-3xl border border-slate-100/90 bg-white p-6 shadow-sm transition-all duration-200 hover:border-slate-200 hover:shadow-sm sm:p-7 lg:p-8"
            >
              <div className="flex shrink-0 items-center justify-center text-xs font-medium tracking-[0.2em] text-slate-400">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base md:text-lg font-medium text-slate-900">
                  {point.title}
                </h3>
                <p className="text-sm md:text-[15px] leading-relaxed text-slate-500">
                  {point.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
