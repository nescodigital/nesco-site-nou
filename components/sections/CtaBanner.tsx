import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { type Locale, t } from "@/lib/translations";
import { routes } from "@/lib/routes";

interface CtaBannerProps {
  locale: Locale;
}

export function CtaBanner({ locale }: CtaBannerProps) {
  const tr = t(locale);
  const r = routes[locale];

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#050505", padding: "160px 0" }}
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

      {/* Centered logo watermark */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          opacity: 0.05,
          filter: "invert(1) hue-rotate(180deg) contrast(4)",
          mixBlendMode: "screen",
          zIndex: 0,
        }}
      >
        <Image
          src="/logo mare Nesco.avif"
          alt=""
          width={600}
          height={600}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>

      <div
        className="relative max-w-3xl mx-auto text-center px-8"
        style={{ zIndex: 1 }}
      >
        {/* Accent line */}
        <div
          className="mx-auto mb-12"
          style={{
            width: 48,
            height: 1,
            background: "linear-gradient(90deg, transparent, #56db84, transparent)",
          }}
        />

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

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link
            href={r.contact}
            className="group inline-flex items-center gap-3 btn-primary"
            style={{ fontSize: "1rem", padding: "18px 40px" }}
          >
            <Calendar size={18} />
            {tr.cta.cta}
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Trust badges */}
        <div
          className="flex flex-wrap items-center justify-center gap-8 mt-14"
          style={{
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
            locale === "ro" ? "Fără angajament" : locale === "en" ? "No commitment" : "Keine Verpflichtung",
          ].map((badge) => (
            <span key={badge} className="flex items-center gap-2">
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
