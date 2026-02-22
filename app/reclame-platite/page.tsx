"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { AdsDashboardMockup } from "@/components/sections/AdsDashboardMockup";
import { routes } from "@/lib/routes";

const r = routes.ro;

// ─── Particles ────────────────────────────────────────────────────────────────

interface Particle {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 8,
    duration: Math.random() * 8 + 6,
    opacity: Math.random() * 0.4 + 0.1,
  }));
}

// ─── Metrics ticker ───────────────────────────────────────────────────────────

const TICKER_STATS = [
  "ROAS mediu: 4.2x",
  "Cost per lead redus cu 38%",
  "23.000+ campanii executate",
  "€36M+ buget administrat",
];

// ─── Platform cards data ──────────────────────────────────────────────────────

interface PlatformCard {
  label: string;
  desc: string;
  href: string;
  accentColor: string;
  icon: React.ReactNode;
}

const PLATFORM_CARDS: PlatformCard[] = [
  {
    label: "Google Ads",
    desc: "Campanii Search, Display și Shopping optimizate pentru ROAS maxim. CPA cu 38% mai mic față de media industriei.",
    href: r.googleAds,
    accentColor: "#4285F4",
    icon: (
      <svg viewBox="0 0 48 48" width="44" height="44" aria-hidden="true">
        <path fill="#4285F4" d="M47 24.5c0-1.57-.15-3.09-.42-4.55H24v8.61h12.91c-.58 2.96-2.26 5.48-4.78 7.12l7.73 6C43.92 37.5 47 31.45 47 24.5z" />
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.13 1.44-4.87 2.28-8.16 2.28-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.16C6.51 42.68 14.62 48 24 48z" />
        <path fill="#FBBC04" d="M10.53 29.56C10.19 28.5 10 27.27 10 26s.19-2.5.53-3.56l-7.98-6.16A23.93 23.93 0 001 26c0 3.85.86 7.5 2.55 10.72l7.98-7.16z" />
        <path fill="#EA4335" d="M24 10.64c3.5 0 6.63 1.2 9.1 3.57l6.83-6.83C35.93 3.38 30.47 1 24 1 14.62 1 6.51 6.32 2.55 14.28l7.98 6.16C12.43 14.86 17.74 10.64 24 10.64z" />
      </svg>
    ),
  },
  {
    label: "Facebook Ads",
    desc: "Audiențe precise construite pe baza datelor tale. Conversii reale pentru e-commerce și lead generation.",
    href: r.facebookAds,
    accentColor: "#1877F2",
    icon: (
      <svg viewBox="0 0 24 24" width="44" height="44" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2" />
      </svg>
    ),
  },
  {
    label: "Instagram Ads",
    desc: "Creativ vizual, impactant și convertibil. Ajungem la audiența ta cu formate care opresc scroll-ul.",
    href: r.instagramAds,
    accentColor: "#d6249f",
    icon: (
      <svg viewBox="0 0 24 24" width="44" height="44" aria-hidden="true">
        <defs>
          <linearGradient id="ig-grad-hub" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFD600" />
            <stop offset="30%" stopColor="#FD5949" />
            <stop offset="60%" stopColor="#D6249F" />
            <stop offset="100%" stopColor="#4F5BD5" />
          </linearGradient>
        </defs>
        <path
          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
          fill="url(#ig-grad-hub)"
        />
      </svg>
    ),
  },
  {
    label: "TikTok Ads",
    desc: "Reach Gen Z și Millennials cu creativitate nativă. Formate video care generează brand awareness și conversii.",
    href: r.tiktokAds,
    accentColor: "#ffffff",
    icon: (
      <svg viewBox="0 0 24 24" width="44" height="44" aria-hidden="true">
        <path
          d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn Ads",
    desc: "B2B lead generation premium. Ajungem la decidenții din companiile țintă cu mesaje relevante.",
    href: r.linkedinAds,
    accentColor: "#0A66C2",
    icon: (
      <svg viewBox="0 0 24 24" width="44" height="44" aria-hidden="true">
        <path
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          fill="#0A66C2"
        />
      </svg>
    ),
  },
];

// ─── Marquee results ───────────────────────────────────────────────────────────

const MARQUEE_ITEMS = [
  "E-commerce fashion: ROAS 5.8x",
  "Clinică medicală privată: 42% CPA mai mic",
  "Automotive dealership: +310% lead-uri",
  "Retailer online: €2.1M revenue/lună din ads",
  "App delivery: 31% cost per instalare redus",
  "Electronice & IT: ROAS 6.1x",
  "Sport & outdoor retail: +280% conversii",
  "HR & recrutare: 38% CPL mai mic",
  "Farmacie online: +195% revenue din paid ads",
  "Hypermarket: 4.9x ROAS mediu",
];

// ─── Objection cards ──────────────────────────────────────────────────────────

interface ObjectionCard {
  front: string;
  back: string;
  icon: string;
}

const OBJECTION_CARDS: ObjectionCard[] = [
  {
    front: "Nu știm dacă merită",
    back: "ROI mediu 4.2x în primele 90 de zile. Calculăm împreună breakeven-ul înainte să semnăm orice contract.",
    icon: "❓",
  },
  {
    front: "Avem deja un specialist intern",
    back: "Specialist intern: €2.500–3.500/lună + beneficii, acoperă 1-2 platforme. Echipa Nesco: toate platformele, fără costuri fixe, experiență pe €36M+ bugete.",
    icon: "👤",
  },
  {
    front: "Am mai încercat și n-a mers",
    back: "Oferim audit gratuit al contului existent. Identificăm exact ce a mers prost și prezentăm un plan concret înainte de orice colaborare.",
    icon: "🔄",
  },
];

// ─── Animated counter hook ────────────────────────────────────────────────────

function useCounterAnimation(
  target: number,
  duration: number,
  isActive: boolean
): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    let startTime: number | null = null;
    const start = 0;

    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(start + (target - start) * eased));
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [isActive, target, duration]);

  return count;
}

