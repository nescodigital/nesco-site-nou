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
              23 Februarie 2026 &middot; 11 min citire
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
              Cum sa apari in ChatGPT si{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #14b8a6 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Google AI Overviews (GEO)
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
              Generative Engine Optimization: ghidul complet pentru a fi citat de
              ChatGPT, Google AI Overviews, Perplexity si alte motoare AI in 2026.
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
                Modul in care oamenii cauta informatii online se schimba
                fundamental. In loc sa scaneze 10 link-uri albastre pe Google,
                tot mai multi utilizatori primesc raspunsuri directe de la
                sisteme AI &mdash; fie ca e vorba de ChatGPT, Google AI
                Overviews, Perplexity sau Bing Copilot. Aceasta schimbare nu e
                una viitoare: se intampla acum, in 2026.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Pentru business-uri, implicatia e clara: daca continutul tau nu
                este structurat pentru a fi selectat de modelele AI, devii
                invizibil pentru un segment tot mai mare de potentiali clienti.
                Aici intervine <strong style={{ color: "#fff" }}>Generative Engine Optimization (GEO)</strong> &mdash;
                noua disciplina care completeaza SEO-ul traditional cu
                optimizarea specifica pentru motoarele generative.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Ce este GEO? */}
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
                Ce este Generative Engine Optimization (GEO)?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                GEO este procesul de optimizare a continutului digital astfel
                incat sa fie selectat, citat si referit de motoarele de cautare
                bazate pe inteligenta artificiala. Spre deosebire de SEO-ul
                clasic, unde obiectivul e sa obtii o pozitie cat mai buna in
                SERP (Search Engine Results Page), in GEO obiectivul e sa fii{" "}
                <strong style={{ color: "#fff" }}>sursa pe care AI-ul o alege</strong> atunci cand genereaza
                un raspuns.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Cand un utilizator intreaba ChatGPT &bdquo;care sunt cele mai
                bune strategii de marketing digital in 2026?&rdquo;, modelul AI
                nu afiseaza link-uri &mdash; ci sintetizeaza informatia din
                sursele pe care le considera cele mai relevante si de incredere.
                Daca site-ul tau e una dintre acele surse, brand-ul tau castiga
                vizibilitate, credibilitate si, implicit, trafic.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Diferenta fundamentala: in SEO clasic concurezi pentru o{" "}
                <strong style={{ color: "#fff" }}>pozitie</strong>. In GEO concurezi pentru a fi{" "}
                <strong style={{ color: "#fff" }}>selectat ca sursa autoritara</strong>. Aceasta schimbare
                de paradigma cere o abordare diferita in crearea si structurarea
                continutului.
              </p>
            </div>
          </FadeInSection>

          {/* Section: De ce conteaza GEO */}
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
                De ce conteaza GEO in 2026?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Cifrele vorbesc de la sine. Adoptarea motoarelor AI de cautare a
                explodat in ultimii doi ani, iar tendinta nu da semne de
                incetinire. Iata o privire de ansamblu asupra platformelor care
                redefinesc modul in care informatia ajunge la utilizatori:
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
                      {["Platforma", "Utilizatori", "Impact cautari"].map(
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
                        "Google AI Overviews",
                        "2B+ cautari/zi",
                        "~30% din interogari",
                      ],
                      [
                        "ChatGPT",
                        "200M+ saptamanal",
                        "Crestere rapida",
                      ],
                      [
                        "Perplexity",
                        "15M+ lunar",
                        "Interogari de cercetare",
                      ],
                      [
                        "Bing Copilot",
                        "100M+ lunar",
                        "Ecosistem Microsoft",
                      ],
                    ].map(([platform, users, impact], i) => (
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
                          {platform}
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
                          {users}
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
                  marginBottom: "20px",
                }}
              >
                Google AI Overviews apar deja in aproximativ{" "}
                <strong style={{ color: "#fff" }}>30% din cautarile de pe Google</strong>, ceea ce
                inseamna ca pentru aproape o treime din interogari, utilizatorul
                primeste un raspuns generat de AI chiar in pagina de rezultate,
                fara sa mai dea click pe vreun site. Daca nu esti sursa citata
                in acel raspuns, ai pierdut acel vizitator.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                ChatGPT a depasit <strong style={{ color: "#fff" }}>200 de milioane de utilizatori
                saptamanali</strong>, iar multi dintre ei il folosesc ca prim instrument
                de cautare, inaintea Google-ului. Pentru business-uri, asta
                inseamna ca exista o audienta masiva care nu va vedea niciodata
                rezultatele SEO clasice &mdash; dar care poate descoperi brandul
                tau prin raspunsurile AI.
              </p>
            </div>
          </FadeInSection>

          {/* Section: 7 Strategii GEO */}
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
                7 strategii GEO pentru a fi citat de AI
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Am identificat 7 strategii esentiale pe care le implementam la
                Nesco Digital pentru clientii nostri si care au impact direct
                asupra vizibilitatii in motoarele generative:
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
                    title: "1. Structureaza continutul in format Q&A clar",
                    desc: "Modelele AI prefera continutul care raspunde direct la intrebari specifice. Foloseste heading-uri sub forma de intrebari (H2, H3) si ofera raspunsuri concise in primele 2-3 propozitii dupa fiecare heading. Aceasta structura le faciliteaza modelelor extragerea si citarea informatiei tale.",
                  },
                  {
                    title: "2. Foloseste date si surse autoritare",
                    desc: "AI-ul prioritizeaza continutul care include statistici concrete, studii citate si date verificabile. In loc de afirmatii generice precum \u00ABmarketingul digital e important\u00BB, ofera cifre: \u00ABconform studiului HubSpot din 2025, companiile care investesc in content marketing au o rata de conversie cu 67% mai mare\u00BB.",
                  },
                  {
                    title: "3. Scrie continut comprehensive, long-form (2000+ cuvinte)",
                    desc: "Modelele AI au nevoie de context extensiv pentru a intelege si cita o sursa. Articolele superficiale de 300-500 de cuvinte rareori sunt selectate. Continutul de 2000+ cuvinte care acopera un subiect in profunzime are sanse semnificativ mai mari de a fi referit.",
                  },
                  {
                    title: "4. Implementeaza schema markup corect (FAQ, HowTo, Article)",
                    desc: "Schema markup structurat ajuta motoarele AI sa inteleaga contextul continutului tau. Implementeaza FAQPage pentru sectiuni Q&A, HowTo pentru ghiduri pas cu pas si Article schema pentru fiecare articol de blog. Aceste semnale structurate cresc sansele de selectare.",
                  },
                  {
                    title: "5. Construieste autoritate topicala prin cluster-uri de continut",
                    desc: "In loc sa scrii articole izolate, construieste cluster-uri tematice: un articol-pilon comprehensiv legat de 5-10 articole suport care acopera sub-topicuri. Aceasta retea de continut semnaleaza AI-ului ca esti o autoritate pe acel subiect.",
                  },
                  {
                    title: "6. Optimizeaza pentru recunoasterea entitatilor",
                    desc: "Modelele AI lucreaza cu entitati (persoane, companii, concepte, locatii). Foloseste nume proprii, denumiri oficiale si termeni specifici in loc de formulari vagi. In loc de \u00ABo companie mare de tech\u00BB, scrie \u00ABGoogle\u00BB sau \u00ABMicrosoft\u00BB. Fii specific si clar.",
                  },
                  {
                    title: "7. Mentine continutul proaspat si actualizat regulat",
                    desc: "AI-ul prefera surse recente. Un articol din 2022 care nu a fost actualizat va fi deprioritizat fata de unul din 2026. Actualizeaza-ti articolele cheie cel putin trimestrial cu date noi, statistici actualizate si informatii relevante pentru anul curent.",
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

          {/* Section: GEO vs SEO */}
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
                GEO vs. SEO: care sunt diferentele?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                GEO nu inlocuieste SEO &mdash; il completeaza. Insa abordarea
                difera fundamental in mai multe privinte. Iata o comparatie
                directa:
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
                      {["Criteriu", "SEO Traditional", "GEO"].map((h) => (
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
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "Obiectiv",
                        "Pozitie in SERP (Top 1-3)",
                        "Citare ca sursa in raspunsuri AI",
                      ],
                      [
                        "Focus principal",
                        "Cuvinte cheie si intentie de cautare",
                        "Autoritate topicala si acuratete",
                      ],
                      [
                        "Factor de autoritate",
                        "Backlink-uri si Domain Authority",
                        "Mentiuni de brand si reputatie online",
                      ],
                      [
                        "Format continut",
                        "Optimizat pentru scanare rapida",
                        "Comprehensiv si structurat Q&A",
                      ],
                      [
                        "Masurare succes",
                        "Pozitie, CTR, trafic organic",
                        "Frecventa citatiilor AI, vizibilitate brand",
                      ],
                      [
                        "Viteza rezultate",
                        "3-6 luni pentru rezultate vizibile",
                        "Variabila (depinde de indexarea AI)",
                      ],
                    ].map(([criteriu, seo, geo], i) => (
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
                          {criteriu}
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
                          {seo}
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
                          {geo}
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
                Cel mai important lucru de retinut: strategia optima in 2026
                combina ambele discipline. SEO-ul iti aduce trafic organic din
                cautarile clasice, iar GEO te face vizibil in raspunsurile AI.
                Companiile care ignora oricare dintre ele pierd o parte
                semnificativa din audienta potentiala.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Cum implementezi GEO */}
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
                Cum implementezi GEO: ghid pas cu pas
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Trecerea de la SEO traditional la o strategie integrata
                SEO + GEO nu trebuie sa fie complicata. Iata pasii pe care ii
                recomandam clientilor nostri:
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
                    title: "Pasul 1: Auditeaza continutul existent",
                    desc: "Analizeaza paginile tale cu cel mai mult trafic organic si verifica daca sunt structurate pentru AI. Intreaba-te: un model AI ar putea extrage un raspuns clar din aceasta pagina? Daca nu, marcheaza-le pentru optimizare.",
                  },
                  {
                    title: "Pasul 2: Identifica intrebarile cheie din nisa ta",
                    desc: "Foloseste tools precum AnswerThePublic, AlsoAsked sau sectiunea \u00ABPeople Also Ask\u00BB din Google pentru a identifica intrebarile pe care publicul tau tinta le pune. Acestea vor deveni heading-urile articolelor tale optimizate GEO.",
                  },
                  {
                    title: "Pasul 3: Restructureaza continutul in format Q&A",
                    desc: "Transforma articolele existente: fiecare sectiune ar trebui sa inceapa cu o intrebare clara (H2 sau H3) urmata de un raspuns concis in primele 2-3 propozitii, apoi detalii suplimentare. Aceasta structura e ideala pentru extractia AI.",
                  },
                  {
                    title: "Pasul 4: Adauga schema markup structurat",
                    desc: "Implementeaza FAQPage schema pentru sectiunile Q&A, Article schema cu author si datePublished, si HowTo schema unde e relevant. Testeaza cu Google Rich Results Test pentru a te asigura ca e implementat corect.",
                  },
                  {
                    title: "Pasul 5: Construieste cluster-uri de autoritate",
                    desc: "Grupeaza continutul pe teme si creeaza legaturi interne puternice. Un articol-pilon de 3000+ cuvinte pe tema principala, legat de 5-10 articole suport de 1500-2000 cuvinte pe sub-topicuri. Aceasta structura semnaleaza AI-ului expertiza ta.",
                  },
                  {
                    title: "Pasul 6: Monitorizeaza si optimizeaza continuu",
                    desc: "Foloseste tool-uri precum Semrush, Ahrefs sau platforme specializate GEO pentru a monitoriza cand si unde esti citat de AI. Actualizeaza continutul trimestrial cu date noi si optimizeaza sectiunile care nu performeaza.",
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
                Implementarea GEO nu e un proiect punctual &mdash; e un proces
                continuu. Algoritmii AI evolueaza constant, iar continutul tau
                trebuie sa tina pasul. Companiile care incep acum vor avea un
                avantaj competitiv major fata de cele care asteapta.
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
                Vrei sa apari in rezultatele AI?
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
                Echipa noastra de GEO te ajuta sa fii citat de ChatGPT, Google
                AI Overviews si Perplexity. Analizam continutul tau, il
                optimizam si monitorizam rezultatele.
              </p>
              <Link href="/geo-optimization/" className="btn-primary">
                Descopera serviciul GEO <ArrowRight size={16} />
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
                    Impactul AI Overviews asupra SEO: ce trebuie sa stii
                  </h3>
                  <Link
                    href="/blog/ai-overviews-impact-seo/"
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
                    SEO Local si Google Maps: ghid complet pentru afaceri locale
                  </h3>
                  <Link
                    href="/blog/seo-local-google-maps/"
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
