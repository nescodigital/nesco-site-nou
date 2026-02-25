'use client';

import { useRouter } from 'next/navigation';

const cards = [
  {
    title: 'Status',
    desc: 'Radiografie site — pagini active, status, conexiuni',
    href: '/admin/status',
    color: '#56db84',
    label: 'Deschide radiografia',
    icon: 'M22 12h-4l-3 9L9 3l-3 9H2',
  },
  {
    title: 'Leads Overview',
    desc: 'Surse de lead-uri, Pixel events, CTAs pe fiecare pagina',
    href: '/admin/leads',
    color: '#60a5fa',
    label: 'Vezi lead-urile',
    icon: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 8v4l3 3',
  },
  {
    title: 'Todo / Roadmap',
    desc: 'Ce mai e de facut — pagini, features, content',
    href: '/admin/roadmap',
    color: '#fb923c',
    label: 'Vezi roadmap',
    icon: 'M9 11l3 3L22 4 M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11',
  },
  {
    title: 'Quick Links',
    desc: 'Acces rapid — GA, Meta, TidyCal, Vercel, Search Console',
    href: '/admin/links',
    color: '#a78bfa',
    label: 'Deschide linkuri',
    icon: 'M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71 M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71',
  },
  {
    title: 'SEO Audit',
    desc: 'Meta titles, descriptions, lungime, pagini indexate',
    href: '/admin/seo',
    color: '#facc15',
    label: 'Auditeaza SEO',
    icon: 'M11 19a8 8 0 100-16 8 8 0 000 16z M21 21l-4.35-4.35',
  },
  {
    title: 'Blog Images',
    desc: 'Status imagini blog — prezente, lipsa, placeholder',
    href: '/admin/blog-images',
    color: '#f472b6',
    label: 'Vezi imaginile',
    icon: 'M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z M12 17a4 4 0 100-8 4 4 0 000 8z',
  },
  {
    title: 'Conversion Funnels',
    desc: 'Flow-uri vizuale — cum ajung userii la conversie',
    href: '/admin/funnels',
    color: '#22d3ee',
    label: 'Vezi funnels',
    icon: 'M6 3v12 M18 9a3 3 0 100-6 3 3 0 000 6z M6 21a3 3 0 100-6 3 3 0 000 6z M18 9a9 9 0 01-9 9',
  },
  {
    title: 'Affiliate Links',
    desc: 'Linkuri afiliate — status, clickuri, placeholdere',
    href: '/admin/affiliates',
    color: '#4ade80',
    label: 'Vezi affiliate',
    icon: 'M12 1v22 M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6',
  },
];

export default function AdminDashboard() {
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem('admin_auth');
    window.location.reload();
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Inter:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          background: #050505;
          color: #dce4e8;
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
        }
        body::before {
          content: '';
          position: fixed; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 0; opacity: 0.4;
        }
      `}} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        padding: '48px 40px 100px',
        maxWidth: '960px',
        margin: '0 auto',
      }}>

        {/* HEADER */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '60px',
          paddingBottom: '24px',
          borderBottom: '1px solid #1a1a1a',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img
              src="https://i0.wp.com/nescodigital.com/wp-content/uploads/2024/09/nescodigital-logo-invert.png"
              alt="Nesco Digital"
              style={{ height: '24px', width: 'auto' }}
            />
            <span style={{ fontWeight: 300, fontSize: '14px', color: '#5a6872' }}>/ admin</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '10px',
              color: '#5a6872',
              background: '#0a0a0a',
              border: '1px solid #1a1a1a',
              padding: '5px 10px',
              borderRadius: '4px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase' as const,
            }}>
              Admin Panel
            </div>
            <button
              onClick={handleLogout}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '10px',
                color: '#f14a4a',
                background: 'rgba(241,74,74,0.08)',
                border: '1px solid rgba(241,74,74,0.2)',
                padding: '5px 10px',
                borderRadius: '4px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase' as const,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(241,74,74,0.15)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(241,74,74,0.08)'; }}
            >
              Logout
            </button>
          </div>
        </div>

        {/* TITLE */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '10px',
            color: '#5a6872',
            letterSpacing: '0.12em',
            textTransform: 'uppercase' as const,
            marginBottom: '8px',
          }}>
            DASHBOARD
          </div>
          <h1 style={{
            fontFamily: "'Satoshi', sans-serif",
            fontSize: '28px',
            fontWeight: 800,
            color: '#dce4e8',
            letterSpacing: '-0.5px',
            margin: 0,
          }}>
            Admin Dashboard
          </h1>
        </div>

        {/* VERCEL ANALYTICS */}
        <a
          href="https://vercel.com/team-xytn-nbzca-k9ga-y28-gqz-vvyw-os-projects/nesco-site-nou/analytics"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block',
            background: '#0a0a0a',
            border: '1px solid #1a1a1a',
            borderRadius: '12px',
            padding: '32px',
            marginBottom: '24px',
            textDecoration: 'none',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(86,219,132,0.3)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#1a1a1a';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          {/* Top accent bar */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, #56db84, #3b82f6)',
          }} />
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              {/* Vercel triangle icon */}
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(86,219,132,0.1)',
                border: '1px solid rgba(86,219,132,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#56db84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18" />
                  <path d="M7 16l4-8 4 6 5-10" />
                </svg>
              </div>
              <div>
                <div style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#dce4e8',
                  marginBottom: '4px',
                }}>
                  Vercel Analytics
                </div>
                <div style={{
                  fontSize: '13px',
                  color: '#5a6872',
                  lineHeight: 1.5,
                }}>
                  Trafic, vizitatori, page views, top pagini — date live din Vercel
                </div>
              </div>
            </div>
            <div style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '11px',
              color: '#56db84',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              letterSpacing: '0.04em',
              flexShrink: 0,
            }}>
              Deschide Analytics
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#56db84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </div>
          </div>
        </a>

        {/* CARDS GRID */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '16px',
        }}>
          {cards.map((card) => (
            <div
              key={card.href}
              onClick={() => router.push(card.href)}
              style={{
                background: '#0a0a0a',
                border: '1px solid #1a1a1a',
                borderRadius: '12px',
                padding: '28px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${card.color}44`;
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#1a1a1a';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Top accent bar */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '2px',
                background: `linear-gradient(90deg, ${card.color}, ${card.color}33)`,
              }} />

              {/* Icon */}
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: `${card.color}1a`,
                border: `1px solid ${card.color}33`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={card.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={card.icon} />
                </svg>
              </div>

              <div style={{
                fontFamily: "'Satoshi', sans-serif",
                fontSize: '18px',
                fontWeight: 700,
                color: '#dce4e8',
                marginBottom: '8px',
              }}>
                {card.title}
              </div>

              <div style={{
                fontSize: '13px',
                color: '#5a6872',
                lineHeight: 1.6,
                marginBottom: '20px',
              }}>
                {card.desc}
              </div>

              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '11px',
                color: card.color,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                letterSpacing: '0.04em',
              }}>
                {card.label}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={card.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
