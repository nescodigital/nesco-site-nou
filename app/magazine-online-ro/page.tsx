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
  locale: "ro",
  title: "Magazine Online | E-commerce Development | Nesco Digital",
  description: "Dezvoltare magazine online performante. Shopify, WooCommerce, soluții custom. UX optimizat pentru conversii și integrări complete de plată și livrare.",
  path: "/magazine-online-ro/",
  routeKey: "ecommerceStores",
});

const PlatformsSection = () => (
  <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)" }} />
    <div className="page-container">
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <span className="badge mb-6">Platforme</span>
        <h2 className="font-black text-white" style={{ fontSize: "clamp(1.75rem,3.5vw,2.75rem)", lineHeight: 1.05, letterSpacing: "-0.025em", marginTop: "20px" }}>Shopify, WooCommerce sau soluție custom?</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6" style={{ maxWidth: "960px", margin: "0 auto" }}>
        {[
          {
            name: "Shopify",
            best: "Ideal pentru: startup și scale-up rapid",
            pros: ["Setup rapid (2-4 săptămâni)", "Hosting inclus, fără server maintenance", "Ecosistem app bogat", "Checkout optimizat conversie"],
            cons: ["Cost lunar fix (29-299$/lună)", "Customizare limitată față de WooCommerce"],
            color: "#96bf48",
          },
          {
            name: "WooCommerce",
            best: "Ideal pentru: flexibilitate maximă",
            pros: ["Open source, fără cost de licență", "Customizare totală", "Integrare perfectă cu WordPress", "Cel mai mare ecosistem de plugin-uri"],
            cons: ["Necesită hosting și mentenanță", "Mai lent fără optimizare dedicată"],
            color: "#7f54b3",
          },
          {
            name: "Soluție Custom",
            best: "Ideal pentru: volume mari sau nevoi unice",
            pros: ["Performanță maximă", "Logică de business complet personalizată", "Scalare fără limitări de platformă", "Next.js + headless commerce"],
            cons: ["Buget și timp de dezvoltare mai mare", "Echipă tech necesară pentru mentenanță"],
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

export default function EcommerceRoPage() {
  return (
    <>
      <Header locale="ro" />
      <main>
        <ServicePageTemplate
          data={ecommerceData.ro}
          heroRightSlot={
            <AdsDashboardCard
              emoji="🛒"
              title="Magazine Online Performance"
              date="Octombrie 2025"
              metrics={[
                { label: "Conversie", animated: { target: 2.8, decimals: 1, suffix: "%" }, badge: { text: "↑ 400%", positive: true } },
                { label: "Revenue/lună", animated: { target: 85000 }, badge: { text: "↑ 210%", positive: true } },
                { label: "AOV (coș mediu)", animated: { target: 142, suffix: "€" }, badge: { text: "↑ 35%", positive: true } },
              ]}
              barPercent={92}
              barLabel="Obiectiv revenue atins"
              status="LIVE Shopify Plus, RO+EU"
              badge1="0.7% → 2.8% rată conversie"
              badge2="Fashion e-commerce, România"
            />
          }
          afterHeroSlot={
            <>
              <AdsTrustBar items={[
                { stat: "Shopify", label: "Partner certificat" },
                { stat: "WooCommerce", label: "experți certificați" },
                { stat: "30+", label: "magazine online livrate" },
                { stat: "PageSpeed 90+", label: "garantat" },
                { stat: "GDPR", label: "complet conform" },
              ]} />
              <AdsBeforeAfter
                title="Rezultate reale Înainte și după Nesco Digital"
                beforeLabel="Înainte"
                afterLabel="După Nesco"
                before={[
                  { label: "Rată conversie", display: "0.7%" },
                  { label: "Revenue/lună", display: "27.000€" },
                  { label: "AOV (coș mediu)", display: "105€" },
                  { label: "PageSpeed", display: "38/100" },
                  { label: "Abandonment coș", display: "85%" },
                  { label: "Mobile experience", display: "broken" },
                ]}
                after={[
                  { label: "Rată conversie", display: "2.8%", animate: { target: 2.8, decimals: 1, suffix: "%" } },
                  { label: "Revenue/lună", display: "85.000€", animate: { target: 85000 } },
                  { label: "AOV (coș mediu)", display: "142€", animate: { target: 142, suffix: "€" } },
                  { label: "PageSpeed", display: "93/100" },
                  { label: "Abandonment coș", display: "58%" },
                  { label: "Mobile experience", display: "flawless" },
                ]}
                source="Fashion e-commerce, România 8 săptămâni post-lansare"
              />
              <AdsComparison
                badLabel="Magazin online standard"
                goodLabel="Magazin optimizat Nesco"
                bad={[
                  "Template generic folosit de mii de magazine",
                  "Checkout complicat cu 5+ pași",
                  "Fără recuperare coș abandonat",
                  "PageSpeed slab din cauza plugin-urilor nenecesare",
                  "Fără analytics de comportament (heatmaps, sesiuni)",
                  "Integrări limitate cu sisteme de plată și curierat",
                ]}
                good={[
                  "Design unic, construit pentru conversia produselor tale",
                  "Checkout optimizat: 1-click pentru clienți existenți",
                  "Email automation pentru coșuri abandonate",
                  "PageSpeed 90+ garantat, cod curat",
                  "Hotjar + GA4 cu enhanced e-commerce tracking",
                  "Integrări complete: Stripe, PayU, FanCurier, SameDay",
                ]}
              />
              <PlatformsSection />
              <AdsTimeline
                title="Procesul nostru în 8 săptămâni"
                phases={[
                  {
                    emoji: "📐",
                    range: "Săptămânile 1-2",
                    title: "Strategie & Platformă",
                    color: "#56db84",
                    items: [
                      "Audit business și alegerea platformei potrivite",
                      "Arhitectura categoriilor și produselor",
                      "Integrări necesare: plată, curierat, ERP",
                      "Design system și wireframes",
                    ],
                  },
                  {
                    emoji: "🎨",
                    range: "Săptămânile 3-5",
                    title: "Design & Conținut",
                    color: "#60a5fa",
                    items: [
                      "Design complet în Figma, aprobat de tine",
                      "Optimizare imagini produse",
                      "Copywriting categorii și produse cheie",
                      "Setup catalog și variante produse",
                    ],
                  },
                  {
                    emoji: "🚀",
                    range: "Săptămânile 6-8",
                    title: "Dezvoltare & Lansare",
                    color: "#a78bfa",
                    items: [
                      "Dezvoltare și integrări complete",
                      "Testare completă: desktop, mobil, plată",
                      "Setup GA4 Enhanced E-commerce + Hotjar",
                      "Lansare graduală + optimizare post-lansare",
                    ],
                  },
                ]}
              />
              <EcommerceCalculator />
            </>
          }
        />
      </main>
      <Footer locale="ro" />
      <AdsStickyBar title="Vrei un magazin online care vinde?" cta="Solicită ofertă gratuită" href="/contact/" />
    </>
  );
}
