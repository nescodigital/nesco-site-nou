import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unde se pierd banii — Ghid gratuit — Nesco Digital',
  description:
    '7 scurgeri de venituri pe care nu le vezi din interior — și cum le identifici înainte să te coste și mai mult. Ghid gratuit de la Nesco Digital.',
};

export default function GhidGratuit() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg: #0a0d0f; --bg2: #111518; --bg3: #13181c; --border: #1e2428;
          --accent: #56db84; --text: #e8eaeb; --muted: #6b7880; --card: #111518;
        }
        body { background: var(--bg); color: var(--text); font-family: 'Inter', sans-serif; line-height: 1.6; }
        /* Background handled by global ArrowPattern component */
        .ghid-page { position: relative; z-index: 1; max-width: 760px; margin: 0 auto; padding: 0 24px 80px; }
        .ghid-cover { min-height: 100vh; display: flex; flex-direction: column; justify-content: center; padding: 80px 0 60px; border-bottom: 1px solid var(--border); margin-bottom: 80px; }
        .ghid-cover-tag { display: inline-flex; align-items: center; gap: 8px; background: rgba(86,219,132,0.08); border: 1px solid rgba(86,219,132,0.15); color: var(--accent); padding: 6px 14px; border-radius: 100px; font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 32px; width: fit-content; }
        .ghid-cover-title { font-family: 'Satoshi', sans-serif; font-size: clamp(36px, 7vw, 64px); font-weight: 800; line-height: 1.1; margin-bottom: 24px; letter-spacing: -1px; }
        .ghid-cover-title em { color: var(--accent); font-style: normal; display: block; }
        .ghid-cover-sub { font-size: 18px; color: var(--muted); max-width: 520px; line-height: 1.6; margin-bottom: 48px; }
        .ghid-cover-stats { display: flex; gap: 40px; flex-wrap: wrap; }
        .ghid-stat { display: flex; flex-direction: column; gap: 4px; }
        .ghid-stat-num { font-family: 'Satoshi', sans-serif; font-size: 28px; font-weight: 800; color: var(--accent); }
        .ghid-stat-label { font-size: 13px; color: var(--muted); text-transform: uppercase; letter-spacing: 0.08em; }
        .ghid-logo { margin-bottom: 60px; display: flex; align-items: center; }
        .ghid-logo img { height: 28px; width: auto; }
        .ghid-intro { background: var(--bg3); border: 1px solid var(--border); border-left: 3px solid var(--accent); border-radius: 10px; padding: 32px; margin-bottom: 72px; }
        .ghid-intro p { font-size: 16px; line-height: 1.8; color: #9aaab3; }
        .ghid-intro strong { color: var(--text); }
        .ghid-leak { margin-bottom: 72px; padding-bottom: 72px; border-bottom: 1px solid var(--border); }
        .ghid-leak:last-of-type { border-bottom: none; }
        .ghid-leak-header { display: flex; align-items: flex-start; gap: 20px; margin-bottom: 28px; }
        .ghid-leak-number { font-family: 'Satoshi', sans-serif; font-size: 56px; font-weight: 800; color: rgba(86,219,132,0.12); line-height: 1; flex-shrink: 0; width: 72px; text-align: center; }
        .ghid-leak-title-wrap {}
        .ghid-leak-label { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent); font-weight: 600; margin-bottom: 6px; }
        .ghid-leak-title { font-family: 'Satoshi', sans-serif; font-size: clamp(20px, 3vw, 26px); font-weight: 700; line-height: 1.2; color: var(--text); }
        .ghid-leak-body { font-size: 15px; line-height: 1.8; color: #9aaab3; margin-bottom: 24px; }
        .ghid-leak-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 24px; }
        @media (max-width: 600px) { .ghid-leak-grid { grid-template-columns: 1fr; } .ghid-cover-stats { gap: 24px; } }
        .ghid-leak-card { background: var(--bg3); border: 1px solid var(--border); border-radius: 8px; padding: 16px; }
        .ghid-leak-card-title { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px; }
        .ghid-leak-card-title.ghid-red { color: #ff6b6b; } .ghid-leak-card-title.ghid-yellow { color: #ffa500; } .ghid-leak-card-title.ghid-green { color: var(--accent); }
        .ghid-alarm-box { background: rgba(255,107,107,0.06); border: 1px solid rgba(255,107,107,0.15); border-radius: 8px; padding: 16px 20px; display: flex; align-items: flex-start; gap: 12px; margin-bottom: 16px; }
        .ghid-alarm-icon { font-size: 18px; flex-shrink: 0; margin-top: 1px; }
        .ghid-alarm-text { font-size: 14px; color: #ff9999; line-height: 1.5; }
        .ghid-alarm-text strong { color: #ffb3b3; }
        .ghid-action-box { background: rgba(86,219,132,0.04); border: 1px solid rgba(86,219,132,0.12); border-radius: 8px; padding: 16px 20px; display: flex; align-items: flex-start; gap: 12px; }
        .ghid-action-text { font-size: 14px; color: #7ec9a0; line-height: 1.5; }
        .ghid-action-text strong { color: var(--accent); }
        .ghid-cta-section { background: var(--bg3); border: 1px solid var(--border); border-radius: 16px; padding: 48px 40px; text-align: center; margin-top: 80px; position: relative; overflow: hidden; }
        .ghid-cta-section::before { content: ''; position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 200px; height: 1px; background: linear-gradient(90deg, transparent, var(--accent), transparent); }
        .ghid-cta-title { font-family: 'Satoshi', sans-serif; font-size: clamp(22px, 4vw, 32px); font-weight: 800; margin-bottom: 16px; line-height: 1.2; }
        .ghid-cta-title em { color: var(--accent); font-style: normal; }
        .ghid-cta-sub { font-size: 16px; color: var(--muted); max-width: 480px; margin: 0 auto 32px; line-height: 1.6; }
        .ghid-cta-btn { display: inline-flex; align-items: center; gap: 10px; background: var(--accent); color: #0a0d0f; padding: 16px 32px; border-radius: 10px; font-family: 'Satoshi', sans-serif; font-size: 16px; font-weight: 700; text-decoration: none; transition: all 0.2s; cursor: pointer; border: none; }
        .ghid-cta-btn:hover { background: #6ee89a; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(86,219,132,0.2); }
        .ghid-cta-note { font-size: 13px; color: var(--muted); margin-top: 16px; }
        @media print { body::before { display: none; } .ghid-cta-btn { background: #56db84 !important; } .ghid-cover { min-height: auto; page-break-after: always; } .ghid-leak { page-break-inside: avoid; } }
      `}</style>

      <div className="ghid-page">
        <div className="ghid-cover">
          <div className="ghid-logo">
            <img
              src="https://i0.wp.com/nescodigital.com/wp-content/uploads/2024/09/nescodigital-logo-invert.png"
              alt="Nesco Digital"
            />
          </div>
          <div className="ghid-cover-tag">Ghid gratuit &middot; 2026</div>
          <h1 className="ghid-cover-title">
            Unde se pierd banii
            <em>în businessurile de 500k+/lună</em>
          </h1>
          <p className="ghid-cover-sub">
            7 scurgeri de venituri pe care nu le vezi din interior — și cum le
            identifici înainte să te coste și mai mult.
          </p>
          <div className="ghid-cover-stats">
            <div className="ghid-stat">
              <div className="ghid-stat-num">7</div>
              <div className="ghid-stat-label">Scurgeri analizate</div>
            </div>
            <div className="ghid-stat">
              <div className="ghid-stat-num">10-20%</div>
              <div className="ghid-stat-label">Venit pierdut în medie</div>
            </div>
            <div className="ghid-stat">
              <div className="ghid-stat-num">6 spt</div>
              <div className="ghid-stat-label">Pentru a le repara</div>
            </div>
          </div>
        </div>

        <div className="ghid-intro">
          <p>
            Dacă businessul tău face 500k+/lună și ai senzația că lași bani pe
            masă — ai dreptate. După ce am intrat în zeci de businessuri la
            nivelul tău, am găsit același pattern de fiecare dată:{' '}
            <strong>problema nu e efortul, ci sistemul.</strong>
            <br />
            <br />
            Acest ghid îți arată exact unde să cauți. Nu e teorie. E o listă cu
            semnalele de alarmă exacte și ce se face concret pentru a recupera
            banii. Citește-l cu ochii pe propriile cifre.
          </p>
        </div>

        {/* SCURGEREA 1 */}
        <div className="ghid-leak">
          <div className="ghid-leak-header">
            <div className="ghid-leak-number">01</div>
            <div className="ghid-leak-title-wrap">
              <div className="ghid-leak-label">Scurgerea #1</div>
              <h2 className="ghid-leak-title">
                Funnel-ul care arată bine dar convertește prost
              </h2>
            </div>
          </div>
          <p className="ghid-leak-body">
            Ai trafic. Ai o pagină de produs sau serviciu care &quot;arată
            bine&quot;. Dar rata de conversie e sub 1.5% și nu înțelegi de ce.
            Vizitatorii vin, se uită și pleacă. În fiecare zi.
          </p>
          <div className="ghid-leak-grid">
            <div className="ghid-leak-card">
              <div className="ghid-leak-card-title ghid-red">
                De ce se întâmplă
              </div>
              <p>
                Mesajul de pe pagină nu se potrivește cu audiența care ajunge
                acolo. Oferta nu e clară. CTA-ul e slab sau prea general.
              </p>
            </div>
            <div className="ghid-leak-card">
              <div className="ghid-leak-card-title ghid-yellow">
                Impact financiar
              </div>
              <p>
                La 100k vizitatori/lună, fiecare 0.5% în rata de conversie =
                sute de comenzi pierdute lunar.
              </p>
            </div>
            <div className="ghid-leak-card">
              <div className="ghid-leak-card-title ghid-green">Ce se face</div>
              <p>
                Audit de mesaj, analiză heatmap, A/B test pe headline și CTA
                principal. Rezultate vizibile în 2-3 săptămâni.
              </p>
            </div>
          </div>
          <div className="ghid-alarm-box">
            <div className="ghid-alarm-icon">{'⚠'}</div>
            <div className="ghid-alarm-text">
              <strong>Semnal de alarmă:</strong> Traficul crește lunar dar
              numărul de conversii rămâne constant sau scade. Rata de bounce
              peste 65% pe paginile principale.
            </div>
          </div>
          <div className="ghid-action-box">
            <div className="ghid-alarm-icon">{'→'}</div>
            <div className="ghid-action-text">
              <strong>Acțiunea imediată:</strong> Instalează Hotjar sau Microsoft
              Clarity (gratuit) și urmărește înregistrările de sesiuni timp de 7
              zile. Vei vedea exact unde se pierd oamenii.
            </div>
          </div>
        </div>

        {/* SCURGEREA 2 */}
        <div className="ghid-leak">
          <div className="ghid-leak-header">
            <div className="ghid-leak-number">02</div>
            <div className="ghid-leak-title-wrap">
              <div className="ghid-leak-label">Scurgerea #2</div>
              <h2 className="ghid-leak-title">Lista de email care doarme</h2>
            </div>
          </div>
          <p className="ghid-leak-body">
            Ai mii de abonați în listă. Trimiți ocazional. Revenue din email e
            sub 5% din total. În realitate, o listă de email bine construită ar
            trebui să genereze 15-25% din venitul total al unui business digital.
          </p>
          <div className="ghid-leak-grid">
            <div className="ghid-leak-card">
              <div className="ghid-leak-card-title ghid-red">
                De ce se întâmplă
              </div>
              <p>
                Secvențe prea generice, trimiteri rare și neregulate, zero
                segmentare pe comportament sau interes.
              </p>
            </div>
            <div className="ghid-leak-card">
              <div className="ghid-leak-card-title ghid-yellow">
                Impact financiar
              </div>
              <p>
                La 10.000 abonați activi, diferența între 5% și 20% revenue din
                email = zeci de mii de lei lunar.
              </p>
            </div>
            <div className="ghid-leak-card">
              <div className="ghid-leak-card-title ghid-green">Ce se face</div>
              <p>
                Segmentare pe comportament de cumpărare, fluxuri de abandon coș,
                secvențe de upsell automatizate la 30/60/90 zile.
              </p>
            </div>
          </div>
          <div className="ghid-alarm-box">
            <div className="ghid-alarm-icon">{'⚠'}</div>
            <div className="ghid-alarm-text">
              <strong>Semnal de alarmă:</strong> Open rate sub 20%, click rate
              sub 1.5%, nicio automatizare de revenue activă în platforma de
              email.
            </div>
          </div>
          <div className="ghid-action-box">
            <div className="ghid-alarm-icon">{'→'}</div>
            <div className="ghid-action-text">
              <strong>Acțiunea imediată:</strong> Verifică câte fluxuri automate
              active ai acum. Dacă răspunsul e zero sau unul — ai găsit o
              scurgere imediată.
            </div>
          </div>
        </div>

        {/* SCURGEREA 3 */}
        <div className="ghid-leak">
          <div className="ghid-leak-header">
            <div className="ghid-leak-number">03</div>
            <div className="ghid-leak-title-wrap">
              <div className="ghid-leak-label">Scurgerea #3</div>
              <h2 className="ghid-leak-title">
                Reclame care aduc trafic, nu profit
              </h2>
            </div>
          </div>
          <p className="ghid-leak-body">
            ROAS-ul arată ok în dashboard. Dar când scazi costurile reale —
            produse, livrare, retur, support, comisioane — profitul net e mult
            mai mic decât pare. Scalezi bugetul și scalezi costurile, nu
            profitul.
          </p>
          <div className="ghid-leak-grid">
            <div className="ghid-leak-card">
              <div className="ghid-leak-card-title ghid-red">
                De ce se întâmplă
              </div>
              <p>
                Optimizezi pentru conversii ieftine, nu pentru clienți
                profitabili. LTV nu e integrat în strategia de bidding.
              </p>
            </div>
            <div className="ghid-leak-card">
              <div className="ghid-leak-card-title ghid-yellow">
                Impact financiar
              </div>
              <p>
                Un ROAS de 3x cu marjă de 20% înseamnă de fapt pierdere netă
                după toate costurile reale.
              </p>
            </div>
            <div className="ghid-leak-card">
              <div className="ghid-leak-card-title ghid-green">Ce se face</div>
              <p>
                Calculează ROAS-ul minim profitabil real. Exclude audiențele cu
                LTV scăzut. Optimizează pe profit net, nu conversii brute.
              </p>
            </div>
          </div>
          <div className="ghid-alarm-box">
            <div className="ghid-alarm-icon">{'⚠'}</div>
            <div className="ghid-alarm-text">
              <strong>Semnal de alarmă:</strong> Revenue crește cu 30% când
              scalezi bugetul dar profitul net crește cu sub 10%. Rata de retur
              peste 15%.
            </div>
          </div>
          <div className="ghid-action-box">
            <div className="ghid-alarm-icon">{'→'}</div>
            <div className="ghid-action-text">
              <strong>Acțiunea imediată:</strong> Calculează MER (Marketing
              Efficiency Ratio) real: revenue net / total cheltuieli marketing.
              Sub 3x la marje de 30%+ e o problemă.
            </div>
          </div>
        </div>

        {/* SCURGEREA 4 */}
        <div className="ghid-leak">
          <div className="ghid-leak-header">
            <div className="ghid-leak-number">04</div>
            <div className="ghid-leak-title-wrap">
              <div className="ghid-leak-label">Scurgerea #4</div>
              <h2 className="ghid-leak-title">
                Clienți neprofitabili amestecați cu cei buni
              </h2>
            </div>
          </div>
          <p className="ghid-leak-body">
            20% din clienții tăi generează 80% din profitul tău. Restul de 80%
            consumă resurse, support, timp și energie — fără să acopere costul
            real al servirii lor. Problema e că nu știi care sunt care.
          </p>
          <div className="ghid-leak-grid">
            <div className="ghid-leak-card">
              <div className="ghid-leak-card-title ghid-red">
                De ce se întâmplă
              </div>
              <p>
                Nu există scoring de clienți. Accepți toți clienții care pot
                plăti fără să califici profitabilitatea pe termen lung.
              </p>
            </div>
            <div className="ghid-leak-card">
              <div className="ghid-leak-card-title ghid-yellow">
                Impact financiar
              </div>
              <p>
                Un client cu retur frecvent, suport intens și LTV scăzut poate
                costa mai mult decât aduce — fără să știi.
              </p>
            </div>
            <div className="ghid-leak-card">
              <div className="ghid-leak-card-title ghid-green">Ce se face</div>
              <p>
                Analiză RFM (Recency, Frequency, Monetary), scoring de clienți
                în CRM, targetare exclusivă pe profilul profitabil în reclame.
              </p>
            </div>
          </div>
          <div className="ghid-alarm-box">
            <div className="ghid-alarm-icon">{'⚠'}</div>
            <div className="ghid-alarm-text">
              <strong>Semnal de alarmă:</strong> Echipa de support
              supraîncărcată deși businessul nu a crescut dramatic. Rata de retur
              sau chargeback în creștere.
            </div>
          </div>
          <div className="ghid-action-box">
            <div className="ghid-alarm-icon">{'→'}</div>
            <div className="ghid-action-text">
              <strong>Acțiunea imediată:</strong> Sortează clienții după LTV în
              ultimele 12 luni. Identifică top 20% și analizează ce au în comun —
              asta e profilul pe care trebuie să îl targetezi în reclame.
            </div>
          </div>
        </div>

        {/* SCURGEREA 5 */}
        <div className="ghid-leak">
          <div className="ghid-leak-header">
            <div className="ghid-leak-number">05</div>
            <div className="ghid-leak-title-wrap">
              <div className="ghid-leak-label">Scurgerea #5</div>
              <h2 className="ghid-leak-title">
                Upsell și cross-sell inexistente
              </h2>
            </div>
          </div>
          <p className="ghid-leak-body">
            Clienții cumpără o dată și dispar. Nu pentru că nu ar cumpăra din nou
            — ci pentru că nu primesc niciodată o ofertă potrivită la momentul
            potrivit. LTV-ul tău e aproape egal cu valoarea primei comenzi.
          </p>
          <div className="ghid-leak-grid">
            <div className="ghid-leak-card">
              <div className="ghid-leak-card-title ghid-red">
                De ce se întâmplă
              </div>
              <p>
                Nu există secvențe post-cumpărare, oferte de follow-up sau
                programe de fidelizare active.
              </p>
            </div>
            <div className="ghid-leak-card">
              <div className="ghid-leak-card-title ghid-yellow">
                Impact financiar
              </div>
              <p>
                Creșterea LTV cu 20% fără niciun cost de achiziție nou poate
                dubla profitabilitatea unui business.
              </p>
            </div>
            <div className="ghid-leak-card">
              <div className="ghid-leak-card-title ghid-green">Ce se face</div>
              <p>
                Secvență post-cumpărare de 90 zile, ofertă de upsell în pagina
                de confirmare, program de referral cu mecanism clar.
              </p>
            </div>
          </div>
          <div className="ghid-alarm-box">
            <div className="ghid-alarm-icon">{'⚠'}</div>
            <div className="ghid-alarm-text">
              <strong>Semnal de alarmă:</strong> Rata de achiziție repetată sub
              20% la e-commerce. Zero revenue din clienți existenți în luna
              curentă.
            </div>
          </div>
          <div className="ghid-action-box">
            <div className="ghid-alarm-icon">{'→'}</div>
            <div className="ghid-action-text">
              <strong>Acțiunea imediată:</strong> Verifică ce email primește un
              client în 24 ore după cumpărare. Dacă e doar confirmarea de
              comandă — ai o oportunitate imediată de upsell neexploatată.
            </div>
          </div>
        </div>

        {/* SCURGEREA 6 */}
        <div className="ghid-leak">
          <div className="ghid-leak-header">
            <div className="ghid-leak-number">06</div>
            <div className="ghid-leak-title-wrap">
              <div className="ghid-leak-label">Scurgerea #6</div>
              <h2 className="ghid-leak-title">
                Procesul de vânzare fără structură
              </h2>
            </div>
          </div>
          <p className="ghid-leak-body">
            Leadurile intră, unele se închid, altele dispar. Nu știi exact cât
            durează ciclul de vânzare, unde se pierd oamenii și de ce unii
            cumpără iar alții nu. Procesul există în capul unui om, nu într-un
            sistem.
          </p>
          <div className="ghid-leak-grid">
            <div className="ghid-leak-card">
              <div className="ghid-leak-card-title ghid-red">
                De ce se întâmplă
              </div>
              <p>
                Pipeline nestructurat, follow-up manual și inconsistent, lipsa
                unui script standardizat de vânzare.
              </p>
            </div>
            <div className="ghid-leak-card">
              <div className="ghid-leak-card-title ghid-yellow">
                Impact financiar
              </div>
              <p>
                O creștere a ratei de închidere de la 20% la 30% pe același
                volum de leaduri = 50% mai mult revenue fără costuri noi.
              </p>
            </div>
            <div className="ghid-leak-card">
              <div className="ghid-leak-card-title ghid-green">Ce se face</div>
              <p>
                Pipeline structurat în CRM, script standardizat, follow-up
                automatizat la 24h/72h/7 zile după contact inițial.
              </p>
            </div>
          </div>
          <div className="ghid-alarm-box">
            <div className="ghid-alarm-icon">{'⚠'}</div>
            <div className="ghid-alarm-text">
              <strong>Semnal de alarmă:</strong> Rata de închidere inconsistentă
              lună de lună. Leaduri care &quot;dispar&quot; fără un răspuns final
              clar.
            </div>
          </div>
          <div className="ghid-action-box">
            <div className="ghid-alarm-icon">{'→'}</div>
            <div className="ghid-action-text">
              <strong>Acțiunea imediată:</strong> Numără câte leaduri ai primit
              luna trecută și câte s-au închis. Dacă nu știi răspunsul exact — nu
              ai un sistem de vânzare, ai un proces informal.
            </div>
          </div>
        </div>

        {/* SCURGEREA 7 */}
        <div className="ghid-leak">
          <div className="ghid-leak-header">
            <div className="ghid-leak-number">07</div>
            <div className="ghid-leak-title-wrap">
              <div className="ghid-leak-label">Scurgerea #7</div>
              <h2 className="ghid-leak-title">KPI-uri care nu spun nimic</h2>
            </div>
          </div>
          <p className="ghid-leak-body">
            Toate metricile sunt &quot;green&quot; în rapoarte. Trafic în
            creștere, ROAS ok, comenzi stabile. Dar profitul stagnează. Problema
            e că măsori activitate, nu sănătate reală a businessului.
          </p>
          <div className="ghid-leak-grid">
            <div className="ghid-leak-card">
              <div className="ghid-leak-card-title ghid-red">
                De ce se întâmplă
              </div>
              <p>
                Dashboard-urile sunt construite să arate bine, nu să arate
                adevărul. Metricile de vanitate maschează problemele reale.
              </p>
            </div>
            <div className="ghid-leak-card">
              <div className="ghid-leak-card-title ghid-yellow">
                Impact financiar
              </div>
              <p>
                Fără vizibilitate pe metricile care contează, iei decizii pe
                date incomplete — și investești în direcții greșite.
              </p>
            </div>
            <div className="ghid-leak-card">
              <div className="ghid-leak-card-title ghid-green">Ce se face</div>
              <p>
                Restructurare dashboard pe 6 KPI-uri reale: CAC, LTV, marjă
                netă, rata retenție, CPL calificat, rata închidere.
              </p>
            </div>
          </div>
          <div className="ghid-alarm-box">
            <div className="ghid-alarm-icon">{'⚠'}</div>
            <div className="ghid-alarm-text">
              <strong>Semnal de alarmă:</strong> Nu știi CAC-ul real și LTV-ul
              mediu din memorie. Raportul lunar e generat de agenție și nu îl
              înțelegi complet.
            </div>
          </div>
          <div className="ghid-action-box">
            <div className="ghid-alarm-icon">{'→'}</div>
            <div className="ghid-action-text">
              <strong>Acțiunea imediată:</strong> Răspunde la aceste 3 întrebări
              fără să deschizi un tool: Care e CAC-ul tău real? Care e LTV-ul
              mediu? Care e marja netă luna trecută? Dacă nu știi — ai scurgerea
              #7.
            </div>
          </div>
        </div>

        <div className="ghid-cta-section">
          <h2 className="ghid-cta-title">
            Ai recunoscut
            <br />
            <em>3 sau mai multe scurgeri?</em>
          </h2>
          <p className="ghid-cta-sub">
            Atunci avem o conversație de făcut. Nu un pitch — un diagnostic de
            30 de minute în care îți spunem exact ce vedem în businessul tău și
            cât te costă fiecare scurgere pe lună.
          </p>
          <a
            href="https://tidycal.com/1y0qx6o/30-minute-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="ghid-cta-btn"
          >
            Rezervă diagnosticul gratuit {'→'} 30 min
          </a>
          <p className="ghid-cta-note">
            Fără obligații. Dacă nu găsim nimic — îți spunem sincer.
          </p>
        </div>
      </div>
    </>
  );
}
