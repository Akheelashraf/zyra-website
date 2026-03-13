"use client";

/**
 * Phase 1 — IDEA: blueprint feeling.
 * Faint grid, thin blueprint lines, dashed layout rectangles, very light Zyra blue.
 */
export function IdeaStateVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-[28px] border border-dashed border-slate-200/80 bg-slate-50/60 p-6 sm:p-8 lg:p-10">
      {/* Faint grid background */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(148 163 184 / 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(148 163 184 / 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px"
        }}
      />
      {/* Secondary grid — very faint */}
      <div
        className="absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(148 163 184 / 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(148 163 184 / 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px"
        }}
      />
      {/* Dashed layout rectangles — plan outline */}
      <div className="absolute left-1/2 top-1/2 h-[52%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-sm border border-dashed border-slate-300/70" />
      <div className="absolute left-[22%] top-[28%] h-[38%] w-[32%] rounded-sm border border-dashed border-slate-300/60" />
      <div className="absolute right-[20%] top-[24%] h-[42%] w-[36%] rounded-sm border border-dashed border-slate-300/60" />
      {/* Thin blueprint center lines */}
      <div className="absolute left-1/2 top-[18%] h-[64%] w-px -translate-x-1/2 bg-slate-300/40" />
      <div className="absolute left-[18%] top-1/2 h-px w-[64%] -translate-y-1/2 bg-slate-300/40" />
      {/* Corner marks — thin */}
      {[
        { top: "14%", left: "18%" },
        { top: "14%", right: "18%" },
        { bottom: "16%", left: "18%" },
        { bottom: "16%", right: "18%" }
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute h-5 w-5 border-l border-t border-slate-400/50"
          style={pos}
        />
      ))}
      {/* Very light Zyra blue highlights */}
      <div className="absolute bottom-[20%] left-1/2 h-px w-14 -translate-x-1/2 rounded-full bg-zyra-blue/25" />
      <div className="absolute right-[24%] top-1/2 h-3 w-px -translate-y-1/2 bg-zyra-blue/20" />
      <div className="absolute left-1/2 top-[22%] h-px w-8 -translate-x-1/2 bg-zyra-blue/15" />
    </div>
  );
}
