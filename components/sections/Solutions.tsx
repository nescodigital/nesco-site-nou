"use client";
import { TrendingUp, Users, Star, Map, ArrowRight } from "lucide-react";
import Link from "next/link";
import { type Locale, t } from "@/lib/translations";
import { routes } from "@/lib/routes";

const iconMap = {
  "trending-up": TrendingUp,
  users: Users,
  star: Star,
  map: Map,
};

interface SolutionsProps {
  locale: Locale;
}

export function Solutions({ locale }: SolutionsProps) {
  const tr = t(locale);
  const s = tr.solutions;
  const r = routes[locale];

  return (
    <section className="section relative" style={{ backgroundColor: "#050505", paddingBottom: "4rem" }}>
      {/* Subtle top gradient separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
      />

      <div className="page-container">
        {/* Header */}
        <div>
          <span className="badge mb-6">{s.badge}</span>
          <h2
            className="font-black text-white mb-5"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              fontFeatureSettings: '"kern" 1, "liga" 1',
              marginTop: "20px",
            }}
          >
            {s.headline}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pb-16">
          {s.items.map((item, idx) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || TrendingUp;
            return (
              <Link
                key={idx}
                href={r.contact}
                className="group relative flex flex-col card-hover"
                style={{
                  padding: "32px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                  minHeight: "240px",
                  textDecoration: "none",
                  overflow: "hidden",
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(86,219,132,0.5), transparent)" }}
                />

                {/* Icon */}
                <div
                  className="flex items-center justify-center mb-6 group-hover:bg-brand-green/15 transition-colors duration-200"
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "12px",
                    background: "rgba(86,219,132,0.08)",
                    border: "1px solid rgba(86,219,132,0.15)",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} className="text-brand-green" />
                </div>

                {/* Content */}
                <h3
                  className="text-white font-bold mb-3 leading-snug"
                  style={{ fontSize: "1.0625rem", letterSpacing: "-0.01em" }}
                >
                  {item.title}
                </h3>
                <p
                  className="flex-1"
                  style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.65 }}
                >
                  {item.desc}
                </p>

                {/* CTA */}
                <div
                  className="flex items-center gap-1.5 mt-6"
                  style={{ fontSize: "0.8125rem", color: "#56db84", fontWeight: 600 }}
                >
                  {item.cta}
                  <ArrowRight
                    size={13}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