// ─── Stats row ────────────────────────────────────────────────────────────────

interface StatItem {
  prefix: string;
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}

const STATS: StatItem[] = [
  { prefix: "+€", value: 36, suffix: "M", label: "Buget administrat" },
  { prefix: "+", value: 23000, suffix: "", label: "Campanii executate" },
  { prefix: "+", value: 4.2, suffix: "x", label: "ROAS mediu", decimals: 1 },
  { prefix: "+", value: 500, suffix: "", label: "Clienți" },
];

function StatCounter({ stat, isActive }: { stat: StatItem; isActive: boolean }) {
  const integerTarget = stat.decimals ? Math.round(stat.value * 10) : stat.value;
  const rawCount = useCounterAnimation(integerTarget, 1800, isActive);
  const displayValue = stat.decimals
    ? (rawCount / 10).toFixed(stat.decimals)
    : rawCount.toLocaleString("ro-RO");

  return (
    <div style={{ textAlign: "center" }}>
      <div
        className="font-black tabular-nums"
        style={{
          fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
          lineHeight: 1,
          color: "#56db84",
          letterSpacing: "-0.03em",
          marginBottom: "12px",
        }}
      >
        {stat.prefix}{displayValue}{stat.suffix}
      </div>
      <div
        style={{
          fontSize: "0.9375rem",
          color: "rgba(255,255,255,0.4)",
          lineHeight: 1.5,
        }}
      >
        {stat.label}
      </div>
    </div>
  );
}

// ─── 3D Tilt card ─────────────────────────────────────────────────────────────

