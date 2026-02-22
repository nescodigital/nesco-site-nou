"use client";
import Image from "next/image";

const logos = [
  { src: "/clients/accor.png",              alt: "Accor Hotels" },
  { src: "/clients/vel-pitar.png",          alt: "Vel Pitar" },
  { src: "/clients/siemens.png",            alt: "Siemens" },
  { src: "/clients/douglas.png",            alt: "Douglas" },
  { src: "/clients/dentestet.png",          alt: "DentEstet" },
  { src: "/clients/burn.png",               alt: "Burn Energy Drink" },
  { src: "/clients/luxury-interiors.webp",  alt: "Luxury Interiors" },
  { src: "/clients/elvan.webp",             alt: "Elvan" },
  { src: "/clients/syndax.webp",            alt: "Syndax" },
  { src: "/clients/metro-systems.png",      alt: "Metro Systems" },
  { src: "/clients/foreo-2.webp",           alt: "Foreo" },
  { src: "/clients/Laufen.webp",            alt: "Laufen" },
  { src: "/clients/Loreal.webp",            alt: "L'Oréal" },
  { src: "/clients/Roca.webp",              alt: "Roca" },
];

// Duplicate for seamless loop
const track = [...logos, ...logos, ...logos];

interface ClientLogosProps {
  label?: string;
}

export function ClientLogos({ label = "Au avut încredere în noi" }: ClientLogosProps) {
  return (
    <section className="relative client-logos-root" style={{ backgroundColor: "#050505", padding: "60px 0" }}>
      <style>{`
        @keyframes clientMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        .client-logos-root .client-track {
          animation: clientMarquee 28s linear infinite;
        }
        .client-logos-root:hover .client-track {
          animation-play-state: paused;
        }
        .client-logo-item img {
          filter: brightness(0) invert(1);
          opacity: 0.32;
          transition: opacity 0.25s ease, filter 0.25s ease, transform 0.25s ease;
        }
        .client-logo-item:hover img {
          opacity: 0.85;
          filter: brightness(0) invert(1) drop-shadow(0 0 10px rgba(86,219,132,0.45));
          transform: scale(1.08);
        }
      `}</style>

      {/* Top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
      />

      {/* Label */}
      <p
        style={{
          textAlign: "center",
          fontSize: "0.6875rem",
          fontWeight: 600,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.18)",
          marginBottom: "36px",
        }}
      >
        {label}
      </p>

      {/* Marquee */}
      <div style={{ overflow: "hidden", position: "relative" }}>
        {/* Fade edges */}
        <div
          className="absolute inset-y-0 left-0 pointer-events-none"
          style={{
            width: "10%",
            background: "linear-gradient(to right, #050505, transparent)",
            zIndex: 2,
          }}
        />
        <div
          className="absolute inset-y-0 right-0 pointer-events-none"
          style={{
            width: "10%",
            background: "linear-gradient(to left, #050505, transparent)",
            zIndex: 2,
          }}
        />

        <div
          className="client-track"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "64px",
            width: "max-content",
          }}
        >
          {track.map((logo, idx) => (
            <div
              key={idx}
              className="client-logo-item"
              style={{
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "default",
              }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={220}
                height={90}
                style={{
                  height: "36px",
                  width: "auto",
                  maxWidth: "120px",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
