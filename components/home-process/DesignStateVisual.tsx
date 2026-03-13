"use client";

/**
 * Phase 2 — DESIGN: spatial depth.
 * Layered panels, stronger shadows, architectural framing, subtle elevation lines.
 */
export function DesignStateVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-[28px] border border-slate-200/70 bg-gradient-to-br from-slate-100/90 to-slate-50/80 shadow-soft-elevated ring-1 ring-slate-100/70 p-6 sm:p-8 lg:p-10">
      {/* Back plane — receded */}
      <div className="absolute left-[12%] top-[18%] h-[48%] w-[58%] rounded-xl border border-slate-200/60 bg-white/95 shadow-[0_8px_24px_rgba(15,23,42,0.08)]" />
      {/* Mid plane — architectural frame */}
      <div className="absolute left-[26%] top-[30%] h-[52%] w-[52%] rounded-xl border border-slate-200 bg-white shadow-[0_12px_32px_rgba(15,23,42,0.1),0_4px_12px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/60" />
      {/* Front plane — primary frame */}
      <div className="absolute bottom-[20%] left-[20%] right-[20%] h-[40%] rounded-xl border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.12),0_6px_16px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/40">
        <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-xl bg-zyra-blue/20" />
      </div>
      {/* Subtle elevation lines — section cut suggestion */}
      <div className="absolute left-6 right-6 top-[42%] h-px bg-slate-200/50" />
      <div className="absolute left-6 right-6 top-[58%] h-px bg-slate-200/40" />
      <div className="absolute bottom-[32%] left-[24%] right-[24%] h-px bg-slate-200/30" />
      {/* Vertical framing lines */}
      <div className="absolute bottom-6 left-[32%] top-6 w-px bg-slate-200/40" />
      <div className="absolute bottom-6 right-[32%] top-6 w-px bg-slate-200/40" />
      {/* Dimension-style mark — minimal */}
      <div className="absolute right-[10%] top-1/2 h-px w-6 -translate-y-1/2 border-t border-dashed border-slate-300/50" />
    </div>
  );
}
