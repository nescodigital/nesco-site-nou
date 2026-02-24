import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeInSection } from "@/components/ui/FadeInSection";

const CATEGORY_COLOR = "#ec4899";

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
                color: CATEGORY_COLOR,
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
              2 Martie 2026 &middot; 10 min citire
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
              Cum sa folosesti WhatsApp Business pentru{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #ec4899 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Vanzari si Suport
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
              WhatsApp Business API transforma modul in care comunici cu
              clientii: automatizari, flow-uri de conversie si suport in timp
              real &mdash; totul pe platforma pe care o folosesc deja 2 miliarde
              de oameni.
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
                WhatsApp are peste <strong style={{ color: "#fff" }}>2 miliarde de utilizatori activi</strong> lunar si un
                open rate de aproape 98%. Compara asta cu email-ul (20-25% open
                rate) sau cu SMS-ul (45%) si intelegi de ce tot mai multe
                business-uri se muta pe WhatsApp pentru comunicarea cu clientii.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Mesajele pe WhatsApp nu se pierd in spam, nu sunt ignorate in
                inbox-ul aglomerat si au un timp de raspuns mediu de sub 90 de
                secunde. Pentru echipele de vanzari si suport, asta inseamna
                conversii mai rapide si clienti mai fericiti.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                In acest ghid iti aratam exact cum sa configurezi WhatsApp
                Business API, ce flow-uri de automatizare sa implementezi si ce
                tool-uri sa folosesti ca sa transformi WhatsApp intr-un canal
                complet de vanzari si suport.
              </p>
            </div>
          </FadeInSection>

          {/* Section: WhatsApp Business vs WhatsApp Business API */}
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
                WhatsApp Business App vs. WhatsApp Business API
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Inainte de orice, trebuie sa intelegi diferenta dintre cele doua
                variante. Alegerea gresita iti limiteaza scalabilitatea de la
                inceput.
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
                      marginBottom: "8px",
                    }}
                  >
                    WhatsApp Business App (gratuita)
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Destinata micilor afaceri. Se instaleaza pe telefon, permite un
                    singur utilizator (sau maxim 4 dispozitive), ofera raspunsuri
                    rapide, etichete de contact si un catalog de produse simplu.
                    Automatizarea se limiteaza la mesaje de bun venit si mesaje
                    &bdquo;away&rdquo;. Nu se integreaza cu CRM-uri sau alte platforme.
                  </p>
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
                      marginBottom: "8px",
                    }}
                  >
                    WhatsApp Business API
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Destinata companiilor medii si mari. Permite agenti multipli
                    pe acelasi numar, automatizari complexe cu chatbot-uri,
                    integrare cu CRM-uri, broadcast messaging la scale si
                    analytics detaliate. Necesita un BSP (Business Solution
                    Provider) si aprobare de la Meta. Nu are interfata proprie
                    &mdash; interactionezi prin platforma BSP-ului.
                  </p>
                </div>
              </div>

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
                      {["Functionalitate", "Business App", "Business API"].map((h) => (
                        <th
                          key={h}
                          style={{
                            background: "#111",
                            color: "#fff",
                            padding: "14px 18px",
                            borderBottom: `2px solid ${CATEGORY_COLOR}`,
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
                      ["Pret", "Gratuita", "Platita (prin BSP)"],
                      ["Utilizatori", "1-4 dispozitive", "Agenti nelimitati"],
                      ["Automatizare", "Mesaje de bun venit", "Chatbot-uri complete"],
                      ["Integrari CRM", "Nu", "Da"],
                      ["Broadcast", "Maxim 256 contacte", "Nelimitat (cu template)"],
                      ["Analytics", "Elementare", "Avansate"],
                      ["Ideal pentru", "Micro-afaceri", "Companii in crestere"],
                    ].map(([feature, app, api], i) => (
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
                          {app}
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
                          {api}
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
                <strong style={{ color: "#fff" }}>Recomandare:</strong> Daca ai
                mai mult de 2-3 persoane care raspund clientilor sau vrei sa
                automatizezi conversatiile, treci direct pe API. Costul se
                recupereaza rapid prin eficienta crescuta.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Configurare WhatsApp Business API */}
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
                Configurarea WhatsApp Business API pas cu pas
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Procesul de setup dureaza de obicei 1-3 zile lucratoare. Iata
                pasii exacti pe care trebuie sa-i urmezi:
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
                    gap: "16px",
                  }}
                >
                  {[
                    {
                      step: "1",
                      title: "Alege un BSP (Business Solution Provider)",
                      desc: "BSP-ul este platforma prin care accesezi API-ul WhatsApp. Optiuni populare includ Wati.io, Manychat, Twilio si 360dialog. Fiecare are preturi si interfete diferite. Alege in functie de buget, complexitatea automatizarilor si integrari necesare.",
                    },
                    {
                      step: "2",
                      title: "Verifica-ti afacerea pe Meta Business Manager",
                      desc: "Ai nevoie de un cont Meta Business verificat. Procesul presupune documentatie legala (CUI, certificat de inregistrare), confirmare domeniu web si verificare prin telefon sau email. Dureaza 1-5 zile lucratoare.",
                    },
                    {
                      step: "3",
                      title: "Configureaza template-urile de mesaje",
                      desc: "WhatsApp cere aprobare prealabila pentru mesajele pe care le trimiti proactiv (outbound). Creeaza template-uri pentru: confirmari de comanda, notificari de livrare, reminder-uri de programare si mesaje promotionale. Fiecare template trebuie aprobat de Meta.",
                    },
                    {
                      step: "4",
                      title: "Conecteaza-te la CRM-ul tau",
                      desc: "Integreaza WhatsApp cu HubSpot, Salesforce, Pipedrive sau orice CRM folosesti. Asta inseamna ca fiecare conversatie WhatsApp apare automat in profilul clientului, cu istoric complet si context.",
                    },
                  ].map((item) => (
                    <li
                      key={item.step}
                      style={{
                        display: "flex",
                        gap: "16px",
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          background: "rgba(236,72,153,0.12)",
                          color: CATEGORY_COLOR,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.875rem",
                          fontWeight: 700,
                        }}
                      >
                        {item.step}
                      </span>
                      <div>
                        <h3
                          className="font-bold text-white"
                          style={{
                            fontSize: "1rem",
                            marginBottom: "4px",
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
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInSection>

          {/* Section: Flow-uri de automatizare pentru vanzari */}
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
                Flow-uri de automatizare pentru vanzari
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Automatizarile pe WhatsApp genereaza conversii de{" "}
                <strong style={{ color: "#fff" }}>3-7x mai mari</strong> decat
                canalele traditionale. Iata cele mai eficiente flow-uri de
                vanzari:
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
                    title: "Mesaj de bun venit + calificare lead",
                    desc: "Cand un potential client trimite primul mesaj, chatbot-ul raspunde instant cu un mesaj de bun venit personalizat si pune 2-3 intrebari de calificare (buget, nevoie, urgenta). Lead-urile calificate sunt directionate automat catre un agent de vanzari. Timpul de raspuns scade de la ore la secunde.",
                  },
                  {
                    title: "Navigare catalog de produse",
                    desc: "Permite clientilor sa navigheze catalogul de produse direct in conversatia WhatsApp prin butoane interactive si liste de produse. Clientul alege categoria, vede produsele cu poza si pret, apoi poate adauga in cos fara sa paraseasca WhatsApp. Conversia creste cu 30-45% fata de redirectionarea pe site.",
                  },
                  {
                    title: "Recuperare cos abandonat via WhatsApp",
                    desc: "Cand un client abandoneaza cosul pe site, primeste automat un mesaj WhatsApp la 1 ora (reminder), 24 ore (social proof + recenzii) si 48 ore (discount limitat). Rata de recuperare pe WhatsApp e de 45-60% — aproape tripla fata de email.",
                  },
                  {
                    title: "Confirmare comanda + actualizari livrare",
                    desc: "Dupa achizitie, clientul primeste automat pe WhatsApp: confirmare comanda cu detalii, notificare cand coletul pleaca, tracking in timp real si confirmare de livrare. Reduce cu 70% apelurile la suport de tipul \"Unde e comanda mea?\".",
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

          {/* Section: Flow-uri de automatizare pentru suport */}
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
                Flow-uri de automatizare pentru suport clienti
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Suportul pe WhatsApp rezolva tichetele de{" "}
                <strong style={{ color: "#fff" }}>60% mai repede</strong> decat
                email-ul, iar satisfactia clientilor creste semnificativ. Iata
                flow-urile esentiale:
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
                    title: "Chatbot FAQ automat",
                    desc: "Configureaza un chatbot care raspunde automat la cele mai frecvente 20-30 de intrebari: politica de retur, timp de livrare, modalitati de plata, marimea produselor. Rezolva 40-60% din intrebari fara interventie umana, eliberand echipa pentru cazuri complexe.",
                  },
                  {
                    title: "Rutare tichete catre agenti umani",
                    desc: "Cand chatbot-ul nu poate rezolva o problema, conversatia e transferata automat catre agentul potrivit, pe baza tipului de problema (tehnic, facturare, retur). Agentul primeste notificare instant si are acces la intregul istoric al conversatiei.",
                  },
                  {
                    title: "Sondaje de satisfactie (CSAT)",
                    desc: "Dupa rezolvarea unui tichet, clientul primeste automat un sondaj scurt pe WhatsApp (1-2 intrebari, butoane de rating). Rata de raspuns pe WhatsApp e de 35-45% — de 5x mai mare decat pe email. Feedback-ul ajunge in timp real in dashboard.",
                  },
                  {
                    title: "Raspunsuri automate in afara programului",
                    desc: "In afara orelor de lucru, clientii primesc automat un mesaj cu optiuni: FAQ chatbot, formular de tichet sau programare callback pentru a doua zi. Niciun mesaj nu ramane fara raspuns, iar clientul stie exact cand va fi contactat.",
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

          {/* Section: Tool-uri recomandate */}
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
                Tool-uri recomandate pentru WhatsApp Business
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Nu toate platformele de WhatsApp Business API sunt la fel.
                Iata cele doua solutii pe care le recomandam cel mai des
                clientilor nostri:
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
                {/* Wati.io */}
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
                      marginBottom: "8px",
                    }}
                  >
                    <a
                      href="https://affiliates.wati.io/lox4ol1xmt09"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      style={{ color: CATEGORY_COLOR, textDecoration: "underline", textUnderlineOffset: "3px" }}
                    >
                      Wati.io
                    </a>
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Wati.io este construit special pentru WhatsApp Business API.
                    Ofera un chatbot builder no-code cu drag-and-drop, inbox
                    partajat pentru mai multi agenti, broadcast messaging catre
                    liste segmentate si integrari native cu Shopify, HubSpot si
                    Zapier. Interfata e intuitiva si poti avea un chatbot
                    functional in cateva ore, fara cunostinte tehnice. Pretul
                    incepe de la aproximativ $49/luna si include 1.000 de
                    conversatii gratuite. Cel mai potrivit pentru echipe de
                    vanzari si suport care vor o solutie dedicata WhatsApp,
                    rapida de implementat.
                  </p>
                  <a
                    href="https://affiliates.wati.io/lox4ol1xmt09"
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
                      color: CATEGORY_COLOR,
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    Incearca Wati.io <ArrowRight size={14} />
                  </a>
                </div>

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
                    style={{
                      fontSize: "1rem",
                      marginBottom: "8px",
                    }}
                  >
                    <a
                      href="https://manychat.partnerlinks.io/d3mbiuidqfda"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      style={{ color: CATEGORY_COLOR, textDecoration: "underline", textUnderlineOffset: "3px" }}
                    >
                      Manychat
                    </a>
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Manychat este platforma multi-canal care acopera WhatsApp,
                    Instagram DM si Facebook Messenger dintr-o singura interfata.
                    Excelent pentru marketing automation: secvente drip,
                    segmentare avansata, A/B testing pe mesaje si integrare cu
                    Meta Ads (poti trimite direct din reclama in conversatie
                    WhatsApp). Flow builder-ul vizual e puternic si flexibil.
                    Planul gratuit acopera pana la 1.000 de contacte; planul Pro
                    incepe de la $15/luna. Ideal daca ai nevoie de o solutie
                    multi-canal si vrei sa conectezi WhatsApp cu Instagram si
                    Facebook intr-o strategie unificata.
                  </p>
                  <a
                    href="https://manychat.partnerlinks.io/d3mbiuidqfda"
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
                      color: CATEGORY_COLOR,
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    Incearca Manychat <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Section: Best Practices */}
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
                Cele mai bune practici pentru WhatsApp Business
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                WhatsApp e un canal personal. Daca il folosesti gresit, clientii
                te blocheaza si pierzi accesul la ei definitiv. Respecta aceste
                reguli:
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
                  "Raspunde in maximum 24 de ore — este politica WhatsApp. Dupa 24 de ore fara raspuns, nu mai poti trimite mesaje fara un template aprobat. Automatizeaza primul raspuns ca sa nu pierzi niciodata fereastra.",
                  "Foloseste template-urile cu cap — fiecare template trebuie aprobat de Meta. Creeaza-le clar, relevante si fara limbaj agresiv de vanzari. Template-urile de calitate scazuta iti scad rating-ul contului.",
                  "Nu face spam — WhatsApp monitorizeaza activ ratele de blocare si raportare. Daca prea multi utilizatori te blocheaza, contul tau e restrictionat sau suspendat. Trimite doar mesaje pe care clientii chiar le asteapta.",
                  "Personalizeaza mesajele — foloseste numele clientului, istoricul de achizitii si preferintele pentru a crea mesaje relevante. Un mesaj personalizat are o rata de conversie de 3-5x mai mare decat unul generic.",
                  "Urmareste metricile cheie — rata de raspuns, timpul mediu de rezolvare, scorul CSAT si rata de conversie per flow. Ce nu masori, nu poti imbunatati. Revizuieste saptamanal si optimizeaza continuu.",
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
                    <span style={{ color: CATEGORY_COLOR, flexShrink: 0 }}>
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
                Regula de aur: trateaza fiecare conversatie WhatsApp ca pe o{" "}
                <strong style={{ color: "#fff" }}>conversatie reala</strong>,
                nu ca pe un canal de broadcast. Clientii simt diferenta si
                raspund in consecinta.
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
                Hai sa discutam despre automatizare
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
                Te ajutam sa configurezi WhatsApp Business API, sa creezi
                flow-uri de automatizare si sa transformi conversatiile in
                vanzari si clienti multumiti.
              </p>
              <Link href="/contact/" className="btn-primary">
                Contacteaza-ne <ArrowRight size={16} />
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
                      color: CATEGORY_COLOR,
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
                    Cele mai bune chatbot-uri si tool-uri de live chat
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
                      color: CATEGORY_COLOR,
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
                    Cum sa-ti automatizezi marketingul: Ghid complet de tools
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
              </div>
            </div>
          </FadeInSection>
        </article>
      </main>
      <Footer locale="ro" />
    </>
  );
}
