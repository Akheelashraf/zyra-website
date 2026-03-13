"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { useScroll } from "framer-motion";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import { Button } from "../ui/Button";
import { getDictionary, getLocaleFromPath } from "@/lib/locale";

const LOGO_SRC = "/branding/zyra%20logo%20blue%2001%20Artboard%201.svg";
const LOGO_WIDTH = 280;
const LOGO_HEIGHT = 75;

const dropdownContent: Record<
  string,
  { key: string; href: string }[]
> = {
  "/services": [
    { key: "commercialFitOut", href: "/services" },
    { key: "interiorCoordination", href: "/services" },
    { key: "renovation", href: "/services" },
    { key: "joinery", href: "/services" }
  ],
  "/projects": [
    { key: "offices", href: "/projects" },
    { key: "restaurants", href: "/projects" },
    { key: "retail", href: "/projects" },
    { key: "exhibitions", href: "/projects" }
  ],
  "/about": [
    { key: "whoZyraIs", href: "/about" },
    { key: "approach", href: "/about" },
    { key: "trust", href: "/about" }
  ],
  "/contact": [
    { key: "startProject", href: "/contact" },
    { key: "callEmail", href: "mailto:connect@zyrabuilds.com" },
    { key: "location", href: "/contact" }
  ]
};

const navItems = [
  { href: "/services", key: "services" as const },
  { href: "/projects", key: "projects" as const },
  { href: "/about", key: "about" as const },
  { href: "/contact", key: "contact" as const }
];

