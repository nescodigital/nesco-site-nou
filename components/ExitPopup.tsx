'use client';

import { useState, useEffect, useCallback } from 'react';

// ─────────────────────────────────────────────────────────────
// NESCO DIGITAL — Segmentation Popup
// Trigger: 60 seconds on site
// Logic:  1 question → 2 paths
//   A (business owner, scaling) → /perfect-fit (apel diagnostic)
//   B/C (agency, early stage)   → ghid gratuit (lead magnet)
// ─────────────────────────────────────────────────────────────

const STORAGE_KEY = 'nd_popup_dismissed';
const DELAY_MS = 60_000; // 60 seconds

type Step = 'question' | 'fit' | 'guide' | 'guide-profile' | 'closed';

const BUSINESS_TYPES = [
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'educatie-online', label: 'Educație Online' },
  { value: 'b2b-servicii', label: 'B2B / Servicii' },
  { value: 'sanatate-wellness', label: 'Sănătate & Wellness' },
  { value: 'imobiliare', label: 'Imobiliare' },
  { value: 'altul', label: 'Altul' },
];

export default function ExitPopup() {
  const [step, setStep] = useState<Step>('closed');
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [profileDone, setProfileDone] = useState(false);

  const openPopup = useCallback(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    setStep('question');
    setVisible(true);
  }, []);

  useEffect(() => {
    if (window.location.pathname.startsWith('/admin')) return;
    if (sessionStorage.getItem('admin_auth') === 'true') return;
    const timer = setTimeout(openPopup, DELAY_MS);
    return () => clearTimeout(timer);
  }, [openPopup]);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, '1');
    setTimeout(() => setStep('closed'), 400);
  };

  const handleSelect = (val: string) => {
    setSelected(val);
  };

  const handleContinue = () => {
    if (!selected) return;
    if (selected === 'A') {
      setStep('fit');
    } else {
      setStep('guide');
    }
    setSelected(null);
  };

  const handleGuideSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: conecteaza la MailerLite / API — trimite email
    setSubmitted(true);
    setStep('guide-profile');
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: conecteaza la MailerLite / API — update profil cu firstName, phone, businessType
    setProfileDone(true);
  };

  if (step === 'closed') return null;

  /* Nesco brand green: #56db84 / rgb(86,219,132) */
  return (
    <>
      <style>{`
        :root {
          --nd-bg: #0d1114;
          --nd-bg2: #13181c;
          --nd-border: #1e2428;
          --nd-accent: #56db84;
          --nd-text: #e8eaeb;
          --nd-muted: #6b7880;
          --nd-card: #111518;
        }

        .nd-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.72);
          backdrop-filter: blur(4px);
          z-index: 9998;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          animation: ndFadeIn 0.3s ease forwards;
        }

        .nd-overlay.nd-hiding {
          animation: ndFadeOut 0.35s ease forwards;
        }

        @keyframes ndFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes ndFadeOut {
          from { opacity: 1; }
          to   { opacity: 0; }
        }

        .nd-modal {
          background: var(--nd-bg);
          border: 1px solid var(--nd-border);
          border-radius: 16px;
          width: 100%;
          max-width: 520px;
          position: relative;
          overflow: hidden;
          animation: ndSlideUp 0.38s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes ndSlideUp {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* accent bar top */
        .nd-modal::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--nd-accent), transparent);
        }

        /* grid texture */
        .nd-modal::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(86,219,132,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(86,219,132,0.025) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
          z-index: 0;
        }

        .nd-inner {
          position: relative;
          z-index: 1;
          padding: 36px 36px 32px;
        }

        @media (max-width: 480px) {
          .nd-inner { padding: 28px 20px 24px; }
        }

        .nd-close {
          position: absolute;
          top: 16px; right: 16px;
          z-index: 10;
          background: var(--nd-bg2);
          border: 1px solid var(--nd-border);
          color: var(--nd-muted);
          width: 32px; height: 32px;
          border-radius: 8px;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          font-size: 16px;
          transition: all 0.2s;
          line-height: 1;
        }
        .nd-close:hover { color: var(--nd-text); border-color: var(--nd-muted); }

        /* ── STEP: QUESTION ── */
        .nd-eyebrow {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--nd-accent);
          font-weight: 500;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .nd-eyebrow::before {
          content: '';
          display: inline-block;
          width: 20px; height: 1px;
          background: var(--nd-accent);
        }

        .nd-heading {
          font-family: 'Satoshi', sans-serif;
          font-size: clamp(20px, 3.5vw, 26px);
          font-weight: 800;
          line-height: 1.2;
          color: var(--nd-text);
          margin-bottom: 6px;
        }
        .nd-heading em {
          color: var(--nd-accent);
          font-style: normal;
        }

        .nd-sub {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: var(--nd-muted);
          line-height: 1.6;
          margin-bottom: 28px;
        }

        .nd-options {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 20px;
        }

        .nd-option {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 16px;
          background: var(--nd-card);
          border: 1px solid var(--nd-border);
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: var(--nd-text);
          text-align: left;
          width: 100%;
          position: relative;
          overflow: hidden;
        }
        .nd-option::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(86,219,132,0.04), transparent);
          opacity: 0;
          transition: opacity 0.2s;
        }
        .nd-option:hover {
          border-color: rgba(86,219,132,0.3);
          transform: translateX(3px);
        }
        .nd-option:hover::before { opacity: 1; }
        .nd-option.active {
          border-color: var(--nd-accent);
          background: rgba(86,219,132,0.05);
        }
        .nd-option.active::before { opacity: 1; }

        .nd-opt-marker {
          width: 28px; height: 28px;
          border-radius: 6px;
          background: #1a2020;
          border: 1px solid var(--nd-border);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Satoshi', sans-serif;
          font-size: 11px;
          font-weight: 700;
          color: var(--nd-muted);
          flex-shrink: 0;
          transition: all 0.2s;
        }
        .nd-option.active .nd-opt-marker {
          background: var(--nd-accent);
          border-color: var(--nd-accent);
          color: #0a0d0f;
        }

        .nd-opt-body {}
        .nd-opt-label { font-size: 14px; font-weight: 500; color: var(--nd-text); }
        .nd-opt-hint  { font-size: 12px; color: var(--nd-muted); margin-top: 1px; }

        .nd-btn {
          width: 100%;
          background: var(--nd-accent);
          color: #0a0d0f;
          border: none;
          border-radius: 10px;
          padding: 14px 24px;
          font-family: 'Satoshi', sans-serif;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          opacity: 0.35;
          pointer-events: none;
        }
        .nd-btn.nd-active {
          opacity: 1;
          pointer-events: all;
        }
        .nd-btn.nd-active:hover {
          background: #6ee89a;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(86,219,132,0.18);
        }

        /* ── STEP: FIT ── */
        .nd-fit-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 5px 12px;
          border-radius: 100px;
          background: rgba(86,219,132,0.08);
          border: 1px solid rgba(86,219,132,0.2);
          color: var(--nd-accent);
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .nd-fit-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 9px;
          margin-bottom: 28px;
        }
        .nd-fit-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #9aaab3;
          line-height: 1.5;
        }
        .nd-fit-list li::before {
          content: '\u2192';
          color: var(--nd-accent);
          font-weight: 700;
          flex-shrink: 0;
        }

        .nd-btn-link {
          background: none;
          border: none;
          color: var(--nd-muted);
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          cursor: pointer;
          margin-top: 12px;
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color 0.2s;
          display: block;
          text-align: center;
          width: 100%;
        }
        .nd-btn-link:hover { color: var(--nd-text); }

        /* ── STEP: GUIDE ── */
        .nd-guide-icon {
          width: 48px; height: 48px;
          background: rgba(86,219,132,0.08);
          border: 1px solid rgba(86,219,132,0.15);
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 22px;
          margin-bottom: 20px;
        }

        .nd-form {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
        }
        @media (max-width: 400px) {
          .nd-form { flex-direction: column; }
        }

        .nd-input {
          flex: 1;
          background: var(--nd-card);
          border: 1px solid var(--nd-border);
          border-radius: 8px;
          padding: 12px 14px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: var(--nd-text);
          outline: none;
          transition: border-color 0.2s;
        }
        .nd-input::placeholder { color: var(--nd-muted); }
        .nd-input:focus { border-color: rgba(86,219,132,0.4); }

        .nd-form-btn {
          background: var(--nd-accent);
          color: #0a0d0f;
          border: none;
          border-radius: 8px;
          padding: 12px 20px;
          font-family: 'Satoshi', sans-serif;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .nd-form-btn:hover { background: #6ee89a; }

        .nd-select {
          width: 100%;
          background: var(--nd-card);
          border: 1px solid var(--nd-border);
          border-radius: 8px;
          padding: 12px 14px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: var(--nd-text);
          outline: none;
          transition: border-color 0.2s;
          appearance: none;
          -webkit-appearance: none;
          cursor: pointer;
        }
        .nd-select:focus { border-color: rgba(86,219,132,0.4); }

        .nd-profile-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 12px;
        }

        .nd-profile-label {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: var(--nd-muted);
          margin-bottom: 4px;
          display: block;
        }

        .nd-profile-confirmed {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: var(--nd-accent);
          font-weight: 600;
          margin-bottom: 20px;
        }

        .nd-profile-btns {
          display: flex;
          gap: 8px;
          margin-top: 4px;
        }

        .nd-profile-skip {
          padding: 12px 16px;
          border-radius: 8px;
          border: 1px solid var(--nd-border);
          background: transparent;
          color: var(--nd-muted);
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .nd-profile-skip:hover { color: var(--nd-text); border-color: var(--nd-muted); }

        .nd-disclaimer {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: var(--nd-muted);
          line-height: 1.5;
        }

        /* ── STEP: SUCCESS ── */
        .nd-success {
          text-align: center;
          padding: 8px 0 4px;
        }
        .nd-success-icon {
          font-size: 40px;
          margin-bottom: 16px;
        }
        .nd-success-title {
          font-family: 'Satoshi', sans-serif;
          font-size: 22px;
          font-weight: 800;
          color: var(--nd-text);
          margin-bottom: 8px;
        }
        .nd-success-sub {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: var(--nd-muted);
          line-height: 1.6;
          margin-bottom: 24px;
        }
      `}</style>

      <div
        className={`nd-overlay${!visible ? ' nd-hiding' : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) dismiss(); }}
      >
        <div className="nd-modal" role="dialog" aria-modal="true">
          <button className="nd-close" onClick={dismiss} aria-label="Inchide">{'\u2715'}</button>

          <div className="nd-inner">

            {/* ── STEP: QUESTION ── */}
            {step === 'question' && (
              <>
                <div className="nd-eyebrow">30 secunde</div>
                <div className="nd-heading">
                  Ce descrie cel mai bine<br /><em>situația ta acum?</em>
                </div>
                <div className="nd-sub">
                  Răspunsul tău ne ajută să îți recomandăm exact ce are sens pentru tine.
                </div>

                <div className="nd-options">
                  <button
                    className={`nd-option${selected === 'A' ? ' active' : ''}`}
                    onClick={() => handleSelect('A')}
                  >
                    <div className="nd-opt-marker">A</div>
                    <div className="nd-opt-body">
                      <div className="nd-opt-label">Am un business care generează venit</div>
                      <div className="nd-opt-hint">Vreau să cresc profitul sau să scalez</div>
                    </div>
                  </button>
                  <button
                    className={`nd-option${selected === 'B' ? ' active' : ''}`}
                    onClick={() => handleSelect('B')}
                  >
                    <div className="nd-opt-marker">B</div>
                    <div className="nd-opt-body">
                      <div className="nd-opt-label">Caut un partener pentru marketing / ads</div>
                      <div className="nd-opt-hint">Reclame, web, strategie, execuție</div>
                    </div>
                  </button>
                  <button
                    className={`nd-option${selected === 'C' ? ' active' : ''}`}
                    onClick={() => handleSelect('C')}
                  >
                    <div className="nd-opt-marker">C</div>
                    <div className="nd-opt-body">
                      <div className="nd-opt-label">Încă explorez — mă informez</div>
                      <div className="nd-opt-hint">Nu sunt sigur ce am nevoie încă</div>
                    </div>
                  </button>
                </div>

                <button
                  className={`nd-btn${selected ? ' nd-active' : ''}`}
                  onClick={handleContinue}
                >
                  Vezi recomandarea ta {'\u2192'}
                </button>
              </>
            )}

            {/* ── STEP: FIT (Growth Sprint path) ── */}
            {step === 'fit' && (
              <>
                <div className="nd-fit-badge">{'\u2713'} Profil identificat</div>
                <div className="nd-heading">
                  Ai nevoie de un<br /><em>operator, nu o agenție.</em>
                </div>
                <div className="nd-sub" style={{ marginBottom: '20px' }}>
                  Growth Sprint — 6 săptămâni în care intrăm în afacerea ta, identificăm scurgerile de venituri și le reparăm direct.
                </div>

                <ul className="nd-fit-list">
                  <li>Audit complet: funnel, email, ads, ofertă</li>
                  <li>Implementare directă — nu rapoarte</li>
                  <li>Rezultate măsurabile în 6 săptămâni</li>
                </ul>

                <a
                  href="/perfect-fit"
                  className="nd-btn nd-active"
                  style={{ textDecoration: 'none' }}
                  onClick={() => sessionStorage.setItem(STORAGE_KEY, '1')}
                >
                  Rezervă apelul de diagnostic gratuit {'\u2192'}
                </a>
                <button className="nd-btn-link" onClick={dismiss}>
                  Nu acum — continuă pe site
                </button>
              </>
            )}

            {/* ── STEP: GUIDE — email (agency / early path) ── */}
            {step === 'guide' && (
              <>
                <div className="nd-guide-icon">{'\uD83D\uDCCA'}</div>
                <div className="nd-heading">
                  Ghidul gratuit:<br /><em>Unde se pierd banii</em>
                </div>
                <div className="nd-sub">
                  Cele mai frecvente 7 scurgeri de venituri din businessurile online — cu semnalele de alarmă exacte și ce poți face.
                </div>

                <form className="nd-form" onSubmit={handleGuideSubmit}>
                  <input
                    className="nd-input"
                    type="email"
                    placeholder="adresa@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-label="Email"
                  />
                  <button className="nd-form-btn" type="submit">
                    Vreau ghidul
                  </button>
                </form>

                <p className="nd-disclaimer">
                  Ghidul vine instant pe email. Zero spam — te poți dezabona oricând.
                </p>
                <button className="nd-btn-link" onClick={dismiss} style={{ marginTop: '16px' }}>
                  Nu acum
                </button>
              </>
            )}

            {/* ── STEP: GUIDE-PROFILE — prenume, telefon, tip business ── */}
            {step === 'guide-profile' && !profileDone && (
              <>
                <div className="nd-profile-confirmed">
                  {'\u2713'} Email confirmat! Completează profilul tău (opțional):
                </div>

                <form className="nd-profile-form" onSubmit={handleProfileSubmit}>
                  <div>
                    <label className="nd-profile-label">Tipul tău de business</label>
                    <select
                      className="nd-select"
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                    >
                      <option value="" disabled>Selectează tipul de business</option>
                      {BUSINESS_TYPES.map(({ value, label }) => (
                        <option key={value} value={value}>{label}</option>
                      ))}
                    </select>
                  </div>
                  <input
                    className="nd-input"
                    type="text"
                    placeholder="Prenume"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    aria-label="Prenume"
                  />
                  <input
                    className="nd-input"
                    type="tel"
                    placeholder="Telefon"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    aria-label="Telefon"
                  />
                  <div className="nd-profile-btns">
                    <button className="nd-form-btn" type="submit" style={{ flex: 1 }}>
                      Salvează profilul
                    </button>
                    <button className="nd-profile-skip" type="button" onClick={dismiss}>
                      Sari peste
                    </button>
                  </div>
                </form>
              </>
            )}

            {/* ── STEP: PROFILE DONE ── */}
            {step === 'guide-profile' && profileDone && (
              <div className="nd-success">
                <div className="nd-success-icon">{'\u2705'}</div>
                <div className="nd-success-title">Profil completat!</div>
                <div className="nd-success-sub">
                  Ghidul e pe drum — verifică inbox-ul în câteva minute.
                  <br />Dacă nu îl găsești, uită-te și în Spam.
                </div>
                <button
                  className="nd-btn nd-active"
                  onClick={dismiss}
                  style={{ maxWidth: '280px', margin: '0 auto' }}
                >
                  Continuă pe site {'\u2192'}
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
}
