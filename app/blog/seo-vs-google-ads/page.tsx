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
              15 Februarie 2026 &middot; 9 min citire
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
              SEO vs. Google Ads:{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #14b8a6 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Ce Alegi Cand Ai Buget Limitat?
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
              Trafic organic sau platit? Analizam costurile, timeline-ul si
              ROI-ul fiecarei strategii ca sa iei decizia corecta pentru
              afacerea ta.
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
                &bdquo;Avem 5.000 RON pe luna pentru marketing online. Bagam in
                SEO sau in Google Ads?&rdquo; &mdash; e una dintre cele mai
                frecvente intrebari pe care le primim. Si raspunsul corect nu e
                niciodata simplu, pentru ca depinde de cat de repede ai nevoie
                de rezultate, cat de competitiva e nisa ta si ce obiective ai pe
                termen lung.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                In acest articol punem fata in fata cele doua strategii cu date
                reale: costuri, timeline pana la rezultate, ROI pe 6 si 12 luni
                si scenariul ideal in care le combini pe amandoua.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Ce este SEO */}
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
                Ce este SEO?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                SEO (Search Engine Optimization) inseamna optimizarea site-ului
                tau pentru a aparea cat mai sus in rezultatele organice ale
                Google. Nu platesti per click &mdash; in schimb, investesti in
                continut de calitate, optimizare tehnica si autoritate (link-uri
                de pe alte site-uri catre al tau).
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Avantajul major al SEO este <strong style={{ color: "#fff" }}>cresterea compusa</strong>:
                un articol bine optimizat poate genera trafic luni sau ani de
                zile dupa publicare, fara costuri suplimentare. E ca o investitie
                &mdash; randamentul creste in timp.
              </p>
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
                  style={{ fontSize: "1rem", marginBottom: "12px" }}
                >
                  Avantajele SEO:
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
                    "Trafic gratuit pe termen lung (nu platesti per click)",
                    "Crestere compusa — rezultatele se acumuleaza in timp",
                    "Credibilitate mai mare (utilizatorii au incredere in rezultatele organice)",
                    "Cost per achizitie scade progresiv pe masura ce autoritatea creste",
                    "Functioneaza 24/7 fara buget zilnic activ",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        gap: "10px",
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.6,
                      }}
                    >
                      <span style={{ color: "#14b8a6", flexShrink: 0 }}>+</span>
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
                  className="font-bold text-white"
                  style={{ fontSize: "1rem", marginBottom: "12px" }}
                >
                  Dezavantajele SEO:
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
                    "Rezultate vizibile dupa 3-6 luni (nu e instant)",
                    "Necesita investitie continua in continut si optimizare tehnica",
                    "Algoritmul Google se schimba — pozitiile nu sunt garantate permanent",
                    "Competitie ridicata pe cuvinte-cheie comerciale",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        gap: "10px",
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.6,
                      }}
                    >
                      <span style={{ color: "#ef4444", flexShrink: 0 }}>&ndash;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInSection>

          {/* Section: Ce este Google Ads */}
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
                Ce este Google Ads?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Google Ads iti permite sa apari deasupra rezultatelor organice
                prin plata per click (PPC). Setezi un buget, alegi cuvintele
                cheie si platesti de fiecare data cand cineva da click pe
                reclama ta. Rezultatele sunt <strong style={{ color: "#fff" }}>imediate</strong> &mdash;
                poti genera trafic calificat in prima zi.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Dar exista un catch important: in momentul in care opresti
                bugetul, traficul dispare complet. Nu construiesti un activ
                permanent &mdash; inchiriezi vizibilitate.
              </p>
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
                  style={{ fontSize: "1rem", marginBottom: "12px" }}
                >
                  Avantajele Google Ads:
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
                    "Rezultate imediate — trafic din prima zi",
                    "Control total pe buget (platesti exact cat vrei)",
                    "Targetare precisa pe cuvinte-cheie cu intentie de cumparare",
                    "Usor de masurat ROI-ul (cost per conversie clar)",
                    "Scalabilitate rapida — maresti bugetul, creste traficul",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        gap: "10px",
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.6,
                      }}
                    >
                      <span style={{ color: "#14b8a6", flexShrink: 0 }}>+</span>
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
                  className="font-bold text-white"
                  style={{ fontSize: "1rem", marginBottom: "12px" }}
                >
                  Dezavantajele Google Ads:
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
                    "Opresti bugetul = zero trafic (nu ramane nimic)",
                    "CPC-ul creste in nise competitive (poate deveni scump)",
                    "Click fraud — o parte din buget se pierde pe click-uri invalide",
                    "Necesita optimizare continua si expertiza tehnica",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        gap: "10px",
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.6,
                      }}
                    >
                      <span style={{ color: "#ef4444", flexShrink: 0 }}>&ndash;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInSection>

          {/* Timeline Comparison Table */}
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
                Timeline: Ce primesti luna de luna
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Hai sa comparam ce livreaza fiecare strategie pe un orizont de
                12 luni, presupunand un buget de 5.000 RON/luna (management +
                buget de ads unde e cazul):
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
                      <th
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
                        Perioada
                      </th>
                      <th
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
                        SEO
                      </th>
                      <th
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
                        Google Ads
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "Luna 1",
                        "Audit tehnic, cercetare cuvinte-cheie, optimizare on-page. Trafic organic: ~0 vizite noi",
                        "Campanii active din ziua 1. Trafic imediat: 300-800 vizite/luna",
                      ],
                      [
                        "Luna 2-3",
                        "Continut publicat, primele indexari. Trafic organic: 100-300 vizite/luna",
                        "Optimizare campanii, testare. Trafic stabil: 500-1.200 vizite/luna",
                      ],
                      [
                        "Luna 4-6",
                        "Pozitii in crestere, autoritate in dezvoltare. Trafic organic: 500-1.500 vizite/luna",
                        "Campanii optimizate, CPA in scadere. Trafic: 800-2.000 vizite/luna",
                      ],
                      [
                        "Luna 7-9",
                        "Pozitii stabile pe cuvinte-cheie principale. Trafic organic: 1.500-4.000 vizite/luna",
                        "Trafic stabil, dar platoul atins. Trafic: 1.000-2.500 vizite/luna",
                      ],
                      [
                        "Luna 10-12",
                        "Crestere compusa. Trafic organic: 3.000-8.000+ vizite/luna",
                        "Acelasi nivel (buget constant = trafic constant). Trafic: 1.000-2.500 vizite/luna",
                      ],
                    ].map(([perioada, seo, ads], i) => (
                      <tr key={i}>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "#fff",
                            padding: "14px 18px",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                            whiteSpace: "nowrap",
                          }}
                        >
                          {perioada}
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
                          {ads}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "rgba(255,255,255,0.4)",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                }}
              >
                * Cifrele sunt estimative, bazate pe medii din proiectele noastre
                pentru business-uri din Romania cu competitie medie.
              </p>
            </div>
          </FadeInSection>

          {/* ROI Comparison Table */}
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
                ROI: Investitie vs. Randament
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Hai sa punem cifrele cap la cap. Presupunem un buget total de
                5.000 RON/luna si un produs/serviciu cu o valoare medie a
                conversiei de 500 RON:
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
                      <th
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
                        Metric
                      </th>
                      <th
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
                        SEO (12 luni)
                      </th>
                      <th
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
                        Google Ads (12 luni)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Investitie totala (12 luni)", "60.000 RON", "60.000 RON (din care ~40.000 buget ads)"],
                      ["Trafic total generat", "~25.000 - 40.000 vizite", "~12.000 - 24.000 vizite"],
                      ["Cost mediu per vizita", "1,5 - 2,4 RON", "2,5 - 5 RON"],
                      ["Conversii estimate (rata 2%)", "500 - 800", "240 - 480"],
                      ["Venit generat estimat", "250.000 - 400.000 RON", "120.000 - 240.000 RON"],
                      ["ROI estimat", "4x - 6.5x", "2x - 4x"],
                      ["Trafic dupa oprirea investitiei", "Continua luni/ani", "Zero — se opreste instant"],
                    ].map(([metric, seo, ads], i) => (
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
                          {metric}
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
                          {ads}
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
                Concluzia din cifre: SEO ofera un ROI superior pe termen lung,
                dar necesita <strong style={{ color: "#fff" }}>rabdare de 3-6 luni</strong> pana la
                rezultate vizibile. Google Ads livreaza instant dar la un cost
                per vizita mai mare si fara efect rezidual.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Cand sa alegi SEO */}
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
                Cand sa alegi SEO?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                SEO e alegerea potrivita cand:
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 20px 0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  "Ai un orizont de cel putin 6-12 luni si nu ai nevoie de rezultate saptamana viitoare",
                  "Vrei sa construiesti un activ digital permanent care genereaza trafic fara cost pe click",
                  "Competitorii tai investesc in Google Ads dar ignora SEO — oportunitate de a castiga teren organic",
                  "Ai un blog, servicii cu cautari informationale sau un e-commerce cu multe produse/categorii",
                  "Vrei sa reduci dependenta de bugetul de ads pe termen lung",
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
                    <span style={{ color: "#14b8a6", flexShrink: 0 }}>
                      &#10003;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInSection>

          {/* Section: Cand sa alegi Google Ads */}
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
                Cand sa alegi Google Ads?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Google Ads e alegerea potrivita cand:
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 20px 0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  "Ai nevoie de clienti acum — lansezi un produs, ai o promotie sau vrei sa testezi o piata noua",
                  "Vinzi un produs/serviciu cu intentie clara de cumparare (\"instalator Bucuresti\", \"inchiriere masini Cluj\")",
                  "Vrei sa testezi rapid ce cuvinte-cheie convertesc inainte de a investi in SEO pe termen lung",
                  "Ai marje mari pe produs si costul per click (3-15 RON in Romania) e sustenabil",
                  "Ai un eveniment sau o oferta cu termen limita si ai nevoie de vizibilitate imediata",
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
                    <span style={{ color: "#14b8a6", flexShrink: 0 }}>
                      &#10003;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInSection>

          {/* Section: Combinatia ideala */}
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
                Combinatia ideala: SEO + Google Ads
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                In practica, cele mai bune rezultate le obtin companiile care
                folosesc <strong style={{ color: "#fff" }}>ambele strategii
                simultan</strong>, dar cu alocare inteligenta a bugetului in
                functie de faza:
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
                    title: "Lunile 1-3: 70% Google Ads / 30% SEO",
                    desc: "Google Ads genereaza clienti imediat si venituri care sustin investitia. In paralel, SEO pune bazele: audit tehnic, cercetare cuvinte-cheie, primele pagini optimizate. Datele din Google Ads (ce cuvinte-cheie convertesc) informeaza direct strategia SEO.",
                  },
                  {
                    title: "Lunile 4-6: 50% Google Ads / 50% SEO",
                    desc: "SEO incepe sa livreze trafic organic. Google Ads continua sa genereze conversii dar bugetul poate fi optimizat. Continutul SEO se extinde pe baza datelor din Ads — stii deja ce cauta oamenii si ce converteste.",
                  },
                  {
                    title: "Lunile 7-12: 30% Google Ads / 70% SEO",
                    desc: "Traficul organic creste semnificativ. Google Ads se concentreaza pe cuvintele-cheie cu cea mai mare intentie de cumparare si pe remarketing. Costul per achizitie total scade pe masura ce SEO preia din trafic.",
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
                  marginBottom: "20px",
                }}
              >
                Aceasta strategie hibrida iti ofera ce e mai bun din ambele
                lumi: <strong style={{ color: "#fff" }}>rezultate imediate</strong> din
                Google Ads si <strong style={{ color: "#fff" }}>crestere
                sustinabila</strong> din SEO. Dupa 12 luni, costul per achizitie
                combinat e cu 40-60% mai mic decat daca ai fi folosit doar
                Google Ads.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Cheia e sa nu vezi SEO si Google Ads ca optiuni opuse, ci ca
                instrumente complementare. Google Ads iti cumpara timp pana
                cand SEO livreaza. SEO iti reduce dependenta de bugetul de ads
                pe termen lung. Impreuna, creeaza un sistem de achizitie clienti
                robust si eficient.
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
                Hai sa construim strategia potrivita
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
                Analizam piata ta, competitorii si bugetul disponibil, apoi
                cream un mix SEO + Ads personalizat care livreaza rezultate
                din luna 1 si creste exponential.
              </p>
              <Link href="/contact/" className="btn-primary">
                Programeaza o consultatie <ArrowRight size={16} />
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
                    Cat costa un specialist intern vs. o agentie de marketing
                    digital?
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
                      color: "#56db84",
                    }}
                  >
                    Paid Ads
                  </span>
                  <h3
                    className="font-bold text-white"
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.3,
                      margin: "10px 0",
                    }}
                  >
                    De ce nu-ti merg reclamele pe Meta? 7 greseli frecvente
                  </h3>
                  <Link
                    href="/blog/de-ce-nu-merg-reclamele-meta/"
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
