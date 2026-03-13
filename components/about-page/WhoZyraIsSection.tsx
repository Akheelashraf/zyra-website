import { MaxWidthWrapper } from "../layout/MaxWidthWrapper";

const identityPoints = [
  {
    title: "Commercial Interior Focus",
    body: "Zyra works only on commercial interiors: offices, retail, hospitality and related spaces where execution quality and coordination directly affect the business."
  },
  {
    title: "Structured Delivery",
    body: "Projects are run with clear stages, defined scope and visible progress so clients know where things stand and what decisions are needed."
  },
  {
    title: "Design-Aware Execution",
    body: "Zyra respects design intent while resolving details on site, so the built space aligns with what was agreed, not what was easiest to build."
  },
  {
    title: "Built for Growing Businesses",
    body: "Zyra is built for SMEs and scaling businesses that need their space to support teams, customers and operations, not just look good on a brochure."
  }
];

export function WhoZyraIsSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <MaxWidthWrapper>
        <div className="grid gap-10 lg:grid-cols-[1.1fr,1.2fr] lg:items-start">
          <div className="space-y-3">
            <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
              Who Zyra is
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-semibold tracking-tight text-slate-900">
              Built as an execution partner, not just a contractor.
            </h2>
            <p className="text-sm md:text-base text-slate-500 max-w-xl leading-relaxed">
              Zyra is focused on commercial interior execution where structure, visibility
              and coordination matter as much as the finished result. Zyra is not a
              general contractor or a design-only studio; it sits between design and
              build to ensure projects are delivered with clarity and control.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {identityPoints.map((point) => (
              <div
                key={point.title}
                className="space-y-2.5 rounded-3xl border border-slate-100/90 bg-slate-50/70 p-5 shadow-sm transition-all duration-200 hover:border-slate-200 hover:bg-white hover:shadow-sm md:p-6"
              >
                <h3 className="text-sm md:text-[15px] font-medium text-slate-900">
                  {point.title}
                </h3>
                <p className="text-xs md:text-[13px] leading-relaxed text-slate-500">
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
