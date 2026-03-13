"use client";

type FeaturedProjectProxyVariant = "office" | "restaurant" | "retail";

type FeaturedProjectProxyVisualProps = {
  variant: FeaturedProjectProxyVariant;
  className?: string;
};

export function FeaturedProjectProxyVisual({
  variant,
  className = ""
}: FeaturedProjectProxyVisualProps) {
  const base =
    "absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-slate-100/80";

  if (variant === "office") {
    return (
      <div
        className={`${base} bg-gradient-to-br from-slate-50 via-white to-stone-50 ${className}`}
        aria-hidden
      >
        <div className="absolute inset-5 rounded-xl border border-slate-100 bg-white/70 shadow-sm" />
        <div className="absolute inset-8 rounded-lg border border-dashed border-slate-200/60" />
        <div className="absolute left-[12%] top-[20%] h-[55%] w-px bg-slate-200/50" />
        <div className="absolute right-[12%] top-[20%] h-[55%] w-px bg-slate-200/50" />
        <div className="absolute bottom-[28%] left-[8%] right-[8%] h-6 rounded-lg bg-slate-100/90 shadow-[0_2px_12px_rgba(0,0,0,0.04)]" />
        <div className="absolute left-10 top-10 h-px w-24 bg-gradient-to-r from-zyra-blue/50 to-transparent" />
        <div className="absolute right-10 top-10 h-8 w-px bg-slate-200/60" />
        <div className="absolute bottom-10 left-10 right-10 h-px bg-slate-200/50" />
        <div className="absolute left-1/2 top-1/2 h-px w-20 -translate-x-1/2 -translate-y-1/2 bg-slate-200/40" />
        <div className="absolute right-12 bottom-14 h-2.5 w-2.5 rounded-full bg-zyra-blue/50" />
      </div>
    );
  }

  if (variant === "restaurant") {
    return (
      <div
        className={`${base} bg-gradient-to-br from-stone-50/95 via-white to-slate-50 ${className}`}
        aria-hidden
      >
        <div className="absolute inset-5 rounded-xl border border-stone-100 bg-white/60" />
        <div className="absolute bottom-[30%] left-[10%] right-[10%] h-4 rounded-full bg-stone-200/70 shadow-sm" />
        <div className="absolute left-[15%] top-[25%] h-20 w-px bg-stone-200/50" />
        <div className="absolute right-[15%] top-[25%] h-20 w-px bg-stone-200/50" />
        <div className="absolute left-10 top-10 h-px w-28 bg-gradient-to-r from-zyra-blue/40 to-transparent" />
        <div className="absolute right-10 top-10 h-8 w-px bg-stone-200/60" />
        <div className="absolute bottom-10 left-10 right-10 h-px bg-stone-200/50" />
        <div className="absolute left-12 bottom-14 h-10 w-20 rounded bg-stone-100/80" />
        <div className="absolute right-12 bottom-14 h-2.5 w-2.5 rounded-full bg-zyra-blue/45" />
        <div className="absolute inset-8 rounded-lg border border-dashed border-stone-200/50" />
      </div>
    );
  }

  if (variant === "retail") {
    return (
      <div
        className={`${base} bg-gradient-to-br from-slate-50 via-white to-slate-100/80 ${className}`}
        aria-hidden
      >
        <div className="absolute inset-5 rounded-xl border border-slate-100 bg-white/70" />
        <div className="absolute right-[18%] top-[18%] h-[60%] w-px bg-slate-200/55" />
        <div className="absolute left-[18%] top-[22%] h-16 w-px bg-slate-200/45" />
        <div className="absolute left-10 top-10 h-px w-28 bg-gradient-to-r from-zyra-blue/50 to-transparent" />
        <div className="absolute right-10 top-10 h-8 w-px bg-slate-200/60" />
        <div className="absolute bottom-10 left-10 right-10 h-px bg-slate-200/50" />
        <div className="absolute bottom-12 left-10 right-10 h-8 rounded-md bg-slate-100/90" />
        <div className="absolute left-12 bottom-16 h-2.5 w-2.5 rounded-full bg-zyra-blue/50" />
        <div className="absolute inset-8 rounded-lg border border-dashed border-slate-200/55" />
      </div>
    );
  }

  return null;
}
