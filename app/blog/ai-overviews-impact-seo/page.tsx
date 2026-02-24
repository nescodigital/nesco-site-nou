import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeInSection } from "@/components/ui/FadeInSection";

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
                "radial-gradient(circle, rgba(20,184,166,0.05) 0%, transparent 70%)",
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
                background: "rgba(20,184,166,0.10)",
                color: "#14b8a6",
                border: "1px solid rgba(20,184,166,0.18)",
              }}
            >
              SEO
            </span>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "18px",
                marginTop: "16px",
              }}
            >
              14 Februarie 2026 &middot; 8 min citire
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
              Cum afecteaza AI Overviews{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #14b8a6 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                SEO-ul si ce trebuie sa faci
              </span>
            </h1>
            <p
              style={{
                fontSize: "1.125rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}
            >
              Google AI Overviews schimba regulile jocului in SEO.
              Rezumatele generate de AI apar deasupra rezultatelor organice
              si iti pot fura traficul &mdash; daca nu te adaptezi.
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
                Google AI Overviews (cunoscut anterior ca Search Generative
                Experience sau SGE) transforma fundamental modul in care
                utilizatorii interactioneaza cu rezultatele de cautare.
                Rezumatele generate de inteligenta artificiala apar acum
                deasupra rezultatelor organice clasice pentru aproximativ 30%
                din cautari, oferind raspunsuri directe fara ca utilizatorul
                sa mai dea click pe vreun site.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Ce inseamna asta pentru business-ul tau? Mai putine click-uri,
                mai putin trafic organic si o necesitate urgenta de a-ti
                adapta strategia SEO. In acest articol iti explicam exact ce
                se intampla, ce tipuri de cautari sunt afectate si, cel mai
                important, ce poti face concret ca sa ramai vizibil si
                relevant.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Ce sunt AI Overviews */}
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
                Ce sunt AI Overviews?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                AI Overviews sunt raspunsuri generate automat de Google cu
                ajutorul inteligentei artificiale, afisate intr-un bloc
                dedicat in partea de sus a paginii de rezultate (SERP).
                Spre deosebire de featured snippets-urile clasice, care
                extrag un singur fragment dintr-o sursa, AI Overviews
                sintetizeaza informatii din multiple site-uri si le prezinta
                intr-un format conversational.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Practic, utilizatorul primeste un rezumat complet chiar in
                pagina de cautare &mdash; cu linkuri catre sursele folosite,
                dar intr-un format care reduce semnificativ nevoia de a da
                click mai departe. Blocul AI Overview ocupa de obicei
                spatiul echivalent a 3-5 rezultate organice clasice,
                impingand rezultatele traditionale mult mai jos pe pagina.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Google a lansat AI Overviews initial in SUA in mai 2024 si
                le-a extins treptat in peste 100 de tari. Functionalitatea
                este activa si in Europa, desi cu unele limitari legate de
                reglementarile AI Act. In Romania, AI Overviews apar deja
                pentru cautari in limba engleza si incep sa fie testate si
                pentru cautari in romana.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Impactul asupra traficului organic */}
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
                Impactul asupra traficului organic
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Studiile din 2025 arata ca AI Overviews reduc rata de click
                (CTR) cu <strong style={{ color: "#fff" }}>20-40%</strong>{" "}
                pentru cautarile informationale. Dar impactul nu este uniform
                &mdash; depinde foarte mult de tipul de cautare. Cautarile
                tranzactionale si locale sunt mai putin afectate, in timp ce
                cautarile de tip &bdquo;ce este...&rdquo; sau &bdquo;cum
                sa...&rdquo; sunt cele mai lovite.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Iata o analiza detaliata a impactului pe fiecare tip de
                cautare:
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
                      {["Tip cautare", "Frecventa AI Overview", "Impact CTR"].map(
                        (h) => (
                          <th
                            key={h}
                            style={{
                              background: "#111",
                              color: "#fff",
                              padding: "14px 18px",
                              borderBottom: "2px solid #14b8a6",
                              textAlign: "left",
                              fontSize: "0.875rem",
                              fontWeight: 700,
                            }}
                          >
                            {h}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        'Informationala ("ce este...")',
                        "Foarte mare (60%+)",
                        "-30% pana la -40%",
                      ],
                      [
                        'Comerciala ("cel mai bun X pentru...")',
                        "Mare (40%+)",
                        "-15% pana la -25%",
                      ],
                      [
                        'Tranzactionala ("cumpara X")',
                        "Mica (10%)",
                        "-5% pana la -10%",
                      ],
                      [
                        'Locala ("X langa mine")',
                        "Medie (25%)",
                        "-10% pana la -15%",
                      ],
                      [
                        'Navigationala ("nume brand")',
                        "Foarte mica (5%)",
                        "Minim",
                      ],
                    ].map(([tip, frecventa, impact], i) => (
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
                          {tip}
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
                          {frecventa}
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
                          {impact}
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
                Concluzia este clara: daca strategia ta SEO se bazeza
                predominant pe continut informational generic, esti cel mai
                expus. Dar daca te concentrezi pe cautari tranzactionale,
                locale sau de brand, impactul este mult mai mic.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Cine castiga si cine pierde */}
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
                Cine castiga si cine pierde
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                AI Overviews nu lovesc pe toata lumea la fel. Exista
                castigatori clari si perdanti previzibili in aceasta noua
                realitate a SEO-ului.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
                <div
                  style={{
                    padding: "24px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(20,184,166,0.15)",
                    borderRadius: "16px",
                  }}
                >
                  <h3
                    className="font-bold"
                    style={{
                      fontSize: "1rem",
                      marginBottom: "12px",
                      color: "#14b8a6",
                    }}
                  >
                    Castigatori
                  </h3>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {[
                      "Site-uri cu autoritate ridicata si E-E-A-T puternic",
                      "Experti de nisa cu continut original si date unice",
                      "Branduri puternice cu cautari de brand frecvente",
                      "Site-uri cu continut interactiv (tools, calculatoare)",
                      "Business-uri locale cu prezenta Google Business optimizata",
                    ].map((item) => (
                      <li
                        key={item}
                        style={{
                          display: "flex",
                          gap: "8px",
                          fontSize: "0.875rem",
                          color: "rgba(255,255,255,0.5)",
                          lineHeight: 1.6,
                        }}
                      >
                        <span style={{ color: "#14b8a6", flexShrink: 0 }}>
                          &#10003;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  style={{
                    padding: "24px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "16px",
                  }}
                >
                  <h3
                    className="font-bold"
                    style={{
                      fontSize: "1rem",
                      marginBottom: "12px",
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    Perdanti
                  </h3>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {[
                      "Site-uri cu continut thin, superficial",
                      "Agregatoare de informatii fara valoare adaugata",
                      "Articole generice de tip \"top 10\" fara date proprii",
                      "Site-uri care depind 100% de trafic informational",
                      "Continut AI-generated fara expertiza reala in spate",
                    ].map((item) => (
                      <li
                        key={item}
                        style={{
                          display: "flex",
                          gap: "8px",
                          fontSize: "0.875rem",
                          color: "rgba(255,255,255,0.5)",
                          lineHeight: 1.6,
                        }}
                      >
                        <span
                          style={{
                            color: "rgba(255,255,255,0.25)",
                            flexShrink: 0,
                          }}
                        >
                          &#10007;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Pattern-ul este clar: Google favorizeaza in AI Overviews
                sursele care demonstreaza expertiza reala, experienta directa
                si autoritate in domeniu. Daca ai continut original bazat pe
                date proprii, esti intr-o pozitie mult mai buna decat
                competitorii care recicleaza informatii deja disponibile
                online.
              </p>
            </div>
          </FadeInSection>

          {/* Section: 6 strategii de adaptare */}
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
                6 strategii de adaptare la AI Overviews
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Nu trebuie sa privesti AI Overviews ca pe un dezastru.
                Trebuie sa le privesti ca pe o schimbare de teren care
                favorizeaza jucatorii inteligenti. Iata ce poti face
                concret:
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
                    title:
                      "1. Targeteaza cautarile unde AI Overviews NU apar",
                    desc: "Concentreaza-te pe cautari tranzactionale, long-tail si de nisa unde Google inca nu afiseaza AI Overviews. Cautarile de tip \"cumpara\", \"pret\", \"servicii\" si cele foarte specifice sunt mult mai putin afectate. Analizeaza-ti keyword-urile actuale si identifica care dintre ele triggereaza AI Overviews si care nu.",
                  },
                  {
                    title:
                      "2. Creeaza continut prea complex pentru AI sa-l sumarizeze",
                    desc: "Cercetare originala, date proprii, studii de caz detaliate, analize cu nuante si opinii de expert — acestea sunt tipurile de continut pe care AI-ul nu le poate comprima intr-un rezumat simplu. Daca informatia ta necesita context pentru a fi inteleasa, utilizatorul va da click sa citeasca articolul complet.",
                  },
                  {
                    title: "3. Construieste cautari de brand",
                    desc: "Cand oamenii cauta direct numele brandului tau, AI-ul nu poate intercepta acea cautare. Investeste in brand awareness prin social media, PR, podcast-uri si parteneriate. Un brand puternic genereaza trafic direct pe care niciun AI Overview nu il poate fura.",
                  },
                  {
                    title:
                      "4. Optimizeaza sa FII sursa pe care AI-ul o citeaza",
                    desc: "Daca nu poti evita AI Overviews, atunci asigura-te ca AI-ul citeaza site-ul tau ca sursa. Structureaza continutul clar cu headings, date concrete, statistici si informatii autoritare. Site-urile citate in AI Overviews primesc in continuare trafic — mai putin decat inainte, dar trafic de calitate mai mare.",
                  },
                  {
                    title: "5. Diversifica sursele de trafic",
                    desc: "Nu depinde 100% de Google. Construieste canale alternative: email marketing, social media organic, comunitati, YouTube, podcast-uri. Companiile care au trafic diversificat sunt mult mai reziliente la schimbarile algoritmice ale Google.",
                  },
                  {
                    title: "6. Concentreaza-te pe optimizarea conversiilor",
                    desc: "Daca primesti mai putine vizite din Google, asigura-te ca fiecare vizita conteaza mai mult. Optimizeaza ratele de conversie, imbunatateste UX-ul, creeaza landing pages dedicate si testeaza A/B fiecare element important. Mai putine vizite cu conversie mai mare pot genera mai mult revenue decat mult trafic cu conversie slaba.",
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
            </div>
          </FadeInSection>

          {/* Section: Ce NU trebuie sa faci */}
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
                Ce NU trebuie sa faci
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                La fel de important ca ce faci este sa stii ce sa{" "}
                <strong style={{ color: "#fff" }}>nu</strong> faci. Iata
                reactiile gresite pe care le vedem frecvent la companiile
                care se panicheaza din cauza AI Overviews:
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  marginBottom: "20px",
                }}
              >
                {[
                  "Nu intra in panica si nu abandona SEO-ul. Cautarea organica ramane cel mai mare canal de trafic pe internet, chiar si cu AI Overviews. SEO-ul nu moare — se transforma.",
                  "Nu incerca sa blochezi crawlerele AI (Googlebot, GPTBot). Blocarea lor nu te protejaza de AI Overviews si poate sa iti reduca vizibilitatea in rezultatele clasice.",
                  "Nu crea continut thin generat de AI ca sa \"concurezi\" cu AI-ul. Google penalizeaza continutul fara valoare adaugata, indiferent daca e scris de om sau de AI. Calitatea bate cantitatea.",
                  "Nu ignora problema sperand ca va disparea. AI Overviews sunt aici sa ramana si vor acoperi un procent din ce in ce mai mare de cautari. Adaptarea proactiva e singura strategie viabila.",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: "12px",
                      fontSize: "1rem",
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.7,
                    }}
                  >
                    <span
                      style={{ color: "#ef4444", flexShrink: 0 }}
                    >
                      &#10007;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Companiile care vor prospera in era AI Overviews sunt cele
                care trateaza aceasta schimbare ca pe o oportunitate de a
                se diferentia prin calitate, expertiza si strategie
                inteligenta &mdash; nu cele care incearca sa lupte impotriva
                inevitabilului.
              </p>
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
                Adapteaza-ti strategia SEO
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
                AI Overviews schimba regulile, dar cu strategia potrivita
                poti ramane vizibil si relevant. Descopera cum optimizarea
                GEO te ajuta sa apari in rezultatele AI.
              </p>
              <Link href="/geo-optimization/" className="btn-primary">
                Descopera GEO Optimization <ArrowRight size={16} />
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      color: "#14b8a6",
                    }}
                  >
                    SEO
                  </span>
                  <h3
                    className="font-bold text-white"
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.3,
                      margin: "10px 0",
                    }}
                  >
                    Cum sa apari in ChatGPT si Perplexity: Ghid complet GEO
                  </h3>
                  <Link
                    href="/blog/geo-optimizare-ai-search/"
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
                      color: "#14b8a6",
                    }}
                  >
                    SEO
                  </span>
                  <h3
                    className="font-bold text-white"
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.3,
                      margin: "10px 0",
                    }}
                  >
                    SEO vs. Google Ads: Ce alegi cand ai buget limitat?
                  </h3>
                  <Link
                    href="/blog/seo-vs-google-ads/"
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
