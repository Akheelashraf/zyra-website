import type { ReactNode } from "react";
import { Noto_Sans_Arabic } from "next/font/google";

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  display: "swap"
});

export default function ArLayout({ children }: { children: ReactNode }) {
  return (
    <div dir="rtl" className={notoArabic.className}>
      {children}
    </div>
  );
}

