import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";
import { AdsDashboardCard } from "@/components/sections/ads/AdsDashboardCard";
import { AdsTrustBar } from "@/components/sections/ads/AdsTrustBar";
import { AdsBeforeAfter } from "@/components/sections/ads/AdsBeforeAfter";
import { AdsComparison } from "@/components/sections/ads/AdsComparison";
import { LinkedInFunnel } from "@/components/sections/ads/LinkedInFunnel";
import { AdsTimeline } from "@/components/sections/ads/AdsTimeline";
import { LinkedInCalculator } from "@/components/sections/ads/LinkedInCalculator";
import { AdsStickyBar } from "@/components/sections/ads/AdsStickyBar";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "LinkedIn Ads Agentur | B2B Werbung | Nesco Digital",
  description: "LinkedIn Ads Kampagnen fuer B2B-Unternehmen. Lead Generation, Brand Awareness, Retargeting. Wir erreichen Entscheidungstraeger und Fachleute.",
  path: "/ge/bezahlte-werbung/linkedin-ads/",
  routeKey: "linkedinAds",
});

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
    <path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
    <path fill="#4285F4" d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z" />
    <path fill="#34A853" d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.615 24 12.255 24z" />
    <path fill="#FBBC05" d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 000 10.76l3.98-3.09z" />
    <path fill="#EA4335" d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.64 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z" />
  </svg>
);

