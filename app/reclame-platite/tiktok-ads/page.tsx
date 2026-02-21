import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";

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

export default function TikTokRoPage() {
  return (<><Header locale="ro" /><main><ServicePageTemplate data={data} /></main><Footer locale="ro" /></>);
}
