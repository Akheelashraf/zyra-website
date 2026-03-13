"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { IdeaStateVisual } from "./IdeaStateVisual";
import { DesignStateVisual } from "./DesignStateVisual";
import { BuiltStateVisual } from "./BuiltStateVisual";

type ProcessStageVisualProps = {
  scrollProgress: MotionValue<number>;
  reduceMotion: boolean;
};

/**
 * Central visual stage: layers IDEA, DESIGN, and BUILT SPACE visuals
 * and transitions between them based on scroll progress.
 */
export function ProcessStageVisual({
  scrollProgress,
  reduceMotion
}: ProcessStageVisualProps) {
  const ideaOpacity = useTransform(
    scrollProgress,
    [0, 0.28, 0.33, 0.38],
    [1, 1, 0, 0]
  );
  const ideaScale = useTransform(scrollProgress, [0, 0.33], [1, 0.98]);
  const ideaY = useTransform(scrollProgress, [0, 0.33], [0, 8]);

  const designOpacity = useTransform(
    scrollProgress,
    [0.25, 0.33, 0.6, 0.66, 0.72],
    [0, 0, 1, 1, 0]
  );
  const designScale = useTransform(
    scrollProgress,
    [0.28, 0.33, 0.5, 0.66],
    [0.98, 1, 1, 0.98]
  );
  const designY = useTransform(scrollProgress, [0.28, 0.33, 0.6, 0.66], [8, 0, 0, 8]);

  const builtOpacity = useTransform(
    scrollProgress,
    [0.58, 0.66, 1],
    [0, 1, 1]
  );
  const builtScale = useTransform(scrollProgress, [0.58, 0.66], [0.98, 1]);
  const builtY = useTransform(scrollProgress, [0.58, 0.66], [8, 0]);

  if (reduceMotion) {
    return (
      <div className="relative aspect-video w-full max-w-[720px] overflow-hidden rounded-[28px] bg-slate-50/50 shadow-hero-stage">
        <BuiltStateVisual />
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full max-w-[720px] overflow-hidden rounded-[28px] bg-slate-50/50 shadow-hero-stage ring-1 ring-slate-100/80">
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: ideaOpacity,
          scale: ideaScale,
          y: ideaY
        }}
      >
        <IdeaStateVisual />
      </motion.div>
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: designOpacity,
          scale: designScale,
          y: designY
        }}
      >
        <DesignStateVisual />
      </motion.div>
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: builtOpacity,
          scale: builtScale,
          y: builtY
        }}
      >
        <BuiltStateVisual />
      </motion.div>
    </div>
  );
}
