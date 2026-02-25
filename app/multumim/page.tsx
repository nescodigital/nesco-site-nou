import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/seo";
import { ThankYouTracking } from "@/components/ThankYouTracking";
import { ThankYouProfile } from "./ThankYouProfile";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Multumim | Nesco Digital",
  description: "Am primit cererea ta. Te contactam in curand.",
  path: "/multumim/",
  routeKey: "privacy",
});

function getSubtitle(type: string | undefined) {
  switch (type) {
    case "contact":
    case "growth-sprint":
      return "Te contactam in maximum 24 de ore.";
    case "newsletter":
      return "Verifica inbox-ul — primul email e pe drum.";
    default:
      return "Am primit cererea ta.";
  }
}

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/nesco-digital/" },
  { label: "Instagram", href: "https://www.instagram.com/nescodigital/" },
  { label: "Facebook", href: "https://www.facebook.com/nescodigital" },
];

export default async function MultumimPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const subtitle = getSubtitle(type);

  return (
    <>
      <Header locale="ro" />
      <main style={{ backgroundColor: "#050505" }}>
        <div style={{ paddingTop: "140px", paddingBottom: "120px" }}>
          <div className="page-container">
            <div
              style={{
                maxWidth: "640px",
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              {/* Green checkmark */}
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: "rgba(86,219,132,0.1)",
                  border: "1px solid rgba(86,219,132,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 28px",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#56db84"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>

              {/* Heading */}
              <h1
                className="font-black text-white"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  marginBottom: "16px",
                }}
              >
                Multumim!
              </h1>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.7,
                  marginBottom: "56px",
                }}
              >
                {subtitle}
              </p>

              {/* CTA cards */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
                  gap: "12px",
                  marginBottom: "48px",
                }}
              >
                <CtaCard
                  href="/blog"
                  label="Citeste blogul"
                  description="Articole si studii de caz"
                />
                <CtaCard
                  href="/"
                  label="Exploreaza serviciile"
                  description="Ce putem face pentru tine"
                />
                <CtaCard
                  href={socials[0].href}
                  label="Urmareste-ne"
                  description="LinkedIn, Instagram, Facebook"
                  external
                />
              </div>

              {/* Social links */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "16px",
                  marginBottom: "48px",
                }}
              >
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "0.8125rem",
                      color: "rgba(255,255,255,0.35)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>

              {/* Optional profile section for newsletter */}
              {type === "newsletter" && <ThankYouProfile />}
            </div>
          </div>
        </div>

        {/* Tracking fires on mount */}
        <ThankYouTracking type={type || ""} />
      </main>
      <Footer locale="ro" />
    </>
  );
}

function CtaCard({
  href,
  label,
  description,
  external,
}: {
  href: string;
  label: string;
  description: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      style={{
        display: "block",
        padding: "20px",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "14px",
        textDecoration: "none",
        transition: "border-color 0.2s, background 0.2s",
        textAlign: "left",
      }}
    >
      <p
        style={{
          fontSize: "0.9375rem",
          fontWeight: 700,
          color: "#fff",
          marginBottom: "4px",
        }}
      >
        {label} &rarr;
      </p>
      <p
        style={{
          fontSize: "0.8125rem",
          color: "rgba(255,255,255,0.35)",
          margin: 0,
          lineHeight: 1.5,
        }}
      >
        {description}
      </p>
    </a>
  );
}
