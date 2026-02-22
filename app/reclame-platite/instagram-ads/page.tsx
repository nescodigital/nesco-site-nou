import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { AdsDashboardCard } from "@/components/sections/ads/AdsDashboardCard";
import { AdsTrustBar } from "@/components/sections/ads/AdsTrustBar";
import { AdsBeforeAfter } from "@/components/sections/ads/AdsBeforeAfter";
import { AdsComparison } from "@/components/sections/ads/AdsComparison";
import { InstaAdsFormats } from "@/components/sections/ads/InstaAdsFormats";
import { AdsTimeline } from "@/components/sections/ads/AdsTimeline";
import { InstaAdsCalculator } from "@/components/sections/ads/InstaAdsCalculator";
import { AdsStickyBar } from "@/components/sections/ads/AdsStickyBar";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Instagram Ads România | Reclame Instagram | Nesco Digital",
  description: "Campanii Instagram Ads pentru branduri ambițioase. Stories, Reels, Feed. Creștem awareness și generăm vânzări direct din Instagram.",
  path: "/reclame-platite/instagram-ads/",
  routeKey: "instagramAds",
});

const MetaIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
    <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
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
    badge: "Instagram Ads",
    title: "Produsele și serviciile tale, văzute de milioane pe Instagram",
    subtitle: "Instagram are peste 5 milioane de utilizatori în România cu putere de cumpărare. Reclamele native în Stories și Reels ajung la oamenii potriviți la momentul potrivit, fără să pară reclame.",
  },
  problems: [
    { title: "Reach-ul profilului tău este limitat", desc: "Un profil cu 10.000 de urmăritori ajunge organic la maxim 5-10% din ei. Produsele tale merită să fie văzute de mult mai mulți oameni." },
    { title: "Concurenții fac reclame pe Instagram", desc: "Dacă tu nu ești activ cu reclame, locul tău în feed-ul clienților potențiali este ocupat de concurenții tăi." },
    { title: "Tipul tău de client este pe Instagram", desc: "Dacă vinzi produse sau servicii vizuale (modă, beauty, food, home, fitness), audiența ta ideală este pe Instagram." },
    { title: "Conținut bun, dar fără vizibilitate", desc: "Postezi fotografii de calitate, dar nu ai suficientă audiență nouă care să te descopere. Algoritmul limitează reach-ul organic." },
  ],
  solutions: [
    { title: "Stories Ads — Fullscreen, imposibil de ignorat", desc: "Reclamele de 15 secunde în Stories ocupă tot ecranul. Rata de vizualizare este de 3-5x mai mare decât format banner." },
    { title: "Reels Ads — Conținut viral, reach plătit", desc: "Reels este formatul cu cel mai mare reach pe Instagram. Amplificăm cel mai bun conținut cu buget plătit." },
    { title: "Feed Ads — Prezentare premium", desc: "Imagini și video-uri în feed-ul utilizatorilor, cu CTA direct către site sau checkout." },
    { title: "Instagram Shopping — De la postare la cumpărare", desc: "Tagăm produsele direct în imagini. Utilizatorul dă click pe produs și este trimis direct la checkout." },
    { title: "Lookalike Audiences — Găsim clienți ca ai tăi", desc: "Folosim lista ta de clienți existenți pentru a găsi persoane similare pe Instagram." },
    { title: "A/B testing de creative", desc: "Testăm multiple variante de imagini, video-uri și copy pentru a identifica ce funcționează cel mai bine." },
  ],
  cases: [
    { metric: "+45%", label: "Îmbunătățire ROAS în 60 zile", industry: "E-commerce Fashion" },
    { metric: "+120%", label: "Trafic nou pe site din Instagram", industry: "Brand Lifestyle" },
    { metric: "-30%", label: "Cost per lead față de medie", industry: "Brand Beauty" },
    { metric: "3.2x ROAS", label: "Return on Ad Spend", industry: "Cosmetice" },
    { metric: "+80%", label: "Creștere comenzi din Instagram Shopping", industry: "Modă" },
    { metric: "-25%", label: "Cost per conversie după optimizare", industry: "Fitness" },
  ],
  omnichannelServices: ["Facebook Ads", "TikTok Ads", "Google Ads", "CRO", "Email Marketing"],
  faq: [
    { q: "E necesar să am deja un profil de Instagram activ?", a: "Un profil existent ajută (dovadă socială pentru vizitatori), dar nu este obligatoriu pentru reclame. Reclamele pot rula direct din Meta Business Suite chiar fără profil activ sau cu un profil cu puțini urmăritori." },
    { q: "Care format funcționează mai bine: Stories, Reels sau Feed?", a: "Depinde de obiectiv: Stories pentru awareness rapid și impact vizual maxim, Reels pentru reach organic amplificat, Feed pentru considerare și conversie. Recomandăm să testăm toate formatele și să scălăm ce funcționează pentru audiența ta." },
    { q: "Trebuie să creez conținut nou special pentru reclame?", a: "Nu neapărat. Putem amplifica postările organice care au performat bine (Spark Ads). Dar pentru rezultate maxime, creăm sau ghidăm crearea de conținut optimizat pentru fiecare format și obiectiv." },
    { q: "Instagram e bun pentru B2B?", a: "Pentru vânzări directe B2B, LinkedIn este mai eficient. Dar Instagram funcționează excelent pentru brand awareness și thought leadership B2B — arhitecți, designeri, consultanți, agenții care postează conținut educațional câștigă clienți noi prin Instagram." },
    { q: "Cât de importantă e calitatea vizualului?", a: "Critică. Instagram este o platformă vizuală. O fotografie sau video de calitate slabă va performa slab chiar și cu un buget mare. Noi oferăm ghiduri și brief-uri pentru content creation sau ne ocupăm noi de creative." },
    { q: "Cum măsurați succesul unei campanii?", a: "Dincolo de like-uri și comentarii (care nu plătesc facturile), urmărim: reach, frecvență, click-uri pe site, conversii, cost per conversie și ROAS. Tu primești raport lunar cu toate datele, explicat în termeni simpli." },
  ],
  testimonial: { quote: "Am lansat un brand nou de cosmetice și în 3 luni Instagram Ads ne-a adus 1.200 de comenzi noi. Vizualurile create de Nesco au convertit mult mai bine decât ce făcusem noi.", name: "Andreea M.", role: "Fondatoare, brand de cosmetice naturale" },
  tools: ["Meta Ads Manager", "Meta Pixel", "Meta Business Suite", "Instagram Shopping", "Looker Studio"],
  toolsSectionTitle: "INSTRUMENTELE PE CARE LE FOLOSIM",
  freeAuditBadge: "Audit Instagram Ads Gratuit Inclus",
};

