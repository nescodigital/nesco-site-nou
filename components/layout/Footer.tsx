"use client";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, Facebook } from "lucide-react";
import { type Locale, t } from "@/lib/translations";
import { routes } from "@/lib/routes";
import { NewsletterForm } from "@/components/NewsletterForm";

interface FooterProps {
  locale: Locale;
}

const PARTNERS = [
  { src: "https://i0.wp.com/nescodigital.com/wp-content/uploads/2024/12/G-footer.png?w=1080&ssl=1", alt: "Google Partner" },
  { src: "https://i0.wp.com/nescodigital.com/wp-content/uploads/2024/12/M-footer.png?w=1080&ssl=1", alt: "Meta Partner" },
  { src: "https://i0.wp.com/nescodigital.com/wp-content/uploads/2024/12/T-footer.png?w=1080&ssl=1", alt: "TikTok Partner" },
  { src: "https://i0.wp.com/nescodigital.com/wp-content/uploads/2024/12/S-footer.png?w=1080&ssl=1", alt: "Shopify Partner" },
  { src: "https://i0.wp.com/nescodigital.com/wp-content/uploads/2024/12/W-footer.png?w=1080&ssl=1", alt: "WooCommerce Partner" },
  { src: "https://i0.wp.com/nescodigital.com/wp-content/uploads/2024/12/K-footer.png?w=1080&ssl=1", alt: "Klaviyo Partner" },
  { src: "https://i0.wp.com/nescodigital.com/wp-content/uploads/2024/12/Y-footer.png?w=1080&ssl=1", alt: "Yotpo Partner" },
];

const AWARDS = [
  {
    href: "https://clutch.co/profile/nesco-digital",
    src: "https://i0.wp.com/nescodigital.com/wp-content/uploads/2021/04/New-Clutch-Tagline-white.png?w=1080&ssl=1",
    alt: "Clutch",
  },
  {
    href: "https://digitalagencynetwork.com/agencies/bucharest",
    src: "https://digitalagencynetwork.com/badges/dark.svg",
    alt: "Digital Agency Network",
  },
  {
    href: "https://www.goodfirms.co/company/nesco-digital",
    src: "https://assets.goodfirms.co/badges/blue-button/top-website-development-companies.svg",
    alt: "GoodFirms",
  },
];

const HEADING_STYLE: React.CSSProperties = {
  fontSize: "0.6875rem",
  fontWeight: 600,
  color: "rgba(255,255,255,0.25)",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  marginBottom: "16px",
};

const LINK_STYLE: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "rgba(255,255,255,0.4)",
  textDecoration: "none",
  transition: "color 0.2s ease",
};

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
      <div className="page-container">
        {/* ── Newsletter ── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "32px",
            paddingBottom: "56px",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            marginBottom: "56px",
          }}
        >
          <div style={{ maxWidth: "400px" }}>
            <h3
              className="font-black text-white"
              style={{ fontSize: "1.25rem", lineHeight: 1.25, marginBottom: "8px" }}
            >
              Resurse și insights pentru creștere
            </h3>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.38)", lineHeight: 1.65 }}>
              Tips de marketing, studii de caz și strategii direct în inbox-ul tău.
            </p>
          </div>
          <div style={{ flex: "1 1 320px", maxWidth: "460px" }}>
            <NewsletterForm />
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Brand ── */}
          <div>
            <Link href={r.home} style={{ display: "inline-flex", marginBottom: "20px" }}>
              <Image
                src="https://i0.wp.com/nescodigital.com/wp-content/uploads/2024/09/nescodigital-logo-invert.png"
                alt="Nesco Digital"
                width={150}
                height={38}
                style={{ height: 28, width: "auto" }}
              />
            </Link>
            <p
              style={{
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.35)",
                lineHeight: 1.7,
                marginBottom: "24px",
              }}
            >
              {tr.footer.tagline}
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              {[
                { href: "https://www.linkedin.com/company/nesco-digital/", Icon: Linkedin },
                { href: "https://www.instagram.com/nescodigital/", Icon: Instagram },
                { href: "https://www.facebook.com/nescodigital", Icon: Facebook },
              ].map(({ href, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
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

          {/* ── Services ── */}
          <div>
            <h4 style={HEADING_STYLE}>{tr.footer.services}</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="animated-underline"
                    style={LINK_STYLE}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.4)"; }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Company ── */}
          <div>
            <h4 style={HEADING_STYLE}>{tr.footer.company}</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="animated-underline"
                    style={LINK_STYLE}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.4)"; }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Partners ── */}
          <div>
            {/* Certified Partner */}
            <h4 style={HEADING_STYLE}>Certified Partner</h4>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "16px",
                marginBottom: "32px",
              }}
            >
              {PARTNERS.map(({ src, alt }) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={alt}
                  src={src}
                  alt={alt}
                  style={{
                    height: 32,
                    width: "auto",
                    objectFit: "contain",
                    filter: "brightness(1.2)",
                    opacity: 0.75,
                  }}
                />
              ))}
            </div>

            {/* Member Of */}
            <h4 style={HEADING_STYLE}>Member Of</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {AWARDS.map(({ href, src, alt }) => (
                <a
                  key={alt}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ opacity: 0.5, transition: "opacity 0.2s", display: "inline-flex" }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.5"; }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={alt}
                    style={{
                      height: 28,
                      width: "auto",
                      objectFit: "contain",
                      filter: "grayscale(1)",
                    }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          style={{
            marginTop: "64px",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.2)" }}>
            © {new Date().getFullYear()} Nesco Digital. {tr.footer.rights}
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {[
              { label: tr.footer.privacy, href: r.privacy },
              { label: tr.footer.terms, href: r.terms },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.2)", textDecoration: "none", transition: "color 0.2s ease" }}
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
