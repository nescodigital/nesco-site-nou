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
  locale: "ro",
  title: "LinkedIn Ads România | B2B Advertising | Nesco Digital",
  description: "Campanii LinkedIn Ads pentru companii B2B. Lead generation, brand awareness, retargeting. Ajungem la decidenți și profesioniști.",
  path: "/reclame-platite/linkedin-ads/",
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
  locale: "ro",
  breadcrumbCategory: "paidAds",
  hero: {
    badge: "LinkedIn Ads",
    title: "Ajunge direct la factorii de decizie cu LinkedIn Ads",
    subtitle: "LinkedIn este singura platformă unde poți targeta după job title, industrie, dimensiunea companiei și senioritate. Dacă vânzarea ta implică mai mulți decidenți și un ciclu lung, LinkedIn transformă modul în care generezi lead-uri B2B.",
  },
  problems: [
    { title: "Lead-urile de pe alte platforme nu au calitate B2B", desc: "Un utilizator de pe Facebook nu este neapărat factorul de decizie pentru un contract enterprise. LinkedIn știe exact cine este CEO, CFO sau IT Director." },
    { title: "Nu poți ajunge la C-suite prin cold email", desc: "Directorii blochează apelurile nesolicitate. Pe LinkedIn, mesajul tău apare în feed-ul lor profesional, în contextul potrivit." },
    { title: "Ciclul de vânzare este lung și ai nevoie de nurturing", desc: "Vânzările B2B complexe iau 3-12 luni. LinkedIn permite construirea relației prin conținut și mesagerie directă pe parcursul întregului ciclu." },
    { title: "Concurenții tăi investesc deja în LinkedIn", desc: "Dacă afacerea ta este B2B și nu ești pe LinkedIn Ads, pierzi vizibilitate în fața decidenților pe care îi urmărești." },
  ],
  solutions: [
    { title: "Targetare exactă B2B", desc: "Job title (CEO, CFO, Head of Marketing), senioritate, industrie, dimensiunea companiei. Nivelul de precizie imposibil de atins pe alte platforme." },
    { title: "Sponsored Content , Thought leadership în feed", desc: "Articole, video-uri și caruseluri care construiesc autoritatea brandului tău în fața publicului B2B vizat." },
    { title: "Message Ads , Direct în inbox", desc: "Mesaje personalizate direct în inbox-ul LinkedIn al decidenților. Rată de deschidere de 50-60% față de 20% la email rece." },
    { title: "Lead Gen Forms , Captare fără fricțiune", desc: "Formulare native pre-completate cu datele profilului LinkedIn. Transformă interesul în lead-uri calificate cu un singur click." },
    { title: "Account-Based Marketing (ABM)", desc: "Targetezi direct companiile de vis după nume. LinkedIn afișează reclamele tale angajaților companiilor selectate." },
    { title: "Retargeting și audiențe similare", desc: "Re-engajăm vizitatorii site-ului și creăm audiențe lookalike bazate pe clienții tăi existenți." },
  ],
  cases: [
    { metric: "+150%", label: "Lead-uri B2B calificate", industry: "SaaS Platform" },
    { metric: "-40%", label: "CPL față de alte canale", industry: "Enterprise Software" },
    { metric: "5x pipeline", label: "Oportunități generate", industry: "B2B Services" },
    { metric: "60%", label: "Rată de deschidere Message Ads", industry: "Consultanță" },
    { metric: "-35%", label: "Cost per oportunitate calificată", industry: "IT Services" },
    { metric: "3x MQL", label: "Marketing Qualified Leads", industry: "SaaS B2B" },
  ],
  omnichannelServices: ["Google Ads", "Email Marketing", "CRM Solutions", "Strategie Digitală", "SEO"],
  faq: [
    { q: "De ce LinkedIn este mai scump decât Facebook sau Google?", a: "CPM-ul pe LinkedIn este mai mare, dar calitatea lead-ului este incomparabilă. Un lead B2B calificat din LinkedIn valorează de 5-10x mai mult decât unul de pe Facebook. Calculând costul per oportunitate calificată, LinkedIn este adesea mai ieftin." },
    { q: "De cât buget am nevoie pentru LinkedIn Ads?", a: "Recomandăm minimum 800-1000€/lună în buget de reclame. LinkedIn impune un bid minim mai mare decât alte platforme. Sub această sumă, reach-ul este prea limitat pentru a genera date relevante." },
    { q: "Funcționează pentru companiile mici?", a: "Depinde de ce vinzi. Dacă produsul sau serviciul tău costă minimum 5.000€ pe client, LinkedIn este justificat chiar și pentru IMM-uri. Dacă vinzi produse de volum mic sau mediu, alte platforme sunt mai eficiente cost/beneficiu." },
    { q: "Cum știu că ajung la decidenți reali, nu la angajați juniori?", a: "LinkedIn are verificare de identitate prin contul personal. Putem seta excluderi de senioritate (excluzând entry-level și associate) și targetăm explicit Director, VP, C-level, Owner, Partner. Raportul demografic al campaniei confirmă cine a văzut reclamele." },
    { q: "Cât durează până generez lead-uri?", a: "Primele lead-uri apar de obicei în 2-4 săptămâni. Dar LinkedIn funcționează pe principiul nurturing: decidenții trebuie să vadă brandul tău de mai multe ori înainte de a acționa. Rezultatele complete apar în 60-90 zile." },
    { q: "Pot folosi LinkedIn Ads fără a posta conținut pe pagina companiei?", a: "Da, reclamele Sponsored Content funcționează independent de activitatea organică a paginii. Dar o pagină activă mărește credibilitatea și reduce CPM-ul deoarece utilizatorii pot verifica compania." },
  ],
  testimonial: { quote: "Generam 3-4 lead-uri B2B pe lună din toate sursele. După 90 de zile de LinkedIn Ads cu Nesco, generăm 18-22 de lead-uri calificate lunar, cu un ciclu de vânzare cu 30% mai scurt.", name: "Cristian V.", role: "Sales Director, companie de software enterprise" },
  tools: ["LinkedIn Campaign Manager", "LinkedIn Insight Tag", "Sales Navigator", "Google Analytics 4", "Looker Studio"],
  toolsSectionTitle: "INSTRUMENTELE PE CARE LE FOLOSIM",
  freeAuditBadge: "Audit LinkedIn Ads Gratuit Inclus",
};

