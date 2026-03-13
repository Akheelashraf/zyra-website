import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"]
      },
      colors: {
        zyra: {
          blue: "#3F51D9"
        }
      },
      boxShadow: {
        "soft-elevated":
          "0 24px 60px rgba(15, 23, 42, 0.16), 0 4px 16px rgba(15, 23, 42, 0.06)",
        "hero-image": "0 40px 80px rgba(0, 0, 0, 0.12)",
        "hero-stage": "0 32px 64px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.04)"
      },
      borderRadius: {
        "3xl": "30px"
      }
    }
  },
  plugins: []
};

export default config;

