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
import { LeadGenCalculator } from "@/components/sections/LeadGenCalculator";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "Lead-Generation-Website | Websites die konvertieren | Nesco Digital",
  description: "Strategisch aufgebaute Lead-Generation-Websites. Optimierte Landingpages, Kontaktformulare, CRM-Integrationen. Wir verwandeln Besucher in qualifizierte Leads.",
  path: "/ge/lead-generation-website-de/",
  routeKey: "leadGenWebsite",
});

const data: ServicePageData = {
  locale: "de",
  breadcrumbCategory: "webdesign",
  hero: {
    badge: "Lead-Generation-Website",
    title: "Verwandeln Sie Ihre Website in Ihren besten Vertriebsmitarbeiter, aktiv rund um die Uhr",
    subtitle: "Eine Lead-Generation-Website ist keine Präsentationsseite mit einem Kontaktformular. Sie ist ein strategisch aufgebautes System, das Besucher anzieht, ihr Vertrauen aufbaut und sie rund um die Uhr in qualifizierte potenzielle Kunden verwandelt.",
  },
  problems: [
    { title: "Ihre Website ist eine digitale Broschüre, keine Verkaufsmaschine", desc: "Sie zeigt, wer Sie sind und was Sie tun, überzeugt den Besucher aber nicht zum Handeln. Die Elemente, die Neugier in Kontaktaufnahme verwandeln, fehlen." },
    { title: "Besucher kommen und gehen, ohne Daten zu hinterlassen", desc: "Ohne einen klaren Erfassungsmechanismus (Formular, sichtbare Telefonnummer, Live-Chat) verschwinden 98 % der Besucher für immer." },
    { title: "Die Botschaft beantwortet nicht \"Warum Sie?\"", desc: "Wenn der Besucher nicht innerhalb der ersten 5 Sekunden versteht, welchen einzigartigen Vorteil Sie bieten, schaut er bei der Konkurrenz." },
    { title: "Sie wissen nicht, wie viele Leads Ihre Website generiert (oder nicht)", desc: "Ohne korrektes Tracking und Analytics fahren Sie blind -- Sie wissen nicht, welche Seiten anziehen und welche Besucher abstoßen." },
  ],
  solutions: [
    { title: "Datengesteuerte Conversion-Strategie", desc: "Wir analysieren das bestehende Besucherverhalten, identifizieren Absprungstellen und entwerfen eine Website, die natürlich zur Handlung führt." },
    { title: "Überzeugende Texte -- die Worte, die überzeugen", desc: "Wir schreiben nicht \"Wir sind erfahrene Marktführer.\" Wir schreiben klare, nutzenfokussierte Botschaften, die auf die echten Einwände Ihrer Kunden eingehen." },
    { title: "Conversion-fokussiertes Design", desc: "Die visuelle Struktur lenkt den Blick des Besuchers zum CTA. Strategische Buttons, einfache Formulare, Social Proof (Testimonials, Zahlen, Kundenlogos)." },
    { title: "Spezialisierte Landingpages", desc: "Für jede Dienstleistung oder jedes Produkt eine Seite mit einem einzigen Zweck: Conversion. Die Leistung ist 2-3x besser als bei allgemeinen Seiten." },
    { title: "Intelligente Formulare", desc: "Mehrstufige Formulare, die bei jedem Schritt weniger abfragen, konvertieren besser. Wir integrieren mit Ihrem CRM oder E-Mail für sofortige Benachrichtigungen." },
    { title: "Analytics und kontinuierliche Optimierung", desc: "Wir installieren vollständiges Tracking (Google Analytics, Heatmaps) und optimieren kontinuierlich: Überschriften, Bilder, Formulare, CTAs basierend auf echtem Verhalten." },
  ],
  cases: [
    { metric: "+47%", label: "Angebotsanfragen", industry: "IT-Beratung" },
    { metric: "+80%", label: "Qualifizierte Leads", industry: "Zahnklinik" },
    { metric: "3.8x ROI", label: "Return aus Werbung", industry: "B2B-Dienstleistungen" },
    { metric: "+50%", label: "Online-Termine", industry: "Medizinische Klinik" },
    { metric: "+160%", label: "Newsletter-Abonnenten", industry: "Fitnesscenter" },
    { metric: "-42%", label: "Kosten pro Lead", industry: "Immobilienagentur" },
  ],
  omnichannelServices: ["Google Ads", "Facebook Ads", "E-Mail-Marketing", "CRO", "SEO"],
  faq: [
    { q: "Was ist der Unterschied zwischen einer Präsentationswebsite und einer Lead-Generation-Website?", a: "Eine Präsentationswebsite sagt, wer Sie sind. Eine Lead-Generation-Website überzeugt einen unentschlossenen Besucher zum Handeln -- anzurufen, ein Formular abzusenden, ein Meeting zu buchen. Der Unterschied liegt in: überzeugenden Texten, Seitenstruktur, optimierten Formularen und strategischem Social Proof." },
    { q: "Ich habe bereits eine Website. Muss ich von Grund auf neu anfangen?", a: "Nicht immer. Manchmal reicht ein strategisches Redesign: Wir ändern die Struktur, verbessern das Copywriting und optimieren Formulare. Wir führen ein kostenloses Audit durch und sagen Ihnen ehrlich, ob Sie eine neue Website oder Verbesserungen benötigen." },
    { q: "Auf welcher Plattform bauen Sie?", a: "Wir empfehlen WordPress für Flexibilität und einfache Verwaltung oder Next.js für maximale Performance und PageSpeed 95+. Wir wählen die Plattform nach Ihren Bedürfnissen, nicht als Einheitslösung." },
    { q: "Wie lange dauert es, eine Lead-Generation-Website zu erstellen?", a: "Typisch: 4-6 Wochen für eine Website mit 5-10 Seiten. Dies umfasst: Audit und Strategie (1 Woche), Design (1-2 Wochen), Entwicklung (1-2 Wochen) und Testing/Launch (1 Woche). Die genaue Dauer hängt von der Komplexität ab." },
    { q: "Was passiert, wenn die neue Website nicht mehr Leads generiert?", a: "Wir haben eine Richtlinie der vollständigen Transparenz. Wenn sich die Conversion-Rate innerhalb von 60 Tagen nach dem Launch nicht verbessert hat, überarbeiten wir kostenlos jedes als Problem identifizierte Element -- basierend auf Daten, nicht auf Meinungen." },
    { q: "Ist SEO im Website-Preis inbegriffen?", a: "Wir beinhalten grundlegendes technisches SEO: URL-Struktur, Meta-Tags, Ladegeschwindigkeit, Sitemap und Google Search Console Einrichtung. Kontinuierliches SEO (Content-Erstellung, Link Building) ist ein separater Service, aber empfohlen für langfristige Nachhaltigkeit." },
    { q: "Kann ich den Inhalt nach dem Launch selbst bearbeiten?", a: "Ja. Jede Website beinhaltet eine 1-stündige Schulung und schriftliche Dokumentation. Sie können Texte, Bilder bearbeiten und neue Seiten ohne technische Kenntnisse hinzufügen. Für komplexere Änderungen haben wir monatliche Support-Pakete." },
  ],
  testimonial: { quote: "Die neue Website lud 4x schneller und die Conversion-Rate stieg im ersten Monat um 35 %. Sie sieht genau so aus, wie wir es uns vorgestellt haben, vielleicht sogar besser.", name: "Elena P.", role: "Direktorin, private medizinische Klinik" },
  tools: ["Figma", "Next.js", "WordPress", "Hotjar", "GTmetrix", "PageSpeed Insights"],
  toolsSectionTitle: "UNSERE TOOLS",
  freeAuditBadge: "Kostenloses Website-Audit Inklusive",
};

