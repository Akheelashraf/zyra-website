"use client";

/**
 * Phase 3 — BUILT SPACE: finished interior stage.
 * Wall + floor separation, soft lighting gradient, refined material-like planes, restrained Zyra blue.
 */
export function BuiltStateVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-[28px] border border-slate-100/90 bg-gradient-to-br from-slate-50/80 via-white to-slate-50/60 shadow-hero-stage ring-1 ring-slate-200/50 p-6 sm:p-8 lg:p-10">
      {/* Soft lighting gradient — window light from top-right */}
      <div
        className="absolute inset-0 rounded-[28px] opacity-90"
        style={{
          background: "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.4) 35%, transparent 70%)"
        }}
      />
      {/* Back wall — single plane */}
      <div className="absolute inset-5 rounded-2xl bg-gradient-to-b from-slate-100/50 to-slate-50/70" />
      {/* Left wall — material-like plane */}
      <div className="absolute bottom-6 left-6 top-6 w-[30%] rounded-xl bg-gradient-to-r from-white to-slate-50/40 shadow-[0_4px_20px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/60" />
      {/* Right wall — lighter, window side */}
      <div className="absolute bottom-6 right-6 top-6 w-[36%] rounded-xl bg-gradient-to-l from-white via-slate-50/30 to-slate-100/40 shadow-[0_6px_24px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/50">
        <div className="absolute inset-2 rounded-lg bg-gradient-to-b from-white/60 to-slate-50/50" />
      </div>
      {/* Floor — clear separation from walls */}
      <div className="absolute bottom-6 left-6 right-6 h-[24%] rounded-xl bg-gradient-to-b from-slate-100/30 to-slate-100/50 shadow-[0_4px_16px_rgba(15,23,42,0.05)] ring-1 ring-slate-100/60">
        <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-xl bg-zyra-blue/15" />
      </div>
      {/* Restrained Zyra blue accent — single strip */}
      <div className="absolute bottom-[28%] left-1/2 h-0.5 w-20 -translate-x-1/2 rounded-full bg-zyra-blue/25" />
      {/* Soft highlight — no heavy blur */}
      <div className="absolute right-6 top-6 h-16 w-16 rounded-full bg-zyra-blue/[0.04]" />
    </div>
  );
}
