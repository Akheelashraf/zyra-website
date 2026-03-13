"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type InnerPageStatementSectionProps = {
  children: ReactNode;
};

export function InnerPageStatementSection({
  children
}: InnerPageStatementSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-4xl px-6 text-center sm:px-8 lg:px-12">
        <motion.h2
          className="text-5xl font-semibold leading-[1.08] tracking-tight text-slate-900 md:text-6xl"
          initial={{ opacity: reduceMotion ? 1 : 0, scale: reduceMotion ? 1 : 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {children}
        </motion.h2>
      </div>
    </section>
  );
}
