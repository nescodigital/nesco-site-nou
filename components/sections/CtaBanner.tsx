"use client";
import { useState } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { type Locale, t } from "@/lib/translations";
import { ContactPopup } from "../ContactPopup";

interface CtaBannerProps {
  locale: Locale;
}

export function CtaBanner({ locale }: CtaBannerProps) {
  const tr = t(locale);
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <section
      className="relative overflow-hidden"
      style={{ padding: "160px 0", display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {/* Top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
      />

      {/* Radial background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(86,219,132,0.08) 0%, transparent 70%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "48rem",
          width: "100%",
          margin: "0 auto",
          textAlign: "center",
          padding: "0 2rem",
        }}
      >
        {/* Heading with glow behind it */}
        <div style={{ position: "relative", marginBottom: "24px" }}>
          <div
            className="absolute pointer-events-none"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              height: "160%",
              background: "radial-gradient(ellipse at center, rgba(86,219,132,0.15) 0%, transparent 70%)",
              filter: "blur(24px)",
              zIndex: 0,
            }}
          />
          <h2
            className="font-black text-white"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              fontFeatureSettings: '"kern" 1, "liga" 1',
              position: "relative",
              zIndex: 1,
            }}
          >
            {tr.cta.headline}
          </h2>
        </div>

        <p
          style={{
            fontSize: "1.0625rem",
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.7,
            letterSpacing: "0.01em",
            marginBottom: "48px",
            maxWidth: "480px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {tr.cta.subheadline}
        </p>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: "64px" }}>
          <button
            onClick={() => setPopupOpen(true)}
            className="group inline-flex items-center gap-3 btn-primary"
            style={{ fontSize: "1rem", padding: "18px 40px", border: "none", cursor: "pointer" }}
          >
            <Calendar size={18} />
            {tr.cta.cta}
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {popupOpen && (
          <ContactPopup
            source="cta-banner"
            locale={locale}
            onClose={() => setPopupOpen(false)}
          />
        )}

        {/* Trust badges */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.3)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          {[
            locale === "ro" ? "Răspuns în 24h" : locale === "en" ? "Response in 24h" : "Antwort in 24h",
            locale === "ro" ? "Analiză gratuită" : locale === "en" ? "Free analysis" : "Kostenlose Analyse",
            locale === "ro" ? "Fără angajament financiar" : locale === "en" ? "No financial commitment" : "Keine finanzielle Verpflichtung",
          ].map((badge) => (
            <span key={badge} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{ width: 5, height: 5, borderRadius: "50%", background: "#56db84", flexShrink: 0 }}
              />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
