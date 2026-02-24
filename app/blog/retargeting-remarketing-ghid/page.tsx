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
              26 Ianuarie 2026 &middot; 10 min citire
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
              Retargeting si remarketing: Cum recuperezi{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #56db84 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                clientii pierduti
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
              Ghid complet de retargeting si remarketing &mdash; strategii,
              platforme, segmentare de audienta si bugete recomandate pentru
              a-ti recupera vizitatorii pierduti.
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
                <strong style={{ color: "#fff" }}>97% din vizitatorii</strong> care ajung pe site-ul
                tau pentru prima data pleaca fara sa cumpere, fara sa completeze
                un formular, fara sa faca absolut nimic. E normal &mdash; nu te
                cunosc inca suficient de bine. Dar asta nu inseamna ca sunt
                pierduti definitiv.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Retargeting-ul si remarketing-ul sunt strategiile prin care ii
                aduci inapoi. Si reprezinta cea mai profitabila forma de
                publicitate digitala, pentru un motiv simplu: nu incerci sa
                convingi straini &mdash; ci oameni care deja te-au vizitat,
                ti-au vazut produsele si au aratat un interes real.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                In acest ghid complet iti aratam exact cum functioneaza tehnic,
                ce segmente de audienta sa creezi, ce strategii sa aplici pe
                fiecare platforma si cat buget sa aloci pentru rezultate maxime.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Retargeting vs Remarketing */}
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
                Retargeting vs. Remarketing &mdash; ce diferenta e?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Desi multi le folosesc interschimbabil, exista o diferenta
                tehnica importanta intre cele doua:
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                <strong style={{ color: "#fff" }}>Retargeting-ul</strong> se
                refera la reclamele platite afisate vizitatorilor tai pe alte
                site-uri sau retele sociale. Google Display Network, Meta Ads
                (Facebook si Instagram), YouTube pre-roll &mdash; toate acestea
                sunt canale de retargeting. Vizitatorii sunt identificati prin
                pixeli (cookie-uri) si li se afiseaza reclame personalizate in
                timp ce navigheaza pe internet.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                <strong style={{ color: "#fff" }}>Remarketing-ul</strong> se
                refera la re-angajarea vizitatorilor prin email. Secvente de
                email-uri automate trimise celor care au abandonat cosul, care
                s-au inscris la newsletter dar nu au cumparat, sau clientilor
                vechi care nu au mai comandat de mult timp.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Ambele urmaresc acelasi obiectiv &mdash; recuperarea
                vizitatorilor pierduti &mdash; dar prin canale diferite. Cele mai
                bune rezultate vin cand le combini strategic.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Cum functioneaza tehnic */}
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
                Cum functioneaza tehnic retargeting-ul
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Mecanismul e simplu, dar puternic. Instalezi un{" "}
                <strong style={{ color: "#fff" }}>pixel de tracking</strong>{" "}
                (un mic fragment de cod) pe site-ul tau &mdash; Meta Pixel,
                Google Tag, TikTok Pixel etc. Cand un vizitator ajunge pe
                site, pixelul il identifica printr-un cookie si il adauga
                intr-o lista de audienta.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Ulterior, cand acel vizitator navigheaza pe Facebook, Instagram,
                YouTube sau alte site-uri din Google Display Network, platformele
                de publicitate il recunosc si ii afiseaza reclamele tale
                personalizate. E ca si cum i-ai trimite un reminder subtil:
                &bdquo;Hei, ne-ai vizitat, ai vazut produsul X &mdash; inca te
                mai intereseaza?&rdquo;
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Odata cu disparitia treptata a cookie-urilor third-party,{" "}
                <strong style={{ color: "#fff" }}>
                  server-side tracking
                </strong>{" "}
                devine din ce in ce mai important. In loc sa depinda exclusiv de
                browser-ul vizitatorului, datele sunt trimise direct de pe
                serverul tau catre platformele de ads &mdash; mai precis, mai
                fiabil, mai rezistent la ad-blockere.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Conversions API (Meta), Enhanced Conversions (Google) si
                Events API (TikTok) sunt solutiile pe care ar trebui sa le
                implementezi inca de acum pentru a-ti proteja capacitatea de
                retargeting pe termen lung.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Segmente de audienta esentiale */}
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
                Segmente de audienta esentiale
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Nu toti vizitatorii sunt la fel. Un om care ti-a vizitat
                homepage-ul o secunda e diferit de unul care a adaugat 3
                produse in cos si a ajuns la checkout. Segmentarea corecta a
                audientei este cheia unui retargeting profitabil:
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
                      {["Segment", "Fereastra", "Strategie", "ROAS estimat"].map(
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
                        "Toti vizitatorii (fara actiune)",
                        "1-7 zile",
                        "Brand reminder, value proposition",
                        "3-5x",
                      ],
                      [
                        "Vizitatori de produs",
                        "1-14 zile",
                        "Reclame dinamice cu produsul vizualizat",
                        "5-8x",
                      ],
                      [
                        "Add to cart (fara cumparare)",
                        "1-7 zile",
                        "Urgenta, social proof, stoc limitat",
                        "8-12x",
                      ],
                      [
                        "Abandon checkout",
                        "1-3 zile",
                        "Discount/incentiv, garantie, livrare gratuita",
                        "10-15x",
                      ],
                      [
                        "Clienti existenti",
                        "30-90 zile",
                        "Cross-sell, upsell, produse complementare",
                        "6-10x",
                      ],
                      [
                        "Abonati email (fara cumparare)",
                        "7-30 zile",
                        "Educatie, testimoniale, studii de caz",
                        "4-6x",
                      ],
                    ].map(([segment, window_, strategy, roas], i) => (
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
                          {segment}
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
                          {window_}
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
                          {strategy}
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
                          {roas}
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
                Observa pattern-ul: cu cat vizitatorul e mai aproape de
                conversie, cu atat ROAS-ul estimat e mai mare. De aceea e
                critic sa nu tratezi toti vizitatorii la fel &mdash; mesajul,
                oferta si urgenta trebuie adaptate fiecarui segment.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Strategii pe platforma */}
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
                Strategii pe platforma
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Fiecare platforma are avantajele ei specifice pentru retargeting.
                Iata cum sa le folosesti strategic:
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
                    title: "Meta Retargeting (Facebook & Instagram)",
                    desc: "Cele mai puternice optiuni de retargeting datorita volumului de utilizatori si datelor disponibile. Foloseste Dynamic Product Ads (DPA) pentru a afisa exact produsele vizualizate. Creeaza Custom Audiences bazate pe actiuni specifice pe site. Exclude cumparatorii din ultimele 7-14 zile pentru a nu irosi buget. Seteaza frequency cap la 3-5 afisari pe saptamana pentru a evita ad fatigue.",
                  },
                  {
                    title: "Google Display & YouTube",
                    desc: "Responsive Display Ads iti permit sa ajungi pe milioane de site-uri din Google Display Network. YouTube pre-roll catre vizitatorii care au petrecut timp pe paginile de produs e extrem de eficient — video-ul creeaza conexiune emotionala. Google Discovery Ads apar in Gmail, YouTube home si Google Discover — perfect pentru brand awareness la vizitatorii recenti.",
                  },
                  {
                    title: "Email Remarketing",
                    desc: "Secvente automate de abandoned cart (3 email-uri in 72h) sunt standardul de aur. Browse abandonment emails — trimise celor care au vazut produse dar nu au adaugat in cos — au rata de conversie de 5-10%. Win-back campaigns la 30-60-90 de zile pentru clientii inactivi, cu oferte escaladate gradual.",
                  },
                  {
                    title: "Cross-platform (secvential)",
                    desc: "Cea mai puternica strategie combina toate canalele secvential: awareness pe Google Display (zile 1-3) → reclame de produs pe Meta (zile 3-7) → email follow-up cu oferta speciala (zile 7-14). Mesajul evolueaza de la brand reminder la urgenta si incentiv, ghidand vizitatorul progresiv catre conversie.",
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

          {/* Section: Frecventa si durata */}
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
                Frecventa si durata &mdash; cand devine prea mult?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Ad fatigue e real si periculos. Daca un vizitator vede aceeasi
                reclama de 20 de ori intr-o saptamana, nu doar ca nu va
                converti &mdash; va asocia brandul tau cu spam-ul. Iata
                regulile pe care le recomandam:
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
                  "Limiteaza frecventa la 3-5 afisari pe saptamana per utilizator",
                  "Reimprospateza creative-urile la fiecare 2 saptamani — schimba imaginile, copy-ul si CTA-ul",
                  "Nu retargheta mai mult de 30-60 de zile — daca nu a convertit in aceasta fereastra, probabil nu e clientul tau",
                  "Exclude intotdeauna utilizatorii care au convertit deja — nimeni nu vrea sa vada reclame pentru un produs pe care l-a cumparat deja",
                  "Testeaza diferite formate: carousel, video, single image — pentru a mentine interesul pe tot parcursul ferestrei de retargeting",
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
                Respectarea acestor reguli iti protejeaza atat bugetul cat si
                perceptia brandului. Retargeting-ul agresiv are exact efectul
                opus celui dorit.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Bugete recomandate */}
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
                Bugete recomandate pentru retargeting
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Retargeting-ul ar trebui sa reprezinte{" "}
                <strong style={{ color: "#fff" }}>10-20% din bugetul total de ads</strong>.
                E o greseala comuna sa investesti 100% din buget in achizitie
                de trafic nou si 0% in recuperarea vizitatorilor existenti.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Pentru majoritatea magazinelor online din Romania, asta
                inseamna un buget dedicat de retargeting de{" "}
                <strong style={{ color: "#fff" }}>500 &ndash; 1.500 &euro;/luna</strong>.
                Cu acest buget poti acoperi retargeting pe Meta, Google Display
                si o secventa automatizata de email remarketing.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Rentabilitatea e aproape garantata: retargeting-ul aduce in mod
                constant un ROAS de{" "}
                <strong style={{ color: "#fff" }}>5-12x</strong> &mdash; mult
                peste media campaniilor de prospecting. Fiecare euro investit
                in retargeting aduce mai multi bani inapoi decat oricare alt
                tip de campanie de publicitate digitala.
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
                Recupereaza vizitatorii pierduti
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
                Configuram campanii de retargeting pe Meta, Google si email care
                aduc inapoi vizitatorii care au plecat fara sa cumpere &mdash;
                cu ROAS-uri de 5-15x.
              </p>
              <Link href="/reclame-platite/" className="btn-primary">
                Vreau retargeting profesionist <ArrowRight size={16} />
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
              </div>
            </div>
          </FadeInSection>
        </article>
      </main>
      <Footer locale="ro" />
    </>
  );
}
