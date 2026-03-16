"use client";

import { usePathname } from "next/navigation";
import { getDictionary, getLocaleFromPath } from "@/lib/locale";

export function LargeStatementSection() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const dict = getDictionary(locale);
  const s = dict.statements.large;

  return (
    <section className="bg-white py-40">
      <div className="mx-auto max-w-5xl px-6 text-center sm:px-8 lg:px-12">
        <h2 className="text-5xl font-semibold leading-[1.05] tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
          {s.line1}
          <br />
          {s.line2}
        </h2>
      </div>
    </section>
  );
}
