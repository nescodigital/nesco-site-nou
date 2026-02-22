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
  locale: "ro",
  title: "Website Companie | Site de Prezentare Premium | Nesco Digital",
  description: "Website-uri de companie premium care reflectă valoarea brandului tău. Design modern, performanță ridicată, optimizat pentru conversii.",
  path: "/website-companie-ro/",
  routeKey: "companyWebsite",
});

const data: ServicePageData = {
  locale: "ro",
  breadcrumbCategory: "webdesign",
  hero: {
    badge: "Website Companie",
    title: "Prima impresie a companiei tale , de cele mai multe ori, site-ul tău",
    subtitle: "80% dintre potențialii clienți caută online o companie înainte de a lua legătura. Un website profesional nu este o cheltuială , este cel mai eficient agent de vânzări care lucrează pentru tine 24/7, chiar și când dormi.",
  },
  problems: [
    { title: "Potențialii clienți te caută și nu găsesc nimic convingător", desc: "Dacă site-ul tău are 5 ani sau nu există, pierzi credibilitate în fața concurenților care arată bine online. Prima impresie contează mai mult decât orice altceva." },
    { title: "Ai o pagină de Facebook, dar fără site nu ești luat în serios", desc: "O pagină de Facebook poate fi ștearsă sau blocată oricând. Un site propriu este fundamental pentru credibilitatea unui business serios." },
    { title: "Vizitatorii nu înțeleg ce faci sau de ce să te aleagă", desc: "Dacă mesajul de pe site nu este clar și convingător, potențialii clienți pleacă în 8 secunde , media de atenție a unui utilizator web." },
    { title: "Concurenții tăi arată mai profesional online", desc: "O primă impresie proastă este dificil de recuperat. Dacă site-ul tău nu exprimă încredere și profesionalism, pierzi clienți înainte să apuci să vorbești cu ei." },
  ],
  solutions: [
    { title: "Design care comunică profesionalism instantaneu", desc: "Folosim principii de psihologie vizuală pentru o primă impresie care inspiră încredere. Culorile, fonturile și imaginile sunt alese strategic." },
    { title: "Mesaj clar: ce faci, cui te adresezi, de ce tu", desc: "Scriem copy care răspunde în primele 5 secunde la întrebarea vizitatorului: \"Sunt la locul potrivit?\" și \"Îmi rezolvă asta problema mea?\"" },
    { title: "Optimizat pentru mobil , 70% din trafic vine de pe telefon", desc: "Un site care nu arată perfect pe telefon pierde majoritate traficului. Toate site-urile noastre sunt mobile-first." },
    { title: "Rapid , fiecare secundă în plus scade conversiile cu 7%", desc: "Optimizare imagini, hosting premium, cod curat. PageSpeed 90+ garantat." },
    { title: "SEO de bază inclus", desc: "Structura URL-urilor, meta tags, sitemap, Google Search Console. De la zi 1, Google poate indexa site-ul tău corect." },
    { title: "Ușor de administrat", desc: "Tu adaugi știri, case studies, angajați noi fără să știi programare. Training inclus la livrare." },
  ],
  cases: [
    { metric: "+70%", label: "Programări rezervate", industry: "Clinică Medicală" },
    { metric: "+60%", label: "Cereri de ofertă", industry: "B2B Services" },
    { metric: "Investitori atrași", label: "Credibilitate brand sporită", industry: "Tech Startup" },
    { metric: "+45%", label: "Timp petrecut pe site", industry: "Agenție de Arhitectură" },
    { metric: "4x", label: "Mai multe contacte din site", industry: "Firma de Avocatură" },
    { metric: "-55%", label: "Rată de respingere", industry: "Companie de Consultanță" },
  ],
  omnichannelServices: ["Google Ads", "Facebook Ads", "SEO", "Email Marketing", "CRO"],
  faq: [
    { q: "Am nevoie de un site dacă am pagină de Facebook?", a: "Absolut. O pagină de Facebook poate fi dezactivată, restricționată sau penalizată de algoritm fără avertisment. Un site propriu este singurul spațiu digital pe care îl controlezi 100%. Plus că site-ul tău poate fi găsit pe Google , Facebook nu poate fi indexat la fel." },
    { q: "Cât costă un website de companie?", a: "Depinde de complexitate: un site de 5-8 pagini (Acasă, Despre, Servicii, Blog, Contact) pornește de la 1.500-3.000€. Un site cu funcționalități avansate (calculator de ofertă, portal client, multi-limbă) poate ajunge la 5.000-15.000€. Facem estimare detaliată după discuția inițială." },
    { q: "Cât de des trebuie actualizat un site?", a: "Conținutul (știri, case studies) ar trebui actualizat lunar pentru SEO și credibilitate. Actualizările tehnice (securitate, plugin-uri) se fac lunar de noi dacă ești pe un pachet de mentenanță." },
    { q: "Pot să îmi fac singur site-ul pe Wix sau Squarespace?", a: "Poți, dar vei obține un site cu aspect semi-profesional care nu se diferențiază de concurenții care fac la fel. Site-urile custom convertesc cu 30-50% mai bine decât template-urile standard pentru că sunt construite specific pentru audiența ta și obiectivele tale de business." },
    { q: "Ce conținut trebuie să am pe site?", a: "Minim: pagina Acasă cu mesaj clar, pagina Despre cu echipa și povestea, pagina Servicii/Produse detaliată, pagina Contact cu multiple modalități de contact. Plus: testimoniale de la clienți reali, cifre și rezultate, blog cu conținut util." },
    { q: "În cât timp voi vedea rezultate?", a: "Un site bine construit îmbunătățește credibilitatea imediat (de la lansare). Traficul organic crește în 3-6 luni prin SEO. Dacă rulezi și publicitate (Google Ads, Facebook Ads), poți vedea lead-uri în prima săptămână de la lansare." },
  ],
  testimonial: { quote: "Site-ul nou s-a încărcat de 4x mai repede și rata de conversie a crescut cu 35% în prima lună. Arată exact cum ne-am imaginat, poate chiar mai bine.", name: "Elena P.", role: "Director, clinică medicală privată" },
  tools: ["Figma", "Next.js", "WordPress", "Shopify", "GTmetrix", "PageSpeed Insights"],
  toolsSectionTitle: "INSTRUMENTELE PE CARE LE FOLOSIM",
  freeAuditBadge: "Audit Website Gratuit Inclus",
};

