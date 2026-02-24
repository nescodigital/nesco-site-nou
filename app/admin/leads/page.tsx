'use client';

import Link from 'next/link';

const ACCENT = '#60a5fa';

const leadSources = [
  {
    path: '/quiz',
    name: 'Quiz diagnostic (10 questions)',
    type: 'Quiz',
    pixelEvent: "fbq('track','Lead') on critical/warning result",
    cta: 'TidyCal 30min',
    status: 'active',
  },
  {
    path: '/quiz-ecommerce',
    name: 'Quiz e-commerce (8 questions)',
    type: 'Quiz',
    pixelEvent: "fbq('track','Lead') on critical/warning result",
    cta: 'TidyCal 30min',
    status: 'active',
  },
  {
    path: '/calculator',
    name: 'ROI Calculator',
    type: 'Calculator',
    pixelEvent: "fbq('track','Lead')",
    cta: 'TidyCal 30min',
    status: 'active',
  },
  {
    path: '/ghid-gratuit',
    name: 'Ghid 7 Scurgeri (optin)',
    type: 'Optin',
    pixelEvent: "fbq('track','Lead') on form submit",
    cta: 'Email optin',
    status: 'active',
  },
  {
    path: '/growth-sprint-educatie',
    name: 'Growth Sprint LP',
    type: 'CTA',
    pixelEvent: 'PageView only',
    cta: 'Contact popup + /quiz',
    status: 'active',
  },
  {
    path: '/growth-sprint-ecommerce',
    name: 'Growth Sprint LP',
    type: 'CTA',
    pixelEvent: 'PageView only',
    cta: 'Contact popup + /quiz',
    status: 'active',
  },
  {
    path: '/perfect-fit',
    name: 'Booking page',
    type: 'CTA',
    pixelEvent: 'PageView only',
    cta: 'TidyCal 30min + 60min',
    status: 'active',
  },
  {
    path: '/',
    name: 'Main CTA (homepage RO)',
    type: 'CTA',
    pixelEvent: 'PageView only',
    cta: 'Contact popup',
    status: 'active',
  },
  {
    path: '/en',
    name: 'Main CTA (homepage EN)',
    type: 'CTA',
    pixelEvent: 'PageView only',
    cta: 'Contact popup',
    status: 'active',
  },
  {
    path: '/ge',
    name: 'Main CTA (homepage DE)',
    type: 'CTA',
    pixelEvent: 'PageView only',
    cta: 'Contact popup',
    status: 'active',
  },
  {
    path: '/multumim',
    name: 'Thank You page',
    type: '\u2014',
    pixelEvent: '\u2014',
    cta: '\u2014',
    status: 'planned',
  },
];

const totalSources = leadSources.length;
const activeSources = leadSources.filter((s) => s.status === 'active').length;
const firingPixel = leadSources.filter((s) => s.pixelEvent.includes("fbq('track'")).length;
const plannedSources = leadSources.filter((s) => s.status === 'planned').length;

const typeBadgeColor: Record<string, string> = {
  Quiz: '#a78bfa',
  Calculator: '#22d3ee',
  Optin: '#fb923c',
  CTA: '#60a5fa',
  '\u2014': '#3a4650',
};

