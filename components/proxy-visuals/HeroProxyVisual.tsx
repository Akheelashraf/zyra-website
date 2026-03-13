"use client";

export function HeroProxyVisual() {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-end overflow-hidden rounded-[32px] bg-gradient-to-b from-slate-100/90 via-stone-50 to-slate-200/70"
      aria-hidden
    >
      {/* Back wall / ceiling plane */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-100/60 via-transparent to-transparent" />
      <div className="absolute left-0 right-0 top-0 h-[45%] bg-gradient-to-b from-slate-200/40 to-transparent" />

      {/* Symmetrical side panels */}
      <div className="absolute left-[12%] top-[18%] h-32 w-px bg-gradient-to-b from-transparent via-slate-300/50 to-transparent" />
      <div className="absolute right-[12%] top-[18%] h-32 w-px bg-gradient-to-b from-transparent via-slate-300/50 to-transparent" />
      <div className="absolute left-[15%] top-[22%] h-24 w-0.5 bg-slate-200/40" />
      <div className="absolute right-[15%] top-[22%] h-24 w-0.5 bg-slate-200/40" />

      {/* Central vertical accent - lighting / feature */}
      <div className="absolute left-1/2 top-[12%] h-20 w-px -translate-x-1/2 bg-gradient-to-b from-zyra-blue/30 via-zyra-blue/20 to-transparent" />
      <div className="absolute left-1/2 top-[14%] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-zyra-blue/40" />

      {/* Reception desk plane */}
      <div className="absolute bottom-[28%] left-[10%] right-[10%] h-5 rounded-lg bg-white/80 shadow-[0_4px_20px_rgba(0,0,0,0.06)] ring-1 ring-slate-200/50" />
      <div className="absolute bottom-[26%] left-[12%] right-[12%] h-1 rounded-full bg-slate-200/60" />

      {/* Floor / base plane */}
      <div className="absolute bottom-0 left-0 right-0 h-[22%] bg-gradient-to-t from-slate-300/30 to-transparent" />
      <div className="absolute bottom-0 left-[8%] right-[8%] h-px bg-slate-200/50" />

      {/* Blueprint-style dashed frame */}
      <div className="absolute inset-6 rounded-2xl border border-dashed border-slate-200/40" />
      <div className="absolute inset-10 rounded-xl border border-slate-100/60" />

      {/* Corner accents */}
      <div className="absolute bottom-8 left-8 h-px w-16 bg-gradient-to-r from-zyra-blue/40 to-transparent" />
      <div className="absolute bottom-8 right-8 h-px w-16 bg-gradient-to-l from-zyra-blue/40 to-transparent" />
      <div className="absolute bottom-10 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-zyra-blue/30" />
    </div>
  );
}