const trustBarItems: { icon?: ReactNode; label: string; stat?: string }[] = [
  { icon: <LinkedInIcon />, label: "LinkedIn Marketing Solutions" },
  { icon: <GoogleIcon />, label: "Google Partner" },
  { stat: "950M+", label: "utilizatori LinkedIn global" },
  { stat: "50-60%", label: "open rate Message Ads" },
  { stat: "15", label: "ani experiență B2B" },
];

const dashboardCard = (
  <AdsDashboardCard
    emoji="💼"
    title="LinkedIn Ads — B2B"
    date="Octombrie 2025"
    metrics={[
      { label: "Lead-uri/lună", animated: { target: 22 }, badge: { text: "↑ 633%", positive: true } },
      { label: "CPL", animated: { target: 85, suffix: " lei" }, badge: { text: "↓ 40%", positive: false } },
      { label: "Decidenți atinși", animated: { target: 18400 }, badge: { text: "↑ 150%", positive: true } },
    ]}
    barPercent={83}
    barLabel="Buget folosit"
    status="ACTIV — Sponsored Content + Message Ads"
    badge1="De la 3 la 22 lead-uri B2B/lună"
    badge2="SaaS Enterprise, România"
  />
);

const afterHeroContent = (
  <>
    <AdsTrustBar items={trustBarItems} />
    <AdsBeforeAfter
      title="Rezultate reale — Înainte și după Nesco Digital"
      beforeLabel="Înainte"
      afterLabel="După Nesco"
      before={[
        { label: "Lead-uri B2B/lună", display: "3" },
        { label: "Sursa lead-uri", display: "cold email" },
        { label: "Calitate lead", display: "medie" },
        { label: "Ciclu vânzare", display: "9 luni" },
        { label: "Pipeline lunar", display: "30.000€" },
        { label: "CPL", display: "400€" },
      ]}
      after={[
        { label: "Lead-uri B2B/lună", display: "22", animate: { target: 22 } },
        { label: "Sursa lead-uri", display: "LinkedIn Ads" },
        { label: "Calitate lead", display: "C-suite confirmat" },
        { label: "Ciclu vânzare", display: "6 luni (−30%)" },
        { label: "Pipeline lunar", display: "220.000€", animate: { target: 220000 } },
        { label: "CPL", display: "85€", animate: { target: 85, suffix: "€" } },
      ]}
      source="SaaS Enterprise B2B, România — 90 de zile"
    />
    <AdsComparison
      bad={[
        "Boost postare LinkedIn fără targetare B2B",
        "Audiențe broad (toate industriile)",
        "Fără Lead Gen Forms",
        "Cold email ca unică strategie outbound",
        "Fără retargeting pe vizitatori site",
        "Raportare: impressions și click-uri",
      ]}
      good={[
        "Targeting exact: job title + seniority + company size",
        "Account-Based Marketing pe companiile țintă",
        "Lead Gen Forms pre-completate (1-click lead)",
        "Message Ads direct în inbox cu 50-60% open rate",
        "Retargeting pe vizitatori + lookalike pe clienți",
        "Raportare: CPL, pipeline generat, ROI real",
      ]}
    />
    <LinkedInFunnel />
    <AdsTimeline
      phases={[
        {
          emoji: "🎯",
          range: "Zilele 1–14",
          title: "Setup ABM",
          color: "#0A66C2",
          items: [
            "Setup LinkedIn Campaign Manager",
            "Definire ICP și lista companii țintă",
            "Configurare Insight Tag pe site",
            "Primele campanii Sponsored Content",
          ],
        },
        {
          emoji: "📨",
          range: "Zilele 15–45",
          title: "Engagement & Lead Gen",
          color: "#60a5fa",
          items: [
            "Lansare Message Ads și Lead Gen Forms",
            "A/B testing creative și mesaje",
            "Optimizare CPL și calitate lead-uri",
            "Retargeting pe vizitatori și engagements",
          ],
        },
        {
          emoji: "📈",
          range: "Zilele 46–90",
          title: "Scale & Nurture",
          color: "#56db84",
          items: [
            "Scalare pe campaniile cu cel mai bun CPL",
            "Integrare leads în CRM",
            "Campanii de nurturing pentru ciclu lung",
            "Strategie full-funnel B2B consolidată",
          ],
        },
      ]}
    />
    <LinkedInCalculator />
  </>
);

export default function LinkedInRoPage() {
  return (
    <>
      <Header locale="ro" />
      <main>
        <ServicePageTemplate
          data={data}
          heroRightSlot={dashboardCard}
          afterHeroSlot={afterHeroContent}
        />
      </main>
      <AdsStickyBar
        title="Gata să generezi lead-uri B2B calificate?"
        cta="Vorbește cu un specialist"
        href="/contact/"
      />
      <Footer locale="ro" />
    </>
  );
}
