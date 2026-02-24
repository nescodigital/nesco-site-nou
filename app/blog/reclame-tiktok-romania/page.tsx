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
              12 Februarie 2026 &middot; 12 min citire
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
              Cum sa faci reclame pe TikTok in Romania:{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #56db84 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Ghid Complet
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
              Formate de anunturi, targetare, bugete, creative best practices si
              setup pas cu pas &mdash; tot ce trebuie sa stii ca sa lansezi
              campanii TikTok Ads profitabile in Romania.
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
                TikTok a depasit <strong style={{ color: "#fff" }}>1 miliard de utilizatori activi lunar</strong> la
                nivel global, iar in Romania platforma numara peste <strong style={{ color: "#fff" }}>5 milioane
                de utilizatori</strong>. Nu mai e doar o aplicatie pentru dans &mdash; e un
                canal de publicitate serios cu un sistem de ads care s-a maturizat
                semnificativ in ultimii doi ani.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Pentru brandurile care targeteaza audienta de 18-45 de ani, TikTok
                Ads poate livra CPM-uri cu <strong style={{ color: "#fff" }}>40-60% mai mici decat Meta</strong>.
                Competitia e inca redusa pe piata romaneasca, iar algoritmul de
                distributie e printre cele mai performante din industrie.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                In acest ghid complet iti aratam cum sa configurezi prima campanie
                TikTok Ads, ce formate functioneaza, cum sa targetezi eficient si
                ce buget ai nevoie pentru rezultate reale.
              </p>
            </div>
          </FadeInSection>

          {/* Section: De ce TikTok Ads */}
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
                De ce TikTok Ads in 2026?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Daca ai inca impresia ca TikTok e doar pentru adolescenti, cifrele
                spun altceva. Rata medie de engagement pe TikTok este de <strong style={{ color: "#fff" }}>6%</strong>,
                comparativ cu <strong style={{ color: "#fff" }}>1-2% pe Instagram</strong>. Asta inseamna ca
                continutul tau are sanse de 3-6 ori mai mari sa fie vazut si sa
                genereze interactiune.
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
                  "Competitie mai mica pe piata romaneasca decat pe Meta sau Google",
                  "CPM-uri semnificativ mai mici (€3-8 vs. €8-15 pe Meta)",
                  "Rata de engagement de 6% — de 3-6x mai mare ca pe Instagram",
                  "Continutul autentic performeaza mai bine decat cel polished",
                  "Excelent pentru product discovery — utilizatorii descopera produse noi",
                  "Algoritmul distribuie continut si catre non-followers",
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
                TikTok nu inlocuieste Meta sau Google &mdash; dar adauga un canal
                cu cost redus si reach organic puternic care poate complementa
                orice strategie de paid ads.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Formate de anunturi */}
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
                Formate de anunturi TikTok
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                TikTok ofera mai multe formate de anunturi, fiecare optimizat
                pentru un obiectiv diferit. Iata o comparatie completa:
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
                      {["Format", "Ideal pentru", "Specificatii", "CPM mediu"].map(
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
                      [
                        "In-Feed Ads",
                        "Conversii, trafic",
                        "Video 9:16, 5-60s",
                        "€3 – 8",
                      ],
                      [
                        "TopView",
                        "Brand awareness",
                        "Primul ad vazut, 60s",
                        "€15 – 30",
                      ],
                      [
                        "Spark Ads",
                        "Engagement, autenticitate",
                        "Boost posturi organice",
                        "€2 – 6",
                      ],
                      [
                        "Shopping Ads",
                        "Vanzari e-commerce",
                        "Catalog de produse",
                        "€4 – 10",
                      ],
                      [
                        "Branded Effects",
                        "Interactiune brand",
                        "Filtre AR, stickere",
                        "Custom",
                      ],
                    ].map(([format, bestFor, specs, cpm], i) => (
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
                          {format}
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
                          {bestFor}
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
                          {specs}
                        </td>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "#56db84",
                            padding: "14px 18px",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                          }}
                        >
                          {cpm}
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
                Pentru majoritatea business-urilor din Romania, recomandam sa
                incepi cu <strong style={{ color: "#fff" }}>Spark Ads</strong> (boost la continut organic
                performant) sau <strong style={{ color: "#fff" }}>In-Feed Ads</strong> cu obiectiv de conversie.
                Sunt cele mai accesibile ca buget si cele mai usor de testat.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Cum setezi prima campanie */}
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
                Cum setezi prima campanie TikTok Ads
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Setup-ul unei campanii TikTok Ads e mai simplu decat crezi.
                Urmeaza acesti 8 pasi:
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
                    title: "1. Creeaza un cont TikTok Business",
                    desc: "Mergi pe ads.tiktok.com si inregistreaza-te cu un email de business. Completeaza informatiile companiei si asteapta verificarea contului (dureaza de obicei 24-48 de ore).",
                  },
                  {
                    title: "2. Instaleaza TikTok Pixel pe site",
                    desc: "Pixel-ul TikTok functioneaza similar cu Meta Pixel. Il poti instala manual sau prin Google Tag Manager. Fara pixel, nu poti masura conversiile si algoritmul nu poate optimiza.",
                  },
                  {
                    title: "3. Configureaza evenimentele",
                    desc: "Seteaza evenimentele cheie: ViewContent (vizualizare produs), AddToCart (adaugare in cos), InitiateCheckout (initiere checkout) si Purchase (achizitie). Acestea sunt semnalele care ajuta algoritmul sa gaseasca cumparatori.",
                  },
                  {
                    title: "4. Creeaza campania cu obiectiv de conversie",
                    desc: "Alege obiectivul 'Conversions' si selecteaza evenimentul Purchase sau AddToCart ca optimizare principala. Evita obiectivele de trafic — sunt mai ieftine dar nu aduc conversii.",
                  },
                  {
                    title: "5. Seteaza targetarea larga",
                    desc: "Incepe doar cu tara (Romania) si varsta (18-45). Nu adauga interese sau comportamente — lasa algoritmul TikTok sa gaseasca audienta optima. E surprinzator de bun la asta.",
                  },
                  {
                    title: "6. Buget: minim €20/zi per ad group",
                    desc: "Sub acest prag, algoritmul nu are destule date sa optimizeze. Seteaza un buget zilnic de €20-50 per ad group si un buget total de campanie care sa acopere cel putin 7 zile.",
                  },
                  {
                    title: "7. Incarca 3-5 variatii de creative",
                    desc: "TikTok testeaza automat mai multe variante si aloca buget catre cele performante. Pregateste 3-5 video-uri diferite ca hook, unghi si format — diversitatea e cheia.",
                  },
                  {
                    title: "8. Lanseaza si asteapta 3-5 zile",
                    desc: "Nu modifica nimic in primele 3-5 zile. Algoritmul e in faza de invatare si orice schimbare reseteaza procesul. Evalueaza performanta abia dupa ce ai cel putin 50 de conversii pe ad group.",
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

          {/* Section: Creative best practices */}
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
                Creative best practices: ce functioneaza pe TikTok
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                TikTok e fundamental diferit de Meta sau Google. Continutul care
                functioneaza arata ca un TikTok organic, nu ca o reclama de TV.
                Iata regulile de aur:
              </p>
              <div
                style={{
                  padding: "24px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(86,219,132,0.15)",
                  borderRadius: "16px",
                  marginBottom: "20px",
                }}
              >
                <h3
                  className="font-bold text-white"
                  style={{
                    fontSize: "1rem",
                    marginBottom: "16px",
                  }}
                >
                  Ce FUNCTIONEAZA:
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
                    "Continut nativ — arata organic, nu ca o reclama",
                    "Hook in primele 2 secunde — capteaza atentia instant",
                    "Stil UGC (user-generated content) — testimoniale, unboxing, review-uri",
                    "Trending sounds — algoritmul favorizeaza continutul cu sunete populare",
                    "Text overlays — multi utilizatori vizualizeaza fara sunet",
                    "Durata 15-30 secunde — sweet spot-ul pentru engagement",
                    "Arata produsul in utilizare — nu doar imagini statice",
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
                      <span style={{ color: "#56db84", flexShrink: 0 }}>&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                style={{
                  padding: "24px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,100,100,0.15)",
                  borderRadius: "16px",
                  marginBottom: "20px",
                }}
              >
                <h3
                  className="font-bold text-white"
                  style={{
                    fontSize: "1rem",
                    marginBottom: "16px",
                  }}
                >
                  Ce NU functioneaza:
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
                    "Reclame polished, stil TV — utilizatorii le ignora instant",
                    "Stock footage generic — arata fals si nerelevant",
                    "Video fara sunet — TikTok e o platforma audio-first",
                    "Mesaje corporatiste — tonul trebuie sa fie conversational",
                    "Creative statice (imagini) — video e regele pe TikTok",
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
                      <span style={{ color: "#ff6464", flexShrink: 0 }}>&#10007;</span>
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
                Regula numarul 1 pe TikTok: <strong style={{ color: "#fff" }}>&bdquo;Don&apos;t make ads,
                make TikToks.&rdquo;</strong> Cu cat continutul se integreaza mai natural in
                feed, cu atat performeaza mai bine si costa mai putin.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Targetare */}
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
                Targetare: lasa algoritmul sa lucreze
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Una dintre cele mai mari greseli pe TikTok Ads este
                supra-targetarea. Spre deosebire de Meta, unde interesele si
                comportamentele ajuta, pe TikTok targetarea larga functioneaza
                cel mai bine. Iata strategia recomandata:
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
                  "Incepe cu targetare larga: doar varsta + tara (Romania). Algoritmul TikTok e foarte bun la gasirea cumparatorilor",
                  "Foloseste Custom Audiences pentru retargeting: vizitatori site, add-to-cart, engagers pe TikTok",
                  "Creeaza Lookalike Audiences bazate pe evenimentul Purchase — nu pe trafic sau engagement",
                  "Nu restrange interesele in fazele initiale — lasa algoritmul sa colecteze date",
                  "Dupa 2-4 saptamani, analizeaza audienta care converteste si ajusteaza minim",
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
                Algoritmul TikTok analizeaza comportamentul utilizatorilor la un
                nivel de profunzime pe care targetarea manuala nu il poate replica.
                Increderea in algoritm e cheia rezultatelor bune pe aceasta
                platforma.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Bugete si asteptari */}
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
                Bugete si asteptari realiste
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                TikTok Ads nu e o solutie magica &mdash; necesita investitie si
                rabdare. Iata la ce sa te astepti in termeni de buget si
                timeline:
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
                    ["Buget minim de testare", "€600/luna"],
                    ["Buget recomandat", "€1.500 – 3.000/luna"],
                    ["Faza de invatare", "2 – 4 saptamani"],
                    ["CPA vs. Meta (odata optimizat)", "20 – 40% mai mic"],
                    ["Numar minim de creative", "3 – 5 variatii"],
                    ["Refresh creative recomandat", "La fiecare 2 – 3 saptamani"],
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
                    <span>Timp pana la rezultate stabile</span>
                    <span>6 – 8 saptamani</span>
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
                Important: primele 2-4 saptamani sunt faza de invatare. Nu judeca
                performanta in aceasta perioada. Algoritmul colecteaza date si
                optimizeaza distributia. Rezultatele reale vin dupa ce ai acumulat
                suficiente conversii pentru ca algoritmul sa inteleaga profilul
                cumparatorului tau ideal.
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
                Lanseaza campanii TikTok Ads
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
                Echipa noastra gestioneaza campanii TikTok Ads pentru branduri
                din Romania. Strategie, creative, targetare si optimizare
                &mdash; totul inclus.
              </p>
              <Link href="/reclame-platite/tiktok-ads/" className="btn-primary">
                Descopera TikTok Ads <ArrowRight size={16} />
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
                    Cat Costa Google Ads in Romania? Ghid de Bugete 2026
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
              </div>
            </div>
          </FadeInSection>
        </article>
      </main>
      <Footer locale="ro" />
    </>
  );
}
