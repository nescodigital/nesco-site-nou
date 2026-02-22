"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import { type Locale, t } from "@/lib/translations";
import { routes } from "@/lib/routes";
import { StatsCounter } from "@/components/ui/StatsCounter";

const GlobeCanvas = dynamic(
  () => import("@/components/sections/GlobeCanvas").then((m) => ({ default: m.GlobeCanvas })),
  { ssr: false, loading: () => null }
);

interface HeroProps {
  locale: Locale;
}

const AVATARS = [
  { src: "https://randomuser.me/api/portraits/men/32.jpg",  z: 30 },
  { src: "https://randomuser.me/api/portraits/women/44.jpg", z: 20 },
  { src: "https://randomuser.me/api/portraits/men/67.jpg",  z: 10 },
];

const socialProofText: Record<string, string> = {
  ro: "clienți mulțumiți",
  en: "satisfied clients",
  de: "zufriedene Kunden",
};

export function Hero({ locale }: HeroProps) {
  const tr = t(locale);
  const h = tr.hero;
  const r = routes[locale];

  // Defer mobile globe until after page load so it doesn't affect PageSpeed scores
  const [showMobileGlobe, setShowMobileGlobe] = useState(false);
  useEffect(() => {
    const show = () => setTimeout(() => setShowMobileGlobe(true), 300);
    if (document.readyState === "complete") {
      show();
    } else {
      window.addEventListener("load", show, { once: true });
      return () => window.removeEventListener("load", show);
    }
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{ backgroundColor: "#050505" }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />

      {/* Hero animated glow, desktop right */}
      <div
        className="absolute hidden lg:block pointer-events-none"
        style={{
          top: "50%",
          right: "-10%",
          transform: "translateY(-50%)",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(86,219,132,0.07) 0%, transparent 70%)",
          animation: "heroGlow 14s ease-in-out infinite",
        }}
      />
      {/* Secondary glow, top left */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-15%",
          left: "-5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(86,219,132,0.04) 0%, transparent 70%)",
          animation: "heroGlow 18s ease-in-out infinite reverse",
        }}
      />

      {/* Mobile animated gradient */}
      <div
        className="absolute inset-0 lg:hidden pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 35%, rgba(86,219,132,0.06) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(86,219,132,0.03) 0%, transparent 50%)",
          animation: "mobileGlowPulse 8s ease-in-out infinite",
        }}
      />


      {/* Mobile globe loaded after window.load, doesn't affect PageSpeed */}
      <div
        className="lg:hidden absolute pointer-events-none"
        style={{
          right: "-28%",
          top: "64px",
          width: 300,
          height: 300,
          zIndex: 1,
        }}
      >
        {/* Arrow watermark always visible, zero JS cost */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo mare Nesco.svg"
          alt=""
          aria-hidden="true"
          width={240}
          height={240}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 240,
            height: 240,
            opacity: 0.10,
            zIndex: 10,
            filter: "brightness(10)",
            pointerEvents: "none",
          }}
        />
        {/* Globe canvas mounted only after page load */}
        {showMobileGlobe ? (
          <GlobeCanvas />
        ) : (
          <div style={{
            width: "100%",
            height: "100%",
            background: "radial-gradient(ellipse at center, rgba(86,219,132,0.14) 0%, transparent 70%)",
            borderRadius: "50%",
          }} />
        )}
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, #050505, transparent)" }}
      />

      <div
        className="relative page-container z-10"
        style={{ paddingTop: "120px", paddingBottom: "100px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-end">

          {/* ── Left column ── */}
          <div
            className="opacity-0"
            style={{ animation: "fadeUp 0.8s ease forwards 0.1s" }}
          >
            {/* Social proof pill, first element */}
            <div
              className="inline-flex items-center gap-3 mb-6"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "9999px",
                padding: "6px 16px 6px 6px",
              }}
            >
              {/* Overlapping avatars */}
              <div style={{ display: "flex", position: "relative" }}>
                {AVATARS.map(({ src, z }, i) => (
                  <div
                    key={i}
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 9999,
                      border: "2px solid rgba(255,255,255,0.1)",
                      overflow: "hidden",
                      flexShrink: 0,
                      zIndex: z,
                      marginLeft: i === 0 ? 0 : "-10px",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={src}
                      alt={`Client ${i + 1}`}
                      width={28}
                      height={28}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
              <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.6)", whiteSpace: "nowrap" }}>
                <span style={{ color: "#fff", fontWeight: 600 }}>500+</span>{" "}
                {socialProofText[locale]}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-black text-left"
              style={{
                fontSize: "clamp(3rem, 6.5vw, 5.5rem)",
                lineHeight: 0.88,
                letterSpacing: "-0.03em",
                fontFeatureSettings: '"kern" 1, "liga" 1',
                marginTop: "16px",
                marginBottom: "10px",
              }}
            >
              <span className="block text-white">{h.headline1}</span>
              <span
                className="block"
                style={{
                  background: "linear-gradient(135deg, #fff 0%, #56db84 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {h.headline2}
              </span>
              <span className="block text-white">{h.headline3}</span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-left"
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.5,
                color: "rgba(255,255,255,0.45)",
                maxWidth: "460px",
                letterSpacing: "0.01em",
                marginBottom: "12px",
              }}
            >
              {h.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              <Link href={r.contact} className="btn-primary group">
                {h.cta1}
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href={r.projects} className="btn-ghost">
                {h.cta2}
              </Link>
            </div>

            {/* Trust badges – mobile only, on desktop they move to right column */}
            <div
              className="flex lg:hidden flex-col sm:flex-row flex-wrap gap-3 mb-10"
              style={{ paddingTop: "16px" }}
            >
              {/* Clutch */}
              <div
                className="inline-flex items-center gap-2 transition-colors"
                style={{
                  background: "#111111",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  padding: "6px 12px",
                  fontSize: "0.75rem",
                  color: "#fff",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(86,219,132,0.3)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
              >
                <span style={{ fontWeight: 700, color: "#ff3d2e", fontSize: "0.8125rem" }}>clutch</span>
                <span style={{ color: "rgba(255,255,255,0.5)" }}>|</span>
                <span>{locale === "ro" ? "Top Digital Agency România" : locale === "en" ? "Top Digital Agency Romania" : "Top Digitalagentur Rumänien"}</span>
                <span style={{ color: "#f59e0b", letterSpacing: "1px" }}>★★★★★</span>
              </div>

              {/* Google Reviews */}
              <div
                className="inline-flex items-center gap-2 transition-colors"
                style={{
                  background: "#111111",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  padding: "6px 12px",
                  fontSize: "0.75rem",
                  color: "#fff",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(86,219,132,0.3)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
              >
                <svg viewBox="0 0 24 24" width="14" height="14" style={{ flexShrink: 0 }}>
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span>{locale === "ro" ? "Google Reviews" : locale === "en" ? "Google Reviews" : "Google-Bewertungen"}</span>
                <span style={{ color: "#f59e0b", letterSpacing: "1px" }}>★★★★★</span>
                <span style={{ color: "rgba(255,255,255,0.4)" }}>
                  {locale === "de" ? "5,0 · 12 Bewertungen" : locale === "en" ? "5.0 · 12 reviews" : "5.0 · 12 recenzii"}
                </span>
              </div>

              {/* GoodFirms */}
              <div
                className="inline-flex items-center gap-2 transition-colors"
                style={{
                  background: "#111111",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  padding: "6px 12px",
                  fontSize: "0.75rem",
                  color: "#fff",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(86,219,132,0.3)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
              >
                <svg viewBox="0 0 16 16" width="14" height="14" style={{ flexShrink: 0 }}>
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0z" fill="#2B85FF" />
                  <path d="M5.5 8.5l2 2 3.5-4" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>GoodFirms</span>
                <span style={{ color: "rgba(255,255,255,0.5)" }}>|</span>
                <span>{locale === "ro" ? "Top Web Development" : locale === "en" ? "Top Web Development" : "Top-Webentwicklung"}</span>
              </div>
            </div>

            {/* Stats */}
            <StatsCounter
              stats={[
                { value: h.stat1Value, label: h.stat1Label },
                { value: h.stat2Value, label: h.stat2Label },
                { value: h.stat3Value, label: h.stat3Label },
              ]}
            />
          </div>

          {/* ── Right column: globe + badges ── */}
          <div
            className="hidden lg:flex flex-col opacity-0"
            style={{ animation: "fadeUp 1.1s ease forwards 0.35s" }}
          >
            {/* Globe container */}
            <div
              className="relative flex items-center justify-center"
              style={{ height: "min(540px, 48vw)" }}
            >
              {/* Badge, horizontal, above the globe */}
              <div
                className="absolute pointer-events-none select-none"
                style={{
                  top: 0,
                  left: 0,
                  fontSize: "0.625rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(86,219,132,0.4)",
                  whiteSpace: "nowrap",
                  zIndex: 2,
                }}
              >
                {h.badge}
              </div>

              {/* Arrow watermark, centered on globe, above it */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo mare Nesco.svg"
                alt=""
                aria-hidden="true"
                width={520}
                height={520}
                className="absolute pointer-events-none select-none"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 520,
                  height: 520,
                  opacity: 0.11,
                  zIndex: 10,
                  filter: "brightness(10)",
                  border: "none",
                  outline: "none",
                  boxShadow: "none",
                  background: "none",
                }}
              />

              <GlobeCanvas />
            </div>

            {/* Trust badges – desktop, below globe, aligned with stats on left */}
            <div
              className="flex flex-wrap gap-3 justify-end"
              style={{ paddingTop: "16px" }}
            >
              {/* Clutch */}
              <div
                className="inline-flex items-center gap-2 transition-colors"
                style={{
                  background: "#111111",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  padding: "6px 12px",
                  fontSize: "0.75rem",
                  color: "#fff",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(86,219,132,0.3)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
              >
                <span style={{ fontWeight: 700, color: "#ff3d2e", fontSize: "0.8125rem" }}>clutch</span>
                <span style={{ color: "rgba(255,255,255,0.5)" }}>|</span>
                <span>{locale === "ro" ? "Top Digital Agency România" : locale === "en" ? "Top Digital Agency Romania" : "Top Digitalagentur Rumänien"}</span>
                <span style={{ color: "#f59e0b", letterSpacing: "1px" }}>★★★★★</span>
              </div>

              {/* Google Reviews */}
              <div
                className="inline-flex items-center gap-2 transition-colors"
                style={{
                  background: "#111111",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  padding: "6px 12px",
                  fontSize: "0.75rem",
                  color: "#fff",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(86,219,132,0.3)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
              >
                <svg viewBox="0 0 24 24" width="14" height="14" style={{ flexShrink: 0 }}>
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span>{locale === "ro" ? "Google Reviews" : locale === "en" ? "Google Reviews" : "Google-Bewertungen"}</span>
                <span style={{ color: "#f59e0b", letterSpacing: "1px" }}>★★★★★</span>
                <span style={{ color: "rgba(255,255,255,0.4)" }}>
                  {locale === "de" ? "5,0 · 12 Bewertungen" : locale === "en" ? "5.0 · 12 reviews" : "5.0 · 12 recenzii"}
                </span>
              </div>

              {/* GoodFirms */}
              <div
                className="inline-flex items-center gap-2 transition-colors"
                style={{
                  background: "#111111",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  padding: "6px 12px",
                  fontSize: "0.75rem",
                  color: "#fff",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(86,219,132,0.3)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
              >
                <svg viewBox="0 0 16 16" width="14" height="14" style={{ flexShrink: 0 }}>
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0z" fill="#2B85FF" />
                  <path d="M5.5 8.5l2 2 3.5-4" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>GoodFirms</span>
                <span style={{ color: "rgba(255,255,255,0.5)" }}>|</span>
                <span>{locale === "ro" ? "Top Web Development" : locale === "en" ? "Top Web Development" : "Top-Webentwicklung"}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
