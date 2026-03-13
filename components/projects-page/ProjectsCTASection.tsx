import { MaxWidthWrapper } from "../layout/MaxWidthWrapper";
import { Button } from "../ui/Button";

export function ProjectsCTASection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <MaxWidthWrapper>
        <div className="max-w-3xl space-y-6 rounded-3xl border border-slate-100/90 bg-gradient-to-br from-slate-50/90 via-white to-slate-50/80 px-8 py-12 shadow-sm md:px-10 md:py-14 lg:px-12 lg:py-16 ring-1 ring-slate-100/50">
          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
            Next steps
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-semibold tracking-tight text-slate-900">
            Discuss your next commercial space with Zyra.
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-slate-500 max-w-2xl">
            Whether you are planning a fit-out, upgrade or renovation, Zyra can help
            structure the path from brief to handover.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button href="/contact" variant="primary" size="md">
              Request Quote
            </Button>
            <Button href="/services" variant="ghost" size="md">
              View Services
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