function TiltCard({ card }: { card: PlatformCard }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dx * 8, y: -dy * 8 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  }, []);

  return (
    <Link
      ref={cardRef}
      href={card.href}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "32px",
        background: "#0a0a0a",
        border: `1px solid ${hovered ? `${card.accentColor}30` : "rgba(255,255,255,0.06)"}`,
        borderRadius: "20px",
        textDecoration: "none",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        transition: "transform 0.15s ease, border-color 0.2s ease, box-shadow 0.2s ease",
        boxShadow: hovered
          ? `0 20px 60px ${card.accentColor}15, 0 0 0 1px ${card.accentColor}20`
          : "none",
      }}
    >
      {/* Glow overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 50% 0%, ${card.accentColor}08 0%, transparent 60%)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
        }}
      />

      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px", flexShrink: 0, position: "relative" }}>
        {card.icon}
      </div>

      <h3
        className="font-bold"
        style={{
          fontSize: "1.0625rem",
          letterSpacing: "-0.01em",
          marginBottom: "10px",
          textAlign: "center",
          color: hovered ? "#56db84" : "#ffffff",
          transition: "color 0.2s ease",
          position: "relative",
        }}
      >
        {card.label}
      </h3>

      <p
        style={{
          fontSize: "0.875rem",
          color: "rgba(255,255,255,0.4)",
          lineHeight: 1.65,
          flex: 1,
          textAlign: "center",
          position: "relative",
        }}
      >
        {card.desc}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: hovered ? "10px" : "6px",
          marginTop: "20px",
          fontSize: "0.8125rem",
          fontWeight: 600,
          color: "#56db84",
          transition: "gap 0.2s ease",
          position: "relative",
        }}
      >
        Detalii <ArrowRight size={13} />
      </div>
    </Link>
  );
}

// ─── Budget flow step ──────────────────────────────────────────────────────────

function FlowStep({
  label,
  sublabel,
  index,
  isLast,
}: {
  label: string;
  sublabel: string;
  index: number;
  isLast: boolean;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", flex: isLast ? "0 0 auto" : 1 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
        {/* Node */}
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "rgba(86,219,132,0.1)",
            border: "1px solid rgba(86,219,132,0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "#56db84",
            flexShrink: 0,
            animation: `flowPulse ${2 + index * 0.5}s ease-in-out infinite`,
          }}
        >
          {index + 1}
        </div>
        <div style={{ textAlign: "center" }}>
          <div
            className="font-bold"
            style={{ fontSize: "0.9375rem", color: "#fff", marginBottom: "4px", whiteSpace: "nowrap" }}
          >
            {label}
          </div>
          <div
            style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", whiteSpace: "nowrap" }}
          >
            {sublabel}
          </div>
        </div>
      </div>

      {/* Arrow connector */}
      {!isLast && (
        <div
          style={{
            flex: 1,
            height: "2px",
            margin: "0 12px",
            marginBottom: "44px",
            background: "linear-gradient(90deg, rgba(86,219,132,0.5), rgba(86,219,132,0.1))",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "-60%",
              width: "60%",
              height: "100%",
              background: "linear-gradient(90deg, transparent, #56db84, transparent)",
              animation: `flowArrow ${2 + index * 0.3}s ease-in-out infinite`,
            }}
          />
        </div>
      )}
    </div>
  );
}

// ─── Objection card ────────────────────────────────────────────────────────────

