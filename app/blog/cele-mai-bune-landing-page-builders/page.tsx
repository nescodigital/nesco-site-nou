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
                "radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)",
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
                background: "rgba(168,85,247,0.10)",
                color: "#a855f7",
                border: "1px solid rgba(168,85,247,0.18)",
              }}
            >
              Web Design
            </span>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "18px",
                marginTop: "16px",
              }}
            >
              27 Februarie 2026 &middot; 10 min citire
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
              Cele mai bune landing page builders pentru{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #a855f7 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Conversii mai mari
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
              Paginile de destinatie dedicate convertesc de 2-5x mai bine decat
              paginile generice de pe site. Dar care landing page builder ti se
              potriveste? Comparam cele mai bune 5 optiuni, cu pro-uri, contra-uri
              si preturi.
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
                Daca rulezi campanii platite pe Google Ads sau Meta Ads si
                trimiti traficul catre homepage-ul tau, pierzi bani. Studiile
                arata ca paginile de destinatie dedicate au rate de conversie
                cu{" "}
                <strong style={{ color: "#fff" }}>
                  65% mai mari
                </strong>{" "}
                decat paginile generice ale unui website. Motivul e simplu: un
                landing page are un singur obiectiv, zero distractii si un CTA
                clar.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Problema? Construirea unui landing page de calitate necesita
                fie un dezvoltator web, fie un tool specializat. Iar daca vrei
                sa testezi A/B mai multe variante rapid, ai nevoie de un
                builder dedicat. In acest ghid, comparam cele mai populare 5
                landing page builders si te ajutam sa alegi cel potrivit pentru
                nevoile tale.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Media ratei de conversie pentru landing pages este de aproximativ{" "}
                <strong style={{ color: "#fff" }}>9,7%</strong>, comparativ cu
                doar 2,35% pentru paginile generice. Diferenta vine din focus:
                o singura oferta, un singur mesaj, un singur buton.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Cand ai nevoie de un landing page builder */}
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
                Cand ai nevoie de un landing page builder
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Nu orice business are nevoie de un tool dedicat. Dar daca te
                regasesti in unul din scenariile de mai jos, un landing page
                builder iti va economisi timp si bani:
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
                    title: "CMS-ul tau nu e suficient",
                    desc: "Ai un site pe WordPress, Shopify sau alt CMS, dar fiecare modificare de layout necesita un developer. Ai nevoie de agilitate: sa poti crea si publica pagini noi in ore, nu saptamani.",
                  },
                  {
                    title: "Rulezi campanii platite (Google Ads, Meta Ads)",
                    desc: "Fiecare campanie ar trebui sa aiba un landing page dedicat. Trimiterea traficului platit catre homepage inseamna ROAS scazut. Un builder iti permite sa creezi rapid pagini specifice pentru fiecare audienta si oferta.",
                  },
                  {
                    title: "Vrei sa faci A/B testing rapid",
                    desc: "Testarea headline-urilor, CTA-urilor si layout-urilor e esentiala pentru CRO. Un landing page builder cu A/B testing integrat iti permite sa lansezi variante noi in minute, nu zile.",
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

          {/* Section: Feature-uri esentiale */}
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
                Feature-uri esentiale de evaluat
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Inainte de a alege un landing page builder, verifica daca
                ofera aceste functionalitati critice:
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
                  "Editor drag-and-drop — fara cod, fara developer, poti muta si personaliza orice element vizual",
                  "A/B testing integrat — testeaza variante de headline, CTA, imagini si layout fara tool-uri externe",
                  "Viteza de incarcare — pagina trebuie sa se incarce sub 3 secunde; fiecare secunda in plus scade conversiile cu 7%",
                  "Biblioteca de template-uri — sabloane optimizate pe industrii, gata de personalizat",
                  "Integratii (CRM, email, analytics) — conectare nativa cu HubSpot, Mailchimp, Google Analytics, Meta Pixel si altele",
                  "Responsive design — fiecare pagina trebuie sa arate perfect pe mobil, tableta si desktop",
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
                    <span style={{ color: "#a855f7", flexShrink: 0 }}>
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
                Daca un builder nu bifaza cel putin 5 din 6 criterii, cauta
                altceva. Compromisurile la aceste functionalitati iti vor costa
                conversii si timp.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Tabel comparativ */}
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
                Comparatie rapida: Top 5 landing page builders
              </h2>
              <div style={{ overflowX: "auto", marginBottom: "24px" }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    minWidth: "700px",
                  }}
                >
                  <thead>
                    <tr>
                      {[
                        "Tool",
                        "Cel mai bun pentru",
                        "Feature cheie",
                        "Pret de start",
                        "A/B Testing?",
                      ].map((h) => (
                        <th
                          key={h}
                          style={{
                            background: "#111",
                            color: "#fff",
                            padding: "14px 18px",
                            borderBottom: "2px solid #a855f7",
                            textAlign: "left",
                            fontSize: "0.875rem",
                            fontWeight: 700,
                          }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "Unbounce",
                        "Marketeri care vor AI",
                        "Smart Traffic (AI)",
                        "$99/luna",
                        "Da",
                      ],
                      [
                        "Kartra",
                        "Platforma all-in-one",
                        "Funnels + email + pagini",
                        "$119/luna",
                        "Da",
                      ],
                      [
                        "Instapage",
                        "Echipe enterprise",
                        "Colaborare in timp real",
                        "$199/luna",
                        "Da",
                      ],
                      [
                        "Leadpages",
                        "Business-uri mici",
                        "Pret accesibil",
                        "$49/luna",
                        "Da",
                      ],
                      [
                        "Elementor",
                        "Utilizatori WordPress",
                        "Flexibilitate maxima",
                        "$59/an",
                        "Cu plugin extern",
                      ],
                    ].map(([tool, bestFor, feature, price, ab], i) => (
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
                          {tool}
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
                          {price}
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
                          {ab}
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
                Preturile sunt orientative si pot varia in functie de plan si
                numar de pagini. Mai jos, analizam fiecare tool in detaliu.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Review-uri detaliate */}
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
                Review-uri detaliate
              </h2>

              {/* Unbounce (affiliate) */}
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
                  style={{ fontSize: "1.125rem", marginBottom: "8px" }}
                >
                  1. Unbounce &mdash; Landing pages cu AI
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "12px",
                  }}
                >
                  Unbounce este pionierul landing page builder-elor si ramane
                  unul dintre cele mai puternice optiuni de pe piata. Feature-ul
                  lor distinctiv este{" "}
                  <strong style={{ color: "#fff" }}>Smart Traffic</strong>, un
                  algoritm AI care redirectioneaza automat fiecare vizitator
                  catre varianta de pagina care are cea mai mare probabilitate
                  sa converteasca. In loc sa astepti saptamani pentru rezultate
                  A/B, Smart Traffic incepe sa optimizeze din primele 50 de
                  vizite.
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "12px",
                  }}
                >
                  Editorul drag-and-drop e intuitiv, biblioteca de template-uri
                  este vasta, iar integrarea cu Google Ads, Meta, HubSpot si
                  Mailchimp se face nativ. Pretul porneste de la $99/luna, ceea
                  ce il plaseaza in gama medie-premium.
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  <strong style={{ color: "#fff" }}>Ideal pentru:</strong>{" "}
                  marketeri care vor optimizare automata bazata pe AI si care
                  ruleaza volume mari de trafic platit.
                </p>
                <a
                  href="#AFFILIATE_UNBOUNCE"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "12px",
                    padding: "8px 16px",
                    background: "rgba(168,85,247,0.10)",
                    border: "1px solid rgba(168,85,247,0.18)",
                    borderRadius: "8px",
                    color: "#a855f7",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Incearca Unbounce <ArrowRight size={14} />
                </a>
              </div>

              {/* Kartra (affiliate) */}
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
                  style={{ fontSize: "1.125rem", marginBottom: "8px" }}
                >
                  2. Kartra &mdash; Platforma all-in-one
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "12px",
                  }}
                >
                  Kartra nu este doar un landing page builder &mdash; este o
                  platforma completa care include pagini de destinatie, email
                  marketing, funnels de vanzare, membership sites, helpdesk si
                  chiar video hosting. Daca vrei sa elimini 5-6 tool-uri
                  separate si sa ai totul intr-un singur loc, Kartra e
                  candidatul numarul unu.
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "12px",
                  }}
                >
                  Landing page builder-ul din Kartra vine cu template-uri
                  optimizate pentru conversii, A/B testing integrat si un
                  sistem de analytics care iti arata exact care pasi din funnel
                  pierd vizitatori. Pretul porneste de la $119/luna, dar
                  inlocuieste multiple abonamente.
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  <strong style={{ color: "#fff" }}>Ideal pentru:</strong>{" "}
                  antreprenori si business-uri mici care vor o singura
                  platforma pentru tot: pagini, email, funnels si automatizari.
                </p>
                <a
                  href="https://try.kartra.com/v4uqkepog1ti"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "12px",
                    padding: "8px 16px",
                    background: "rgba(168,85,247,0.10)",
                    border: "1px solid rgba(168,85,247,0.18)",
                    borderRadius: "8px",
                    color: "#a855f7",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Incearca Kartra <ArrowRight size={14} />
                </a>
              </div>

              {/* Instapage (non-affiliate) */}
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
                  style={{ fontSize: "1.125rem", marginBottom: "8px" }}
                >
                  3. Instapage &mdash; Enterprise-grade
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "12px",
                  }}
                >
                  Instapage este solutia preferata de echipele mari de
                  marketing care au nevoie de colaborare in timp real pe
                  landing pages. Mai multi membri ai echipei pot edita aceeasi
                  pagina simultan, pot lasa comentarii si pot aproba variante
                  &mdash; similar cu Figma, dar pentru landing pages.
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Feature-urile de personalizare sunt avansate: poti afisa
                  continut diferit in functie de sursa traficului, locatie
                  geografica sau device. A/B testing-ul e robust, iar
                  heatmaps-urile sunt incluse. Pretul porneste de la $199/luna,
                  ceea ce il face mai potrivit pentru companii cu bugete mai
                  mari.
                </p>
              </div>

              {/* Leadpages (non-affiliate) */}
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
                  style={{ fontSize: "1.125rem", marginBottom: "8px" }}
                >
                  4. Leadpages &mdash; Cel mai accesibil
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "12px",
                  }}
                >
                  Leadpages este alegerea ideala pentru business-urile mici si
                  freelanceri care au nevoie de landing pages profesionale fara
                  un buget mare. La $49/luna, ofera un editor drag-and-drop
                  solid, peste 200 de template-uri si integratii cu cele mai
                  populare platforme de email marketing.
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Nu are functiile AI ale Unbounce sau colaborarea Instapage,
                  dar pentru cine vrea pagini simple, rapide si eficiente,
                  Leadpages ofera cel mai bun raport calitate-pret din piata.
                  Include si functie de A/B testing pe planul Pro.
                </p>
              </div>

              {/* Elementor (non-affiliate) */}
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
                  style={{ fontSize: "1.125rem", marginBottom: "8px" }}
                >
                  5. Elementor &mdash; Plugin WordPress
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "12px",
                  }}
                >
                  Daca deja ai un site pe WordPress, Elementor poate fi cea mai
                  practica optiune. Este cel mai popular page builder pentru
                  WordPress, cu peste 15 milioane de instalari active.
                  Flexibilitatea e imbatabila: poti construi orice layout
                  imaginabil, de la landing pages simple la pagini complexe cu
                  animatii si interactiuni avansate.
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Dezavantajul: necesita WordPress (nu e o platforma
                  standalone), iar A/B testing-ul trebuie facut cu un plugin
                  suplimentar. Pretul de $59/an il face de departe cea mai
                  ieftina optiune, dar trebuie sa adaugi costul hosting-ului
                  WordPress.
                </p>
              </div>
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
                Descopera solutiile noastre de CRO
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
                Nu doar tool-ul conteaza, ci si strategia din spatele lui.
                Echipa noastra de CRO te ajuta sa creezi landing pages care
                convertesc, sa testezi variante si sa optimizezi fiecare
                element pentru rezultate maxime.
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
                    Rata de conversie: Ce este, cum o calculezi, cum o cresti
                  </h3>
                  <Link
                    href="/blog/rata-de-conversie-ghid/"
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
                      color: "#a855f7",
                    }}
                  >
                    Web Design
                  </span>
                  <h3
                    className="font-bold text-white"
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.3,
                      margin: "10px 0",
                    }}
                  >
                    Cat costa un site web in 2026
                  </h3>
                  <Link
                    href="/blog/cat-costa-un-site-web/"
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
