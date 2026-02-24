import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeInSection } from "@/components/ui/FadeInSection";

const CATEGORY_COLOR = "#3b82f6"; // Strategie blue

export default function ArticlePage() {
  return (
    <>
      <Header locale="ro" />
      <main style={{ backgroundColor: "#050505" }}>
        {/* ── Hero ── */}
        <section
          className="relative overflow-hidden"
          style={{
            backgroundColor: "#050505",
            paddingTop: "140px",
            paddingBottom: "80px",
          }}
        >
          <div className="absolute inset-0 bg-grid pointer-events-none" />
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-20%",
              right: "-10%",
              width: 700,
              height: 700,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{
              background: "linear-gradient(to top, #050505, transparent)",
            }}
          />
          <div
            className="relative page-container"
            style={{ maxWidth: "720px", margin: "0 auto" }}
          >
            <span
              className="badge mb-4"
              style={{
                background: "rgba(59,130,246,0.10)",
                color: CATEGORY_COLOR,
                border: "1px solid rgba(59,130,246,0.18)",
              }}
            >
              Strategie
            </span>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "18px",
                marginTop: "16px",
              }}
            >
              3 Martie 2026 &middot; 13 min citire
            </p>
            <h1
              className="font-black text-white"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginBottom: "24px",
              }}
            >
              Cum sa construiesti un{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #3b82f6 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Funnel de Vanzari
              </span>{" "}
              complet
            </h1>
            <p
              style={{
                fontSize: "1.125rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}
            >
              Ghid pas cu pas pentru construirea unui funnel de vanzari eficient
              &mdash; de la atragerea audientei (TOFU) pana la conversie (BOFU)
              &mdash; cu tool-urile recomandate la fiecare etapa.
            </p>
          </div>
        </section>

        {/* ── Article Content ── */}
        <article
          className="page-container"
          style={{ maxWidth: "720px", margin: "0 auto", paddingBottom: "80px" }}
        >
          {/* Intro */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Un funnel de vanzari (sau &bdquo;palnie de vanzari&rdquo;) este
                parcursul pe care il face un potential client de la momentul in
                care afla de business-ul tau pana cand face prima achizitie.
                Fiecare etapa a acestui parcurs necesita un mesaj diferit, un tip
                de continut diferit si un obiectiv diferit.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Problema? Majoritatea business-urilor se concentreaza exclusiv pe
                partea de sus a funnel-ului &mdash; atragerea de trafic. Investesc
                in reclame, SEO si social media, dar nu au un sistem care sa
                transforme vizitatorii in lead-uri si lead-urile in clienti.
                Rezultatul: bani cheltuiti pe trafic care nu se converteste
                niciodata.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                In acest ghid iti aratam cum sa construiesti un funnel complet,
                de la zero, cu tool-urile potrivite la fiecare etapa. Nu e teorie
                abstracta &mdash; e un plan actionabil pe care il poti implementa
                imediat.
              </p>
            </div>
          </FadeInSection>

          {/* Funnel Framework */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <h2
                className="font-bold text-white"
                style={{
                  fontSize: "1.625rem",
                  letterSpacing: "-0.02em",
                  marginBottom: "20px",
                }}
              >
                Framework-ul Funnel: TOFU &rarr; MOFU &rarr; BOFU
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Inainte sa incepi constructia, trebuie sa intelegi cele 3 etape
                ale oricarui funnel de vanzari. Fiecare etapa are un scop
                distinct si necesita tactici specifice:
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
                {[
                  {
                    title: "TOFU (Top of Funnel) — Constientizare",
                    desc: "Obiectiv: atrage atentia audientei potrivite. Oamenii nu te cunosc inca si nu stiu ca au o problema pe care tu o poti rezolva. Tactici: articole de blog, postari pe social media, reclame platite, SEO, continut educational.",
                  },
                  {
                    title: "MOFU (Middle of Funnel) — Considerare",
                    desc: "Obiectiv: transforma vizitatorii in lead-uri si cultiva relatia. Oamenii stiu ca au o problema si cauta solutii. Tactici: lead magnets (ebook-uri, checklist-uri), secvente de email, webinarii, studii de caz, continut detaliat.",
                  },
                  {
                    title: "BOFU (Bottom of Funnel) — Decizie",
                    desc: "Obiectiv: converteste lead-urile in clienti platitori. Oamenii sunt gata sa cumpere, dar au nevoie de ultimul impuls. Tactici: pagini de vanzare, demo-uri, trial-uri gratuite, testimoniale, oferte limitate.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      padding: "24px",
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "16px",
                    }}
                  >
                    <h3
                      className="font-bold text-white"
                      style={{
                        fontSize: "1rem",
                        marginBottom: "8px",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.45)",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Greseala critica pe care o fac majoritatea business-urilor este
                sa sara direct de la TOFU la BOFU &mdash; adica sa incerce sa
                vanda imediat unui vizitator care abia a aflat de existenta lor.
                Fara etapa de MOFU, rata de conversie va fi mereu mica.
              </p>
            </div>
          </FadeInSection>

          {/* Building TOFU */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <h2
                className="font-bold text-white"
                style={{
                  fontSize: "1.625rem",
                  letterSpacing: "-0.02em",
                  marginBottom: "20px",
                }}
              >
                Construieste TOFU: Atrage audienta potrivita
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Partea de sus a funnel-ului are un singur scop: sa aduca oamenii
                potriviti pe radarul tau. Nu orice trafic &mdash; ci trafic
                relevant, de la persoane care ar putea deveni clienti. Exista 3
                canale principale pentru TOFU:
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
                {[
                  {
                    title: "Continut organic (Blog, Video, Social Media)",
                    desc: "Creeaza articole care raspund la intrebarile pe care le au potentialii tai clienti. Ghiduri, tutoriale, liste de resurse — orice ii ajuta sa inteleaga problema pe care o au. Optimizeaza continutul pentru SEO ca sa atragi trafic organic pe termen lung.",
                  },
                  {
                    title: "Achizitie platita (Google Ads, Meta Ads)",
                    desc: "Reclamele platite sunt cel mai rapid mod de a genera trafic la TOFU. Google Search Ads capteaza oameni cu intentie de cautare, iar Meta Ads (Facebook si Instagram) functioneaza excelent pentru awareness si pentru a ajunge la audiente noi.",
                  },
                  {
                    title: "SEO si trafic organic",
                    desc: "Optimizarea pentru motoarele de cautare este investitia pe termen lung. Articolele de blog optimizate, paginile de categorie si continutul evergreen genereaza trafic constant fara costuri recurente per click.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      padding: "24px",
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "16px",
                    }}
                  >
                    <h3
                      className="font-bold text-white"
                      style={{
                        fontSize: "1rem",
                        marginBottom: "8px",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.45)",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tool: Unbounce */}
              <div
                style={{
                  padding: "24px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                }}
              >
                <h3
                  className="font-bold text-white"
                  style={{
                    fontSize: "1rem",
                    marginBottom: "8px",
                  }}
                >
                  Tool recomandat pentru TOFU:{" "}
                  <a
                    href="#AFFILIATE_UNBOUNCE"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    style={{ color: CATEGORY_COLOR, textDecoration: "underline", textUnderlineOffset: "3px" }}
                  >
                    Unbounce
                  </a>
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Unbounce iti permite sa creezi landing page-uri de capturare
                  rapid, fara dezvoltator. Are A/B testing integrat, smart
                  traffic (directioneaza automat vizitatorii catre varianta cu
                  cea mai mare rata de conversie) si template-uri optimizate
                  pentru lead generation. Ideal pentru a transforma traficul TOFU
                  in lead-uri MOFU.
                </p>
                <a
                  href="#AFFILIATE_UNBOUNCE"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "12px",
                    padding: "8px 16px",
                    background: "rgba(59,130,246,0.10)",
                    border: "1px solid rgba(59,130,246,0.18)",
                    borderRadius: "8px",
                    color: CATEGORY_COLOR,
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Incearca Unbounce <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </FadeInSection>

          {/* Building MOFU */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <h2
                className="font-bold text-white"
                style={{
                  fontSize: "1.625rem",
                  letterSpacing: "-0.02em",
                  marginBottom: "20px",
                }}
              >
                Construieste MOFU: Cultiva si califica lead-urile
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Ai trafic. Acum trebuie sa transformi vizitatorii in lead-uri
                si sa construiesti o relatie cu ei pana cand sunt gata sa
                cumpere. MOFU este etapa in care oferi valoare in schimbul
                datelor de contact si apoi cultivi acea relatie prin continut
                relevant.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
                {[
                  {
                    title: "Lead magnets (ebook-uri, checklist-uri, tool-uri gratuite)",
                    desc: "Ofera ceva valoros in schimbul adresei de email. Un ghid PDF, un checklist, un calculator online, un template — orice rezolva o problema concreta a audientei tale. Lead magnet-ul trebuie sa fie direct legat de produsul sau serviciul pe care il vinzi.",
                  },
                  {
                    title: "Secvente de email nurture",
                    desc: "Dupa ce ai capturat un lead, nu incerca sa vinzi imediat. Trimite o secventa de 5-7 emailuri care educa, ofera valoare si construieste incredere. Arata studii de caz, ofera sfaturi practice si pozitioneaza-te ca expert in domeniu.",
                  },
                  {
                    title: "Webinarii si demo-uri",
                    desc: "Webinariile sunt extrem de eficiente pentru B2B si servicii complexe. Ofera o sesiune gratuita de 30-45 minute care rezolva o problema specifica. La final, prezinta solutia ta ca urmatorul pas logic.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      padding: "24px",
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "16px",
                    }}
                  >
                    <h3
                      className="font-bold text-white"
                      style={{
                        fontSize: "1rem",
                        marginBottom: "8px",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.45)",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tool: ActiveCampaign */}
              <div
                style={{
                  padding: "24px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                  marginBottom: "16px",
                }}
              >
                <h3
                  className="font-bold text-white"
                  style={{
                    fontSize: "1rem",
                    marginBottom: "8px",
                  }}
                >
                  Tool recomandat:{" "}
                  <a
                    href="#AFFILIATE_ACTIVECAMPAIGN"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    style={{ color: CATEGORY_COLOR, textDecoration: "underline", textUnderlineOffset: "3px" }}
                  >
                    ActiveCampaign
                  </a>
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  ActiveCampaign este una dintre cele mai puternice platforme de
                  email marketing si automatizare. Are lead scoring integrat
                  (atribuie puncte contactelor in functie de actiunile lor),
                  secvente de automatizare vizuale, segmentare avansata si CRM
                  inclus. Perfect pentru etapa de MOFU unde trebuie sa cultivi
                  lead-urile si sa le califici automat.
                </p>
                <a
                  href="#AFFILIATE_ACTIVECAMPAIGN"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "12px",
                    padding: "8px 16px",
                    background: "rgba(59,130,246,0.10)",
                    border: "1px solid rgba(59,130,246,0.18)",
                    borderRadius: "8px",
                    color: CATEGORY_COLOR,
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Incearca ActiveCampaign <ArrowRight size={14} />
                </a>
              </div>

              {/* Tool: Manychat */}
              <div
                style={{
                  padding: "24px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                }}
              >
                <h3
                  className="font-bold text-white"
                  style={{
                    fontSize: "1rem",
                    marginBottom: "8px",
                  }}
                >
                  Tool recomandat:{" "}
                  <a
                    href="#AFFILIATE_MANYCHAT"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    style={{ color: CATEGORY_COLOR, textDecoration: "underline", textUnderlineOffset: "3px" }}
                  >
                    Manychat
                  </a>
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Manychat permite marketing conversational pe WhatsApp,
                  Instagram DM si Facebook Messenger. Poti crea flow-uri
                  automate care raspund la comentarii, trimis DM-uri, califica
                  lead-uri si le directioneaza catre etapa urmatoare din funnel.
                  Rata de deschidere pe chat este de 80%+ vs. 20-25% pe email,
                  ceea ce il face ideal pentru nurture rapid.
                </p>
                <a
                  href="#AFFILIATE_MANYCHAT"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "12px",
                    padding: "8px 16px",
                    background: "rgba(59,130,246,0.10)",
                    border: "1px solid rgba(59,130,246,0.18)",
                    borderRadius: "8px",
                    color: CATEGORY_COLOR,
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Incearca Manychat <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </FadeInSection>

          {/* Building BOFU */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <h2
                className="font-bold text-white"
                style={{
                  fontSize: "1.625rem",
                  letterSpacing: "-0.02em",
                  marginBottom: "20px",
                }}
              >
                Construieste BOFU: Converteste in clienti
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Lead-urile sunt calificate, au incredere in tine si sunt
                aproape gata sa cumpere. Acum ai nevoie de o experienta de
                conversie impecabila care sa elimine orice ezitare ramasa. Iata
                elementele cheie ale unui BOFU eficient:
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
                {[
                  {
                    title: "Pagina de vanzare optimizata",
                    desc: "O pagina de vanzare buna raspunde la toate intrebarile si obiectiile potentialului client. Structura: problema clara, solutia ta, beneficii concrete (nu features), dovada sociala, garantie si call-to-action puternic. Fiecare element trebuie sa impinga vizitatorul catre decizie.",
                  },
                  {
                    title: "Urgenta si raritate (folosite etic)",
                    desc: "Oamenii amana deciziile in mod natural. Ofertele cu termen limitat, locurile limitate sau bonusurile disponibile doar o perioada scurta accelereaza decizia. Important: urgenta trebuie sa fie reala, nu fabricata. Oamenii simt lipsa de autenticitate.",
                  },
                  {
                    title: "Dovada sociala si testimoniale",
                    desc: "Recenzii, studii de caz, numere concrete (clienti serviti, rezultate obtinute), logo-uri de clienti. Nimic nu convinge mai bine decat povestile altor clienti care au avut aceeasi problema si au obtinut rezultate. Video testimonialele au cel mai mare impact.",
                  },
                  {
                    title: "Optimizarea platii si checkout-ului",
                    desc: "Procesul de plata trebuie sa fie cat mai simplu posibil. Reducerea numarului de pasi, formulare scurte, optiuni multiple de plata, badge-uri de securitate si o politica de retur clara. Fiecare camp in plus in formular reduce rata de conversie cu 10-15%.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      padding: "24px",
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "16px",
                    }}
                  >
                    <h3
                      className="font-bold text-white"
                      style={{
                        fontSize: "1rem",
                        marginBottom: "8px",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.45)",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tool: Kartra */}
              <div
                style={{
                  padding: "24px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                }}
              >
                <h3
                  className="font-bold text-white"
                  style={{
                    fontSize: "1rem",
                    marginBottom: "8px",
                  }}
                >
                  Tool recomandat pentru BOFU:{" "}
                  <a
                    href="#AFFILIATE_KARTRA"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    style={{ color: CATEGORY_COLOR, textDecoration: "underline", textUnderlineOffset: "3px" }}
                  >
                    Kartra
                  </a>
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Kartra este o platforma all-in-one pentru constructia de
                  funnel-uri complete. Include landing page builder, email
                  marketing, checkout si procesare plati, membership sites si
                  analytics &mdash; totul intr-un singur loc. Nu mai trebuie
                  sa integrezi 5-6 tool-uri diferite. Ideal pentru
                  antreprenori si echipe mici care vor un funnel complet fara
                  complexitate tehnica.
                </p>
                <a
                  href="#AFFILIATE_KARTRA"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "12px",
                    padding: "8px 16px",
                    background: "rgba(59,130,246,0.10)",
                    border: "1px solid rgba(59,130,246,0.18)",
                    borderRadius: "8px",
                    color: CATEGORY_COLOR,
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Incearca Kartra <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </FadeInSection>

          {/* Funnel Metrics */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <h2
                className="font-bold text-white"
                style={{
                  fontSize: "1.625rem",
                  letterSpacing: "-0.02em",
                  marginBottom: "20px",
                }}
              >
                Metrici de funnel pe care trebuie sa le urmaresti
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Fiecare etapa a funnel-ului are metricile ei specifice. Daca
                nu masori, nu poti optimiza. Iata ce sa urmaresti la fiecare
                nivel:
              </p>
              <div style={{ overflowX: "auto", marginBottom: "24px" }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    minWidth: "540px",
                  }}
                >
                  <thead>
                    <tr>
                      {["Etapa", "Metrici cheie"].map(
                        (header) => (
                          <th
                            key={header}
                            style={{
                              background: "#111",
                              color: "#fff",
                              padding: "14px 18px",
                              borderBottom: "2px solid #3b82f6",
                              textAlign: "left",
                              fontSize: "0.875rem",
                              fontWeight: 700,
                            }}
                          >
                            {header}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["TOFU", "Trafic total, Click-through rate (CTR), Cost per click (CPC), Reach"],
                      ["MOFU", "Rata de conversie lead, Email open/click rate, Engagement, Cost per lead"],
                      ["BOFU", "Rata de conversie vanzari, Valoare medie comanda (AOV), Cost achizitie client (CAC), ROI"],
                    ].map(([etapa, metrici], i) => (
                      <tr key={i}>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "#fff",
                            padding: "14px 18px",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                          }}
                        >
                          {etapa}
                        </td>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "rgba(255,255,255,0.6)",
                            padding: "14px 18px",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                          }}
                        >
                          {metrici}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Cea mai importanta metrica pe care putini o urmaresc: ratele
                de trecere intre etape. Ce procent din vizitatorii TOFU devin
                lead-uri MOFU? Ce procent din lead-urile MOFU devin clienti
                BOFU? Aceste rate iti arata exact unde pierde funnel-ul tau
                oameni.
              </p>
            </div>
          </FadeInSection>

          {/* Common Mistakes */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <h2
                className="font-bold text-white"
                style={{
                  fontSize: "1.625rem",
                  letterSpacing: "-0.02em",
                  marginBottom: "20px",
                }}
              >
                Greseli comune de funnel
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Chiar si un funnel bine gandit poate esua daca faci una din
                aceste greseli frecvente:
              </p>
              <div
                style={{
                  padding: "24px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                }}
              >
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {[
                    "Lipsa unei propuneri de valoare clare — daca vizitatorii nu inteleg in 5 secunde de ce sa aleaga pe tine, pleaca",
                    "Prea multi pasi in funnel — fiecare pas suplimentar pierde 20-40% din oameni. Simplifica la maximum",
                    "Niciun follow-up pentru cei care nu convertesc — fara retargeting si email de recuperare, pierzi definitiv lead-urile",
                    "Ignorarea experientei pe mobil — peste 70% din trafic vine de pe mobil. Daca funnel-ul nu e optimizat pe mobil, pierzi bani",
                    "Mesaj inconsistent intre etape — daca reclama promite ceva si landing page-ul spune altceva, increderea dispare instant",
                  ].map((mistake) => (
                    <li
                      key={mistake}
                      style={{
                        display: "flex",
                        gap: "12px",
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.7,
                        paddingBottom: "10px",
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                      }}
                    >
                      <span style={{ color: CATEGORY_COLOR, flexShrink: 0 }}>
                        &#9679;
                      </span>
                      {mistake}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInSection>

          {/* CTA Box */}
          <FadeInSection>
            <div
              style={{
                padding: "40px",
                background: "#0a0a0a",
                borderRadius: "20px",
                border: "1px solid rgba(86,219,132,0.2)",
                textAlign: "center",
                marginBottom: "64px",
              }}
            >
              <h2
                className="font-bold text-white"
                style={{
                  fontSize: "1.5rem",
                  letterSpacing: "-0.02em",
                  marginBottom: "12px",
                }}
              >
                Descopera strategia digitala potrivita
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.7,
                  marginBottom: "28px",
                  maxWidth: "480px",
                  margin: "0 auto 28px",
                }}
              >
                Vrei sa construiesti un funnel de vanzari complet, dar nu stii
                de unde sa incepi? Echipa Nesco Digital iti poate crea o
                strategie digitala personalizata, cu funnel-ul potrivit
                business-ului tau.
              </p>
              <Link href="/strategie-digitala-ro/" className="btn-primary">
                Vreau o strategie <ArrowRight size={16} />
              </Link>
            </div>
          </FadeInSection>

          {/* Related Articles */}
          <FadeInSection>
            <div style={{ marginBottom: "40px" }}>
              <h2
                className="font-bold text-white"
                style={{
                  fontSize: "1.375rem",
                  letterSpacing: "-0.02em",
                  marginBottom: "24px",
                }}
              >
                Articole similare
              </h2>
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div
                  style={{
                    padding: "28px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "20px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#3b82f6",
                    }}
                  >
                    Strategie
                  </span>
                  <h3
                    className="font-bold text-white"
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.3,
                      margin: "10px 0",
                    }}
                  >
                    Strategie de Marketing Digital Pas cu Pas (Ghid 2026)
                  </h3>
                  <Link
                    href="/blog/strategie-marketing-digital-ghid/"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "#56db84",
                      textDecoration: "none",
                    }}
                  >
                    Citeste <ArrowRight size={14} />
                  </Link>
                </div>
                <div
                  style={{
                    padding: "28px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "20px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#f59e0b",
                    }}
                  >
                    E-commerce
                  </span>
                  <h3
                    className="font-bold text-white"
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.3,
                      margin: "10px 0",
                    }}
                  >
                    Rata de conversie: Ghid complet pentru optimizare
                  </h3>
                  <Link
                    href="/blog/rata-de-conversie-ghid/"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "#56db84",
                      textDecoration: "none",
                    }}
                  >
                    Citeste <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </FadeInSection>
        </article>
      </main>
      <Footer locale="ro" />
    </>
  );
}
