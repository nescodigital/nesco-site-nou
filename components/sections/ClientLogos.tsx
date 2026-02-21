import Image from "next/image";

const logos = [
  { src: "/clients/accor.png",     alt: "Accor Hotels" },
  { src: "/clients/vel-pitar.png", alt: "Vel Pitar" },
  { src: "/clients/siemens.png",   alt: "Siemens" },
  { src: "/clients/douglas.png",   alt: "Douglas" },
  { src: "/clients/dentestet.png", alt: "DentEstet" },
  { src: "/clients/burn.png",      alt: "Burn Energy Drink" },
];

interface ClientLogosProps {
  label?: string;
}

export function ClientLogos({ label = "Au avut încredere în noi" }: ClientLogosProps) {
  return (
    <section className="relative" style={{ backgroundColor: "#050505", padding: "60px 0" }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
      />
      <div className="page-container">
        <p
          style={{
            textAlign: "center",
            fontSize: "0.6875rem",
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.18)",
            marginBottom: "40px",
          }}
        >
          {label}
        </p>
        <div
          className="grid grid-cols-3 lg:grid-cols-6"
          style={{ gap: "24px", alignItems: "center" }}
        >
          {logos.map((logo) => (
            <div
              key={logo.alt}
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={220}
                height={90}
                style={{
                  width: "100%",
                  maxWidth: "110px",
                  height: "auto",
                  objectFit: "contain",
                  filter: "brightness(0) invert(1)",
                  opacity: 0.35,
                  transition: "opacity 0.2s ease",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
