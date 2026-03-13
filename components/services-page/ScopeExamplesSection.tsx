import { MaxWidthWrapper } from "../layout/MaxWidthWrapper";

const scopeGroups = [
  {
    title: "Core interior works",
    items: [
      "Ceilings and partitions",
      "Flooring and wall finishes",
      "Doors, frames and ironmongery"
    ]
  },
  {
    title: "Joinery and built-ins",
    items: [
      "Reception desks and counters",
      "Workstations, storage and meeting room joinery",
      "Feature walls and integrated display elements"
    ]
  },
  {
    title: "Services coordination",
    items: [
      "Lighting and small power coordination",
      "Integration with HVAC, fire and life-safety systems",
      "IT, security and AV interface coordination"
    ]
  },
  {
    title: "Refurbishment and upgrades",
    items: [
      "Selective strip-out and reconfiguration",
      "Surface refresh and detailing improvements",
      "Phased works in live environments"
    ]
  }
];

export function ScopeExamplesSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <MaxWidthWrapper>
        <div className="max-w-3xl space-y-3">
          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
            Fit-out scope
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-semibold tracking-tight text-slate-900">
            Scope tailored to how commercial spaces actually function.
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl">
            These examples outline the types of work Zyra can coordinate and deliver as part
            of a commercial interior project.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {scopeGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-slate-100/90 bg-slate-50/70 p-6 shadow-sm transition-all duration-200 hover:border-slate-200 hover:bg-white hover:shadow-sm sm:p-7 lg:p-8"
            >
              <h3 className="text-base md:text-lg font-medium text-slate-900">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-1.5 text-sm md:text-[15px] leading-relaxed text-slate-600">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[7px] h-[3px] w-3 rounded-full bg-slate-300/80" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

