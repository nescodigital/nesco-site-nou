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
              30 Ianuarie 2026 &middot; 11 min citire
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
              Performance Max 2026:{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #56db84 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Ghid complet pentru magazine online
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
              Setup pas cu pas, greseli frecvente, PMax vs Shopping vs Search
              &mdash; totul despre cel mai puternic tip de campanie Google pentru
              e-commerce.
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
                Performance Max este cel mai puternic &mdash; si cel mai complex
                &mdash; tip de campanie din Google Ads. Foloseste inteligenta
                artificiala Google pentru a distribui reclamele pe toate
                suprafetele disponibile: Search, Shopping, Display, YouTube,
                Gmail, Maps si Discover.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Pentru magazinele online, Performance Max a devenit esential.
                Combina puterea Google Shopping cu reach-ul YouTube si Display,
                totul intr-o singura campanie automatizata. Dar &bdquo;automatizat&rdquo;
                nu inseamna &bdquo;simplu&rdquo; &mdash; necesita o configurare
                strategica pentru a genera ROAS pozitiv.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                In acest ghid iti explicam tot ce trebuie sa stii: cum
                functioneaza, cum il configurezi corect, ce greseli sa eviti si
                cand merita sa il folosesti in locul campaniilor clasice.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Ce este Performance Max */}
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
                Ce este Performance Max?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Performance Max (PMax) este un tip de campanie Google Ads care
                ruleaza pe <strong style={{ color: "#fff" }}>toate canalele Google</strong> dintr-o
                singura campanie. In loc sa creezi separat campanii de Search,
                Shopping, Display si YouTube, PMax le unifica pe toate sub un
                singur umbrela controlat de AI.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Algoritmul Google gestioneaza automat <strong style={{ color: "#fff" }}>licitatiile, targetarea
                si plasamentele</strong>. Tu furnizezi: asset-urile creative (texte,
                imagini, video), feed-ul de produse din Merchant Center, bugetul
                si obiectivul de conversie. Google decide unde, cand si cui sa
                arate reclamele tale.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                PMax necesita <strong style={{ color: "#fff" }}>asset groups</strong> &mdash; grupuri de
                creative care includ titluri, descrieri, imagini, logo-uri si
                video-uri. Fiecare asset group poate fi orientat catre o
                categorie specifica de produse, cu semnale de audienta proprii.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Cum functioneaza pentru e-commerce */}
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
                Cum functioneaza PMax pentru e-commerce?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Pentru magazinele online, <strong style={{ color: "#fff" }}>feed-ul de produse din Google
                Merchant Center</strong> este piesa centrala. Algoritmul Google
                analizeaza fiecare produs din feed &mdash; titlu, descriere,
                pret, imagini, disponibilitate &mdash; si il potriveste automat
                cu cautarile si audientele relevante.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Tu furnizezi patru elemente esentiale: <strong style={{ color: "#fff" }}>produsele</strong> (prin
                feed), <strong style={{ color: "#fff" }}>asset-urile creative</strong> (texte, imagini, video),{" "}
                <strong style={{ color: "#fff" }}>bugetul</strong> si <strong style={{ color: "#fff" }}>obiectivele</strong> (de
                exemplu, achizitii cu ROAS target de 400%).
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Google preia controlul asupra: <strong style={{ color: "#fff" }}>targetarii</strong> (cine
                vede reclama), <strong style={{ color: "#fff" }}>licitatiilor</strong> (cat platesti per
                click/conversie), si <strong style={{ color: "#fff" }}>plasamentelor</strong> (pe ce canale
                apar reclamele). Algoritmul aloca bugetul dinamic catre
                combinatiile care genereaza cel mai bun ROAS.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Setup corect pas cu pas */}
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
                Setup corect pas cu pas
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Un Performance Max configurat gresit poate arde buget fara
                rezultate. Urmeaza acesti 8 pasi pentru o configurare optima:
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
                    step: "1",
                    title: "Optimizeaza feed-ul Google Merchant Center",
                    desc: "Titlurile trebuie sa contina keyword-ul principal + brand + atribut cheie. Descrierile detaliate, imaginile de calitate si codurile GTIN complete sunt esentiale pentru ca algoritmul sa potriveasca produsele corect.",
                  },
                  {
                    step: "2",
                    title: "Configureaza conversion tracking-ul",
                    desc: "Urmareste toate actiunile valoroase: purchase (primar), add to cart si begin checkout (secundar). Fara date de conversie corecte, algoritmul nu poate optimiza.",
                  },
                  {
                    step: "3",
                    title: "Creeaza campania cu obiectivul \"Sales\"",
                    desc: "Selecteaza \"Sales\" ca obiectiv principal si conecteaza feed-ul Merchant Center. Alege \"Performance Max\" ca tip de campanie.",
                  },
                  {
                    step: "4",
                    title: "Seteaza target ROAS (incepe cu 300%)",
                    desc: "Un target ROAS de 300% inseamna ca pentru fiecare 1 leu investit, astepti 3 lei venit. Incepe conservator si ajusteaza dupa 2-4 saptamani de date reale.",
                  },
                  {
                    step: "5",
                    title: "Creeaza asset groups pe categorii de produse",
                    desc: "Nu pune toate produsele intr-un singur asset group. Segmenteaza pe categorii (ex: incaltaminte barbati, incaltaminte femei, accesorii) cu creative-uri si semnale de audienta specifice fiecarei categorii.",
                  },
                  {
                    step: "6",
                    title: "Adauga audience signals",
                    desc: "Incarca liste de clienti existenti, adauga vizitatori ai site-ului (remarketing) si selecteaza segmente in-market relevante. Semnalele ajuta algoritmul sa invete mai rapid cui sa arate reclamele.",
                  },
                  {
                    step: "7",
                    title: "Budget: minim 50 EUR/zi",
                    desc: "Algoritmul are nevoie de suficiente date pentru optimizare. Cu un buget sub 50 EUR/zi, faza de invatare se prelungeste si performanta ramane sub-optima. Ideal: 80-150 EUR/zi.",
                  },
                  {
                    step: "8",
                    title: "Asteapta 2-4 saptamani (faza de invatare)",
                    desc: "Nu modifica setarile in primele 2-4 saptamani. Algoritmul testeaza combinatii de creative, audiente si plasamente. Interventiile premature reseteaza procesul de invatare.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    style={{
                      padding: "24px",
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "16px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        marginBottom: "8px",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",
                          background: "rgba(86,219,132,0.12)",
                          color: "#56db84",
                          fontSize: "0.8125rem",
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        {item.step}
                      </span>
                      <h3
                        className="font-bold text-white"
                        style={{
                          fontSize: "1rem",
                          margin: 0,
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.45)",
                        lineHeight: 1.7,
                        margin: 0,
                        paddingLeft: "40px",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Section: 5 greseli comune */}
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
                5 greseli comune in Performance Max
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Cele mai multe campanii PMax care nu performeaza au una din
                aceste probleme fundamentale:
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
                    title: "1. Feed de produse slab",
                    desc: "Titluri generice, fara GTIN-uri, imagini de calitate slaba sau descrieri incomplete. Feed-ul este motorul campaniei PMax pentru e-commerce \u2014 daca e slab, toata campania sufera. Investeste timp in optimizarea titlurilor cu keyword-uri relevante si imagini profesionale.",
                  },
                  {
                    title: "2. Un singur asset group pentru tot",
                    desc: "Daca pui 500 de produse intr-un singur asset group, algoritmul nu poate personaliza mesajul. Segmenteaza pe categorii \u2014 fiecare categorie merita asset-uri creative si semnale de audienta proprii.",
                  },
                  {
                    title: "3. Buget prea mic",
                    desc: "Cu 10 EUR/zi, algoritmul nu are suficiente date pentru a invata. Faza de invatare se prelungeste la nesfarsit, iar performanta ramane slaba. Minimum 50 EUR/zi, ideal 80+ EUR/zi.",
                  },
                  {
                    title: "4. Fara audience signals",
                    desc: "Semnalele de audienta nu sunt optionale \u2014 sunt indicii esentiale care ajuta algoritmul sa inteleaga mai rapid cui sa arate reclamele. Fara ele, faza de invatare dureaza mult mai mult si costa mai mult.",
                  },
                  {
                    title: "5. Modificari in timpul fazei de invatare",
                    desc: "Schimbarea bugetului, a target ROAS-ului sau a asset-urilor in primele 2-4 saptamani reseteaza procesul de invatare. Ai rabdare si lasa algoritmul sa adune date inainte de a face ajustari.",
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

          {/* Section: PMax vs Standard Shopping vs Search */}
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
                PMax vs. Standard Shopping vs. Search
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Fiecare tip de campanie are puncte forte diferite. Iata o
                comparatie directa:
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
                      {["Caracteristica", "Performance Max", "Standard Shopping", "Search"].map(
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
                      ["Canale", "Toate suprafetele Google", "Doar Shopping", "Doar Search"],
                      ["Control", "Scazut (AI-driven)", "Mediu", "Ridicat"],
                      ["Setup", "Mediu", "Mediu", "Simplu"],
                      ["Ideal pentru", "Scalare", "Produse specifice", "Intent ridicat"],
                      ["Potential ROAS", "Ridicat", "Mediu-Ridicat", "Ridicat"],
                      ["Transparenta", "Scazuta", "Medie", "Ridicata"],
                    ].map(([feature, pmax, shopping, search], i) => (
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
                          {feature}
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
                          {pmax}
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
                          {shopping}
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
                          {search}
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
                Recomandarea noastra: foloseste <strong style={{ color: "#fff" }}>PMax ca campanie principala</strong> pentru
                scalare, complementat de campanii Search pe keyword-urile cu cel
                mai mare intent de cumparare. Standard Shopping ramane util
                pentru produsele unde ai nevoie de control granular asupra
                licitatiilor.
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
                Optimizeaza campaniile Google
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
                Configuram si optimizam campanii Performance Max care genereaza
                vanzari reale. Analiza gratuita a contului tau Google Ads in 48
                de ore.
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
                    Cat costa Google Ads in Romania?
                  </h3>
                  <Link
                    href="/blog/cat-costa-google-ads-romania/"
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
                    Cum sa cresti vanzarile magazinului online
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
