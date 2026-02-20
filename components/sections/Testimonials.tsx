"use client";
import { Star, Quote } from "lucide-react";
import { type Locale, t } from "@/lib/translations";

interface TestimonialsProps {
  locale: Locale;
}

const testimonials = [
  {
    name: "Alexandru M.",
    role: "CEO, E-commerce Fashion Brand",
    content:
      "Nesco Digital transformed our online presence. In 12 months we went from struggling to break even to generating 400% more revenue. Their Google Ads and CRO work is exceptional.",
    rating: 5,
    metric: "400% revenue growth",
  },
  {
    name: "Maria P.",
    role: "Marketing Director, SaaS Platform",
    content:
      "Professional team, data-driven approach, and real results. Our cost per lead dropped by 30% in the first 3 months. I highly recommend Nesco Digital to any serious business.",
    rating: 5,
    metric: "30% lower CPL",
  },
  {
    name: "Thomas K.",
    role: "Owner, Dental Clinic (München)",
    content:
      "Wir haben unser Lead-Volumen in 6 Monaten um 50% gesteigert. Das Team versteht sowohl den deutschen Markt als auch digitales Marketing sehr gut.",
    rating: 5,
    metric: "+50% patient leads",
  },
  {
    name: "Cristian V.",
    role: "Founder, B2B Software Company",
    content:
      "Am ajuns la un ROI de 5x in 9 luni. Strategia de SEO si performance marketing construita de Nesco este exact ce aveam nevoie pentru a scala afacerea.",
    rating: 5,
    metric: "5x ROI",
  },
  {
    name: "Sarah L.",
    role: "E-commerce Manager, Sports Equipment",
    content:
      "The Shopify store they built converts at 40% better than our old site. Combined with their Facebook Ads expertise, we hit record sales every month.",
    rating: 5,
    metric: "+40% conversion rate",
  },
  {
    name: "Radu T.",
    role: "Director, IT Services Company",
    content:
      "Echipa Nesco a livrat exact ce a promis, un site de lead generation si campanii care aduc clienti calificati. CRM-ul integrat ne-a schimbat procesul de vanzari.",
    rating: 5,
    metric: "+47% quote requests",
  },
];

export function Testimonials({ locale }: TestimonialsProps) {
  const tr = t(locale);

  return (
    <section className="section relative" style={{ backgroundColor: "#050505" }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
      />

      <div className="page-container">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="badge mb-6">{tr.testimonials.badge}</span>
          <h2
            className="font-black text-white"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              fontFeatureSettings: '"kern" 1, "liga" 1',
              marginTop: "20px",
            }}
          >
            {tr.testimonials.headline}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="group card-hover flex flex-col"
              style={{
                padding: "32px",
                background: "#0a0a0a",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "16px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top accent line on hover */}
              <div
                className="absolute top-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, transparent, rgba(86,219,132,0.4), transparent)" }}
              />

              {/* Metric badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "5px 12px",
                  background: "rgba(86,219,132,0.07)",
                  border: "1px solid rgba(86,219,132,0.15)",
                  borderRadius: "9999px",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#56db84",
                  letterSpacing: "0.03em",
                  marginBottom: "16px",
                }}
              >
                {t.metric}
              </div>

              {/* Quote icon + Stars row */}
              <div className="flex items-center justify-between mb-5">
                <Quote
                  size={18}
                  style={{ color: "rgba(86,219,132,0.25)", flexShrink: 0 }}
                />
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={13} style={{ color: "#ffffff", fill: "#ffffff" }} />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p
                className="flex-1 mb-6"
                style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}
              >
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, rgba(86,219,132,0.2), rgba(86,219,132,0.06))",
                    border: "1px solid rgba(86,219,132,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: "#56db84",
                    flexShrink: 0,
                  }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#fff" }}>{t.name}</div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", marginTop: "1px" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
