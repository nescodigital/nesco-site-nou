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
              24 Februarie 2026 &middot; 12 min citire
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
              Cele mai bune platforme de email marketing{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #ec4899 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                in 2026
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
              Comparatie onesta intre cele mai populare platforme de email
              marketing: functionalitati, preturi, avantaje si dezavantaje
              &mdash; ca sa alegi instrumentul potrivit pentru afacerea ta.
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
                Email marketingul ramane canalul digital cu cel mai mare ROI &mdash;
                intre <strong style={{ color: "#fff" }}>36 si 42 de dolari pentru fiecare dolar investit</strong>,
                conform studiilor DMA si Litmus din 2025. Dar acest ROI nu vine de la
                sine. Vine de la platforma pe care o alegi, de la modul in care o
                configurezi si de la cat de bine se potriveste cu nevoile afacerii tale.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                In 2026, piata de email marketing e mai competitiva ca niciodata.
                Ai zeci de platforme, fiecare cu puncte forte si puncte slabe
                diferite. Unele exceleaza la automatizari complexe, altele la
                usurinta de utilizare, iar altele la raportul pret-calitate. Am
                analizat cele mai relevante sase platforme si le-am comparat pe
                criterii concrete: functionalitati, preturi, scalabilitate si
                pentru cine sunt cel mai potrivite.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Fie ca esti un magazin online la inceput de drum, o agentie care
                gestioneaza mai multi clienti sau o afacere B2B cu cicluri de
                vanzare lungi, acest ghid te va ajuta sa iei o decizie informata.
              </p>
            </div>
          </FadeInSection>

          {/* Comparison Table */}
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
                Comparatie rapida: cele 6 platforme
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Inainte de a intra in detalii, iata o privire de ansamblu care te
                ajuta sa compari rapid ce ofera fiecare platforma:
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
                      {["Platforma", "Cel mai bun pentru", "Functionalitate cheie", "Pret de start", "Plan gratuit?"].map((h) => (
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
                      ["ActiveCampaign", "Automatizari complexe + CRM", "Automation builder vizual", "De la $29/luna", "Nu (trial 14 zile)"],
                      ["Brevo", "Raport pret-calitate", "Email + SMS + WhatsApp", "Gratuit / $25/luna", "Da (300 email/zi)"],
                      ["Sender", "Buget redus / incepatori", "Interfata simpla + automatizari", "Gratuit / $15/luna", "Da (15.000 email/luna)"],
                      ["Kit (ConvertKit)", "Creatori de continut", "Landing pages + secvente", "Gratuit / $25/luna", "Da (10.000 abonati)"],
                      ["Mailchimp", "Branduri mici-medii", "Template-uri + integrari", "Gratuit / $13/luna", "Da (500 contacte)"],
                      ["Klaviyo", "E-commerce avansat", "Segmentare comportamentala", "Gratuit / $20/luna", "Da (250 contacte)"],
                    ].map(([platforma, bestFor, feature, pret, free], i) => (
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
                          {platforma}
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
                          {pret}
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
                          {free}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeInSection>

          {/* Detailed Reviews */}
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
                Review detaliat: fiecare platforma in parte
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Am testat fiecare platforma si am evaluat-o pe baza functionalitatilor,
                usurintei de utilizare, suportului tehnic si a raportului calitate-pret.
                Iata ce am gasit:
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
                {/* ActiveCampaign */}
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
                      href="#AFFILIATE_ACTIVECAMPAIGN"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      style={{ color: "#ec4899", textDecoration: "underline", textUnderlineOffset: "3px" }}
                    >
                      ActiveCampaign
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
                    ActiveCampaign este liderul clar in materie de automatizari complexe.
                    Automation builder-ul vizual iti permite sa creezi flow-uri cu
                    ramificatii, conditii si actiuni multiple &mdash; lucruri pe care
                    majoritatea platformelor concurente nu le pot face la acelasi nivel.
                    Include si un CRM integrat, ceea ce il face ideal pentru echipele de
                    vanzari care vor sa combine email marketingul cu pipeline-ul de vanzari.
                    Pretul incepe de la $29/luna si creste pe masura ce lista se mareste,
                    ceea ce il face mai scump decat alternativele pentru echipele mici. Curba
                    de invatare e mai abrupta, dar odata ce inveti platforma, posibilitatile
                    sunt aproape nelimitate. Cel mai potrivit pentru afaceri B2B, SaaS si
                    echipele care au nevoie de automatizari sofisticate combinate cu CRM.
                  </p>
                  <a
                    href="#AFFILIATE_ACTIVECAMPAIGN"
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
                    style={{
                      fontSize: "1rem",
                      marginBottom: "8px",
                    }}
                  >
                    <a
                      href="https://get.brevo.com/bvspkphc2pke"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      style={{ color: "#ec4899", textDecoration: "underline", textUnderlineOffset: "3px" }}
                    >
                      Brevo
                    </a>{" "}
                    (fostul Sendinblue)
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Brevo a evoluat de la un simplu tool de email intr-o platforma
                    completa de marketing care include email, SMS, WhatsApp si chat.
                    Modelul de pret e diferit fata de majoritatea concurentilor: platesti
                    per numar de emailuri trimise, nu per numar de contacte, ceea ce il
                    face extrem de avantajos pentru companiile cu liste mari dar frecventa
                    de trimitere redusa. Planul gratuit include 300 de emailuri pe zi. Pe
                    partea de automatizari, Brevo acopera cele mai comune scenarii, dar nu
                    atinge complexitatea ActiveCampaign. Interfata e curata si intuitiva.
                    Cel mai potrivit pentru afaceri mici si medii care vor un tool
                    all-in-one fara sa plateasca separat pentru SMS si email.
                  </p>
                  <a
                    href="https://get.brevo.com/bvspkphc2pke"
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
                    Incearca Brevo <ArrowRight size={14} />
                  </a>
                </div>

                {/* Sender */}
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
                      href="#AFFILIATE_SENDER"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      style={{ color: "#ec4899", textDecoration: "underline", textUnderlineOffset: "3px" }}
                    >
                      Sender
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
                    Sender este una dintre cele mai subestimate platforme de email
                    marketing. Planul gratuit ofera pana la 2.500 de abonati si 15.000
                    de emailuri pe luna &mdash; semnificativ mai generos decat Mailchimp
                    sau Brevo. Interfata e simpla si directa, fara complexitate inutila.
                    Include automatizari de baza (welcome series, abandoned cart), pop-up
                    forms si integrari cu principalele platforme de ecommerce. Pe partea
                    de dezavantaje, nu are functionalitati avansate de segmentare sau
                    reporting detaliat, iar template-urile de email sunt mai putine si mai
                    simple decat la concurenta. Cel mai potrivit pentru startup-uri,
                    freelanceri si afaceri mici care vor un tool functional fara costuri
                    mari.
                  </p>
                  <a
                    href="#AFFILIATE_SENDER"
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
                    Incearca Sender <ArrowRight size={14} />
                  </a>
                </div>

                {/* Kit (ConvertKit) */}
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
                      href="#AFFILIATE_KIT"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      style={{ color: "#ec4899", textDecoration: "underline", textUnderlineOffset: "3px" }}
                    >
                      Kit
                    </a>{" "}
                    (fostul ConvertKit)
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Kit (rebranding-ul ConvertKit) a fost creat special pentru creatorii
                    de continut: bloggeri, youtuberi, creatori de cursuri si autori.
                    Punctul forte e simplitatea secventelor de email si a landing
                    page-urilor &mdash; poti construi un funnel complet fara sa ai nevoie
                    de un site separat. Planul gratuit include pana la 10.000 de abonati
                    (cu functionalitati limitate). Automatizarile sunt vizuale si usor de
                    configurat, dar nu ofera aceeasi flexibilitate ca ActiveCampaign.
                    Template-urile de email sunt minimale by design &mdash; Kit
                    promoveaza emailuri text-first care arata ca mesaje personale, nu ca
                    reclame. Nu e ideal pentru ecommerce (lipsesc integrari native cu
                    platforme de magazin), dar pentru creatorii de continut e una dintre
                    cele mai bune optiuni.
                  </p>
                  <a
                    href="#AFFILIATE_KIT"
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
                    Incearca Kit <ArrowRight size={14} />
                  </a>
                </div>

                {/* Mailchimp (non-affiliate) */}
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
                    Mailchimp
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Mailchimp e probabil cea mai cunoscuta platforma de email marketing
                    din lume, si cu un motiv bun: interfata e intuitiva, are sute de
                    integrari si un ecosistem matur de template-uri si resurse. Planul
                    gratuit e limitat la 500 de contacte si 1.000 de emailuri pe luna
                    &mdash; semnificativ mai putin generos decat acum cativa ani. Pe
                    planurile platite (de la $13/luna), deblochezi automatizari, A/B
                    testing si segmentare avansata. Dezavantajul principal: pretul creste
                    rapid pe masura ce lista se mareste, iar unele functionalitati
                    esentiale (cum ar fi send time optimization) sunt disponibile doar pe
                    planul Premium ($350/luna). Pentru afaceri mici care abia incep,
                    Mailchimp ramane o optiune solida, dar exista alternative mai
                    avantajoase la raportul calitate-pret.
                  </p>
                </div>

                {/* Klaviyo (non-affiliate) */}
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
                    Klaviyo
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Klaviyo este regele email marketingului pentru ecommerce. Integrarea
                    nativa cu Shopify, WooCommerce si Magento inseamna ca ai acces la date
                    detaliate despre comportamentul de cumparare al fiecarui client:
                    produse vizualizate, cosuri abandonate, valoarea medie a comenzii,
                    frecventa de achizitie. Segmentarea bazata pe aceste date e
                    incomparabila. Include predictive analytics (previziuni privind data
                    urmatoarei comenzi, valoarea pe viata a clientului) si flow-uri
                    pre-built pentru toate scenariile ecommerce. Dezavantajul: pretul.
                    Planul gratuit e limitat la 250 de contacte si 500 de emailuri. Pe
                    planurile platite, costul creste rapid &mdash; un magazin cu 10.000 de
                    contacte plateste circa $150/luna. Daca ai un magazin online serios si
                    email marketing e un canal strategic, Klaviyo e investitia care se
                    plateste singura.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* How to Choose */}
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
                Cum alegi platforma potrivita
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Nu exista o platforma &bdquo;cea mai buna&rdquo; universal &mdash; exista
                doar platforma cea mai potrivita pentru situatia ta. Iata criteriile
                pe care sa le evaluezi:
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
                  "Dimensiunea listei — daca ai sub 1.000 de abonati, un plan gratuit de la Sender sau Kit e suficient. Peste 10.000, evalueaza atent costurile pe masura ce cresti.",
                  "Bugetul — pentru buget minim, Sender si Brevo ofera cel mai bun raport calitate-pret. Daca bugetul nu e o problema, ActiveCampaign si Klaviyo iti dau cele mai puternice unelte.",
                  "Tipul de afacere — ecommerce inseamna Klaviyo sau Brevo. Creatori de continut inseamna Kit. B2B si SaaS inseamna ActiveCampaign. Afaceri mici generice inseamna Mailchimp sau Sender.",
                  "Functionalitati necesare — ai nevoie de automatizari complexe cu ramificatii? ActiveCampaign. Ai nevoie de SMS + email intr-un singur tool? Brevo. Ai nevoie de landing pages? Kit.",
                  "Integrari — verifica daca platforma se integreaza cu tool-urile pe care le folosesti deja: CMS, platforma de ecommerce, CRM, tool-uri de analytics.",
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
                Un sfat practic: <strong style={{ color: "#fff" }}>nu alege doar pe baza pretului de start</strong>.
                Calculeaza costul la dimensiunea listei pe care o vei avea peste 12 luni.
                Multe platforme par ieftine la inceput, dar devin semnificativ mai scumpe
                pe masura ce cresti. De asemenea, migrarea de la o platforma la alta e un
                proces costisitor si care consuma timp, asa ca merita sa alegi bine de la
                inceput.
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
                Descopera solutiile noastre de email marketing
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
                Te ajutam sa alegi, configurezi si optimizezi platforma de email
                marketing potrivita pentru afacerea ta. De la strategie la
                implementare completa.
              </p>
              <Link href="/solutii-email-marketing-ro/" className="btn-primary">
                Descopera solutiile de email marketing <ArrowRight size={16} />
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
                    Email Marketing pentru Ecommerce: Cum Cresti Vanzarile cu Newslettere
                  </h3>
                  <Link
                    href="/blog/email-marketing-ecommerce/"
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
                    Automatizare in marketing: ghid complet de tool-uri
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
