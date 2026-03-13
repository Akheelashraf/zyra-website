import { MaxWidthWrapper } from "../layout/MaxWidthWrapper";

const fitExamples = [
  {
    title: "Office fit-outs",
    body: "New or expanding workplaces that need structure around design, build and handover."
  },
  {
    title: "Retail upgrades",
    body: "Spaces where circulation, display and customer experience depend on coordinated execution."
  },
  {
    title: "Hospitality refreshes",
    body: "Guest and back-of-house areas that must stay operational during works."
  },
  {
    title: "Commercial renovation works",
    body: "Reconfigurations and upgrades of existing commercial spaces with clear phasing."
  }
];

export function ProjectFitSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <MaxWidthWrapper>
        <div className="max-w-3xl space-y-3">
          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
            Project fit
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-semibold tracking-tight text-slate-900">
            Best suited for commercial interiors that need coordination and control.
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl">
            Zyra Builds is designed for growing businesses that need more than finishing work —
            they need structure around execution. Typical project range 30K – 200K+ SAR.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {fitExamples.map((item) => (
            <div
              key={item.title}
              className="space-y-3.5 rounded-3xl border border-slate-100/90 bg-slate-50/70 p-6 shadow-sm transition-all duration-200 hover:border-slate-200 hover:bg-white hover:shadow-sm sm:p-7 lg:p-8"
            >
              <h3 className="text-base md:text-lg font-medium text-slate-900">
                {item.title}
              </h3>
              <p className="text-sm md:text-[15px] leading-relaxed text-slate-500">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