export default function AdminLeadsPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Inter:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #050505; color: #dce4e8; font-family: 'Inter', sans-serif; min-height: 100vh; }
        body::before {
          content: '';
          position: fixed; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 0; opacity: 0.4;
        }
      `}} />

      <div style={{
        position: 'relative', zIndex: 1,
        padding: '48px 40px 100px',
        maxWidth: '1200px', margin: '0 auto',
      }}>

        {/* BACK LINK */}
        <Link href="/admin" style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '12px',
          color: '#5a6872',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          marginBottom: '40px',
          transition: 'color 0.2s',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = ACCENT; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = '#5a6872'; }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Dashboard
        </Link>

        {/* TITLE */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '10px', color: '#5a6872',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            marginBottom: '8px',
          }}>
            LEADS OVERVIEW
          </div>
          <h1 style={{
            fontFamily: "'Satoshi', sans-serif",
            fontSize: '28px', fontWeight: 800,
            color: '#dce4e8', letterSpacing: '-0.5px', margin: 0,
          }}>
            Lead Sources & Tracking
          </h1>
        </div>

        {/* SUMMARY CARDS */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '12px',
          marginBottom: '32px',
        }}>
          {[
            { label: 'Total Lead Sources', value: totalSources, color: ACCENT },
            { label: 'Active', value: activeSources, color: '#4ade80' },
            { label: 'Firing Pixel Events', value: firingPixel, color: '#fb923c' },
            { label: 'Planned', value: plannedSources, color: '#5a6872' },
          ].map((card) => (
            <div key={card.label} style={{
              background: '#0a0a0a',
              border: '1px solid #1a1a1a',
              borderRadius: '10px',
              padding: '20px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: `linear-gradient(90deg, ${card.color}, ${card.color}33)`,
              }} />
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '10px', color: '#5a6872',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                marginBottom: '10px',
              }}>
                {card.label}
              </div>
              <div style={{
                fontFamily: "'Satoshi', sans-serif",
                fontSize: '32px', fontWeight: 800,
                color: card.color,
              }}>
                {card.value}
              </div>
            </div>
          ))}
        </div>

        {/* TRACKING IDS */}
        <div style={{
          display: 'flex', gap: '12px', flexWrap: 'wrap',
          marginBottom: '32px',
        }}>
          {[
            { label: 'Meta Pixel', value: '1163980934680660', color: ACCENT },
            { label: 'Google Analytics', value: 'G-PSFGPWEJV1', color: '#facc15' },
            { label: 'theMarketer', value: '2UFNOABX', color: '#4ade80' },
          ].map((item) => (
            <div key={item.label} style={{
              background: '#0a0a0a',
              border: '1px solid #1a1a1a',
              borderRadius: '8px',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}>
              <span style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '10px', color: '#5a6872',
                letterSpacing: '0.06em', textTransform: 'uppercase',
              }}>
                {item.label}
              </span>
              <span style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '12px', color: item.color,
                background: `${item.color}15`,
                border: `1px solid ${item.color}30`,
                padding: '3px 8px',
                borderRadius: '4px',
              }}>
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* TABLE */}
        <div style={{
          background: '#0a0a0a',
          border: '1px solid #1a1a1a',
          borderRadius: '12px',
          overflow: 'hidden',
        }}>
          {/* Table header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '200px 100px 1fr 180px 90px',
            gap: '0',
            padding: '14px 20px',
            borderBottom: '1px solid #1a1a1a',
            background: '#080808',
          }}>
            {['Page', 'Type', 'Pixel Event', 'CTA Destination', 'Status'].map((h) => (
              <div key={h} style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '10px', color: '#5a6872',
                letterSpacing: '0.08em', textTransform: 'uppercase',
              }}>
                {h}
              </div>
            ))}
          </div>

          {/* Table rows */}
          {leadSources.map((src, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '200px 100px 1fr 180px 90px',
              gap: '0',
              padding: '14px 20px',
              borderBottom: i < leadSources.length - 1 ? '1px solid #111' : 'none',
              alignItems: 'center',
              transition: 'background 0.15s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#0d0d0d'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
            >
              {/* Page path + name */}
              <div>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '12px', color: ACCENT,
                  marginBottom: '2px',
                }}>
                  {src.path}
                </div>
                <div style={{ fontSize: '11px', color: '#5a6872' }}>
                  {src.name}
                </div>
              </div>

              {/* Type badge */}
              <div>
                <span style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '10px',
                  color: typeBadgeColor[src.type] || '#5a6872',
                  background: `${typeBadgeColor[src.type] || '#3a4650'}18`,
                  border: `1px solid ${typeBadgeColor[src.type] || '#3a4650'}30`,
                  padding: '3px 8px',
                  borderRadius: '4px',
                  letterSpacing: '0.04em',
                }}>
                  {src.type}
                </span>
              </div>

              {/* Pixel event */}
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '11px',
                color: src.pixelEvent.includes('fbq') ? '#fb923c' : '#3a4650',
                lineHeight: 1.5,
              }}>
                {src.pixelEvent}
              </div>

              {/* CTA destination */}
              <div style={{
                fontSize: '12px',
                color: src.cta === '\u2014' ? '#3a4650' : '#dce4e8',
              }}>
                {src.cta}
              </div>

              {/* Status */}
              <div>
                <span style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '10px',
                  color: src.status === 'active' ? '#4ade80' : '#fb923c',
                  background: src.status === 'active' ? 'rgba(74,222,128,0.1)' : 'rgba(251,146,60,0.1)',
                  border: `1px solid ${src.status === 'active' ? 'rgba(74,222,128,0.25)' : 'rgba(251,146,60,0.25)'}`,
                  padding: '3px 8px',
                  borderRadius: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}>
                  {src.status === 'active' ? 'Active' : 'Planned'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* LEGEND */}
        <div style={{
          marginTop: '24px',
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
        }}>
          {[
            { label: 'Quiz', color: '#a78bfa' },
            { label: 'Calculator', color: '#22d3ee' },
            { label: 'Optin', color: '#fb923c' },
            { label: 'CTA', color: '#60a5fa' },
          ].map((item) => (
            <div key={item.label} style={{
              display: 'flex', alignItems: 'center', gap: '6px',
            }}>
              <div style={{
                width: '8px', height: '8px',
                borderRadius: '50%',
                background: item.color,
              }} />
              <span style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '10px', color: '#5a6872',
                letterSpacing: '0.06em',
              }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
