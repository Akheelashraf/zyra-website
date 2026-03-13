"use client";

type CinematicProxyBackgroundVariant =
  | "home"
  | "services"
  | "projects"
  | "about"
  | "contact";

type CinematicProxyBackgroundProps = {
  variant: CinematicProxyBackgroundVariant;
};

export function CinematicProxyBackground({
  variant
}: CinematicProxyBackgroundProps) {
  const base = "absolute inset-0";
  const overlay =
    "absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/60";

  if (variant === "home") {
    return (
      <>
        <div
          className={`${base} bg-gradient-to-br from-slate-300/50 via-slate-200/40 to-slate-400/60`}
          aria-hidden
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.03)_50%,transparent_100%)]" />
          <div className="absolute left-0 top-0 h-full w-[40%] bg-gradient-to-r from-slate-400/30 to-transparent" />
          <div className="absolute right-0 top-0 h-full w-[35%] bg-gradient-to-l from-slate-500/25 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-slate-600/20 to-transparent" />
          <div className="absolute left-[20%] top-[25%] h-px w-[30%] bg-white/10" />
          <div className="absolute right-[15%] top-[40%] h-32 w-px bg-white/5" />
          <div className="absolute bottom-[35%] left-[10%] right-[10%] h-px bg-white/5" />
        </div>
        <div className={overlay} aria-hidden />
      </>
    );
  }

  if (variant === "services") {
    return (
      <>
        <div
          className={`${base} bg-gradient-to-b from-slate-400/40 via-slate-300/50 to-slate-500/50`}
          aria-hidden
        >
          <div className="absolute inset-0 opacity-30">
            <div className="absolute left-[5%] top-[10%] h-[60%] w-px bg-white/20" />
            <div className="absolute left-[25%] top-[10%] h-[60%] w-px bg-white/15" />
            <div className="absolute left-[45%] top-[10%] h-[60%] w-px bg-white/15" />
            <div className="absolute left-[65%] top-[10%] h-[60%] w-px bg-white/15" />
            <div className="absolute right-[5%] top-[10%] h-[60%] w-px bg-white/20" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-slate-700/30 to-transparent" />
          <div className="absolute left-1/2 top-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 bg-white/10" />
        </div>
        <div className={overlay} aria-hidden />
      </>
    );
  }

  if (variant === "projects") {
    return (
      <>
        <div
          className={`${base} bg-gradient-to-br from-slate-500/35 via-slate-400/45 to-slate-600/40`}
          aria-hidden
        >
          <div className="absolute inset-[15%] rounded-sm border border-white/10 bg-white/5" />
          <div className="absolute inset-[22%] rounded-sm border border-dashed border-white/10" />
          <div className="absolute left-[30%] top-[35%] h-[40%] w-px bg-white/15" />
          <div className="absolute right-[30%] top-[35%] h-[40%] w-px bg-white/15" />
          <div className="absolute bottom-[30%] left-[20%] right-[20%] h-px bg-white/10" />
          <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zyra-blue/30" />
          <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        <div className={overlay} aria-hidden />
      </>
    );
  }

  if (variant === "about") {
    return (
      <>
        <div
          className={`${base} bg-gradient-to-b from-slate-400/50 via-slate-300/40 to-slate-500/55`}
          aria-hidden
        >
          <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-slate-500/30 to-transparent" />
          <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-slate-500/30 to-transparent" />
          <div className="absolute left-1/2 top-[20%] h-px w-1/4 -translate-x-1/2 bg-white/15" />
          <div className="absolute left-1/2 top-[50%] h-px w-1/3 -translate-x-1/2 bg-white/10" />
          <div className="absolute left-1/2 top-[80%] h-px w-1/4 -translate-x-1/2 bg-white/10" />
          <div className="absolute left-1/3 top-[30%] h-24 w-px bg-white/10" />
          <div className="absolute right-1/3 top-[30%] h-24 w-px bg-white/10" />
          <div className="absolute bottom-0 left-0 right-0 h-[55%] bg-gradient-to-t from-slate-800/25 to-transparent" />
        </div>
        <div className={overlay} aria-hidden />
      </>
    );
  }

  if (variant === "contact") {
    return (
      <>
        <div
          className={`${base} bg-gradient-to-br from-slate-300/50 via-slate-200/40 to-slate-400/50`}
          aria-hidden
        >
          <div className="absolute inset-0">
            <div className="absolute bottom-[25%] left-[15%] right-[15%] h-4 rounded-md bg-white/10 shadow-lg" />
            <div className="absolute bottom-[22%] left-[18%] right-[18%] h-px bg-white/10" />
          </div>
          <div className="absolute left-[20%] top-[25%] h-20 w-px bg-white/10" />
          <div className="absolute right-[20%] top-[25%] h-20 w-px bg-white/10" />
          <div className="absolute left-1/2 top-[35%] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-zyra-blue/25" />
          <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-slate-700/20 to-transparent" />
        </div>
        <div className={overlay} aria-hidden />
      </>
    );
  }

  return null;
}