const data: ServicePageData = {
  locale: "de",
  breadcrumbCategory: "paidAds",
  hero: {
    badge: "LinkedIn Ads",
    title: "Erreichen Sie Entscheidungstraeger direkt mit LinkedIn Ads",
    subtitle: "LinkedIn ist die einzige Plattform, auf der Sie nach Jobtitel, Branche, Unternehmensgroesse und Senioritaet targeten koennen. Wenn Ihr Verkauf mehrere Entscheidungstraeger und einen langen Zyklus umfasst, veraendert LinkedIn Ihre B2B-Lead-Generierung grundlegend.",
  },
  problems: [
    { title: "Leads von anderen Plattformen haben keine B2B-Qualitaet", desc: "Ein Facebook-Nutzer ist nicht unbedingt der Entscheidungstraeger fuer einen Enterprise-Vertrag. LinkedIn weiss genau, wer CEO, CFO oder IT-Direktor ist." },
    { title: "C-Level ist per Cold Email nicht erreichbar", desc: "Direktoren blockieren unerwuenschte Anrufe. Auf LinkedIn erscheint Ihre Botschaft in ihrem professionellen Feed, im richtigen Kontext." },
    { title: "Der Verkaufszyklus ist lang und erfordert Nurturing", desc: "Komplexe B2B-Verkaeufe dauern 3-12 Monate. LinkedIn ermoeglicht den Beziehungsaufbau durch Content und Direktnachrichten waehrend des gesamten Zyklus." },
    { title: "Ihre Wettbewerber investieren bereits in LinkedIn", desc: "Wenn Ihr Unternehmen B2B ist und Sie nicht auf LinkedIn Ads setzen, verlieren Sie Sichtbarkeit bei den Entscheidungstraegern, die Sie ansprechen moechten." },
  ],
  solutions: [
    { title: "Praezises B2B-Targeting", desc: "Jobtitel (CEO, CFO, Head of Marketing), Senioritaet, Branche, Unternehmensgroesse. Dieses Praezisionsniveau ist auf anderen Plattformen nicht erreichbar." },
    { title: "Sponsored Content, Thought Leadership im Feed", desc: "Artikel, Videos und Karussells, die die Autoritaet Ihrer Marke beim angestrebten B2B-Publikum aufbauen." },
    { title: "Message Ads, Direkt ins Postfach", desc: "Personalisierte Nachrichten direkt in den LinkedIn-Posteingang von Entscheidungstraegern. Oeffnungsrate 50-60% vs. 20% bei Cold Emails." },
    { title: "Lead Gen Forms, Reibungsfreie Erfassung", desc: "Native Formulare, vorab ausgefuellt mit LinkedIn-Profildaten. Wandeln Sie Interesse in qualifizierte Leads mit einem Klick um." },
    { title: "Account-Based Marketing (ABM)", desc: "Targeten Sie direkt Ihre Wunschunternehmen nach Name. LinkedIn zeigt Ihre Anzeigen den Mitarbeitern der ausgewaehlten Unternehmen." },
    { title: "Retargeting und aehnliche Zielgruppen", desc: "Wir re-engagen Website-Besucher und erstellen Lookalike Audiences basierend auf Ihren bestehenden Kunden." },
  ],
  cases: [
    { metric: "+150%", label: "Qualifizierte B2B-Leads", industry: "SaaS-Plattform" },
    { metric: "-40%", label: "CPL vs. andere Kanaele", industry: "Enterprise Software" },
    { metric: "5x Pipeline", label: "Generierte Opportunities", industry: "B2B-Dienstleistungen" },
    { metric: "60%", label: "Oeffnungsrate Message Ads", industry: "Unternehmensberatung" },
    { metric: "-35%", label: "Kosten pro qualifizierter Opportunity", industry: "IT-Services" },
    { metric: "3x MQL", label: "Marketing Qualified Leads", industry: "B2B SaaS" },
  ],
  omnichannelServices: ["Google Ads", "E-Mail-Marketing", "CRM-Loesungen", "Digitale Strategie", "SEO"],
  faq: [
    { q: "Warum ist LinkedIn teurer als Facebook oder Google?", a: "Der CPM auf LinkedIn ist hoeher, aber die Lead-Qualitaet ist unvergleichlich. Ein qualifizierter B2B-Lead aus LinkedIn ist 5-10x wertvoller als einer von Facebook. Rechnet man die Kosten pro qualifizierter Opportunity, ist LinkedIn oft guenstiger." },
    { q: "Wie viel Budget brauche ich fuer LinkedIn Ads?", a: "Wir empfehlen mindestens 800-1.000 Euro/Monat Werbebudget. LinkedIn hat einen hoeheren Mindestgebotsbetrag als andere Plattformen. Unter diesem Betrag ist die Reichweite zu begrenzt, um relevante Daten zu generieren." },
    { q: "Funktioniert es fuer kleine Unternehmen?", a: "Das haengt davon ab, was Sie verkaufen. Wenn Ihr Produkt oder Ihre Dienstleistung mindestens 5.000 Euro pro Kunde kostet, ist LinkedIn auch fuer KMUs gerechtfertigt. Wenn Sie Produkte mit niedrigem oder mittlerem Volumen verkaufen, sind andere Plattformen kosteneffizienter." },
    { q: "Wie weiss ich, dass ich echte Entscheidungstraeger erreiche?", a: "LinkedIn hat Identitaetsverifizierung ueber persoenliche Konten. Wir koennen Senioritaets-Ausschluesse setzen und targeten explizit Director, VP, C-Level, Owner, Partner. Der demografische Kampagnenbericht bestaetigt, wer die Anzeigen gesehen hat." },
    { q: "Wie lange dauert es, bis ich Leads generiere?", a: "Erste Leads erscheinen in der Regel nach 2-4 Wochen. Aber LinkedIn funktioniert nach dem Nurturing-Prinzip: Entscheidungstraeger muessen Ihre Marke mehrmals sehen, bevor sie handeln. Vollstaendige Ergebnisse zeigen sich in 60-90 Tagen." },
    { q: "Kann ich LinkedIn Ads nutzen, ohne Content auf der Unternehmensseite zu posten?", a: "Ja, Sponsored Content Anzeigen funktionieren unabhaengig von der organischen Aktivitaet der Seite. Aber eine aktive Seite erhoeht die Glaubwuerdigkeit und senkt den CPM, da Nutzer das Unternehmen ueberpruefen koennen." },
  ],
  testimonial: { quote: "Wir generierten 3-4 B2B-Leads pro Monat aus allen Quellen. Nach 90 Tagen LinkedIn Ads mit Nesco generieren wir 18-22 qualifizierte Leads monatlich, mit einem um 30% kuerzeren Verkaufszyklus.", name: "Cristian V.", role: "Sales Director, Enterprise-Softwareunternehmen" },
  tools: ["LinkedIn Campaign Manager", "LinkedIn Insight Tag", "Sales Navigator", "Google Analytics 4", "Looker Studio"],
  toolsSectionTitle: "UNSERE TOOLS",
  freeAuditBadge: "Kostenloser LinkedIn Ads Audit Inklusive",
};

const trustBarItems: { icon?: ReactNode; label: string; stat?: string }[] = [
  { icon: <LinkedInIcon />, label: "LinkedIn Marketing Solutions" },
  { icon: <GoogleIcon />, label: "Google Partner" },
  { stat: "950M+", label: "LinkedIn-Nutzer weltweit" },
  { stat: "50-60%", label: "Oeffnungsrate Message Ads" },
  { stat: "15", label: "Jahre B2B-Erfahrung" },
];

