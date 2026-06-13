"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper";
import { Button } from "@/components/ui/Button";
import { getDictionary, getLocaleFromPath } from "@/lib/locale";

const LOGO_SRC = "/branding/zyra%20logo%20blue%2001%20Artboard%201.svg";

export default function NotFound() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const dict = getDictionary(locale);
  const t = dict.notFound;
  const isArabic = locale === "ar";
  const homeHref = isArabic ? "/ar" : "/";
  const contactHref = isArabic ? "/ar/contact" : "/contact";

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="flex min-h-[calc(100vh-12rem)] items-center py-20 sm:py-24">
        <MaxWidthWrapper>
          <div
            className={`mx-auto flex max-w-2xl flex-col ${isArabic ? "items-end text-right" : "items-start text-left"}`}
            dir={isArabic ? "rtl" : "ltr"}
          >
            <Image
              src={LOGO_SRC}
              alt="Zyra Builds"
              width={210}
              height={56}
              className="h-12 w-auto object-contain md:h-14"
            />
            <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.28em] text-zyra-blue">
              404
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              {t.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-500 md:text-lg">
              {t.description}
            </p>
            <div className={`mt-10 flex flex-wrap items-center gap-4 ${isArabic ? "justify-end" : ""}`}>
              <Button href={homeHref} variant="primary" size="md">
                {t.home}
              </Button>
              <Button href={contactHref} variant="ghost" size="md">
                {t.contact}
              </Button>
            </div>
          </div>
        </MaxWidthWrapper>
      </main>
      <SiteFooter />
    </div>
  );
}
