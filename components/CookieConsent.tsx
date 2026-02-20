"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Locale = "ro" | "en" | "de";

const CONTENT: Record<Locale, {
  heading: string;
  text: string;
  accept: string;
  decline: string;
  privacyLabel: string;
  privacyHref: string;
}> = {
  ro: {
    heading: "Folosim cookies",
    text: "Folosim Google Analytics și pixels de marketing (Meta, TikTok) pentru a înțelege cum este utilizat site-ul și a măsura performanța campaniilor. Poți accepta sau refuza cookies non-esențiale.",
    accept: "Acceptă",
    decline: "Refuză",
    privacyLabel: "Politică de Confidențialitate",
    privacyHref: "/politica-de-confidentialitate/",
  },
  en: {
    heading: "We use cookies",
    text: "We use Google Analytics and marketing pixels (Meta, TikTok) to understand how the site is used and measure campaign performance. You can accept or decline non-essential cookies.",
    accept: "Accept",
    decline: "Decline",
    privacyLabel: "Privacy Policy",
    privacyHref: "/en/privacy-policy/",
  },
  de: {
    heading: "Wir verwenden Cookies",
    text: "Wir verwenden Google Analytics und Marketing-Pixel (Meta, TikTok), um die Nutzung der Website zu verstehen und die Kampagnenleistung zu messen. Sie können nicht wesentliche Cookies akzeptieren oder ablehnen.",
    accept: "Akzeptieren",
    decline: "Ablehnen",
    privacyLabel: "Datenschutzerklärung",
    privacyHref: "/ge/datenschutz/",
  },
};

function detectLocale(pathname: string): Locale {
  if (pathname.startsWith("/en")) return "en";
  if (pathname.startsWith("/ge")) return "de";
  return "ro";
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const c = CONTENT[detectLocale(pathname)];

  useEffect(() => {
    if (!localStorage.getItem("cookie_consent")) {
      setVisible(true);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  }

  function handleDecline() {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        style={{
          backgroundColor: "#0f0f0f",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "20px",
          padding: "48px",
          maxWidth: "480px",
          width: "100%",
        }}
      >
        {/* Logo */}
        <div style={{ marginBottom: "32px" }}>
          <Image
            src="https://i0.wp.com/nescodigital.com/wp-content/uploads/2024/09/nescodigital-logo-invert.png"
            alt="Nesco Digital"
            width={140}
            height={36}
            style={{ height: 22, width: "auto" }}
            priority
          />
        </div>

        {/* Heading */}
        <h2
          style={{
            fontSize: "1.375rem",
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.02em",
            marginBottom: "14px",
          }}
        >
          {c.heading}
        </h2>

        {/* Body text */}
        <p
          style={{
            fontSize: "0.875rem",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.75,
            marginBottom: "32px",
          }}
        >
          {c.text}
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
          <button
            onClick={handleAccept}
            style={{
              flex: 1,
              padding: "13px 20px",
              backgroundColor: "#56db84",
              color: "#050505",
              border: "none",
              borderRadius: "100px",
              fontSize: "0.875rem",
              fontWeight: 700,
              cursor: "pointer",
              letterSpacing: "-0.01em",
            }}
          >
            {c.accept}
          </button>
          <button
            onClick={handleDecline}
            style={{
              flex: 1,
              padding: "13px 20px",
              backgroundColor: "transparent",
              color: "rgba(255,255,255,0.8)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "100px",
              fontSize: "0.875rem",
              fontWeight: 600,
              cursor: "pointer",
              letterSpacing: "-0.01em",
            }}
          >
            {c.decline}
          </button>
        </div>

        {/* Privacy policy link */}
        <div style={{ textAlign: "center" }}>
          <Link
            href={c.privacyHref}
            style={{
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.25)",
              textDecoration: "underline",
              textDecorationColor: "rgba(255,255,255,0.15)",
              textUnderlineOffset: "3px",
            }}
          >
            {c.privacyLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
