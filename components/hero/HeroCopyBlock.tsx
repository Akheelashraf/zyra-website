import { HeroActions } from "./HeroActions";

export function HeroCopyBlock() {
  return (
    <div className="min-w-0 space-y-12 lg:space-y-16">
      <div className="space-y-3">
        <h1 className="break-words text-5xl font-semibold leading-[1.02] tracking-tight text-slate-900 md:text-6xl lg:text-[4.2rem]">
          Commercial Interiors.
          <br />
          Structured.
        </h1>
      </div>

      <p className="text-[15px] md:text-base lg:text-[17px] text-slate-500 leading-relaxed md:leading-relaxed lg:leading-[1.9] max-w-md">
        Structured commercial interior execution for growing businesses in Saudi Arabia.
      </p>

      <div className="space-y-7">
        <HeroActions />
      </div>
    </div>
  );
}

