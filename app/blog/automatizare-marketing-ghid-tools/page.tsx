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
                "radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)",
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
                background: "rgba(236,72,153,0.10)",
                color: "#ec4899",
                border: "1px solid rgba(236,72,153,0.18)",
              }}
            >
              Automatizare
            </span>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "18px",
                marginTop: "16px",
              }}
            >
              26 Februarie 2026 &middot; 13 min citire
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
              Cum sa-ti automatizezi marketingul: Ghid complet de{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #ec4899 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Tools
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
              Automatizarea nu inseamna sa inlocuiesti oamenii &mdash; inseamna
              sa le dai superpowers. In acest ghid iti aratam exact ce sa
              automatizezi la fiecare etapa a afacerii si cu ce tool-uri sa o
              faci.
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
                Conform unui studiu HubSpot din 2025, companiile care folosesc
                automatizare in marketing genereaza cu{" "}
                <strong style={{ color: "#fff" }}>451% mai multe lead-uri calificate</strong>{" "}
                decat cele care fac totul manual. Si totusi, doar 25% din
                business-urile mici si medii au implementat macar o forma de
                automatizare.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Motivul? Nu lipsa de tool-uri &mdash; ci lipsa de claritate.
                Nimeni nu stie de unde sa inceapa, ce sa automatizeze prima data
                si care platforme merita investitia. Acest ghid rezolva exact
                problema asta.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Iti vom arata ce sa automatizezi in functie de stadiul afacerii
                tale, recomandam tool-uri concrete testate de noi si iti dam o
                harta clara a categoriilor de automatizare. Fara jargon, fara
                teorie inutila &mdash; doar actiuni pe care le poti implementa
                imediat.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Ce sa automatizezi in functie de stadiul afacerii */}
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
                Ce sa automatizezi in functie de stadiul afacerii
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Nu trebuie sa automatizezi totul din prima zi. Prioritatea
                depinde de unde esti acum. Iata ce recomandam la fiecare etapa:
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
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
                    style={{
                      fontSize: "1rem",
                      marginBottom: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
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
                        background: "rgba(236,72,153,0.12)",
                        color: "#ec4899",
                        fontSize: "0.8125rem",
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      1
                    </span>
                    Early Stage (0&ndash;50 clienti)
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
                      "Email welcome series — secventa automata de bun venit pentru fiecare abonat sau client nou",
                      "Chatbot de baza — raspunsuri automate la intrebarile frecvente pe site sau WhatsApp",
                      "Social media scheduling — programarea postarilor pe Facebook, Instagram si LinkedIn in avans",
                    ].map((item) => (
                      <li
                        key={item}
                        style={{
                          display: "flex",
                          gap: "10px",
                          fontSize: "0.9375rem",
                          color: "rgba(255,255,255,0.45)",
                          lineHeight: 1.7,
                        }}
                      >
                        <span style={{ color: "#ec4899", flexShrink: 0 }}>
                          &#10003;
                        </span>
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
                    style={{
                      fontSize: "1rem",
                      marginBottom: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
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
                        background: "rgba(236,72,153,0.12)",
                        color: "#ec4899",
                        fontSize: "0.8125rem",
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      2
                    </span>
                    Growing Stage (50&ndash;500 clienti)
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
                      "Lead scoring — clasificarea automata a lead-urilor dupa comportament si date demografice",
                      "Secvente avansate de email — nurturing, re-engagement, upsell bazate pe actiuni specifice",
                      "Mesagerie multi-canal — email + SMS + WhatsApp coordonate intr-un singur flow",
                    ].map((item) => (
                      <li
                        key={item}
                        style={{
                          display: "flex",
                          gap: "10px",
                          fontSize: "0.9375rem",
                          color: "rgba(255,255,255,0.45)",
                          lineHeight: 1.7,
                        }}
                      >
                        <span style={{ color: "#ec4899", flexShrink: 0 }}>
                          &#10003;
                        </span>
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
                    style={{
                      fontSize: "1rem",
                      marginBottom: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
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
                        background: "rgba(236,72,153,0.12)",
                        color: "#ec4899",
                        fontSize: "0.8125rem",
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      3
                    </span>
                    Scaling Stage (500+ clienti)
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
                      "Full funnel automation — automatizare completa de la primul contact pana la retentie si referral",
                      "Predictive analytics — AI care prezice ce lead-uri vor converti si cand sa contactezi",
                      "Cross-channel orchestration — coordonarea automata a mesajelor pe toate canalele in functie de comportament",
                    ].map((item) => (
                      <li
                        key={item}
                        style={{
                          display: "flex",
                          gap: "10px",
                          fontSize: "0.9375rem",
                          color: "rgba(255,255,255,0.45)",
                          lineHeight: 1.7,
                        }}
                      >
                        <span style={{ color: "#ec4899", flexShrink: 0 }}>
                          &#10003;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                <strong style={{ color: "#fff" }}>Regula de aur:</strong>{" "}
                incepe cu automatizarile care economisesc cel mai mult timp
                repetitiv. De obicei, asta inseamna email-urile si chatbot-ul.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Email & CRM Automation */}
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
                Email &amp; CRM Automation
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Email-ul ramane canalul cu cel mai mare ROI din marketing
                digital &mdash; in medie 36:1. Dar trimiterea manuala de
                email-uri nu scaleaza. Iata cele mai bune platforme care
                combina email marketing cu automatizare avansata:
              </p>

              {/* ActiveCampaign */}
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
                  ActiveCampaign
                </h3>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "#ec4899",
                    fontWeight: 600,
                    marginBottom: "12px",
                  }}
                >
                  Cel mai bun pentru: automatizare avansata + CRM integrat
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "8px",
                  }}
                >
                  <a href="#AFFILIATE_ACTIVECAMPAIGN" target="_blank" rel="noopener noreferrer sponsored" style={{ color: "#ec4899", textDecoration: "underline", textUnderlineOffset: "3px" }}>ActiveCampaign</a>{" "}
                  este alegerea noastra preferata pentru IMM-urile care vor
                  automatizare serioasa fara complexitatea unui Salesforce. Are
                  un builder vizual de automatizari drag-and-drop, CRM integrat,
                  lead scoring si peste 900 de integrari. Secventele conditionale
                  (if/then) sunt cele mai puternice din categorie la acest pret.
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                  }}
                >
                  Pretul incepe de la ~$29/luna si include email marketing,
                  automatizari, CRM de baza si formulare. Planul Plus ($49/luna)
                  adauga lead scoring, SMS marketing si integrari avansate.
                </p>
                <a href="#AFFILIATE_ACTIVECAMPAIGN" target="_blank" rel="noopener noreferrer sponsored" style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "12px", padding: "8px 16px", background: "rgba(236,72,153,0.10)", border: "1px solid rgba(236,72,153,0.18)", borderRadius: "8px", color: "#ec4899", fontSize: "0.8125rem", fontWeight: 600, textDecoration: "none" }}>
                  Incearca ActiveCampaign <ArrowRight size={14} />
                </a>
              </div>

              {/* Brevo */}
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
                  style={{ fontSize: "1.125rem", marginBottom: "8px" }}
                >
                  Brevo (fost Sendinblue)
                </h3>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "#ec4899",
                    fontWeight: 600,
                    marginBottom: "12px",
                  }}
                >
                  Cel mai bun pentru: multi-canal (email + SMS + WhatsApp)
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "8px",
                  }}
                >
                  <a href="#AFFILIATE_BREVO" target="_blank" rel="noopener noreferrer sponsored" style={{ color: "#ec4899", textDecoration: "underline", textUnderlineOffset: "3px" }}>Brevo</a>{" "}
                  este solutia ideala daca vrei email, SMS si WhatsApp dintr-un
                  singur loc. Planul gratuit include 300 email-uri/zi si CRM
                  de baza &mdash; suficient pentru a incepe. Automatizarile
                  sunt intuitive, iar pricing-ul este bazat pe volum de
                  email-uri, nu pe numarul de contacte (avantaj major).
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                  }}
                >
                  Planul Starter incepe de la ~$9/luna pentru 5.000 email-uri.
                  Planul Business ($18/luna) adauga automatizari avansate,
                  A/B testing si landing pages.
                </p>
                <a href="#AFFILIATE_BREVO" target="_blank" rel="noopener noreferrer sponsored" style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "12px", padding: "8px 16px", background: "rgba(236,72,153,0.10)", border: "1px solid rgba(236,72,153,0.18)", borderRadius: "8px", color: "#ec4899", fontSize: "0.8125rem", fontWeight: 600, textDecoration: "none" }}>
                  Incearca Brevo <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </FadeInSection>

          {/* Section: Chatbot & Messaging Automation */}
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
                Chatbot &amp; Messaging Automation
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Un chatbot bun raspunde instant la 80% din intrebarile
                clientilor, califica lead-uri si colecteaza date &mdash; totul
                fara interventie umana. In 2026, chatbot-urile nu mai sunt un
                &bdquo;nice to have&rdquo; &mdash; sunt o necesitate.
              </p>

              {/* Manychat */}
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
                  style={{ fontSize: "1.125rem", marginBottom: "8px" }}
                >
                  Manychat
                </h3>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "#ec4899",
                    fontWeight: 600,
                    marginBottom: "12px",
                  }}
                >
                  Cel mai bun pentru: automatizari pe social media + WhatsApp
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "8px",
                  }}
                >
                  <a href="#AFFILIATE_MANYCHAT" target="_blank" rel="noopener noreferrer sponsored" style={{ color: "#ec4899", textDecoration: "underline", textUnderlineOffset: "3px" }}>Manychat</a>{" "}
                  este liderul de piata pentru chatbot-uri pe Instagram,
                  Facebook Messenger si WhatsApp. Poti crea flow-uri automate
                  care raspund la comentarii, DM-uri si mesaje WhatsApp &mdash;
                  cu un builder vizual fara cod.
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                  }}
                >
                  Cazuri de utilizare populare: raspuns automat la &bdquo;trimite
                  link&rdquo; in comentarii, calificarea lead-urilor prin
                  intrebari secventiale, programari automate si colectarea de
                  email-uri prin DM. Planul gratuit acopera pana la 1.000
                  contacte. Pro incepe de la $15/luna.
                </p>
                <a href="#AFFILIATE_MANYCHAT" target="_blank" rel="noopener noreferrer sponsored" style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "12px", padding: "8px 16px", background: "rgba(236,72,153,0.10)", border: "1px solid rgba(236,72,153,0.18)", borderRadius: "8px", color: "#ec4899", fontSize: "0.8125rem", fontWeight: 600, textDecoration: "none" }}>
                  Incearca Manychat <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </FadeInSection>

          {/* Section: Analytics & Reporting Automation */}
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
                Analytics &amp; Reporting Automation
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Rapoartele manuale de marketing dureaza ore intregi si sunt
                depasind in momentul in care le termini. Automatizarea
                reporting-ului iti da date in timp real si elimina erorile
                umane din calcule.
              </p>

              {/* Supermetrics */}
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
                  style={{ fontSize: "1.125rem", marginBottom: "8px" }}
                >
                  Supermetrics
                </h3>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "#ec4899",
                    fontWeight: 600,
                    marginBottom: "12px",
                  }}
                >
                  Cel mai bun pentru: centralizarea datelor din toate platformele intr-un singur dashboard
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "8px",
                  }}
                >
                  <a href="#AFFILIATE_SUPERMETRICS" target="_blank" rel="noopener noreferrer sponsored" style={{ color: "#ec4899", textDecoration: "underline", textUnderlineOffset: "3px" }}>Supermetrics</a>{" "}
                  extrage automat datele din Google Ads, Meta Ads, LinkedIn
                  Ads, Google Analytics, TikTok Ads si alte 100+ platforme
                  si le trimite in Google Sheets, Looker Studio, Excel sau
                  data warehouse-ul tau. Rapoartele se actualizeaza automat
                  &mdash; nu mai copiezi cifre manual.
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                  }}
                >
                  Este tool-ul preferat al agentiilor si echipelor de
                  marketing care gestioneaza mai multe canale simultan. Pretul
                  incepe de la ~$39/luna pentru conectare la 1 sursa de date.
                  Planurile avansate permit conectarea tuturor platformelor
                  intr-un singur dashboard.
                </p>
                <a href="#AFFILIATE_SUPERMETRICS" target="_blank" rel="noopener noreferrer sponsored" style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "12px", padding: "8px 16px", background: "rgba(236,72,153,0.10)", border: "1px solid rgba(236,72,153,0.18)", borderRadius: "8px", color: "#ec4899", fontSize: "0.8125rem", fontWeight: 600, textDecoration: "none" }}>
                  Incearca Supermetrics <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </FadeInSection>

          {/* Section: All-in-One Marketing Automation */}
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
                All-in-One Marketing Automation
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Daca nu vrei sa jonglezi cu 5 tool-uri diferite, exista
                platforme care combina email, landing pages, automatizari,
                membership sites si checkout &mdash; totul intr-un singur loc.
              </p>

              {/* Kartra */}
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
                  style={{ fontSize: "1.125rem", marginBottom: "8px" }}
                >
                  Kartra
                </h3>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "#ec4899",
                    fontWeight: 600,
                    marginBottom: "12px",
                  }}
                >
                  Cel mai bun pentru: soloprenori si business-uri mici care vor totul intr-un singur tool
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "8px",
                  }}
                >
                  <a href="#AFFILIATE_KARTRA" target="_blank" rel="noopener noreferrer sponsored" style={{ color: "#ec4899", textDecoration: "underline", textUnderlineOffset: "3px" }}>Kartra</a>{" "}
                  inlocuieste 5&ndash;6 tool-uri separate: email marketing,
                  landing page builder, checkout si plati, membership site,
                  automatizari si analytics. Totul este conectat nativ, fara
                  integrari externe complicate.
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                  }}
                >
                  Ideal pentru consultanti, coachi, creatori de cursuri online
                  si business-uri de servicii care nu vor sa devina experti in
                  tech. Pretul incepe de la ~$99/luna si include toate
                  functiile &mdash; nu exista upsell-uri ascunse pe care sa le
                  descoperi dupa ce te-ai abonat.
                </p>
                <a href="#AFFILIATE_KARTRA" target="_blank" rel="noopener noreferrer sponsored" style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "12px", padding: "8px 16px", background: "rgba(236,72,153,0.10)", border: "1px solid rgba(236,72,153,0.18)", borderRadius: "8px", color: "#ec4899", fontSize: "0.8125rem", fontWeight: 600, textDecoration: "none" }}>
                  Incearca Kartra <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </FadeInSection>

          {/* Section: Comparatie rapida */}
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
                Comparatie rapida: toate tool-urile
              </h2>
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
                      {["Tool", "Categorie", "De la", "Ideal pentru"].map(
                        (header) => (
                          <th
                            key={header}
                            style={{
                              background: "#111",
                              color: "#fff",
                              padding: "14px 18px",
                              borderBottom: "2px solid #ec4899",
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
                      ["ActiveCampaign", "Email & CRM", "$29/luna", "Automatizare avansata + CRM"],
                      ["Brevo", "Email multi-canal", "$9/luna", "Email + SMS + WhatsApp"],
                      ["Manychat", "Chatbot", "Gratuit", "Social media + WhatsApp bots"],
                      ["Supermetrics", "Analytics", "$39/luna", "Raportare centralizata"],
                      ["Kartra", "All-in-One", "$99/luna", "Tot intr-un singur tool"],
                    ].map(([tool, cat, price, ideal], i) => (
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
                          {cat}
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
                          {ideal}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeInSection>

          {/* Section: Greseli frecvente */}
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
                Greseli frecvente in automatizarea marketingului
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Automatizarea gresit implementata poate face mai mult rau decat
                bine. Evita aceste capcane comune:
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
                    title: "Automatizezi inainte sa ai un proces functional manual",
                    desc: "Daca nu stii ce functioneaza manual, nu stii ce sa automatizezi. Automatizarea unui proces prost iti da doar un proces prost mai rapid.",
                  },
                  {
                    title: "Prea multe tool-uri care nu comunica intre ele",
                    desc: "5 platforme fara integrari inseamna 5 silo-uri de date. Alege tool-uri care se conecteaza nativ sau prin Zapier/Make.",
                  },
                  {
                    title: "Mesaje generice trimise tuturor",
                    desc: "Automatizarea fara segmentare e spam. Personalizeaza mesajele in functie de comportament, stadiu in funnel si preferinte.",
                  },
                  {
                    title: "Set it and forget it",
                    desc: "Automatizarile au nevoie de monitorizare si optimizare continua. Verifica ratele de deschidere, click si conversie lunar si ajusteaza.",
                  },
                  {
                    title: "Ignori componenta umana",
                    desc: "Nu totul trebuie automatizat. Interactiunile de mare valoare (negocieri, suport complex, parteneriate) au nevoie de touch uman.",
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
                Automatizarea bine facuta economiseste 10&ndash;20 de ore pe
                saptamana. Automatizarea prost facuta creeaza haos si pierde
                clienti. Diferenta sta in strategie, nu in tool-uri.
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
                Descopera strategia digitala potrivita
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
                Te ajutam sa identifici ce sa automatizezi, sa alegi tool-urile
                potrivite si sa implementezi totul corect &mdash; de la strategie
                la executie.
              </p>
              <Link href="/strategie-digitala-ro/" className="btn-primary">
                Strategia ta digitala <ArrowRight size={16} />
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
                      color: "#ec4899",
                    }}
                  >
                    Automatizare
                  </span>
                  <h3
                    className="font-bold text-white"
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.3,
                      margin: "10px 0",
                    }}
                  >
                    Cele mai bune platforme de Email Marketing
                  </h3>
                  <Link
                    href="/blog/cele-mai-bune-platforme-email-marketing/"
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
                      color: "#ec4899",
                    }}
                  >
                    Automatizare
                  </span>
                  <h3
                    className="font-bold text-white"
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.3,
                      margin: "10px 0",
                    }}
                  >
                    Cele mai bune Chatbot &amp; Live Chat Tools
                  </h3>
                  <Link
                    href="/blog/cele-mai-bune-chatbot-live-chat/"
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
