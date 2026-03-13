import { MaxWidthWrapper } from "../layout/MaxWidthWrapper";
import { HeroActions } from "../hero/HeroActions";

export function FinalCTASection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <MaxWidthWrapper>
        <div className="section-divider mb-16 sm:mb-20" aria-hidden="true" />
        <div className="max-w-3xl space-y-6 rounded-3xl border border-slate-100/90 bg-gradient-to-br from-slate-50/90 via-white to-slate-50/80 px-8 py-12 shadow-sm md:px-10 md:py-14 lg:px-12 lg:py-16 ring-1 ring-slate-100/50">
          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
            Next steps
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-semibold tracking-tight text-slate-900">
            Bring clarity to your next commercial space.
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-slate-500 max-w-2xl">
            Talk to Zyra about your fit-out, renovation or interior execution requirement.
          </p>
          <HeroActions />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

