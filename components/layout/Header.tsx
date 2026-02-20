"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { type Locale } from "@/lib/translations";
import { getNavLinks, routes } from "@/lib/routes";

interface HeaderProps {
  locale: Locale;
}

const langConfig: Record<Locale, { flagCode: string; label: string; fullName: string }> = {
  ro: { flagCode: "ro", label: "RO", fullName: "Română" },
  en: { flagCode: "gb", label: "EN", fullName: "English" },
  de: { flagCode: "de", label: "DE", fullName: "Deutsch" },
};

function FlagIcon({ code, label }: { code: string; label: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://flagcdn.com/${code}.svg`}
      alt={label}
      width={16}
      height={12}
      style={{ width: 16, height: 12, borderRadius: 2, objectFit: "cover", display: "inline-block", flexShrink: 0 }}
    />
  );
}

const LANG_HREFS: Record<Locale, string> = {
  ro: "/",
  en: "/en/",
  de: "/ge/",
};

export function Header({ locale }: HeaderProps) {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const navLinks = getNavLinks(locale);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const insideNav = dropdownRef.current?.contains(e.target as Node);
      const insideLang = langRef.current?.contains(e.target as Node);
      if (!insideNav && !insideLang) {
        setOpenDropdown(null);
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, []);

  const ctaHref = routes[locale].contact;
  const ctaLabel =
    locale === "ro" ? "Hai să vorbim" : locale === "en" ? "Let's Talk" : "Kontakt";

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.3s ease",
          backgroundColor: isScrolled ? "rgba(5,5,5,0.92)" : "transparent",
          backdropFilter: isScrolled ? "blur(20px)" : "none",
          borderBottom: isScrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
        }}
      >
        <div className="page-container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href={routes[locale].home} className="flex items-center flex-shrink-0">
              <Image
                src="https://i0.wp.com/nescodigital.com/wp-content/uploads/2024/09/nescodigital-logo-invert.png"
                alt="Nesco Digital"
                width={150}
                height={38}
                className="h-7 w-auto"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-3" ref={dropdownRef}>
              {navLinks.map((item, idx) => (
                <div key={idx} className="relative">
                  {item.children ? (
                    <button
                      onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg transition-colors"
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        color: openDropdown === idx ? "#fff" : "rgba(255,255,255,0.5)",
                        background: openDropdown === idx ? "rgba(255,255,255,0.06)" : "transparent",
                      }}
                      onMouseEnter={(e) => {
                        if (openDropdown !== idx) (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        if (openDropdown !== idx) (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.5)";
                      }}
                    >
                      {item.label}
                      <ChevronDown
                        size={12}
                        style={{
                          transition: "transform 0.2s ease",
                          transform: openDropdown === idx ? "rotate(180deg)" : "rotate(0deg)",
                          color: openDropdown === idx ? "#56db84" : "currentcolor",
                        }}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center px-4 py-2 rounded-lg transition-colors"
                      style={{ fontSize: "0.875rem", fontWeight: 500, color: "rgba(255,255,255,0.5)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)"; }}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {item.children && openDropdown === idx && (
                    <div
                      className="dropdown-enter absolute top-full left-0 mt-2"
                      style={{
                        minWidth: "260px",
                        background: "#0a0a0a",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "16px",
                        boxShadow: "0 24px 48px rgba(0,0,0,0.7)",
                        overflow: "hidden",
                      }}
                    >
                      <div style={{ padding: "12px" }}>
                        {item.children.map((child, cidx) => (
                          <div key={cidx}>
                            {cidx > 0 && (
                              <div
                                style={{
                                  height: 1,
                                  background: "rgba(255,255,255,0.04)",
                                  margin: "4px 0",
                                }}
                              />
                            )}
                            <Link
                              href={child.href}
                              onClick={() => setOpenDropdown(null)}
                              className="group flex items-start gap-3 rounded-xl"
                              style={{
                                padding: "12px 14px",
                                textDecoration: "none",
                                transition: "background 0.15s ease",
                              }}
                              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.04)"; }}
                              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
                            >
                              <div className="flex-1 min-w-0">
                                <div
                                  className="font-semibold text-white group-hover:text-brand-green transition-colors"
                                  style={{ fontSize: "0.9375rem" }}
                                >
                                  {child.label}
                                </div>
                                {child.desc && (
                                  <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)", marginTop: "2px" }}>
                                    {child.desc}
                                  </div>
                                )}
                              </div>
                              <ArrowRight
                                size={13}
                                className="text-gray-700 group-hover:text-brand-green transition-colors mt-0.5 flex-shrink-0"
                              />
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right: lang + CTA */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language switcher */}
              <div className="relative" ref={langRef}>
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors"
                  style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)", fontWeight: 500 }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#fff"; }}
                  onMouseLeave={(e) => { if (!langOpen) (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.4)"; }}
                >
                  <FlagIcon code={langConfig[locale].flagCode} label={langConfig[locale].label} />
                  <span>{langConfig[locale].label}</span>
                  <ChevronDown size={11} style={{ transition: "transform 0.2s ease", transform: langOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
                </button>
                {langOpen && (
                  <div
                    className="dropdown-enter absolute right-0 top-full mt-2"
                    style={{
                      width: "160px",
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "14px",
                      boxShadow: "0 16px 40px rgba(0,0,0,0.7)",
                      overflow: "hidden",
                      padding: "6px",
                    }}
                  >
                    {(["ro", "en", "de"] as Locale[]).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => { setLangOpen(false); router.push(LANG_HREFS[lang]); }}
                        className="w-full flex items-center gap-2.5 rounded-lg transition-colors"
                        style={{
                          padding: "10px 12px",
                          fontSize: "0.875rem",
                          color: lang === locale ? "#56db84" : "rgba(255,255,255,0.5)",
                          background: "transparent",
                          cursor: "pointer",
                        }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.04)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
                      >
                        <FlagIcon code={langConfig[lang].flagCode} label={langConfig[lang].label} />
                        <span style={{ fontWeight: 500 }}>{langConfig[lang].fullName}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* CTA */}
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 group"
                style={{
                  padding: "9px 20px",
                  background: "#56db84",
                  borderRadius: "9999px",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#000",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  boxShadow: "0 0 0 0 rgba(86,219,132,0)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.transform = "scale(1.02)";
                  el.style.boxShadow = "0 0 20px rgba(86,219,132,0.3)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.transform = "scale(1)";
                  el.style.boxShadow = "0 0 0 0 rgba(86,219,132,0)";
                }}
              >
                {ctaLabel}
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 transition-colors"
              style={{ color: "rgba(255,255,255,0.5)" }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-80 overflow-y-auto transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            background: "#080808",
            borderLeft: "1px solid rgba(255,255,255,0.06)",
            boxShadow: "-20px 0 60px rgba(0,0,0,0.8)",
          }}
        >
          <div style={{ padding: "80px 24px 40px" }}>
            {/* Language switcher mobile */}
            <div className="flex gap-2 mb-8">
              {(["ro", "en", "de"] as Locale[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => { setMobileOpen(false); router.push(LANG_HREFS[lang]); }}
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-xl transition-colors"
                  style={{
                    padding: "10px",
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    background: lang === locale ? "rgba(86,219,132,0.08)" : "rgba(255,255,255,0.03)",
                    border: `1px solid ${lang === locale ? "rgba(86,219,132,0.2)" : "rgba(255,255,255,0.06)"}`,
                    color: lang === locale ? "#56db84" : "rgba(255,255,255,0.4)",
                    cursor: "pointer",
                  }}
                >
                  <FlagIcon code={langConfig[lang].flagCode} label={langConfig[lang].label} />
                  <span>{langConfig[lang].label}</span>
                </button>
              ))}
            </div>

            {/* Nav items */}
            {navLinks.map((item, idx) => (
              <div key={idx} style={{ marginBottom: "2px" }}>
                {item.children ? (
                  <div>
                    <div
                      style={{
                        padding: "8px 12px",
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        color: "rgba(255,255,255,0.25)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginTop: "24px",
                        marginBottom: "4px",
                      }}
                    >
                      {item.label}
                    </div>
                    {item.children.map((child, cidx) => (
                      <Link
                        key={cidx}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2 rounded-xl"
                        style={{
                          padding: "10px 12px",
                          fontSize: "0.9375rem",
                          color: "rgba(255,255,255,0.5)",
                          textDecoration: "none",
                          transition: "color 0.15s ease",
                        }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)"; }}
                      >
                        <ArrowRight size={11} style={{ color: "rgba(86,219,132,0.5)", flexShrink: 0 }} />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center rounded-xl"
                    style={{
                      padding: "10px 12px",
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      color: "#fff",
                      textDecoration: "none",
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <div
              style={{
                marginTop: "32px",
                paddingTop: "24px",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <Link
                href={ctaHref}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full btn-primary"
                style={{ justifyContent: "center" }}
              >
                {ctaLabel}
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
