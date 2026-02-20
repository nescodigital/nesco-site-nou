"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ArrowPatternDynamic = dynamic(
  () => import("@/components/ArrowPattern").then((m) => ({ default: m.ArrowPattern })),
  { ssr: false, loading: () => null }
);

export function LazyArrowPattern() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
  }, []);

  if (!isDesktop) return null;
  return <ArrowPatternDynamic />;
}
