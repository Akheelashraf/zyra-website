"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { ButtonHTMLAttributes, ReactNode, useEffect, useState } from "react";
import { useAudio } from "@/components/audio/AudioProvider";

type ButtonVariant = "primary" | "ghost";
type ButtonSize = "sm" | "md";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full font-medium transition-all duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:duration-150";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-zyra-blue text-white shadow-lg shadow-zyra-blue/25 hover:bg-zyra-blue/90 hover:shadow-xl hover:shadow-zyra-blue/20 focus-visible:ring-zyra-blue",
  ghost:
    "text-slate-800 hover:bg-slate-100/80 focus-visible:ring-slate-300"
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm"
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  onMouseMove,
  onMouseLeave,
  onClick,
  ...props
}: ButtonProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);
  const { playClick } = useAudio();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    playClick();
    onClick?.(e as React.MouseEvent<HTMLButtonElement>);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointerMq = window.matchMedia("(pointer: fine)");

    const update = () => {
      setEnabled(!reduceMq.matches && pointerMq.matches);
    };

    update();

    const handleReduceChange = () => update();
    const handlePointerChange = () => update();

    reduceMq.addEventListener("change", handleReduceChange);
    pointerMq.addEventListener("change", handlePointerChange);

    return () => {
      reduceMq.removeEventListener("change", handleReduceChange);
      pointerMq.removeEventListener("change", handlePointerChange);
    };
  }, []);

  const magneticEnabled = enabled && variant === "primary";

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    onMouseMove?.(event as any);
    if (!magneticEnabled) {
      if (offset.x !== 0 || offset.y !== 0) {
        setOffset({ x: 0, y: 0 });
      }
      return;
    }

    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = event.clientX - centerX;
    const dy = event.clientY - centerY;

    const maxOffset = 4;
    const nx = Math.max(-1, Math.min(1, dx / (rect.width / 2)));
    const ny = Math.max(-1, Math.min(1, dy / (rect.height / 2)));

    setOffset({
      x: nx * maxOffset,
      y: ny * maxOffset
    });
  };

  const handleMouseLeave = (event: MouseEvent<HTMLElement>) => {
    onMouseLeave?.(event as any);
    if (offset.x !== 0 || offset.y !== 0) {
      setOffset({ x: 0, y: 0 });
    }
  };

  const magneticStyle = magneticEnabled
    ? {
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`
      }
    : undefined;

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className ?? ""}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        style={magneticStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      style={magneticStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}