function NavItemWithDropdown({
  href,
  label,
  isActive,
  isOpen,
  onOpen,
  onClose
}: {
  href: string;
  label: string;
  isActive: boolean;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const items = dropdownContent[href] ?? [];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleFocusOut = (e: FocusEvent) => {
      if (el.contains(e.relatedTarget as Node)) return;
      onClose();
    };
    el.addEventListener("focusout", handleFocusOut);
    return () => el.removeEventListener("focusout", handleFocusOut);
  }, [onClose]);

  return (
    <div
      ref={ref}
      className="group/link relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <Link
        href={href}
        onFocus={onOpen}
        className={`relative inline-block text-sm transition-colors duration-[250ms] ease-out hover:text-slate-900 ${
          isActive
            ? "font-medium text-slate-900"
            : "text-slate-600"
        } focus:outline-none focus-visible:ring-0`}
      >
        <span className="relative inline-block">
          {label}
          <span
            className={`absolute bottom-0 left-0 h-px w-full origin-left bg-slate-900 transition-transform duration-[250ms] ease-out motion-reduce:duration-75 ${
              isActive ? "scale-x-100" : "scale-x-0 group-hover/link:scale-x-100"
            }`}
            aria-hidden
          />
        </span>
      </Link>
      {items.length > 0 && (
        <div
          className={`absolute left-1/2 top-full z-50 w-full min-w-[280px] -translate-x-1/2 pt-2 transition-[opacity,transform] duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:duration-100 ${
            isOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-1 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-slate-100/60 border-t-slate-200/40 bg-white/[0.97] py-3 shadow-[0_16px_48px_rgba(15,23,42,0.05),0_0_1px_rgba(15,23,42,0.03)] ring-1 ring-slate-100/50 backdrop-blur-md">
            {items.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="block px-5 py-3 text-[15px] leading-snug text-slate-500 transition-colors duration-200 ease-out hover:bg-slate-50/70 hover:text-slate-900 focus:bg-slate-50/70 focus:text-slate-900 focus:outline-none focus-visible:ring-0"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const [scrollOpacity, setScrollOpacity] = useState(0.72);
  const [isScrolled, setIsScrolled] = useState(false);
  const locale = getLocaleFromPath(pathname);
  const dict = getDictionary(locale);
  const isArabic = locale === "ar";

  const getLocalizedHref = (href: string) => {
    if (!isArabic) return href;
    if (href === "/") return "/ar";
    return `/ar${href}`;
  };

  const getEnglishPath = () => {
    if (!isArabic) {
      return pathname || "/";
    }
    if (pathname === "/ar") return "/";
    const stripped = pathname.replace(/^\/ar/, "") || "/";
    return stripped;
  };

  const getArabicPath = () => {
    if (isArabic) {
      return pathname || "/ar";
    }
    if (pathname === "/") return "/ar";
    return `/ar${pathname}`;
  };

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (v) => {
      const o = Math.min(0.96, 0.72 + (v / 100) * 0.24);
      setScrollOpacity(o);
      setIsScrolled(v > 16);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <header
      className={`sticky top-0 z-30 transition-[background-color,box-shadow] duration-300 ease-out ${
        isScrolled ? "backdrop-blur-lg shadow-[0_1px_0_rgba(15,23,42,0.06)]" : "backdrop-blur-sm"
      }`}
      style={{
        backgroundColor: `rgba(255,255,255,${scrollOpacity})`
      }}
    >
      <MaxWidthWrapper className="flex flex-col">
        <div className="flex items-center justify-between gap-4 py-4 md:gap-6 lg:gap-8 lg:py-4">
          <Link
            href="/"
            className="flex min-w-0 shrink-0 items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded transition-opacity duration-200 hover:opacity-90"
          >
            <Image
              src={LOGO_SRC}
              alt="Zyra Builds"
              width={LOGO_WIDTH}
              height={LOGO_HEIGHT}
              className="h-16 w-auto shrink-0 object-contain object-left md:h-[4.5rem]"
              priority
            />
          </Link>

          <nav
            className="hidden shrink-0 items-center gap-6 md:flex md:gap-7 lg:gap-9"
            aria-label="Main"
          >
            {navItems.map((item) => (
              <NavItemWithDropdown
                key={item.href}
                href={getLocalizedHref(item.href)}
                label={dict.header.nav[item.key]}
                isActive={
                  (!isArabic && pathname === item.href) ||
                  (isArabic && pathname === `/ar${item.href}`)
                }
                isOpen={openDropdown === item.href}
                onOpen={() => setOpenDropdown(item.href)}
                onClose={() => setOpenDropdown(null)}
              />
            ))}
            <div className="ml-4 flex items-center gap-2 text-xs font-medium text-slate-500">
              <Link
                href={getEnglishPath()}
                className={`transition-colors ${
                  !isArabic ? "text-slate-900" : "hover:text-slate-700"
                }`}
              >
                EN
              </Link>
              <span className="text-slate-300">|</span>
              <Link
                href={getArabicPath()}
                className={`transition-colors ${
                  isArabic ? "text-slate-900" : "hover:text-slate-700"
                }`}
              >
                AR
              </Link>
            </div>
          </nav>

          <div className="flex items-center justify-end gap-2">
            <Button
              href={getLocalizedHref("/contact")}
              variant="primary"
              size="sm"
              className="hidden rounded-full px-5 py-2.5 font-medium text-white shadow-sm transition-all duration-250 ease-out hover:-translate-y-[1px] hover:shadow-md md:inline-flex motion-reduce:hover:translate-y-0"
            >
              {dict.cta.requestQuote}
            </Button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full px-4 py-2.5 text-xs font-medium text-slate-800 transition-colors duration-200 ease-out hover:bg-slate-100/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transition-none md:hidden"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              id="mobile-menu-button"
            >
              {mobileMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        <div
          className={`h-px w-full transition-colors duration-300 ease-out ${
            isScrolled ? "bg-slate-200/80" : "bg-slate-100/70"
          }`}
          role="presentation"
        />
      </MaxWidthWrapper>

      <div
        className={`grid md:hidden transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
          mobileMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div id="mobile-nav" role="dialog" aria-label="Mobile navigation" className="overflow-hidden border-t border-slate-100 bg-white">
          <MaxWidthWrapper className="flex flex-col gap-0 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`py-3 text-sm transition-colors duration-200 ease-out hover:text-slate-900 ${
                pathname === item.href
                  ? "font-medium text-slate-900"
                  : "text-slate-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 inline-flex w-fit rounded-full bg-zyra-blue px-4 py-2.5 text-xs font-medium text-white shadow-lg shadow-zyra-blue/25 transition-all duration-300 ease-out hover:bg-zyra-blue/90 hover:shadow-xl hover:shadow-zyra-blue/20 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
          >
            Request Quote
          </Link>
        </MaxWidthWrapper>
        </div>
      </div>
    </header>
  );
}
