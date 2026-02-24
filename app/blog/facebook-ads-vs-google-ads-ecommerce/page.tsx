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
              16 Februarie 2026 &middot; 11 min citire
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
              Facebook Ads vs Google Ads: Ce alegi pentru{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #56db84 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                magazinul online?
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
              Doua platforme, doua abordari complet diferite. Comparatie
              completa cu CPC-uri, ROAS, formate si strategia optima care le
              combina pe amandoua.
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
                &bdquo;Sa mergem pe Facebook Ads sau pe Google Ads?&rdquo;
                &mdash; e dezbaterea eterna pentru orice magazin online. Ambele
                platforme pot genera venituri serioase, dar functioneaza
                fundamental diferit. Una iti aduce clienti care nici nu stiau ca
                existi. Cealalta ii prinde exact cand cauta ceea ce vinzi.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Raspunsul corect nu e &bdquo;una sau alta&rdquo; &mdash; ci sa
                stii <strong style={{ color: "#fff" }}>cand sa folosesti
                fiecare</strong>. In acest ghid comparam cele doua platforme
                cap la cap, cu cifre reale din campaniile pe care le gestionam
                zilnic pentru magazine online din Romania si Europa.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Cum functioneaza fiecare */}
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
                Cum functioneaza fiecare platforma?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Diferenta fundamentala e simpla:{" "}
                <strong style={{ color: "#fff" }}>Facebook Ads e
                marketing de intrerupere (push)</strong>, iar{" "}
                <strong style={{ color: "#fff" }}>Google Ads e marketing
                de intentie (pull)</strong>.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Facebook (Meta) afiseaza reclamele unor persoane care{" "}
                <strong style={{ color: "#fff" }}>ar putea fi
                interesate</strong> de produsul tau &mdash; pe baza
                demografiei, intereselor, comportamentului si a audientelor
                similare (lookalike). Utilizatorul nu cauta activ produsul, dar
                reclama il &bdquo;intrerupe&rdquo; in timp ce scrolleaza prin
                feed.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Google Ads, in schimb, afiseaza reclamele persoanelor care{" "}
                <strong style={{ color: "#fff" }}>cauta activ</strong> ceea ce
                vinzi. Cand cineva scrie &bdquo;cumpara pantofi sport
                barbati&rdquo; in Google, intentia de cumparare e deja acolo.
                Tu platesti sa apari exact in acel moment.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Aceasta diferenta schimba tot: de la mesajul creativ, la
                buget, la tipul de produse care functioneaza cel mai bine pe
                fiecare platforma.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Comparatie directa */}
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
                Comparatie directa: Facebook Ads vs Google Ads
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Am pus cele doua platforme fata in fata pe cele mai importante
                criterii pentru e-commerce:
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
                      {["Criteriu", "Facebook Ads", "Google Ads"].map(
                        (header) => (
                          <th
                            key={header}
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
                            {header}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "Targeting",
                        "Demografie, interese, comportament, lookalikes",
                        "Cuvinte cheie, intentie de cautare, remarketing",
                      ],
                      [
                        "Cel mai bun pentru",
                        "Descoperire, produse noi, brand awareness",
                        "Cumparatori cu intentie mare, cautari specifice",
                      ],
                      [
                        "CPC mediu (e-commerce)",
                        "\u20AC0,30 \u2013 \u20AC1,50",
                        "\u20AC0,50 \u2013 \u20AC3,00",
                      ],
                      ["ROAS mediu", "3-5x", "4-8x"],
                      [
                        "Format creativ",
                        "Visual-first (video, carousel, UGC)",
                        "Text ads, Shopping, video",
                      ],
                      [
                        "Curba de invatare",
                        "Medie",
                        "Medie-Ridicata",
                      ],
                      [
                        "Etapa funnel optima",
                        "Top & middle funnel",
                        "Middle & bottom funnel",
                      ],
                      [
                        "Scalare",
                        "Usoara, dar cu randament descrescator",
                        "Limitata de keywords, dar intentie mare",
                      ],
                    ].map(([criteriu, fb, google], i) => (
                      <tr key={i}>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "#fff",
                            padding: "14px 18px",
                            borderBottom:
                              "1px solid rgba(255,255,255,0.06)",
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
                            borderBottom:
                              "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                          }}
                        >
                          {fb}
                        </td>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "rgba(255,255,255,0.6)",
                            padding: "14px 18px",
                            borderBottom:
                              "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                          }}
                        >
                          {google}
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
                Observa: Google Ads are un ROAS mediu mai mare, dar si un CPC
                mai ridicat. Facebook Ads e mai ieftin per click, dar necesita
                mai multa munca creativa pentru a converti un utilizator care
                nu cauta activ produsul tau.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Cand sa alegi Facebook Ads */}
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
                Cand sa alegi Facebook Ads?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Facebook Ads (Meta Ads) exceleaza cand trebuie sa{" "}
                <strong style={{ color: "#fff" }}>creezi cerere</strong>, nu
                doar sa o captezi. E platforma ideala in urmatoarele scenarii:
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
                    title: "Produs nou sau necunoscut",
                    desc: "Nimeni nu cauta pe Google un produs de care nu stie ca exista. Facebook iti permite sa il arati audientei potrivite si sa generezi interes de la zero. Ideal pentru lansari, produse inovatoare sau nise emergente.",
                  },
                  {
                    title: "Produse vizuale (fashion, home, beauty)",
                    desc: "Daca produsul tau arata bine in imagini si video, Facebook e terenul tau de joaca. Formatele carousel, Reels si UGC functioneaza exceptional pentru produse unde estetica conteaza.",
                  },
                  {
                    title: "Pret mic, cumparaturi impulsive (sub \u20AC50)",
                    desc: "Produsele cu pret redus convertesc bine pe Facebook pentru ca decizia de cumparare e rapida. Utilizatorul vede reclama, ii place produsul si cumpara in 2-3 clickuri, fara sa compare extensiv.",
                  },
                  {
                    title: "Construirea de liste de email",
                    desc: "Lead ads pe Facebook sunt extrem de eficiente pentru a colecta adrese de email. Odata ce ai lista, poti face email marketing cu ROI ridicat fara sa depinzi de platforme de ads.",
                  },
                  {
                    title: "Retargeting vizitatori website",
                    desc: "Facebook Pixel iti permite sa retargetezi vizitatorii care au vazut produse dar nu au cumparat. Cu audiente custom si dynamic product ads, poti recupera pana la 20-30% din cosurile abandonate.",
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
                Google Ads exceleaza cand trebuie sa{" "}
                <strong style={{ color: "#fff" }}>captezi cererea
                existenta</strong>. Oamenii cauta deja ce vinzi &mdash; tu
                trebuie doar sa apari in fata lor:
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
                    title: "Volum mare de cautari pentru produsele tale",
                    desc: "Daca oamenii cauta activ \u201Ecumpara [produsul tau]\u201D pe Google, ai deja cerere validata. Google Ads te pune in fata lor exact in momentul intentiei maxime de cumparare.",
                  },
                  {
                    title: "Produse cu pret ridicat (cumparaturi considerate)",
                    desc: "Pentru produse peste \u20AC100-200, clientii compara inainte sa cumpere. Google Shopping si Search Ads te pozitioneaza in aceasta faza de comparare, cand intentia e ridicata si decizia e aproape luata.",
                  },
                  {
                    title: "E-commerce bazat pe servicii",
                    desc: "Daca vinzi servicii online (cursuri, consultanta, software), Google Ads functioneaza excelent. Oamenii cauta solutii la probleme specifice, iar tu le oferi raspunsul.",
                  },
                  {
                    title: "Google Shopping pentru cataloage de produse",
                    desc: "Daca ai un catalog de sute sau mii de produse, Google Shopping (Performance Max) iti afiseaza automat produsele relevante in functie de cautarile utilizatorilor. E cea mai scalabila solutie pentru e-commerce cu catalog mare.",
                  },
                  {
                    title: "Targeting pe competitori",
                    desc: "Poti licita pe numele brandurilor concurente si sa atragi clientii lor exact cand ii cauta. O strategie agresiva, dar eficienta cand ai un produs superior sau un pret mai bun.",
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

          {/* Section: Strategia optima */}
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
                Strategia optima: foloseste-le pe amandoua
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Cele mai profitabile magazine online pe care le gestionam nu
                aleg intre Facebook si Google &mdash; le folosesc{" "}
                <strong style={{ color: "#fff" }}>impreuna, strategic</strong>.
                Fiecare platforma acopera o etapa diferita a funnel-ului de
                vanzari:
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
                  Funnel-ul complet Facebook + Google:
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
                    [
                      "1. Top of Funnel (Awareness)",
                      "Facebook Ads \u2014 video, carousel, UGC pentru audienta rece",
                    ],
                    [
                      "2. Middle of Funnel (Considerare)",
                      "Google Search + Shopping pentru cautari de produs",
                    ],
                    [
                      "3. Bottom of Funnel (Conversie)",
                      "Google Brand Search + Shopping cu intentie de cumparare",
                    ],
                    [
                      "4. Recuperare",
                      "Facebook Retargeting + Google Remarketing pentru cosuri abandonate",
                    ],
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
                        flexWrap: "wrap",
                        gap: "8px",
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
                <strong style={{ color: "#fff" }}>Cum sa imparti
                bugetul?</strong> Pentru majoritatea magazinelor online,
                recomandam o impartire de{" "}
                <strong style={{ color: "#fff" }}>60% Google / 40%
                Facebook</strong> daca ai deja cerere de cautare pentru
                produsele tale. Daca lansezi un produs nou sau esti intr-o nisa
                emergenta, inverseaza:{" "}
                <strong style={{ color: "#fff" }}>60% Facebook / 40%
                Google</strong>.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Cheia e sa masori <strong style={{ color: "#fff" }}>ROAS-ul
                combinat</strong>, nu pe fiecare platforma in izolare. Facebook
                genereaza adesea prima interactiune cu brandul, iar Google
                finalizeaza vanzarea. Daca evaluezi Facebook doar dupa
                conversii directe, vei subestima impactul real pe care il are.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Foloseste un model de atribuire multi-touch (sau cel putin
                first-click vs. last-click) pentru a intelege contributia
                reala a fiecarei platforme. Instrumentele precum Google
                Analytics 4 si Meta Attribution te ajuta sa vezi intreaga
                imagine.
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
                Optimizeaza-ti campaniile
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
                Gestionam campanii Facebook Ads si Google Ads pentru magazine
                online cu ROAS dovedit. Afla cum putem scala vanzarile
                magazinului tau.
              </p>
              <Link href="/reclame-platite/" className="btn-primary">
                Descopera serviciile Paid Ads <ArrowRight size={16} />
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
                    Cat costa Google Ads in Romania? Bugete si rezultate reale
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
                    Retargeting si Remarketing: Ghid complet pentru e-commerce
                  </h3>
                  <Link
                    href="/blog/retargeting-remarketing-ghid/"
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
