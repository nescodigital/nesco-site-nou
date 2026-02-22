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
import { TikTokFormats } from "@/components/sections/ads/TikTokFormats";
import { AdsTimeline } from "@/components/sections/ads/AdsTimeline";
import { TikTokAdsCalculator } from "@/components/sections/ads/TikTokAdsCalculator";
import { AdsStickyBar } from "@/components/sections/ads/AdsStickyBar";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "TikTok Ads România | Campanii TikTok | Nesco Digital",
  description: "TikTok Ads pentru branduri care vor să ajungă la audiențe noi. Creative native, targeting avansat, rezultate măsurabile.",
  path: "/reclame-platite/tiktok-ads/",
  routeKey: "tiktokAds",
});

const data: ServicePageData = {
  locale: "ro",
  breadcrumbCategory: "paidAds",
  hero: {
    badge: "TikTok Ads",
    title: "Ajunge la noua generație de cumpărători cu TikTok Ads",
    subtitle: "TikTok are 5 milioane de utilizatori în România și este cea mai rapidă platformă în creștere. Costurile per vizualizare sunt de 3-5x mai mici decât pe Meta, iar audiența este extrem de receptivă la branduri noi.",
  },
  problems: [
    { title: "Audiența tânără nu te găsește pe Facebook", desc: "Gen Z (18-26 ani) și Millennials tineri petrec mai mult timp pe TikTok decât pe orice altă platformă. Dacă nu ești pe TikTok, nu exiști pentru ei." },
    { title: "Costurile pe Meta devin tot mai mari", desc: "CPM-urile pe Facebook și Instagram cresc constant. TikTok oferă reach la costuri semnificativ mai mici, cu engagement mai ridicat." },
    { title: "Produsele tale au potențial viral neexploatat", desc: "TikTok este platforma unde un video bun poate ajunge la milioane de oameni fără buget uriaș. Algoritmul recompensează conținutul bun, nu conturile cu mulți urmăritori." },
    { title: "Concurenții tăi au descoperit deja TikTok", desc: "Brandurile care au intrat pe TikTok în 2023-2024 au avantaj de piață. Cu fiecare lună de întârziere, costul de entry crește." },
  ],
  solutions: [
    { title: "In-Feed Ads , Native ca un TikTok normal", desc: "Reclamele apar în feed-ul utilizatorilor și par conținut organic. Cel mai eficient format pentru conversii directe." },
    { title: "Spark Ads , Amplifică ce merge deja", desc: "Dacă ai un TikTok organic care a performat bine, îl amplificăm cu buget plătit. Cel mai rapid ROI pe platformă." },
    { title: "TopView , Primul lucru văzut la deschidere", desc: "Reclama ta apare imediat ce utilizatorul deschide TikTok. Imposibil de ignorat, ideal pentru lansări de brand." },
    { title: "Producție creative nativă", desc: "Nu orice conținut funcționează pe TikTok. Creăm sau ghidăm crearea de conținut autentic, nativ platformei, care nu pare reclamă." },
    { title: "Targeting precis al audienței", desc: "Targetăm după interese, comportament de vizionare, dispozitiv și demografie. Ajungem la audiența ta chiar dacă nu te urmărește." },
    { title: "Tracking și atribuire completă", desc: "TikTok Pixel pe site-ul tău, urmărim vizitele, adăugările în coș și conversiile. Știi exact ce generează TikTok." },
  ],
  cases: [
    { metric: "+300%", label: "Brand awareness lift", industry: "Brand DTC" },
    { metric: "2.5x ROAS", label: "Return on Ad Spend", industry: "E-commerce Fashion" },
    { metric: "+400%", label: "Urmăritori noi în 60 zile", industry: "Brand Lifestyle" },
    { metric: "-45%", label: "Cost per click față de Meta", industry: "E-commerce" },
    { metric: "+180%", label: "Creștere trafic site", industry: "Brand Beauty" },
    { metric: "3x leads", label: "Lead-uri calificate", industry: "Educație Online" },
  ],
  omnichannelServices: ["Instagram Ads", "Facebook Ads", "Google Ads", "Email Marketing", "CRO"],
  faq: [
    { q: "TikTok nu e doar pentru tineri și dans?", a: "A fost. Acum 40% din utilizatorii TikTok au peste 30 de ani, iar conținutul acoperă orice nișă: business, imobiliare, automotive, food, beauty, educație. Dacă produsul tău poate fi arătat în 30-60 secunde video, TikTok funcționează." },
    { q: "Cât costă reclamele pe TikTok față de Facebook?", a: "CPM-ul (costul per 1000 vizualizări) pe TikTok este de 2-3x mai mic decât pe Facebook în România. Engagement-ul este mai ridicat, ceea ce înseamnă cost per click mai mic. E platforma cea mai eficientă din perspectiva cost-per-reach în 2024-2025." },
    { q: "Trebuie să am un cont TikTok cu mulți urmăritori?", a: "Nu. Reclamele TikTok Ads pot rula dintr-un cont de business cu 0 urmăritori. Reach-ul este determinat de buget și targetare, nu de popularitatea contului." },
    { q: "Ce tip de video trebuie să pregătesc?", a: "Video-uri verticale (9:16), între 15-60 secunde, filmate casual (nu producție ultra-profesională). TikTok recompensează autenticul. Noi oferim brief-uri detaliate și putem coordona sau crea noi conținutul." },
    { q: "Funcționează TikTok Ads pentru B2B?", a: "Pentru vânzări B2B directe, este mai puțin eficient. Dar pentru brand awareness și thought leadership, funcționează surprinzător de bine. Avocați, consultanți, agenții care postează conținut educațional pe TikTok câștigă clienți noi care nu i-ar fi găsit altfel." },
    { q: "Cum măsor că TikTok Ads funcționează?", a: "Prin TikTok Pixel care trackează vizitele pe site, adăugările în coș și conversiile. Plus metrici de reach, vizualizări complete și click-uri. Raportăm separat pentru TikTok vs. alte canale pentru a vedea contribuția reală." },
  ],
  testimonial: { quote: "Am intrat pe TikTok în septembrie și până în decembrie aveam 4.000 de comenzi noi. Cost per comandă de 8€, cel mai bun din toate canalele. Nesco a știut exact ce tip de content funcționează.", name: "Radu T.", role: "Fondator, brand de fashion streetwear" },
  tools: ["TikTok Ads Manager", "TikTok Pixel", "TikTok Business Center", "Google Analytics 4", "Looker Studio"],
  toolsSectionTitle: "INSTRUMENTELE PE CARE LE FOLOSIM",
  freeAuditBadge: "Audit TikTok Ads Gratuit Inclus",
};

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
    <path fill="white" d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
  </svg>
);

const MetaIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
    <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const heroRightSlot: ReactNode = (
  <AdsDashboardCard
    emoji="🎵"
    title="TikTok Ads Campanie"
    date="Noiembrie 2025"
    metrics={[
      { label: "Vizualizări", animated: { target: 3200000 }, badge: { text: "↑ 300%", positive: true } },
      { label: "Comenzi", animated: { target: 1280 }, badge: { text: "↑ 156%", positive: true } },
      { label: "CPO", animated: { target: 8, suffix: "€" }, badge: { text: "↓ 45%", positive: false } },
    ]}
    barPercent={91}
    barLabel="Buget folosit"
    status="ACTIV In-Feed + Spark Ads"
    badge1="2.5x ROAS Fashion"
    badge2="E-commerce, România"
  />
);

const afterHeroSlot: ReactNode = (
  <>
    <AdsTrustBar items={[
      { icon: <TikTokIcon />, label: "TikTok Ads Manager" },
      { icon: <MetaIcon />, label: "Meta Business Partner" },
      { stat: "5M+", label: "utilizatori TikTok în RO" },
      { stat: "3x", label: "reach la cost mai mic vs Meta" },
      { stat: "500+", label: "campanii livrate" },
    ]} />
    <AdsBeforeAfter
      title="Rezultate reale Înainte și după Nesco Digital"
      beforeLabel="Înainte"
      afterLabel="După Nesco"
      before={[
        { label: "Vizualizări/lună", display: "45.000" },
        { label: "Comenzi", display: "12" },
        { label: "CPO (cost/comandă)", display: "82€" },
        { label: "ROAS", display: "0.9x" },
        { label: "Tip content", display: "video repurpusat" },
        { label: "Urmăritori câștigați", display: "120" },
      ]}
      after={[
        { label: "Vizualizări/lună", display: "3.200.000", animate: { target: 3200000 } },
        { label: "Comenzi", display: "1.280", animate: { target: 1280 } },
        { label: "CPO (cost/comandă)", display: "8€", animate: { target: 8, suffix: "€" } },
        { label: "ROAS", display: "2.5x" },
        { label: "Tip content", display: "UGC nativ TikTok" },
        { label: "Urmăritori câștigați", display: "4.200", animate: { target: 4200 } },
      ]}
      source="Brand fashion streetwear, România 60 de zile"
    />
    <AdsComparison
      bad={[
        "Video-uri repurpusate de pe Instagram sau YouTube",
        "Boost la postări organice fără strategie",
        "Un singur format (In-Feed) fără testare",
        "Fără TikTok Pixel instalat",
        "Audiențe broad fără segmentare pe interese",
        "Raportare: views și followers",
      ]}
      good={[
        "UGC și native content creat specific pentru TikTok",
        "Spark Ads pe conținut organic cu performanță dovedită",
        "Mix In-Feed + TopView + Brand Takeover",
        "TikTok Pixel + Events API pentru atribuire exactă",
        "Targeting pe comportament de cumpărare și interese",
        "Raportare: ROAS, CPO, comenzi și revenue",
      ]}
    />
    <TikTokFormats />
    <AdsTimeline
      phases={[
        {
          emoji: "🎬",
          range: "Zilele 1–14",
          title: "Creative & Setup",
          color: "#ff0050",
          items: [
            "Audit cont și strategie content TikTok",
            "Setup TikTok Business Center și Pixel",
            "Brief creative și producție primele video-uri",
            "Lansare campanii In-Feed și Spark Ads",
          ],
        },
        {
          emoji: "📊",
          range: "Zilele 15–45",
          title: "Test & Optimizare",
          color: "#a78bfa",
          items: [
            "A/B testing 5-8 creative/săptămână",
            "Optimizare targeting și bugete",
            "Identificare format câștigător (In-Feed vs Spark)",
            "Retargeting pe vizitatori site și adăugări coș",
          ],
        },
        {
          emoji: "🚀",
          range: "Zilele 46–90",
          title: "Scalare virală",
          color: "#56db84",
          items: [
            "Scalare bugete pe video-urile cu cel mai bun ROAS",
            "Lansare TopView pentru brand awareness",
            "Lookalike audiences pe cumpărători",
            "Strategie content săptămânală consolidată",
          ],
        },
      ]}
    />
    <TikTokAdsCalculator />
  </>
);

export default function TikTokRoPage() {
  return (
    <>
      <Header locale="ro" />
      <main>
        <ServicePageTemplate
          data={data}
          heroRightSlot={heroRightSlot}
          afterHeroSlot={afterHeroSlot}
        />
      </main>
      <AdsStickyBar title="Gata să scalezi pe TikTok?" cta="Vorbește cu un specialist" href="/contact/" />
      <Footer locale="ro" />
    </>
  );
}
