"use client";

import { useState, useEffect, useCallback, useSyncExternalStore } from "react";

export type PageRoute =
  | "home"
  | "product-design"
  | "saas-design"
  | "dashboard-design"
  | "mobile-app-design"
  | "ux-audit"
  | "design-systems"
  | "about"
  | "case-studies"
  | "process"
  | "careers"
  | "contact"
  | "saas"
  | "fintech"
  | "ai"
  | "healthcare"
  | "blog"
  | "faq"
  | "privacy-policy"
  | "terms-of-service";

const routeMap: Record<string, PageRoute> = {
  "": "home",
  home: "home",
  "product-design": "product-design",
  "saas-design": "saas-design",
  "dashboard-design": "dashboard-design",
  "mobile-app-design": "mobile-app-design",
  "ux-audit": "ux-audit",
  "design-systems": "design-systems",
  about: "about",
  "case-studies": "case-studies",
  process: "process",
  careers: "careers",
  contact: "contact",
  saas: "saas",
  fintech: "fintech",
  ai: "ai",
  healthcare: "healthcare",
  blog: "blog",
  faq: "faq",
  "privacy-policy": "privacy-policy",
  "terms-of-service": "terms-of-service",
};

function getHashRoute(): PageRoute {
  if (typeof window === "undefined") return "home";
  const hash = window.location.hash.replace("#", "");
  return routeMap[hash] || "home";
}

function subscribeToHash(callback: () => void) {
  window.addEventListener("hashchange", callback);
  return () => window.removeEventListener("hashchange", callback);
}

export function navigateTo(route: PageRoute) {
  if (route === "home") {
    window.location.hash = "";
  } else {
    window.location.hash = route;
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function useRouter() {
  const currentRoute = useSyncExternalStore(
    subscribeToHash,
    getHashRoute,
    () => "home" as PageRoute
  );

  const navigate = useCallback((route: PageRoute) => {
    navigateTo(route);
  }, []);

  const goHome = useCallback(() => {
    navigateTo("home");
  }, []);

  return { currentRoute, navigate, goHome };
}