const dashboardCard = (
  <AdsDashboardCard
    emoji="💼"
    title="LinkedIn Ads B2B"
    date="Oktober 2025"
    metrics={[
      { label: "Leads/Monat", animated: { target: 22 }, badge: { text: "↑ 633%", positive: true } },
      { label: "CPL", animated: { target: 85, suffix: " lei" }, badge: { text: "↓ 40%", positive: false } },
      { label: "Erreichte Entscheider", animated: { target: 18400 }, badge: { text: "↑ 150%", positive: true } },
    ]}
    barPercent={83}
    barLabel="Budget verwendet"
    status="AKTIV Sponsored Content + Message Ads"
    badge1="Von 3 auf 22 B2B-Leads/Monat"
    badge2="SaaS Enterprise, Rumaenien"
  />
);

const afterHeroContent = (
  <>
    <AdsTrustBar items={trustBarItems} />
    <AdsBeforeAfter
      title="Echte Ergebnisse Vor und nach Nesco Digital"
      beforeLabel="Vorher"
      afterLabel="Nach Nesco"
      before={[
        { label: "B2B-Leads/Monat", display: "3" },
        { label: "Lead-Quelle", display: "Cold E-Mail" },
        { label: "Lead-Qualitaet", display: "durchschnittlich" },
        { label: "Verkaufszyklus", display: "9 Monate" },
        { label: "Monatliche Pipeline", display: "30.000€" },
        { label: "CPL", display: "400€" },
      ]}
      after={[
        { label: "B2B-Leads/Monat", display: "22", animate: { target: 22 } },
        { label: "Lead-Quelle", display: "LinkedIn Ads" },
        { label: "Lead-Qualitaet", display: "C-Suite bestaetigt" },
        { label: "Verkaufszyklus", display: "6 Monate (−30%)" },
        { label: "Monatliche Pipeline", display: "220.000€", animate: { target: 220000 } },
        { label: "CPL", display: "85€", animate: { target: 85, suffix: "€" } },
      ]}
      source="SaaS Enterprise B2B, Rumaenien 90 Tage"
    />
    <AdsComparison
      bad={[
        "LinkedIn-Beitraege boosten ohne B2B-Targeting",
        "Breite Zielgruppen (alle Branchen)",
        "Keine Lead Gen Forms",
        "Cold E-Mail als einzige Outbound-Strategie",
        "Kein Retargeting auf Website-Besucher",
        "Reporting: Impressions und Klicks",
      ]}
      good={[
        "Exaktes Targeting: Jobtitel + Senioritaet + Unternehmensgroesse",
        "Account-Based Marketing auf Zielunternehmen",
        "Vorausgefuellte Lead Gen Forms (1-Klick-Lead)",
        "Message Ads direkt ins Postfach mit 50-60% Oeffnungsrate",
        "Retargeting auf Besucher + Lookalike auf Kunden",
        "Reporting: CPL, generierte Pipeline, echter ROI",
      ]}
    />
    <LinkedInFunnel />
    <AdsTimeline
      phases={[
        {
          emoji: "🎯",
          range: "Tage 1–14",
          title: "ABM Setup",
          color: "#0A66C2",
          items: [
            "Setup LinkedIn Campaign Manager",
            "Definition ICP und Zielunternehmensliste",
            "Konfiguration Insight Tag auf der Website",
            "Erste Sponsored Content Kampagnen",
          ],
        },
        {
          emoji: "📨",
          range: "Tage 15–45",
          title: "Engagement & Lead Gen",
          color: "#60a5fa",
          items: [
            "Start Message Ads und Lead Gen Forms",
            "A/B-Testing von Creatives und Nachrichten",
            "Optimierung CPL und Lead-Qualitaet",
            "Retargeting auf Besucher und Engagements",
          ],
        },
        {
          emoji: "📈",
          range: "Tage 46–90",
          title: "Scale & Nurture",
          color: "#56db84",
          items: [
            "Skalierung auf Kampagnen mit dem besten CPL",
            "Integration der Leads ins CRM",
            "Nurturing-Kampagnen fuer lange Verkaufszyklen",
            "Konsolidierte Full-Funnel B2B-Strategie",
          ],
        },
      ]}
    />
    <LinkedInCalculator />
  </>
);

export default function LinkedInAdsDePage() {
  return (
    <>
      <Header locale="de" />
      <main>
        <ServicePageTemplate
          data={data}
          heroRightSlot={dashboardCard}
          afterHeroSlot={afterHeroContent}
        />
      </main>
      <AdsStickyBar
        title="Bereit, qualifizierte B2B-Leads zu generieren?"
        cta="Sprechen Sie mit einem Spezialisten"
        href="/ge/lass-uns-reden/"
      />
      <Footer locale="de" />
    </>
  );
}
