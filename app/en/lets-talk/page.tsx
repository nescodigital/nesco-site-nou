import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { ContactForm } from "@/components/sections/ContactForm";
import { buildMetadata, buildWebPageSchema } from "@/lib/seo";
import { MapPin, Clock, CheckCircle } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Let's Talk | Schedule a Free Discovery Call | Nesco Digital",
  description: "Ready to grow your business? Schedule a free discovery call. We'll analyze your situation and present a concrete action plan within 24 hours.",
  path: "/en/lets-talk/",
  routeKey: "contact",
});

export default function LetsTalkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildWebPageSchema({ url: "https://nescodigital.com/en/lets-talk/", title: "Let's Talk | Nesco Digital" })) }}
      />
      <Header locale="en" />
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
                <span className="badge mb-6">Initial Consultation</span>
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
                  Let&apos;s get to{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #fff 0%, #56db84 60%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    know each other.
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
                  Do you have a new project or want to grow your business? Fill out the form and we&apos;ll get back to you quickly.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px" }}>
                  {[
                    { icon: Clock, text: "Response within 24 hours" },
                    { icon: CheckCircle, text: "Dedicated analysis of your situation" },
                    { icon: CheckCircle, text: "We work with companies serious about growth" },
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
                    gap: "8px",
                  }}
                >
                  {[
                    { label: "Bucharest · Str. Argentina 25", dimmed: false },
                    { label: "Munich · Maximilianstraße 13", dimmed: false },
                    { label: "London (2026)", dimmed: true },
                  ].map(({ label, dimmed }) => (
                    <div key={label} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <MapPin size={13} style={{ color: dimmed ? "rgba(86,219,132,0.35)" : "#56db84", flexShrink: 0 }} />
                      <span style={{ color: dimmed ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.4)", fontSize: "0.8125rem" }}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right, Form */}
              <FadeInSection delay={150}>
                <ContactForm locale="en" />
              </FadeInSection>

            </div>
          </div>
        </section>

      </main>
      <Footer locale="en" />
    </>
  );
}
