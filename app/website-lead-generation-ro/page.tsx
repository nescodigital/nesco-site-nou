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
  locale: "ro",
  title: "Site Lead Generation | Website care Convertește | Nesco Digital",
  description: "Site-uri de lead generation construite strategic. Landing pages optimizate, formulare de contact, integrări CRM. Transformăm vizitatorii în lead-uri calificate.",
  path: "/website-lead-generation-ro/",
  routeKey: "leadGenWebsite",
});

const data: ServicePageData = {
  locale: "ro",
  breadcrumbCategory: "webdesign",
  hero: {
    badge: "Website Lead Generation",
    title: "Transformă site-ul tău în cel mai bun agent de vânzări, activ 24/7",
    subtitle: "Un site de lead generation nu este un site de prezentare cu un formular de contact. Este un sistem construit strategic pentru a atrage vizitatori, a le construi încrederea și a-i transforma în clienți potențiali calificați, non-stop.",
  },
  problems: [
    { title: "Site-ul tău e o broșură digitală, nu un motor de vânzări", desc: "Prezintă cine ești și ce faci, dar nu convinge vizitatorul să ia o acțiune. Lipsesc elementele care transformă curiozitatea în contact." },
    { title: "Vizitatorii vin și pleacă fără să lase date", desc: "Fără un mecanism clar de captare (formular, număr vizibil, chat live), 98% din vizitatori dispar pentru totdeauna." },
    { title: "Mesajul nu răspunde la \"De ce tu?\"", desc: "Dacă vizitatorul nu înțelege în primele 5 secunde ce beneficiu unic îi oferi, va căuta la concurenți." },
    { title: "Nu știi câte lead-uri generează (sau nu generează) site-ul", desc: "Fără tracking și analytics corecte, conduci cu ochii închiși, nu știi ce pagini atrag și care resping vizitatorii." },
  ],
  solutions: [
    { title: "Strategie de conversie bazată pe date", desc: "Analizăm comportamentul vizitatorilor existenți, identificăm unde pleacă și proiectăm un site care ghidează natural spre acțiune." },
    { title: "Copy persuasiv, cuvintele care conving", desc: "Nu scriem \"Suntem lideri cu experiență\". Scriem mesaje clare, centrate pe beneficii, care răspund la obiecțiile reale ale clienților tăi." },
    { title: "Design centrat pe conversie", desc: "Structura vizuală ghidează ochiul vizitatorului spre CTA. Butoane strategice, formulare simple, dovezi sociale (testimoniale, cifre, logo-uri clienți)." },
    { title: "Landing pages specializate", desc: "Pentru fiecare serviciu sau produs, o pagina cu un singur scop: conversie. Performanța este de 2-3x mai bună față de paginile generale." },
    { title: "Formulare inteligente", desc: "Formulare multi-step care cer mai puțin la fiecare pas, convertesc mai mult. Integrăm cu CRM-ul tău sau cu email pentru notificări instant." },
    { title: "Analytics și optimizare continuă", desc: "Instalăm tracking complet (Google Analytics, heatmaps) și optimizăm continuu: titluri, imagini, formulare, CTA-uri bazat pe comportamentul real." },
  ],
  cases: [
    { metric: "+47%", label: "Cereri de ofertă", industry: "Consultanță IT" },
    { metric: "+80%", label: "Lead-uri calificate", industry: "Clinică Stomatologică" },
    { metric: "3.8x ROI", label: "Return din publicitate", industry: "Servicii B2B" },
    { metric: "+50%", label: "Programări online", industry: "Clinică Medicală" },
    { metric: "+160%", label: "Abonați newsletter", industry: "Sală de Fitness" },
    { metric: "-42%", label: "Cost per lead", industry: "Agenție Imobiliară" },
  ],
  omnichannelServices: ["Google Ads", "Facebook Ads", "Email Marketing", "CRO", "SEO"],
  faq: [
    { q: "Care e diferența dintre un site de prezentare și un site de lead generation?", a: "Un site de prezentare spune cine ești. Un site de lead generation convinge un vizitator nehotărât să ia acțiune, să sune, să trimită un formular, să rezerve o întâlnire. Diferența stă în: copy convingător, structura paginilor, formulare optimizate și dovezi sociale strategice." },
    { q: "Am deja un site, trebuie să-l fac de la zero?", a: "Nu întotdeauna. Uneori e suficient un redesign strategic: schimbăm structura, îmbunătățim copywriting-ul și optimizăm formulare. Facem audit gratuit și îți spunem cinstit dacă ai nevoie de un site nou sau de îmbunătățiri." },
    { q: "Pe ce platformă construiți site-ul?", a: "Recomandăm WordPress pentru flexibilitate și ușurință de administrare, sau Next.js pentru performanță maximă și PageSpeed 95+. Alegem platforma după nevoile tale, nu o recomandare universală." },
    { q: "Cât durează să construiți un site de lead generation?", a: "Tipic: 4-6 săptămâni pentru un site cu 5-10 pagini. Aceasta include: audit și strategie (1 săptămână), design (1-2 săptămâni), dezvoltare (1-2 săptămâni) și testare/lansare (1 săptămână). Durata exactă depinde de complexitate." },
    { q: "Ce se întâmplă dacă site-ul nou nu generează mai multe lead-uri?", a: "Avem o politică de transparență totală. Dacă în 60 de zile de la lansare rata de conversie nu s-a îmbunătățit, refacem gratuit orice element identificat ca problemă, bazat pe date, nu pe opinii." },
    { q: "Includeți SEO în prețul site-ului?", a: "Includem SEO tehnic de bază: structura URL-urilor, meta tags, viteza de încărcare, sitemap și configurare Google Search Console. SEO continuu (crearea de conținut, link building) este un serviciu separat, dar recomandat pentru sustenabilitate pe termen lung." },
    { q: "Pot edita singur conținutul după lansare?", a: "Da. Fiecare site include training de 1 oră și documentație scrisă. Poți edita texte, imagini și adăuga pagini noi fără cunoștințe tehnice. Pentru modificări mai complexe, avem pachete de suport lunar." },
  ],
  testimonial: { quote: "Site-ul nou s-a încărcat de 4x mai repede și rata de conversie a crescut cu 35% în prima lună. Arată exact cum ne-am imaginat, poate chiar mai bine.", name: "Elena P.", role: "Director, clinică medicală privată" },
  tools: ["Figma", "Next.js", "WordPress", "Hotjar", "GTmetrix", "PageSpeed Insights"],
  toolsSectionTitle: "INSTRUMENTELE PE CARE LE FOLOSIM",
  freeAuditBadge: "Audit Website Gratuit Inclus",
};

