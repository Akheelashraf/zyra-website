import { MaxWidthWrapper } from "../layout/MaxWidthWrapper";

const clientTypes = [
  {
    title: "SME offices",
    body: "Workplaces for teams that are growing and need space that supports focus, collaboration and client interaction without overbuilding."
  },
  {
    title: "Retail environments",
    body: "Spaces where circulation, sightlines and product presentation need to work for both staff and customers every day."
  },
  {
    title: "Hospitality upgrades",
    body: "Guest-facing and back-of-house areas that must stay operational while being refreshed or reconfigured."
  },
  {
    title: "Businesses scaling into better spaces",
    body: "Companies moving or expanding into new premises who need the fit-out to reflect where the business is heading."
  }
];

export function BuiltForSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <MaxWidthWrapper>
        <div className="max-w-3xl space-y-3">
          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
            What Zyra is built for
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-semibold tracking-tight text-slate-900">
            Designed for businesses that need more than finishing work.
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl">
            Zyra is built for clients who need commercial spaces to support teams,
            customer experience, daily operations and future growth.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {clientTypes.map((item) => (
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
