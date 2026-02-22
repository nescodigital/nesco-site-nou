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
import { LinkedInFunnel } from "@/components/sections/ads/LinkedInFunnel";
import { LinkedInCalculator } from "@/components/sections/ads/LinkedInCalculator";

export const metadata: Metadata = buildMetadata({ locale: "de", title: "LinkedIn Ads Agentur | B2B Werbung | Nesco Digital", description: "LinkedIn Ads Kampagnen für B2B-Unternehmen. Lead-Generierung, Brand Awareness, Retargeting. Wir erreichen Entscheidungsträger.", path: "/ge/linkedin-de/", routeKey: "linkedinAds" });

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
  hero: { badge: "LinkedIn Ads", title: "LinkedIn Ads", subtitle: "Die leistungsstärkste B2B-Werbeplattform. Wir helfen Ihnen, Entscheidungsträger zu erreichen, qualifizierte Leads zu generieren und enterprise-weite Pipelines aufzubauen." },
  problems: [{ title: "Niedrige B2B-Lead-Qualität", desc: "Leads, die nicht zum ICP passen" }, { title: "Hohe Kosten pro Enterprise-Lead", desc: "Teure Leads durch falsches Targeting" }, { title: "Falsches Audience-Targeting", desc: "Entscheidungsträger werden nicht erreicht" }, { title: "Kein C-Suite-Zugang", desc: "Kann nicht die richtige Führungsebene erreichen" }],
  solutions: [{ title: "Entscheidungsträger-Targeting", desc: "Job-Titel, Seniorität, Unternehmensgröße, präzises B2B-Targeting." }, { title: "Sponsored Content", desc: "Thought-Leadership-Content, der Vertrauen bei der Zielgruppe aufbaut." }, { title: "InMail-Kampagnen", desc: "Direktes Outreach an Entscheidungsträger." }, { title: "Lead-Gen-Forms", desc: "Native LinkedIn-Formulare für reibungslose Lead-Erfassung." }, { title: "Account-Based Marketing", desc: "Wunschunternehmen nach Namen targetieren." }, { title: "LinkedIn-Retargeting", desc: "Website-Besucher und Video-Viewer erneut ansprechen." }],
  cases: [{ metric: "+150%", label: "B2B-Leads aus LinkedIn", industry: "SaaS-Plattform" }, { metric: "-40%", label: "CPL gegenüber anderen Kanälen", industry: "Enterprise Software" }, { metric: "5x Pipeline", label: "Revenue-Pipeline aus LinkedIn", industry: "B2B-Dienstleistungen" }],
  omnichannelServices: ["Google Ads", "E-Mail-Marketing", "CRM-Lösungen", "Digitale Strategie", "SEO"],
};