const AnatomySection = () => (
  <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)" }} />
    <div className="page-container">
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <span className="badge mb-6">Anatomie</span>
        <h2 className="font-black text-white" style={{ fontSize: "clamp(1.75rem,3.5vw,2.75rem)", lineHeight: 1.05, letterSpacing: "-0.025em", marginTop: "20px" }}>Die Anatomie einer Website, die konvertiert</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ maxWidth: "960px", margin: "0 auto" }}>
        {[
          { num: "\u2460", title: "Hero mit klarem Wertversprechen", desc: "Der erste Abschnitt sagt in 5 Sekunden: wer Sie sind, wen Sie ansprechen, welchen einzigartigen Nutzen Sie bieten. Sichtbarer CTA above the fold." },
          { num: "\u2461", title: "Social Proof", desc: "Echte Testimonials mit Fotos, nachweisbare Zahlen (50+ Kunden, 98 % Zufriedenheit), bekannte Kundenlogos." },
          { num: "\u2462", title: "Optimierte Formulare", desc: "Kurze Formulare (3-5 Felder), strategisch platziert, mit handlungsorientierten CTAs: nicht 'Absenden', sondern 'Kostenloses Angebot erhalten'." },
          { num: "\u2463", title: "Dedizierte Serviceseiten", desc: "Jede Dienstleistung auf einer eigenen Seite, mit klaren Vorteilen, Arbeitsprozess, FAQ und spezifischem CTA." },
          { num: "\u2464", title: "Ladezeit unter 2 Sekunden", desc: "Jede zusätzliche Sekunde senkt die Conversions um 7 %. WebP-Bilder, Premium-Hosting, optimierter Code." },
          { num: "\u2465", title: "Vollständiges Tracking und Analytics", desc: "Google Analytics 4, Heatmaps, Session-Recordings. Sie wissen genau, wo Besucher abspringen und warum." },
        ].map((item) => (
          <div key={item.num} style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "16px", padding: "28px" }}>
            <div style={{ fontSize: "2rem", marginBottom: "12px" }}>{item.num}</div>
            <h3 className="font-bold text-white" style={{ fontSize: "1rem", marginBottom: "8px" }}>{item.title}</h3>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function LeadGenDePage() {
  return (
    <>
      <Header locale="de" />
      <main>
        <ServicePageTemplate
          data={data}
          heroRightSlot={
            <AdsDashboardCard
              emoji="💡"
              title="Lead Gen Site Conversion"
              date="Oktober 2025"
              metrics={[
                { label: "Conversion-Rate", animated: { target: 3.8, decimals: 1, suffix: "%" }, badge: { text: "↑ 380%", positive: true } },
                { label: "Leads/Monat", animated: { target: 47 }, badge: { text: "↑ 156%", positive: true } },
                { label: "Kosten pro Lead", animated: { target: 42, suffix: "€" }, badge: { text: "↓ 42%", positive: false } },
              ]}
              barPercent={88}
              barLabel="Monatsziel erreicht"
              status="LIVE PageSpeed 96/100"
              badge1="0.8% → 3.8% Conversion-Rate"
              badge2="IT-Beratung, Rumänien"
            />
          }
          afterHeroSlot={
            <>
              <AdsTrustBar items={[
                { stat: "PageSpeed 90+", label: "garantiert bei Lieferung" },
                { stat: "4-6", label: "Wochen Lieferzeit" },
                { stat: "50+", label: "gelieferte Websites" },
                { stat: "35%", label: "durchschnittliche Conversion-Steigerung" },
                { stat: "24/7", label: "Support nach dem Launch" },
              ]} />
              <AdsBeforeAfter
                title="Echte Ergebnisse Vorher und nachher mit Nesco Digital"
                beforeLabel="Vorher"
                afterLabel="Nach Nesco"
                before={[
                  { label: "Conversion-Rate", display: "0.8%" },
                  { label: "Leads/Monat", display: "18" },
                  { label: "Ladezeit", display: "6.2s" },
                  { label: "PageSpeed Score", display: "42/100" },
                  { label: "Mobile Experience", display: "katastrophal" },
                  { label: "Kosten pro Lead", display: "145€" },
                ]}
                after={[
                  { label: "Conversion-Rate", display: "3.8%", animate: { target: 3.8, decimals: 1, suffix: "%" } },
                  { label: "Leads/Monat", display: "47", animate: { target: 47 } },
                  { label: "Ladezeit", display: "1.4s" },
                  { label: "PageSpeed Score", display: "96/100" },
                  { label: "Mobile Experience", display: "perfekt" },
                  { label: "Kosten pro Lead", display: "42€", animate: { target: 42, suffix: "€" } },
                ]}
                source="IT-Beratung, Rumänien 60 Tage"
              />
              <AdsComparison
                badLabel="Klassische Präsentationswebsite"
                goodLabel="Lead-Generation-Website"
                bad={[
                  "Startseite mit generischem Unternehmenstext",
                  "Ein Kontaktformular auf der Kontaktseite",
                  "Kein CTA above the fold",
                  "Fehlende Testimonials und Social Proof",
                  "Ladezeit 4-8 Sekunden",
                  "Kein korrektes Tracking und Analytics",
                ]}
                good={[
                  "Hero mit klarem Wertversprechen und prominentem CTA",
                  "Formulare auf jeder Serviceseite",
                  "Sichtbarer CTA above the fold auf allen Geräten",
                  "Echte Testimonials, überprüfbare Zahlen, Case Studies",
                  "PageSpeed 90+ auf Desktop und Mobil",
                  "GA4 + Heatmaps + Session-Recordings",
                ]}
              />
              <AnatomySection />
              <AdsTimeline
                title="Unser Prozess in 6 Wochen"
                phases={[
                  {
                    emoji: "🔍",
                    range: "Wochen 1-2",
                    title: "Audit & Strategie",
                    color: "#56db84",
                    items: [
                      "Audit der aktuellen Website und Wettbewerbsanalyse",
                      "Definition von ICP und idealer Customer Journey",
                      "Conversion-Strategie und Website-Architektur",
                      "Design-Brief und Wireframes",
                    ],
                  },
                  {
                    emoji: "🎨",
                    range: "Wochen 3-4",
                    title: "Design & Copywriting",
                    color: "#60a5fa",
                    items: [
                      "Vollständiges Design in Figma, von Ihnen freigegeben",
                      "Conversion-optimiertes Copywriting",
                      "Integrierte Testimonials und Social Proof",
                      "Mobile-first-Ansatz",
                    ],
                  },
                  {
                    emoji: "🚀",
                    range: "Wochen 5-6",
                    title: "Entwicklung & Launch",
                    color: "#a78bfa",
                    items: [
                      "Entwicklung mit Next.js oder WordPress",
                      "PageSpeed optimiert: 90+ garantiert",
                      "Vollständiges Tracking: GA4 + Hotjar",
                      "Launch + Nutzungsschulung",
                    ],
                  },
                ]}
              />
              <LeadGenCalculator />
            </>
          }
        />
      </main>
      <Footer locale="de" />
      <AdsStickyBar title="Wollen Sie eine Website, die Leads generiert?" cta="Kostenloses Audit" href="/ge/lass-uns-reden/" />
    </>
  );
}
