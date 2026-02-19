"use client";
import { useState } from "react";
import type { FAQ } from "@/components/sections/ServicePage";

interface Props {
  items: FAQ[];
}

export function FaqAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            style={{
              padding: "20px 24px",
              background: "#0a0a0a",
              border: `1px solid ${isOpen ? "rgba(86,219,132,0.2)" : "rgba(255,255,255,0.06)"}`,
              borderRadius: "12px",
              marginBottom: "8px",
              cursor: "pointer",
              transition: "border-color 0.2s ease",
            }}
            onClick={() => setOpenIndex(isOpen ? null : idx)}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <span
                style={{
                  fontSize: "0.9375rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.4,
                }}
              >
                {item.q}
              </span>
              <span
                style={{
                  fontSize: "1.25rem",
                  color: "#56db84",
                  fontWeight: 300,
                  flexShrink: 0,
                  lineHeight: 1,
                  transition: "transform 0.2s ease",
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                +
              </span>
            </div>
            <div
              style={{
                overflow: "hidden",
                maxHeight: isOpen ? "500px" : "0px",
                transition: "max-height 0.3s ease, opacity 0.3s ease",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <p
                style={{
                  marginTop: "12px",
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.7,
                }}
              >
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
