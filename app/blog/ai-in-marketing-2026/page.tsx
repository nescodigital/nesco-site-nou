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
              28 Ianuarie 2026 &middot; 9 min citire
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
              Cum folosesc companiile AI in{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #ec4899 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                marketing in 2026
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
              Aplicatii practice, tool-uri testate si strategii care
              functioneaza &mdash; ghidul complet pentru marketeri care vor sa
              foloseasca AI inteligent, nu doar la moda.
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
                AI nu inlocuieste marketerii &mdash; ii face de 10 ori mai
                productivi. Dar realitatea e ca majoritatea companiilor fie nu
                folosesc AI deloc in marketing, fie il folosesc gresit: genereaza
                texte cu ChatGPT, le copiaza fara editare si se mira de ce nu
                functioneaza.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                In acest ghid iti aratam ce fac companiile cele mai performante
                in 2026 cu AI in marketing: unde il aplica, ce tool-uri
                folosesc, ce functioneaza si ce nu &mdash; cu exemple concrete
                si cifre reale.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Nu e vorba de hype. E vorba de eficienta masurabil&abreve; si de
                avantajul competitiv pe care il obtii daca stii ce faci.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Unde se foloseste AI in marketing */}
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
                Unde se foloseste AI in marketing
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                AI nu e un singur tool magic &mdash; e un ecosistem de solutii
                care acopera aproape fiecare etapa a procesului de marketing.
                Iata unde se foloseste cel mai eficient in 2026:
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
                      {["Aplicatie", "Tool-uri", "Timp economisit", "Impact"].map(
                        (h) => (
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
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Creare continut (drafturi)", "ChatGPT, Claude, Jasper", "60-70%", "Mediu"],
                      ["Generare ad copy", "ChatGPT, Copy.ai", "50-60%", "Mediu-Ridicat"],
                      ["Creare imagini/video", "Midjourney, DALL-E, Runway", "70-80%", "Ridicat"],
                      ["Personalizare email", "Klaviyo AI, ActiveCampaign", "40-50%", "Ridicat"],
                      ["Optimizare campanii", "Google AI, Meta Advantage+", "30-40%", "Foarte Ridicat"],
                      ["Analytics & raportare", "GA4 AI insights, Looker", "50-60%", "Mediu"],
                      ["Customer service", "Chatbots, asistenti AI", "60-70%", "Mediu"],
                      ["Optimizare continut SEO", "Surfer SEO, Clearscope", "40-50%", "Ridicat"],
                    ].map(([app, tools, time, impact], i) => (
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
                          {tools}
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
                          {time}
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
                          {impact}
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
                Cel mai mare impact vine din <strong style={{ color: "#fff" }}>optimizarea campaniilor platite</strong> &mdash;
                algoritmii Google si Meta au devenit extrem de buni la alocarea
                bugetului. Dar surpriza vine din <strong style={{ color: "#fff" }}>creatia vizuala</strong>: tool-uri
                ca Midjourney si Runway au redus timpul de productie cu 70-80%.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Ce functioneaza si ce nu */}
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
                Ce functioneaza si ce nu
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Am testat zeci de abordari cu clientii nostri. Iata ce am
                observat ca functioneaza consistent &mdash; si ce esueaza de
                fiecare data:
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
                    works: true,
                    title: "AI pentru primele drafturi, apoi editare umana",
                    desc: "Genereaza un schelet cu ChatGPT sau Claude, apoi adaptezi tonul brandului, adaugi expertiza si personalizezi mesajul. Economisesti 60% din timp fara sa sacrifici calitatea.",
                  },
                  {
                    works: false,
                    title: "Publicarea continutului AI fara editare",
                    desc: "Continutul brut generat de AI e generic, lipsit de personalitate si uneori contine informatii incorecte. Google il detecteaza, audienta il simte si rezultatele sufera.",
                  },
                  {
                    works: true,
                    title: "AI pentru analiza datelor si identificarea pattern-urilor",
                    desc: "AI exceleaza la gasirea corelatiilor in seturi mari de date: ce audienta converteste, la ce ora, pe ce device, cu ce mesaj. Deciziile bazate pe aceste insights sunt semnificativ mai bune.",
                  },
                  {
                    works: false,
                    title: "AI care ia decizii strategice fara supraveghere umana",
                    desc: "Algoritmii optimizeaza pentru metrici, nu pentru obiective de business. Fara context uman, AI poate optimiza pentru click-uri ieftine care nu duc nicaieri.",
                  },
                  {
                    works: true,
                    title: "AI pentru generarea de ipoteze A/B testing",
                    desc: "In loc sa te gandesti tu la variante, lasa AI sa genereze 20 de titluri, 10 CTA-uri, 15 variante de imagine. Alegi tu ce testezi, dar portofoliul de optiuni e mult mai mare.",
                  },
                  {
                    works: false,
                    title: "AI pentru strategie creativa completa",
                    desc: "Creatia care rezoneza emotional, care surprinde, care ramane in minte &mdash; inca necesita intuitia umana. AI e excelent la executie, nu la viziune.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      padding: "24px",
                      background: "#0a0a0a",
                      border: `1px solid ${item.works ? "rgba(86,219,132,0.15)" : "rgba(239,68,68,0.15)"}`,
                      borderRadius: "16px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: item.works ? "#56db84" : "#ef4444",
                        marginBottom: "8px",
                        display: "block",
                      }}
                    >
                      {item.works ? "Functioneaza" : "Nu functioneaza"}
                    </span>
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

          {/* Section: 5 cazuri practice */}
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
                5 cazuri practice de utilizare
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Acestea sunt cazurile reale in care am vazut cel mai mare impact
                al AI in marketing &mdash; nu teorie, ci rezultate masurabile:
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
                    nr: "01",
                    title: "Descrieri de produs pentru e-commerce",
                    desc: "Un client cu 500 de produse avea nevoie de descrieri unice, optimizate SEO. Manual: 2 luni de munca. Cu AI (Claude + editare umana): 2 zile. Fiecare descriere a fost personalizata pe tonul brandului si optimizata pentru cuvinte cheie relevante.",
                  },
                  {
                    nr: "02",
                    title: "Variatii de ad creative",
                    desc: "In loc de 3-5 variante de reclama, am generat 50 de variante in mai putin de o ora: titluri diferite, unghiuri de mesaj, CTA-uri. Am testat toate 50 si am gasit castigatori pe care nu i-am fi descoperit niciodata manual.",
                  },
                  {
                    nr: "03",
                    title: "Optimizarea subiectelor de email",
                    desc: "AI-ul sugereaza 15-20 de variante de subject line bazate pe datele tale istorice. Tu alegi 4-5 pentru A/B testing. Rata de deschidere a crescut cu 23% in medie dupa implementare.",
                  },
                  {
                    nr: "04",
                    title: "Segmentarea clientilor",
                    desc: "AI-ul analizeaza comportamentul de cumparare si gaseste pattern-uri pe care ochiul uman le rateaza: clienti care cumpara doar in weekend, care revin dupa 47 de zile, care reactioneaza la discount-uri dar nu la free shipping.",
                  },
                  {
                    nr: "05",
                    title: "Analiza predictiva a churn-ului",
                    desc: "Modelele AI pot prezice cu 80-85% acuratete care clienti sunt pe cale sa renunte. Asta inseamna ca poti interveni proactiv cu oferte personalizate inainte sa fie prea tarziu.",
                  },
                ].map((item) => (
                  <div
                    key={item.nr}
                    style={{
                      padding: "24px",
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "16px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        color: "#ec4899",
                        marginBottom: "8px",
                        display: "block",
                      }}
                    >
                      {item.nr}
                    </span>
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

          {/* Section: Riscuri si limitari */}
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
                Riscuri si limitari
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                AI in marketing nu e perfect si nu e lipsit de riscuri. Iata ce
                trebuie sa stii inainte sa implementezi:
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
                  "Halucinatii — AI-ul poate genera informatii false prezentate cu incredere. Fiecare output trebuie verificat de un om, mai ales in domenii tehnice sau reglementate.",
                  "Inconsistenta vocii de brand — fara ghiduri clare si prompts bine scrise, AI-ul produce continut generic care nu reflecta personalitatea brandului tau.",
                  "Probleme de copyright — continutul generat de AI ridica intrebari legale, mai ales pentru imagini. Asigura-te ca ai dreptul de utilizare comerciala.",
                  "Dependenta excesiva — daca toata echipa ta se bazeaza pe AI fara sa inteleaga fundamentele marketingului, pierzi capacitatea de a gandi strategic.",
                  "Confidentialitatea datelor — nu introduce date sensibile ale clientilor in tool-uri AI publice. Foloseste solutii enterprise cu garantii de securitate.",
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
                      &#9888;
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
                Niciunul din aceste riscuri nu e un motiv sa eviti AI. Sunt
                motive sa il implementezi <strong style={{ color: "#fff" }}>cu
                cap</strong>, cu procese clare si cu supraveghere umana la
                fiecare pas.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Cum sa incepi */}
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
                Cum sa incepi
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Cea mai mare greseala pe care o vad companiile facand e sa
                incerce sa &bdquo;AI-eze&rdquo; totul deodata. In schimb,
                urmeaza aceasta abordare in 4 pasi:
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
                    step: "Pasul 1",
                    title: "Alege o singura zona",
                    desc: "Identifica procesul de marketing care iti consuma cel mai mult timp sau care are cel mai mare potential de imbunatatire. Incepe acolo.",
                  },
                  {
                    step: "Pasul 2",
                    title: "Incepe mic",
                    desc: "Nu cumpara tool-uri enterprise de la inceput. Testeaza cu versiunile gratuite sau cu ChatGPT. Invata ce functioneaza in contextul tau specific.",
                  },
                  {
                    step: "Pasul 3",
                    title: "Masoara rezultatele",
                    desc: "Compara metrici inainte si dupa implementarea AI: timp economisit, calitate output, impact pe conversii. Fara date, nu stii daca merge.",
                  },
                  {
                    step: "Pasul 4",
                    title: "Scaleaza ce functioneaza",
                    desc: "Dupa ce ai dovada clara ca AI aduce valoare intr-o zona, extinde la urmatoarea. Dar pastreaza mereu componenta umana de verificare si strategie.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    style={{
                      padding: "24px",
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "16px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#ec4899",
                        marginBottom: "8px",
                        display: "block",
                      }}
                    >
                      {item.step}
                    </span>
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
                Companiile care au adoptat AI pas cu pas au obtinut rezultate de{" "}
                <strong style={{ color: "#fff" }}>2-3x mai bune</strong> decat
                cele care au incercat sa implementeze totul simultan. Rabdarea si
                iteratia sunt cheia.
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
                Integreaza AI in strategia ta
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
                Ai nevoie de o strategie digitala care integreaza AI acolo unde
                conteaza. Noi te ajutam sa identifici oportunitatile, sa alegi
                tool-urile potrivite si sa masori rezultatele.
              </p>
              <Link href="/strategie-digitala-ro/" className="btn-primary">
                Cere o strategie digitala <ArrowRight size={16} />
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
                      color: "#14b8a6",
                    }}
                  >
                    SEO
                  </span>
                  <h3
                    className="font-bold text-white"
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.3,
                      margin: "10px 0",
                    }}
                  >
                    GEO: Cum sa-ti optimizezi afacerea pentru AI Search
                  </h3>
                  <Link
                    href="/blog/geo-optimizare-ai-search/"
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
                    Email Marketing pentru E-commerce: Cum sa cresti vanzarile
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
              </div>
            </div>
          </FadeInSection>
        </article>
      </main>
      <Footer locale="ro" />
    </>
  );
}
