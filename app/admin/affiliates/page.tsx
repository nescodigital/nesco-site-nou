'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';

const ACCENT = '#4ade80';

interface AffiliateEntry {
  tool: string;
  url: string;
  pages: string[];
  status: 'active' | 'placeholder' | 'pending';
}

const affiliateData: AffiliateEntry[] = [
  {
    tool: 'Shopify',
    url: 'PLACEHOLDER',
    pages: [
      'blog/cele-mai-bune-landing-page-builders',
      'en/blog/best-landing-page-builders',
      'ge/blog/beste-landing-page-builder',
    ],
    status: 'placeholder',
  },
  {
    tool: 'SamCart',
    url: 'PLACEHOLDER',
    pages: [
      'blog/cum-construiesti-funnel-vanzari',
      'en/blog/how-to-build-sales-funnel',
      'ge/blog/sales-funnel-aufbauen-anleitung',
    ],
    status: 'placeholder',
  },
  {
    tool: 'Systeme.io',
    url: 'PLACEHOLDER',
    pages: [],
    status: 'placeholder',
  },
  {
    tool: 'ActiveCampaign',
    url: '#AFFILIATE_ACTIVECAMPAIGN',
    pages: [
      'blog/cele-mai-bune-platforme-email-marketing',
      'blog/automatizare-marketing-ghid-tools',
      'blog/cum-construiesti-funnel-vanzari',
      'en/blog/best-email-marketing-platforms',
      'en/blog/marketing-automation-tools-guide',
      'en/blog/how-to-build-sales-funnel',
      'ge/blog/beste-email-marketing-plattformen',
      'ge/blog/marketing-automatisierung-tools-leitfaden',
      'ge/blog/sales-funnel-aufbauen-anleitung',
    ],
    status: 'pending',
  },
  {
    tool: 'Unbounce',
    url: '#AFFILIATE_UNBOUNCE',
    pages: [
      'blog/cele-mai-bune-landing-page-builders',
      'blog/cum-construiesti-funnel-vanzari',
      'en/blog/best-landing-page-builders',
      'en/blog/how-to-build-sales-funnel',
      'ge/blog/beste-landing-page-builder',
      'ge/blog/sales-funnel-aufbauen-anleitung',
    ],
    status: 'pending',
  },
  {
    tool: 'Supermetrics',
    url: '#AFFILIATE_SUPERMETRICS',
    pages: [
      'blog/cele-mai-bune-tool-uri-ai-marketing',
      'blog/automatizare-marketing-ghid-tools',
      'en/blog/best-ai-tools-digital-marketing',
      'en/blog/marketing-automation-tools-guide',
      'ge/blog/beste-ki-tools-digitales-marketing',
      'ge/blog/marketing-automatisierung-tools-leitfaden',
    ],
    status: 'pending',
  },
  {
    tool: 'Landbot',
    url: '#AFFILIATE_LANDBOT',
    pages: [
      'blog/cele-mai-bune-chatbot-live-chat',
      'en/blog/best-chatbot-live-chat-tools',
      'ge/blog/beste-chatbot-live-chat-tools',
    ],
    status: 'pending',
  },
  {
    tool: 'AdCreative.ai',
    url: '#AFFILIATE_ADCREATIVE',
    pages: [
      'blog/cele-mai-bune-tool-uri-ai-marketing',
      'en/blog/best-ai-tools-digital-marketing',
      'ge/blog/beste-ki-tools-digitales-marketing',
    ],
    status: 'pending',
  },
  {
    tool: 'Sender',
    url: '#AFFILIATE_SENDER',
    pages: [
      'blog/cele-mai-bune-platforme-email-marketing',
      'en/blog/best-email-marketing-platforms',
      'ge/blog/beste-email-marketing-plattformen',
    ],
    status: 'pending',
  },
  {
    tool: 'Kit (ConvertKit)',
    url: '#AFFILIATE_KIT',
    pages: [
      'blog/cele-mai-bune-platforme-email-marketing',
      'en/blog/best-email-marketing-platforms',
      'ge/blog/beste-email-marketing-plattformen',
    ],
    status: 'pending',
  },
  {
    tool: 'Thinkific',
    url: '#AFFILIATE_THINKIFIC',
    pages: [
      'blog/cum-creezi-vinzi-cursuri-online',
      'en/blog/how-to-create-sell-online-courses',
      'ge/blog/online-kurse-erstellen-verkaufen',
    ],
    status: 'pending',
  },
];

