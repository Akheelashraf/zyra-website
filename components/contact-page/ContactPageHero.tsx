"use client";

import { MaxWidthWrapper } from "../layout/MaxWidthWrapper";
import { Button } from "../ui/Button";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { getDictionary, getLocaleFromPath } from "@/lib/locale";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function ContactPageHero() {
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : 0.7;
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const dict = getDictionary(locale);
  const isArabic = locale === "ar";

  const t = {
    eyebrow: locale === "ar" ? "تواصل" : "Contact",
    title:
      locale === "ar"
        ? "ابدأ الحديث بصورة أوضح."
        : "Start the conversation with more clarity.",
    body:
      locale === "ar"
        ? "شارك زيرا تفاصيل مساحتك وأهدافك والجدول الزمني الذي تعمل عليه، وسنساعدك في تنظيم الخطوات التالية لمشروعك التجاري."
        : "Tell Zyra about your space, your goals and your timeline. We will help structure the next steps for your commercial interior project.",
    primaryCta: dict.header.ctas.requestQuote,
    secondaryCta:
      locale === "ar" ? "استعرض الخدمات" : "View Services"
  };

  return (
    <section className="bg-white">
      <MaxWidthWrapper>
        <div
          className={`max-w-3xl border-b border-slate-100 py-16 sm:py-20 lg:py-24 ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          <motion.p
            className="text-[11px] uppercase tracking-[0.32em] text-slate-400"
            initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration, ease }}
          >
            {t.eyebrow}
          </motion.p>
          <div className="mt-4 space-y-6">
            <motion.h1
              className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl lg:text-[2.6rem]"
              initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration, delay: reduceMotion ? 0 : 0.08, ease }}
            >
              {t.title}
            </motion.h1>
            <motion.p
              className="max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base lg:text-[17px]"
              initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration, delay: reduceMotion ? 0 : 0.12, ease }}
            >
              {t.body}
            </motion.p>
            <motion.div
              className={`flex flex-wrap items-center gap-4 ${
                isArabic ? "justify-end" : ""
              }`}
              initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration, delay: reduceMotion ? 0 : 0.18, ease }}
            >
              <Button href="/contact" variant="primary" size="md">
                {t.primaryCta}
              </Button>
              <Button href="/services" variant="ghost" size="md">
                {t.secondaryCta}
              </Button>
            </motion.div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
