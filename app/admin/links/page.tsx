'use client';

import Link from 'next/link';

const ACCENT = '#a78bfa';

interface QuickLink {
  name: string;
  url: string;
  badge?: string;
  icon: string;
}

interface LinkGroup {
  category: string;
  color: string;
  links: QuickLink[];
}

const linkGroups: LinkGroup[] = [
  {
    category: 'Analytics & Tracking',
    color: '#60a5fa',
    links: [
      {
        name: 'Google Analytics',
        url: 'https://analytics.google.com',
        badge: 'G-PSFGPWEJV1',
        icon: 'M3 3v18h18 M7 16v-4 M11 16V8 M15 16v-6 M19 16V6',
      },
      {
        name: 'Google Search Console',
        url: 'https://search.google.com/search-console',
        icon: 'M11 19a8 8 0 100-16 8 8 0 000 16z M21 21l-4.35-4.35',
      },
      {
        name: 'Meta Business Suite',
        url: 'https://business.facebook.com',
        badge: 'Pixel: 1163980934680660',
        icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
      },
      {
        name: 'theMarketer',
        url: 'https://app.themarketer.com',
        badge: 'Key: 2UFNOABX',
        icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6',
      },
    ],
  },
  {
    category: 'Hosting & Deploy',
    color: '#4ade80',
    links: [
      {
        name: 'Vercel Dashboard',
        url: 'https://vercel.com/dashboard',
        icon: 'M12 2L2 19.5h20L12 2z',
      },
      {
        name: 'GitHub Repo',
        url: 'https://github.com/nescodigital/nesco-site-nou',
        badge: 'nescodigital/nesco-site-nou',
        icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22',
      },
    ],
  },
  {
    category: 'Booking & CRM',
    color: '#fb923c',
    links: [
      {
        name: 'TidyCal (30 min)',
        url: 'https://tidycal.com/1y0qx6o/30-minute-meeting',
        badge: '30 min session',
        icon: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 6v6l4 2',
      },
      {
        name: 'TidyCal (60 min)',
        url: 'https://tidycal.com/1y0qx6o/60-minute-meeting',
        badge: '60 min session',
        icon: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 6v6l4 2',
      },
    ],
  },
  {
    category: 'Design & Fonts',
    color: '#f472b6',
    links: [
      {
        name: 'Fontshare (Satoshi)',
        url: 'https://www.fontshare.com/fonts/satoshi',
        badge: 'Satoshi',
        icon: 'M4 7V4h16v3 M9 20h6 M12 4v16',
      },
      {
        name: 'Google Fonts (Inter)',
        url: 'https://fonts.google.com/specimen/Inter',
        badge: 'Inter',
        icon: 'M4 7V4h16v3 M9 20h6 M12 4v16',
      },
    ],
  },
  {
    category: 'Old Site',
    color: '#5a6872',
    links: [
      {
        name: 'WordPress (old)',
        url: 'https://nescodigital.com/wp-admin',
        badge: 'Legacy',
        icon: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M2 12h20 M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z',
      },
    ],
  },
];

export default function AdminLinksPage() {
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
        maxWidth: '1000px', margin: '0 auto',
      }}>

        {/* BACK LINK */}
        <Link href="/admin" style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '12px', color: '#5a6872',
          textDecoration: 'none',
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          marginBottom: '40px', transition: 'color 0.2s',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = ACCENT; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = '#5a6872'; }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Dashboard
        </Link>

        {/* TITLE */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '10px', color: '#5a6872',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            marginBottom: '8px',
          }}>
            QUICK LINKS
          </div>
          <h1 style={{
            fontFamily: "'Satoshi', sans-serif",
            fontSize: '28px', fontWeight: 800,
            color: '#dce4e8', letterSpacing: '-0.5px', margin: 0,
          }}>
            External Tools & Services
          </h1>
        </div>

        {/* LINK GROUPS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {linkGroups.map((group) => (
            <div key={group.category}>
              {/* Category header */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                marginBottom: '16px',
                paddingBottom: '10px',
                borderBottom: `1px solid ${group.color}20`,
              }}>
                <div style={{
                  width: '6px', height: '6px',
                  borderRadius: '50%',
                  background: group.color,
                }} />
                <span style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '11px', color: group.color,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  fontWeight: 500,
                }}>
                  {group.category}
                </span>
              </div>

              {/* Links grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '12px',
              }}>
                {group.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: '#0a0a0a',
                      border: '1px solid #1a1a1a',
                      borderRadius: '10px',
                      padding: '20px',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '14px',
                      transition: 'all 0.2s',
                      position: 'relative',
                      overflow: 'hidden',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${group.color}44`;
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#1a1a1a';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {/* Top accent */}
                    <div style={{
                      position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                      background: `linear-gradient(90deg, ${group.color}, ${group.color}33)`,
                    }} />

                    {/* Icon */}
                    <div style={{
                      width: '36px', height: '36px',
                      borderRadius: '8px',
                      background: `${group.color}12`,
                      border: `1px solid ${group.color}25`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={group.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d={link.icon} />
                      </svg>
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        display: 'flex', alignItems: 'center', gap: '8px',
                        marginBottom: '6px',
                      }}>
                        <span style={{
                          fontFamily: "'Satoshi', sans-serif",
                          fontSize: '14px', fontWeight: 700,
                          color: '#dce4e8',
                        }}>
                          {link.name}
                        </span>
                        {/* External link icon */}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3a4650" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                      </div>

                      {/* Badge */}
                      {link.badge && (
                        <span style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: '10px',
                          color: group.color,
                          background: `${group.color}12`,
                          border: `1px solid ${group.color}25`,
                          padding: '2px 8px',
                          borderRadius: '3px',
                          letterSpacing: '0.04em',
                          display: 'inline-block',
                        }}>
                          {link.badge}
                        </span>
                      )}

                      {/* URL preview */}
                      <div style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: '10px', color: '#3a4650',
                        marginTop: '6px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}>
                        {link.url}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER NOTE */}
        <div style={{
          marginTop: '48px',
          padding: '16px 20px',
          background: '#0a0a0a',
          border: '1px solid #1a1a1a',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5a6872" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '11px', color: '#5a6872',
          }}>
            All links open in a new tab. IDs and keys shown are for reference only.
          </span>
        </div>
      </div>
    </>
  );
}
