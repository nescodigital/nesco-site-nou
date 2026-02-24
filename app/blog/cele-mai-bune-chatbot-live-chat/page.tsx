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
              25 Februarie 2026 &middot; 11 min citire
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
              Cele mai bune chatbot-uri si tool-uri de{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #ec4899 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Live Chat
              </span>{" "}
              pentru site-uri
            </h1>
            <p
              style={{
                fontSize: "1.125rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}
            >
              Cand sa folosesti un chatbot, cand live chat si cand un
              sistem hibrid. Comparatie detaliata a celor mai bune tool-uri
              si scenarii de utilizare pentru fiecare.
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
                <strong style={{ color: "#fff" }}>79% dintre consumatori</strong>{" "}
                prefera live chat-ul pentru ca primesc raspunsuri imediate. Si
                totusi, majoritatea site-urilor inca se bazeaza pe formulare de
                contact si emailuri la care se raspunde in 24-48 de ore. Intr-o
                lume in care clientii asteapta raspunsuri in sub 60 de secunde,
                aceasta diferenta costa vanzari.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Chatbot-urile si tool-urile de live chat nu sunt doar un
                &bdquo;nice to have&rdquo; &mdash; sunt infrastructura de
                comunicare care poate dubla rata de conversie a unui site.
                Problema? Exista zeci de optiuni, fiecare cu puncte forte
                diferite, si alegerea gresita inseamna bani aruncati pe un
                tool pe care nimeni nu-l foloseste.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                In acest ghid comparam cele mai bune 6 tool-uri de chatbot si
                live chat, iti explicam cand sa folosesti fiecare tip si iti
                dam un plan clar pentru implementare.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Cand sa folosesti ce */}
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
                Cand sa folosesti chatbot, cand live chat
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Nu exista o solutie universala. Tipul de tool pe care il alegi
                depinde de volumul de conversatii, complexitatea intrebarilor
                si resursele de personal disponibile. Iata cele 3 scenarii
                principale:
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
                    title: "Live Chat: suport uman in timp real",
                    desc: "Ideal cand ai intrebari complexe, produse/servicii cu valoare mare sau situatii care necesita empatie si judecata umana. Exemple: consultanta tehnica, negocieri de preturi, rezolvarea reclamatiilor. Dezavantajul: necesita personal disponibil si nu scaleaza fara costuri suplimentare.",
                  },
                  {
                    title: "Chatbot: automatizare 24/7",
                    desc: "Perfect pentru intrebari frecvente (FAQ), calificarea lead-urilor, programarea de intalniri si colectarea de informatii initiale. Un chatbot bine configurat poate gestiona 60-80% din interactiunile de pe site fara interventie umana. Disponibil 24/7, fara timp de asteptare.",
                  },
                  {
                    title: "Hibrid: cel mai bun din ambele lumi",
                    desc: "Chatbot-ul gestioneaza intrebarile simple si califica lead-urile, apoi transfera automat conversatiile complexe catre un operator uman. Aceasta abordare reduce volumul de munca al echipei cu 50-70% si asigura ca niciun client nu ramane fara raspuns.",
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

          {/* Section: Comparison Table */}
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
                Comparatie: 6 tool-uri de chatbot si live chat
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Am testat si comparat cele mai populare tool-uri din piata.
                Iata o sinteza rapida inainte de a intra in detalii:
              </p>
              <div style={{ overflowX: "auto", marginBottom: "24px" }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    minWidth: "720px",
                  }}
                >
                  <thead>
                    <tr>
                      {[
                        "Tool",
                        "Tip",
                        "Ideal pentru",
                        "Functie cheie",
                        "Pret de la",
                      ].map((header) => (
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
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "Tidio",
                        "Hibrid",
                        "IMM-uri, e-commerce",
                        "AI chatbot + live chat",
                        "\u20AC29/luna",
                      ],
                      [
                        "Manychat",
                        "Chatbot",
                        "Social media, DTC brands",
                        "Automatizari Instagram/FB/WhatsApp",
                        "Gratuit / $15/luna",
                      ],
                      [
                        "Landbot",
                        "Chatbot",
                        "Lead generation",
                        "Builder vizual no-code",
                        "\u20AC40/luna",
                      ],
                      [
                        "Wati.io",
                        "Chatbot",
                        "WhatsApp Business",
                        "API WhatsApp oficial",
                        "$49/luna",
                      ],
                      [
                        "Intercom",
                        "Hibrid",
                        "Enterprise, SaaS",
                        "AI + inbox unificat",
                        "$39/user/luna",
                      ],
                      [
                        "Drift",
                        "Hibrid",
                        "B2B, vanzari",
                        "Revenue acceleration",
                        "Custom pricing",
                      ],
                    ].map(([tool, tip, ideal, functie, pret], i) => (
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
                          {tip}
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
                          {functie}
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
                          {pret}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeInSection>

          {/* Section: Detailed Tool Reviews */}
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
                Analiza detaliata a fiecarui tool
              </h2>

              {/* Tidio */}
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
                  Tidio
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "8px",
                  }}
                >
                  <a
                    href="#AFFILIATE_TIDIO"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    style={{
                      color: "#ec4899",
                      textDecoration: "underline",
                      textUnderlineOffset: "3px",
                    }}
                  >
                    Tidio
                  </a>{" "}
                  este una dintre cele mai populare solutii hibride: combina
                  un chatbot AI (Lyro) cu live chat intr-o singura platforma.
                  E ideal pentru IMM-uri si magazine online care vor sa
                  automatizeze raspunsurile la intrebari frecvente, dar sa
                  pastreze optiunea de transfer catre un operator uman.
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "8px",
                  }}
                >
                  Chatbot-ul AI Lyro poate rezolva pana la 70% din
                  conversatii automat, bazandu-se pe continutul site-ului tau.
                  Integrari native cu Shopify, WooCommerce, WordPress si
                  alte platforme populare. Include si functii de email
                  marketing de baza.
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  <strong style={{ color: "#fff" }}>Pret:</strong> Plan gratuit
                  disponibil (50 conversatii/luna). Planurile platite incep de
                  la &euro;29/luna. AI Lyro e un add-on separat.
                </p>
                <a
                  href="#AFFILIATE_TIDIO"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "12px",
                    padding: "8px 16px",
                    background: "rgba(236,72,153,0.10)",
                    border: "1px solid rgba(236,72,153,0.18)",
                    borderRadius: "8px",
                    color: "#ec4899",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Incearca Tidio <ArrowRight size={14} />
                </a>
              </div>

              {/* Manychat */}
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
                  Manychat
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "8px",
                  }}
                >
                  <a
                    href="#AFFILIATE_MANYCHAT"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    style={{
                      color: "#ec4899",
                      textDecoration: "underline",
                      textUnderlineOffset: "3px",
                    }}
                  >
                    Manychat
                  </a>{" "}
                  e liderul de piata pentru automatizari de conversatii pe
                  social media. Daca vinzi prin Instagram, Facebook Messenger
                  sau WhatsApp, Manychat e alegerea evidenta. Permite
                  crearea de flow-uri automate care raspund la comentarii,
                  DM-uri si mesaje &mdash; ideal pentru DTC brands si
                  e-commerce.
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "8px",
                  }}
                >
                  Punctul forte: automatizarea raspunsurilor la comentarii pe
                  Instagram (comment-to-DM) si crearea de secvente de vanzare
                  in Messenger. Integrari cu Shopify, Stripe, Zapier si
                  Google Sheets.
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  <strong style={{ color: "#fff" }}>Pret:</strong> Plan gratuit
                  pana la 1.000 contacte. Pro de la $15/luna pentru contacte
                  nelimitate si functii avansate.
                </p>
                <a
                  href="#AFFILIATE_MANYCHAT"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "12px",
                    padding: "8px 16px",
                    background: "rgba(236,72,153,0.10)",
                    border: "1px solid rgba(236,72,153,0.18)",
                    borderRadius: "8px",
                    color: "#ec4899",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Incearca Manychat <ArrowRight size={14} />
                </a>
              </div>

              {/* Landbot */}
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
                  Landbot
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "8px",
                  }}
                >
                  <a
                    href="#AFFILIATE_LANDBOT"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    style={{
                      color: "#ec4899",
                      textDecoration: "underline",
                      textUnderlineOffset: "3px",
                    }}
                  >
                    Landbot
                  </a>{" "}
                  este un builder de chatbot no-code cu o interfata vizuala
                  drag-and-drop excelenta. E ideal pentru echipele de
                  marketing care vor sa creeze flow-uri conversationale
                  pentru lead generation fara sa depinda de developeri.
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "8px",
                  }}
                >
                  Poate inlocui formularele clasice de pe site cu
                  experiente conversationale care au rate de completare de
                  2-3x mai mari. Suporta si WhatsApp ca si canal. Include
                  logica conditionala, calcule si integrari native cu
                  HubSpot, Salesforce, Slack si Google Sheets.
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  <strong style={{ color: "#fff" }}>Pret:</strong> Plan gratuit
                  limitat (100 chat-uri/luna). Planurile platite incep de la
                  &euro;40/luna.
                </p>
                <a
                  href="#AFFILIATE_LANDBOT"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "12px",
                    padding: "8px 16px",
                    background: "rgba(236,72,153,0.10)",
                    border: "1px solid rgba(236,72,153,0.18)",
                    borderRadius: "8px",
                    color: "#ec4899",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Incearca Landbot <ArrowRight size={14} />
                </a>
              </div>

              {/* Wati.io */}
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
                  Wati.io
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "8px",
                  }}
                >
                  <a
                    href="#AFFILIATE_WATI"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    style={{
                      color: "#ec4899",
                      textDecoration: "underline",
                      textUnderlineOffset: "3px",
                    }}
                  >
                    Wati.io
                  </a>{" "}
                  este solutia specialista pentru WhatsApp Business API. Daca
                  WhatsApp e canalul principal de comunicare cu clientii tai,
                  Wati ofera tot ce ai nevoie: chatbot-uri automate, broadcast
                  messaging, inbox partajat pentru echipa si integrari cu
                  CRM-uri populare.
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "8px",
                  }}
                >
                  Construieste flow-uri de conversatie no-code, trimite
                  notificari si confirmari de comanda automate si gestioneaza
                  toate conversatiile WhatsApp dintr-un singur dashboard.
                  Ideal pentru business-uri din e-commerce, servicii si
                  HoReCa.
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  <strong style={{ color: "#fff" }}>Pret:</strong> De la
                  $49/luna pentru 5 useri. Include acces la WhatsApp Business
                  API oficial.
                </p>
                <a
                  href="#AFFILIATE_WATI"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "12px",
                    padding: "8px 16px",
                    background: "rgba(236,72,153,0.10)",
                    border: "1px solid rgba(236,72,153,0.18)",
                    borderRadius: "8px",
                    color: "#ec4899",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Incearca Wati.io <ArrowRight size={14} />
                </a>
              </div>

              {/* Intercom */}
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
                  Intercom
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "8px",
                  }}
                >
                  Intercom este solutia enterprise pentru comunicare cu
                  clientii. Combina live chat, chatbot AI (Fin), inbox
                  unificat, baza de cunostinte si automatizari avansate
                  intr-o singura platforma. E folosit de companii SaaS si
                  tech pentru ca ofera o integrare profunda cu produsul
                  (mesaje in-app, tururi ghidate, onboarding).
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  <strong style={{ color: "#fff" }}>Pret:</strong> De la
                  $39/user/luna. Costurile pot creste rapid pe masura ce
                  adaugi functii si useri. E o investitie care se justifica
                  doar daca ai volum mare de conversatii si echipa dedicata
                  de suport.
                </p>
              </div>

              {/* Drift */}
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
                  Drift
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "8px",
                  }}
                >
                  Drift (acum parte din Salesloft) este focusat pe B2B si
                  &bdquo;revenue acceleration&rdquo;. Nu e un simplu live
                  chat &mdash; e o platforma care identifica vizitatorii de
                  pe site, ii califica automat si ii conecteaza direct cu
                  reprezentantul de vanzari potrivit. Include chatbot-uri AI,
                  programare automata de intalniri si integrari cu Salesforce
                  si HubSpot.
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  <strong style={{ color: "#fff" }}>Pret:</strong> Custom
                  pricing (de obicei peste $2.500/luna). Se justifica doar
                  pentru companii B2B cu echipe de vanzari de minim 5-10
                  persoane si deal-uri cu valoare mare.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* Section: Sfaturi de implementare */}
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
                Sfaturi practice de implementare
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Indiferent de tool-ul pe care il alegi, succesul depinde de
                modul in care il implementezi. Iata regulile de baza:
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
                  "Incepe cu 3-5 intrebari frecvente si automatizeaza raspunsurile la acestea. Nu incerca sa acoperi totul din prima zi.",
                  "Seteaza un timp maxim de raspuns pentru live chat (sub 60 de secunde) si configureaza mesaje automate cand echipa nu e disponibila.",
                  "Foloseste un mesaj de intampinare proactiv — nu astepta ca vizitatorul sa initieze conversatia. Un simplu \"Pot sa te ajut cu ceva?\" creste interactiunile cu 40%.",
                  "Colecteaza datele de contact devreme in conversatie (email sau telefon) ca sa poti face follow-up chiar daca vizitatorul paraseste site-ul.",
                  "Analizeaza conversatiile saptamanal: ce intrebari se repeta, unde se blocheaza chatbot-ul, ce conversatii au dus la vanzari.",
                  "Testeaza tool-ul pe un plan gratuit inainte sa te angajezi financiar. Toate solutiile din lista au trial sau plan free.",
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
                    <span style={{ color: "#ec4899", flexShrink: 0 }}>
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
                <strong style={{ color: "#fff" }}>Regula de aur:</strong> un
                chatbot simplu care functioneaza bate un sistem complex pe
                care nimeni nu-l configureaza. Incepe mic, masoara
                rezultatele si optimizeaza treptat.
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
                Vrei sa implementezi un chatbot sau live chat?
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
                Te ajutam sa alegi tool-ul potrivit, sa configurezi
                flow-urile de conversatie si sa integrezi totul cu site-ul
                si CRM-ul tau.
              </p>
              <Link href="/contact/" className="btn-primary">
                Hai sa discutam <ArrowRight size={16} />
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
                    Automatizare in Marketing: Ghid Complet de Tool-uri
                  </h3>
                  <Link
                    href="/blog/automatizare-marketing-ghid-tools/"
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
                    WhatsApp Business pentru Vanzari si Suport
                  </h3>
                  <Link
                    href="/blog/whatsapp-business-vanzari-suport/"
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
