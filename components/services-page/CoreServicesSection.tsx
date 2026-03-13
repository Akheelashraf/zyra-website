import { MaxWidthWrapper } from "../layout/MaxWidthWrapper";

const coreServices = [
  {
    title: "Commercial Fit-Out",
    description:
      "Complete interior execution for new or expanding business spaces, aligned with your brand and operations.",
    bullets: [
      "Base build adaptations and space planning implementation",
      "Partitions, ceilings, flooring and integrated finishes",
      "Coordination with landlord and building management requirements"
    ]
  },
  {
    title: "Interior Design Coordination",
    description:
      "Connecting designers, consultants and suppliers so design intent is translated into buildable drawings.",
    bullets: [
      "Drawing reviews, mark-ups and coordination workshops",
      "Technical detailing and value-engineering options",
      "Managing information flow between design and site teams"
    ]
  },
  {
    title: "Renovation & Upgrade Works",
    description:
      "Phased interventions for active workplaces, retail and hospitality environments that cannot afford downtime.",
    bullets: [
      "Night or weekend works where required",
      "Sequenced area-by-area upgrades and protection planning",
      "Refurbishment of existing finishes, lighting and services interfaces"
    ]
  },
  {
    title: "Custom Joinery & Finishing",
    description:
      "Tailored joinery and finishing packages that support how your teams and clients actually use the space.",
    bullets: [
      "Reception desks, workstations and storage elements",
      "Feature walls, acoustic treatments and integrated lighting details",
      "Interface coordination with MEP, IT and security systems"
    ]
  }
];

export function CoreServicesSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <MaxWidthWrapper>
        <div className="max-w-3xl space-y-3">
          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
            Core services
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-semibold tracking-tight text-slate-900">
            Clear service lines for commercial interiors.
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl">
            Each service is structured so scope, interfaces and responsibilities are defined
            before work begins.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {coreServices.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-slate-100/90 bg-slate-50/70 p-6 shadow-sm transition-all duration-200 hover:border-slate-200 hover:bg-white hover:shadow-sm sm:p-7 lg:p-8"
            >
              <div className="space-y-3">
                <h3 className="text-base md:text-lg font-medium text-slate-900">
                  {service.title}
                </h3>
                <p className="text-sm md:text-[15px] leading-relaxed text-slate-500">
                  {service.description}
                </p>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
                  Scope includes
                </p>
                <ul className="mt-1 space-y-1.5 text-sm md:text-[15px] leading-relaxed text-slate-600">
                  {service.bullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[7px] h-[3px] w-3 rounded-full bg-zyra-blue/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

