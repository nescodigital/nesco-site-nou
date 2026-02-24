'use client';

import { useState, useCallback } from 'react';

export default function AdminStatusPage() {
  const [activePage, setActivePage] = useState('home');

  const showPage = useCallback((id: string) => {
    setActivePage(id);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Inter:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #080b0d;
          --surface: #0f1316;
          --surface2: #141a1e;
          --border: #1c2228;
          --border2: #242c34;
          --accent: #56db84;
          --accent-dim: rgba(86,219,132,0.12);
          --accent-glow: rgba(86,219,132,0.25);
          --blue: #4a9ef1;
          --blue-dim: rgba(74,158,241,0.12);
          --orange: #f1a44a;
          --orange-dim: rgba(241,164,74,0.12);
          --purple: #a44af1;
          --purple-dim: rgba(164,74,241,0.12);
          --red: #f14a4a;
          --red-dim: rgba(241,74,74,0.1);
          --green: #4af1a4;
          --green-dim: rgba(74,241,164,0.1);
          --text: #dce4e8;
          --muted: #5a6872;
          --muted2: #3a4650;
        }

        html { scroll-behavior: smooth; }
        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* NOISE TEXTURE */
        body::before {
          content: '';
          position: fixed; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 0; opacity: 0.4;
        }

        .canvas {
          position: relative; z-index: 1;
          padding: 48px 40px 100px;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* HEADER */
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 60px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--border);
        }

        .logo {
          font-family: 'Satoshi', sans-serif;
          font-weight: 800;
          font-size: 20px;
          letter-spacing: -0.5px;
        }
        .logo em { color: var(--accent); font-style: normal; }

        .header-meta {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .tag {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: var(--muted);
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 5px 10px;
          border-radius: 4px;
          letter-spacing: 0.06em;
        }

        .legend {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: var(--muted);
          font-family: 'DM Mono', monospace;
        }

        .legend-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
        }

        /* MAIN GRID */
        .map-grid {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 2px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
        }

        /* LEFT SPINE */
        .spine {
          background: var(--surface);
          padding: 0;
          display: flex;
          flex-direction: column;
        }

        .spine-header {
          padding: 20px 24px 16px;
          border-bottom: 1px solid var(--border);
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          color: var(--muted);
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .spine-item {
          padding: 14px 24px;
          border-bottom: 1px solid var(--border);
          cursor: pointer;
          transition: all 0.15s;
          display: flex;
          align-items: center;
          gap: 10px;
          position: relative;
        }

        .spine-item:hover { background: var(--surface2); }
        .spine-item.active {
          background: var(--surface2);
        }
        .spine-item.active::after {
          content: '';
          position: absolute;
          right: 0; top: 0; bottom: 0;
          width: 2px;
          background: var(--accent);
        }

        .spine-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .spine-name {
          font-family: 'Satoshi', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: var(--text);
          flex: 1;
        }

        .spine-url {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          color: var(--muted);
        }

        .spine-badge {
          font-size: 9px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 3px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .badge-new { background: rgba(86,219,132,0.15); color: var(--accent); }
        .badge-live { background: rgba(74,241,164,0.12); color: var(--green); }
        .badge-wip { background: rgba(241,164,74,0.12); color: var(--orange); }

        /* RIGHT DETAIL PANEL */
        .detail-panel {
          background: var(--bg);
        }

        .page-detail {
          display: none;
          padding: 32px;
          animation: fadeIn 0.2s ease;
          height: 100%;
        }

        .page-detail.active { display: block; }

        @keyframes fadeIn { from { opacity: 0; transform: translateX(8px); } to { opacity: 1; transform: translateX(0); } }

        .detail-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 28px;
          gap: 16px;
        }

        .detail-title-wrap {}
        .detail-tag { font-family: 'DM Mono', monospace; font-size: 10px; color: var(--muted); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 6px; }
        .detail-title { font-family: 'Satoshi', sans-serif; font-size: 22px; font-weight: 800; color: var(--text); margin-bottom: 4px; }
        .detail-url { font-family: 'DM Mono', monospace; font-size: 12px; color: var(--accent); }

        .detail-status { display: flex; gap: 8px; flex-shrink: 0; flex-wrap: wrap; justify-content: flex-end; }

        .detail-desc {
          font-size: 14px;
          color: var(--muted);
          line-height: 1.7;
          margin-bottom: 28px;
          max-width: 640px;
          border-left: 2px solid var(--border2);
          padding-left: 16px;
        }

        /* SECTIONS GRID */
        .sections-title {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          color: var(--muted);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .sections-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 10px;
          margin-bottom: 28px;
        }

        .section-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 14px;
          transition: border-color 0.15s;
        }

        .section-card:hover { border-color: var(--border2); }

        .section-card-num {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          color: var(--muted2);
          margin-bottom: 6px;
        }

        .section-card-name {
          font-family: 'Satoshi', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 4px;
          line-height: 1.3;
        }

        .section-card-desc {
          font-size: 12px;
          color: var(--muted);
          line-height: 1.4;
        }

        /* PIXEL EVENTS */
        .pixel-title {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          color: var(--muted);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .pixel-grid {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 28px;
        }

        .pixel-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 6px;
          font-size: 12px;
        }

        .pixel-trigger {
          color: var(--muted);
          width: 160px;
          flex-shrink: 0;
          font-size: 11px;
        }

        .pixel-arrow { color: var(--muted2); font-size: 10px; }

        .pixel-event {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          padding: 2px 8px;
          border-radius: 4px;
          flex: 1;
        }

        .pixel-standard { background: var(--blue-dim); color: var(--blue); }
        .pixel-custom { background: var(--purple-dim); color: var(--purple); }
        .pixel-lead { background: var(--accent-dim); color: var(--accent); }

        /* CTA ROW */
        .ctas-title {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          color: var(--muted);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .ctas-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 28px;
        }

        .cta-pill {
          font-size: 12px;
          padding: 7px 12px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          gap: 6px;
          border: 1px solid;
        }

        .cta-primary { background: var(--accent-dim); border-color: rgba(86,219,132,0.2); color: var(--accent); }
        .cta-secondary { background: var(--surface); border-color: var(--border); color: var(--muted); }

        /* CONNECTIONS */
        .connections-title {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          color: var(--muted);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .connections-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .conn-chip {
          font-size: 11px;
          padding: 5px 10px;
          border-radius: 4px;
          font-family: 'DM Mono', monospace;
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--muted);
          cursor: pointer;
          transition: all 0.15s;
        }

        .conn-chip:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        /* OVERVIEW MODE */
        .overview-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          padding: 32px;
        }

        @media (max-width: 900px) {
          .map-grid { grid-template-columns: 1fr; }
          .spine { border-bottom: 1px solid var(--border); }
          .overview-grid { grid-template-columns: repeat(2, 1fr); }
          .canvas { padding: 24px 16px 60px; }
          .header { flex-direction: column; align-items: flex-start; gap: 16px; }
        }

        @media (max-width: 560px) {
          .overview-grid { grid-template-columns: 1fr; }
        }

        .overview-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 20px;
          cursor: pointer;
          transition: all 0.15s;
          position: relative;
          overflow: hidden;
        }

        .overview-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
        }

        .overview-card:hover {
          border-color: var(--border2);
          transform: translateY(-2px);
        }

        .ov-num {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          color: var(--muted2);
          margin-bottom: 8px;
        }

        .ov-name {
          font-family: 'Satoshi', sans-serif;
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 4px;
          color: var(--text);
        }

        .ov-url {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          color: var(--muted);
          margin-bottom: 10px;
        }

        .ov-desc {
          font-size: 12px;
          color: var(--muted);
          line-height: 1.5;
        }

        .ov-tags {
          display: flex;
          gap: 6px;
          margin-top: 12px;
          flex-wrap: wrap;
        }

        .ov-tag {
          font-size: 10px;
          padding: 2px 7px;
          border-radius: 3px;
          font-family: 'DM Mono', monospace;
        }

        /* FLOW DIAGRAM */
        .flow-section {
          margin-top: 40px;
          padding: 32px;
          border-top: 1px solid var(--border);
        }

        .flow-title {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          color: var(--muted);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .flow-row {
          display: flex;
          align-items: center;
          gap: 0;
          flex-wrap: wrap;
          margin-bottom: 16px;
        }

        .flow-node {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 10px 14px;
          font-size: 12px;
          color: var(--text);
          white-space: nowrap;
        }

        .flow-node.accent { background: var(--accent-dim); border-color: rgba(86,219,132,0.25); color: var(--accent); }
        .flow-node.blue { background: var(--blue-dim); border-color: rgba(74,158,241,0.2); color: var(--blue); }
        .flow-node.orange { background: var(--orange-dim); border-color: rgba(241,164,74,0.2); color: var(--orange); }
        .flow-node.green { background: var(--green-dim); border-color: rgba(74,241,164,0.2); color: var(--green); }
        .flow-node.red { background: var(--red-dim); border-color: rgba(241,74,74,0.2); color: var(--red); }

        .flow-arrow {
          padding: 0 8px;
          color: var(--muted2);
          font-size: 14px;
        }

        .flow-label {
          font-size: 10px;
          color: var(--muted);
          font-family: 'DM Mono', monospace;
          padding: 0 6px;
        }

        /* TABS */
        .tabs {
          display: flex;
          gap: 2px;
          margin-bottom: 0;
          padding: 16px 32px 0;
          border-bottom: 1px solid var(--border);
        }

        .tab {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: var(--muted);
          padding: 8px 14px;
          cursor: pointer;
          border-radius: 6px 6px 0 0;
          transition: all 0.15s;
          border: 1px solid transparent;
          border-bottom: none;
          letter-spacing: 0.06em;
          position: relative;
          bottom: -1px;
        }

        .tab:hover { color: var(--text); }
        .tab.active {
          color: var(--accent);
          background: var(--bg);
          border-color: var(--border);
          border-bottom-color: var(--bg);
        }

        .tab-content { display: none; }
        .tab-content.active { display: block; }
      `}} />

      <div className="canvas">

        {/* HEADER */}
        <div className="header">
          <div className="logo">
            <img
              src="https://i0.wp.com/nescodigital.com/wp-content/uploads/2024/09/nescodigital-logo-invert.png"
              alt="Nesco Digital"
              style={{ height: '24px', width: 'auto' }}
            />
            <span style={{ fontWeight: 300, fontSize: '14px', color: 'var(--muted)', marginLeft: '8px' }}>/ sitemap</span>
          </div>
          <div className="header-meta">
            <div className="legend">
              <div className="legend-item"><div className="legend-dot" style={{ background: 'var(--green)' }} />Live</div>
              <div className="legend-item"><div className="legend-dot" style={{ background: 'var(--accent)' }} />New / de adaugat</div>
              <div className="legend-item"><div className="legend-dot" style={{ background: 'var(--orange)' }} />In lucru</div>
              <div className="legend-item"><div className="legend-dot" style={{ background: 'var(--blue)' }} />Pixel event</div>
              <div className="legend-item"><div className="legend-dot" style={{ background: 'var(--purple)' }} />Custom event</div>
            </div>
          </div>
        </div>

        {/* MAIN MAP GRID */}
        <div className="map-grid">

          {/* SPINE */}
          <div className="spine">
            <div className="spine-header">Pagini principale</div>

            <div className={`spine-item${activePage === 'home' ? ' active' : ''}`} onClick={() => showPage('home')}>
              <div className="spine-dot" style={{ background: 'var(--green)' }} />
              <div className="spine-name">Homepage</div>
              <div className="spine-url">/</div>
              <span className="spine-badge badge-live">live</span>
            </div>

            <div className={`spine-item${activePage === 'growth-sprint' ? ' active' : ''}`} onClick={() => showPage('growth-sprint')}>
              <div className="spine-dot" style={{ background: 'var(--green)' }} />
              <div className="spine-name">Growth Sprint</div>
              <div className="spine-url">/growth-sprint</div>
              <span className="spine-badge badge-live">live</span>
            </div>

            <div className={`spine-item${activePage === 'quiz' ? ' active' : ''}`} onClick={() => showPage('quiz')}>
              <div className="spine-dot" style={{ background: 'var(--green)' }} />
              <div className="spine-name">Quiz Calificare</div>
              <div className="spine-url">/quiz</div>
              <span className="spine-badge badge-live">live</span>
            </div>

            <div className={`spine-item${activePage === 'quiz-ecom' ? ' active' : ''}`} onClick={() => showPage('quiz-ecom')}>
              <div className="spine-dot" style={{ background: 'var(--green)' }} />
              <div className="spine-name">Quiz E-commerce</div>
              <div className="spine-url">/quiz-ecommerce</div>
              <span className="spine-badge badge-live">live</span>
            </div>

            <div className={`spine-item${activePage === 'calculator' ? ' active' : ''}`} onClick={() => showPage('calculator')}>
              <div className="spine-dot" style={{ background: 'var(--green)' }} />
              <div className="spine-name">Calculator ROI</div>
              <div className="spine-url">/calculator</div>
              <span className="spine-badge badge-live">live</span>
            </div>

            <div className={`spine-item${activePage === 'ghid' ? ' active' : ''}`} onClick={() => showPage('ghid')}>
              <div className="spine-dot" style={{ background: 'var(--green)' }} />
              <div className="spine-name">Ghid Gratuit</div>
              <div className="spine-url">/ghid-gratuit</div>
              <span className="spine-badge badge-live">live</span>
            </div>

            <div className={`spine-item${activePage === 'perfect-fit' ? ' active' : ''}`} onClick={() => showPage('perfect-fit')}>
              <div className="spine-dot" style={{ background: 'var(--green)' }} />
              <div className="spine-name">Perfect Fit</div>
              <div className="spine-url">/perfect-fit</div>
              <span className="spine-badge badge-live">live</span>
            </div>

            <div className={`spine-item${activePage === 'thank-you' ? ' active' : ''}`} onClick={() => showPage('thank-you')}>
              <div className="spine-dot" style={{ background: 'var(--accent)' }} />
              <div className="spine-name">Thank You Page</div>
              <div className="spine-url">/multumim</div>
              <span className="spine-badge badge-new">new</span>
            </div>

            <div className={`spine-item${activePage === 'portofoliu' ? ' active' : ''}`} onClick={() => showPage('portofoliu')}>
              <div className="spine-dot" style={{ background: 'var(--green)' }} />
              <div className="spine-name">Portofoliu</div>
              <div className="spine-url">/portofoliu</div>
              <span className="spine-badge badge-live">live</span>
            </div>

            <div className={`spine-item${activePage === 'despre' ? ' active' : ''}`} onClick={() => showPage('despre')}>
              <div className="spine-dot" style={{ background: 'var(--green)' }} />
              <div className="spine-name">Despre</div>
              <div className="spine-url">/despre</div>
              <span className="spine-badge badge-live">live</span>
            </div>

            <div className={`spine-item${activePage === 'contact' ? ' active' : ''}`} onClick={() => showPage('contact')}>
              <div className="spine-dot" style={{ background: 'var(--green)' }} />
              <div className="spine-name">Contact</div>
              <div className="spine-url">/contact</div>
              <span className="spine-badge badge-live">live</span>
            </div>

            <div className={`spine-item${activePage === 'resurse' ? ' active' : ''}`} onClick={() => showPage('resurse')}>
              <div className="spine-dot" style={{ background: 'var(--orange)' }} />
              <div className="spine-name">Resurse / Blog</div>
              <div className="spine-url">/resurse</div>
              <span className="spine-badge badge-wip">wip</span>
            </div>

          </div>

          {/* DETAIL PANEL */}
          <div className="detail-panel">

            {/* HOME */}
            <div className={`page-detail${activePage === 'home' ? ' active' : ''}`} id="detail-home">
              <div className="detail-header">
                <div className="detail-title-wrap">
                  <div className="detail-tag">01 / homepage</div>
                  <div className="detail-title">Homepage</div>
                  <div className="detail-url">nescodigital.com/</div>
                </div>
                <div className="detail-status">
                  <span className="spine-badge badge-live">live</span>
                </div>
              </div>
              <div className="detail-desc">Pagina principala a agentiei. Pozitionare: operator fractional de crestere pentru businessuri romanesti cu e-commerce, educatie online si SaaS. Clienti Accor, Siemens, L&apos;Oreal, Douglas.</div>

              <div className="sections-title">Sectiuni pagina</div>
              <div className="sections-grid">
                <div className="section-card"><div className="section-card-num">S01</div><div className="section-card-name">Hero + Headline</div><div className="section-card-desc">Mesaj principal, pozitionare, CTA primar</div></div>
                <div className="section-card"><div className="section-card-num">S02</div><div className="section-card-name">Clienti portofoliu</div><div className="section-card-desc">Accor, Siemens, L&apos;Oreal, Douglas, Burn</div></div>
                <div className="section-card"><div className="section-card-num">S03</div><div className="section-card-name">Rezultate</div><div className="section-card-desc">400%, 5x ROI, 10x — cifre concrete</div></div>
                <div className="section-card"><div className="section-card-num">S04</div><div className="section-card-name">Calculator cost</div><div className="section-card-desc">Specialist intern vs agentie</div></div>
                <div className="section-card"><div className="section-card-num">S05</div><div className="section-card-name">Growth Sprint CTA</div><div className="section-card-desc">Intrare in funnel Growth Sprint</div></div>
                <div className="section-card"><div className="section-card-num">S06</div><div className="section-card-name">Servicii overview</div><div className="section-card-desc">Ce oferim, cum lucram</div></div>
                <div className="section-card" style={{ borderColor: 'rgba(86,219,132,0.2)' }}><div className="section-card-num" style={{ color: 'var(--accent)' }}>S07 ★</div><div className="section-card-name" style={{ color: 'var(--accent)' }}>Quiz CTA — de adaugat</div><div className="section-card-desc">Banner {'→'} /quiz cu mesaj de calificare</div></div>
                <div className="section-card" style={{ borderColor: 'rgba(86,219,132,0.2)' }}><div className="section-card-num" style={{ color: 'var(--accent)' }}>S08 ★</div><div className="section-card-name" style={{ color: 'var(--accent)' }}>Calculator CTA — de adaugat</div><div className="section-card-desc">Banner {'→'} /calculator</div></div>
              </div>

              <div className="ctas-title">CTA-uri principale</div>
              <div className="ctas-row">
                <div className="cta-pill cta-primary">{'→'} /growth-sprint</div>
                <div className="cta-pill cta-primary">{'→'} /quiz (de adaugat)</div>
                <div className="cta-pill cta-secondary">{'→'} /portofoliu</div>
                <div className="cta-pill cta-secondary">{'→'} /contact</div>
              </div>

              <div className="pixel-title">Pixel Meta events</div>
              <div className="pixel-grid">
                <div className="pixel-row"><div className="pixel-trigger">Page load</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-standard">PageView</div></div>
                <div className="pixel-row"><div className="pixel-trigger">Click Growth Sprint</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-custom">ViewContent {'{'}page: &apos;growth_sprint&apos;{'}'}</div></div>
                <div className="pixel-row"><div className="pixel-trigger">Click Quiz CTA</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-custom">ViewContent {'{'}page: &apos;quiz&apos;{'}'}</div></div>
              </div>
            </div>

            {/* GROWTH SPRINT */}
            <div className={`page-detail${activePage === 'growth-sprint' ? ' active' : ''}`} id="detail-growth-sprint">
              <div className="detail-header">
                <div className="detail-title-wrap">
                  <div className="detail-tag">02 / landing page</div>
                  <div className="detail-title">Growth Sprint</div>
                  <div className="detail-url">nescodigital.com/growth-sprint</div>
                </div>
                <div className="detail-status"><span className="spine-badge badge-live">live</span></div>
              </div>
              <div className="detail-desc">Pagina principala de vanzare pentru oferta Growth Sprint. Obiectiv unic: rezerva apel Calendly. Fara pret afisat — pretul se comunica doar in call. Targetat pe business owners 500k+ lei/luna.</div>

              <div className="sections-title">Sectiuni pagina</div>
              <div className="sections-grid">
                <div className="section-card"><div className="section-card-num">S01</div><div className="section-card-name">Hero headline</div><div className="section-card-desc">Problema principala a avatarului, CTA catre Calendly</div></div>
                <div className="section-card"><div className="section-card-num">S02</div><div className="section-card-name">Problema</div><div className="section-card-desc">Descriere durere specifica: stagnare 6-12 luni</div></div>
                <div className="section-card"><div className="section-card-num">S03</div><div className="section-card-name">Ce este Sprint-ul</div><div className="section-card-desc">6 saptamani, 2 faze: audit + implementare</div></div>
                <div className="section-card"><div className="section-card-num">S04</div><div className="section-card-name">Proces detaliat</div><div className="section-card-desc">Saptamana cu saptamana, ce livram</div></div>
                <div className="section-card"><div className="section-card-num">S05</div><div className="section-card-name">Pentru cine e</div><div className="section-card-desc">Calificare explicita a avatarului</div></div>
                <div className="section-card"><div className="section-card-num">S06</div><div className="section-card-name">Rezultate / Case study</div><div className="section-card-desc">+23% revenue net — primul client</div></div>
                <div className="section-card"><div className="section-card-num">S07</div><div className="section-card-name">FAQ + Obiectii</div><div className="section-card-desc">Raspunsuri la obiectiile frecvente</div></div>
                <div className="section-card"><div className="section-card-num">S08</div><div className="section-card-name">CTA final Calendly</div><div className="section-card-desc">Rezerva apel 30 min — fara pret</div></div>
                <div className="section-card" style={{ borderColor: 'rgba(86,219,132,0.2)' }}><div className="section-card-num" style={{ color: 'var(--accent)' }}>S09 ★</div><div className="section-card-name" style={{ color: 'var(--accent)' }}>Quiz exit CTA</div><div className="section-card-desc">Nu esti sigur? Fa diagnosticul {'→'} /quiz</div></div>
              </div>

              <div className="ctas-title">CTA-uri</div>
              <div className="ctas-row">
                <div className="cta-pill cta-primary">{'→'} Calendly (primary)</div>
                <div className="cta-pill cta-secondary">{'→'} /quiz (exit intent)</div>
                <div className="cta-pill cta-secondary">{'→'} /calculator (secundar)</div>
              </div>

              <div className="pixel-title">Pixel Meta events</div>
              <div className="pixel-grid">
                <div className="pixel-row"><div className="pixel-trigger">Page load</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-standard">ViewContent {'{'}content_name: &apos;growth_sprint_lp&apos;{'}'}</div></div>
                <div className="pixel-row"><div className="pixel-trigger">Scroll 50%</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-custom">LPEngaged {'{'}depth: &apos;50pct&apos;{'}'}</div></div>
                <div className="pixel-row"><div className="pixel-trigger">Scroll 100%</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-custom">LPCompleted</div></div>
                <div className="pixel-row"><div className="pixel-trigger">Click Calendly</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-lead">Lead {'{'}source: &apos;growth_sprint_lp&apos;{'}'}</div></div>
                <div className="pixel-row"><div className="pixel-trigger">Calendly booked</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-lead">Schedule {'{'}value: 4500{'}'}</div></div>
              </div>
            </div>

            {/* QUIZ */}
            <div className={`page-detail${activePage === 'quiz' ? ' active' : ''}`} id="detail-quiz">
              <div className="detail-header">
                <div className="detail-title-wrap">
                  <div className="detail-tag">03 / calificare</div>
                  <div className="detail-title">Quiz Calificare Growth Sprint</div>
                  <div className="detail-url">nescodigital.com/quiz</div>
                </div>
                <div className="detail-status"><span className="spine-badge badge-live">live</span></div>
              </div>
              <div className="detail-desc">7 intrebari care califica vizitatorii in 3 segmente: Fit Perfect ({'→'} Calendly direct), Fit Partial ({'→'} lead magnet + nurture), Not a Fit ({'→'} resurse gratuite + eliminare eleganta). Elimina call-urile irosite.</div>

              <div className="sections-title">Intrebari quiz</div>
              <div className="sections-grid">
                <div className="section-card"><div className="section-card-num">Q01</div><div className="section-card-name">Revenue lunar</div><div className="section-card-desc">Sub 50k / 50-200k / 200-500k / 500k+ lei</div></div>
                <div className="section-card"><div className="section-card-num">Q02</div><div className="section-card-name">Tip business</div><div className="section-card-desc">E-com / Educatie / SaaS / Servicii</div></div>
                <div className="section-card"><div className="section-card-num">Q03</div><div className="section-card-name">Problema principala</div><div className="section-card-desc">Marketing / Conversie / Profit / Stagnare</div></div>
                <div className="section-card"><div className="section-card-num">Q04</div><div className="section-card-name">Echipa</div><div className="section-card-desc">Solo / 1-3 / 4-10 / 10+</div></div>
                <div className="section-card"><div className="section-card-num">Q05</div><div className="section-card-name">Ce a incercat</div><div className="section-card-desc">Agentie / Intern / Nimic / Are rezultate</div></div>
                <div className="section-card"><div className="section-card-num">Q06</div><div className="section-card-name">Asteptari</div><div className="section-card-desc">Implementare / Strategie / Retainer / Nesigur</div></div>
                <div className="section-card"><div className="section-card-num">Q07</div><div className="section-card-name">Buget disponibil</div><div className="section-card-desc">Sub 1k / 1-3k / 3-6k / 6k+ EUR</div></div>
              </div>

              <div className="sections-title">Segmente rezultat</div>
              <div className="sections-grid">
                <div className="section-card" style={{ borderColor: 'rgba(86,219,132,0.3)' }}><div className="section-card-num" style={{ color: 'var(--accent)' }}>A — Fit Perfect</div><div className="section-card-name">Scor 65%+</div><div className="section-card-desc">CTA direct Calendly. Mesaj: &quot;Esti exact profilul cu care lucram.&quot;</div></div>
                <div className="section-card" style={{ borderColor: 'rgba(255,165,0,0.3)' }}><div className="section-card-num" style={{ color: 'var(--orange)' }}>B — Partial Fit</div><div className="section-card-name">Scor 38-65%</div><div className="section-card-desc">CTA catre lead magnet. Intra in secventa email nurture.</div></div>
                <div className="section-card" style={{ borderColor: 'rgba(255,107,107,0.3)' }}><div className="section-card-num" style={{ color: 'var(--red)' }}>C — Not a Fit</div><div className="section-card-name">Scor sub 38%</div><div className="section-card-desc">Mesaj onest + resurse alternative. Zero pitch.</div></div>
              </div>

              <div className="pixel-title">Pixel Meta events</div>
              <div className="pixel-grid">
                <div className="pixel-row"><div className="pixel-trigger">Quiz inceput</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-standard">ViewContent {'{'}content_name: &apos;quiz_gs&apos;{'}'}</div></div>
                <div className="pixel-row"><div className="pixel-trigger">Quiz completat</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-standard">CompleteRegistration</div></div>
                <div className="pixel-row"><div className="pixel-trigger">Segment A afisat</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-lead">LeadQualified {'{'}segment: &apos;fit_perfect&apos;{'}'}</div></div>
                <div className="pixel-row"><div className="pixel-trigger">Segment B afisat</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-custom">LeadNurture {'{'}segment: &apos;partial&apos;{'}'}</div></div>
                <div className="pixel-row"><div className="pixel-trigger">Click Calendly</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-lead">Lead {'{'}source: &apos;quiz_segment_a&apos;{'}'}</div></div>
                <div className="pixel-row"><div className="pixel-trigger">Click ghid gratuit</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-custom">LeadMagnetCTA {'{'}source: &apos;quiz_b&apos;{'}'}</div></div>
              </div>
            </div>

            {/* QUIZ ECOM */}
            <div className={`page-detail${activePage === 'quiz-ecom' ? ' active' : ''}`} id="detail-quiz-ecom">
              <div className="detail-header">
                <div className="detail-title-wrap">
                  <div className="detail-tag">04 / diagnostic</div>
                  <div className="detail-title">Quiz Diagnostic E-commerce</div>
                  <div className="detail-url">nescodigital.com/quiz-ecommerce</div>
                </div>
                <div className="detail-status"><span className="spine-badge badge-live">live</span></div>
              </div>
              <div className="detail-desc">8 intrebari cu metrici reale (CR, abandon cos, ROAS, retentie, email %, marja). Genereaza scor 0-100 cu breakdown pe fiecare zona. Targetat specific pe proprietarii de magazine online.</div>

              <div className="sections-title">Metrici evaluate (8 intrebari)</div>
              <div className="sections-grid">
                <div className="section-card"><div className="section-card-num">M01</div><div className="section-card-name">Rata conversie</div><div className="section-card-desc">Benchmark: 1.5-2.5%</div></div>
                <div className="section-card"><div className="section-card-num">M02</div><div className="section-card-name">Abandon cos</div><div className="section-card-desc">Benchmark industrie: 65-72%</div></div>
                <div className="section-card"><div className="section-card-num">M03</div><div className="section-card-name">Revenue email</div><div className="section-card-desc">Potential: 15-25% din total</div></div>
                <div className="section-card"><div className="section-card-num">M04</div><div className="section-card-name">ROAS reclame</div><div className="section-card-desc">Minim profitabil: 3x+</div></div>
                <div className="section-card"><div className="section-card-num">M05</div><div className="section-card-name">Retentie clienti</div><div className="section-card-desc">Benchmark bun: 25-35%</div></div>
                <div className="section-card"><div className="section-card-num">M06</div><div className="section-card-name">Automatizari email</div><div className="section-card-desc">Abandon / Welcome / Post-purchase / Win-back</div></div>
                <div className="section-card"><div className="section-card-num">M07</div><div className="section-card-name">Marja neta</div><div className="section-card-desc">Sanatos: 12%+</div></div>
                <div className="section-card"><div className="section-card-num">M08</div><div className="section-card-name">Revenue lunar</div><div className="section-card-desc">Calificare finala</div></div>
              </div>

              <div className="sections-title">Segmente scor</div>
              <div className="sections-grid">
                <div className="section-card" style={{ borderColor: 'rgba(255,107,107,0.3)' }}><div className="section-card-num" style={{ color: 'var(--red)' }}>0-40 — Critic</div><div className="section-card-name">Interventie urgenta</div><div className="section-card-desc">CTA: audit urgent 48h</div></div>
                <div className="section-card" style={{ borderColor: 'rgba(255,165,0,0.3)' }}><div className="section-card-num" style={{ color: 'var(--orange)' }}>40-65 — Atentie</div><div className="section-card-name">Scurgeri vizibile</div><div className="section-card-desc">CTA: Growth Sprint</div></div>
                <div className="section-card" style={{ borderColor: 'rgba(74,241,164,0.3)' }}><div className="section-card-num" style={{ color: 'var(--green)' }}>65-80 — Bun</div><div className="section-card-name">Loc de optimizare</div><div className="section-card-desc">CTA: optimizare targetata</div></div>
                <div className="section-card" style={{ borderColor: 'rgba(86,219,132,0.3)' }}><div className="section-card-num" style={{ color: 'var(--accent)' }}>80+ — Excelent</div><div className="section-card-name">Scalare</div><div className="section-card-desc">CTA: scalare inteligenta</div></div>
              </div>

              <div className="pixel-title">Pixel Meta events</div>
              <div className="pixel-grid">
                <div className="pixel-row"><div className="pixel-trigger">Quiz inceput</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-standard">ViewContent {'{'}content_name: &apos;quiz_ecom&apos;{'}'}</div></div>
                <div className="pixel-row"><div className="pixel-trigger">Quiz completat</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-standard">CompleteRegistration {'{'}type: &apos;ecom&apos;{'}'}</div></div>
                <div className="pixel-row"><div className="pixel-trigger">Scor 0-40</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-custom">EcomScoreCritical {'{'}score: N{'}'}</div></div>
                <div className="pixel-row"><div className="pixel-trigger">Scor 40-65</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-custom">EcomScoreWarning {'{'}score: N{'}'}</div></div>
                <div className="pixel-row"><div className="pixel-trigger">Click Calendly</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-lead">Lead {'{'}source: &apos;ecom_quiz&apos;{'}'}</div></div>
              </div>
            </div>

            {/* CALCULATOR */}
            <div className={`page-detail${activePage === 'calculator' ? ' active' : ''}`} id="detail-calculator">
              <div className="detail-header">
                <div className="detail-title-wrap">
                  <div className="detail-tag">05 / tool interactiv</div>
                  <div className="detail-title">Calculator ROI</div>
                  <div className="detail-url">nescodigital.com/calculator</div>
                </div>
                <div className="detail-status"><span className="spine-badge badge-live">live</span></div>
              </div>
              <div className="detail-desc">Calculator interactiv care estimeaza pierderea lunara din 5 scurgeri (conversie, abandon cos, email, retentie, ROAS). Inputs: revenue, ad spend, marja, vizitatori + 4 slidere. Output: pierdere lunara, anuala, potential recuperabil si breakdown per scurgere.</div>

              <div className="sections-title">Inputs calculator</div>
              <div className="sections-grid">
                <div className="section-card"><div className="section-card-num">I01</div><div className="section-card-name">Revenue lunar</div><div className="section-card-desc">lei / luna — input direct</div></div>
                <div className="section-card"><div className="section-card-num">I02</div><div className="section-card-name">Buget reclame</div><div className="section-card-desc">lei / luna — input direct</div></div>
                <div className="section-card"><div className="section-card-num">I03</div><div className="section-card-name">Marja bruta</div><div className="section-card-desc">% — input direct</div></div>
                <div className="section-card"><div className="section-card-num">I04</div><div className="section-card-name">Vizitatori</div><div className="section-card-desc">sesiuni unice — input direct</div></div>
                <div className="section-card"><div className="section-card-num">S01</div><div className="section-card-name">Rata conversie</div><div className="section-card-desc">slider 0.1% — 5%</div></div>
                <div className="section-card"><div className="section-card-num">S02</div><div className="section-card-name">Abandon cos</div><div className="section-card-desc">slider 30% — 95%</div></div>
                <div className="section-card"><div className="section-card-num">S03</div><div className="section-card-name">Revenue email</div><div className="section-card-desc">slider 0% — 35%</div></div>
                <div className="section-card"><div className="section-card-num">S04</div><div className="section-card-name">Retentie clienti</div><div className="section-card-desc">slider 5% — 60%</div></div>
              </div>

              <div className="sections-title">Output calculat</div>
              <div className="sections-grid">
                <div className="section-card" style={{ borderColor: 'rgba(255,107,107,0.3)' }}><div className="section-card-num" style={{ color: 'var(--red)' }}>OUT 01</div><div className="section-card-name">Pierdere lunara</div><div className="section-card-desc">Total scurgeri calculate in lei/luna</div></div>
                <div className="section-card" style={{ borderColor: 'rgba(255,165,0,0.3)' }}><div className="section-card-num" style={{ color: 'var(--orange)' }}>OUT 02</div><div className="section-card-name">Pierdere anuala</div><div className="section-card-desc">x12 — impact anual vizibil</div></div>
                <div className="section-card" style={{ borderColor: 'rgba(86,219,132,0.3)' }}><div className="section-card-num" style={{ color: 'var(--accent)' }}>OUT 03</div><div className="section-card-name">Potential recuperabil</div><div className="section-card-desc">70% din pierdere — estimare conservatoare</div></div>
                <div className="section-card"><div className="section-card-num">OUT 04</div><div className="section-card-name">Breakdown per scurgere</div><div className="section-card-desc">Bar chart cu valoarea fiecarei scurgeri</div></div>
              </div>

              <div className="pixel-title">Pixel Meta events</div>
              <div className="pixel-grid">
                <div className="pixel-row"><div className="pixel-trigger">Primul input</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-standard">ViewContent {'{'}content_name: &apos;roi_calc&apos;{'}'}</div></div>
                <div className="pixel-row"><div className="pixel-trigger">Calcul efectuat (debounced)</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-custom">CalculatorUsed {'{'}revenue_range: bracket{'}'}</div></div>
                <div className="pixel-row"><div className="pixel-trigger">Pierdere {'>'} 20k lei</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-custom">HighLossCalculated {'{'}loss: N{'}'}</div></div>
                <div className="pixel-row"><div className="pixel-trigger">CTA afisat</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-custom">CTAShown {'{'}source: &apos;calculator&apos;{'}'}</div></div>
                <div className="pixel-row"><div className="pixel-trigger">Click Calendly</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-lead">Lead {'{'}source: &apos;roi_calculator&apos;{'}'}</div></div>
              </div>
            </div>

            {/* GHID */}
            <div className={`page-detail${activePage === 'ghid' ? ' active' : ''}`} id="detail-ghid">
              <div className="detail-header">
                <div className="detail-title-wrap">
                  <div className="detail-tag">06 / lead magnet</div>
                  <div className="detail-title">Ghid Gratuit</div>
                  <div className="detail-url">nescodigital.com/ghid-gratuit</div>
                </div>
                <div className="detail-status"><span className="spine-badge badge-live">live</span></div>
              </div>
              <div className="detail-desc">&quot;Unde se pierd banii in businessurile de 500k+/luna — 7 scurgeri de venituri.&quot; Pagina web si PDF descarcabil. Destinatie pentru Segmentul B din quiz + link direct din reclame si email nurture.</div>

              <div className="sections-title">Continut ghid (7 scurgeri)</div>
              <div className="sections-grid">
                <div className="section-card"><div className="section-card-num">S01</div><div className="section-card-name">Funnel slab</div><div className="section-card-desc">CR sub 1.5%, mesaj nepotrivit cu audienta</div></div>
                <div className="section-card"><div className="section-card-num">S02</div><div className="section-card-name">Lista email dormanta</div><div className="section-card-desc">Sub 5% revenue din email</div></div>
                <div className="section-card"><div className="section-card-num">S03</div><div className="section-card-name">Reclame fara profit</div><div className="section-card-desc">ROAS ok, profit net slab</div></div>
                <div className="section-card"><div className="section-card-num">S04</div><div className="section-card-name">Clienti neprofitabili</div><div className="section-card-desc">20/80 rule — nu stii care sunt care</div></div>
                <div className="section-card"><div className="section-card-num">S05</div><div className="section-card-name">Zero upsell</div><div className="section-card-desc">LTV egal cu prima comanda</div></div>
                <div className="section-card"><div className="section-card-num">S06</div><div className="section-card-name">Vanzare fara sistem</div><div className="section-card-desc">Pipeline in capul unui om</div></div>
                <div className="section-card"><div className="section-card-num">S07</div><div className="section-card-name">KPI-uri de vanitate</div><div className="section-card-desc">Toate green, profitul stagneaza</div></div>
                <div className="section-card" style={{ borderColor: 'rgba(86,219,132,0.2)' }}><div className="section-card-num" style={{ color: 'var(--accent)' }}>S08 — Final</div><div className="section-card-name">CTA calificat</div><div className="section-card-desc">Doar pentru 500k+ lei/luna — Calendly</div></div>
              </div>

              <div className="pixel-title">Pixel Meta events</div>
              <div className="pixel-grid">
                <div className="pixel-row"><div className="pixel-trigger">Page load</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-standard">ViewContent {'{'}content_name: &apos;ghid_gratuit&apos;{'}'}</div></div>
                <div className="pixel-row"><div className="pixel-trigger">Scroll 50%</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-custom">GuideEngaged {'{'}depth: &apos;50pct&apos;{'}'}</div></div>
                <div className="pixel-row"><div className="pixel-trigger">Scroll 100%</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-custom">GuideCompleted</div></div>
                <div className="pixel-row"><div className="pixel-trigger">Click CTA final</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-lead">Lead {'{'}source: &apos;guide_cta&apos;{'}'}</div></div>
              </div>
            </div>

            {/* PERFECT FIT */}
            <div className={`page-detail${activePage === 'perfect-fit' ? ' active' : ''}`} id="detail-perfect-fit">
              <div className="detail-header">
                <div className="detail-title-wrap">
                  <div className="detail-tag">06b / calificare avansata</div>
                  <div className="detail-title">Perfect Fit</div>
                  <div className="detail-url">nescodigital.com/perfect-fit</div>
                </div>
                <div className="detail-status"><span className="spine-badge badge-live">live</span></div>
              </div>
              <div className="detail-desc">Pagina dedicata pentru Segmentul A din quiz — lead-uri care sunt &quot;fit perfect&quot;. Confirma calificarea, ofera detalii suplimentare si CTA direct catre Calendly cu mesaj personalizat.</div>

              <div className="pixel-title">Pixel Meta events</div>
              <div className="pixel-grid">
                <div className="pixel-row"><div className="pixel-trigger">Page load</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-standard">ViewContent {'{'}content_name: &apos;perfect_fit&apos;{'}'}</div></div>
                <div className="pixel-row"><div className="pixel-trigger">Click Calendly</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-lead">Lead {'{'}source: &apos;perfect_fit&apos;{'}'}</div></div>
              </div>
            </div>

            {/* THANK YOU */}
            <div className={`page-detail${activePage === 'thank-you' ? ' active' : ''}`} id="detail-thank-you">
              <div className="detail-header">
                <div className="detail-title-wrap">
                  <div className="detail-tag">07 / conversie</div>
                  <div className="detail-title">Thank You Page</div>
                  <div className="detail-url">nescodigital.com/multumim</div>
                </div>
                <div className="detail-status"><span className="spine-badge badge-new">new</span></div>
              </div>
              <div className="detail-desc">Pagina afisata imediat dupa ce cineva lasa emailul pentru ghid. Cel mai cald moment din funnel — omul tocmai si-a aratat interesul. Obiectiv: convinge-l sa rezerve si apelul cat timp e activ.</div>

              <div className="sections-title">Sectiuni pagina</div>
              <div className="sections-grid">
                <div className="section-card"><div className="section-card-num">S01</div><div className="section-card-name">Confirmare</div><div className="section-card-desc">&quot;Ghidul e pe drum — verifica inbox-ul&quot;</div></div>
                <div className="section-card"><div className="section-card-num">S02</div><div className="section-card-name">Mesaj principal</div><div className="section-card-desc">&quot;Cat timp astepti — o intrebare rapida&quot;</div></div>
                <div className="section-card"><div className="section-card-num">S03</div><div className="section-card-name">CTA Calendly</div><div className="section-card-desc">Apel diagnostic 20 min — bariera redusa</div></div>
                <div className="section-card"><div className="section-card-num">S04</div><div className="section-card-name">Trust reducers</div><div className="section-card-desc">Nu e pitch, 30 min, daca nu gasim nimic — spunem sincer</div></div>
              </div>

              <div className="pixel-title">Pixel Meta events</div>
              <div className="pixel-grid">
                <div className="pixel-row"><div className="pixel-trigger">Page load</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-lead">Lead {'{'}source: &apos;optin_thank_you&apos;{'}'}</div></div>
                <div className="pixel-row"><div className="pixel-trigger">Click Calendly</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-lead">Schedule {'{'}source: &apos;thank_you_page&apos;{'}'}</div></div>
              </div>
            </div>

            {/* PORTOFOLIU */}
            <div className={`page-detail${activePage === 'portofoliu' ? ' active' : ''}`} id="detail-portofoliu">
              <div className="detail-header">
                <div className="detail-title-wrap">
                  <div className="detail-tag">08 / credibilitate</div>
                  <div className="detail-title">Portofoliu</div>
                  <div className="detail-url">nescodigital.com/portofoliu</div>
                </div>
                <div className="detail-status"><span className="spine-badge badge-live">live</span></div>
              </div>
              <div className="detail-desc">Proiecte si rezultate concrete. Accor, Siemens, L&apos;Oreal, Douglas, Burn. Cifre masurabile: 400%, 5x ROI, 10x. Pagina de credibilitate pentru lead-urile care verifica inainte de call.</div>

              <div className="sections-title">De adaugat</div>
              <div className="sections-grid">
                <div className="section-card" style={{ borderColor: 'rgba(86,219,132,0.2)' }}><div className="section-card-num" style={{ color: 'var(--accent)' }}>★ Prioritate</div><div className="section-card-name">Case study Growth Sprint</div><div className="section-card-desc">Primul client — template deja creat in kit</div></div>
                <div className="section-card" style={{ borderColor: 'rgba(86,219,132,0.2)' }}><div className="section-card-num" style={{ color: 'var(--accent)' }}>★</div><div className="section-card-name">Testimoniale video</div><div className="section-card-desc">Dupa primele 2-3 Sprints</div></div>
              </div>

              <div className="pixel-title">Pixel Meta events</div>
              <div className="pixel-grid">
                <div className="pixel-row"><div className="pixel-trigger">Page load</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-standard">ViewContent {'{'}content_name: &apos;portofoliu&apos;{'}'}</div></div>
                <div className="pixel-row"><div className="pixel-trigger">Click case study</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-custom">CaseStudyView {'{'}client: name{'}'}</div></div>
              </div>
            </div>

            {/* DESPRE */}
            <div className={`page-detail${activePage === 'despre' ? ' active' : ''}`} id="detail-despre">
              <div className="detail-header">
                <div className="detail-title-wrap">
                  <div className="detail-tag">09 / brand</div>
                  <div className="detail-title">Despre Nesco Digital</div>
                  <div className="detail-url">nescodigital.com/despre</div>
                </div>
                <div className="detail-status"><span className="spine-badge badge-live">live</span></div>
              </div>
              <div className="detail-desc">Povestea agentiei, experienta, echipa, valorile. 14 ani experienta, 33 milioane EUR ad spend gestionat. Pagina de incredere pentru lead-urile care cerceteaza inainte de decizie.</div>
              <div className="pixel-title">Pixel Meta events</div>
              <div className="pixel-grid">
                <div className="pixel-row"><div className="pixel-trigger">Page load</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-standard">ViewContent {'{'}content_name: &apos;despre&apos;{'}'}</div></div>
              </div>
            </div>

            {/* CONTACT */}
            <div className={`page-detail${activePage === 'contact' ? ' active' : ''}`} id="detail-contact">
              <div className="detail-header">
                <div className="detail-title-wrap">
                  <div className="detail-tag">10 / conversie</div>
                  <div className="detail-title">Contact</div>
                  <div className="detail-url">nescodigital.com/contact</div>
                </div>
                <div className="detail-status"><span className="spine-badge badge-live">live</span></div>
              </div>
              <div className="detail-desc">Formular de contact si/sau Calendly embed. Destinatie pentru leaduri care nu au vrut sa rezerve direct din LP sau quiz.</div>
              <div className="pixel-title">Pixel Meta events</div>
              <div className="pixel-grid">
                <div className="pixel-row"><div className="pixel-trigger">Page load</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-standard">ViewContent {'{'}content_name: &apos;contact&apos;{'}'}</div></div>
                <div className="pixel-row"><div className="pixel-trigger">Form submit / Calendly</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-lead">Lead {'{'}source: &apos;contact_page&apos;{'}'}</div></div>
              </div>
            </div>

            {/* RESURSE */}
            <div className={`page-detail${activePage === 'resurse' ? ' active' : ''}`} id="detail-resurse">
              <div className="detail-header">
                <div className="detail-title-wrap">
                  <div className="detail-tag">11 / nurture</div>
                  <div className="detail-title">Resurse / Blog</div>
                  <div className="detail-url">nescodigital.com/resurse</div>
                </div>
                <div className="detail-status"><span className="spine-badge badge-wip">in lucru</span></div>
              </div>
              <div className="detail-desc">Hub de continut gratuit: articole, ghiduri, tool-uri. Destinatie pentru Segmentul C din quiz si C Not a Fit. Construieste autoritate si mentine leadurile in ecosistem pana sunt gata de cumparare.</div>

              <div className="sections-title">Continut prioritar de creat</div>
              <div className="sections-grid">
                <div className="section-card"><div className="section-card-num">R01</div><div className="section-card-name">Ghidul 7 scurgeri</div><div className="section-card-desc">Deja construit — de indexat si promovat</div></div>
                <div className="section-card"><div className="section-card-num">R02</div><div className="section-card-name">Cum calculezi ROAS real</div><div className="section-card-desc">Articol tehnic — trafic organic</div></div>
                <div className="section-card"><div className="section-card-num">R03</div><div className="section-card-name">Email marketing benchmark</div><div className="section-card-desc">Romania 2026 — date specifice</div></div>
                <div className="section-card"><div className="section-card-num">R04</div><div className="section-card-name">Stack tool-uri recomandate</div><div className="section-card-desc">Cu linkuri afiliere PartnerStack</div></div>
              </div>
              <div className="pixel-title">Pixel Meta events</div>
              <div className="pixel-grid">
                <div className="pixel-row"><div className="pixel-trigger">Page load</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-standard">ViewContent {'{'}content_name: &apos;resurse&apos;{'}'}</div></div>
                <div className="pixel-row"><div className="pixel-trigger">Click articol</div><div className="pixel-arrow">{'→'}</div><div className="pixel-event pixel-custom">ContentEngagement {'{'}article: title{'}'}</div></div>
              </div>
            </div>

          </div>
        </div>

        {/* FLOW SECTION */}
        <div className="flow-section">
          <div className="flow-title">Fluxul principal de conversie — reclama {'→'} client</div>

          <div className="flow-row">
            <div className="flow-node blue">Meta Ads</div>
            <div className="flow-arrow">{'→'}</div>
            <div className="flow-node">/quiz sau /quiz-ecommerce</div>
            <div className="flow-arrow">{'→'}</div>
            <div className="flow-node orange">Segment A</div>
            <div className="flow-arrow">{'→'}</div>
            <div className="flow-node accent">Calendly</div>
            <div className="flow-arrow">{'→'}</div>
            <div className="flow-node green">Discovery Call</div>
            <div className="flow-arrow">{'→'}</div>
            <div className="flow-node accent">Inchidere 4.5-6.5k{'€'}</div>
          </div>

          <div className="flow-row">
            <div className="flow-node blue">Meta Ads</div>
            <div className="flow-arrow">{'→'}</div>
            <div className="flow-node">/quiz</div>
            <div className="flow-arrow">{'→'}</div>
            <div className="flow-node orange">Segment B</div>
            <div className="flow-arrow">{'→'}</div>
            <div className="flow-node">/ghid-gratuit {'→'} /multumim</div>
            <div className="flow-arrow">{'→'}</div>
            <div className="flow-node">Email nurture 5 zile</div>
            <div className="flow-arrow">{'→'}</div>
            <div className="flow-node accent">Calendly</div>
          </div>

          <div className="flow-row">
            <div className="flow-node blue">Meta Ads</div>
            <div className="flow-arrow">{'→'}</div>
            <div className="flow-node">/calculator</div>
            <div className="flow-arrow">{'→'}</div>
            <div className="flow-label">pierdere {'>'} 20k/luna</div>
            <div className="flow-arrow">{'→'}</div>
            <div className="flow-node accent">CTA Calendly direct</div>
            <div className="flow-arrow">{'→'}</div>
            <div className="flow-node green">Discovery Call</div>
          </div>

          <div className="flow-row" style={{ marginTop: '8px' }}>
            <div className="flow-node blue">Retargeting</div>
            <div className="flow-arrow">{'→'}</div>
            <div className="flow-label">vizitatori LP fara conversie</div>
            <div className="flow-arrow">{'→'}</div>
            <div className="flow-node">/quiz sau /calculator</div>
            <div className="flow-arrow">{'→'}</div>
            <div className="flow-label">mesaj diferit, unghi nou</div>
            <div className="flow-arrow">{'→'}</div>
            <div className="flow-node accent">Re-conversie</div>
          </div>
        </div>

      </div>
    </>
  );
}
