import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { type Locale } from "@/lib/translations";
import { routes } from "@/lib/routes";
import { FadeInSection } from "@/components/ui/FadeInSection";

export interface HubService {
  label: string;
  desc: string;
  href: string;
  accent: string;
}

export interface HubPageData {
  locale: Locale;
  badge: string;
  title: string;
  subtitle: string;
  services: HubService[];
}

interface HubPageProps {
  data: HubPageData;
}

export function HubPageTemplate({ data }: HubPageProps) {
  const { locale, badge, title, subtitle, services } = data;
  const r = routes[locale];
  const homeLabel = locale === "ro" ? "Acasă" : locale === "de" ? "Startseite" : "Home";
  const allServicesLabel =
    locale === "ro"
      ? "Vezi toate serviciile"
      : locale === "de"
      ? "Alle Leistungen ansehen"
      : "View all services";

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#050505", paddingTop: "140px", paddingBottom: "100px" }}
      >
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-20%", right: "-10%",
            width: 700, height: 700, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(86,219,132,0.06) 0%, transparent 70%)",
            animation: "heroGlow 14s ease-in-out infinite",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-10%", left: "-5%",
            width: 500, height: 500, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(86,219,132,0.03) 0%, transparent 70%)",
            animation: "heroGlow 18s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to top, #050505, transparent)" }}
        />
        <div className="relative page-container">
          <Link href={r.home} className="badge mb-6" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
            ← {homeLabel}
          </Link>
          <h1
            className="font-black"
            style={{
              fontSize: "clamp(3rem, 7vw, 5rem)",
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              fontFeatureSettings: '"kern" 1, "liga" 1',
              marginTop: "16px",
              marginBottom: "28px",
              maxWidth: "800px",
              background: "linear-gradient(135deg, #ffffff 20%, #56db84 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {title}
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
            {subtitle}
          </p>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
        />
        <div className="page-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, idx) => (
              <FadeInSection key={idx} delay={idx * 80}>
                <Link
                  href={svc.href}
                  className="group card-hover block"
                  style={{
                    padding: "32px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "20px",
                    textDecoration: "none",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      width: 44, height: 44, borderRadius: "12px",
                      background: `${svc.accent}18`,
                      border: `1px solid ${svc.accent}28`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: "20px",
                      flexShrink: 0,
                    }}
                  >
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: svc.accent }} />
                  </div>
                  <h2
                    className="font-bold text-white group-hover:text-brand-green transition-colors"
                    style={{ fontSize: "1.0625rem", letterSpacing: "-0.01em", marginBottom: "10px" }}
                  >
                    {svc.label}
                  </h2>
                  <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.65, flex: 1 }}>
                    {svc.desc}
                  </p>
                  <div
                    className="flex items-center gap-1.5 mt-5 font-semibold group-hover:gap-2.5 transition-all"
                    style={{ fontSize: "0.8125rem", color: svc.accent }}
                  >
                    {allServicesLabel}
                    <ArrowRight size={13} />
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CtaBanner locale={locale} />
    </>
  );
}
