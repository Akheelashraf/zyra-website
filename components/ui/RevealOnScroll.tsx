"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  /** Delay in seconds before animation starts (e.g. 0.1 for stagger) */
  delay?: number;
  /** Reduce motion on mobile */
  reduceMotion?: boolean;
  /** Start visible (e.g. hero above the fold) to avoid flash */
  initialVisible?: boolean;
};

export function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  reduceMotion = true,
  initialVisible = false
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(initialVisible);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reduceMotion && typeof window !== "undefined") {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReduce(mq.matches);
      const handler = () => setReduce(mq.matches);
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
  }, [reduceMotion]);

  useEffect(() => {
    if (initialVisible) return;
    const el = ref.current;
    if (!el || reduce) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reduce]);

  const style =
    delay > 0
      ? ({ "--reveal-delay": `${delay}s` } as React.CSSProperties)
      : undefined;

  return (
    <div
      ref={ref}
      className={`reveal-on-scroll ${visible ? "reveal-on-scroll-visible" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
