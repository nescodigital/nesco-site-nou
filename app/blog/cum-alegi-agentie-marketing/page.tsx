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
                "radial-gradient(circle, rgba(86,219,132,0.05) 0%, transparent 70%)",
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
                color: "#3b82f6",
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
              11 Februarie 2026 &middot; 9 min citire
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
              Cum sa alegi agentia de marketing potrivita:{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #3b82f6 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Checklist 10 pasi
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
              Alegerea gresita de agentie inseamna luni pierdute si mii de euro
              aruncati. Dupa sute de relatii agentie-client, acestia sunt cei
              10 pasi care conteaza cu adevarat.
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
                Piata de marketing digital din Romania a explodat in ultimii ani.
                Sunt sute de agentii, freelanceri si &bdquo;experti&rdquo; care
                promit rezultate. Problema? Majoritatea companiilor aleg pe baza
                unui pitch frumos sau a unui pret mic &mdash; si ajung sa piarda
                timp, bani si incredere in marketing.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Am vazut sute de relatii agentie-client in ultimii ani. Am vazut
                parteneriate care au transformat business-uri, dar si colaborari
                care au ars bugete fara niciun rezultat. Diferenta sta aproape
                intotdeauna in procesul de selectie. De aceea am creat acest
                checklist in 10 pasi &mdash; criteriile care conteaza cu
                adevarat cand alegi o agentie de marketing digital.
              </p>
            </div>
          </FadeInSection>

          {/* 10 Steps */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <h2
                className="font-bold text-white"
                style={{
                  fontSize: "1.625rem",
                  letterSpacing: "-0.02em",
                  marginBottom: "24px",
                }}
              >
                Cei 10 pasi pentru alegerea agentiei potrivite
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
                {/* Step 1 */}
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
                    <span style={{ color: "#3b82f6" }}>1.</span> Verifica
                    portofoliul real
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Nu te multumi cu screenshot-uri frumoase sau logo-uri de
                    clienti. Cere studii de caz concrete cu metrici reale: ROAS,
                    CPA, crestere de venituri, numar de lead-uri generate. O
                    agentie serioasa iti poate arata rezultate masurabile. Daca
                    nu pot impartasi cifre &mdash; e un semnal de alarma major.
                    Intreaba si cat timp au lucrat cu fiecare client si ce
                    provocari au intampinat.
                  </p>
                </div>

                {/* Step 2 */}
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
                    <span style={{ color: "#3b82f6" }}>2.</span> Cere referinte
                    de la clienti activi
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Nu fosti clienti &mdash; clienti activi. Suna-i. Intreaba
                    despre comunicare, transparenta si rezultate. Un client activ
                    iti va spune exact cum decurge colaborarea zi de zi: daca
                    agentia raspunde la timp, daca raporteaza corect si daca
                    se implica strategic sau doar executa mecanic. Daca agentia
                    refuza sa iti dea referinte, e un semn clar ca ceva nu e in
                    regula.
                  </p>
                </div>

                {/* Step 3 */}
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
                    <span style={{ color: "#3b82f6" }}>3.</span> Evalueaza
                    transparenta
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Iti impartasesc accesul la conturile de reclame? Esti tu
                    proprietarul datelor? Primesti rapoarte detaliate cu metrici
                    reale, nu doar vanity metrics? Nu lucra niciodata cu o
                    agentie care iti tine conturile de ads blocate. Datele tale
                    sunt ale tale &mdash; punct. O agentie transparenta iti va
                    da acces complet la Google Analytics, Google Ads, Meta
                    Business Manager si orice alta platforma folosita.
                  </p>
                </div>

                {/* Step 4 */}
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
                      marginBottom: "12px",
                    }}
                  >
                    <span style={{ color: "#3b82f6" }}>4.</span> Intelege
                    modelul de pricing
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      marginBottom: "16px",
                    }}
                  >
                    Fee fix, procent din bugetul de ads sau performance-based?
                    Fiecare model are avantaje si dezavantaje. Fii atent la
                    preturile &bdquo;prea mici&rdquo; &mdash; calitatea costa
                    bani. O agentie care cere 500 RON/luna pentru management de
                    campanii probabil nu va aloca suficient timp contului tau.
                  </p>
                  <div style={{ overflowX: "auto" }}>
                    <table
                      style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        minWidth: "480px",
                      }}
                    >
                      <thead>
                        <tr>
                          <th
                            style={{
                              background: "#111",
                              color: "#fff",
                              padding: "12px 16px",
                              borderBottom: "2px solid #3b82f6",
                              textAlign: "left",
                              fontSize: "0.8125rem",
                              fontWeight: 700,
                            }}
                          >
                            Model
                          </th>
                          <th
                            style={{
                              background: "#111",
                              color: "#fff",
                              padding: "12px 16px",
                              borderBottom: "2px solid #3b82f6",
                              textAlign: "left",
                              fontSize: "0.8125rem",
                              fontWeight: 700,
                            }}
                          >
                            Range Tipic
                          </th>
                          <th
                            style={{
                              background: "#111",
                              color: "#fff",
                              padding: "12px 16px",
                              borderBottom: "2px solid #3b82f6",
                              textAlign: "left",
                              fontSize: "0.8125rem",
                              fontWeight: 700,
                            }}
                          >
                            Ideal pentru
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          [
                            "Fee fix lunar",
                            "\u20AC1.500 - \u20AC5.000",
                            "Bugete predictibile",
                          ],
                          [
                            "% din bugetul de ads",
                            "10 - 20%",
                            "Bugete in crestere",
                          ],
                          [
                            "Performance-based",
                            "Variabil",
                            "Business-uri stabilite",
                          ],
                          [
                            "Hibrid (fix + %)",
                            "\u20AC1.000 + 10%",
                            "Business-uri in crestere",
                          ],
                        ].map(([model, range, bestFor], i) => (
                          <tr key={i}>
                            <td
                              style={{
                                background: "#0a0a0a",
                                color: "#fff",
                                padding: "12px 16px",
                                borderBottom:
                                  "1px solid rgba(255,255,255,0.06)",
                                fontSize: "0.8125rem",
                                fontWeight: 600,
                              }}
                            >
                              {model}
                            </td>
                            <td
                              style={{
                                background: "#0a0a0a",
                                color: "rgba(255,255,255,0.6)",
                                padding: "12px 16px",
                                borderBottom:
                                  "1px solid rgba(255,255,255,0.06)",
                                fontSize: "0.8125rem",
                              }}
                            >
                              {range}
                            </td>
                            <td
                              style={{
                                background: "#0a0a0a",
                                color: "rgba(255,255,255,0.6)",
                                padding: "12px 16px",
                                borderBottom:
                                  "1px solid rgba(255,255,255,0.06)",
                                fontSize: "0.8125rem",
                              }}
                            >
                              {bestFor}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Step 5 */}
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
                    <span style={{ color: "#3b82f6" }}>5.</span> Verifica
                    specializarea
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    O agentie generalista nu va egala un specialist. Daca ai
                    nevoie de Google Ads, cauta un Google Partner certificat.
                    Daca ai un magazin pe Shopify, cauta un Shopify Partner.
                    Intreaba ce canale acopera, pe care sunt cei mai puternici
                    si ce certificari au. O agentie buna stie sa-ti spuna sincer
                    si unde nu exceleaza.
                  </p>
                </div>

                {/* Step 6 */}
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
                    <span style={{ color: "#3b82f6" }}>6.</span> Evalueaza echipa
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Cine va lucra efectiv pe contul tau? Cunoaste echipa, nu
                    doar persoana de vanzari. Intreaba despre experienta lor
                    cu industria ta, cati clienti gestioneaza fiecare specialist
                    si cine e account manager-ul dedicat. O agentie care pune un
                    junior fara experienta pe contul tau nu va livra aceleasi
                    rezultate ca una care aloca seniori cu track record dovedit.
                  </p>
                </div>

                {/* Step 7 */}
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
                    <span style={{ color: "#3b82f6" }}>7.</span> Pune intrebari
                    despre strategie
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Inainte de a semna, o agentie buna ar trebui sa ofere o
                    strategie de nivel inalt sau un audit. Daca singura
                    intrebare pe care ti-o pun e &bdquo;Care e bugetul?&rdquo;
                    fara sa inteleaga business-ul, publicul si competitorii tai,
                    treci mai departe. O agentie profesionista va veni la prima
                    intalnire cu intrebari despre obiective, KPI-uri, public
                    tinta si va propune o abordare strategica clara.
                  </p>
                </div>

                {/* Step 8 */}
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
                    <span style={{ color: "#3b82f6" }}>8.</span> Verifica
                    contractul
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Atentie la perioadele de lock-in (maxim 3 luni initial),
                    termenii de reziliere, proprietatea intelectuala si clauzele
                    de non-competitie. Un contract corect iti permite sa iesi
                    cu un preaviz rezonabil, iti garanteaza proprietatea asupra
                    datelor si creative-urilor si nu te impiedica sa lucrezi cu
                    alte agentii pe servicii complementare.
                  </p>
                </div>

                {/* Step 9 */}
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
                      marginBottom: "12px",
                    }}
                  >
                    <span style={{ color: "#3b82f6" }}>9.</span> Red flags de
                    evitat
                  </h3>
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
                      "Rezultate garantate (\u201Cte aducem pe locul 1 in Google\u201D)",
                      "Lipsa rapoartelor sau rapoarte vagi fara metrici clare",
                      "Preturi foarte mici comparativ cu piata",
                      "Niciun studiu de caz sau portofoliu demonstrabil",
                      "Tactici agresive de vanzare si presiune sa semnezi rapid",
                      "Pachete identice pentru toate tipurile de business (one-size-fits-all)",
                      "Refuza sa iti dea acces la conturile de ads",
                    ].map((flag) => (
                      <li
                        key={flag}
                        style={{
                          display: "flex",
                          gap: "10px",
                          fontSize: "0.9375rem",
                          color: "rgba(255,255,255,0.45)",
                          lineHeight: 1.7,
                        }}
                      >
                        <span
                          style={{ color: "#ef4444", flexShrink: 0 }}
                        >
                          &#10005;
                        </span>
                        {flag}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Step 10 */}
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
                    <span style={{ color: "#3b82f6" }}>10.</span> Testeaza cu un
                    proiect mic
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Inainte de un retainer pe termen lung, incepe cu un Growth
                    Sprint sau un proiect mic. Vezi cum comunica, cum livreaza
                    si cum gestioneaza provocarile. In 4-6 saptamani vei avea o
                    imagine clara daca e un partener potrivit. Aceasta abordare
                    minimizeaza riscul si iti permite sa evaluezi calitatea
                    muncii inainte de un angajament financiar major.
                  </p>
                </div>
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
                Hai sa discutam despre obiectivele tale
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
                Vrei sa te asiguri ca alegi corect? Programeaza o discutie
                gratuita cu echipa noastra si afla cum putem ajuta business-ul
                tau sa creasca.
              </p>
              <Link href="/contact/" className="btn-primary">
                Contacteaza-ne <ArrowRight size={16} />
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
                    Cat Costa un Specialist Intern vs. o Agentie de Marketing
                    Digital?
                  </h3>
                  <Link
                    href="/blog/cost-specialist-intern-vs-agentie/"
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
                    De ce nu functioneaza marketingul digital al companiei tale?
                  </h3>
                  <Link
                    href="/blog/de-ce-nu-functioneaza-marketingul/"
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
