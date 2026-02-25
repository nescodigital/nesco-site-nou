"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function ThankYouTracking({ type }: { type: string }) {
  useEffect(() => {
    if (window.fbq) {
      window.fbq("track", "Lead");
    }
    if (window.gtag) {
      window.gtag("event", "generate_lead", {
        event_category: "form",
        event_label: type || "general",
      });
    }
  }, [type]);

  return null;
}
