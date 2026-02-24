import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Status — Nesco Digital',
  robots: { index: false, follow: false },
};

export default function AdminStatusLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
