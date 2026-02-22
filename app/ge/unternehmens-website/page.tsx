import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";
import { AdsDashboardCard } from "@/components/sections/ads/AdsDashboardCard";
import { AdsTrustBar } from "@/components/sections/ads/AdsTrustBar";
import { AdsBeforeAfter } from "@/components/sections/ads/AdsBeforeAfter";
import { AdsComparison } from "@/components/sections/ads/AdsComparison";
import { AdsTimeline } from "@/components/sections/ads/AdsTimeline";
import { AdsStickyBar } from "@/components/sections/ads/AdsStickyBar";
import { WebsiteROICalculator } from "@/components/sections/WebsiteROICalculator";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "Unternehmenswebsite | Premium Business Website | Nesco Digital",
  description: "Premium Unternehmenswebsites, die den Wert Ihrer Marke widerspiegeln. Modernes Design, hohe Performance, konversionsoptimiert.",
  path: "/ge/unternehmens-website/",
  routeKey: "companyWebsite",
});

const data: ServicePageData = {
  locale: "de",
  breadcrumbCategory: "webdesign",
  hero: {
    badge: "Unternehmens-Website",
    title: "Der erste Eindruck Ihres Unternehmens ist meistens Ihre Website",
    subtitle: "80 % der potenziellen Kunden suchen ein Unternehmen online, bevor sie Kontakt aufnehmen. Eine professionelle Website ist keine Ausgabe -- sie ist der effektivste Vertriebsmitarbeiter, der rund um die Uhr für Sie arbeitet, auch wenn Sie schlafen.",
  },
  problems: [
    { title: "Potenzielle Kunden suchen Sie und finden nichts Überzeugendes", desc: "Wenn Ihre Website 5 Jahre alt ist oder nicht existiert, verlieren Sie Glaubwürdigkeit gegenüber Mitbewerbern, die online gut aussehen. Der erste Eindruck zählt mehr als alles andere." },
    { title: "Sie haben eine Facebook-Seite, aber ohne Website werden Sie nicht ernst genommen", desc: "Eine Facebook-Seite kann jederzeit gelöscht oder gesperrt werden. Eine eigene Website ist fundamental für die Glaubwürdigkeit eines seriösen Unternehmens." },
    { title: "Besucher verstehen nicht, was Sie tun oder warum sie Sie wählen sollten", desc: "Wenn die Botschaft auf Ihrer Website nicht klar und überzeugend ist, gehen potenzielle Kunden in 8 Sekunden -- der durchschnittlichen Aufmerksamkeitsspanne eines Webnutzers." },
    { title: "Ihre Mitbewerber sehen online professioneller aus", desc: "Ein schlechter erster Eindruck ist schwer wiedergutzumachen. Wenn Ihre Website kein Vertrauen und keine Professionalität ausstrahlt, verlieren Sie Kunden, bevor Sie überhaupt mit ihnen sprechen können." },
  ],
  solutions: [
    { title: "Design, das sofort Professionalität vermittelt", desc: "Wir nutzen Prinzipien der visuellen Psychologie für einen ersten Eindruck, der Vertrauen weckt. Farben, Schriftarten und Bilder werden strategisch ausgewählt." },
    { title: "Klare Botschaft: was Sie tun, wen Sie ansprechen, warum Sie", desc: "Wir schreiben Texte, die in den ersten 5 Sekunden die Fragen des Besuchers beantworten: \"Bin ich hier richtig?\" und \"Löst das mein Problem?\"" },
    { title: "Für Mobilgeräte optimiert -- 70 % des Traffics kommt vom Smartphone", desc: "Eine Website, die auf dem Telefon nicht perfekt aussieht, verliert den Großteil des Traffics. Alle unsere Websites sind mobile-first." },
    { title: "Schnell -- jede zusätzliche Sekunde senkt die Conversions um 7 %", desc: "Bildoptimierung, Premium-Hosting, sauberer Code. PageSpeed 90+ garantiert." },
    { title: "Basis-SEO inklusive", desc: "URL-Struktur, Meta-Tags, Sitemap, Google Search Console. Ab Tag 1 kann Google Ihre Website korrekt indexieren." },
    { title: "Einfach zu verwalten", desc: "Sie fügen Neuigkeiten, Case Studies, neue Mitarbeiter hinzu, ohne programmieren zu können. Schulung bei Lieferung inklusive." },
  ],
  cases: [
    { metric: "+70%", label: "Gebuchte Termine", industry: "Medizinische Klinik" },
    { metric: "+60%", label: "Angebotsanfragen", industry: "B2B-Dienstleistungen" },
    { metric: "Investoren gewonnen", label: "Markenglaubwürdigkeit gesteigert", industry: "Tech-Startup" },
    { metric: "+45%", label: "Verweildauer auf der Website", industry: "Architekturbüro" },
    { metric: "4x", label: "Mehr Kontakte über die Website", industry: "Anwaltskanzlei" },
    { metric: "-55%", label: "Absprungrate", industry: "Beratungsunternehmen" },
  ],
  omnichannelServices: ["Google Ads", "Facebook Ads", "SEO", "E-Mail-Marketing", "CRO"],
  faq: [
    { q: "Brauche ich eine Website, wenn ich eine Facebook-Seite habe?", a: "Auf jeden Fall. Eine Facebook-Seite kann ohne Vorwarnung deaktiviert, eingeschränkt oder vom Algorithmus bestraft werden. Ihre eigene Website ist der einzige digitale Raum, den Sie zu 100 % kontrollieren. Außerdem kann Ihre Website auf Google gefunden werden -- Facebook wird nicht auf die gleiche Weise indexiert." },
    { q: "Was kostet eine Unternehmenswebsite?", a: "Es kommt auf die Komplexität an: Eine Website mit 5-8 Seiten (Startseite, Über uns, Leistungen, Blog, Kontakt) beginnt bei 1.500-3.000 EUR. Eine Website mit erweiterten Funktionen (Angebotsrechner, Kundenportal, Mehrsprachigkeit) kann 5.000-15.000 EUR erreichen. Wir erstellen ein detailliertes Angebot nach dem Erstgespräch." },
    { q: "Wie oft muss eine Website aktualisiert werden?", a: "Inhalte (Neuigkeiten, Case Studies) sollten monatlich für SEO und Glaubwürdigkeit aktualisiert werden. Technische Updates (Sicherheit, Plugins) werden monatlich von uns durchgeführt, wenn Sie ein Wartungspaket haben." },
    { q: "Kann ich mir meine Website selbst auf Wix oder Squarespace bauen?", a: "Können Sie, aber Sie werden eine semi-professionell aussehende Website bekommen, die sich nicht von Mitbewerbern unterscheidet, die das Gleiche tun. Custom-Websites konvertieren 30-50 % besser als Standard-Templates, weil sie speziell für Ihre Zielgruppe und Ihre Geschäftsziele gebaut sind." },
    { q: "Welche Inhalte brauche ich auf meiner Website?", a: "Minimum: Startseite mit klarer Botschaft, Über-uns-Seite mit Team und Geschichte, detaillierte Leistungs-/Produktseite, Kontaktseite mit mehreren Kontaktmöglichkeiten. Dazu: Testimonials von echten Kunden, Zahlen und Ergebnisse, Blog mit nützlichen Inhalten." },
    { q: "Wie schnell werde ich Ergebnisse sehen?", a: "Eine gut gebaute Website verbessert die Glaubwürdigkeit sofort (ab Launch). Der organische Traffic wächst in 3-6 Monaten durch SEO. Wenn Sie auch Werbung schalten (Google Ads, Facebook Ads), können Sie in der ersten Woche nach dem Launch Leads sehen." },
  ],
  testimonial: { quote: "Die neue Website lud 4x schneller und die Conversion-Rate stieg im ersten Monat um 35 %. Sie sieht genau so aus, wie wir es uns vorgestellt haben, vielleicht sogar besser.", name: "Elena P.", role: "Direktorin, private medizinische Klinik" },
  tools: ["Figma", "Next.js", "WordPress", "Shopify", "GTmetrix", "PageSpeed Insights"],
  toolsSectionTitle: "UNSERE TOOLS",
  freeAuditBadge: "Kostenloses Website-Audit Inklusive",
};

