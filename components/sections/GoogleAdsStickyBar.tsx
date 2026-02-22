"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";

export function GoogleAdsStickyBar() {
  const [visible,   setVisible]   = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const handleScroll = () => {
      if (window.scrollY > 400) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <>
      <style>{`
        @keyframes slideUpCta {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
      `}</style>
      <div
        className="hidden lg:flex"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          backgroundColor: "rgba(5,5,5,0.97)",
          borderTop: "1px solid rgba(86,219,132,0.25)",
          backdropFilter: "blur(16px)",
          padding: "16px 32px",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          animation: visible ? "slideUpCta 0.35s ease forwards" : "none",
          transform: visible ? undefined : "translateY(100%)",
          opacity: visible ? undefined : 0,
          transition: !visible ? "transform 0.3s ease, opacity 0.3s ease" : undefined,
        }}
      >
        <p style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#ffffff", margin: 0 }}>
          Gata să crești cu Google Ads?
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Link
            href="/contact/"
            className="group inline-flex items-center gap-2 btn-primary"
            style={{ fontSize: "0.875rem", padding: "12px 28px" }}
          >
            Vorbește cu un specialist
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <button
            onClick={() => { setDismissed(true); setVisible(false); }}
            style={{ background: "transparent", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.35)", padding: "4px", display: "flex", alignItems: "center" }}
            aria-label="Închide"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </>
  );
}
