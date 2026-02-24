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
                background: "rgba(245,158,11,0.10)",
                color: "#f59e0b",
                border: "1px solid rgba(245,158,11,0.18)",
              }}
            >
              E-commerce
            </span>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "18px",
                marginTop: "16px",
              }}
            >
              19 Februarie 2026 &middot; 9 min citire
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
              De ce iti abandoneaza clientii cosul{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #f59e0b 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                (si cum repari)
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
              70% din cosurile de cumparaturi sunt abandonate. Descopera de ce se
              intampla si cele 8 strategii concrete cu care recuperezi vanzarile
              pierdute.
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
                Imaginea e simpla si dureroasa: un client intra pe site-ul tau,
                navigheaza prin produse, adauga articole in cos, ajunge la
                checkout &mdash; si apoi dispare. Fara comanda, fara plata,
                fara nicio explicatie. Daca ai un magazin online, stii exact
                despre ce vorbim.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Statistic vorbind, <strong style={{ color: "#fff" }}>rata
                medie de abandon cos este de 70&ndash;73%</strong>. Asta
                inseamna ca pentru fiecare 100&euro; in produse adaugate in
                cosuri, peste 70&euro; nu sunt niciodata cumparate. E o
                problema imensa &mdash; dar si o oportunitate la fel de mare.
                Fiecare procent recuperat inseamna venituri suplimentare fara
                sa cheltuiesti un leu in plus pe achizitie de trafic.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                In acest articol iti aratam exact de ce abandoneaza clientii,
                care sunt ratele pe industrii si, cel mai important, cele{" "}
                <strong style={{ color: "#fff" }}>8 strategii concrete</strong>{" "}
                cu care poti recupera o parte semnificativa din aceste vanzari
                pierdute.
              </p>
            </div>
          </FadeInSection>

          {/* Section: De ce abandoneaza clientii cosul */}
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
                De ce abandoneaza clientii cosul?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Inainte de a repara problema, trebuie sa intelegi cauzele.
                Studiile recente arata ca motivele principale sunt
                surprinzator de previzibile &mdash; si in mare parte
                rezolvabile:
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
                  Principalele motive de abandon:
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
                    ["Costuri de livrare neasteptate", "48%"],
                    ["Crearea obligatorie a unui cont", "26%"],
                    ["Proces de checkout prea complex", "22%"],
                    ["Preocupari legate de securitate", "18%"],
                    ["Site lent / incarcare greoaie", "17%"],
                    ["Taxe sau costuri ascunse", "16%"],
                    ["Lipsa optiunii de guest checkout", "14%"],
                    ["Metode de plata limitate", "12%"],
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
                        style={{ color: "#f59e0b", fontWeight: 600 }}
                      >
                        {value}
                      </span>
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
                Observa ca aproape <strong style={{ color: "#fff" }}>jumatate
                din abandonuri</strong> sunt cauzate de costuri de livrare pe
                care clientul nu le anticipa. Transparenta in privinta
                preturilor e primul pas spre recuperare.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Rata de abandon pe industrii */}
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
                Rata de abandon pe industrii
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Rata de abandon variaza semnificativ de la o industrie la alta.
                Iata cum arata cifrele medii:
              </p>
              <div style={{ overflowX: "auto", marginBottom: "24px" }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    minWidth: "440px",
                  }}
                >
                  <thead>
                    <tr>
                      <th
                        style={{
                          background: "#111",
                          color: "#fff",
                          padding: "14px 18px",
                          borderBottom: "2px solid #f59e0b",
                          textAlign: "left",
                          fontSize: "0.875rem",
                          fontWeight: 700,
                        }}
                      >
                        Industrie
                      </th>
                      <th
                        style={{
                          background: "#111",
                          color: "#fff",
                          padding: "14px 18px",
                          borderBottom: "2px solid #f59e0b",
                          textAlign: "left",
                          fontSize: "0.875rem",
                          fontWeight: 700,
                        }}
                      >
                        Rata medie de abandon
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Fashion / imbracaminte", "68%"],
                      ["Electronice", "74%"],
                      ["Casa / mobila", "73%"],
                      ["Beauty / cosmetice", "65%"],
                      ["Alimente / grocery", "61%"],
                      ["Travel / calatorii", "82%"],
                      ["Piese auto", "78%"],
                    ].map(([industry, rate], i) => (
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
                          {industry}
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
                          {rate}
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
                Industria travel conduce detasat cu{" "}
                <strong style={{ color: "#fff" }}>82% rata de abandon</strong>,
                urmata de piese auto (78%) si electronice (74%). Daca activezi
                intr-una din aceste nise, strategiile de recuperare nu sunt
                optionale &mdash; sunt obligatorii.
              </p>
            </div>
          </FadeInSection>

          {/* Section: 8 strategii de recuperare */}
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
                8 strategii concrete de recuperare
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Fiecare strategie de mai jos a fost testata si validata pe
                magazine online reale. Nu sunt teorie &mdash; sunt actiuni pe
                care le poti implementa incepand de azi:
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
                    title: "1. Exit-intent popups cu discount",
                    desc: "Detecteaza momentul in care utilizatorul vrea sa paraseasca pagina si afiseaza un popup cu o oferta limitata (5-10% reducere, transport gratuit). Rata de conversie medie a exit-intent popup-urilor este de 2-4%, ceea ce inseamna vanzari recuperate fara niciun cost de achizitie.",
                  },
                  {
                    title: "2. Email de recuperare (secventa de 3 emailuri)",
                    desc: "Cel mai puternic instrument de recuperare. Trimite automat o secventa de 3 emailuri personalizate dupa abandonul cosului. Primul email la 1 ora, al doilea la 24 de ore, al treilea la 72 de ore. Rata medie de recuperare: 5-15% din cosurile abandonate.",
                  },
                  {
                    title: "3. SMS de recuperare in prima ora",
                    desc: "SMS-ul are o rata de deschidere de peste 90% si functioneaza excelent in prima ora dupa abandon. Un mesaj scurt cu link direct catre cosul salvat poate recupera 2-5% din abandonuri, mai ales pe mobile.",
                  },
                  {
                    title: "4. Retargeting pe Meta si Google",
                    desc: "Afiseaza reclame personalizate cu produsele abandonate pe Facebook, Instagram si Google Display. Retargeting-ul are un ROI de 3-5x fata de campaniile standard, deoarece te adresezi unui public care si-a demonstrat deja intentia de cumparare.",
                  },
                  {
                    title: "5. Simplifica procesul de checkout",
                    desc: "Reducerea numarului de campuri din formular de la 12 la 6-7 poate creste rata de conversie cu 20-30%. Elimina pasii inutili, permite guest checkout, auto-completeaza adresa si ofera o bara de progres vizuala.",
                  },
                  {
                    title: "6. Adauga semnale de incredere",
                    desc: "Recenzii ale clientilor, garantii de returnare, badge-uri de securitate (SSL, plata securizata), logo-urile partenerilor de livrare. Aceste elemente reduc anxietatea de cumparare si pot creste rata de conversie cu 15-25%.",
                  },
                  {
                    title: "7. Praguri de transport gratuit",
                    desc: "Daca valoarea medie a cosului e 150 RON, ofera transport gratuit de la 200 RON. Aceasta strategie nu doar reduce abandonul, ci creste si valoarea medie a comenzii. Mesajul 'Mai adauga 50 RON pentru transport gratuit' este extrem de eficient.",
                  },
                  {
                    title: "8. Optiuni multiple de plata",
                    desc: "Card bancar, PayPal, ramburs, rate fara dobanda (buy-now-pay-later) si portofele digitale. Cu cat oferi mai multe metode de plata, cu atat elimini mai multe bariere. In Romania, rambursul reprezinta inca 30-40% din comenzile online.",
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

          {/* Section: Email flow de recuperare */}
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
                Secventa de email de recuperare &mdash; pas cu pas
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Email-ul de recuperare este cel mai eficient canal de
                re-angajare a clientilor care au abandonat cosul. Iata secventa
                optima de 3 emailuri, cu timing-ul si continutul recomandat:
              </p>

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
                  style={{
                    fontSize: "1rem",
                    marginBottom: "8px",
                  }}
                >
                  Email 1 &mdash; La 1 ora dupa abandon
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  <strong style={{ color: "#fff" }}>Ton:</strong> Prietenos,
                  de reminder. <strong style={{ color: "#fff" }}>Continut:</strong>{" "}
                  Arata produsele din cos cu poze si preturi, un buton mare
                  &bdquo;Finalizeaza comanda&rdquo; si eventual informatii
                  despre politica de retur. Fara discount inca &mdash; multi
                  clienti au abandonat din motive logistice, nu de pret.
                </p>
              </div>
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
                  style={{
                    fontSize: "1rem",
                    marginBottom: "8px",
                  }}
                >
                  Email 2 &mdash; La 24 de ore
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  <strong style={{ color: "#fff" }}>Ton:</strong> Social proof
                  si urgenta. <strong style={{ color: "#fff" }}>Continut:</strong>{" "}
                  Recenzii ale produselor din cos, numarul de persoane care au
                  cumparat recent, stoc limitat (daca e real). Adauga un mesaj
                  de tip &bdquo;Cosul tau expira in curand&rdquo; pentru a crea
                  urgenta.
                </p>
              </div>
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
                    marginBottom: "8px",
                  }}
                >
                  Email 3 &mdash; La 72 de ore
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  <strong style={{ color: "#fff" }}>Ton:</strong> Ultima sansa
                  cu incentive. <strong style={{ color: "#fff" }}>Continut:</strong>{" "}
                  Ofera un discount de 5-10% sau transport gratuit, valabil
                  24 de ore. Acesta e emailul care converteste clientii
                  sensibili la pret si care nu au raspuns la primele doua
                  mesaje.
                </p>
              </div>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Rata medie de recuperare a unei secvente bine optimizate este
                de <strong style={{ color: "#fff" }}>5&ndash;15% din cosurile
                abandonate</strong>. La un volum de 1.000 de cosuri abandonate
                pe luna, asta poate insemna 50&ndash;150 de comenzi recuperate
                &mdash; fara buget suplimentar de reclame.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Calculul impactului */}
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
                Calculul impactului financiar
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Sa punem cifrele intr-un context concret. Presupunem ca
                magazinul tau are urmatoarele metrici:
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
                    ["Cosuri abandonate / luna", "1.000"],
                    ["Valoare medie cos", "100 \u20ac"],
                    ["Venituri pierdute lunar", "100.000 \u20ac"],
                    ["Rata de recuperare (10%)", "100 comenzi"],
                    ["Venituri recuperate", "10.000 \u20ac / luna"],
                    ["Venituri recuperate anual", "120.000 \u20ac / an"],
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
                  <li
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#f59e0b",
                      paddingTop: "6px",
                    }}
                  >
                    <span>Impact total (la 15% recuperare)</span>
                    <span>180.000 &euro; / an</span>
                  </li>
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
                Chiar si cu o rata conservatoare de recuperare de 10%,{" "}
                <strong style={{ color: "#fff" }}>10.000&euro; pe luna in
                venituri suplimentare</strong> pot transforma complet
                profitabilitatea unui magazin online. Si aceste venituri vin
                practic fara cost de achizitie &mdash; clientii erau deja pe
                site-ul tau.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Cele mai performante magazine online investesc serios in
                optimizarea funnel-ului de checkout si in strategii de
                recuperare. Nu e vorba de a atrage mai mult trafic &mdash; ci
                de a converti traficul pe care il ai deja. Acesta e adevarul
                pe care putini il spun: <strong style={{ color: "#fff" }}>cea
                mai ieftina vanzare e cea pe care o recuperezi</strong>.
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
                Recupereaza vanzarile pierdute
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
                Analizam gratuit funnel-ul tau de checkout si iti aratam exact
                unde pierzi clienti. Implementam strategii de recuperare
                testate pe zeci de magazine online.
              </p>
              <Link href="/solutii-cro-ro/" className="btn-primary">
                Vreau o analiza gratuita <ArrowRight size={16} />
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
                    Ghid complet: Rata de conversie in e-commerce
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
                    Cum sa cresti vanzarile in magazinul tau online
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
