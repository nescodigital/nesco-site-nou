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
                background: "rgba(86,219,132,0.10)",
                color: "#56db84",
                border: "1px solid rgba(86,219,132,0.18)",
              }}
            >
              Paid Ads
            </span>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "18px",
                marginTop: "16px",
              }}
            >
              21 Februarie 2026 &middot; 9 min citire
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
              Cat Costa Google Ads in Romania?{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #56db84 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Ghid de Bugete 2026
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
              CPC mediu pe industrii, bugete recomandate pe tip de campanie,
              calculul ROI &mdash; totul intr-un singur ghid actualizat pentru
              piata din Romania.
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
                Google Ads este cel mai rapid mod de a aparea pe prima pagina
                Google &mdash; dar cat ar trebui sa bugetezi? Raspunsul depinde
                de industria ta, nivelul competitiei si tipul de campanie pe
                care il alegi.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                In acest ghid detaliem costurile reale ale Google Ads in Romania
                in 2026, de la CPC-ul mediu pe fiecare industrie pana la
                bugetele minime recomandate si formulele de calcul ROI pe care
                le folosim zilnic pentru clientii nostri.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Costurile variaza semnificativ &mdash; o campanie de e-commerce
                poate costa sub 2 RON per click, in timp ce un click pe un
                cuvant cheie juridic poate ajunge la 15 RON. Diferenta sta in
                strategia din spatele fiecarei campanii.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Cum funcționează prețurile Google Ads */}
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
                Cum functioneaza preturile Google Ads
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Google Ads functioneaza pe un <strong style={{ color: "#fff" }}>model de licitatie in timp real</strong>.
                De fiecare data cand cineva cauta un cuvant cheie pe care il
                targetezi, Google ruleaza o licitatie instantanee intre toti
                advertiserii care liciteaza pe acel termen.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Costul pe click (CPC) pe care il platesti nu depinde doar de
                cat licitezi, ci si de <strong style={{ color: "#fff" }}>Quality Score</strong> &mdash;
                un scor de la 1 la 10 pe care Google il atribuie fiecarui cuvant
                cheie in functie de relevanta anuntului, experienta pe landing
                page si rata de click asteptata.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Formula simplificata este: <strong style={{ color: "#fff" }}>Ad Rank = CPC maxim &times; Quality Score</strong>.
                Asta inseamna ca un advertiser cu un Quality Score de 9 si o
                licitatie de 3 RON poate depasi pe cineva care liciteaza 6 RON
                dar are Quality Score 4.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                In campaniile Search, platesti <strong style={{ color: "#fff" }}>per click</strong> &mdash;
                nu per afisare. Asta inseamna ca, daca anuntul tau apare de
                1.000 de ori dar nimeni nu da click, nu platesti nimic.
                Exceptie fac campaniile Display si YouTube, unde poti plati
                si per 1.000 de afisari (CPM).
              </p>
            </div>
          </FadeInSection>

          {/* Section: CPC mediu pe industrii in Romania */}
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
                CPC mediu pe industrii in Romania
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Datele de mai jos reflecta CPC-urile medii pe care le observam
                in conturile clientilor nostri si in benchmark-urile Google Ads
                din Romania in 2026. Intervalele variaza in functie de
                sezonalitate, locatie si calitatea campaniei.
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
                      {["Industrie", "CPC mediu (RON)", "CPC mediu (EUR)", "Competitie"].map(
                        (h) => (
                          <th
                            key={h}
                            style={{
                              background: "#111",
                              color: "#fff",
                              padding: "14px 18px",
                              borderBottom: "2px solid #56db84",
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
                      ["E-commerce general", "1,5 – 4,0", "0,30 – 0,80", "Medie"],
                      ["Imobiliare", "3,0 – 8,0", "0,60 – 1,60", "Ridicata"],
                      ["Servicii juridice", "5,0 – 15,0", "1,00 – 3,00", "Foarte ridicata"],
                      ["Medical / stomatologie", "4,0 – 12,0", "0,80 – 2,40", "Ridicata"],
                      ["Servicii B2B", "3,0 – 10,0", "0,60 – 2,00", "Medie-Ridicata"],
                      ["Educatie", "2,0 – 6,0", "0,40 – 1,20", "Medie"],
                      ["Turism / travel", "2,5 – 7,0", "0,50 – 1,40", "Medie"],
                      ["Beauty / wellness", "1,5 – 5,0", "0,30 – 1,00", "Medie"],
                    ].map(([industrie, ron, eur, comp], i) => (
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
                          {ron}
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
                          {eur}
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
                          {comp}
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
                Observa ca serviciile juridice si cele medicale au cele mai
                mari CPC-uri &mdash; competitia e acerba si valoarea unui
                client nou justifica investitia. In contrast, e-commerce-ul
                general beneficiaza de CPC-uri accesibile, ceea ce il face
                ideal pentru testare cu bugete mai mici.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Bugete recomandate pe tip de campanie */}
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
                Bugete recomandate pe tip de campanie
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Nu exista un buget universal &mdash; fiecare tip de campanie
                are un prag minim sub care nu vei obtine date suficiente pentru
                optimizare. Iata recomandarile noastre bazate pe sute de
                campanii gestionate:
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  marginBottom: "24px",
                }}
              >
                {[
                  {
                    type: "Search Ads",
                    budget: "min. 2.000 RON/luna",
                    note: "Ideal pentru testare. 5.000+ RON/luna pentru scalare pe cuvinte cheie competitive.",
                  },
                  {
                    type: "Shopping Ads",
                    budget: "min. 3.000 RON/luna",
                    note: "Esential pentru e-commerce. Necesita feed de produse optimizat si margini sanatoase.",
                  },
                  {
                    type: "Display Ads",
                    budget: "min. 1.500 RON/luna",
                    note: "Brand awareness si remarketing. CPC-uri mici, dar conversii indirecte.",
                  },
                  {
                    type: "Performance Max",
                    budget: "min. 5.000 RON/luna",
                    note: "Campanie automatizata cross-channel. Are nevoie de volum mare de date pentru a performa.",
                  },
                  {
                    type: "YouTube Ads",
                    budget: "min. 2.000 RON/luna",
                    note: "Video ads cu reach mare. Cost per view (CPV) intre 0,05 – 0,20 RON.",
                  },
                ].map((item) => (
                  <div
                    key={item.type}
                    style={{
                      padding: "20px 24px",
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "16px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "8px",
                      }}
                    >
                      <span
                        className="font-bold"
                        style={{ color: "#fff", fontSize: "1rem" }}
                      >
                        {item.type}
                      </span>
                      <span
                        style={{
                          color: "#56db84",
                          fontSize: "0.875rem",
                          fontWeight: 700,
                        }}
                      >
                        {item.budget}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "rgba(255,255,255,0.4)",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {item.note}
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
                Aceste bugete sunt minime recomandate pentru a obtine date
                statistice relevante. Un buget mai mic inseamna mai putine
                click-uri, mai putine conversii si decizii bazate pe zgomot,
                nu pe date reale.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Cum calculezi ROI-ul */}
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
                Cum calculezi ROI-ul campaniilor Google Ads
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Costul per click nu spune nimic fara context. Ce conteaza cu
                adevarat este <strong style={{ color: "#fff" }}>costul per achizitie (CPA)</strong> si <strong style={{ color: "#fff" }}>return on ad spend (ROAS)</strong>.
                Iata formula pe care o folosim:
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
                  Exemplu de calcul ROI:
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
                    ["CPC mediu", "3 RON"],
                    ["Rata de conversie", "3%"],
                    ["Valoare medie comanda", "300 RON"],
                    ["Click-uri necesare per conversie", "33 click-uri"],
                    ["Cost per achizitie (CPA)", "100 RON"],
                    ["Venit per achizitie", "300 RON"],
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
                      color: "#56db84",
                      paddingTop: "6px",
                    }}
                  >
                    <span>ROAS</span>
                    <span>3:1</span>
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
                Un ROAS de 3:1 inseamna ca pentru fiecare leu investit in
                Google Ads, obtii 3 lei venit. In general, un ROAS minim
                de <strong style={{ color: "#fff" }}>2:1</strong> este considerat profitabil
                pentru e-commerce, iar pentru servicii (unde marginile sunt
                mai mari) chiar si un ROAS de 1,5:1 poate fi excelent.
              </p>
            </div>
          </FadeInSection>

          {/* Section: 5 greseli care cresc costurile */}
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
                5 greseli care cresc costurile Google Ads
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Majoritatea bugetelor irosite in Google Ads nu sunt din cauza
                platformei &mdash; ci din cauza greselilor de configurare.
                Iata cele mai frecvente 5 erori pe care le vedem:
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
                    title: "1. Cuvinte cheie prea largi (Broad Match fara control)",
                    desc: "Daca folosesti Broad Match fara strategii de Smart Bidding sau fara negative keywords, Google va afisa anuntul pentru cautari irelevante. Am vazut clienti care plateau pe cautari complet neconectate cu produsul lor — irosind 30-50% din buget.",
                  },
                  {
                    title: "2. Lipsa cuvintelor cheie negative",
                    desc: "Negative keywords sunt la fel de importante ca si cele pozitive. Fara ele, platesti pentru click-uri de la oameni care cauta informatii gratuite, joburi in domeniu sau produse complet diferite.",
                  },
                  {
                    title: "3. Landing page-uri de slaba calitate",
                    desc: "Google penalizeaza anunturile care duc pe pagini lente, nerelevante sau cu experienta proasta. Un Quality Score scazut inseamna CPC mai mare si pozitii mai slabe — platesti mai mult pentru mai putin.",
                  },
                  {
                    title: "4. Fara conversion tracking configurat corect",
                    desc: "Fara tracking, algoritmul Google nu stie ce inseamna un client valoros pentru tine. E ca si cum ai conduce cu ochii inchisi — nu poti optimiza ceea ce nu masori.",
                  },
                  {
                    title: "5. Ignorarea Quality Score-ului",
                    desc: "Un Quality Score de 3 in loc de 7 poate dubla costul per click. Imbunatatirea relevansei anuntului, a landing page-ului si a CTR-ului poate reduce costurile cu 30-50% fara sa schimbi bugetul.",
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
                Corectarea acestor 5 greseli poate reduce costurile cu <strong style={{ color: "#fff" }}>30-60%</strong> si
                creste numarul de conversii fara sa maresti bugetul. E prima
                actiune pe care o facem cand preluam un cont Google Ads
                existent.
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
                Vrei o estimare personalizata?
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
                Analizam gratuit industria ta, competitia si potentialul de
                crestere prin Google Ads. Primesti un buget personalizat si o
                proiectie de rezultate in 48 de ore.
              </p>
              <Link href="/reclame-platite/google-ads/" className="btn-primary">
                Descopera Google Ads <ArrowRight size={16} />
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
                    Facebook Ads vs. Google Ads pentru E-commerce
                  </h3>
                  <Link
                    href="/blog/facebook-ads-vs-google-ads-ecommerce/"
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
                    Performance Max pentru E-commerce: Ghid Complet
                  </h3>
                  <Link
                    href="/blog/performance-max-ecommerce/"
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
