"use client";
import Link from "next/link";
import { ArrowRight, Megaphone, Globe, BarChart3 } from "lucide-react";
import { type Locale, t } from "@/lib/translations";
import { routes } from "@/lib/routes";

interface ServicesGridProps {
  locale: Locale;
}

export function ServicesGrid({ locale }: ServicesGridProps) {
  const tr = t(locale);
  const r = routes[locale];

  const services = [
    {
      icon: Megaphone,
      category: locale === "ro" ? "Reclame Plătite" : locale === "en" ? "Paid Ads" : "Bezahlte Anzeigen",
      items: [
        { label: "Google Ads", href: r.googleAds },
        { label: "Facebook Ads", href: r.facebookAds },
        { label: "Instagram Ads", href: r.instagramAds },
        { label: "TikTok Ads", href: r.tiktokAds },
        { label: "LinkedIn Ads", href: r.linkedinAds },
      ],
      accentColor: "rgba(96,165,250,0.12)",
      accentBorder: "rgba(96,165,250,0.2)",
      iconColor: "#60a5fa",
    },
    {
      icon: Globe,
      category: "Webdesign",
      items: [
        { label: locale === "ro" ? "Lead Generation" : "Lead Generation", href: r.leadGenWebsite },
        { label: locale === "ro" ? "Website Companie" : locale === "en" ? "Company Website" : "Unternehmens-Website", href: r.companyWebsite },
        { label: locale === "ro" ? "Magazine Online" : locale === "en" ? "E-commerce" : "E-Commerce", href: r.ecommerceStores },
        { label: locale === "ro" ? "Mentenanță" : locale === "en" ? "Maintenance" : "Wartung", href: r.websiteMaintenance },
      ],
      accentColor: "rgba(167,139,250,0.12)",
      accentBorder: "rgba(167,139,250,0.2)",
      iconColor: "#a78bfa",
    },
    {
      icon: BarChart3,
      category: locale === "ro" ? "Marketing Digital" : locale === "en" ? "Digital Marketing" : "Digitales Marketing",
      items: [
        { label: locale === "ro" ? "Strategie Digitală" : locale === "en" ? "Digital Strategy" : "Digitale Strategie", href: r.digitalStrategy },
        { label: "Email Marketing", href: r.emailMarketing },
        { label: "CRM Solutions", href: r.crmSolutions },
        { label: "CRO Solutions", href: r.croSolutions },
        { label: "SEO", href: r.seoSolutions },
        { label: "Social Media", href: r.socialMedia },
      ],
      accentColor: "rgba(86,219,132,0.08)",
      accentBorder: "rgba(86,219,132,0.2)",
      iconColor: "#56db84",
    },
  ];

  return (
    <section className="section relative" style={{ backgroundColor: "#050505" }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
      />

      <div className="page-container">
        {/* Header */}
        <div>
          <span className="badge mb-6">{tr.services.badge}</span>
          <h2
            className="font-black text-white"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              fontFeatureSettings: '"kern" 1, "liga" 1',
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            {tr.services.headline}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1rem", lineHeight: 1.7, letterSpacing: "0.01em", maxWidth: "36rem" }}>
            {tr.services.subheadline}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group card-hover"
                style={{
                  padding: "36px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "20px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Hover gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 30% 20%, ${service.accentColor}, transparent 70%)` }}
                />

                <div className="relative">
                  {/* Icon + Category */}
                  <div className="flex items-center gap-4 mb-8">
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "12px",
                        background: "rgba(255,255,255,0.04)",
                        border: `1px solid ${service.accentBorder}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={20} style={{ color: service.iconColor }} />
                    </div>
                    <h3
                      className="font-bold text-white"
                      style={{ fontSize: "1.0625rem", letterSpacing: "-0.01em" }}
                    >
                      {service.category}
                    </h3>
                  </div>

                  {/* Service items */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    {service.items.map((item, iidx) => (
                      <Link
                        key={iidx}
                        href={item.href}
                        className="group/item flex items-center justify-between"
                        style={{
                          padding: "10px 12px",
                          borderRadius: "8px",
                          transition: "background 0.15s ease",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.04)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
                      >
                        <span
                          style={{
                            fontSize: "0.875rem",
                            color: "rgba(255,255,255,0.45)",
                            transition: "color 0.15s ease",
                          }}
                          className="group-hover/item:text-white"
                        >
                          {item.label}
                        </span>
                        <ArrowRight
                          size={12}
                          className="opacity-0 group-hover/item:opacity-100 transition-opacity"
                          style={{ color: service.iconColor, flexShrink: 0 }}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
