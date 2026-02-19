"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { GlobeCanvas } from "@/components/sections/GlobeCanvas";
import { type Locale, t } from "@/lib/translations";
import { routes } from "@/lib/routes";

interface HeroProps {
  locale: Locale;
}

const AVATARS = [
  { src: "https://randomuser.me/api/portraits/men/1.jpg",   z: 30 },
  { src: "https://randomuser.me/api/portraits/women/1.jpg", z: 20 },
  { src: "https://randomuser.me/api/portraits/men/2.jpg",   z: 10 },
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

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#050505" }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />

      {/* Hero animated glow — desktop right */}
      <div
        className="absolute hidden lg:block pointer-events-none"
        style={{
          top: "50%",
          right: "-10%",
          transform: "translateY(-50%)",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(86,219,132,0.07) 0%, transparent 70%)",
          animation: "heroGlow 14s ease-in-out infinite",
        }}
      />
      {/* Secondary glow — top left */}
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

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, #050505, transparent)" }}
      />

      <div
        className="relative w-full max-w-7xl mx-auto z-10"
        style={{ paddingLeft: "5%", paddingRight: "5%", paddingTop: "120px", paddingBottom: "100px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* ── Left column ── */}
          <div
            className="opacity-0"
            style={{ animation: "fadeUp 0.8s ease forwards 0.1s" }}
          >
            {/* Social proof pill — first element */}
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
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                fontFeatureSettings: '"kern" 1, "liga" 1',
                marginTop: "16px",
                marginBottom: "28px",
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
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.45)",
                maxWidth: "460px",
                letterSpacing: "0.01em",
                marginBottom: "36px",
              }}
            >
              {h.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link href={r.contact} className="btn-primary group">
                {h.cta1}
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href={r.projects} className="btn-ghost">
                {h.cta2}
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              {[
                { value: h.stat1Value, label: h.stat1Label },
                { value: h.stat2Value, label: h.stat2Label },
                { value: h.stat3Value, label: h.stat3Label },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    padding: "16px 20px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "12px",
                    transition: "border-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.14)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                  }}
                >
                  <div
                    className="font-black tabular-nums whitespace-nowrap"
                    style={{ fontSize: "1.5rem", color: "#ffffff", letterSpacing: "-0.02em" }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.6875rem",
                      color: "rgba(255,255,255,0.3)",
                      marginTop: "4px",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      fontWeight: 500,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column: globe ── */}
          <div
            className="relative hidden lg:flex items-center justify-center opacity-0"
            style={{
              height: "min(520px, 46vw)",
              animation: "fadeUp 1.1s ease forwards 0.35s",
            }}
          >
            {/* Badge — horizontal, above the globe */}
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

            {/* Logo watermark */}
            <div
              className="absolute pointer-events-none select-none"
              style={{
                width: 528,
                height: 528,
                opacity: 0.18,
                zIndex: 0,
              }}
            >
              <Image
                src="/logo mare Nesco.avif"
                alt=""
                width={528}
                height={528}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  filter: "invert(1) hue-rotate(180deg) contrast(1.8)",
                  mixBlendMode: "screen",
                }}
              />
            </div>
            <GlobeCanvas />
          </div>

        </div>
      </div>
    </section>
  );
}
