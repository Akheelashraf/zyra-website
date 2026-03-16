"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useAudio } from "@/components/audio/AudioProvider";

const LOGO_SRC = "/branding/zyra%20logo%20blue%2001%20Artboard%201.svg";
const STORAGE_KEY = "zyra-first-load-done";
const DURATION_MS = 1350;
const REDUCED_MOTION_DURATION_MS = 500;

export function BrandedLoader() {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();
  const { playLogo, onLoaderComplete } = useAudio();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const done = sessionStorage.getItem(STORAGE_KEY);
    if (done === "1") {
      onLoaderComplete();
      setVisible(false);
      return;
    }
    playLogo();
    const duration = reduceMotion ? REDUCED_MOTION_DURATION_MS : DURATION_MS;
    const t = setTimeout(() => {
      onLoaderComplete();
      sessionStorage.setItem(STORAGE_KEY, "1");
      setVisible(false);
    }, duration);
    return () => clearTimeout(t);
  }, [reduceMotion, playLogo, onLoaderComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-900"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          aria-hidden="true"
        >
          <motion.div
            className="relative flex flex-col items-center justify-center"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: reduceMotion ? 0.2 : 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              exit: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
            }}
          >
            {!reduceMotion && (
              <motion.div
                className="absolute inset-0 -m-8 rounded-full bg-zyra-blue/20 blur-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 0.8 }}
                aria-hidden
              />
            )}
            <Image
              src={LOGO_SRC}
              alt="Zyra Builds"
              width={200}
              height={56}
              className="relative h-12 w-auto object-contain opacity-95 md:h-14"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