const AnatomySection = () => (
  <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)" }} />
    <div className="page-container">
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <span className="badge mb-6">Anatomie</span>
        <h2 className="font-black text-white" style={{ fontSize: "clamp(1.75rem,3.5vw,2.75rem)", lineHeight: 1.05, letterSpacing: "-0.025em", marginTop: "20px" }}>Anatomia unui site care convertește</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ maxWidth: "960px", margin: "0 auto" }}>
        {[
          { num: "①", title: "Hero cu propunere de valoare clară", desc: "Prima secțiune spune în 5 secunde: cine ești, cui te adresezi, ce beneficiu unic oferi. CTA vizibil above the fold." },
          { num: "②", title: "Dovezi sociale", desc: "Testimoniale reale cu foto, cifre demonstrabile (50+ clienți, 98% satisfacție), logo-uri clienți cunoscuți." },
          { num: "③", title: "Formulare optimizate", desc: "Formulare scurte (3-5 câmpuri), plasate strategic, cu CTA acțional: nu 'Trimite', ci 'Vreau o ofertă gratuită'." },
          { num: "④", title: "Pagini de servicii dedicate", desc: "Fiecare serviciu pe pagina lui proprie, cu beneficii clare, proces de lucru, FAQ și CTA specific." },
          { num: "⑤", title: "Viteză de încărcare sub 2s", desc: "Fiecare secundă în plus scade conversiile cu 7%. Imagini WebP, hosting premium, cod optimizat." },
          { num: "⑥", title: "Tracking și analiticp complet", desc: "Google Analytics 4, heatmaps, înregistrări sesiuni. Știi exact unde pleacă vizitatorii și de ce." },
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

export default function LeadGenRoPage() {
  return (
    <>
      <Header locale="ro" />
      <main>
        <ServicePageTemplate
          data={data}
          heroRightSlot={
            <AdsDashboardCard
              emoji="💡"
              title="Lead Gen Site Conversie"
              date="Octombrie 2025"
              metrics={[
                { label: "Rată conversie", animated: { target: 3.8, decimals: 1, suffix: "%" }, badge: { text: "↑ 380%", positive: true } },
                { label: "Lead-uri/lună", animated: { target: 47 }, badge: { text: "↑ 156%", positive: true } },
                { label: "Cost per lead", animated: { target: 42, suffix: "€" }, badge: { text: "↓ 42%", positive: false } },
              ]}
              barPercent={88}
              barLabel="Obiectiv lunar atins"
              status="LIVE PageSpeed 96/100"
              badge1="0.8% → 3.8% rată conversie"
              badge2="Consultanță IT, România"
            />
          }
          afterHeroSlot={
            <>
              <AdsTrustBar items={[
                { stat: "PageSpeed 90+", label: "garantat la livrare" },
                { stat: "4-6", label: "săptămâni timp de livrare" },
                { stat: "50+", label: "site-uri livrate" },
                { stat: "35%", label: "creștere medie conversii" },
                { stat: "24/7", label: "suport post-lansare" },
              ]} />
              <AdsBeforeAfter
                title="Rezultate reale Înainte și după Nesco Digital"
                beforeLabel="Înainte"
                afterLabel="După Nesco"
                before={[
                  { label: "Rată de conversie", display: "0.8%" },
                  { label: "Lead-uri/lună", display: "18" },
                  { label: "Timp încărcare", display: "6.2s" },
                  { label: "PageSpeed Score", display: "42/100" },
                  { label: "Mobile experience", display: "dezastruos" },
                  { label: "Cost per lead", display: "145€" },
                ]}
                after={[
                  { label: "Rată de conversie", display: "3.8%", animate: { target: 3.8, decimals: 1, suffix: "%" } },
                  { label: "Lead-uri/lună", display: "47", animate: { target: 47 } },
                  { label: "Timp încărcare", display: "1.4s" },
                  { label: "PageSpeed Score", display: "96/100" },
                  { label: "Mobile experience", display: "perfect" },
                  { label: "Cost per lead", display: "42€", animate: { target: 42, suffix: "€" } },
                ]}
                source="Consultanță IT, România 60 de zile"
              />
              <AdsComparison
                badLabel="Site de prezentare clasic"
                goodLabel="Site de lead generation"
                bad={[
                  "Pagina Acasă cu text generic despre companie",
                  "Un formular de contact la pagina Contact",
                  "Niciun CTA above the fold",
                  "Lipsesc testimoniale și dovezi sociale",
                  "Timp de încărcare 4-8 secunde",
                  "Fără tracking și analytics corecte",
                ]}
                good={[
                  "Hero cu propunere de valoare clară și CTA proeminent",
                  "Formulare pe fiecare pagină de serviciu",
                  "CTA vizibil above the fold pe toate dispozitivele",
                  "Testimoniale reale, cifre verificabile, case studies",
                  "PageSpeed 90+ pe desktop și mobil",
                  "GA4 + heatmaps + înregistrări sesiuni",
                ]}
              />
              <AnatomySection />
              <AdsTimeline
                title="Procesul nostru în 6 săptămâni"
                phases={[
                  {
                    emoji: "🔍",
                    range: "Săptămânile 1-2",
                    title: "Audit & Strategie",
                    color: "#56db84",
                    items: [
                      "Audit site curent și analiză competitivă",
                      "Definire ICP și journey-ul clientului ideal",
                      "Strategie conversie și arhitectura site",
                      "Brief design și wireframes",
                    ],
                  },
                  {
                    emoji: "🎨",
                    range: "Săptămânile 3-4",
                    title: "Design & Copywriting",
                    color: "#60a5fa",
                    items: [
                      "Design complet în Figma, aprobat de tine",
                      "Copywriting optimizat conversie",
                      "Testimoniale și dovezi sociale integrate",
                      "Mobile-first approach",
                    ],
                  },
                  {
                    emoji: "🚀",
                    range: "Săptămânile 5-6",
                    title: "Dezvoltare & Lansare",
                    color: "#a78bfa",
                    items: [
                      "Dezvoltare Next.js sau WordPress",
                      "PageSpeed optimizat: 90+ garantat",
                      "Tracking complet: GA4 + Hotjar",
                      "Lansare + training utilizare",
                    ],
                  },
                ]}
              />
              <LeadGenCalculator />
            </>
          }
        />
      </main>
      <Footer locale="ro" />
      <AdsStickyBar title="Vrei un site care generează lead-uri?" cta="Audit gratuit" href="/contact/" />
    </>
  );
}
