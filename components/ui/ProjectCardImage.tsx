"use client";

import Image from "next/image";
import { useState } from "react";
import { ProjectCardProxyVisual } from "@/components/proxy-visuals/ProjectCardProxyVisual";

type ProjectCardImageProps = {
  src: string;
  alt: string;
  proxyVariant: "office" | "restaurant" | "retail";
};

export function ProjectCardImage({
  src,
  alt,
  proxyVariant
}: ProjectCardImageProps) {
  const [useFallback, setUseFallback] = useState(false);

  if (useFallback) {
    return <ProjectCardProxyVisual variant={proxyVariant} />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 1024px) 100vw, 33vw"
      className="object-cover object-[center_42%]"
      onError={() => setUseFallback(true)}
    />
  );
}
