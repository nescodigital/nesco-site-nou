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
                background: "rgba(245,158,11,0.10)",
                color: "#f59e0b",
                border: "1px solid rgba(245,158,11,0.18)",
              }}
            >
              E-commerce
            </span>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "18px",
                marginTop: "16px",
              }}
            >
              9 Februarie 2026 &middot; 10 min citire
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
              Rata de conversie: Ce este, cum o calculezi,{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #f59e0b 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                cum o cresti
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
              Website-ul tau atrage trafic, dar vizitatorii chiar convertesc?
              Rata de conversie e cel mai important metric pentru eficienta
              marketingului. O imbunatatire de doar 1% poate insemna mii de euro
              in plus.
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
                Investesti in Google Ads, Meta Ads, SEO, email marketing
                &mdash; dar cati dintre vizitatori fac efectiv ceea ce vrei tu
                sa faca? Completeaza un formular, adauga in cos, cumpara? Daca
                nu masori rata de conversie, zbori pe orbita fara instrumente
                de bord.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                In acest ghid complet iti explicam ce este rata de conversie,
                cum o calculezi corect, care sunt benchmark-urile pe industrii
                si &mdash; cel mai important &mdash;{" "}
                <strong style={{ color: "#fff" }}>
                  12 tehnici testate de CRO
                </strong>{" "}
                cu care o poti imbunatati incepand de azi.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Ce este rata de conversie */}
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
                Ce este rata de conversie?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Rata de conversie (conversion rate) reprezinta procentul de
                vizitatori ai unui website care realizeaza o actiune dorita.
                Formula este simpla:
              </p>
              <div
                style={{
                  padding: "24px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                  marginBottom: "24px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "1.25rem",
                    color: "#f59e0b",
                    fontWeight: 700,
                    margin: 0,
                  }}
                >
                  Rata de conversie = (Numar conversii / Numar total vizitatori)
                  &times; 100
                </p>
              </div>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Exista doua tipuri principale de conversii:
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
                  "Macro-conversii: actiunile principale (achizitie, lead generat, abonament platit)",
                  "Micro-conversii: pasi intermediari (inscriere newsletter, adaugare in cos, descarcare resursa)",
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
                    <span style={{ color: "#f59e0b", flexShrink: 0 }}>
                      &#10003;
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
                <strong style={{ color: "#fff" }}>Exemplu:</strong> Daca
                magazinul tau online are 10.000 de vizitatori pe luna si 250
                dintre ei cumpara, rata de conversie este de{" "}
                <strong style={{ color: "#fff" }}>2,5%</strong>.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Benchmark-uri pe industrii */}
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
                Benchmark-uri pe industrii
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Rata de conversie &bdquo;buna&rdquo; depinde de industrie,
                model de business si tip de conversie. Iata mediile actuale:
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
                      {["Industrie", "Medie", "Buna", "Excelenta"].map(
                        (h) => (
                          <th
                            key={h}
                            style={{
                              background: "#111",
                              color: "#fff",
                              padding: "14px 18px",
                              borderBottom: "2px solid #f59e0b",
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
                      ["E-commerce (general)", "2,5 – 3,0%", "3,5%+", "5%+"],
                      ["Fashion / imbracaminte", "1,5 – 2,5%", "3%+", "4,5%+"],
                      ["Electronice", "1,0 – 2,0%", "2,5%+", "4%+"],
                      ["Sanatate / beauty", "3,0 – 4,0%", "5%+", "7%+"],
                      ["B2B SaaS (trial)", "3,0 – 5,0%", "7%+", "10%+"],
                      ["Lead generation", "2,5 – 5,0%", "8%+", "12%+"],
                      ["Food / grocery", "4,0 – 6,0%", "8%+", "10%+"],
                    ].map(([industrie, medie, buna, excelenta], i) => (
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
                          {industrie}
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
                          {medie}
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
                          {buna}
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
                          {excelenta}
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
                Daca esti sub media industriei tale, ai un potential urias de
                crestere. Daca esti la nivel &bdquo;bun&rdquo;, optimizarile
                incrementale pot face diferenta intre profit si pierdere.
              </p>
            </div>
          </FadeInSection>

          {/* Section: 12 tehnici CRO testate */}
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
                12 tehnici CRO testate
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Aceste tehnici sunt validate pe sute de proiecte si studii de
                caz. Implementeaza-le pe rand si masoara impactul fiecareia:
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
                    title: "1. Optimizarea vitezei de incarcare",
                    desc: "Fiecare secunda de intarziere reduce conversiile cu ~7%. Comprima imaginile, foloseste CDN, minimizeaza CSS/JS si tinteste un LCP sub 2,5 secunde.",
                  },
                  {
                    title: "2. Simplifica navigatia",
                    desc: "Paradoxul alegerii: cu cat oferi mai multe optiuni, cu atat vizitatorul decide mai greu. Pastreaza meniul curat, cu maximum 5-7 categorii principale.",
                  },
                  {
                    title: "3. Social proof (dovada sociala)",
                    desc: "Review-uri, testimoniale, badge-uri de incredere, numarul de clienti serviti. 92% dintre consumatori citesc recenziile inainte de a cumpara.",
                  },
                  {
                    title: "4. CTA-uri clare si vizibile",
                    desc: "O singura actiune principala pe pagina. Butonul trebuie sa fie vizibil, cu text orientat pe beneficiu (nu doar 'Trimite', ci 'Primeste oferta gratuita').",
                  },
                  {
                    title: "5. Design mobile-first",
                    desc: "Peste 60% din trafic vine de pe mobil. Daca experienta mobile e slaba, pierzi majoritatea vizitatorilor inainte sa ajunga la checkout.",
                  },
                  {
                    title: "6. Reduce campurile din formulare",
                    desc: "Fiecare camp eliminat creste rata de completare cu 5-10%. Cere doar informatiile strict necesare; restul le poti obtine ulterior.",
                  },
                  {
                    title: "7. Adauga urgenta",
                    desc: "Stoc limitat, countdown timer, oferta valabila 24h. Urgenta reala (nu falsa) declanseaza actiunea imediata si reduce amanarea.",
                  },
                  {
                    title: "8. Prag de transport gratuit",
                    desc: "Afiseaza cat mai lipseste pana la transport gratuit. Valoarea medie a cosului creste cu 15-30% cand pragul e setat strategic.",
                  },
                  {
                    title: "9. Optiunea de guest checkout",
                    desc: "28% din clienti abandoneaza cosul daca sunt obligati sa-si creeze cont. Ofera checkout ca vizitator si propune crearea contului dupa comanda.",
                  },
                  {
                    title: "10. Imagini de produs de calitate",
                    desc: "Vizualizari 360, zoom, imagini lifestyle. Clientii nu pot atinge produsul — imaginile sunt singura lor referinta. Investitia se recupereaza rapid.",
                  },
                  {
                    title: "11. Live chat / chatbot",
                    desc: "Raspunde la obiectii in timp real, chiar in momentul deciziei. Un chatbot bine configurat poate creste conversiile cu 10-20%.",
                  },
                  {
                    title: "12. A/B testeaza totul",
                    desc: "Headline-uri, CTA-uri, layout-uri, culori, imagini. Nu presupune — testeaza. Deciziile bazate pe date bat intotdeauna intuitia.",
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

          {/* Section: Cum faci A/B testing */}
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
                Cum faci A/B testing corect
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                A/B testing-ul este motorul CRO. Fara el, optimizarile sunt
                ghiceli. Iata procesul in 4 pasi:
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
                  "Alege un singur element de testat (headline, CTA, imagine, layout) — niciodata mai multe simultan",
                  "Foloseste un tool dedicat: VWO, Optimizely sau Google Analytics 4 cu functia de experimente",
                  "Calculeaza sample size-ul necesar inainte de a incepe (minimum 1.000 de vizitatori per varianta)",
                  "Asteapta pana la semnificanta statistica de 95%+ inainte de a lua o decizie. Nu opri testul prematur",
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
                    <span style={{ color: "#f59e0b", flexShrink: 0 }}>
                      &#10003;
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
                Companiile care testeaza sistematic au rate de conversie de{" "}
                <strong style={{ color: "#fff" }}>2-3x</strong> mai mari decat
                cele care se bazeaza pe intuiie. CRO nu e un proiect unic
                &mdash; e un proces continuu.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Formula ROI pentru CRO */}
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
                Formula ROI pentru CRO
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Sa vedem impactul concret al unei imbunatatiri de doar 1% in
                rata de conversie:
              </p>
              <div
                style={{
                  padding: "24px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                  marginBottom: "24px",
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
                    ["Vizitatori / luna", "10.000"],
                    ["Valoare medie comanda", "50 \u20AC"],
                    ["Rata de conversie actuala (2%)", "200 comenzi = 10.000 \u20AC/luna"],
                    ["Rata de conversie imbunatatita (3%)", "300 comenzi = 15.000 \u20AC/luna"],
                  ].map(([label, value]) => (
                    <li
                      key={label}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.5)",
                        paddingBottom: "10px",
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                      }}
                    >
                      <span>{label}</span>
                      <span style={{ color: "#fff", fontWeight: 600 }}>
                        {value}
                      </span>
                    </li>
                  ))}
                  <li
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#f59e0b",
                      paddingTop: "6px",
                    }}
                  >
                    <span>Venit suplimentar lunar</span>
                    <span>+5.000 &euro; / luna</span>
                  </li>
                </ul>
              </div>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                <strong style={{ color: "#fff" }}>
                  5.000 &euro; in plus pe luna din ACELASI trafic.
                </strong>{" "}
                Asta inseamna 60.000 &euro; pe an &mdash; fara sa cresti
                bugetul de reclame cu un singur cent. CRO este cel mai
                profitabil canal de &bdquo;achizitie&rdquo; care exista.
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
                Creste-ti rata de conversie
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
                Echipa noastra de CRO analizeaza site-ul tau, identifica
                punctele de pierdere si implementeaza optimizari cu impact
                masurabil. Mai multe conversii, fara buget suplimentar.
              </p>
              <Link href="/solutii-cro-ro/" className="btn-primary">
                Descopera solutiile CRO <ArrowRight size={16} />
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
                    De ce iti abandoneaza clientii cosul (si cum repari)
                  </h3>
                  <Link
                    href="/blog/abandon-cos-cumparaturi/"
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
                    Cum cresti vanzarile in magazinul online
                  </h3>
                  <Link
                    href="/blog/creste-vanzari-magazin-online/"
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
