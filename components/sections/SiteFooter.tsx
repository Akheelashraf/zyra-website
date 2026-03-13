import Link from "next/link";
import Image from "next/image";
import { MaxWidthWrapper } from "../layout/MaxWidthWrapper";
import { usePathname } from "next/navigation";
import { getDictionary, getLocaleFromPath } from "@/lib/locale";

const LOGO_SRC = "/branding/zyra%20logo%20blue%2001%20Artboard%201.svg";
const LOGO_WIDTH = 260;
const LOGO_HEIGHT = 72;

const navLinks = [
  { href: "/services", key: "services" as const },
  { href: "/projects", key: "projects" as const },
  { href: "/about", key: "about" as const },
  { href: "/contact", key: "contact" as const }
];

export function SiteFooter() {
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
    <footer className="border-t border-slate-100 bg-white py-10 sm:py-12">
      <MaxWidthWrapper className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="space-y-3">
          <Link
            href={getLocalizedHref("/")}
            className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded transition-opacity duration-200 hover:opacity-90"
          >
            <Image
              src={LOGO_SRC}
              alt="Zyra Builds"
              width={LOGO_WIDTH}
              height={LOGO_HEIGHT}
              className="h-16 w-auto shrink-0 object-contain md:h-[4.5rem]"
            />
          </Link>
          <p className="text-sm text-slate-500">
            {dict.footer.tagline}
          </p>
          <p className="text-xs text-slate-400">
            {dict.footer.location}
          </p>
        </div>

        <div className="flex flex-1 flex-wrap gap-8 text-sm text-slate-500 md:justify-end">
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
              {dict.footer.navigate}
            </p>
            <ul className="space-y-1.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={getLocalizedHref(link.href)}
                    className="rounded-sm transition-colors duration-200 ease-out hover:text-slate-900 hover:underline hover:underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    {dict.header.nav[link.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
              {dict.footer.contact}
            </p>
            <ul className="space-y-1.5">
              <li>
                <a
                  href="mailto:connect@zyrabuilds.com"
                  className="rounded-sm transition-colors duration-200 ease-out hover:text-slate-900 hover:underline hover:underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  connect@zyrabuilds.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+966566325017"
                  className="rounded-sm transition-colors duration-200 ease-out hover:text-slate-900 hover:underline hover:underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  +966 566 32 5017
                </a>
              </li>
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <div className="mt-6 border-t border-slate-100 pt-4 text-xs text-slate-400">
          © {new Date().getFullYear()} Zyra Builds. {dict.footer.rights}
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
