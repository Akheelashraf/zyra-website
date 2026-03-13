"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const POSTER_SRC = "/images/home-hero.jpg";
/** Add your intro video to public/videos/inside-zyra.mp4 and it will play on click */
const VIDEO_SRC = "/videos/inside-zyra.mp4";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function InsideZyraVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (video) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handlePause = () => setIsPlaying(false);

  return (
    <section className="bg-white px-4 sm:px-6">
      <motion.div
        className="mx-auto max-w-[1200px] py-32"
        initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: reduceMotion ? 0 : 0.7, ease }}
      >
        <div className="mb-12 text-center sm:mb-14">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl lg:text-[2.75rem]">
            Inside Zyra
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-500 md:text-lg md:leading-relaxed">
            A look inside how we design and execute commercial interiors.
          </p>
        </div>

        <motion.div
          className="group relative aspect-video w-full overflow-hidden rounded-3xl shadow-xl transition-transform duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:hover:-translate-y-1 md:hover:scale-[1.03] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100"
          initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: reduceMotion ? 0 : 0.75, delay: reduceMotion ? 0 : 0.1, ease }}
        >
          {/* Video or poster background */}
          <div className="absolute inset-0 bg-slate-200">
            <Image
              src={POSTER_SRC}
              alt=""
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-center"
              priority={false}
            />
            <video
              ref={videoRef}
              src={VIDEO_SRC}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
                isPlaying ? "opacity-100" : "opacity-0"
              }`}
              poster={POSTER_SRC}
              playsInline
              onPlay={handlePlay}
              onPause={handlePause}
              onEnded={handlePause}
              onError={() => {}}
            />
          </div>

          {/* Centered play button overlay — hidden when playing */}
          {!isPlaying && (
            <button
              type="button"
              onClick={handlePlay}
              className="absolute inset-0 z-10 flex items-center justify-center bg-black/10 transition-colors duration-200 hover:bg-black/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-zyra-blue focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              aria-label="Play video"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/95 shadow-[0_20px_60px_rgba(0,0,0,0.25)] ring-1 ring-slate-200/80 transition-transform duration-200 group-hover:scale-105 motion-reduce:group-hover:scale-100">
                <svg
                  className="ml-1 h-8 w-8 text-slate-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path d="M8 5v14l11-7L8 5z" />
                </svg>
              </span>
            </button>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
