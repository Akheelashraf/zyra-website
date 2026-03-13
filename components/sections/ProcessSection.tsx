import { MaxWidthWrapper } from "../layout/MaxWidthWrapper";

const steps = [
  {
    label: "01",
    title: "Discover",
    body: "Understanding your space, brand and operational constraints so the brief is precise."
  },
  {
    label: "02",
    title: "Design",
    body: "Coordinating with designers and consultants to translate intent into buildable drawings."
  },
  {
    label: "03",
    title: "Build",
    body: "Sequenced on-site execution with clear milestones, supervision and quality checks."
  },
  {
    label: "04",
    title: "Handover",
    body: "Final detailing, testing and documentation so your team can move in with confidence."
  }
];

export function ProcessSection() {
  return (
    <section className="bg-slate-50/60 py-20 sm:py-24 lg:py-28">
      <MaxWidthWrapper>
        <div className="max-w-3xl space-y-3">
          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
            Process
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-semibold tracking-tight text-slate-900">
            A structured path from idea to execution.
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl">
            Zyra approaches every project as a sequence of clear stages, so decisions,
            responsibilities and timelines are visible throughout.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-4">
          {steps.map((step) => (
            <div key={step.label} className="space-y-4">
              <div className="flex items-center gap-3 text-xs font-medium tracking-[0.24em] text-slate-400 uppercase">
                <span className="text-slate-700">{step.label}</span>
                <span className="h-px w-8 bg-slate-200" />
              </div>
              <h3 className="text-base md:text-lg font-medium text-slate-900">
                {step.title}
              </h3>
              <p className="text-sm md:text-[15px] leading-relaxed text-slate-500">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