function ObjectionCard({ card }: { card: ObjectionCard }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      style={{
        padding: "32px",
        background: "#0a0a0a",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "20px",
        cursor: "default",
        transition: "border-color 0.25s ease, box-shadow 0.25s ease",
        borderColor: expanded ? "rgba(86,219,132,0.25)" : "rgba(255,255,255,0.06)",
        boxShadow: expanded ? "0 0 40px rgba(86,219,132,0.06)" : "none",
      }}
    >
      <div style={{ fontSize: "2rem", marginBottom: "16px" }}>{card.icon}</div>
      <h3
        className="font-bold"
        style={{
          fontSize: "1.0625rem",
          color: "#ffffff",
          letterSpacing: "-0.01em",
          marginBottom: "12px",
        }}
      >
        {card.front}
      </h3>
      <div
        style={{
          fontSize: "0.875rem",
          color: "rgba(255,255,255,0.45)",
          lineHeight: 1.7,
          maxHeight: expanded ? "200px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.4s ease, opacity 0.3s ease",
          opacity: expanded ? 1 : 0,
        }}
      >
        {card.back}
      </div>
      <div
        style={{
          fontSize: "0.75rem",
          color: expanded ? "transparent" : "rgba(86,219,132,0.6)",
          marginTop: "8px",
          transition: "color 0.2s ease",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        Hover pentru răspuns
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function ReclamePlatitePage() {
  // Particles client-only
  const [particles, setParticles] = useState<Particle[]>([]);
  useEffect(() => {
    setParticles(generateParticles(20));
  }, []);

  // Metrics ticker
  const [tickerIndex, setTickerIndex] = useState(0);
  const [tickerVisible, setTickerVisible] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setTickerVisible(false);
      setTimeout(() => {
        setTickerIndex((i) => (i + 1) % TICKER_STATS.length);
        setTickerVisible(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Stats counter intersection
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsActive, setStatsActive] = useState(false);
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const divider = (
    <div
      className="absolute top-0 left-0 right-0 h-px"
      style={{
        background:
          "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
      }}
    />
  );

  return (
    <>
      {/* ── Keyframes injected inline ── */}
      <style>{`
        @keyframes floatUp {
          0%   { transform: translateY(0) scale(1);   opacity: var(--op); }
          50%  { transform: translateY(-40px) scale(1.15); opacity: calc(var(--op) * 0.6); }
          100% { transform: translateY(-80px) scale(0.8);  opacity: 0; }
        }
        @keyframes tickerFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes flowPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(86,219,132,0.3); }
          50%       { box-shadow: 0 0 0 8px rgba(86,219,132,0); }
        }
        @keyframes flowArrow {
          0%   { left: -60%; }
          100% { left: 110%; }
        }
      `}</style>

      <Header locale="ro" />

      <main style={{ backgroundColor: "#050505" }}>

        {/* ══ SECTION 1 HERO ══════════════════════════════════════════════════ */}
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#050505",
            paddingTop: "140px",
            paddingBottom: "100px",
          }}
        >
          {/* Particles */}
          {particles.map((p) => (
            <div
              key={p.id}
              style={{
                position: "absolute",
                bottom: 0,
                left: `${p.left}%`,
                width: p.size,
                height: p.size,
                borderRadius: "50%",
                backgroundColor: "#56db84",
                ["--op" as string]: p.opacity,
                opacity: p.opacity,
                animation: `floatUp ${p.duration}s ${p.delay}s ease-in-out infinite`,
                pointerEvents: "none",
              }}
            />
          ))}

          {/* Background glow blobs */}
          <div
            style={{
              position: "absolute",
              top: "-20%",
              right: "-10%",
              width: 700,
              height: 700,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(86,219,132,0.06) 0%, transparent 70%)",
              animation: "heroGlow 14s ease-in-out infinite",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "-10%",
              left: "-5%",
              width: 500,
              height: 500,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(86,219,132,0.03) 0%, transparent 70%)",
              animation: "heroGlow 18s ease-in-out infinite reverse",
              pointerEvents: "none",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: 128,
              background: "linear-gradient(to top, #050505, transparent)",
              pointerEvents: "none",
            }}
          />

          <div className="relative page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* LEFT -- all existing hero content */}
              <div>
                <span className="badge mb-6" style={{ display: "inline-flex" }}>
                  Reclame Plătite
                </span>

                <h1
                  className="font-black"
                  style={{
                    fontSize: "clamp(3rem, 7vw, 5rem)",
                    lineHeight: 0.92,
                    letterSpacing: "-0.03em",
                    fontFeatureSettings: '"kern" 1, "liga" 1',
                    marginTop: "16px",
                    marginBottom: "28px",
                    maxWidth: "820px",
                    color: "#ffffff",
                  }}
                >
                  Reclame plătite care generează{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #56db84 0%, #34c46a 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    revenue real.
                  </span>
                </h1>

                <p
                  style={{
                    fontSize: "1.0625rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    maxWidth: "560px",
                    letterSpacing: "0.01em",
                    marginBottom: "40px",
                  }}
                >
                  Nu gestionăm doar bugete de ads. Construim sisteme de achiziție profitabile pe
                  Google, Meta, TikTok și LinkedIn. Iar dacă nu există premise reale de scalare, spunem asta direct.
                </p>

                {/* CTAs */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "48px" }}>
                  <Link
                    href={r.contact}
                    className="group inline-flex items-center gap-3 btn-primary"
                    style={{ fontSize: "1rem", padding: "18px 40px" }}
                  >
                    Vorbește cu un specialist
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </Link>
                  <Link
                    href="#platforme"
                    className="group inline-flex items-center gap-3 btn-ghost"
                    style={{ fontSize: "1rem", padding: "18px 32px" }}
                  >
                    Vezi platformele
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </Link>
                </div>

                {/* Live metrics ticker */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0,
                    background: "rgba(10,10,10,0.8)",
                    border: "1px solid rgba(86,219,132,0.2)",
                    borderRadius: "10px",
                    overflow: "hidden",
                    backdropFilter: "blur(12px)",
                    maxWidth: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "10px 16px",
                      borderRight: "1px solid rgba(86,219,132,0.15)",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        backgroundColor: "#56db84",
                        flexShrink: 0,
                        boxShadow: "0 0 6px rgba(86,219,132,0.8)",
                        animation: "mobileGlowPulse 2s ease-in-out infinite",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#56db84",
                      }}
                    >
                      LIVE
                    </span>
                  </div>
                  <div
                    style={{
                      padding: "10px 20px",
                      minWidth: 260,
                    }}
                  >
                    <span
                      key={tickerIndex}
                      style={{
                        fontSize: "0.8125rem",
                        color: "rgba(255,255,255,0.75)",
                        fontWeight: 500,
                        display: "block",
                        opacity: tickerVisible ? 1 : 0,
                        transform: tickerVisible ? "translateY(0)" : "translateY(6px)",
                        transition: "opacity 0.3s ease, transform 0.3s ease",
                      }}
                    >
                      {TICKER_STATS[tickerIndex]}
                    </span>
                  </div>
                </div>
              </div>
              {/* RIGHT -- dashboard mockup, desktop only */}
              <div className="hidden lg:flex lg:items-center lg:justify-center">
                <AdsDashboardMockup locale="ro" />
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 2 STATS ROW ══════════════════════════════════════════════ */}
        <section
          style={{ position: "relative", backgroundColor: "#050505", padding: "100px 0" }}
        >
          {divider}
          <div className="page-container" ref={statsRef}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {STATS.map((stat, i) => (
                <StatCounter key={i} stat={stat} isActive={statsActive} />
              ))}
            </div>
          </div>
        </section>

        {/* ══ SECTION 3 3D PLATFORM CARDS ════════════════════════════════════ */}
        <section
          id="platforme"
          style={{ position: "relative", backgroundColor: "#050505", padding: "100px 0" }}
        >
          {divider}
          <div className="page-container">
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="badge mb-6" style={{ display: "inline-flex" }}>
                Platforme
              </span>
              <h2
                className="font-black text-white"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  marginTop: "20px",
                }}
              >
                Platforme pe care le gestionăm
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: "rgba(255,255,255,0.4)",
                  marginTop: "16px",
                  maxWidth: "480px",
                  margin: "16px auto 0",
                  lineHeight: 1.7,
                }}
              >
                Expertiză certificată pe toate canalele de paid media relevante
                pentru piața românească și internațională.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {PLATFORM_CARDS.map((card) => (
                <TiltCard key={card.label} card={card} />
              ))}
            </div>
          </div>
        </section>

        {/* ══ SECTION 4 BUDGET FLOW DIAGRAM ══════════════════════════════════ */}
        <section
          style={{ position: "relative", backgroundColor: "#050505", padding: "100px 0" }}
        >
          {divider}
          <div className="page-container">
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="badge mb-6" style={{ display: "inline-flex" }}>
                Procesul Nostru
              </span>
              <h2
                className="font-black text-white"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  marginTop: "20px",
                }}
              >
                Cum transformăm bugetul în revenue
              </h2>
            </div>

            {/* Desktop flow */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: "40px",
                background: "#0a0a0a",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "20px",
                overflowX: "auto",
              }}
            >
              {[
                { label: "Buget", sublabel: "Input lunar" },
                { label: "Strategie", sublabel: "Segmentare & creative" },
                { label: "Campanii", sublabel: "Optimizare continuă" },
                { label: "Conversii", sublabel: "Lead / Vânzare" },
                { label: "Revenue", sublabel: "ROI măsurabil" },
              ].map((step, i, arr) => (
                <FlowStep
                  key={step.label}
                  label={step.label}
                  sublabel={step.sublabel}
                  index={i}
                  isLast={i === arr.length - 1}
                />
              ))}
            </div>

            {/* Supporting detail cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5" style={{ marginTop: "32px" }}>
              {[
                {
                  title: "Audit & Setup",
                  desc: "Analizăm contul existent (dacă există) și construim structura optimă de campanii.",
                  duration: "Săptămâna 1",
                },
                {
                  title: "Optimizare Continuă",
                  desc: "Ajustări zilnice bazate pe date reale: bid management, A/B testing, audiențe.",
                  duration: "Ongoing",
                },
                {
                  title: "Raportare Transparentă",
                  desc: "Dashboard live cu toți KPI-ii relevanți. Fără jargon, fără date ascunse.",
                  duration: "Lunar + Ad-hoc",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    padding: "24px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "16px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#56db84",
                      marginBottom: "10px",
                    }}
                  >
                    {item.duration}
                  </div>
                  <h3
                    className="font-bold text-white"
                    style={{ fontSize: "0.9375rem", marginBottom: "8px" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      color: "rgba(255,255,255,0.35)",
                      lineHeight: 1.65,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SECTION 5 SOCIAL PROOF MARQUEE ════════════════════════════════ */}
        <section
          style={{ position: "relative", backgroundColor: "#050505", padding: "80px 0", overflow: "hidden" }}
        >
          {divider}
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span className="badge" style={{ display: "inline-flex" }}>
              Rezultate clienți
            </span>
          </div>

          {/* Fade masks */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: 120,
              background: "linear-gradient(to right, #050505, transparent)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              width: 120,
              background: "linear-gradient(to left, #050505, transparent)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          <div style={{ overflow: "hidden" }}>
            <div
              style={{
                display: "flex",
                width: "max-content",
                animation: "marquee 28s linear infinite",
              }}
            >
              {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "0 36px",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      backgroundColor: "#56db84",
                      flexShrink: 0,
                      opacity: 0.7,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.55)",
                      fontWeight: 500,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SECTION 6 OBJECTION CARDS ══════════════════════════════════════ */}
        <section
          style={{ position: "relative", backgroundColor: "#050505", padding: "100px 0" }}
        >
          {divider}
          <div className="page-container">
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="badge mb-6" style={{ display: "inline-flex" }}>
                De ce Nesco
              </span>
              <h2
                className="font-black text-white"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  marginTop: "20px",
                }}
              >
                Răspunsuri la obiecțiile reale
              </h2>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "rgba(255,255,255,0.35)",
                  marginTop: "16px",
                }}
              >
                Hover pe fiecare card pentru a vedea răspunsul.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {OBJECTION_CARDS.map((card) => (
                <ObjectionCard key={card.front} card={card} />
              ))}
            </div>
          </div>
        </section>

      </main>

      <CtaBanner locale="ro" />
      <Footer locale="ro" />
    </>
  );
}
