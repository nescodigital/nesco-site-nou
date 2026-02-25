'use client';

import { useEffect, useState, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';

/* ─── Types ───────────────────────────────────────────────── */

interface Lead {
  id: string;
  type: 'contact' | 'newsletter' | 'growth-sprint';
  name: string;
  email: string;
  company?: string;
  phone?: string;
  source?: string;
  services?: string;
  budget?: string;
  message?: string;
  date: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  referrer?: string;
  landingPage?: string;
  industry?: string;
  status?: 'nou' | 'contactat' | 'convertit';
  notes?: string;
  dealValue?: string;
}

interface LeadsData {
  leads: Lead[];
  stats: { total: number; today: number; thisWeek: number };
}

type StatusValue = 'nou' | 'contactat' | 'convertit';

const STATUS_COLORS: Record<StatusValue, { bg: string; border: string; text: string }> = {
  nou: { bg: 'rgba(96,165,250,0.12)', border: 'rgba(96,165,250,0.3)', text: '#60a5fa' },
  contactat: { bg: 'rgba(250,204,21,0.12)', border: 'rgba(250,204,21,0.3)', text: '#facc15' },
  convertit: { bg: 'rgba(86,219,132,0.12)', border: 'rgba(86,219,132,0.3)', text: '#56db84' },
};

const TYPE_LABELS: Record<string, { label: string; color: string }> = {
  contact: { label: 'Contact', color: '#60a5fa' },
  newsletter: { label: 'Newsletter', color: '#a78bfa' },
  'growth-sprint': { label: 'Growth Sprint', color: '#56db84' },
};

/* ─── Helpers ─────────────────────────────────────────────── */

function getChannelLabel(lead: Lead): string {
  if (lead.utm_source) {
    const s = lead.utm_source.toLowerCase();
    if (s.includes('facebook') || s.includes('fb') || s.includes('meta')) return 'Facebook Ads';
    if (s.includes('google')) return 'Google Ads';
    if (s.includes('instagram') || s.includes('ig')) return 'Instagram';
    if (s.includes('tiktok')) return 'TikTok';
    if (s.includes('linkedin')) return 'LinkedIn';
    return lead.utm_source;
  }
  if (lead.referrer) {
    try {
      const host = new URL(lead.referrer).hostname.replace('www.', '');
      if (host.includes('google')) return 'Organic (Google)';
      if (host.includes('facebook') || host.includes('fb')) return 'Organic (Facebook)';
      if (host.includes('instagram')) return 'Organic (Instagram)';
      return `Organic (${host})`;
    } catch {
      return 'Referral';
    }
  }
  if (lead.source) return lead.source;
  return 'Direct';
}

function getChannelGroup(lead: Lead): string {
  const label = getChannelLabel(lead).toLowerCase();
  if (label.includes('facebook') || label.includes('meta') || label.includes('fb')) return 'facebook';
  if (label.includes('google')) return 'google';
  if (label.includes('organic')) return 'organic';
  if (label === 'direct') return 'direct';
  return 'other';
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('ro-RO', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function formatDateTime(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleString('ro-RO', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });
}

function isWithinDays(dateStr: string, days: number): boolean {
  const d = new Date(dateStr);
  const now = new Date();
  const diff = now.getTime() - d.getTime();
  return diff <= days * 86400000;
}

const PER_PAGE = 25;

/* ─── Demo Data Generator ─────────────────────────────────── */

function generateDemoLeads(): Lead[] {
  const names = [
    'Andrei Popescu', 'Maria Ionescu', 'Alexandru Dumitrescu', 'Elena Stancu',
    'Cristian Marin', 'Ana Popa', 'Mihai Gheorghe', 'Ioana Radu',
    'Vlad Stoica', 'Simona Matei', 'George Florea', 'Diana Ciobanu',
    'Adrian Moldovan', 'Laura Neagu', 'Stefan Barbu', 'Raluca Dinu',
    'Bogdan Preda', 'Alina Tanase', 'Razvan Voicu', 'Catalina Nistor',
    'Dragos Ene', 'Gabriela Stan', 'Cosmin Lazar', 'Andreea Manole',
    'Ionut Serban', 'Bianca Pavel', 'Marius Iordache', 'Valentina Dumitru',
    'Florin Anghel', 'Teodora Chiriac', 'Dan Constantinescu', 'Monica Ursu',
    'Robert Tudor', 'Oana Mocanu', 'Paul Vasile', 'Claudia Badea',
    'Lucian Mihalache', 'Sandra Nica', 'Sorin Dragomir', 'Irina Oprea',
  ];
  const companies = [
    'TechStar SRL', 'Digital Wave', 'Romsoft Solutions', 'GreenBio SA',
    'AutoParts Pro', 'FashionBox', 'BuildMaster', 'FoodExpress',
    'MedLife Plus', 'EduSmart', 'HomeDecor.ro', 'SportFit',
    'CloudNine Tech', 'AgroVerde', 'FinancePro', 'TravelRo',
    'PetShop Online', 'BeautyLab', 'JuridicPlus', 'ImobExpert',
    null, null, null, null, null,
  ];
  const services = [
    'Reclame Platite, SEO', 'Social Media, Email Marketing', 'Webdesign, SEO',
    'Strategie Digitala', 'Magazin Online, Reclame Platite', 'Mentenanta Website',
    'Google Ads, Facebook Ads', 'SEO, Content Marketing', 'Email Marketing',
    'Social Media', 'Reclame Platite', null,
  ];
  const budgets = [
    'Sub 1.000€', '1.000 – 3.000€', '3.000 – 5.000€', 'Peste 5.000€',
    '€1.000 – €3.000 / luna', '€3.000 – €5.000 / luna', '€5.000 – €10.000 / luna', null,
  ];
  const sources = [
    'contact-page', 'popup-hero', 'growth-sprint-starter', 'growth-sprint-pro',
    'newsletter-popup', 'contact-footer', 'exit-popup', 'quiz-ecommerce',
  ];
  const utmSources = [
    { utm_source: 'facebook', utm_medium: 'cpc', utm_campaign: 'lead-gen-feb' },
    { utm_source: 'facebook', utm_medium: 'cpc', utm_campaign: 'retargeting-q1' },
    { utm_source: 'google', utm_medium: 'cpc', utm_campaign: 'brand-search' },
    { utm_source: 'google', utm_medium: 'cpc', utm_campaign: 'servicii-seo' },
    { utm_source: 'instagram', utm_medium: 'social', utm_campaign: 'stories-promo' },
    { utm_source: 'linkedin', utm_medium: 'sponsored', utm_campaign: 'b2b-outreach' },
    { utm_source: 'tiktok', utm_medium: 'cpc', utm_campaign: 'awareness' },
    { utm_source: undefined, utm_medium: undefined, utm_campaign: undefined },
    { utm_source: undefined, utm_medium: undefined, utm_campaign: undefined },
    { utm_source: undefined, utm_medium: undefined, utm_campaign: undefined },
  ];
  const referrers = [
    'https://www.google.com/', 'https://www.google.ro/', 'https://www.facebook.com/',
    'https://www.instagram.com/', 'https://www.linkedin.com/feed/',
    'https://clutch.co/profile/nesco-digital', 'https://www.emag.ro/',
    '', '', '', '',
  ];
  const landingPages = [
    '/contact', '/perfect-fit', '/reclame-platite', '/webdesign',
    '/reclame-platite/facebook-ads', '/reclame-platite/google-ads',
    '/strategie-digitala-ro', '/solutii-seo-ro', '/', '/en/lets-talk',
  ];
  const statuses: (StatusValue | undefined)[] = [
    'nou', 'nou', 'nou', 'nou', 'nou',
    'contactat', 'contactat', 'contactat',
    'convertit', 'convertit',
    undefined,
  ];
  const notesList = [
    'A sunat, interesat de pachetul Pro. Revine saptamana viitoare.',
    'Trimis oferta pe email. Asteapta raspuns.',
    'Nu raspunde la telefon. Retrimis email.',
    'Contract semnat! Incepe luna viitoare.',
    'Interesat de SEO + Ads combo. Buget ok.',
    'A cerut referinte de la alti clienti.',
    '',  '', '', '', '', '', '',
  ];
  const messages = [
    'Buna, as vrea o oferta pentru servicii de marketing digital.',
    'Suntem interesati de o colaborare pe termen lung.',
    'Vreau sa cresc vanzarile online cu minim 30%.',
    'Am nevoie de un site nou + campanii Google Ads.',
    'Caut o agentie care sa gestioneze tot marketingul digital.',
    '', '', '', '',
  ];
  const industries = [
    'E-commerce', 'SaaS / Tech', 'Servicii profesionale', 'HoReCa',
    'Retail', 'Imobiliare', 'Sanatate', 'Educatie', 'Productie',
    'Auto', 'Finante', 'Turism', 'Beauty / Wellness', 'Altele',
    null, null, null,
  ];
  const dealValues = [
    '1.500€', '2.800€', '5.000€', '3.200€', '8.500€',
    '12.000€', '950€', '4.200€', '6.700€',
  ];
  const types: Lead['type'][] = [
    'contact', 'contact', 'contact', 'contact', 'contact',
    'newsletter', 'newsletter', 'newsletter',
    'growth-sprint', 'growth-sprint',
  ];

  const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

  const leads: Lead[] = [];
  const now = Date.now();

  for (let i = 0; i < 42; i++) {
    const type = pick(types);
    const name = type === 'newsletter' ? (Math.random() > 0.6 ? pick(names) : '') : pick(names);
    const daysAgo = Math.floor(Math.random() * 45);
    const hoursAgo = Math.floor(Math.random() * 24);
    const date = new Date(now - daysAgo * 86400000 - hoursAgo * 3600000);
    const utm = pick(utmSources);
    const status = pick(statuses);
    const notes = status === 'contactat' || status === 'convertit' ? pick(notesList) : (Math.random() > 0.8 ? pick(notesList) : '');

    leads.push({
      id: crypto.randomUUID(),
      type,
      name: name,
      email: name
        ? name.toLowerCase().replace(/\s+/g, '.').normalize('NFD').replace(/[\u0300-\u036f]/g, '') + '@' + pick(['gmail.com', 'yahoo.com', 'firma.ro', 'outlook.com', 'company.ro'])
        : `user${i + 1}@${pick(['gmail.com', 'yahoo.ro', 'hotmail.com'])}`,
      company: type !== 'newsletter' ? pick(companies) || undefined : undefined,
      phone: type !== 'newsletter' ? `07${Math.floor(10000000 + Math.random() * 90000000)}` : undefined,
      source: pick(sources),
      services: type === 'contact' || type === 'growth-sprint' ? pick(services) || undefined : undefined,
      budget: type === 'contact' ? pick(budgets) || undefined : undefined,
      message: type === 'contact' ? pick(messages) || undefined : undefined,
      date: date.toISOString(),
      utm_source: utm.utm_source,
      utm_medium: utm.utm_medium,
      utm_campaign: utm.utm_campaign,
      referrer: pick(referrers) || undefined,
      landingPage: pick(landingPages),
      industry: type !== 'newsletter' ? pick(industries) || undefined : undefined,
      status: status,
      notes: notes || undefined,
      dealValue: status === 'convertit' ? pick(dealValues) : undefined,
    });
  }

  // Sort newest first
  leads.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return leads;
}

/* ─── Page ────────────────────────────────────────────────── */

export default function LeadsCRM() {
  const router = useRouter();
  const [data, setData] = useState<LeadsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [page, setPage] = useState(0);

  // Filters
  const [filterType, setFilterType] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterChannel, setFilterChannel] = useState<string>('all');
  const [filterDays, setFilterDays] = useState<number>(0); // 0 = all
  const [search, setSearch] = useState('');

  // Notes + dealValue editing
  const [editingNotes, setEditingNotes] = useState<Record<string, string>>({});
  const [editingDealValue, setEditingDealValue] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch('/api/admin/leads?limit=500')
      .then((r) => r.ok ? r.json() : null)
      .then((d) => { setData(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const leads = data?.leads || [];

  const filtered = useMemo(() => {
    let result = leads;
    if (filterType !== 'all') result = result.filter((l) => l.type === filterType);
    if (filterStatus !== 'all') result = result.filter((l) => (l.status || 'nou') === filterStatus);
    if (filterChannel !== 'all') result = result.filter((l) => getChannelGroup(l) === filterChannel);
    if (filterDays > 0) result = result.filter((l) => isWithinDays(l.date, filterDays));
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter((l) =>
        l.name?.toLowerCase().includes(q) ||
        l.email?.toLowerCase().includes(q) ||
        l.company?.toLowerCase().includes(q)
      );
    }
    return result;
  }, [leads, filterType, filterStatus, filterChannel, filterDays, search]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paged = filtered.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

  // Reset page when filters change
  useEffect(() => { setPage(0); }, [filterType, filterStatus, filterChannel, filterDays, search]);

  // Stats
  const stats = useMemo(() => {
    const today = new Date().toISOString().slice(0, 10);
    const weekAgo = Date.now() - 7 * 86400000;
    return {
      total: leads.length,
      today: leads.filter((l) => l.date.startsWith(today)).length,
      week: leads.filter((l) => new Date(l.date).getTime() >= weekAgo).length,
      contact: leads.filter((l) => l.type === 'contact').length,
      newsletter: leads.filter((l) => l.type === 'newsletter').length,
      growthSprint: leads.filter((l) => l.type === 'growth-sprint').length,
    };
  }, [leads]);

  // Generic patch helper — optimistic update + API call
  const patchLead = useCallback(async (leadId: string, patch: Partial<Lead>) => {
    setData((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        leads: prev.leads.map((l) => l.id === leadId ? { ...l, ...patch } : l),
      };
    });

    await fetch(`/api/admin/leads/${leadId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(patch),
    }).catch(() => {});
  }, []);


  const handleExport = () => {
    window.open('/api/admin/leads/export', '_blank');
  };

  const loadDemoData = () => {
    const demoLeads = generateDemoLeads();
    const today = new Date().toISOString().slice(0, 10);
    const weekAgo = Date.now() - 7 * 86400000;
    setData({
      leads: demoLeads,
      stats: {
        total: demoLeads.length,
        today: demoLeads.filter((l) => l.date.startsWith(today)).length,
        thisWeek: demoLeads.filter((l) => new Date(l.date).getTime() >= weekAgo).length,
      },
    });
    setLoading(false);
  };

  /* ─── Shared styles ─────────────────────────────────────── */

  const cardStyle: React.CSSProperties = {
    background: '#0a0a0a',
    border: '1px solid #1a1a1a',
    borderRadius: '10px',
    padding: '14px 16px',
  };

  const monoLabel: React.CSSProperties = {
    fontFamily: "'DM Mono', monospace",
    fontSize: '9px',
    color: '#5a6872',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  };

  const filterBtnStyle = (active: boolean): React.CSSProperties => ({
    fontFamily: "'DM Mono', monospace",
    fontSize: '10px',
    padding: '4px 10px',
    borderRadius: '4px',
    border: `1px solid ${active ? 'rgba(86,219,132,0.3)' : '#1a1a1a'}`,
    background: active ? 'rgba(86,219,132,0.1)' : 'transparent',
    color: active ? '#56db84' : '#5a6872',
    cursor: 'pointer',
    letterSpacing: '0.04em',
    transition: 'all 0.15s ease',
  });

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
        @keyframes spin { to { transform: rotate(360deg); } }
        .crm-wrap { padding: 48px 40px 100px; max-width: 1100px; margin: 0 auto; position: relative; z-index: 1; }
        .crm-stats { display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px; margin-bottom: 16px; }
        .crm-filters { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; margin-bottom: 16px; }
        .crm-filter-group { display: flex; gap: 3px; }
        .crm-table { width: 100%; border-collapse: collapse; }
        .crm-table th {
          text-align: left;
          padding: 8px 10px;
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          color: #5a6872;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-bottom: 1px solid #1a1a1a;
        }
        .crm-table td {
          padding: 10px;
          font-size: 12px;
          border-bottom: 1px solid #111;
          vertical-align: middle;
        }
        .crm-table tr:hover td { background: #0d0d0d; }
        .crm-detail { background: #0d0d0d; border-bottom: 1px solid #1a1a1a; }
        .crm-detail td { padding: 16px 20px; }
        .crm-detail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .crm-detail-section h4 {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          color: #56db84;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .crm-detail-row {
          display: flex;
          justify-content: space-between;
          padding: 4px 0;
          font-size: 12px;
        }
        .crm-detail-row .label { color: #5a6872; }
        .crm-detail-row .value { color: #dce4e8; font-family: 'DM Mono', monospace; font-size: 11px; text-align: right; max-width: 60%; word-break: break-all; }
        @media (max-width: 768px) {
          .crm-wrap { padding: 20px 12px 60px; }
          .crm-stats { grid-template-columns: repeat(3, 1fr); }
          .crm-detail-grid { grid-template-columns: 1fr; }
          .crm-table { font-size: 11px; }
          .hide-mobile { display: none; }
        }
        @media (max-width: 480px) {
          .crm-stats { grid-template-columns: repeat(2, 1fr); }
        }
      `}} />

      <div className="crm-wrap">

        {/* ═══ HEADER ═══ */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '24px',
          paddingBottom: '16px',
          borderBottom: '1px solid #1a1a1a',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={() => router.push('/admin')}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '10px',
                color: '#5a6872',
                background: 'transparent',
                border: '1px solid #1a1a1a',
                padding: '5px 10px',
                borderRadius: '4px',
                cursor: 'pointer',
                letterSpacing: '0.04em',
              }}
            >
              ← Dashboard
            </button>
            <div style={{ ...monoLabel, fontSize: '13px', color: '#dce4e8', fontWeight: 500 }}>
              Leads CRM
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={loadDemoData}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '10px',
                color: '#fb923c',
                background: 'rgba(251,146,60,0.08)',
                border: '1px solid rgba(251,146,60,0.2)',
                padding: '6px 14px',
                borderRadius: '6px',
                cursor: 'pointer',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                transition: 'all 0.15s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(251,146,60,0.15)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(251,146,60,0.08)'; }}
            >
              Demo Data
            </button>
            <button
              onClick={handleExport}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '10px',
                color: '#56db84',
                background: 'rgba(86,219,132,0.08)',
                border: '1px solid rgba(86,219,132,0.2)',
                padding: '6px 14px',
                borderRadius: '6px',
                cursor: 'pointer',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                transition: 'all 0.15s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(86,219,132,0.15)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(86,219,132,0.08)'; }}
            >
              Export CSV
            </button>
          </div>
        </div>

        {/* ═══ STATS ═══ */}
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '60px 0' }}>
            <div style={{
              width: '18px', height: '18px',
              border: '2px solid rgba(86,219,132,0.2)',
              borderTopColor: '#56db84',
              borderRadius: '50%',
              animation: 'spin 0.8s linear infinite',
            }} />
          </div>
        ) : (
          <>
            <div className="crm-stats">
              {[
                { label: 'Total', value: stats.total, color: '#dce4e8' },
                { label: 'Azi', value: stats.today, color: '#56db84' },
                { label: 'Saptamana', value: stats.week, color: '#60a5fa' },
                { label: 'Contact', value: stats.contact, color: '#60a5fa' },
                { label: 'Newsletter', value: stats.newsletter, color: '#a78bfa' },
                { label: 'Growth Sprint', value: stats.growthSprint, color: '#56db84' },
              ].map((s) => (
                <div key={s.label} style={{ ...cardStyle, borderLeft: `2px solid ${s.color}` }}>
                  <div style={monoLabel}>{s.label}</div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: '#dce4e8', marginTop: '4px' }}>
                    {s.value}
                  </div>
                </div>
              ))}
            </div>

            {/* ═══ FILTERS ═══ */}
            <div className="crm-filters">
              {/* Type */}
              <div className="crm-filter-group">
                {[
                  { value: 'all', label: 'Toate' },
                  { value: 'contact', label: 'Contact' },
                  { value: 'newsletter', label: 'Newsletter' },
                  { value: 'growth-sprint', label: 'G. Sprint' },
                ].map((f) => (
                  <button key={f.value} onClick={() => setFilterType(f.value)} style={filterBtnStyle(filterType === f.value)}>
                    {f.label}
                  </button>
                ))}
              </div>

              {/* Status */}
              <div className="crm-filter-group">
                {[
                  { value: 'all', label: 'Status: Toate' },
                  { value: 'nou', label: 'Nou' },
                  { value: 'contactat', label: 'Contactat' },
                  { value: 'convertit', label: 'Convertit' },
                ].map((f) => (
                  <button key={f.value} onClick={() => setFilterStatus(f.value)} style={filterBtnStyle(filterStatus === f.value)}>
                    {f.label}
                  </button>
                ))}
              </div>

              {/* Channel */}
              <div className="crm-filter-group">
                {[
                  { value: 'all', label: 'Canal: Toate' },
                  { value: 'facebook', label: 'Facebook' },
                  { value: 'google', label: 'Google' },
                  { value: 'organic', label: 'Organic' },
                  { value: 'direct', label: 'Direct' },
                  { value: 'other', label: 'Altele' },
                ].map((f) => (
                  <button key={f.value} onClick={() => setFilterChannel(f.value)} style={filterBtnStyle(filterChannel === f.value)}>
                    {f.label}
                  </button>
                ))}
              </div>

              {/* Date range */}
              <div className="crm-filter-group">
                {[
                  { value: 7, label: '7d' },
                  { value: 30, label: '30d' },
                  { value: 0, label: 'Tot' },
                ].map((f) => (
                  <button key={f.value} onClick={() => setFilterDays(f.value)} style={filterBtnStyle(filterDays === f.value)}>
                    {f.label}
                  </button>
                ))}
              </div>

              {/* Search */}
              <input
                type="text"
                placeholder="Cauta..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '11px',
                  padding: '5px 10px',
                  borderRadius: '4px',
                  border: '1px solid #1a1a1a',
                  background: '#0a0a0a',
                  color: '#dce4e8',
                  outline: 'none',
                  width: '160px',
                  transition: 'border-color 0.15s',
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(86,219,132,0.3)'; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = '#1a1a1a'; }}
              />

              <div style={{ ...monoLabel, marginLeft: 'auto' }}>
                {filtered.length} lead{filtered.length !== 1 ? '-uri' : ''}
              </div>
            </div>

            {/* ═══ TABLE ═══ */}
            <div style={{
              ...cardStyle,
              padding: 0,
              overflow: 'hidden',
              marginBottom: '16px',
            }}>
              <div style={{ overflowX: 'auto' }}>
                <table className="crm-table">
                  <thead>
                    <tr>
                      <th>Data</th>
                      <th>Tip</th>
                      <th>Nume</th>
                      <th>Email</th>
                      <th className="hide-mobile">Companie</th>
                      <th className="hide-mobile">Canal</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paged.map((lead) => {
                      const typeInfo = TYPE_LABELS[lead.type] || TYPE_LABELS.contact;
                      const status = lead.status || 'nou';
                      const statusColor = STATUS_COLORS[status];
                      const isExpanded = expandedId === lead.id;

                      return (
                        <>
                          <tr
                            key={lead.id}
                            onClick={() => setExpandedId(isExpanded ? null : lead.id)}
                            style={{ cursor: 'pointer' }}
                          >
                            <td style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: '#5a6872', whiteSpace: 'nowrap' }}>
                              {formatDate(lead.date)}
                            </td>
                            <td>
                              <span style={{
                                fontFamily: "'DM Mono', monospace",
                                fontSize: '9px',
                                color: typeInfo.color,
                                background: `${typeInfo.color}15`,
                                border: `1px solid ${typeInfo.color}30`,
                                padding: '2px 6px',
                                borderRadius: '4px',
                                letterSpacing: '0.06em',
                                textTransform: 'uppercase',
                                whiteSpace: 'nowrap',
                              }}>
                                {typeInfo.label}
                              </span>
                            </td>
                            <td style={{ fontWeight: 500, color: '#dce4e8' }}>
                              {lead.name || '—'}
                            </td>
                            <td style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', color: '#8a9aa4' }}>
                              {lead.email}
                            </td>
                            <td className="hide-mobile" style={{ color: '#5a6872', fontSize: '11px' }}>
                              {lead.company || '—'}
                            </td>
                            <td className="hide-mobile" style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: '#8a9aa4' }}>
                              {getChannelLabel(lead)}
                            </td>
                            <td>
                              <span
                                style={{
                                  fontFamily: "'DM Mono', monospace",
                                  fontSize: '9px',
                                  padding: '3px 8px',
                                  borderRadius: '4px',
                                  border: `1px solid ${statusColor.border}`,
                                  background: statusColor.bg,
                                  color: statusColor.text,
                                  letterSpacing: '0.06em',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {status}
                              </span>
                            </td>
                          </tr>

                          {/* ── Expanded Detail ── */}
                          {isExpanded && (
                            <tr key={`${lead.id}-detail`} className="crm-detail">
                              <td colSpan={7} style={{ padding: '20px 24px' }}>
                                {/* ── Status dropdown ── */}
                                <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                  <div style={{ ...monoLabel, color: '#56db84', marginBottom: 0 }}>Status</div>
                                  <select
                                    value={status}
                                    onChange={(e) => patchLead(lead.id, { status: e.target.value as StatusValue })}
                                    style={{
                                      fontFamily: "'DM Mono', monospace",
                                      fontSize: '11px',
                                      padding: '6px 28px 6px 10px',
                                      borderRadius: '6px',
                                      border: `1px solid ${statusColor.border}`,
                                      background: statusColor.bg,
                                      color: statusColor.text,
                                      cursor: 'pointer',
                                      letterSpacing: '0.06em',
                                      textTransform: 'uppercase',
                                      fontWeight: 600,
                                      outline: 'none',
                                      appearance: 'none',
                                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%235a6872' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                                      backgroundRepeat: 'no-repeat',
                                      backgroundPosition: 'right 8px center',
                                    }}
                                  >
                                    <option value="nou" style={{ background: '#111', color: '#60a5fa' }}>NOU</option>
                                    <option value="contactat" style={{ background: '#111', color: '#facc15' }}>CONTACTAT</option>
                                    <option value="convertit" style={{ background: '#111', color: '#56db84' }}>CONVERTIT</option>
                                  </select>
                                </div>

                                <div className="crm-detail-grid">
                                  {/* Personal */}
                                  <div className="crm-detail-section">
                                    <h4>Date personale</h4>
                                    {[
                                      ['Nume', lead.name],
                                      ['Email', lead.email],
                                      ['Telefon', lead.phone],
                                      ['Companie', lead.company],
                                      ['Sector activitate', lead.industry],
                                    ].map(([label, value]) => (
                                      <div key={label} className="crm-detail-row">
                                        <span className="label">{label}</span>
                                        <span className="value">{value || '—'}</span>
                                      </div>
                                    ))}
                                  </div>

                                  {/* Services / Business */}
                                  <div className="crm-detail-section">
                                    <h4>Detalii business</h4>
                                    {[
                                      ['Servicii', lead.services],
                                      ['Buget', lead.budget],
                                      ['Mesaj', lead.message],
                                      ['Sursa', lead.source],
                                    ].map(([label, value]) => (
                                      <div key={label} className="crm-detail-row">
                                        <span className="label">{label}</span>
                                        <span className="value">{value || '—'}</span>
                                      </div>
                                    ))}
                                  </div>

                                  {/* Attribution */}
                                  <div className="crm-detail-section">
                                    <h4>Atribuire canal</h4>
                                    {[
                                      ['utm_source', lead.utm_source],
                                      ['utm_medium', lead.utm_medium],
                                      ['utm_campaign', lead.utm_campaign],
                                      ['Referrer', lead.referrer],
                                      ['Landing Page', lead.landingPage],
                                    ].map(([label, value]) => (
                                      <div key={label} className="crm-detail-row">
                                        <span className="label">{label}</span>
                                        <span className="value">{value || '—'}</span>
                                      </div>
                                    ))}
                                  </div>

                                  {/* Conversie + Note */}
                                  <div className="crm-detail-section">
                                    <h4>Conversie</h4>
                                    <div style={{ marginBottom: '12px' }}>
                                      <div style={{ ...monoLabel, marginBottom: '4px', fontSize: '8px' }}>Suma finala</div>
                                      <input
                                        type="text"
                                        value={editingDealValue[lead.id] ?? lead.dealValue ?? ''}
                                        onChange={(e) => setEditingDealValue((prev) => ({ ...prev, [lead.id]: e.target.value }))}
                                        onBlur={() => {
                                          const val = editingDealValue[lead.id];
                                          if (val !== undefined && val !== (lead.dealValue ?? '')) {
                                            patchLead(lead.id, { dealValue: val });
                                          }
                                        }}
                                        placeholder="ex: 3.500€"
                                        style={{
                                          width: '100%',
                                          fontFamily: "'DM Mono', monospace",
                                          fontSize: '12px',
                                          padding: '8px 12px',
                                          background: '#111',
                                          border: '1px solid #1a1a1a',
                                          borderRadius: '6px',
                                          color: '#56db84',
                                          fontWeight: 600,
                                          outline: 'none',
                                          transition: 'border-color 0.15s',
                                        }}
                                        onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(86,219,132,0.3)'; }}
                                      />
                                    </div>

                                    <div style={{ ...monoLabel, marginBottom: '4px', fontSize: '8px' }}>Note</div>
                                    <textarea
                                      value={editingNotes[lead.id] ?? lead.notes ?? ''}
                                      onChange={(e) => setEditingNotes((prev) => ({ ...prev, [lead.id]: e.target.value }))}
                                      onBlur={() => {
                                        const val = editingNotes[lead.id];
                                        if (val !== undefined && val !== (lead.notes ?? '')) {
                                          patchLead(lead.id, { notes: val });
                                        }
                                      }}
                                      placeholder="Adauga note..."
                                      rows={3}
                                      style={{
                                        width: '100%',
                                        fontFamily: "'DM Mono', monospace",
                                        fontSize: '11px',
                                        padding: '10px 12px',
                                        background: '#111',
                                        border: '1px solid #1a1a1a',
                                        borderRadius: '6px',
                                        color: '#dce4e8',
                                        outline: 'none',
                                        resize: 'vertical',
                                        transition: 'border-color 0.15s',
                                      }}
                                      onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(86,219,132,0.3)'; }}
                                    />
                                    <div style={{ ...monoLabel, marginTop: '6px', fontSize: '8px' }}>
                                      Primit: {formatDateTime(lead.date)}
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}
                        </>
                      );
                    })}

                    {paged.length === 0 && (
                      <tr>
                        <td colSpan={7} style={{ textAlign: 'center', padding: '30px', color: '#3a3a3a' }}>
                          Niciun lead gasit cu filtrele selectate.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ═══ PAGINATION ═══ */}
            {totalPages > 1 && (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px' }}>
                <button
                  onClick={() => setPage((p) => Math.max(0, p - 1))}
                  disabled={page === 0}
                  style={{
                    ...filterBtnStyle(false),
                    opacity: page === 0 ? 0.3 : 1,
                    cursor: page === 0 ? 'not-allowed' : 'pointer',
                  }}
                >
                  ← Prev
                </button>
                <span style={monoLabel}>
                  {page + 1} / {totalPages}
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                  disabled={page >= totalPages - 1}
                  style={{
                    ...filterBtnStyle(false),
                    opacity: page >= totalPages - 1 ? 0.3 : 1,
                    cursor: page >= totalPages - 1 ? 'not-allowed' : 'pointer',
                  }}
                >
                  Next →
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
