"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { MaxWidthWrapper } from "../layout/MaxWidthWrapper";
import { CinematicProxyBackground } from "@/components/proxy-visuals/CinematicProxyBackground";

const CINEMATIC_IMAGE_SRC = "/images/home-cinematic.jpg";

export function CinematicSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [useFallback, setUseFallback] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[80vh] w-full overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        style={{ y: reduceMotion ? 0 : imageY }}
      >
        {useFallback ? (
          <CinematicProxyBackground variant="home" />
        ) : (
          <>
            <Image
              src={CINEMATIC_IMAGE_SRC}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority={false}
              onError={() => setUseFallback(true)}
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/35 to-black/65"
              aria-hidden
            />
          </>
        )}
      </motion.div>

      <div className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-6 py-24 sm:py-32">
        <MaxWidthWrapper className="flex flex-col items-center text-center">
          <motion.h2
            className="cinematic-heading text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl"
            initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduceMotion ? 0 : 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Structure in every stage.
          </motion.h2>
          <motion.p
            className="cinematic-supporting mt-6 max-w-2xl text-base text-white/80 md:text-lg"
            initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            From concept coordination to final handover, Zyra approaches commercial
            interiors through disciplined planning, controlled execution, and
            design-aware delivery.
          </motion.p>
        </MaxWidthWrapper>
      </div>
    </section>
  );
}
