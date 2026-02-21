import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Instagram Ads România | Reclame Instagram | Nesco Digital",
  description: "Campanii Instagram Ads pentru branduri ambițioase. Stories, Reels, Feed. Creștem awareness și generăm vânzări direct din Instagram.",
  path: "/reclame-platite/instagram-ads/",
  routeKey: "instagramAds",
});

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
    { title: "Stories Ads , Fullscreen, imposibil de ignorat", desc: "Reclamele de 15 secunde în Stories ocupă tot ecranul. Rata de vizualizare este de 3-5x mai mare decât format banner." },
    { title: "Reels Ads , Conținut viral, reach plătit", desc: "Reels este formatul cu cel mai mare reach pe Instagram. Amplificăm cel mai bun conținut cu buget plătit." },
    { title: "Feed Ads , Prezentare premium", desc: "Imagini și video-uri în feed-ul utilizatorilor, cu CTA direct către site sau checkout." },
    { title: "Instagram Shopping , De la postare la cumpărare", desc: "Tagăm produsele direct în imagini. Utilizatorul dă click pe produs și este trimis direct la checkout." },
    { title: "Lookalike Audiences , Găsim clienți ca ai tăi", desc: "Folosim lista ta de clienți existenți pentru a găsi persoane similare pe Instagram." },
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
    { q: "Care format funcționează mai bine: Stories, Reels sau Feed?", a: "Depinde de obiectiv: Stories pentru awareness rapid și impact vizual maxim, Reels pentru reach organic amplificat, Feed pentru considerare și conversie. Recomandăm să testăm toate formatele și să scalăm ce funcționează pentru audiența ta." },
    { q: "Trebuie să creez conținut nou special pentru reclame?", a: "Nu neapărat. Putem amplifica postările organice care au performat bine (Spark Ads). Dar pentru rezultate maxime, creăm sau ghidăm crearea de conținut optimizat pentru fiecare format și obiectiv." },
    { q: "Instagram e bun pentru B2B?", a: "Pentru vânzări directe B2B, LinkedIn este mai eficient. Dar Instagram funcționează excelent pentru brand awareness și thought leadership B2B , arhitecți, designeri, consultanți, agenții care postează conținut educațional câștigă clienți noi prin Instagram." },
    { q: "Cât de importantă e calitatea vizualului?", a: "Critică. Instagram este o platformă vizuală. O fotografie sau video de calitate slabă va performa slab chiar și cu un buget mare. Noi oferim ghiduri și brief-uri pentru content creation sau ne ocupăm noi de creative." },
    { q: "Cum măsurați succesul unei campanii?", a: "Dincolo de like-uri și comentarii (care nu plătesc facturile), urmărim: reach, frecvență, click-uri pe site, conversii, cost per conversie și ROAS. Tu primești raport lunar cu toate datele, explicat în termeni simpli." },
  ],
  testimonial: { quote: "Am lansat un brand nou de cosmetice și în 3 luni Instagram Ads ne-a adus 1.200 de comenzi noi. Vizualurile create de Nesco au convertit mult mai bine decât ce făcusem noi.", name: "Andreea M.", role: "Fondatoare, brand de cosmetice naturale" },
  tools: ["Meta Ads Manager", "Meta Pixel", "Meta Business Suite", "Instagram Shopping", "Looker Studio"],
  toolsSectionTitle: "INSTRUMENTELE PE CARE LE FOLOSIM",
  freeAuditBadge: "Audit Instagram Ads Gratuit Inclus",
};

export default function InstagramRoPage() {
  return (<><Header locale="ro" /><main><ServicePageTemplate data={data} /></main><Footer locale="ro" /></>);
}