const IncludesSection = () => (
  <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)" }} />
    <div className="page-container">
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <span className="badge mb-6">Was wir liefern</span>
        <h2 className="font-black text-white" style={{ fontSize: "clamp(1.75rem,3.5vw,2.75rem)", lineHeight: 1.05, letterSpacing: "-0.025em", marginTop: "20px" }}>Alles, was Sie für eine professionelle Unternehmenswebsite brauchen</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ maxWidth: "960px", margin: "0 auto" }}>
        {[
          { icon: "🎨", title: "Custom-Design", desc: "Keine Templates. Jede Website wird von Grund auf für Ihre Marke entworfen, in Figma, von Ihnen vor der Entwicklung freigegeben." },
          { icon: "📱", title: "Mobile-first", desc: "70 % des Traffics kommt vom Smartphone. Das Design wird zuerst für Mobilgeräte erstellt, dann für den Desktop angepasst." },
          { icon: "⚡", title: "PageSpeed 90+", desc: "Vollständige Optimierung: WebP-Bilder, Lazy Loading, Premium-Hosting. Wir garantieren einen Score von 90+ bei Google PageSpeed." },
          { icon: "🔍", title: "Technisches SEO inklusive", desc: "URL-Struktur, Meta-Tags, Sitemap, Google Search Console. Ab dem Launch kann Google Sie korrekt indexieren." },
          { icon: "🛠️", title: "Einfach zu bedienendes CMS", desc: "Fügen Sie Neuigkeiten, Case Studies oder neue Teammitglieder hinzu, ohne programmieren zu können. Schulung bei Lieferung inklusive." },
          { icon: "🔒", title: "Sicherheit & DSGVO", desc: "SSL-Zertifikat, automatisches Backup, DSGVO-Konformität (Cookie-Consent, Datenschutzerklärung)." },
        ].map((item) => (
          <div key={item.icon} style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "16px", padding: "28px" }}>
            <div style={{ fontSize: "2rem", marginBottom: "12px" }}>{item.icon}</div>
            <h3 className="font-bold text-white" style={{ fontSize: "1rem", marginBottom: "8px" }}>{item.title}</h3>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function UnternehmensWebsiteDePage() {
  return (
    <>
      <Header locale="de" />
      <main>
        <ServicePageTemplate
          data={data}
          heroRightSlot={
            <AdsDashboardCard
              emoji="🏢"
              title="Unternehmens-Website Launch"
              date="September 2025"
              metrics={[
                { label: "Kontakte/Monat", animated: { target: 34 }, badge: { text: "↑ 340%", positive: true } },
                { label: "Verweildauer", animated: { target: 3.2, decimals: 1, suffix: "min" }, badge: { text: "↑ 87%", positive: true } },
                { label: "Absprungrate", animated: { target: 28, suffix: "%" }, badge: { text: "↓ 55%", positive: false } },
              ]}
              barPercent={94}
              barLabel="Conversion-Ziel erreicht"
              status="LIVE PageSpeed 94/100"
              badge1="8 → 34 Kontakte/Monat"
              badge2="Beratungsunternehmen, Rumänien"
            />
          }
          afterHeroSlot={
            <>
              <AdsTrustBar items={[
                { stat: "Custom-Design", label: "keine Templates" },
                { stat: "4-5", label: "Wochen Lieferung" },
                { stat: "PageSpeed 90+", label: "garantiert" },
                { stat: "50+", label: "gelieferte Websites" },
                { stat: "Schulung", label: "bei Lieferung inklusive" },
              ]} />
              <AdsBeforeAfter
                title="Echte Ergebnisse Vorher und nachher mit Nesco Digital"
                beforeLabel="Vorher"
                afterLabel="Nach Nesco"
                before={[
                  { label: "Kontakte/Monat über Website", display: "8" },
                  { label: "Verweildauer", display: "0.9 min" },
                  { label: "Absprungrate", display: "78%" },
                  { label: "PageSpeed Score", display: "34/100" },
                  { label: "Design", display: "Template 2018" },
                  { label: "Wahrgenommene Glaubwürdigkeit", display: "niedrig" },
                ]}
                after={[
                  { label: "Kontakte/Monat über Website", display: "34", animate: { target: 34 } },
                  { label: "Verweildauer", display: "3.2 min", animate: { target: 3.2, decimals: 1, suffix: " min" } },
                  { label: "Absprungrate", display: "28%", animate: { target: 28, suffix: "%" } },
                  { label: "PageSpeed Score", display: "94/100" },
                  { label: "Design", display: "Custom 2024" },
                  { label: "Wahrgenommene Glaubwürdigkeit", display: "hoch" },
                ]}
                source="Beratungsunternehmen, Rumänien 30 Tage nach Launch"
              />
              <AdsComparison
                badLabel="Website auf Template-Basis"
                goodLabel="Nesco Custom-Website"
                bad={[
                  "Template von ThemeForest gekauft, von 10.000 Websites verwendet",
                  "Schwache Performance: zu viel ungenutztes CSS und JS",
                  "Spiegelt nicht die einzigartige Identität Ihrer Marke wider",
                  "Schwer anpassbar ohne technische Kenntnisse",
                  "Keine Conversion-Strategie, nur Präsentation",
                  "Schwaches technisches SEO von Anfang an",
                ]}
                good={[
                  "Design von Grund auf speziell für Ihre Marke erstellt",
                  "Optimierter Code, PageSpeed 90+ garantiert",
                  "Einzigartige, einprägsame visuelle Identität",
                  "Intuitives CMS -- bearbeiten Sie selbst ohne Programmierung",
                  "Struktur für die Conversion von Besuchern gebaut",
                  "Korrektes technisches SEO ab dem ersten Tag",
                ]}
              />
              <IncludesSection />
              <AdsTimeline
                title="Unser Prozess in 5 Wochen"
                phases={[
                  {
                    emoji: "💬",
                    range: "Woche 1",
                    title: "Briefing & Strategie",
                    color: "#56db84",
                    items: [
                      "Kick-off-Meeting und detailliertes Briefing",
                      "Wettbewerbsanalyse und Benchmark",
                      "Website-Architektur und Sitemap",
                      "Moodboard und visuelle Ausrichtung",
                    ],
                  },
                  {
                    emoji: "🎨",
                    range: "Wochen 2-3",
                    title: "Design & Copywriting",
                    color: "#60a5fa",
                    items: [
                      "Vollständiges Design in Figma",
                      "Feedback-Runden und Anpassungen",
                      "Copywriting für alle Seiten",
                      "Finale Design-Freigabe",
                    ],
                  },
                  {
                    emoji: "🚀",
                    range: "Wochen 4-5",
                    title: "Entwicklung & Launch",
                    color: "#a78bfa",
                    items: [
                      "Entwicklung mit Next.js / WordPress",
                      "Cross-Browser- und Cross-Device-Testing",
                      "Setup GA4 und Google Search Console",
                      "Launch + CMS-Schulung (1 Std.)",
                    ],
                  },
                ]}
              />
              <WebsiteROICalculator />
            </>
          }
        />
      </main>
      <Footer locale="de" />
      <AdsStickyBar title="Wollen Sie eine Website, die beeindruckt?" cta="Angebot anfordern" href="/ge/lass-uns-reden/" />
    </>
  );
}
