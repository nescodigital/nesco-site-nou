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
              1 Februarie 2026 &middot; 10 min citire
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
              LinkedIn Ads pentru B2B in Romania:{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #56db84 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Merita investitia?
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
              Cea mai scumpa platforma de paid social, dar si cea cu cele mai
              bune leaduri B2B. Cand merita sa investesti in LinkedIn Ads si
              cand e mai bine sa aloci bugetul altundeva.
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
                LinkedIn Ads este, fara discutie, cea mai scumpa platforma de
                publicitate pe social media. Cu un CPC mediu intre{" "}
                <strong style={{ color: "#fff" }}>3 si 12 EUR</strong>, costul
                per click poate fi de 5-10x mai mare decat pe Meta sau Google
                Display. Si totusi, pentru companiile B2B, calitatea leadurilor
                generate prin LinkedIn poate fi incomparabila cu orice alta
                platforma.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                In acest ghid complet, analizam cand merita sa investesti in
                LinkedIn Ads, ce formate de anunturi functioneaza, cum sa-ti
                setezi bugetul corect si &mdash; la fel de important &mdash;
                cand este mai bine sa aloci banii in alta parte. Totul bazat pe
                date reale din campaniile pe care le gestionam pentru clientii
                nostri B2B.
              </p>
            </div>
          </FadeInSection>

          {/* Section: De ce LinkedIn pentru B2B */}
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
                De ce LinkedIn pentru B2B?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                LinkedIn are peste <strong style={{ color: "#fff" }}>900 de milioane de membri</strong> la
                nivel global, iar ceea ce il face unic este ca decision-makerii
                sunt efectiv activi pe platforma. Nu doar au un cont &mdash; ci
                posteaza, comenteaza si interactioneaza cu continut de business
                in mod regulat.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                In comparatie cu Meta Ads, LinkedIn ofera o calitate a
                leadurilor de pana la{" "}
                <strong style={{ color: "#fff" }}>4x mai mare pentru B2B</strong>.
                Motivul? Targetarea se face pe criterii profesionale reale:
                functie, senioritate, dimensiunea companiei, industrie &mdash;
                nu pe interese estimate sau comportament de scroll.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                In Romania, LinkedIn este in crestere constanta in sectoarele
                IT, servicii profesionale, fintech si manufacturing. Daca
                publicul tau tinta sunt manageri, directori sau antreprenori din
                aceste industrii, LinkedIn este probabil cel mai eficient canal
                de achizitie pe care il poti folosi.
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
                Formate de anunturi LinkedIn
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                LinkedIn ofera mai multe formate, fiecare cu avantaje si
                costuri diferite. Iata o comparatie completa:
              </p>
              <div style={{ overflowX: "auto", marginBottom: "24px" }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    minWidth: "600px",
                  }}
                >
                  <thead>
                    <tr>
                      {["Format", "Ideal pentru", "CPC mediu", "CTR mediu"].map(
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
                        "Sponsored Content (imagine)",
                        "Awareness, leaduri",
                        "\u20AC3\u20138",
                        "0,4\u20130,8%",
                      ],
                      [
                        "Sponsored Content (video)",
                        "Brand storytelling",
                        "\u20AC2\u20136",
                        "0,5\u20131,0%",
                      ],
                      [
                        "Message Ads (InMail)",
                        "Outreach direct",
                        "\u20AC0,3\u20130,8/trimitere",
                        "25\u201335% open rate",
                      ],
                      [
                        "Lead Gen Forms",
                        "Generare de leaduri",
                        "\u20AC5\u201315/lead",
                        "10\u201315% fill rate",
                      ],
                      [
                        "Document Ads",
                        "Thought leadership",
                        "\u20AC3\u20137",
                        "0,5\u20131,5%",
                      ],
                      [
                        "Text Ads",
                        "Buget redus",
                        "\u20AC2\u20135",
                        "0,02\u20130,05%",
                      ],
                    ].map(([format, ideal, cpc, ctr], i) => (
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
                          {cpc}
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
                          {ctr}
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
                Recomandarile noastre: incepe cu{" "}
                <strong style={{ color: "#fff" }}>Sponsored Content (imagine)</strong>{" "}
                pentru awareness si testeaza{" "}
                <strong style={{ color: "#fff" }}>Lead Gen Forms</strong> pentru
                conversii directe. Video-ul functioneaza excelent pentru
                companii care au deja un brand recunoscut in piata.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Targetare avansata */}
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
                Targetare avansata: armata secreta a LinkedIn
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Ceea ce face LinkedIn Ads cu adevarat unic sunt optiunile de
                targetare. Nicio alta platforma nu iti permite sa ajungi la
                audienta ta B2B cu o precizie comparabila:
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
                    title: "Functie si senioritate",
                    desc: "Targeteaza direct CEO, CFO, Head of Marketing, VP Sales sau orice alta functie. Combina cu nivelul de senioritate (entry, senior, director, C-suite) pentru audienta perfecta.",
                  },
                  {
                    title: "Companie: nume, dimensiune si industrie",
                    desc: "Poti targeta angajatii unor companii specifice (Account-Based Marketing), companii de o anumita dimensiune (1-10, 11-50, 51-200, 201-500, 500+) sau dintr-o industrie anume.",
                  },
                  {
                    title: "Competente si grupuri",
                    desc: "Targeteaza persoane care au listat competente specifice pe profil (ex: 'SaaS', 'Supply Chain Management') sau care sunt membre in grupuri profesionale relevante.",
                  },
                  {
                    title: "Matched Audiences",
                    desc: "Retargeting pe vizitatorii site-ului, upload de liste de email-uri, audienta lookalike bazate pe clientii tai existenti. Combinate cu filtrele de mai sus, devin extrem de precise.",
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
                <strong style={{ color: "#fff" }}>Exemplu practic:</strong> Daca
                vinzi un software de HR pentru companii cu 50-500 de angajati
                din Romania, poti targeta exact HR Managers, HR Directors si
                CHROs din companii de dimensiunea respectiva, din industrii
                relevante. Pe Meta Ads, acest nivel de precizie este pur si
                simplu imposibil.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Bugete si asteptari realiste */}
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
                Acesta este punctul in care multi renunta prematur la LinkedIn
                Ads. Bugetul minim pentru a obtine date semnificative si a
                optimiza campaniile este de circa{" "}
                <strong style={{ color: "#fff" }}>1.500 EUR/luna</strong>. Sub acest
                prag, algoritmul nu are suficiente date sa invete, iar tu nu ai
                suficiente conversii ca sa tragi concluzii.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Costul per lead pe LinkedIn se situeaza de obicei intre{" "}
                <strong style={{ color: "#fff" }}>20 si 80 EUR</strong>. Da, este
                semnificativ mai mare decat pe Meta (unde un lead B2B costa
                5-25 EUR). Insa diferenta critica sta in calitate: un lead de
                pe LinkedIn este de obicei un decision-maker real, cu titlu,
                companie si buget. Un lead de pe Meta poate fi oricine a dat
                click pe un formular.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Cand calculezi{" "}
                <strong style={{ color: "#fff" }}>costul per oportunitate calificata</strong>,
                LinkedIn devine adesea mai eficient decat Meta si Google
                pentru B2B. Daca 1 din 5 leaduri de LinkedIn devine
                oportunitate calificata vs. 1 din 20 de pe Meta, matematica se
                inverseaza complet.
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
                  Benchmark-uri orientative LinkedIn Ads B2B:
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
                    ["Buget minim recomandat", "\u20AC1.500/luna"],
                    ["Cost per lead (CPL)", "\u20AC20\u201380"],
                    ["Cost per oportunitate calificata", "\u20AC100\u2013400"],
                    ["Rata de conversie lead \u2192 oportunitate", "15\u201330%"],
                    ["CPC mediu (Sponsored Content)", "\u20AC3\u201312"],
                    ["CTR mediu (Sponsored Content)", "0,4\u20130,8%"],
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
                </ul>
              </div>
            </div>
          </FadeInSection>

          {/* Section: Cand NU merita LinkedIn Ads */}
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
                Cand NU merita LinkedIn Ads
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Nu orice companie B2B ar trebui sa foloseasca LinkedIn Ads. In
                urmatoarele situatii, bugetul este mai bine alocat pe alte
                canale:
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
                  "Produse B2C sau cu un ticket mediu sub 500 EUR — costul per achizitie va fi prea mare",
                  "Buget de advertising sub 1.000 EUR/luna — nu vei avea suficiente date pentru optimizare",
                  "Targetare larga, fara un buyer persona clar definit — vei irosi buget pe audienta nerelevanta",
                  "Servicii locale cu arie geografica restransa — Google Ads Local sau Meta Ads vor fi mai eficiente",
                  "Produse care necesita decizie impulsiva — LinkedIn este pentru decizii rationale, de lunga durata",
                  "Lipsa continutului de valoare (case studies, whitepapers) — fara un lead magnet puternic, conversiile vor fi scazute",
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
                    <span style={{ color: "#ef4444", flexShrink: 0 }}>
                      &#10007;
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
                In aceste cazuri, recomandam o combinatie de{" "}
                <strong style={{ color: "#fff" }}>Google Ads (Search)</strong> pentru
                intent activ si{" "}
                <strong style={{ color: "#fff" }}>Meta Ads</strong> pentru awareness
                si retargeting. Costul per lead va fi semnificativ mai mic, iar
                volumul va fi mai mare &mdash; chiar daca rata de calificare e
                mai scazuta.
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
                Genereaza leaduri B2B
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
                Vrei sa ajungi la decision-makerii din industria ta? Echipa
                noastra de LinkedIn Ads construieste campanii B2B cu targetare
                precisa si cost per lead optimizat.
              </p>
              <Link href="/reclame-platite/linkedin-ads/" className="btn-primary">
                Descopera LinkedIn Ads <ArrowRight size={16} />
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
                    Facebook Ads vs Google Ads: Ce alegi pentru magazinul online?
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
                    Cum alegi o agentie de marketing digital in 2026
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
