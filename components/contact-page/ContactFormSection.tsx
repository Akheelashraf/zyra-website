"use client";

import { MaxWidthWrapper } from "../layout/MaxWidthWrapper";
import { Button } from "../ui/Button";
import { usePathname } from "next/navigation";
import { getDictionary, getLocaleFromPath } from "@/lib/locale";

/**
 * Contact form — connect to your backend or email service for submission.
 */
export function ContactFormSection() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const dict = getDictionary(locale);
  const t = dict.contactForm;
  const isArabic = locale === "ar";

  return (
    <section className="bg-slate-50/60 py-16 sm:py-20 lg:py-24">
      <MaxWidthWrapper>
        <div
          className={`max-w-2xl space-y-3 ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
            {t.eyebrow}
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-semibold tracking-tight text-slate-900">
            {t.title}
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl">
            {t.intro}
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-slate-100/90 bg-white p-6 shadow-[0_4px_24px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/50 sm:p-8 lg:p-10">
          <form
            className="space-y-7"
            onSubmit={(e) => e.preventDefault()}
            noValidate
            dir={isArabic ? "rtl" : "ltr"}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-500"
                >
                  {t.nameLabel}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder={t.namePlaceholder}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 ease-out focus:border-zyra-blue focus:bg-white focus:ring-2 focus:ring-zyra-blue/20 focus:ring-offset-0"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact-company"
                  className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-500"
                >
                  {t.companyLabel}
                </label>
                <input
                  id="contact-company"
                  type="text"
                  name="company"
                  placeholder={t.companyPlaceholder}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 ease-out focus:border-zyra-blue focus:bg-white focus:ring-2 focus:ring-zyra-blue/20 focus:ring-offset-0"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-500"
                >
                  {t.emailLabel}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder={t.emailPlaceholder}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 ease-out focus:border-zyra-blue focus:bg-white focus:ring-2 focus:ring-zyra-blue/20 focus:ring-offset-0"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact-phone"
                  className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-500"
                >
                  {t.phoneLabel}
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder={t.phonePlaceholder}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 ease-out focus:border-zyra-blue focus:bg-white focus:ring-2 focus:ring-zyra-blue/20 focus:ring-offset-0"
                />
              </div>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <div className="space-y-2">
                <label
                  htmlFor="contact-project-type"
                  className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-500"
                >
                  {t.projectTypeLabel}
                </label>
                <select
                  id="contact-project-type"
                  name="projectType"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-200 ease-out focus:border-zyra-blue focus:bg-white focus:ring-2 focus:ring-zyra-blue/20 focus:ring-offset-0"
                  defaultValue=""
                >
                  <option value="">{t.projectTypePlaceholder}</option>
                  <option value="office">{t.projectTypeOptions.office}</option>
                  <option value="retail">{t.projectTypeOptions.retail}</option>
                  <option value="hospitality">
                    {t.projectTypeOptions.hospitality}
                  </option>
                  <option value="renovation">
                    {t.projectTypeOptions.renovation}
                  </option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="contact-message"
                className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-500"
              >
                {t.messageLabel}
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder={t.messagePlaceholder}
                className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 ease-out focus:border-zyra-blue focus:bg-white focus:ring-2 focus:ring-zyra-blue/20 focus:ring-offset-0"
              />
            </div>

            <div className={`pt-2 ${isArabic ? "text-right" : ""}`}>
              <Button type="submit" variant="primary" size="md">
                {t.submit}
              </Button>
            </div>
          </form>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
