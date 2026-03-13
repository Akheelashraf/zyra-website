"use client";

type ProjectCardProxyVariant = "office" | "restaurant" | "retail";

type ProjectCardProxyVisualProps = {
  variant: ProjectCardProxyVariant;
  className?: string;
};

export function ProjectCardProxyVisual({
  variant,
  className = ""
}: ProjectCardProxyVisualProps) {
  const base = "absolute inset-0 flex flex-col";

  if (variant === "office") {
    return (
      <div
        className={`${base} bg-gradient-to-br from-slate-100 via-white to-stone-100/80 ${className}`}
        aria-hidden
      >
        <div className="absolute inset-4 rounded-[20px] border border-slate-100/90 bg-white/60" />
        <div className="absolute left-6 top-6 right-6 h-12 rounded-lg bg-slate-100/90 shadow-sm" />
        <div className="absolute left-8 top-8 h-px w-16 bg-gradient-to-r from-zyra-blue/40 to-transparent" />
        <div className="absolute right-8 top-8 h-6 w-px bg-slate-200/70" />
        <div className="absolute bottom-8 left-8 right-8 h-px bg-slate-200/50" />
        <div className="absolute left-1/2 top-1/2 h-px w-14 -translate-x-1/2 -translate-y-1/2 bg-slate-200/40" />
        <div className="absolute bottom-10 left-8 right-8 h-7 rounded-md bg-slate-50 ring-1 ring-slate-100/80" />
        <div className="absolute right-10 bottom-12 h-2 w-2 rounded-full bg-zyra-blue/40" />
        <div className="absolute inset-6 rounded-xl border border-dashed border-slate-200/50" />
      </div>
    );
  }

  if (variant === "restaurant") {
    return (
      <div
        className={`${base} bg-gradient-to-br from-stone-50 via-white to-slate-100 ${className}`}
        aria-hidden
      >
        <div className="absolute inset-4 rounded-[20px] border border-stone-100/90 bg-white/50" />
        <div className="absolute bottom-[32%] left-[10%] right-[10%] h-3 rounded-full bg-stone-200/60" />
        <div className="absolute left-8 top-8 h-px w-20 bg-gradient-to-r from-zyra-blue/35 to-transparent" />
        <div className="absolute right-8 top-8 h-5 w-px bg-stone-200/60" />
        <div className="absolute bottom-8 left-8 right-8 h-px bg-stone-200/50" />
        <div className="absolute left-8 bottom-12 h-8 w-16 rounded bg-stone-100/80" />
        <div className="absolute right-10 bottom-12 h-1.5 w-1.5 rounded-full bg-zyra-blue/35" />
        <div className="absolute inset-6 rounded-xl border border-dashed border-stone-200/50" />
      </div>
    );
  }

  if (variant === "retail") {
    return (
      <div
        className={`${base} bg-gradient-to-br from-slate-50 via-white to-slate-100/90 ${className}`}
        aria-hidden
      >
        <div className="absolute inset-4 rounded-[20px] border border-slate-100/90 bg-white/60" />
        <div className="absolute right-[15%] top-[25%] h-[45%] w-px bg-slate-200/60" />
        <div className="absolute left-8 top-8 h-px w-20 bg-gradient-to-r from-zyra-blue/40 to-transparent" />
        <div className="absolute right-8 top-8 h-6 w-px bg-slate-200/70" />
        <div className="absolute bottom-8 left-8 right-8 h-px bg-slate-200/50" />
        <div className="absolute bottom-10 left-10 right-10 h-6 rounded bg-slate-100/90" />
        <div className="absolute left-10 bottom-12 h-2 w-2 rounded-full bg-zyra-blue/40" />
        <div className="absolute inset-6 rounded-xl border border-dashed border-slate-200/50" />
      </div>
    );
  }

  return null;
}
