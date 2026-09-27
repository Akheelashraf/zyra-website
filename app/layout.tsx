import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BrandedLoader } from "@/components/loading/BrandedLoader";
import { PageTransition } from "@/components/layout/PageTransition";
import { AudioProvider } from "@/components/audio/AudioProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Zyra Builds | Commercial Interior Fit-Out in Saudi Arabia",
  description:
    "Structured commercial interior execution for growing businesses in Saudi Arabia. Offices, restaurants, retail, clinics, showrooms, exhibition booths.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" }
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <AudioProvider>
          <BrandedLoader />
          <PageTransition>{children}</PageTransition>
          <WhatsAppButton />
        </AudioProvider>
      </body>
    </html>
  );
}

