"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { HeroProxyVisual } from "@/components/proxy-visuals/HeroProxyVisual";

const HERO_IMAGE_SRC = "/images/home-hero.jpg";

type HeroCinematicImageProps = {
  /** When true, fills parent container (absolute inset-0) for immersive stage layout */
  fillStage?: boolean;
};

export function HeroCinematicImage({ fillStage = false }: HeroCinematicImageProps) {
  const reduceMotion = useReducedMotion();
  const [useFallback, setUseFallback] = useState(false);

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.22, 0.4], [1.06, 1.02, 1]);
  const y = useTransform(scrollYProgress, [0, 0.35], [0, 12]);
  const topLightOpacity = useTransform(scrollYProgress, [0, 0.28], [0.28, 0]);
  const accentScaleX = useTransform(scrollYProgress, [0, 0.2, 0.5], [0, 0.5, 1]);

  const roundedClass = fillStage ? "rounded-none" : "rounded-[28px]";
  const wrapperClass = fillStage
    ? "absolute inset-0 h-full w-full overflow-hidden bg-slate-100/50"
    : "relative aspect-video w-full max-w-[640px] overflow-hidden rounded-[28px] border border-slate-100/90 bg-slate-50/30 shadow-hero-stage ring-1 ring-slate-200/80 xl:max-w-[680px] [box-shadow:0_32px_64px_rgba(0,0,0,0.08),0_8px_24px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.5)]";

  return (
    <div className={wrapperClass}>
      {/* Layer 1 — background image */}
      <motion.div
        className={`absolute inset-0 ${roundedClass}`}
        style={{
          scale: reduceMotion ? 1 : scale,
          y: reduceMotion ? 0 : y
        }}
      >
        {useFallback ? (
          <HeroProxyVisual />
        ) : (
          <Image
            src={HERO_IMAGE_SRC}
            alt="Premium commercial interior — Zyra Builds"
            fill
            sizes={fillStage ? "100vw" : "(max-width: 768px) 100vw, (max-width: 1280px) 640px, 680px"}
            className="object-cover object-[center_42%] brightness-[0.95] contrast-[1.05] saturate-[1.05] sm:object-[center_40%] md:object-[center_38%]"
            priority
            onError={() => setUseFallback(true)}
          />
        )}
      </motion.div>
      {/* Layer 2 — subtle gradient lighting (top soft light) */}
      {!reduceMotion && (
        <motion.div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-white/10 to-transparent ${roundedClass}`}
          style={{ opacity: topLightOpacity }}
          aria-hidden
        />
      )}
      {/* Layer 3 — foreground light reflection (bottom edge) */}
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-white/15 via-transparent to-transparent ${roundedClass}`}
        aria-hidden
      />
      {/* Static top edge highlight */}
      <div
        className={`pointer-events-none absolute inset-0 border border-white/25 border-b-0 border-l-0 border-r-0 ${roundedClass}`}
        aria-hidden
      />
      {/* Subtle signature: thin Zyra blue accent that grows with scroll */}
      {!reduceMotion && (
        <motion.div
          className={`absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-zyra-blue/30 ${fillStage ? "rounded-none" : "rounded-b-[28px]"}`}
          style={{ scaleX: accentScaleX }}
          aria-hidden
        />
      )}
    </div>
  );
}