export default function InstagramRoPage() {
  return (
    <>
      <Header locale="ro" />
      <main>
        <ServicePageTemplate
          data={data}
          heroRightSlot={
            <AdsDashboardCard
              emoji="📸"
              title="Instagram Ads — Campanie"
              date="Octombrie 2025"
              metrics={[
                { label: "ROAS", animated: { target: 3.2, decimals: 1, suffix: "x" }, badge: { text: "↑ 45%", positive: true } },
                { label: "Reach", animated: { target: 182000 }, badge: { text: "↑ 80%", positive: true } },
                { label: "Cost/conv.", animated: { target: 31, suffix: " lei" }, badge: { text: "↓ 25%", positive: false } },
              ]}
              barPercent={91}
              barLabel="Buget folosit"
              status="ACTIV — Stories + Reels + Feed"
              badge1="+80% comenzi din Instagram Shopping"
              badge2="Brand modă, România"
            />
          }
          afterHeroSlot={
            <>
              <AdsTrustBar
                items={[
                  { icon: <MetaIcon />, label: "Meta Business Partner" },
                  { icon: <GoogleIcon />, label: "Google Partner" },
                  { stat: "5M+", label: "utilizatori Instagram RO" },
                  { stat: "15", label: "ani experiență" },
                  { stat: "500+", label: "campanii livrate" },
                ]}
              />
              <AdsBeforeAfter
                title="Rezultate reale — Înainte și după Nesco Digital"
                beforeLabel="Înainte"
                afterLabel="După Nesco"
                before={[
                  { label: "ROAS", display: "1.1x" },
                  { label: "Reach/lună", display: "8.000" },
                  { label: "Cost/conversie", display: "120 lei" },
                  { label: "CTR", display: "0.3%" },
                  { label: "Format", display: "feed static" },
                  { label: "Instagram Shopping", display: "neactivat" },
                ]}
                after={[
                  { label: "ROAS", display: "3.2x", animate: { target: 3.2, decimals: 1, suffix: "x" } },
                  { label: "Reach/lună", display: "182.000", animate: { target: 182000 } },
                  { label: "Cost/conversie", display: "31 lei", animate: { target: 31, suffix: " lei" } },
                  { label: "CTR", display: "4.2%" },
                  { label: "Format", display: "Stories + Reels + Feed" },
                  { label: "Instagram Shopping", display: "activ, 2.400 produse" },
                ]}
                source="Brand modă, România — 60 de zile"
              />
              <AdsComparison
                bad={[
                  "Post boost fără strategie de audiență",
                  "Același creativ luni de zile",
                  "Fără Instagram Shopping activat",
                  "Fără retargeting pe vizitatori",
                  "Raportare: urmăritori și like-uri",
                  "Fără A/B testing pe creative",
                ]}
                good={[
                  "Stories + Reels + Feed + Shopping cu bugete alocate",
                  "Refresh creativ la 2-3 săptămâni bazat pe date",
                  "Instagram Shopping cu catalog complet sincronizat",
                  "Retargeting pe vizitatori și abandonuri coș",
                  "Raportare: ROAS, CPL, revenue real",
                  "A/B testing sistematic pe creative și audiențe",
                ]}
              />
              <InstaAdsFormats />
              <AdsTimeline
                phases={[
                  {
                    emoji: "📋",
                    range: "Zilele 1–14",
                    title: "Audit & Setup",
                    color: "#f472b6",
                    items: [
                      "Audit profil Instagram și Business Manager",
                      "Setup Instagram Shopping și catalog produse",
                      "Definire audiențe și strategie creative",
                      "Primele campanii Stories și Feed",
                    ],
                  },
                  {
                    emoji: "🎨",
                    range: "Zilele 15–45",
                    title: "Creative & Formate",
                    color: "#a78bfa",
                    items: [
                      "Testare Stories vs Reels vs Feed",
                      "Optimizare bazată pe CTR și ROAS",
                      "Lansare retargeting pe vizitatori site",
                      "A/B testing 5+ creative/săptămână",
                    ],
                  },
                  {
                    emoji: "🚀",
                    range: "Zilele 46–90",
                    title: "Scalare & Shopping",
                    color: "#56db84",
                    items: [
                      "Scalare bugete pe formatele câștigătoare",
                      "Optimizare Instagram Shopping flow",
                      "Lookalike audiences pe clienți existenți",
                      "Strategie conținut + reclame integrat",
                    ],
                  },
                ]}
              />
              <InstaAdsCalculator />
            </>
          }
        />
      </main>
      <AdsStickyBar
        title="Gata să crești cu Instagram Ads?"
        cta="Vorbește cu un specialist"
        href="/contact/"
      />
      <Footer locale="ro" />
    </>
  );
}
