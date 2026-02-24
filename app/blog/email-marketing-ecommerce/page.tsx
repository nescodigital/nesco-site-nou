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
                "radial-gradient(circle, rgba(236,72,153,0.05) 0%, transparent 70%)",
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
              5 Februarie 2026 &middot; 11 min citire
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
              Email Marketing pentru Ecommerce: Cum Cresti{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #ec4899 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Vanzarile cu Newslettere
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
              Cele 7 emailuri pe care orice magazin online trebuie sa le
              trimita, segmentarea corecta a listei si tool-urile care fac
              totul automat.
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
                Email marketingul genereaza intre <strong style={{ color: "#fff" }}>36 si 42 de dolari pentru fiecare dolar investit</strong> &mdash;
                cel mai mare ROI din orice canal digital. Pentru un magazin
                online, emailul nu e optional. E coloana vertebrala a relatiei
                cu clientii si cea mai previzibila sursa de venituri recurente.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Si totusi, majoritatea magazinelor online trimit doar un
                newsletter ocazional si lasa bani pe masa. Fara flow-uri
                automate, fara segmentare, fara secvente post-achizitie.
                Rezultatul? O lista de abonati care se raceste, open rate-uri
                in scadere si zero venituri din email.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                In acest ghid iti aratam exact ce emailuri trebuie sa trimiti,
                cum sa-ti segmentezi lista si ce tool-uri sa folosesti ca sa
                transformi email marketingul intr-o masina de vanzari
                automatizata.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Cele 7 emailuri esentiale */}
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
                Cele 7 emailuri esentiale pentru orice magazin online
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Fiecare din aceste flow-uri ruleaza automat, 24/7, si
                genereaza venituri fara interventie manuala. Daca nu le ai
                setate, pierzi bani in fiecare zi.
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
                    title: "1. Welcome Series (3 emailuri)",
                    desc: "Primul email: povestea brandului si valorile. Al doilea: cele mai vandute produse si bestseller-uri. Al treilea: un incentive pentru prima achizitie (discount 10-15%, livrare gratuita). Acest flow are un open rate de peste 50% si o rata de conversie de ~10% — de departe cel mai performant flow pe care il poti seta.",
                  },
                  {
                    title: "2. Abandoned Cart (3 emailuri)",
                    desc: "Primul email la 1 ora dupa abandonare: reminder simplu cu produsele din cos. Al doilea la 24 ore: adauga social proof (review-uri, numar de clienti). Al treilea la 48-72 ore: ofera un discount de urgenta. Acest flow recupereaza intre 5% si 15% din cosurile abandonate — bani care altfel ar fi pierduti complet.",
                  },
                  {
                    title: "3. Post-Purchase (3 emailuri)",
                    desc: "Primul email: multumire + confirmare comanda cu detalii de livrare. Al doilea la 3-5 zile dupa livrare: ghid de utilizare sau intretinere a produsului. Al treilea la 7-10 zile: cerere de review. Acest flow construieste loialitate si creste rata de repeat purchase cu 20-30%.",
                  },
                  {
                    title: "4. Browse Abandonment",
                    desc: "\"Ai vazut X, inca esti interesat?\" — trimis la 1 ora dupa ce un vizitator a navigat pe o pagina de produs fara sa adauge in cos. Include imaginea produsului, pret si un CTA direct. Conversion rate: 2-5%, dar volumul poate fi semnificativ pe un magazin cu trafic mare.",
                  },
                  {
                    title: "5. Win-Back (2 emailuri)",
                    desc: "Pentru clientii inactivi de 60-90 de zile. Primul email: \"Ne-ai lipsit\" cu recomandari personalizate bazate pe achizitiile anterioare. Al doilea email: un incentive exclusiv (discount, cadou, livrare gratuita). Reactivarea chiar si a 5-10% din clientii inactivi poate avea un impact major asupra veniturilor.",
                  },
                  {
                    title: "6. Birthday / Anniversary",
                    desc: "Un email personalizat de ziua clientului sau la aniversarea primei achizitii, insotit de o oferta exclusiva (discount special, cadou). Are o rata de conversie de 2-3x fata de emailurile obisnuite datorita componentei emotionale si a sentimentului de exclusivitate.",
                  },
                  {
                    title: "7. Re-engagement",
                    desc: "Pentru abonatii care nu au deschis niciun email in ultimele 90+ zile. Scopul e dublu: fie ii reactivezi, fie ii cureti din lista. O lista curata inseamna deliverability mai bun si costuri mai mici. Trimite un email cu subiect direct (\"Mai vrei sa auzi de noi?\") si un singur CTA clar.",
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

          {/* Section: Segmentare */}
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
                Segmentarea listei: trimite mesajul potrivit omului potrivit
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Un email generic trimis la toata lista are un impact minim.
                Segmentarea inseamna sa imparti lista in grupuri bazate pe
                comportament si valoare, apoi sa trimiti mesaje relevante
                fiecarui segment. Iata segmentele esentiale:
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
                      {["Segment", "Criterii", "Strategie"].map((h) => (
                        <th
                          key={h}
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
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "Clienti VIP",
                        "Top 10% dupa venituri",
                        "Acces exclusiv, early access la promotii",
                      ],
                      [
                        "Clienti noi",
                        "Prima achizitie < 30 zile",
                        "Educatie despre brand, cross-sell",
                      ],
                      [
                        "Clienti la risc",
                        "Fara achizitie in 60+ zile",
                        "Oferte win-back personalizate",
                      ],
                      [
                        "AOV ridicat",
                        "Peste valoarea medie a comenzii",
                        "Recomandari de produse premium",
                      ],
                      [
                        "Cumparatori frecventi",
                        "3+ achizitii",
                        "Program de loialitate, recompense",
                      ],
                      [
                        "Abandonatori de cos",
                        "Au adaugat in cos, nu au cumparat",
                        "Secventa de recuperare",
                      ],
                    ].map(([segment, criterii, strategie], i) => (
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
                          {criterii}
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
                          {strategie}
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
                Emailurile segmentate genereaza cu <strong style={{ color: "#fff" }}>760% mai multe venituri</strong> decat
                cele trimise la toata lista. Nu e optional &mdash; e diferenta
                intre un email marketing care functioneaza si unul care e
                ignorat.
              </p>
            </div>
          </FadeInSection>

          {/* Section: A/B Testing */}
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
                A/B testing pentru email: ce sa testezi si de ce
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Fiecare email pe care il trimiti e o oportunitate de a invata
                ce functioneaza pentru audienta ta. A/B testing-ul inseamna sa
                trimiti doua variante ale aceluiasi email la segmente egale si
                sa masori care performeaza mai bine. Ce sa testezi:
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
                  "Subject lines — testele pe subiect singure pot imbunatati open rate-ul cu 20-30%. Testeaza lungimea, emotii, urgenta vs. curiozitate, emojis vs. fara.",
                  "Ora de trimitere — dimineata vs. seara, zi lucratoare vs. weekend. Difera pe fiecare industrie si audienta.",
                  "CTA button — culoare, text (\"Cumpara acum\" vs. \"Vezi oferta\"), pozitie in email, dimensiune.",
                  "Lungimea emailului — scurt si direct vs. detaliat cu storytelling. Depinde de tipul de produs si segment.",
                  "Personalizare — cu numele clientului vs. fara, recomandari bazate pe istoric vs. generice.",
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
                Regula de aur: testeaza <strong style={{ color: "#fff" }}>un singur element pe test</strong>.
                Daca schimbi simultan subiectul si CTA-ul, nu vei sti ce a
                facut diferenta. Ruleaza fiecare test pe minim 1.000 de
                abonati pentru rezultate semnificative statistic.
              </p>
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
                Tool-uri recomandate pentru email marketing ecommerce
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Nu toate platformele de email marketing sunt create la fel.
                Pentru ecommerce, ai nevoie de integrari native cu platforma
                ta de magazin, flow-uri automate avansate si segmentare
                bazata pe comportament.
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
                    title: "Klaviyo",
                    desc: "Cel mai bun tool pentru ecommerce. Integrare nativa cu Shopify, WooCommerce si Magento. Segmentare avansata bazata pe comportamentul de cumparare, predictive analytics, flow-uri pre-built pentru toate scenariile. Pretul incepe de la $20/luna pentru pana la 500 contacte.",
                  },
                  {
                    title: "Mailchimp",
                    desc: "Cel mai popular si accesibil. Bun pentru magazine mici care incep cu email marketing. Are un plan gratuit pana la 500 contacte. Limitari: segmentarea avansata si flow-urile automate sunt disponibile doar pe planurile platite ($13+/luna).",
                  },
                  {
                    title: "ActiveCampaign",
                    desc: "Excelent pentru automatizari complexe si CRM integrat. Ideal daca ai un ciclu de vanzare mai lung sau vinzi si B2B. Pret de la $29/luna. Interfata de automatizare e cea mai puternica din piata, dar are o curba de invatare mai abrupta.",
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

          {/* Section: Metrici cheie */}
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
                Metricile cheie pe care trebuie sa le urmaresti
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Nu poti imbunatati ce nu masori. Iata metricile esentiale
                si benchmark-urile pentru ecommerce:
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
                    ["Open Rate", "Benchmark: 20-25%"],
                    ["Click Rate (CTR)", "Benchmark: 2-5%"],
                    ["Conversion Rate", "Benchmark: 1-3%"],
                    ["Revenue per Email", "Variaza per industrie, urmareste trendul"],
                    ["List Growth Rate", "Tinta: 2-5% pe luna"],
                    ["Unsubscribe Rate", "Sub 0.5% per trimitere"],
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
                }}
              >
                Cel mai important metric e <strong style={{ color: "#fff" }}>revenue per email</strong> &mdash;
                cat venit genereaza fiecare email trimis. Daca acest numar
                creste luna de luna, strategia ta functioneaza. Restul
                metricilor sunt indicatori care te ajuta sa intelegi de ce
                functioneaza sau nu.
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
                Automatizeaza-ti email marketingul
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
                Seteaza flow-uri automate care genereaza venituri 24/7.
                Noi ne ocupam de strategie, setup si optimizare continua.
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
                    De ce abandoneaza clientii cosul si cum recuperezi vanzarile
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
                    Cum sa cresti vanzarile unui magazin online in 2026
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
