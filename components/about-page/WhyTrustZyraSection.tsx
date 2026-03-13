import { MaxWidthWrapper } from "../layout/MaxWidthWrapper";

const trustPoints = [
  {
    title: "Clearer visibility",
    body: "Structured updates that focus on progress, risks and upcoming decisions so you are not left guessing how the project is tracking."
  },
  {
    title: "Structured communication",
    body: "Defined touchpoints, clear ownership and written records so decisions and changes are traceable and understood."
  },
  {
    title: "Controlled execution",
    body: "Scope and phasing are agreed before work begins, so surprises are minimised and change is managed, not absorbed as cost and delay."
  },
  {
    title: "Respect for design intent",
    body: "Zyra works with designers and consultants to close the gap between drawings and the built space, not to shortcut or substitute."
  }
];

export function WhyTrustZyraSection() {
  return (
    <section className="bg-slate-50/60 py-16 sm:py-20 lg:py-24">
      <MaxWidthWrapper>
        <div className="max-w-3xl space-y-3">
          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
            Why clients trust Zyra
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-semibold tracking-tight text-slate-900">
            Trust comes from how the work is managed.
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl">
            Zyra does not compete on “best quality” or “lowest price” claims. Trust is
            built through visible process, clear communication and controlled delivery.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {trustPoints.map((point) => (
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
