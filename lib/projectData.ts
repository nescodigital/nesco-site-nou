export type ProjectCategory = "B2B" | "E-commerce" | "SaaS" | "DTC" | "Sănătate" | "Performance Marketing";

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  metricMain: string;
  metricSub: string;
  industry: string;
  categories: ProjectCategory[];
  tags: string[];
  description: string;
  challenge: string;
  solution: string;
  metrics: ProjectMetric[];
  services: string[];
  timeline: string;
  heroImage?: string;
  accentColor: string;
  accentText: string;
  featured: boolean;
  metaTitle: string;
  metaDescription: string;
}

export const projects: Project[] = [
  {
    slug: "venituri-de-7-cifre-b2b-seo-performance-marketing-in-10-luni",
    title: "Venituri de 7 Cifre – B2B SEO & Performance Marketing în 10 luni",
    shortTitle: "B2B SEO & Performance Marketing",
    metricMain: "7 Cifre",
    metricSub: "Revenue în 10 luni",
    industry: "B2B",
    categories: ["B2B", "Performance Marketing"],
    tags: ["B2B", "SEO", "Google Ads", "LinkedIn Ads", "Email Marketing"],
    description: "Strategie full-funnel SEO + performance marketing pentru o companie B2B de nișă care dorea să atingă venituri de 7 cifre prin canale digitale.",
    challenge: "Compania se confrunta cu trafic organic scăzut și rate de retenție reduse, necesitând vizibilitate online îmbunătățită și creștere accelerată a vânzărilor.",
    solution: "Am implementat o strategie combinată de SEO strategic cu cuvinte cheie cu intenție ridicată, campanii PPC pe Google și canale sociale pentru trafic imediat, testare A/B sistematică și programe de loialitate prin email marketing pentru achiziții repetate.",
    metrics: [
      { value: "7 cifre", label: "Revenue în 10 luni" },
      { value: "Top 1-3", label: "Clasamente Google pentru 20+ keywords" },
      { value: "+40%", label: "Creștere retenție clienți" },
      { value: "10 luni", label: "Durată proiect" },
    ],
    services: ["Google Ads", "Facebook Ads", "Instagram Ads", "LinkedIn Ads", "SEO", "Email Marketing", "CRO"],
    timeline: "10 luni",
    heroImage: "/proiecte/venituri-de-7-cifre-b2b-seo-performance-marketing-in-10-luni/hero.png",
    accentColor: "rgba(96,165,250,0.1)",
    accentText: "#60a5fa",
    featured: true,
    metaTitle: "Venituri de 7 Cifre – B2B SEO & Performance Marketing | Nesco Digital",
    metaDescription: "Cum am ajutat o companie B2B să atingă venituri de 7 cifre în 10 luni prin SEO strategic și performance marketing omnichannel.",
  },
  {
    slug: "crestere-de-400-brand-e-commerce-12-luni",
    title: "Creștere de 400% – Scalare Brand E-Commerce în 12 luni",
    shortTitle: "Scalare Brand E-Commerce",
    metricMain: "400%",
    metricSub: "Creștere revenue în 12 luni",
    industry: "E-commerce",
    categories: ["E-commerce", "Performance Marketing"],
    tags: ["E-commerce", "Facebook Ads", "Google Ads", "CRO", "Email Marketing"],
    description: "Optimizare funnel de vânzări combinată cu storytelling vizual pentru o experiență de cumpărare fluidă și emoțional captivantă — rezultat: 400% creștere revenue.",
    challenge: "Brand-ul se confrunta cu rate de conversie scăzute și creștere stagnantă, necesitând o intervenție profundă pe traseul de cumpărare și accelerarea veniturilor.",
    solution: "Analiză de piață profundă, optimizarea funnel-ului (checkout simplificat, reducerea punctelor de fricțiune), strategii de upsell și bundling pentru creșterea AOV, și refresh creativ axat pe storytelling emoțional.",
    metrics: [
      { value: "400%", label: "Creștere revenue în 12 luni" },
      { value: "+30%", label: "Creștere AOV (Average Order Value)" },
      { value: "+28%", label: "Îmbunătățire rată de conversie" },
      { value: "12 luni", label: "Durată proiect" },
    ],
    services: ["Google Ads", "Facebook Ads", "Instagram Ads", "TikTok Ads", "CRO"],
    timeline: "12 luni",
    heroImage: "/proiecte/crestere-de-400-brand-e-commerce-12-luni/hero.png",
    accentColor: "rgba(86,219,132,0.1)",
    accentText: "#56db84",
    featured: true,
    metaTitle: "Creștere de 400% – Scalare Brand E-Commerce | Nesco Digital",
    metaDescription: "Cum am scalat un brand de e-commerce cu 400% în 12 luni prin optimizarea funnel-ului, creative storytelling și performance marketing omnichannel.",
  },
  {
    slug: "roi-de-5x-extinderea-platforme-saas-9-luni",
    title: "ROI de 5X – Extinderea unei Platforme SaaS în 9 luni",
    shortTitle: "Expansiune Platformă SaaS",
    metricMain: "5× ROI",
    metricSub: "în 9 luni",
    industry: "SaaS",
    categories: ["SaaS", "B2B"],
    tags: ["SaaS", "LinkedIn Ads", "Google Ads", "B2B"],
    description: "LinkedIn Ads + Google Ads targetând factorii de decizie enterprise, cu audit complet de campanii și realocarea bugetelor spre canalele cu cel mai mare potențial.",
    challenge: "Platforma SaaS necesita o expansiune rapidă a bazei de utilizatori, cu îmbunătățirea ROI-ului de marketing fără creșterea proporțională a costurilor de achiziție clienți.",
    solution: "Audit campanii și realocarea bugetelor spre canale high-performing, segmentare avansată a audienței pe baza demografiei și comportamentului, testare creativă iterativă și retargeting avansat cu reclame dinamice.",
    metrics: [
      { value: "5× ROI", label: "Return on Investment" },
      { value: "+10.000", label: "Lead-uri generate" },
      { value: "+70%", label: "Creștere engagement utilizatori" },
      { value: "9 luni", label: "Durată proiect" },
    ],
    services: ["LinkedIn Ads", "Google Ads", "Facebook Ads", "Instagram Ads", "TikTok Ads"],
    timeline: "9 luni",
    heroImage: "/proiecte/roi-de-5x-extinderea-platforme-saas-9-luni/hero.png",
    accentColor: "rgba(167,139,250,0.1)",
    accentText: "#a78bfa",
    featured: true,
    metaTitle: "ROI de 5X – Extinderea unei Platforme SaaS | Nesco Digital",
    metaDescription: "Cum am ajutat o platformă SaaS să obțină un ROI de 5X și 10.000+ lead-uri în 9 luni prin LinkedIn Ads și strategie omnichannel B2B.",
  },
  {
    slug: "crestere-de-10x-brand-dtc-14-luni",
    title: "Creștere de 10x – Brand DTC de la $250K la $2,5M în 14 luni",
    shortTitle: "Creștere Brand DTC",
    metricMain: "10×",
    metricSub: "Revenue în 14 luni",
    industry: "E-commerce",
    categories: ["DTC", "E-commerce"],
    tags: ["DTC", "TikTok Ads", "Instagram Ads", "Facebook Ads", "Email Marketing"],
    description: "TikTok + Instagram + Facebook + email flows pentru un brand consumer DTC — de la $250.000 la $2.500.000 în 14 luni.",
    challenge: "Brand DTC se confrunta cu creștere stagnantă și costuri ridicate de achiziție clienți, necesitând o strategie scalabilă pentru multiplicarea veniturilor.",
    solution: "Campanii A/B intensive pe multiple platforme, redesign complet al funnel-ului de vânzări, implementare analytics pentru monitorizarea comportamentului utilizatorilor, și crearea de materiale creative cu conversie ridicată: reclame video, carusele, landing pages.",
    metrics: [
      { value: "10×", label: "Creștere revenue (de la $250K la $2,5M)" },
      { value: "+35%", label: "Îmbunătățire CTR" },
      { value: "-25%", label: "Reducere CAC (Customer Acquisition Cost)" },
      { value: "14 luni", label: "Durată proiect" },
    ],
    services: ["TikTok Ads", "Instagram Ads", "Facebook Ads", "Google Ads", "Email Marketing", "CRO"],
    timeline: "14 luni",
    heroImage: "/proiecte/crestere-de-10x-brand-dtc-14-luni/hero.png",
    accentColor: "rgba(251,146,60,0.1)",
    accentText: "#fb923c",
    featured: true,
    metaTitle: "Creștere de 10x – Brand DTC de la $250K la $2,5M | Nesco Digital",
    metaDescription: "Cum am scalat un brand DTC de 10 ori în 14 luni prin strategie omnichannel TikTok, Instagram, Facebook și email marketing automation.",
  },
  {
    slug: "cresterea-numarului-de-rezervari",
    title: "Creșterea Numărului de Rezervări – Accor Hotels (Ibis, Pullman, Sofitel)",
    shortTitle: "Creștere Rezervări Accor Hotels",
    metricMain: "3×",
    metricSub: "Creștere rezervări",
    industry: "Hospitality",
    categories: ["Performance Marketing"],
    tags: ["Hospitality", "Email Marketing", "PPC", "Facebook Ads", "Display Ads"],
    description: "Strategie multi-canal pentru Accor Hotels (Ibis, Pullman, Sofitel) în UK, Irlanda, Franța, Spania și Portugalia — creștere de 3× a rezervărilor și reducere cu 27% a costului per rezervare.",
    challenge: "Clienții comparau ofertele pe aproximativ 15 website-uri diferite înainte de a finaliza o rezervare, generând costuri ridicate de achiziție și rate mari de abandon al procesului de booking.",
    solution: "Strategie digitală omnichannel cu campanii PPC, email marketing cu automatizări și fluxuri de retargeting prin email pentru recuperarea rezervărilor abandonate, targetând simultan brandurile Ibis, Pullman și Sofitel în 5 piețe europene.",
    metrics: [
      { value: "3×", label: "Creștere rezervări" },
      { value: "-27%", label: "Cost per rezervare" },
      { value: "58%", label: "Email open rate" },
    ],
    services: ["Digital Strategy", "Email Marketing", "PPC Management", "Facebook Ads", "YouTube Ads", "Display Advertising", "Remarketing"],
    timeline: "—",
    heroImage: undefined,
    accentColor: "rgba(251,191,36,0.1)",
    accentText: "#fbbf24",
    featured: false,
    metaTitle: "3× Creștere Rezervări – Accor Hotels (Ibis, Pullman, Sofitel) | Nesco Digital",
    metaDescription: "Cum am crescut de 3 ori rezervările pentru Accor Hotels în 5 piețe europene prin strategie PPC, email marketing și remarketing omnichannel.",
  },
  {
    slug: "imbunatatirea-calitatii-lead-urilor",
    title: "Îmbunătățirea Calității Lead-urilor – Experian",
    shortTitle: "Lead Quality Experian",
    metricMain: "+84%",
    metricSub: "Calitate lead-uri",
    industry: "Financial Services",
    categories: ["B2B", "Performance Marketing"],
    tags: ["B2B", "Google Ads", "CRO", "PPC", "Lead Generation"],
    description: "Restructurarea campaniilor Google AdWords pentru Experian — +84% calitate lead-uri, -36% cost per client nou și +9.9% rată de conversie pe landing page.",
    challenge: "Campaniile Google AdWords existente aveau cuvinte cheie duplicate, alocare slabă a bugetului și costuri-per-click umflate, generând lead-uri de calitate scăzută cu mai puțin de 1/3 din rata de conversie așteptată.",
    solution: "Restructurare completă a contului AdWords cu diferențiere clară între utilizatorii cu intenție ridicată și cei cu intenție scăzută, implementare tracking conversii, testare A/B sistematică și optimizare landing page pentru maximizarea calității lead-urilor.",
    metrics: [
      { value: "-36%", label: "Cost per client nou" },
      { value: "+84%", label: "Calitate lead-uri" },
      { value: "+9.9%", label: "Conversie landing page" },
    ],
    services: ["Landing Page Design", "PPC Management", "Google Ads", "Display Advertising", "Remarketing"],
    timeline: "—",
    heroImage: undefined,
    accentColor: "rgba(96,165,250,0.1)",
    accentText: "#60a5fa",
    featured: false,
    metaTitle: "+84% Calitate Lead-uri – Experian | Nesco Digital",
    metaDescription: "Cum am îmbunătățit calitatea lead-urilor Experian cu 84% și am redus costul per client nou cu 36% prin restructurarea campaniilor Google Ads.",
  },
  {
    slug: "targetarea-unui-nou-public-tinta",
    title: "Targetarea unui Nou Public Țintă – Douglas",
    shortTitle: "Nou Public Țintă Douglas",
    metricMain: "+12%",
    metricSub: "Conversie clienți noi",
    industry: "Retail / Beauty",
    categories: ["E-commerce", "Performance Marketing"],
    tags: ["E-commerce", "Programmatic Ads", "Display Advertising", "CRO"],
    description: "Campanie programmatică de display advertising pentru Douglas — identificarea și conversia de noi segmente de clienți cu +8% vânzări noi, +12% conversie și -21% cost per conversie.",
    challenge: "Douglas dorea să extindă vânzările prin atragerea de clienți noi care nu interacționaseră anterior cu website-ul, fără a crește disproporționat costurile de achiziție.",
    solution: "Analizarea datelor comportamentale și de interes ale clienților existenți pentru identificarea profilelor demografice ale potențialilor cumpărători, urmată de o campanie programmatică de display de înaltă precizie targetând audiențe asemănătoare.",
    metrics: [
      { value: "+8%", label: "Vânzări clienți noi" },
      { value: "+12%", label: "Rată conversie clienți noi" },
      { value: "-21%", label: "Cost per conversie" },
    ],
    services: ["Programmatic Display Advertising", "Google Analytics", "Audience Segmentation", "Creative Services"],
    timeline: "—",
    heroImage: undefined,
    accentColor: "rgba(167,139,250,0.1)",
    accentText: "#a78bfa",
    featured: false,
    metaTitle: "+12% Conversie Clienți Noi – Douglas | Nesco Digital",
    metaDescription: "Cum am ajutat Douglas să atingă clienți noi prin programmatic display advertising cu +8% vânzări, +12% conversie și -21% cost per conversie.",
  },
  {
    slug: "remediere-probleme-de-conversie",
    title: "Remediere Probleme de Conversie – Eyeglasses24",
    shortTitle: "CRO & Conversii Eyeglasses24",
    metricMain: "-49%",
    metricSub: "Cost per conversie",
    industry: "Retail / eCommerce",
    categories: ["E-commerce", "Performance Marketing"],
    tags: ["E-commerce", "CRO", "PPC", "Landing Page", "Lead Generation"],
    description: "Redesign landing page și optimizare campanii pentru Eyeglasses24 — reducere cu 49% a costului per conversie și creștere cu 46% a lead-urilor generate în câteva luni.",
    challenge: "Website-ul depășit bloca experiența utilizatorilor și rata de conversie, iar calitatea lead-urilor era critică — mai puțin de o treime din pachetele trimise s-au convertit în clienți activi.",
    solution: "Metodologie agilă pentru crearea unui nou landing page simplificat și elegant care a generat îmbunătățiri semnificative deja din prima lună. Tot traficul plătit a fost redirecționat spre acesta timp de 8 luni, cu optimizare continuă a campaniilor.",
    metrics: [
      { value: "-49%", label: "Cost per conversie" },
      { value: "+46%", label: "Lead-uri generate" },
      { value: "-12%", label: "Cost per click" },
      { value: "+15%", label: "Rată conversie (luna 1)" },
    ],
    services: ["Landing Page Design", "New Funnel Design", "PPC Management", "Display Advertising", "Remarketing"],
    timeline: "8 luni",
    heroImage: undefined,
    accentColor: "rgba(34,211,238,0.1)",
    accentText: "#22d3ee",
    featured: false,
    metaTitle: "-49% Cost per Conversie – Eyeglasses24 | Nesco Digital",
    metaDescription: "Cum am redus costul per conversie al Eyeglasses24 cu 49% și am crescut lead-urile cu 46% prin redesign landing page și optimizare campanii PPC.",
  },
  {
    slug: "crestere-google-ads-e-commerce",
    title: "+200% Vânzări – Scalare Google Ads E-Commerce",
    shortTitle: "Scalare Google Ads E-Commerce",
    metricMain: "+200%",
    metricSub: "Vânzări în 6 luni",
    industry: "E-commerce",
    categories: ["E-commerce", "Performance Marketing"],
    tags: ["E-commerce", "Google Ads", "CRO", "Performance Max"],
    description: "Performance Max + Shopping Ads cu smart bidding ROAS-optimizat pentru un brand de e-commerce — 200% creștere vânzări în 6 luni.",
    challenge: "Campaniile Google Ads existente nu generau rezultatele dorite — ROAS sub target și costuri ridicate de achiziție.",
    solution: "Restructurare completă a campaniilor Google Ads cu Performance Max și Shopping Ads, implementare smart bidding cu target ROAS optimizat, și optimizare continuă bazată pe date.",
    metrics: [
      { value: "+200%", label: "Creștere vânzări în 6 luni" },
      { value: "5× ROAS", label: "Return on Ad Spend" },
      { value: "-38%", label: "Reducere CPA față de media industriei" },
      { value: "6 luni", label: "Durată proiect" },
    ],
    services: ["Google Ads", "CRO", "Performance Max", "Shopping Ads"],
    timeline: "6 luni",
    heroImage: undefined,
    accentColor: "rgba(244,114,182,0.1)",
    accentText: "#f472b6",
    featured: false,
    metaTitle: "+200% Vânzări – Scalare Google Ads E-Commerce | Nesco Digital",
    metaDescription: "Cum am crescut vânzările unui brand de e-commerce cu 200% în 6 luni prin Performance Max și Shopping Ads cu smart bidding ROAS-optimizat.",
  },
  {
    slug: "clinica-dentara-germania",
    title: "+50% Programări – Clinică Dentară München",
    shortTitle: "Clinică Dentară Germania",
    metricMain: "+50%",
    metricSub: "Programări pacienți în 6 luni",
    industry: "Sănătate",
    categories: ["Sănătate", "Performance Marketing"],
    tags: ["Sănătate", "Google Ads", "SEO Local", "Lead Generation"],
    description: "Google Ads local + optimizare landing page pentru cabinet dentar din München — creștere cu 50% a programărilor în 6 luni.",
    challenge: "Cabinetul dentar din München dorea să atragă mai mulți pacienți noi prin canale digitale, cu un buget limitat.",
    solution: "Campanii Google Ads locale targetate geographic, optimizare completă a landing page-urilor pentru conversii maxime, și strategie SEO local pentru a domina căutările relevante.",
    metrics: [
      { value: "+50%", label: "Creștere programări pacienți" },
      { value: "-35%", label: "Reducere cost per lead" },
      { value: "Top 3", label: "Clasamente SEO local München" },
      { value: "6 luni", label: "Durată proiect" },
    ],
    services: ["Google Ads", "SEO Local", "CRO", "Landing Page Optimization"],
    timeline: "6 luni",
    heroImage: undefined,
    accentColor: "rgba(34,211,238,0.1)",
    accentText: "#22d3ee",
    featured: false,
    metaTitle: "+50% Programări – Clinică Dentară München | Nesco Digital",
    metaDescription: "Cum am crescut programările unui cabinet dentar din München cu 50% în 6 luni prin Google Ads local și optimizare landing page.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.categories.includes(category));
}

export const ALL_CATEGORIES: ProjectCategory[] = ["B2B", "E-commerce", "SaaS", "DTC", "Sănătate", "Performance Marketing"];