export default function LinkedInDePage() {
  const heroRightSlot = (
    <AdsDashboardCard
      emoji="💼"
      title="LinkedIn Ads B2B Kampagne"
      date="Oktober 2025"
      metrics={[
        { label: "Leads/Monat", animated: { target: 22 }, badge: { text: "↑ 633%", positive: true } },
        { label: "CPL", animated: { target: 85, suffix: "€" }, badge: { text: "↓ 40%", positive: false } },
        { label: "Entscheidungsträger erreicht", animated: { target: 18400 }, badge: { text: "↑ 150%", positive: true } },
      ]}
      barPercent={83}
      barLabel="Budget genutzt"
      status="AKTIV Sponsored Content + InMail"
      badge1="Von 3 auf 22 B2B Leads/Monat"
      badge2="SaaS Enterprise, Rumänien"
    />
  );

  const afterHeroSlot = (
    <>
      <AdsTrustBar items={[
        { icon: <LinkedInIcon />, label: "LinkedIn Marketing Solutions" },
        { icon: <GoogleIcon />, label: "Google Partner" },
        { stat: "950M+", label: "LinkedIn-Nutzer weltweit" },
        { stat: "50-60%", label: "InMail-Öffnungsrate" },
        { stat: "15", label: "Jahre B2B-Erfahrung" },
      ]} />
      <AdsBeforeAfter
        title="Echte Ergebnisse Vor und Nach Nesco Digital"
        beforeLabel="Vorher"
        afterLabel="Nach Nesco"
        before={[
          { label: "B2B Leads/Monat", display: "3" },
          { label: "Lead-Quelle", display: "Cold E-Mail" },
          { label: "Lead-Qualität", display: "durchschnittlich" },
          { label: "Sales-Zyklus", display: "9 Monate" },
          { label: "Monatliche Pipeline", display: "30.000€" },
          { label: "CPL", display: "400€" },
        ]}
        after={[
          { label: "B2B Leads/Monat", display: "22", animate: { target: 22 } },
          { label: "Lead-Quelle", display: "LinkedIn Ads" },
          { label: "Lead-Qualität", display: "C-Suite bestätigt" },
          { label: "Sales-Zyklus", display: "6 Monate (−30%)" },
          { label: "Monatliche Pipeline", display: "220.000€", animate: { target: 220000 } },
          { label: "CPL", display: "85€", animate: { target: 85, suffix: "€" } },
        ]}
        source="B2B SaaS Enterprise, Rumänien 90 Tage"
      />
      <AdsComparison
        bad={[
          "LinkedIn-Posts boosten ohne B2B-Targeting",
          "Breite Zielgruppen über alle Branchen",
          "Keine Lead-Gen-Forms",
          "Cold E-Mail als einzige Outbound-Strategie",
          "Kein Retargeting für Website-Besucher",
          "Reporting: Impressionen und Klicks",
        ]}
        good={[
          "Präzises Targeting: Job-Titel + Seniorität + Unternehmensgröße",
          "Account-Based Marketing auf Zielunternehmen",
          "Vorausgefüllte Lead-Gen-Forms (1-Klick Lead-Erfassung)",
          "InMail direkt in Posteingänge mit 50–60% Öffnungsrate",
          "Retargeting von Besuchern + Lookalike aus Kunden",
          "Reporting: CPL, generierte Pipeline, echter ROI",
        ]}
      />
      <LinkedInFunnel />
      <AdsTimeline
        phases={[
          {
            emoji: "🎯",
            range: "Tage 1–14",
            title: "ABM-Setup",
            color: "#0A66C2",
            items: [
              "LinkedIn Campaign Manager einrichten",
              "ICP-Definition und Zielunternehmensliste",
              "Insight Tag auf Website installieren",
              "Erste Sponsored Content Kampagnen gestartet",
            ],
          },
          {
            emoji: "📨",
            range: "Tage 15–45",
            title: "Engagement & Lead Gen",
            color: "#60a5fa",
            items: [
              "InMail und Lead-Gen-Forms gestartet",
              "A/B-Tests für Creatives und Nachrichten",
              "CPL und Lead-Qualität optimieren",
              "Retargeting auf Besucher und Engagements",
            ],
          },
          {
            emoji: "📈",
            range: "Tage 46–90",
            title: "Skalierung & Nurturing",
            color: "#56db84",
            items: [
              "Budgets bei besten CPL-Kampagnen skalieren",
              "CRM-Integration für Leads",
              "Nurturing-Kampagnen für lange Sales-Zyklen",
              "Full-Funnel B2B-Strategie konsolidiert",
            ],
          },
        ]}
      />
      <LinkedInCalculator />
    </>
  );

  return (
    <>
      <Header locale="de" />
      <main>
        <ServicePageTemplate
          data={data}
          heroRightSlot={heroRightSlot}
          afterHeroSlot={afterHeroSlot}
        />
      </main>
      <Footer locale="de" />
      <AdsStickyBar title="Bereit, qualifizierte B2B-Leads zu generieren?" cta="Mit einem Experten sprechen" href="/ge/lass-uns-reden/" />
    </>
  );
}
