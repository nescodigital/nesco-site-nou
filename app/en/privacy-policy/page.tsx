import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Privacy Policy | Nesco Digital",
  description: "Learn how we collect, use and protect your personal data. Full GDPR compliance.",
  path: "/en/privacy-policy/",
  routeKey: "privacy",
});

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2
    style={{
      fontSize: "1.25rem",
      fontWeight: 700,
      color: "#56db84",
      letterSpacing: "-0.01em",
      marginTop: "48px",
      marginBottom: "16px",
    }}
  >
    {children}
  </h2>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "16px" }}>
    {children}
  </p>
);

const Li = ({ children }: { children: React.ReactNode }) => (
  <li style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, paddingLeft: "8px" }}>
    {children}
  </li>
);

export default function PrivacyPolicyEnPage() {
  return (
    <>
      <Header locale="en" />
      <main style={{ backgroundColor: "#050505" }}>
        <div style={{ paddingTop: "140px", paddingBottom: "120px" }}>
          <div className="page-container">
            <div style={{ maxWidth: "740px" }}>

              <span className="badge mb-6">Legal</span>
              <h1
                className="font-black text-white"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  marginTop: "20px",
                  marginBottom: "12px",
                }}
              >
                Privacy Policy
              </h1>
              <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.25)", marginBottom: "64px" }}>
                Last updated: February 2025
              </p>

              <div
                style={{
                  width: "100%",
                  height: 1,
                  background: "linear-gradient(90deg, rgba(86,219,132,0.3), transparent)",
                  marginBottom: "48px",
                }}
              />

              <H2>1. Who we are</H2>
              <P>
                Nesco Digital ("we", "us") is a growth and operations partner for digital businesses, based in
                Romania. For privacy-related inquiries, contact us at{" "}
                <a href="mailto:hello@nescodigital.com" style={{ color: "#56db84", textDecoration: "none" }}>
                  hello@nescodigital.com
                </a>.
              </P>

              <H2>2. What data we collect</H2>
              <P><strong style={{ color: "rgba(255,255,255,0.8)" }}>Through the contact form:</strong></P>
              <P>
                Name, email address, message content. This data is used solely to respond to your inquiry.
              </P>
              <P><strong style={{ color: "rgba(255,255,255,0.8)" }}>Through the newsletter:</strong></P>
              <P>
                Email address and, optionally, content preferences selected at sign-up. We use this data to send
                relevant content about marketing, growth, and digital operations.
              </P>
              <P><strong style={{ color: "rgba(255,255,255,0.8)" }}>Through cookies and analytics:</strong></P>
              <P>
                We use Google Analytics, Meta Pixel and TikTok Pixel to measure advertising campaign performance
                and understand visitor behavior. These services collect anonymized data about pages visited, time
                spent, approximate location, and device. Collection occurs only after your explicit consent via
                the cookie banner.
              </P>

              <H2>3. Why we collect this data</H2>
              <div
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  marginBottom: "16px",
                }}
              >
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
                  <thead>
                    <tr style={{ background: "rgba(255,255,255,0.04)" }}>
                      {["Data", "Legal basis", "Purpose"].map((h) => (
                        <th
                          key={h}
                          style={{
                            padding: "12px 16px",
                            textAlign: "left",
                            color: "rgba(255,255,255,0.4)",
                            fontWeight: 600,
                            letterSpacing: "0.06em",
                            fontSize: "0.75rem",
                            textTransform: "uppercase",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                          }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Contact form", "Legitimate interest", "Responding to inquiry"],
                      ["Newsletter", "Consent", "Marketing communications"],
                      ["Analytics & Pixels", "Consent", "Campaign measurement, site improvement"],
                    ].map(([data, basis, purpose], i) => (
                      <tr key={i} style={{ borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                        <td style={{ padding: "12px 16px", color: "rgba(255,255,255,0.6)" }}>{data}</td>
                        <td style={{ padding: "12px 16px", color: "rgba(255,255,255,0.6)" }}>{basis}</td>
                        <td style={{ padding: "12px 16px", color: "rgba(255,255,255,0.6)" }}>{purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <H2>4. How long we keep data</H2>
              <P>
                Contact form data is kept for a maximum of 12 months from the last interaction. Newsletter data
                is kept until unsubscription. Analytics data is anonymized and aggregated.
              </P>

              <H2>5. Who we share data with</H2>
              <P>
                We do not sell or rent your data. Data is processed by the following service providers, strictly
                for the purposes stated:
              </P>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  "Google Analytics — site analytics",
                  "Meta (Facebook) — advertising campaign measurement via Meta Pixel",
                  "TikTok — advertising campaign measurement via TikTok Pixel",
                ].map((item) => (
                  <Li key={item}>
                    <span style={{ color: "#56db84", marginRight: "10px" }}>→</span>{item}
                  </Li>
                ))}
              </ul>
              <P>
                All providers are GDPR-compliant and process data under Data Processing Agreements (DPA).
              </P>

              <H2>6. Your rights</H2>
              <P>Under GDPR, you have the right to:</P>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  "Access the data we hold about you",
                  "Rectify inaccurate data",
                  'Erase your data ("right to be forgotten")',
                  "Withdraw consent at any time, without consequences",
                  "Data portability",
                  "Lodge a complaint with the supervisory authority in your country",
                ].map((item) => (
                  <Li key={item}>
                    <span style={{ color: "#56db84", marginRight: "10px" }}>→</span>{item}
                  </Li>
                ))}
              </ul>
              <P>
                For any request:{" "}
                <a href="mailto:hello@nescodigital.com" style={{ color: "#56db84", textDecoration: "none" }}>
                  hello@nescodigital.com
                </a>. We respond within 30 days.
              </P>

              <H2>7. Cookies</H2>
              <P>We use two types of cookies:</P>
              <P>
                <strong style={{ color: "rgba(255,255,255,0.8)" }}>Essential</strong> — required for the site to
                function, no consent needed.
              </P>
              <P>
                <strong style={{ color: "rgba(255,255,255,0.8)" }}>Analytics &amp; Marketing</strong> — Google
                Analytics, Meta Pixel and TikTok Pixel, activated only after your consent. You can change
                preferences at any time via the cookie banner.
              </P>

              <H2>8. Security</H2>
              <P>
                Data is transmitted over encrypted connections (HTTPS). Access to contact data is restricted
                and monitored.
              </P>

              <H2>9. Changes</H2>
              <P>
                We reserve the right to update this policy. Significant changes will be communicated by email
                to newsletter subscribers. The last update date is shown at the top of this document.
              </P>

            </div>
          </div>
        </div>
      </main>
      <Footer locale="en" />
    </>
  );
}