const statusConfig = {
  active: { label: 'Active', color: '#4ade80', bg: 'rgba(74,222,128,0.1)', border: 'rgba(74,222,128,0.25)' },
  placeholder: { label: 'Placeholder', color: '#5a6872', bg: 'rgba(90,104,114,0.1)', border: 'rgba(90,104,114,0.25)' },
  pending: { label: 'Pending', color: '#fb923c', bg: 'rgba(251,146,60,0.1)', border: 'rgba(251,146,60,0.25)' },
};

const CLICK_STORAGE_KEY = 'nesco_affiliate_clicks';

export default function AdminAffiliatesPage() {
  const [clicks, setClicks] = useState<Record<string, number>>({});
  const [expandedTool, setExpandedTool] = useState<string | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CLICK_STORAGE_KEY);
      if (stored) setClicks(JSON.parse(stored));
    } catch {}
  }, []);

  const handleTestClick = useCallback((tool: string, url: string) => {
    const updated = { ...clicks, [tool]: (clicks[tool] || 0) + 1 };
    setClicks(updated);
    try {
      localStorage.setItem(CLICK_STORAGE_KEY, JSON.stringify(updated));
    } catch {}
    if (url && !url.startsWith('#')) {
      window.open(url, '_blank');
    }
  }, [clicks]);

  const totalLinks = affiliateData.length;
  const activeLinks = affiliateData.filter((a) => a.status === 'active').length;
  const pendingLinks = affiliateData.filter((a) => a.status === 'pending').length;
  const placeholderLinks = affiliateData.filter((a) => a.status === 'placeholder').length;

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
        <div style={{ marginBottom: '40px' }}>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '10px', color: '#5a6872',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            marginBottom: '8px',
          }}>
            AFFILIATE LINKS
          </div>
          <h1 style={{
            fontFamily: "'Satoshi', sans-serif",
            fontSize: '28px', fontWeight: 800,
            color: '#dce4e8', letterSpacing: '-0.5px', margin: 0,
          }}>
            Affiliate Link Tracker
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
            { label: 'Total Links', value: totalLinks, color: ACCENT },
            { label: 'Active', value: activeLinks, color: '#4ade80' },
            { label: 'Pending (placeholder href)', value: pendingLinks, color: '#fb923c' },
            { label: 'No URL Set', value: placeholderLinks, color: '#5a6872' },
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

        {/* AFFILIATE CARDS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {affiliateData.map((aff) => {
            const sc = statusConfig[aff.status];
            const isExpanded = expandedTool === aff.tool;
            const clickCount = clicks[aff.tool] || 0;
            const isClickable = aff.status === 'active' && aff.url && !aff.url.startsWith('#');

            return (
              <div key={aff.tool} style={{
                background: '#0a0a0a',
                border: '1px solid #1a1a1a',
                borderRadius: '10px',
                overflow: 'hidden',
                transition: 'border-color 0.2s',
              }}>
                {/* Main row */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '180px 1fr 120px 100px 120px',
                  gap: '0',
                  padding: '16px 20px',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                onClick={() => setExpandedTool(isExpanded ? null : aff.tool)}
                onMouseEnter={(e) => {
                  (e.currentTarget.parentElement as HTMLElement).style.borderColor = `${ACCENT}44`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget.parentElement as HTMLElement).style.borderColor = '#1a1a1a';
                }}
                >
                  {/* Tool name */}
                  <div style={{
                    fontFamily: "'Satoshi', sans-serif",
                    fontSize: '15px', fontWeight: 700,
                    color: '#dce4e8',
                    display: 'flex', alignItems: 'center', gap: '8px',
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                      <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                    </svg>
                    {aff.tool}
                  </div>

                  {/* URL */}
                  <div style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '11px',
                    color: aff.url === 'PLACEHOLDER' ? '#3a4650' : (aff.url.startsWith('#') ? '#fb923c' : ACCENT),
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    paddingRight: '12px',
                  }}>
                    {aff.url}
                  </div>

                  {/* Click count */}
                  <div style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '11px', color: '#5a6872',
                    display: 'flex', alignItems: 'center', gap: '6px',
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3" />
                    </svg>
                    {clickCount} clicks
                  </div>

                  {/* Status badge */}
                  <div>
                    <span style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '10px',
                      color: sc.color,
                      background: sc.bg,
                      border: `1px solid ${sc.border}`,
                      padding: '3px 8px',
                      borderRadius: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}>
                      {sc.label}
                    </span>
                  </div>

                  {/* Test click button */}
                  <div style={{ textAlign: 'right' }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTestClick(aff.tool, aff.url);
                      }}
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: '10px',
                        color: isClickable ? ACCENT : '#3a4650',
                        background: isClickable ? `${ACCENT}15` : '#0d0d0d',
                        border: `1px solid ${isClickable ? `${ACCENT}30` : '#1a1a1a'}`,
                        padding: '5px 12px',
                        borderRadius: '6px',
                        cursor: isClickable ? 'pointer' : 'not-allowed',
                        letterSpacing: '0.04em',
                        transition: 'all 0.2s',
                      }}
                    >
                      Test Click
                    </button>
                  </div>
                </div>

                {/* Expanded pages list */}
                {isExpanded && aff.pages.length > 0 && (
                  <div style={{
                    borderTop: '1px solid #141414',
                    padding: '14px 20px',
                    background: '#080808',
                  }}>
                    <div style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '10px', color: '#5a6872',
                      letterSpacing: '0.06em', textTransform: 'uppercase',
                      marginBottom: '10px',
                    }}>
                      Appears on {aff.pages.length} page{aff.pages.length !== 1 ? 's' : ''}:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {aff.pages.map((page) => (
                        <span key={page} style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: '11px',
                          color: ACCENT,
                          background: `${ACCENT}10`,
                          border: `1px solid ${ACCENT}20`,
                          padding: '4px 10px',
                          borderRadius: '4px',
                        }}>
                          /{page}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {isExpanded && aff.pages.length === 0 && (
                  <div style={{
                    borderTop: '1px solid #141414',
                    padding: '14px 20px',
                    background: '#080808',
                  }}>
                    <div style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '11px', color: '#3a4650',
                    }}>
                      No pages found in codebase yet.
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* NOTES */}
        <div style={{
          marginTop: '32px',
          background: '#0a0a0a',
          border: '1px solid #1a1a1a',
          borderRadius: '10px',
          padding: '20px',
        }}>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '10px', color: '#5a6872',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            marginBottom: '12px',
          }}>
            Notes
          </div>
          <ul style={{
            fontSize: '12px', color: '#5a6872', lineHeight: 2,
            paddingLeft: '16px',
          }}>
            <li>All <span style={{ fontFamily: "'DM Mono', monospace", color: '#fb923c' }}>#AFFILIATE_*</span> placeholder hrefs need replacing with real affiliate URLs.</li>
            <li>Click counts are stored in <span style={{ fontFamily: "'DM Mono', monospace", color: ACCENT }}>localStorage</span> (browser-local, for testing only).</li>
            <li>Shopify, SamCart, and Systeme.io are referenced in content but have no affiliate link placeholders in the codebase yet.</li>
            <li>&quot;Test Click&quot; only opens a new tab for links with real URLs (not #PLACEHOLDER hrefs).</li>
          </ul>
        </div>
      </div>
    </>
  );
}
