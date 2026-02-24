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
              13 Februarie 2026 &middot; 7 min citire
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
              Ce este un Growth Sprint si cum{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #3b82f6 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                accelereaza cresterea?
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
              6 saptamani. Un singur obiectiv. Audit, strategie, executie,
              optimizare si rezultate &mdash; comprimate intr-un sprint intensiv
              care inlocuieste lunile de asteptare.
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
                Modelele traditionale de agentie functioneaza pe retainer-e
                lunare. Platesti lunar, primesti deliverables, astepti rezultate.
                Problema? Lipsa de urgenta. Strategia se intinde pe luni
                intregi, executia e fragmentata, iar primele rezultate vin
                abia dupa 3-6 luni &mdash; daca vin.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Un <strong style={{ color: "#fff" }}>Growth Sprint</strong> este
                opusul acestui model. Este un angajament intensiv de 6
                saptamani, structurat in faze clare: audit &rarr; strategie
                &rarr; executie &rarr; optimizare &rarr; rezultate. Fiecare
                saptamana are obiective concrete si livrabile masurabile.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Este conceput pentru companiile care nu-si permit sa astepte.
                Cele care au nevoie de crestere rapida, masurabile, cu un buget
                fix si un calendar strans. In loc sa pierzi 3 luni pe
                &bdquo;onboarding&rdquo;, intr-un Growth Sprint esti deja in
                executie din saptamana a treia.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Problema cu modelul traditional */}
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
                Problema cu modelul traditional de agentie
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Retainer-ele lunare au fost standardul in industrie de peste un
                deceniu. Dar pentru multe business-uri &mdash; in special cele
                aflate la inceput sau in faze de scalare &mdash; acest model
                vine cu probleme structurale:
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
                    title: "Lipsa de urgenta",
                    desc: "Cand contractul e pe 6-12 luni, nu exista presiune pentru rezultate rapide. Deliverables se intind, sedintele se inmultesc, dar impactul real intarzie.",
                  },
                  {
                    title: "Strategia e separata de executie",
                    desc: "O echipa face strategia, alta o executa. Informatia se pierde intre departamente, iar viziunea initiala se dilueaza pe parcurs.",
                  },
                  {
                    title: "Onboarding de 2-3 luni",
                    desc: "Inainte sa inceapa munca reala, agentiile traditionale au nevoie de luni intregi de \"cunoastere\", audituri prelungite si sedinte de aliniere. Timp in care platesti fara sa vezi rezultate.",
                  },
                  {
                    title: "Responsabilitate difuza",
                    desc: "KPI-urile sunt vagi, rapoartele arata metrici de vanitate (impresii, reach), iar cand intrebi \"ce rezultate concrete avem?\", raspunsul e intotdeauna \"mai avem nevoie de timp\".",
                  },
                  {
                    title: "Risc financiar crescut",
                    desc: "Te angajezi pe 6-12 luni cu un fee lunar recurent, fara garantia ca modelul e potrivit pentru tine. Daca nu merge, ai pierdut luni de buget.",
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

          {/* Section: Cum functioneaza un Growth Sprint */}
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
                Cum functioneaza un Growth Sprint
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Un Growth Sprint Nesco Digital urmeaza un timeline fix de 6
                saptamani, cu faze clar definite. Fiecare saptamana are
                obiective specifice si livrabile concrete:
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
                    week: "Saptamana 1",
                    title: "Audit profund",
                    desc: "Analiza completa a analytics-ului existent, a competitorilor, a pietei si a performantei curente. Identificam gaps, oportunitati si quick wins. La final: raport de audit cu concluzii actionabile.",
                  },
                  {
                    week: "Saptamana 2",
                    title: "Strategie si roadmap",
                    desc: "Pe baza auditului, construim strategia: canale prioritare, alocare de buget, KPI target, directie creativa si calendar de executie. Totul documentat intr-un roadmap clar.",
                  },
                  {
                    week: "Saptamana 3-4",
                    title: "Executie rapida",
                    desc: "Campaniile devin live. Landing pages optimizate, tracking complet configurat, creative-uri testate, audiante setate. In doua saptamani avem deja date reale de performanta.",
                  },
                  {
                    week: "Saptamana 5",
                    title: "Optimizare",
                    desc: "A/B testing pe creative-uri si landing pages, realocare de buget pe ce functioneaza, iterare pe mesaje si audiante. Fiecare decizie e bazata pe date, nu pe presupuneri.",
                  },
                  {
                    week: "Saptamana 6",
                    title: "Review rezultate + plan de scalare",
                    desc: "Analizam ce a functionat, ce nu, si construim planul de scalare: pe ce canale sa dublezi investitia, ce sa opresti, ce sa testezi in continuare. Primesti un playbook complet.",
                  },
                ].map((item) => (
                  <div
                    key={item.week}
                    style={{
                      padding: "24px",
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "16px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#3b82f6",
                      }}
                    >
                      {item.week}
                    </span>
                    <h3
                      className="font-bold text-white"
                      style={{
                        fontSize: "1rem",
                        marginBottom: "8px",
                        marginTop: "8px",
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

          {/* Section: Growth Sprint vs Retainer traditional */}
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
                Growth Sprint vs. Retainer traditional
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Ca sa intelegi mai bine diferentele, am pus cele doua modele
                fata in fata:
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
                      {["Aspect", "Growth Sprint", "Retainer Traditional"].map(
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
                      ["Durata", "6 saptamani focusate", "Continuu (3-12 luni)"],
                      ["Viteza pana la rezultate", "2-3 saptamani", "2-3 luni"],
                      ["Angajament", "Proiect fix", "Recurent lunar"],
                      ["Risc", "Scazut (scop definit)", "Ridicat (angajament lung)"],
                      ["Focus", "1-2 canale prioritare", "Toate canalele simultan"],
                      ["Responsabilitate", "KPI clari din ziua 1", "Deliverables adesea vagi"],
                      ["Investitie", "Buget fix", "Fee-uri lunare variabile"],
                      ["Ideal pentru", "Testare, pivotare, scalare", "Branduri stabile, mature"],
                    ].map(([aspect, sprint, retainer], i) => (
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
                          {aspect}
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
                          {sprint}
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
                          {retainer}
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
                Growth Sprint-ul nu inlocuieste neaparat retainer-ul pe termen
                lung. Dar e modul ideal de a{" "}
                <strong style={{ color: "#fff" }}>valida rapid</strong> ce
                functioneaza, inainte de a te angaja pe luni intregi.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Pentru cine e potrivit */}
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
                Pentru cine e potrivit un Growth Sprint
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Growth Sprint-ul nu e pentru toata lumea. Dar daca te regasesti
                in cel putin doua din situatiile de mai jos, e probabil modelul
                potrivit pentru tine:
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
                  "Lansezi un produs sau serviciu nou si ai nevoie de tractiune rapida",
                  "Schimbi agentia curenta si vrei rezultate imediate, nu inca 3 luni de onboarding",
                  "Esti un startup care are nevoie de validare rapida pe piata",
                  "Ai un magazin online si intri pe o piata noua sau un segment nou",
                  "Vrei sa testezi ROI-ul reclamelor platite inainte de a investi un buget mare",
                  "Ai un sezon de varf care se apropie si trebuie sa fii pregatit acum",
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
                    <span style={{ color: "#56db84", flexShrink: 0 }}>
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
                Daca, in schimb, ai un brand matur cu procese de marketing
                stabilite si ai nevoie de mentenanta continua pe 5+ canale,
                un retainer traditional poate fi mai potrivit. Growth Sprint-ul
                e pentru cei care au nevoie de{" "}
                <strong style={{ color: "#fff" }}>viteza si claritate</strong>,
                nu de continuitate pe pilot automat.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Rezultate tipice */}
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
                Rezultate tipice dupa 6 saptamani
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Fiecare business e diferit, dar la finalul unui Growth Sprint
                clientii nostri au de obicei:
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
                    gap: "14px",
                  }}
                >
                  {[
                    "Date clare despre ce canale functioneaza si ce nu — fara presupuneri",
                    "Primele conversii si lead-uri din campaniile platite, cu cost-per-lead documentat",
                    "Landing pages optimizate cu date din A/B testing real",
                    "Strategie documentata de scalare: ce sa dublezi, ce sa opresti, ce sa testezi mai departe",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        gap: "12px",
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.7,
                      }}
                    >
                      <span style={{ color: "#56db84", flexShrink: 0 }}>
                        &#10003;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Scopul nu e doar sa obtii rezultate in 6 saptamani, ci sa ai
                un{" "}
                <strong style={{ color: "#fff" }}>playbook testat</strong>{" "}
                pe care sa-l folosesti in lunile urmatoare &mdash; fie ca
                continui cu noi, fie ca internalizezi executia.
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
                Incepe un Growth Sprint
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
                Afla cum functioneaza modelul Growth Sprint, ce include si cum
                poti comprima luni de crestere in doar 6 saptamani focusate.
              </p>
              <Link href="/growth-sprint-educatie/" className="btn-primary">
                Descopera Growth Sprint <ArrowRight size={16} />
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
                    Strategie de marketing digital pas cu pas (Ghid 2026)
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
                    Cum sa alegi agentia de marketing potrivita: Checklist 10
                    pasi
                  </h3>
                  <Link
                    href="/blog/cum-alegi-agentie-marketing/"
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
