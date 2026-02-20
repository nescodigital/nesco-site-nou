import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { ContactForm } from "@/components/sections/ContactForm";
import { buildMetadata, buildWebPageSchema } from "@/lib/seo";
import { MapPin, Mail, Clock, CheckCircle } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Contact | Programează un apel de discovery gratuit | Nesco Digital",
  description: "Gata să îți crești afacerea? Programează un apel gratuit. Analizăm situația ta și prezentăm un plan de acțiune concret în 24 de ore.",
  path: "/contact/",
  routeKey: "contact",
});

export default function ContactRoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildWebPageSchema({ url: "https://nescodigital.com/contact/", title: "Contact | Nesco Digital" })) }}
      />
      <Header locale="ro" />
      <main style={{ backgroundColor: "#050505" }}>

        {/* ── Hero ── */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#050505", paddingTop: "140px", paddingBottom: "100px" }}
        >
          <div className="absolute inset-0 bg-grid pointer-events-none" />
          <div
            className="absolute pointer-events-none"
            style={{
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: 700, height: 700, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(86,219,132,0.05) 0%, transparent 70%)",
              animation: "heroGlow 14s ease-in-out infinite",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{ background: "linear-gradient(to top, #050505, transparent)" }}
          />

          <div className="relative page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Left */}
              <div>
                <span className="badge mb-6">Apel de Discovery Gratuit</span>
                <h1
                  className="font-black text-white"
                  style={{
                    fontSize: "clamp(3rem, 6vw, 4.5rem)",
                    lineHeight: 0.92,
                    letterSpacing: "-0.03em",
                    fontFeatureSettings: '"kern" 1, "liga" 1',
                    marginTop: "16px",
                    marginBottom: "28px",
                  }}
                >
                  Hai să ne{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #fff 0%, #56db84 60%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    cunoaștem.
                  </span>
                </h1>
                <p
                  style={{
                    fontSize: "1.0625rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    letterSpacing: "0.01em",
                    marginBottom: "40px",
                    maxWidth: "480px",
                  }}
                >
                  Ai un proiect nou sau vrei să-ți crești afacerea? Completează formularul și îți răspundem rapid.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px" }}>
                  {[
                    { icon: Clock, text: "Răspuns în 24 de ore" },
                    { icon: CheckCircle, text: "Analiză gratuită a situației tale" },
                    { icon: CheckCircle, text: "Plan de acțiune concret, fără vorbe goale" },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <div
                          style={{
                            width: 28, height: 28, borderRadius: "9999px",
                            background: "rgba(86,219,132,0.08)",
                            border: "1px solid rgba(86,219,132,0.15)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <Icon size={13} style={{ color: "#56db84" }} />
                        </div>
                        <span style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.55)" }}>{item.text}</span>
                      </div>
                    );
                  })}
                </div>

                <div
                  style={{
                    paddingTop: "32px",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <MapPin size={15} style={{ color: "#56db84", marginTop: "2px", flexShrink: 0 }} />
                    <div>
                      <div style={{ color: "#ffffff", fontSize: "0.875rem", fontWeight: 600 }}>Birou București</div>
                      <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8125rem" }}>Str. Argentina 25, București, România</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <MapPin size={15} style={{ color: "#56db84", marginTop: "2px", flexShrink: 0 }} />
                    <div>
                      <div style={{ color: "#ffffff", fontSize: "0.875rem", fontWeight: 600 }}>Birou München</div>
                      <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8125rem" }}>Maximilianstraße 13, München, Germania</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <Mail size={15} style={{ color: "#56db84", flexShrink: 0 }} />
                    <a
                      href="mailto:hello@nescodigital.com"
                      style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.8125rem", textDecoration: "none" }}
                    >
                      hello@nescodigital.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Right — Form */}
              <FadeInSection delay={150}>
                <div
                  className="p-5 sm:p-10"
                  style={{
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "24px",
                    position: "relative",
                    overflow: "hidden",
                    maxWidth: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(86,219,132,0.3), transparent)" }}
                  />
                  <h2
                    className="font-bold text-white"
                    style={{ fontSize: "1.25rem", letterSpacing: "-0.01em", marginBottom: "28px" }}
                  >
                    Solicită o ofertă gratuită
                  </h2>
                  <ContactForm />
                </div>
              </FadeInSection>

            </div>
          </div>
        </section>

      </main>
      <Footer locale="ro" />
    </>
  );
}
