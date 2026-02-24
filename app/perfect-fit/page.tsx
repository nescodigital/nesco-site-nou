import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rezerva apelul de diagnostic — Nesco Digital',
  robots: {
    index: false,
    follow: false,
  },
};

export default function PerfectFitPage() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #0a0d0f;
          --bg2: #111518;
          --bg3: #181d21;
          --border: #1e2428;
          --accent: #56db84;
          --text: #e8eaeb;
          --muted: #6b7880;
          --card-bg: #13181c;
        }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* Background handled by global ArrowPattern component */

        .wrapper {
          position: relative;
          z-index: 1;
          max-width: 720px;
          margin: 0 auto;
          padding: 60px 24px 120px;
        }

        .logo {
          margin-bottom: 60px;
          display: flex;
          align-items: center;
        }
        .logo img {
          height: 28px;
          width: auto;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: rgba(86,219,132,0.1);
          color: var(--accent);
          border: 1px solid rgba(86,219,132,0.2);
          margin-bottom: 28px;
        }

        .headline {
          font-family: 'Satoshi', sans-serif;
          font-size: clamp(28px, 5vw, 44px);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 20px;
          color: var(--text);
        }
        .headline em { color: var(--accent); font-style: normal; }

        .subtext {
          font-size: 17px;
          line-height: 1.7;
          color: #9aaab3;
          margin-bottom: 48px;
          max-width: 560px;
        }

        .cards-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 40px;
        }

        @media (max-width: 560px) {
          .cards-row { grid-template-columns: 1fr; }
        }

        .card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 24px;
        }

        .card-icon {
          font-size: 24px;
          margin-bottom: 12px;
        }

        .card-title {
          font-family: 'Satoshi', sans-serif;
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 6px;
          color: var(--text);
        }

        .card-desc {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.5;
        }

        .divider {
          height: 1px;
          background: var(--border);
          margin: 40px 0;
        }

        .section-label {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
          font-weight: 600;
          margin-bottom: 20px;
        }

        /* TIDYCAL EMBED */
        .tidycal-wrap {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          min-height: 650px;
        }

        .booking-options {
          display: flex;
          gap: 12px;
          margin-bottom: 24px;
        }

        @media (max-width: 480px) {
          .booking-options { flex-direction: column; }
        }

        .booking-tab {
          flex: 1;
          padding: 16px 20px;
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s;
          text-align: left;
        }
        .booking-tab:hover { border-color: rgba(86,219,132,0.3); }
        .booking-tab.active { border-color: var(--accent); background: rgba(86,219,132,0.05); }

        .booking-tab-title {
          font-family: 'Satoshi', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 4px;
        }
        .booking-tab-desc {
          font-size: 12px;
          color: var(--muted);
          line-height: 1.4;
        }
        .booking-tab-price {
          font-family: 'Satoshi', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: var(--accent);
          margin-top: 6px;
        }

        .trust-row {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-top: 28px;
          flex-wrap: wrap;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--muted);
        }

        .trust-item span:first-child {
          color: var(--accent);
          font-size: 16px;
        }
      `}</style>

      <div className="wrapper">
        <div className="logo">
          <img src="https://i0.wp.com/nescodigital.com/wp-content/uploads/2024/09/nescodigital-logo-invert.png" alt="Nesco Digital" />
        </div>

        <div className="badge">{'\u2713'} Ești calificat — loc rezervat</div>

        <h1 className="headline">
          Alege un slot pentru<br />
          <em>apelul de diagnostic.</em>
        </h1>

        <p className="subtext">
          30 de minute. Fără pitch, fără presiune. Identificăm împreună TOP 3 scurgeri
          din businessul tău și îți spunem concret ce s-ar putea schimba în 6 săptămâni.
        </p>

        <div className="cards-row">
          <div className="card">
            <div className="card-icon">{'\uD83D\uDD0D'}</div>
            <div className="card-title">Audit live</div>
            <div className="card-desc">Analizăm situația ta specifică — nu un template generic</div>
          </div>
          <div className="card">
            <div className="card-icon">{'\u23F1'}</div>
            <div className="card-title">30 minute</div>
            <div className="card-desc">Concentrat, eficient, fără pierdere de timp</div>
          </div>
          <div className="card">
            <div className="card-icon">{'\uD83D\uDCAC'}</div>
            <div className="card-title">Răspuns sincer</div>
            <div className="card-desc">Dacă nu găsim nimic relevant, îți spunem direct</div>
          </div>
          <div className="card">
            <div className="card-icon">{'\uD83D\uDEAB'}</div>
            <div className="card-title">Zero obligații</div>
            <div className="card-desc">Apelul e gratuit și fără angajament de continuare</div>
          </div>
        </div>

        <div className="divider" />

        <div className="section-label">Alege tipul de apel</div>

        <div className="booking-options">
          <a href="#diagnostic" className="booking-tab active" style={{ textDecoration: 'none' }}>
            <div className="booking-tab-title">Diagnostic gratuit</div>
            <div className="booking-tab-desc">Identificăm scurgerile de venituri și îți dăm un plan concret</div>
            <div className="booking-tab-price">30 min · Gratuit</div>
          </a>
          <a href="https://tidycal.com/1y0qx6o/60-minute-meeting" target="_blank" rel="noopener noreferrer" className="booking-tab" style={{ textDecoration: 'none' }}>
            <div className="booking-tab-title">Sesiune premium</div>
            <div className="booking-tab-desc">Analiză detaliată + plan de acțiune complet pentru businessul tău</div>
            <div className="booking-tab-price">60 min · Plătit</div>
          </a>
        </div>

        <div className="section-label">Alege data și ora</div>

        <div className="tidycal-wrap">
          <iframe
            src="https://tidycal.com/1y0qx6o/30-minute-meeting"
            style={{ width: '100%', height: '650px', border: 'none', borderRadius: '12px' }}
            title="Programează apelul de diagnostic"
          />
        </div>

        <div className="trust-row">
          <div className="trust-item">
            <span>{'\uD83D\uDD12'}</span>
            <span>Datele tale sunt în siguranță</span>
          </div>
          <div className="trust-item">
            <span>{'\u2713'}</span>
            <span>Confirmare instantanee pe email</span>
          </div>
          <div className="trust-item">
            <span>{'\u26A1'}</span>
            <span>Max 3 clienți activi simultan</span>
          </div>
        </div>
      </div>
    </>
  );
}
