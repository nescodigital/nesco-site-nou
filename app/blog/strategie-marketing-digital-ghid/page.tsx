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
                "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)",
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
              6 Februarie 2026 &middot; 14 min citire
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
              Strategie de Marketing Digital Pas cu Pas{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #3b82f6 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                (Ghid 2026)
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
              Framework-ul complet in 7 pasi pentru a construi o strategie de
              marketing digital de la zero &mdash; de la audit la executie si
              raportare.
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
                Majoritatea business-urilor sar direct la tactici. Pornesc
                reclame pe Meta fara sa-si cunoasca audienta, creeaza continut
                fara un plan si se intreaba de ce nimic nu functioneaza. Lipsa
                unei strategii coerente e motivul numarul unu pentru care
                bugetul de marketing se evapora fara rezultate masurabile.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                In acest ghid iti dam framework-ul exact pe care il folosim
                la Nesco Digital cand construim strategii de marketing digital
                pentru clientii nostri. Sunt 7 pasi clari, in ordine logica,
                pe care ii poti aplica indiferent de industrie, buget sau
                dimensiunea echipei.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Nu e teorie din manuale &mdash; e procesul real, testat pe
                zeci de proiecte, de la startup-uri cu bugete de 2.000 EUR/luna
                pana la companii cu bugete de peste 50.000 EUR/luna.
              </p>
            </div>
          </FadeInSection>

          {/* Pasul 1: Audit */}
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
                Pasul 1: Audit &mdash; Unde esti acum?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Inainte sa decizi unde vrei sa ajungi, trebuie sa intelegi
                exact unde te afli. Un audit complet de marketing digital
                analizeaza tot ce tine de prezenta ta online &mdash; de la
                website si analytics pana la campaniile existente si peisajul
                competitiv.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Analizeaza: traficul actual (Google Analytics), performanta
                campaniilor existente (ROAS, CPA, CTR), pozitionarea SEO
                (cuvinte cheie, backlinks, Core Web Vitals), prezenta pe social
                media si comportamentul competitorilor directi. Fa o analiza
                SWOT &mdash; puncte tari, puncte slabe, oportunitati si
                amenintari.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Rezultatul acestui pas e o imagine clara: ce functioneaza, ce
                nu functioneaza si unde sunt gap-urile. Fara aceasta baza de
                date, orice decizie strategica e doar o ghiceala.
              </p>
            </div>
          </FadeInSection>

          {/* Pasul 2: Obiective SMART */}
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
                Pasul 2: Obiective SMART
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                &bdquo;Vreau mai multi clienti&rdquo; nu e un obiectiv &mdash;
                e o dorinta. Obiectivele care functioneaza sunt Specifice,
                Masurabile, Atingibile, Relevante si incadrate in Timp (SMART).
                Fiecare canal, fiecare campanie trebuie sa aiba un target clar
                legat de un numar concret.
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
                <h3
                  className="font-bold text-white"
                  style={{
                    fontSize: "1rem",
                    marginBottom: "16px",
                  }}
                >
                  Exemple de obiective SMART:
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
                    "Cresterea traficului organic cu 50% in 6 luni (de la 8.000 la 12.000 sesiuni/luna)",
                    "Generarea a 100 de lead-uri calificate/luna prin Google Ads pana in luna a 3-a",
                    "Atingerea unui ROAS de 5:1 pe Google Shopping in 90 de zile",
                    "Reducerea CPA pe Meta Ads de la 45 RON la 25 RON in urmatoarele 60 de zile",
                  ].map((goal) => (
                    <li
                      key={goal}
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
                      <span style={{ color: "#3b82f6", flexShrink: 0 }}>
                        &#9679;
                      </span>
                      {goal}
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
                Fiecare obiectiv trebuie legat de un KPI masurabil. Daca nu
                poti masura progresul saptamanal, obiectivul nu e suficient de
                specific.
              </p>
            </div>
          </FadeInSection>

          {/* Pasul 3: Buyer Personas */}
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
                Pasul 3: Buyer Personas
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Cui ii vinzi? Nu &bdquo;tuturor&rdquo; &mdash; ci 2-3 profiluri
                de client ideal, definite in detaliu. Fara buyer personas
                clare, mesajul tau de marketing va fi generic si nu va rezona
                cu nimeni in mod specific.
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
                    title: "Date demografice",
                    desc: "Varsta, locatie, venit, pozitie in companie, dimensiunea companiei. De exemplu: barbat, 35-45 ani, antreprenor cu afacere de 500k-2M EUR/an, Bucuresti sau Cluj.",
                  },
                  {
                    title: "Dureri si frustrari (pain points)",
                    desc: "Ce probleme incearca sa rezolve? Nu are lead-uri suficiente? Costul de achizitie e prea mare? Nu stie ce canale functioneaza? Identifica 3-5 dureri concrete.",
                  },
                  {
                    title: "Triggere de cumparare",
                    desc: "Ce il determina sa caute o solutie acum? Un sezon important care se apropie, un competitor care creste, o campanie care nu mai merge, presiune de la investitori.",
                  },
                  {
                    title: "Canale preferate",
                    desc: "Unde isi petrece timpul online? LinkedIn pentru B2B, Instagram si TikTok pentru consumatori tineri, Google Search cand cauta activ solutii, YouTube pentru research.",
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
                Defineste minim 2 personas diferite. Intreaga ta strategie de
                canale, mesaje si buget se va construi in jurul acestor profiluri.
              </p>
            </div>
          </FadeInSection>

          {/* Pasul 4: Alegerea canalelor */}
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
                Pasul 4: Alegerea canalelor
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Nu trebuie sa fii pe toate canalele &mdash; trebuie sa fii pe
                canalele potrivite. Alegerea depinde de buyer personas, buget
                si obiective. Iata o comparatie rapida:
              </p>
              <div style={{ overflowX: "auto", marginBottom: "24px" }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    minWidth: "640px",
                  }}
                >
                  <thead>
                    <tr>
                      {["Canal", "Ideal pentru", "Buget", "Timp pana la rezultate"].map(
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
                      ["Google Search Ads", "Cumparatori cu intentie mare", "Mediu-Mare", "1-2 saptamani"],
                      ["Meta Ads", "Awareness, retargeting", "Mediu", "2-4 saptamani"],
                      ["SEO", "Trafic organic pe termen lung", "Mic-Mediu", "3-6 luni"],
                      ["Email Marketing", "Retentie, nurture", "Mic", "2-4 saptamani"],
                      ["TikTok Ads", "Gen Z / Millennials", "Mediu", "2-4 saptamani"],
                      ["LinkedIn Ads", "B2B lead generation", "Mare", "2-4 saptamani"],
                      ["Content Marketing", "Autoritate, SEO", "Mic-Mediu", "3-12 luni"],
                    ].map(([canal, ideal, buget, timp], i) => (
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
                          {canal}
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
                          {ideal}
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
                          {buget}
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
                          {timp}
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
                Regula de baza: incepe cu 2-3 canale pe care le poti executa
                bine. E mai bine sa fii excelent pe 2 canale decat mediocru pe 7.
                Adauga canale noi doar cand le-ai optimizat pe cele existente.
              </p>
            </div>
          </FadeInSection>

          {/* Pasul 5: Alocare buget */}
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
                Pasul 5: Alocare buget &mdash; Regula 70-20-10
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Cum imparti bugetul de marketing intre canale? Folosim regula
                70-20-10: <strong style={{ color: "#fff" }}>70%</strong> pe
                canalele dovedite care aduc rezultate,{" "}
                <strong style={{ color: "#fff" }}>20%</strong> pe scalarea
                canalelor promittatoare si{" "}
                <strong style={{ color: "#fff" }}>10%</strong> pe experimente
                cu canale sau tactici noi.
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
                <h3
                  className="font-bold text-white"
                  style={{
                    fontSize: "1rem",
                    marginBottom: "16px",
                  }}
                >
                  Exemplu de alocare pentru buget de 5.000 EUR/luna:
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
                    ["Google Ads (70%)", "3.500 EUR"],
                    ["Meta Ads - scaling (20%)", "1.000 EUR"],
                    ["TikTok Ads - experiment (10%)", "500 EUR"],
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
                      <span
                        style={{ color: "#fff", fontWeight: 600 }}
                      >
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
                      color: "#3b82f6",
                      paddingTop: "6px",
                    }}
                  >
                    <span>Total lunar</span>
                    <span>5.000 EUR</span>
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
                Pentru business-uri mai mari (buget 15.000+ EUR/luna), proportia
                de experimente poate creste la 15-20%, deoarece ai o baza solida
                de venituri din canalele principale care iti permite sa testezi
                mai agresiv.
              </p>
            </div>
          </FadeInSection>

          {/* Pasul 6: Calendar de executie */}
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
                Pasul 6: Calendar de executie
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                O strategie fara un calendar de executie e doar o prezentare
                frumoasa in PowerPoint. Iata un plan lunar realist pentru
                primele 6 luni:
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
                    title: "Luna 1: Setup si lansare",
                    desc: "Configurare tracking (GA4, GTM, conversii), creare conturi publicitare, setup campanii initiale, audit tehnic website, definire UTM-uri si dashboard de raportare.",
                  },
                  {
                    title: "Luna 2-3: Optimizare",
                    desc: "Analiza primelor date, A/B testing pe ad-uri si landing pages, ajustare audiente, optimizare bidding, primele iteratii pe creative-uri bazate pe date reale.",
                  },
                  {
                    title: "Luna 4-6: Scalare",
                    desc: "Cresterea bugetului pe canalele care performeaza, oprirea celor care nu aduc rezultate, testarea canalelor noi din bucket-ul de 10%, extinderea pe audiente lookalike.",
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
                Important: luna 1 e intotdeauna cea mai lenta in termeni de
                rezultate. Nu te panica &mdash; e luna in care construiesti
                fundatia. Rezultatele reale incep sa apara din luna 2-3, iar
                scalarea semnificativa se face din luna 4.
              </p>
            </div>
          </FadeInSection>

          {/* Pasul 7: KPI si raportare */}
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
                Pasul 7: KPI si raportare
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Fara masurare, nu exista optimizare. Fiecare canal are
                KPI-urile lui specifice, iar ritmul de raportare trebuie sa
                fie constant si structurat.
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
                <h3
                  className="font-bold text-white"
                  style={{
                    fontSize: "1rem",
                    marginBottom: "16px",
                  }}
                >
                  KPI-uri esentiale per canal:
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
                    ["Google Ads", "ROAS, CPA, CTR, Quality Score"],
                    ["Meta Ads", "CPM, CPC, CPA, ROAS, Frequency"],
                    ["SEO", "Trafic organic, pozitii cuvinte cheie, backlinks"],
                    ["Email", "Open rate, CTR, conversion rate, unsubscribe rate"],
                    ["Overall", "CAC (Cost Achizitie Client), LTV, MQL, SQL"],
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
                      <span style={{ color: "#fff", fontWeight: 600 }}>
                        {label}
                      </span>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Ritmul de raportare recomandat:{" "}
                <strong style={{ color: "#fff" }}>saptamanal</strong> &mdash;
                verificare rapida a spend-ului si performantei,{" "}
                <strong style={{ color: "#fff" }}>lunar</strong> &mdash;
                analiza detaliata cu decizii de optimizare,{" "}
                <strong style={{ color: "#fff" }}>trimestrial</strong> &mdash;
                revizuire strategica si ajustarea obiectivelor.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Cel mai mare pericol e sa colectezi date fara sa actionezi pe
                ele. Fiecare raport trebuie sa se incheie cu 2-3 actiuni
                concrete care vor fi implementate in saptamana urmatoare.
                Datele fara actiune sunt doar numere pe un ecran.
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
                Construieste-ti strategia
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
                Nu ai timp sau echipa sa construiesti singur o strategie
                completa? Echipa Nesco Digital iti poate crea un plan de
                marketing digital personalizat, cu obiective clare, canale
                selectate si calendar de executie.
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
                    Ce este un Growth Sprint si de ce ai nevoie de unul?
                  </h3>
                  <Link
                    href="/blog/ce-este-growth-sprint/"
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
                    De ce nu functioneaza marketingul digital pentru tine?
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
