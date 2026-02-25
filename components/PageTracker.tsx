"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Generate a stable visitor ID stored in localStorage */
function getVisitorId(): string {
  const KEY = "nd_vid";
  if (typeof window === "undefined") return "ssr";
  let id = localStorage.getItem(KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(KEY, id);
  }
  return id;
}

export function PageTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Don't track admin pages
    if (pathname.startsWith("/admin")) return;

    const visitorId = getVisitorId();

    // Small delay to not block page load
    const id = setTimeout(() => {
      fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          path: pathname,
          referrer: document.referrer || "",
          visitorId,
        }),
        keepalive: true,
      }).catch(() => {});
    }, 100);

    return () => clearTimeout(id);
  }, [pathname]);

  return null;
}
