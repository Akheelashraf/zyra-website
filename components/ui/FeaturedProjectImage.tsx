"use client";

import Image from "next/image";
import { useState } from "react";
import { FeaturedProjectProxyVisual } from "@/components/proxy-visuals/FeaturedProjectProxyVisual";

type FeaturedProjectImageProps = {
  src: string;
  alt: string;
  proxyVariant: "office" | "restaurant" | "retail";
};

export function FeaturedProjectImage({
  src,
  alt,
  proxyVariant
}: FeaturedProjectImageProps) {
  const [useFallback, setUseFallback] = useState(false);

  if (useFallback) {
    return <FeaturedProjectProxyVisual variant={proxyVariant} />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 1024px) 100vw, 60vw"
      className="object-cover object-[center_42%]"
      onError={() => setUseFallback(true)}
    />
  );
}
