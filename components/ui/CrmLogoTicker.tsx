import Image from "next/image";

const LABELS: Record<string, string> = {
  ro: "Platforme CRM cu care lucrăm",
  en: "CRM platforms we work with",
  de: "CRM-Plattformen, mit denen wir arbeiten",
};

const LOGOS = [
  { src: "/crm/crmlogos_0002_Layer-5.png", alt: "HubSpot" },
  { src: "/crm/crmlogos_0004_Layer-3.png", alt: "Salesforce" },
  { src: "/crm/crmlogos_0000_Layer-7.png", alt: "Monday CRM" },
  { src: "/crm/crmlogos_0003_Layer-4.png", alt: "Zoho CRM" },
  { src: "/crm/crmlogos_0001_Layer-6.png", alt: "Freshsales" },
  { src: "/crm/crmlogos_0005_Layer-2.png", alt: "Pipedrive" },
  { src: "/crm/crmlogos_0006_Layer-1.png", alt: "Dynamics 365" },
];

export function CrmLogoTicker({ locale = "ro" }: { locale?: string }) {
  const label = LABELS[locale] ?? LABELS.ro;
  return (
    <section
      style={{
        backgroundColor: "#050505",
        padding: "56px 0",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Label */}
      <p
        style={{
          textAlign: "center",
          fontSize: "0.6875rem",
          fontWeight: 600,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.28)",
          marginBottom: "36px",
        }}
      >
        {label}
      </p>

      {/* Ticker track */}
      <div
        style={{
          overflow: "hidden",
          /* Fade edges */
          maskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        {/* Inner strip — two identical sets for seamless loop */}
        <div
          style={{
            display: "flex",
            width: "max-content",
            animation: "marquee 28s linear infinite",
            willChange: "transform",
          }}
        >
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 48px",
              }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={56}
                style={{
                  height: 44,
                  width: "auto",
                  objectFit: "contain",
                  filter: "brightness(0) invert(1)",
                  opacity: 0.45,
                  transition: "opacity 0.25s ease",
                  userSelect: "none",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
