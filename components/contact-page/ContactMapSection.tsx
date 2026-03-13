import { MaxWidthWrapper } from "../layout/MaxWidthWrapper";

// Optional: replace with a specific Google Maps embed URL for exact pin placement
const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=Al+Khobar,+Dammam,+Eastern+Province,+Saudi+Arabia&z=11&output=embed";

export function ContactMapSection() {
  return (
    <section className="bg-slate-50/60 py-16 sm:py-20 lg:py-24">
      <MaxWidthWrapper>
        <div className="max-w-3xl space-y-3">
          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
            Location
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-semibold tracking-tight text-slate-900">
            Al Khobar / Dammam, Eastern Province
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl">
            Serving commercial clients across the Eastern Province and Saudi Arabia.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-100/90 bg-white shadow-sm ring-1 ring-slate-100/50">
          <div className="relative aspect-[16/9] w-full">
            <iframe
              src={MAP_EMBED_SRC}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zyra Builds location — Al Khobar / Dammam, Eastern Province, Saudi Arabia"
              className="absolute inset-0 h-full w-full"
            />
          </div>
          <p className="border-t border-slate-100 px-6 py-4 text-sm text-slate-500">
            Eastern Province, Saudi Arabia
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
