import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#56db84",
          "green-dark": "#3db868",
          "green-light": "#7ee89f",
        },
        dark: {
          900: "#050505",
          800: "#080808",
          700: "#0a0a0a",
          600: "#0d0d0d",
          500: "#111111",
          400: "#161616",
          300: "#1c1c1c",
          200: "#242424",
          100: "#2e2e2e",
        },
        gray: {
          50:  "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-grid": "linear-gradient(rgba(86,219,132,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(86,219,132,0.025) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "72px 72px",
      },
      animation: {
        "fade-up":    "fadeUp 0.6s ease-out forwards",
        "fade-in":    "fadeIn 0.5s ease-out forwards",
        float:        "float 6s ease-in-out infinite",
        "hero-glow":  "heroGlow 12s ease-in-out infinite",
        shimmer:      "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-8px)" },
        },
        heroGlow: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1) translate(0, 0)" },
          "33%":       { opacity: "0.7", transform: "scale(1.08) translate(-1.5%, 2%)" },
          "66%":       { opacity: "0.45", transform: "scale(0.96) translate(2%, -1.5%)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        green:        "0 0 24px rgba(86,219,132,0.15)",
        "green-lg":   "0 0 48px rgba(86,219,132,0.2)",
        card:         "0 4px 24px rgba(0,0,0,0.4)",
        "card-hover": "0 12px 40px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};
export default config;
