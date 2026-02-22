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
  locale: "de",
  title: "E-Commerce Entwicklung | Online-Shop-Agentur | Nesco Digital",
  description: "Hochperformante E-Commerce-Entwicklung. Shopify, WooCommerce, individuelle Lösungen. Konversionsoptimiertes UX mit vollständigen Zahlungs- und Versandintegrationen.",
  path: "/ge/e-commerce-shops/",
  routeKey: "ecommerceStores",
});

const PlatformsSection = () => (
  <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)" }} />
    <div className="page-container">
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <span className="badge mb-6">Plattformen</span>
        <h2 className="font-black text-white" style={{ fontSize: "clamp(1.75rem,3.5vw,2.75rem)", lineHeight: 1.05, letterSpacing: "-0.025em", marginTop: "20px" }}>Shopify, WooCommerce oder individuelle Lösung?</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6" style={{ maxWidth: "960px", margin: "0 auto" }}>
        {[
          {
            name: "Shopify",
            best: "Ideal für: Startups und schnelle Skalierung",
            pros: ["Schnelles Setup (2-4 Wochen)", "Hosting inklusive, keine Serverwartung", "Reiches App-Ökosystem", "Conversion-optimierter Checkout"],
            cons: ["Feste monatliche Kosten (29-299 $/Monat)", "Weniger anpassbar als WooCommerce"],
            color: "#96bf48",
          },
          {
            name: "WooCommerce",
            best: "Ideal für: maximale Flexibilität",
            pros: ["Open Source, keine Lizenzkosten", "Totale Anpassbarkeit", "Perfekte WordPress-Integration", "Größtes Plugin-Ökosystem"],
            cons: ["Benötigt Hosting und Wartung", "Langsamer ohne dedizierte Optimierung"],
            color: "#7f54b3",
          },
          {
            name: "Individuelle Lösung",
            best: "Ideal für: hohe Volumen oder einzigartige Anforderungen",
            pros: ["Maximale Performance", "Vollständig individualisierte Geschäftslogik", "Skalierung ohne Plattformbeschränkungen", "Next.js + Headless Commerce"],
            cons: ["Höheres Budget und längere Entwicklungszeit", "Tech-Team für Wartung erforderlich"],
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

export default function EcommerceDePage() {
  return (
    <>
      <Header locale="de" />
      <main>
        <ServicePageTemplate
          data={ecommerceData.de}
          heroRightSlot={
            <AdsDashboardCard
              emoji="🛒"
              title="Online-Shop Performance"
              date="Oktober 2025"
              metrics={[
                { label: "Conversion", animated: { target: 2.8, decimals: 1, suffix: "%" }, badge: { text: "↑ 400%", positive: true } },
                { label: "Umsatz/Monat", animated: { target: 85000 }, badge: { text: "↑ 210%", positive: true } },
                { label: "AOV (Warenkorbwert)", animated: { target: 142, suffix: "€" }, badge: { text: "↑ 35%", positive: true } },
              ]}
              barPercent={92}
              barLabel="Umsatzziel erreicht"
              status="LIVE Shopify Plus, RO+EU"
              badge1="0.7% → 2.8% Conversion-Rate"
              badge2="Fashion E-Commerce, Rumänien"
            />
          }
          afterHeroSlot={
            <>
              <AdsTrustBar items={[
                { stat: "Shopify", label: "Zertifizierter Partner" },
                { stat: "WooCommerce", label: "zertifizierte Experten" },
                { stat: "30+", label: "gelieferte Online-Shops" },
                { stat: "PageSpeed 90+", label: "garantiert" },
                { stat: "DSGVO", label: "vollständig konform" },
              ]} />
              <AdsBeforeAfter
                title="Echte Ergebnisse Vorher und nachher mit Nesco Digital"
                beforeLabel="Vorher"
                afterLabel="Nach Nesco"
                before={[
                  { label: "Conversion-Rate", display: "0.7%" },
                  { label: "Umsatz/Monat", display: "27.000€" },
                  { label: "AOV (Warenkorbwert)", display: "105€" },
                  { label: "PageSpeed", display: "38/100" },
                  { label: "Warenkorbabbruch", display: "85%" },
                  { label: "Mobile Experience", display: "kaputt" },
                ]}
                after={[
                  { label: "Conversion-Rate", display: "2.8%", animate: { target: 2.8, decimals: 1, suffix: "%" } },
                  { label: "Umsatz/Monat", display: "85.000€", animate: { target: 85000 } },
                  { label: "AOV (Warenkorbwert)", display: "142€", animate: { target: 142, suffix: "€" } },
                  { label: "PageSpeed", display: "93/100" },
                  { label: "Warenkorbabbruch", display: "58%" },
                  { label: "Mobile Experience", display: "einwandfrei" },
                ]}
                source="Fashion E-Commerce, Rumänien 8 Wochen nach Launch"
              />
              <AdsComparison
                badLabel="Standard-Online-Shop"
                goodLabel="Nesco-optimierter Shop"
                bad={[
                  "Generisches Template, von Tausenden Shops verwendet",
                  "Komplizierter Checkout mit 5+ Schritten",
                  "Keine Wiederherstellung abgebrochener Warenkörbe",
                  "Schwacher PageSpeed wegen unnötiger Plugins",
                  "Keine Verhaltensanalysen (Heatmaps, Sessions)",
                  "Begrenzte Zahlungs- und Versandintegrationen",
                ]}
                good={[
                  "Einzigartiges Design, gebaut für die Conversion Ihrer Produkte",
                  "Optimierter Checkout: 1-Klick für Bestandskunden",
                  "E-Mail-Automation für abgebrochene Warenkörbe",
                  "PageSpeed 90+ garantiert, sauberer Code",
                  "Hotjar + GA4 mit Enhanced E-Commerce Tracking",
                  "Vollständige Integrationen: Stripe, PayU, FanCurier, SameDay",
                ]}
              />
              <PlatformsSection />
              <AdsTimeline
                title="Unser Prozess in 8 Wochen"
                phases={[
                  {
                    emoji: "📐",
                    range: "Wochen 1-2",
                    title: "Strategie & Plattform",
                    color: "#56db84",
                    items: [
                      "Business-Audit und Wahl der richtigen Plattform",
                      "Architektur der Kategorien und Produkte",
                      "Benötigte Integrationen: Zahlung, Versand, ERP",
                      "Design-System und Wireframes",
                    ],
                  },
                  {
                    emoji: "🎨",
                    range: "Wochen 3-5",
                    title: "Design & Inhalte",
                    color: "#60a5fa",
                    items: [
                      "Vollständiges Design in Figma, von Ihnen freigegeben",
                      "Optimierung der Produktbilder",
                      "Copywriting für Kategorien und Schlüsselprodukte",
                      "Katalog-Setup und Produktvarianten",
                    ],
                  },
                  {
                    emoji: "🚀",
                    range: "Wochen 6-8",
                    title: "Entwicklung & Launch",
                    color: "#a78bfa",
                    items: [
                      "Entwicklung und vollständige Integrationen",
                      "Umfassendes Testing: Desktop, Mobil, Zahlung",
                      "Setup GA4 Enhanced E-Commerce + Hotjar",
                      "Schrittweiser Launch + Optimierung nach dem Launch",
                    ],
                  },
                ]}
              />
              <EcommerceCalculator />
            </>
          }
        />
      </main>
      <Footer locale="de" />
      <AdsStickyBar title="Wollen Sie einen Online-Shop, der verkauft?" cta="Kostenloses Angebot anfordern" href="/ge/lass-uns-reden/" />
    </>
  );
}
