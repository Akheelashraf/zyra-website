import { MaxWidthWrapper } from "../layout/MaxWidthWrapper";

const guidancePoints = [
  {
    title: "Project type",
    body: "Office fit-out, retail upgrade, hospitality refresh, or commercial renovation."
  },
  {
    title: "Approximate location",
    body: "City or region so Zyra can assess logistics and local coordination needs."
  },
  {
    title: "Target timeline",
    body: "When you need to be in the space or when works should ideally complete."
  },
  {
    title: "Scope or intended works",
    body: "A short description of what you have in mind — full fit-out, refresh, or phased upgrade."
  },
  {
    title: "Drawings, photos, or references",
    body: "If you have existing drawings, site photos or reference images, they help frame the first discussion."
  }
];

export function InquiryGuidanceSection() {
  return (
    <section className="bg-slate-50/60 py-16 sm:py-20 lg:py-24">
      <MaxWidthWrapper>
        <div className="max-w-3xl space-y-3">
          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
            Inquiry guidance
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-semibold tracking-tight text-slate-900">
            What to share for a more useful first discussion.
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl">
            The clearer the initial brief, the faster Zyra can help frame scope,
            priorities and next steps.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {guidancePoints.map((point) => (
            <div
              key={point.title}
              className="space-y-2.5 rounded-3xl border border-slate-100/90 bg-white p-5 shadow-sm transition-all duration-200 hover:border-slate-200 hover:shadow-sm md:p-6"
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
      </MaxWidthWrapper>
    </section>
  );
}
