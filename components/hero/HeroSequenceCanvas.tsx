"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { heroSequenceFrames, HERO_SEQUENCE_FRAME_COUNT } from "@/lib/hero-sequence";

type HeroSequenceCanvasProps = {
  className?: string;
};

export function HeroSequenceCanvas({ className }: HeroSequenceCanvasProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const renderRef = useRef<(index: number) => void>();

  // Preload frames on desktop / tablet
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 768) return;

    let cancelled = false;

    const loadImage = (src: string) =>
      new Promise<HTMLImageElement>((resolve, reject) => {
        const img = document.createElement("img");
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = (err) => reject(err);
      });

    (async () => {
      try {
        const loaded = await Promise.all(
          heroSequenceFrames.map((src) => loadImage(src))
        );
        if (cancelled) return;
        imagesRef.current = loaded;

        if (renderRef.current) {
          renderRef.current(0);
        }
      } catch {
        // If frames are missing or fail to load, we simply keep the stage static.
      }
    })();

    return () => {
      cancelled = true;
      imagesRef.current = [];
    };
  }, []);

  // Canvas sizing and scroll-linked frame progression
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 768) return;

    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const currentFrame = { index: 0 };

    const render = (index: number) => {
      const images = imagesRef.current;
      if (!images.length) return;

      const clampedIndex = Math.min(
        HERO_SEQUENCE_FRAME_COUNT - 1,
        Math.max(0, Math.round(index))
      );
      const image = images[clampedIndex];

      const rect = wrapper.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const width = rect.width;
      const height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      context.clearRect(0, 0, width, height);

      // Draw image centered with "cover" behavior
      const imgAspect = image.width / image.height;
      const canvasAspect = width / height;

      let drawWidth: number;
      let drawHeight: number;
      let offsetX = 0;
      let offsetY = 0;

      if (imgAspect > canvasAspect) {
        drawHeight = height;
        drawWidth = image.width * (height / image.height);
        offsetX = (width - drawWidth) / 2;
      } else {
        drawWidth = width;
        drawHeight = image.height * (width / image.width);
        offsetY = (height - drawHeight) / 2;
      }

      context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
    };

    renderRef.current = render;

    const onResize = () => {
      render(currentFrame.index);
    };

    window.addEventListener("resize", onResize);

    const tween = gsap.to(currentFrame, {
      index: HERO_SEQUENCE_FRAME_COUNT - 1,
      ease: "none",
      scrollTrigger: {
        trigger: wrapper,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.8,
        anticipatePin: 0.8
      },
      onUpdate: () => {
        render(currentFrame.index);
      }
    });

    return () => {
      window.removeEventListener("resize", onResize);
      if (tween.scrollTrigger) {
        tween.scrollTrigger.kill();
      }
      tween.kill();
    };
  }, []);

  const firstFrame = heroSequenceFrames[0];

  return (
    <div
      ref={wrapperRef}
      className={`relative h-full w-full overflow-hidden rounded-[22px] bg-gradient-to-b from-slate-50 to-slate-100/80 ${className ?? ""}`}
    >
      {/* Desktop / tablet canvas */}
      <canvas ref={canvasRef} className="hidden h-full w-full md:block" />

      {/* Mobile: static first frame */}
      <div className="relative block h-full w-full md:hidden">
        <Image
          src={firstFrame}
          alt="Zyra transformation stage."
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}

