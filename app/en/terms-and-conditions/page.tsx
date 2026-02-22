import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Terms and Conditions | Nesco Digital",
  description: "Terms and conditions for using nescodigital.com.",
  path: "/en/terms-and-conditions/",
  routeKey: "terms",
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

export default function TermsAndConditionsEnPage() {
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
                Terms and Conditions
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

              <H2>1. Acceptance of terms</H2>
              <P>
                By accessing and using nescodigital.com, you automatically accept these Terms and Conditions. If
                you do not agree, please do not use the site.
              </P>

              <H2>2. About Nesco Digital</H2>
              <P>
                Nesco Digital is a growth and operations partner for digital businesses, based in Romania. You
                can reach us at{" "}
                <a href="mailto:hello@nescodigital.com" style={{ color: "#56db84", textDecoration: "none" }}>
                  hello@nescodigital.com
                </a>.
              </P>

              <H2>3. Use of the site</H2>
              <P>
                nescodigital.com is a service presentation website. Published content is for informational
                purposes only. We reserve the right to modify, suspend, or shut down the site at any time without
                prior notice. Using the site for illegal purposes, transmitting harmful content, or attempting
                unauthorized access to our systems is strictly prohibited.
              </P>

              <H2>4. Intellectual property</H2>
              <P>
                All content on this site, text, graphics, logos, visual structure, is the property of Nesco
                Digital or its partners and is protected by copyright law. Reproduction or use without our written
                consent is prohibited.
              </P>

              <H2>5. Services and commitments</H2>
              <P>
                The information presented on this site describes in general terms the types of services we offer.
                The exact terms of any engagement are established through a separate contract signed by both
                parties. Nothing on this site constitutes a contractual offer.
              </P>

              <H2>6. Digital products and services</H2>
              <P>
                Should we offer products or services purchasable directly through the site in the future, specific
                terms regarding delivery, payment, and returns will be clearly communicated before any transaction
                is completed.
              </P>

              <H2>7. Limitation of liability</H2>
              <P>
                Nesco Digital is not liable for direct or indirect damages resulting from the use or inability to
                use this site. We do not guarantee uninterrupted or error-free availability.
              </P>

              <H2>8. External links</H2>
              <P>
                The site may contain links to third-party websites. We have no control over their content and
                assume no responsibility for them.
              </P>

              <H2>9. Changes</H2>
              <P>
                We reserve the right to update these terms at any time. Continued use of the site following the
                publication of changes constitutes acceptance of the new terms.
              </P>

              <H2>10. Governing law</H2>
              <P>
                These terms are governed by Romanian law. Any disputes will be resolved by the competent courts
                in Romania.
              </P>

            </div>
          </div>
        </div>
      </main>
      <Footer locale="en" />
    </>
  );
}
