"use client";

import { usePathname } from "next/navigation";
import { Button } from "../ui/Button";
import { getDictionary, getLocaleFromPath } from "@/lib/locale";

export function HeroActions() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const dict = getDictionary(locale);
  const isArabic = locale === "ar";

  const getLocalizedHref = (href: string) => {
    if (!isArabic) return href;
    if (href === "/") return "/ar";
    return `/ar${href}`;
  };

  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button href={getLocalizedHref("/contact")} variant="primary" size="md">
        {dict.cta.requestQuote}
      </Button>
      <Button
        href={getLocalizedHref("/projects")}
        variant="ghost"
        size="sm"
        className="text-white/90 hover:bg-white/15 hover:text-white motion-reduce:hover:translate-y-0"
      >
        {dict.header.ctas.viewProjects}
      </Button>
    </div>
  );
}