const IncludesSection = () => (
  <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)" }} />
    <div className="page-container">
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <span className="badge mb-6">Ce Includem</span>
        <h2 className="font-black text-white" style={{ fontSize: "clamp(1.75rem,3.5vw,2.75rem)", lineHeight: 1.05, letterSpacing: "-0.025em", marginTop: "20px" }}>Tot ce ai nevoie pentru un site de companie profesional</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ maxWidth: "960px", margin: "0 auto" }}>
        {[
          { icon: "🎨", title: "Design custom", desc: "Nu template-uri. Fiecare site este proiectat de la zero pentru brandul tău, în Figma, aprobat de tine înainte de dezvoltare." },
          { icon: "📱", title: "Mobile-first", desc: "70% din trafic vine de pe telefon. Designul e gândit întâi pe mobil, apoi adaptat pentru desktop." },
          { icon: "⚡", title: "PageSpeed 90+", desc: "Optimizare completă: imagini WebP, lazy loading, hosting premium. Garantăm scor 90+ pe Google PageSpeed." },
          { icon: "🔍", title: "SEO tehnic inclus", desc: "Structura URL, meta tags, sitemap, Google Search Console. De la lansare, Google te poate indexa corect." },
          { icon: "🛠️", title: "CMS ușor de folosit", desc: "Adaugi știri, case studies sau angajați noi fără să știi programare. Training inclus la livrare." },
          { icon: "🔒", title: "Securitate & GDPR", desc: "SSL certificat, backup automat, conformitate GDPR (cookie consent, politică de confidențialitate)." },
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

export default function WebsiteCompanieRoPage() {
  return (
    <>
      <Header locale="ro" />
      <main>
        <ServicePageTemplate
          data={data}
          heroRightSlot={
            <AdsDashboardCard
              emoji="🏢"
              title="Website Companie — Launch"
              date="Septembrie 2025"
              metrics={[
                { label: "Contacte/lună", animated: { target: 34 }, badge: { text: "↑ 340%", positive: true } },
                { label: "Timp pe site", animated: { target: 3.2, decimals: 1, suffix: "min" }, badge: { text: "↑ 87%", positive: true } },
                { label: "Bounce rate", animated: { target: 28, suffix: "%" }, badge: { text: "↓ 55%", positive: false } },
              ]}
              barPercent={94}
              barLabel="Obiectiv conversie atins"
              status="LIVE — PageSpeed 94/100"
              badge1="8 → 34 contacte/lună"
              badge2="Companie consultanță, România"
            />
          }
          afterHeroSlot={
            <>
              <AdsTrustBar items={[
                { stat: "Design custom", label: "nu template-uri" },
                { stat: "4-5", label: "săptămâni livrare" },
                { stat: "PageSpeed 90+", label: "garantat" },
                { stat: "50+", label: "site-uri livrate" },
                { stat: "Training", label: "inclus la livrare" },
              ]} />
              <AdsBeforeAfter
                title="Rezultate reale — Înainte și după Nesco Digital"
                beforeLabel="Înainte"
                afterLabel="După Nesco"
                before={[
                  { label: "Contacte/lună din site", display: "8" },
                  { label: "Timp pe site", display: "0.9 min" },
                  { label: "Bounce rate", display: "78%" },
                  { label: "PageSpeed Score", display: "34/100" },
                  { label: "Design", display: "template 2018" },
                  { label: "Credibilitate percepută", display: "scăzută" },
                ]}
                after={[
                  { label: "Contacte/lună din site", display: "34", animate: { target: 34 } },
                  { label: "Timp pe site", display: "3.2 min", animate: { target: 3.2, decimals: 1, suffix: " min" } },
                  { label: "Bounce rate", display: "28%", animate: { target: 28, suffix: "%" } },
                  { label: "PageSpeed Score", display: "94/100" },
                  { label: "Design", display: "custom 2024" },
                  { label: "Credibilitate percepută", display: "ridicată" },
                ]}
                source="Companie de consultanță, România — 30 zile post-lansare"
              />
              <AdsComparison
                badLabel="Website construit pe template"
                goodLabel="Website custom Nesco"
                bad={[
                  "Template cumpărat de pe ThemeForest, folosit de 10.000 site-uri",
                  "Performanță slabă: mult CSS și JS inutil",
                  "Nu reflectă identitatea unică a brandului tău",
                  "Greu de personalizat fără cunoștințe tehnice",
                  "Fără strategie de conversie — just prezentare",
                  "SEO tehnic slab din start",
                ]}
                good={[
                  "Design proiectat de la zero specific pentru brandul tău",
                  "Cod optimizat, PageSpeed 90+ garantat",
                  "Identitate vizuală unică, memorabilă",
                  "CMS intuitiv — editezi singur fără programare",
                  "Structura construită pentru a converti vizitatorii",
                  "SEO tehnic corect de la prima zi",
                ]}
              />
              <IncludesSection />
              <AdsTimeline
                title="Procesul nostru în 5 săptămâni"
                phases={[
                  {
                    emoji: "💬",
                    range: "Săptămâna 1",
                    title: "Brief & Strategie",
                    color: "#56db84",
                    items: [
                      "Întâlnire de kick-off și brief detaliat",
                      "Analiză competitivă și benchmark",
                      "Arhitectura site și sitemap",
                      "Moodboard și direcție vizuală",
                    ],
                  },
                  {
                    emoji: "🎨",
                    range: "Săptămânile 2-3",
                    title: "Design & Copywriting",
                    color: "#60a5fa",
                    items: [
                      "Design complet în Figma",
                      "Runde de feedback și ajustări",
                      "Copywriting toate paginile",
                      "Aprobarea finală a designului",
                    ],
                  },
                  {
                    emoji: "🚀",
                    range: "Săptămânile 4-5",
                    title: "Dezvoltare & Lansare",
                    color: "#a78bfa",
                    items: [
                      "Dezvoltare Next.js / WordPress",
                      "Testare cross-browser și cross-device",
                      "Setup GA4 și Google Search Console",
                      "Lansare + training CMS (1h)",
                    ],
                  },
                ]}
              />
              <WebsiteROICalculator />
            </>
          }
        />
      </main>
      <Footer locale="ro" />
      <AdsStickyBar title="Vrei un website care impresionează?" cta="Solicită ofertă" href="/contact/" />
    </>
  );
}
