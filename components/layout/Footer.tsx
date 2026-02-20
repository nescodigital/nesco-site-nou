"use client";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, Facebook } from "lucide-react";
import { type Locale, t } from "@/lib/translations";
import { routes } from "@/lib/routes";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const tr = t(locale);
  const r = routes[locale];

  const serviceLinks = [
    { label: "Google Ads", href: r.googleAds },
    { label: "Facebook Ads", href: r.facebookAds },
    {
      label: locale === "ro" ? "Magazine Online" : locale === "en" ? "E-commerce Stores" : "E-Commerce-Shops",
      href: r.ecommerceStores,
    },
    {
      label: locale === "ro" ? "Website Lead Generation" : locale === "en" ? "Lead Generation Website" : "Lead-Generation-Website",
      href: r.leadGenWebsite,
    },
    { label: "Email Marketing", href: r.emailMarketing },
    { label: "CRO Solutions", href: r.croSolutions },
    { label: "SEO", href: r.seoSolutions },
    {
      label: locale === "ro" ? "Strategie Digitală" : locale === "en" ? "Digital Strategy" : "Digitale Strategie",
      href: r.digitalStrategy,
    },
  ];

  const companyLinks = [
    { label: tr.footer.about, href: r.about },
    {
      label: locale === "ro" ? "Proiecte" : locale === "en" ? "Projects" : "Projekte",
      href: r.projects,
    },
    { label: "Growth Sprint", href: r.growthSprintEducation },
  ];

  return (
    <footer
      style={{
        backgroundColor: "#050505",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        paddingTop: "80px",
        paddingBottom: "48px",
      }}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href={r.home} className="inline-flex mb-5">
              <Image
                src="https://i0.wp.com/nescodigital.com/wp-content/uploads/2024/09/nescodigital-logo-invert.png"
                alt="Nesco Digital"
                width={150}
                height={38}
                className="h-7 w-auto"
              />
            </Link>
            <p
              style={{
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.35)",
                lineHeight: 1.7,
                marginBottom: "24px",
                maxWidth: "220px",
              }}
            >
              {tr.footer.tagline}
            </p>
            <div className="flex gap-2">
              {[
                { href: "https://www.linkedin.com/company/nescodigital", Icon: Linkedin },
                { href: "https://www.instagram.com/nescodigital", Icon: Instagram },
                { href: "https://www.facebook.com/nescodigital", Icon: Facebook },
              ].map(({ href, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center transition-colors"
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.35)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "#56db84";
                    el.style.borderColor = "rgba(86,219,132,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "rgba(255,255,255,0.35)";
                    el.style.borderColor = "rgba(255,255,255,0.06)";
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontSize: "0.6875rem",
                fontWeight: 600,
                color: "rgba(255,255,255,0.25)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              {tr.footer.services}
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="animated-underline"
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.4)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.4)"; }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              style={{
                fontSize: "0.6875rem",
                fontWeight: 600,
                color: "rgba(255,255,255,0.25)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              {tr.footer.company}
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="animated-underline"
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.4)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.4)"; }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certified Partner + Awards */}
          <div>
            <h4
              style={{
                fontSize: "0.6875rem",
                fontWeight: 600,
                color: "rgba(255,255,255,0.25)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Certified Partner
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
              {[
                { src: "https://i0.wp.com/nescodigital.com/wp-content/uploads/2024/12/G-footer.png?w=1080&ssl=1", alt: "Google Partner" },
                { src: "https://i0.wp.com/nescodigital.com/wp-content/uploads/2024/12/M-footer.png?w=1080&ssl=1", alt: "Meta Partner" },
                { src: "https://i0.wp.com/nescodigital.com/wp-content/uploads/2024/12/T-footer.png?w=1080&ssl=1", alt: "TikTok Partner" },
                { src: "https://i0.wp.com/nescodigital.com/wp-content/uploads/2024/12/S-footer.png?w=1080&ssl=1", alt: "Shopify Partner" },
                { src: "https://i0.wp.com/nescodigital.com/wp-content/uploads/2024/12/W-footer.png?w=1080&ssl=1", alt: "WooCommerce Partner" },
                { src: "https://i0.wp.com/nescodigital.com/wp-content/uploads/2024/12/K-footer.png?w=1080&ssl=1", alt: "Klaviyo Partner" },
                { src: "https://i0.wp.com/nescodigital.com/wp-content/uploads/2024/12/Y-footer.png?w=1080&ssl=1", alt: "Partner" },
              ].map(({ src, alt }) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={alt}
                  src={src}
                  alt={alt}
                  width={80}
                  height={32}
                  style={{ height: 32, width: "auto", objectFit: "contain", opacity: 0.75, filter: "brightness(1.2)" }}
                />
              ))}
            </div>

            <h4
              style={{
                fontSize: "0.6875rem",
                fontWeight: 600,
                color: "rgba(255,255,255,0.25)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Member Of
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px" }}>
              <a href="https://clutch.co/profile/nesco-digital" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.65, transition: "opacity 0.2s" }} onMouseEnter={e => (e.currentTarget.style.opacity = "1")} onMouseLeave={e => (e.currentTarget.style.opacity = "0.65")}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://i0.wp.com/nescodigital.com/wp-content/uploads/2021/04/New-Clutch-Tagline-white.png?w=1080&ssl=1" alt="Clutch" height={36} style={{ height: 36, width: "auto", objectFit: "contain" }} />
              </a>
              <a href="https://digitalagencynetwork.com/agencies/bucharest" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.65, transition: "opacity 0.2s" }} onMouseEnter={e => (e.currentTarget.style.opacity = "1")} onMouseLeave={e => (e.currentTarget.style.opacity = "0.65")}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://digitalagencynetwork.com/badges/dark.svg" alt="Digital Agency Network" height={36} style={{ height: 36, width: "auto", objectFit: "contain" }} />
              </a>
              <a href="https://www.goodfirms.co/company/nesco-digital" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.65, transition: "opacity 0.2s" }} onMouseEnter={e => (e.currentTarget.style.opacity = "1")} onMouseLeave={e => (e.currentTarget.style.opacity = "0.65")}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://assets.goodfirms.co/badges/blue-button/top-website-development-companies.svg" alt="GoodFirms" height={36} style={{ height: 36, width: "auto", objectFit: "contain" }} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            marginTop: "64px",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.2)" }}>
            © {new Date().getFullYear()} Nesco Digital. {tr.footer.rights}
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {[
              { label: tr.footer.privacy, href: "#" },
              { label: tr.footer.terms, href: "#" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.2)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.2)"; }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
