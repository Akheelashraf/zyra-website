import { MaxWidthWrapper } from "../layout/MaxWidthWrapper";

const phases = [
  {
    label: "01",
    title: "Discover",
    body: "Clarifying objectives, constraints and project drivers so the brief is grounded in how your business operates."
  },
  {
    label: "02",
    title: "Design Coordination",
    body: "Aligning drawings, details and specifications between designers, consultants and suppliers before works start."
  },
  {
    label: "03",
    title: "Execution",
    body: "Sequenced on-site delivery with supervision, quality checks and clear communication on progress and decisions."
  },
  {
    label: "04",
    title: "Handover",
    body: "Final checks, documentation and support so your team can move into a complete, functioning space."
  }
];

export function DeliveryApproachSection() {
  return (
    <section className="bg-slate-50/60 py-16 sm:py-20 lg:py-24">
      <MaxWidthWrapper>
        <div className="max-w-3xl space-y-3">
          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
            Delivery approach
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-semibold tracking-tight text-slate-900">
            A disciplined path from brief to built space.
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl">
            Every project is structured around a clear sequence of stages so decisions and
            responsibilities stay visible from the first meeting to handover.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-4">
          {phases.map((phase) => (
            <div key={phase.label} className="space-y-4">
              <div className="flex items-center gap-3 text-xs font-medium tracking-[0.24em] text-slate-400 uppercase">
                <span className="text-slate-700">{phase.label}</span>
                <span className="h-px w-8 bg-slate-200" />
              </div>
              <h3 className="text-base md:text-lg font-medium text-slate-900">
                {phase.title}
              </h3>
              <p className="text-sm md:text-[15px] leading-relaxed text-slate-500">
                {phase.body}
              </p>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

