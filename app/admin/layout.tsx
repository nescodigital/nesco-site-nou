'use client';

import { useState, useEffect, ReactNode } from 'react';

const ADMIN_PASSWORD = 'N3sc0$Digital!2026';

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const auth = sessionStorage.getItem('admin_auth');
      if (auth === 'true') {
        setIsAuthenticated(true);
      }
      setLoading(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_auth', 'true');
      setError(false);
    } else {
      setError(true);
    }
  };

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#050505',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          width: '24px',
          height: '24px',
          border: '2px solid rgba(86,219,132,0.2)',
          borderTopColor: '#56db84',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }} />
        <style dangerouslySetInnerHTML={{ __html: `@keyframes spin { to { transform: rotate(360deg); } }` }} />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <>
        <meta name="robots" content="noindex" />
        <div style={{
          minHeight: '100vh',
          background: '#050505',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: "'Inter', sans-serif",
        }}>
          <div style={{
            background: '#0a0a0a',
            border: '1px solid #1a1a1a',
            borderRadius: '16px',
            padding: '48px',
            width: '100%',
            maxWidth: '400px',
            textAlign: 'center',
          }}>
            <img
              src="https://i0.wp.com/nescodigital.com/wp-content/uploads/2024/09/nescodigital-logo-invert.png"
              alt="Nesco Digital"
              style={{ height: '24px', width: 'auto', marginBottom: '32px' }}
            />
            <div style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '10px',
              color: '#5a6872',
              letterSpacing: '0.12em',
              textTransform: 'uppercase' as const,
              marginBottom: '24px',
            }}>
              ADMIN ACCESS
            </div>
            <form onSubmit={handleLogin}>
              <input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(false); }}
                placeholder="Parola admin..."
                autoFocus
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: '#111111',
                  border: error ? '1px solid #f14a4a' : '1px solid #222222',
                  borderRadius: '8px',
                  color: '#dce4e8',
                  fontSize: '14px',
                  fontFamily: "'Inter', sans-serif",
                  outline: 'none',
                  marginBottom: '12px',
                  boxSizing: 'border-box',
                }}
              />
              {error && (
                <div style={{ color: '#f14a4a', fontSize: '12px', marginBottom: '12px' }}>
                  Parola incorecta
                </div>
              )}
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'rgba(86,219,132,0.15)',
                  border: '1px solid rgba(86,219,132,0.3)',
                  borderRadius: '8px',
                  color: '#56db84',
                  fontSize: '13px',
                  fontWeight: 600,
                  fontFamily: "'Satoshi', sans-serif",
                  cursor: 'pointer',
                  letterSpacing: '0.02em',
                }}
              >
                Acceseaza Dashboard
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <meta name="robots" content="noindex" />
      {children}
    </>
  );
}
