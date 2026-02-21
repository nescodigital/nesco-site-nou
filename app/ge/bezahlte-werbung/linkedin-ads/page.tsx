import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "LinkedIn Ads Agentur | B2B Werbung | Nesco Digital",
  description: "LinkedIn Ads Kampagnen fuer B2B-Unternehmen. Lead Generation, Brand Awareness, Retargeting. Wir erreichen Entscheidungstraeger und Fachleute.",
  path: "/ge/bezahlte-werbung/linkedin-ads/",
  routeKey: "linkedinAds",
});

const data: ServicePageData = {
  locale: "de",
  breadcrumbCategory: "paidAds",
  hero: {
    badge: "LinkedIn Ads",
    title: "Erreichen Sie Entscheidungstraeger direkt mit LinkedIn Ads",
    subtitle: "LinkedIn ist die einzige Plattform, auf der Sie nach Jobtitel, Branche, Unternehmensgroesse und Senioритaet targeten koennen. Wenn Ihr Verkauf mehrere Entscheidungstraeger und einen langen Zyklus umfasst, veraendert LinkedIn Ihre B2B-Lead-Generierung grundlegend.",
  },
  problems: [
    { title: "Leads von anderen Plattformen haben keine B2B-Qualitaet", desc: "Ein Facebook-Nutzer ist nicht unbedingt der Entscheidungstraeger fuer einen Enterprise-Vertrag. LinkedIn weiss genau, wer CEO, CFO oder IT-Direktor ist." },
    { title: "C-Level ist per Cold Email nicht erreichbar", desc: "Direktoren blockieren unerwuenschte Anrufe. Auf LinkedIn erscheint Ihre Botschaft in ihrem professionellen Feed, im richtigen Kontext." },
    { title: "Der Verkaufszyklus ist lang und erfordert Nurturing", desc: "Komplexe B2B-Verkaeufe dauern 3-12 Monate. LinkedIn ermoeglicht den Beziehungsaufbau durch Content und Direktnachrichten waehrend des gesamten Zyklus." },
    { title: "Ihre Wettbewerber investieren bereits in LinkedIn", desc: "Wenn Ihr Unternehmen B2B ist und Sie nicht auf LinkedIn Ads sind, verlieren Sie Sichtbarkeit bei den Entscheidungstraegern, die Sie ansprechen moechten." },
  ],
  solutions: [
    { title: "Praezises B2B-Targeting", desc: "Jobtitel (CEO, CFO, Head of Marketing), Senioритaet, Branche, Unternehmensgroesse. Dieses Praezisionsniveau ist auf anderen Plattformen nicht erreichbar." },
    { title: "Sponsored Content, Thought Leadership im Feed", desc: "Artikel, Videos und Karussells, die die Autoritaet Ihrer Marke beim angestrebten B2B-Publikum aufbauen." },
    { title: "Message Ads, Direkt ins Postfach", desc: "Personalisierte Nachrichten direkt in den LinkedIn-Posteingang von Entscheidungstraegern. Oeffnungsrate 50-60% vs. 20% bei Cold Emails." },
    { title: "Lead Gen Forms, Reibungsfreie Erfassung", desc: "Native Formulare, vorab ausgefuellt mit LinkedIn-Profildaten. Wandeln Sie Interesse in qualifizierte Leads mit einem Klick um." },
    { title: "Account-Based Marketing (ABM)", desc: "Sie targeten direkt Ihre Wunschunternehmen nach Name. LinkedIn zeigt Ihre Anzeigen den Mitarbeitern der ausgewaehlten Unternehmen." },
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
    { q: "Wie viel Budget brauche ich fuer LinkedIn Ads?", a: "Wir empfehlen mindestens 800-1.000 Euro/Monat Werbebudget. LinkedIn hat einen hoeherem Mindestgebotsbetrag als andere Plattformen. Unter diesem Betrag ist die Reichweite zu begrenzt, um relevante Daten zu generieren." },
    { q: "Funktioniert es fuer kleine Unternehmen?", a: "Das haengt davon ab, was Sie verkaufen. Wenn Ihr Produkt oder Ihre Dienstleistung mindestens 5.000 Euro pro Kunde kostet, ist LinkedIn auch fuer KMUs gerechtfertigt. Wenn Sie Produkte mit niedrigem oder mittlerem Volumen verkaufen, sind andere Plattformen kosteneffizienter." },
    { q: "Wie weiss ich, dass ich echte Entscheidungstraeger erreiche?", a: "LinkedIn hat Identitaetsverifizierung ueber persoenliche Konten. Wir koennen Senioритaets-Ausschluesse setzen und targeten explizit Director, VP, C-Level, Owner, Partner. Der demografische Kampagnenbericht bestaetigt, wer die Anzeigen gesehen hat." },
    { q: "Wie lange dauert es, bis ich Leads generiere?", a: "Erste Leads erscheinen in der Regel nach 2-4 Wochen. Aber LinkedIn funktioniert nach dem Nurturing-Prinzip: Entscheidungstraeger muessen Ihre Marke mehrmals sehen, bevor sie handeln. Vollstaendige Ergebnisse zeigen sich in 60-90 Tagen." },
    { q: "Kann ich LinkedIn Ads nutzen, ohne Content auf der Unternehmensseite zu posten?", a: "Ja, Sponsored Content Anzeigen funktionieren unabhaengig von der organischen Aktivitaet der Seite. Aber eine aktive Seite erhoet die Glaubwuerdigkeit und senkt den CPM, da Nutzer das Unternehmen ueberpruefen koennen." },
  ],
  testimonial: { quote: "Wir generierten 3-4 B2B-Leads pro Monat aus allen Quellen. Nach 90 Tagen LinkedIn Ads mit Nesco generieren wir 18-22 qualifizierte Leads monatlich, mit einem um 30% kuerzerem Verkaufszyklus.", name: "Cristian V.", role: "Sales Director, Enterprise-Softwareunternehmen" },
  tools: ["LinkedIn Campaign Manager", "LinkedIn Insight Tag", "Sales Navigator", "Google Analytics 4", "Looker Studio"],
  toolsSectionTitle: "UNSERE TOOLS",
  freeAuditBadge: "Kostenloser LinkedIn Ads Audit Inklusive",
};

export default function LinkedInAdsDePage() {
  return (<><Header locale="de" /><main><ServicePageTemplate data={data} /></main><Footer locale="de" /></>);
}
