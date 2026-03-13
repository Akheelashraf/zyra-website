"use client";

import { MaxWidthWrapper } from "../layout/MaxWidthWrapper";
import { Button } from "../ui/Button";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function AboutPageHero() {
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : 0.7;

  return (
    <section className="bg-white">
      <MaxWidthWrapper>
        <div className="max-w-3xl border-b border-slate-100 py-16 sm:py-20 lg:py-24">
          <motion.p
            className="text-[11px] uppercase tracking-[0.32em] text-slate-400"
            initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration, ease }}
          >
            About
          </motion.p>
          <div className="mt-4 space-y-6">
            <motion.h1
              className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl lg:text-[2.6rem]"
              initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration, delay: reduceMotion ? 0 : 0.08, ease }}
            >
              A more structured way to build commercial interiors.
            </motion.h1>
            <motion.p
              className="max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base lg:text-[17px]"
              initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration, delay: reduceMotion ? 0 : 0.12, ease }}
            >
              Zyra exists to bring clarity, coordination and disciplined execution to
              commercial spaces for growing businesses in Saudi Arabia.
            </motion.p>
            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration, delay: reduceMotion ? 0 : 0.18, ease }}
            >
              <Button href="/contact" variant="primary" size="md">
                Request Quote
              </Button>
              <Button href="/services" variant="ghost" size="md">
                View Services
              </Button>
            </motion.div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
