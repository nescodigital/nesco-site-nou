import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePage";
import { ecommerceData } from "@/lib/serviceData";
import { buildMetadata } from "@/lib/seo";
import { AdsDashboardCard } from "@/components/sections/ads/AdsDashboardCard";
import { AdsTrustBar } from "@/components/sections/ads/AdsTrustBar";
import { AdsBeforeAfter } from "@/components/sections/ads/AdsBeforeAfter";
import { AdsComparison } from "@/components/sections/ads/AdsComparison";
import { AdsTimeline } from "@/components/sections/ads/AdsTimeline";
import { AdsStickyBar } from "@/components/sections/ads/AdsStickyBar";
import { EcommerceCalculator } from "@/components/sections/EcommerceCalculator";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "E-commerce Development | Online Store Agency | Nesco Digital",
  description: "High-performance e-commerce development. Shopify, WooCommerce, custom solutions. Conversion-optimized UX with full payment and delivery integrations.",
  path: "/en/e-commerce-stores/",
  routeKey: "ecommerceStores",
});

const PlatformsSection = () => (
  <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)" }} />
    <div className="page-container">
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <span className="badge mb-6">Platforms</span>
        <h2 className="font-black text-white" style={{ fontSize: "clamp(1.75rem,3.5vw,2.75rem)", lineHeight: 1.05, letterSpacing: "-0.025em", marginTop: "20px" }}>Shopify, WooCommerce, or custom solution?</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6" style={{ maxWidth: "960px", margin: "0 auto" }}>
        {[
          {
            name: "Shopify",
            best: "Ideal for: startups and rapid scaling",
            pros: ["Quick setup (2-4 weeks)", "Hosting included, no server maintenance", "Rich app ecosystem", "Conversion-optimized checkout"],
            cons: ["Fixed monthly cost ($29-299/month)", "Less customizable than WooCommerce"],
            color: "#96bf48",
          },
          {
            name: "WooCommerce",
            best: "Ideal for: maximum flexibility",
            pros: ["Open source, no license cost", "Total customization", "Perfect WordPress integration", "Largest plugin ecosystem"],
            cons: ["Requires hosting and maintenance", "Slower without dedicated optimization"],
            color: "#7f54b3",
          },
          {
            name: "Custom Solution",
            best: "Ideal for: high volumes or unique needs",
            pros: ["Maximum performance", "Fully customized business logic", "Scaling without platform limitations", "Next.js + headless commerce"],
            cons: ["Higher budget and development time", "Tech team needed for maintenance"],
            color: "#56db84",
          },
        ].map((p) => (
          <div key={p.name} style={{ background: "#0a0a0a", border: `1px solid ${p.color}22`, borderRadius: "16px", padding: "28px" }}>
            <div style={{ fontSize: "1.25rem", fontWeight: 900, color: p.color, marginBottom: "8px" }}>{p.name}</div>
            <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", marginBottom: "16px" }}>{p.best}</p>
            <ul style={{ listStyle: "none", padding: 0, marginBottom: "16px" }}>
              {p.pros.map(pro => <li key={pro} style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.7)", marginBottom: "6px" }}>✓ {pro}</li>)}
            </ul>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {p.cons.map(con => <li key={con} style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)", marginBottom: "6px" }}>– {con}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function EcommerceEnPage() {
  return (
    <>
      <Header locale="en" />
      <main>
        <ServicePageTemplate
          data={ecommerceData.en}
          heroRightSlot={
            <AdsDashboardCard
              emoji="🛒"
              title="Online Store Performance"
              date="October 2025"
              metrics={[
                { label: "Conversion", animated: { target: 2.8, decimals: 1, suffix: "%" }, badge: { text: "↑ 400%", positive: true } },
                { label: "Revenue/month", animated: { target: 85000 }, badge: { text: "↑ 210%", positive: true } },
                { label: "AOV (avg. cart)", animated: { target: 142, suffix: "€" }, badge: { text: "↑ 35%", positive: true } },
              ]}
              barPercent={92}
              barLabel="Revenue goal reached"
              status="LIVE Shopify Plus, RO+EU"
              badge1="0.7% → 2.8% conversion rate"
              badge2="Fashion e-commerce, Romania"
            />
          }
          afterHeroSlot={
            <>
              <AdsTrustBar items={[
                { stat: "Shopify", label: "Certified partner" },
                { stat: "WooCommerce", label: "certified experts" },
                { stat: "30+", label: "online stores delivered" },
                { stat: "PageSpeed 90+", label: "guaranteed" },
                { stat: "GDPR", label: "fully compliant" },
              ]} />
              <AdsBeforeAfter
                title="Real results Before and after Nesco Digital"
                beforeLabel="Before"
                afterLabel="After Nesco"
                before={[
                  { label: "Conversion rate", display: "0.7%" },
                  { label: "Revenue/month", display: "27,000€" },
                  { label: "AOV (avg. cart)", display: "105€" },
                  { label: "PageSpeed", display: "38/100" },
                  { label: "Cart abandonment", display: "85%" },
                  { label: "Mobile experience", display: "broken" },
                ]}
                after={[
                  { label: "Conversion rate", display: "2.8%", animate: { target: 2.8, decimals: 1, suffix: "%" } },
                  { label: "Revenue/month", display: "85,000€", animate: { target: 85000 } },
                  { label: "AOV (avg. cart)", display: "142€", animate: { target: 142, suffix: "€" } },
                  { label: "PageSpeed", display: "93/100" },
                  { label: "Cart abandonment", display: "58%" },
                  { label: "Mobile experience", display: "flawless" },
                ]}
                source="Fashion e-commerce, Romania 8 weeks post-launch"
              />
              <AdsComparison
                badLabel="Standard online store"
                goodLabel="Nesco-optimized store"
                bad={[
                  "Generic template used by thousands of stores",
                  "Complicated checkout with 5+ steps",
                  "No abandoned cart recovery",
                  "Poor PageSpeed due to unnecessary plugins",
                  "No behavior analytics (heatmaps, sessions)",
                  "Limited payment and shipping integrations",
                ]}
                good={[
                  "Unique design, built for your products' conversion",
                  "Optimized checkout: 1-click for returning customers",
                  "Email automation for abandoned carts",
                  "PageSpeed 90+ guaranteed, clean code",
                  "Hotjar + GA4 with enhanced e-commerce tracking",
                  "Complete integrations: Stripe, PayU, FanCurier, SameDay",
                ]}
              />
              <PlatformsSection />
              <AdsTimeline
                title="Our process in 8 weeks"
                phases={[
                  {
                    emoji: "📐",
                    range: "Weeks 1-2",
                    title: "Strategy & Platform",
                    color: "#56db84",
                    items: [
                      "Business audit and choosing the right platform",
                      "Category and product architecture",
                      "Required integrations: payment, shipping, ERP",
                      "Design system and wireframes",
                    ],
                  },
                  {
                    emoji: "🎨",
                    range: "Weeks 3-5",
                    title: "Design & Content",
                    color: "#60a5fa",
                    items: [
                      "Full design in Figma, approved by you",
                      "Product image optimization",
                      "Copywriting for categories and key products",
                      "Catalog setup and product variants",
                    ],
                  },
                  {
                    emoji: "🚀",
                    range: "Weeks 6-8",
                    title: "Development & Launch",
                    color: "#a78bfa",
                    items: [
                      "Development and complete integrations",
                      "Full testing: desktop, mobile, payments",
                      "GA4 Enhanced E-commerce + Hotjar setup",
                      "Gradual launch + post-launch optimization",
                    ],
                  },
                ]}
              />
              <EcommerceCalculator />
            </>
          }
        />
      </main>
      <Footer locale="en" />
      <AdsStickyBar title="Want an online store that sells?" cta="Request a free quote" href="/en/lets-talk/" />
    </>
  );
}
