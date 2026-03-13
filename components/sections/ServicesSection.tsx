import { MaxWidthWrapper } from "../layout/MaxWidthWrapper";

export function ServicesSection() {
  const services = [
    {
      title: "Commercial Fit-Out",
      body: "End-to-end interior execution for offices, retail and hospitality spaces."
    },
    {
      title: "Interior Design Coordination",
      body: "Aligning designers, consultants and contractors around one clear set of drawings."
    },
    {
      title: "Renovation & Upgrade Works",
      body: "Careful phasing of works to upgrade active business spaces with minimal disruption."
    },
    {
      title: "Custom Joinery & Finishing",
      body: "Tailored joinery, detailing and finishes that respect your brand and operations."
    }
  ];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <MaxWidthWrapper>
        <div className="max-w-3xl space-y-3">
          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
            Services
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-semibold tracking-tight text-slate-900">
            Services designed for business environments that need clarity, speed, and
            precision.
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl">
            Zyra focuses on commercial interiors where execution quality, timing and
            coordination directly impact how teams work and how brands are perceived.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group space-y-3.5 rounded-3xl border border-slate-100/90 bg-slate-50/70 p-6 sm:p-7 lg:p-8 transition-all duration-200 hover:border-slate-200 hover:bg-white hover:shadow-sm"
            >
              <h3 className="text-base md:text-lg font-medium tracking-tight text-slate-900">
                {service.title}
              </h3>
              <p className="text-sm md:text-[15px] leading-relaxed text-slate-500">
                {service.body}
              </p>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

