"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore, type ReactNode } from "react";
import { translations, type Locale } from "./translations";

const STORAGE_KEY = "vinte-lang";
const LANG_CHANGE_EVENT = "vinte-lang-change";

function isLocale(value: string | null): value is Locale {
  return value === "es" || value === "en";
}

function readStoredLocale(): Locale {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isLocale(stored) ? stored : "es";
  } catch {
    // localStorage unavailable (private mode, etc.) — fall back to the default.
    return "es";
  }
}

function getServerSnapshot(): Locale {
  return "es";
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(LANG_CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(LANG_CHANGE_EVENT, callback);
  };
}

type LanguageContextValue = {
  lang: Locale;
  setLang: (lang: Locale) => void;
  toggleLang: () => void;
  t: (typeof translations)["es"];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Reads the persisted locale and re-renders whenever it changes (including across tabs),
  // starting from the "es" default on the server so hydration always matches.
  const lang = useSyncExternalStore(subscribe, readStoredLocale, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: Locale) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // localStorage unavailable (private mode, etc.) — language just won't persist.
    }
    window.dispatchEvent(new Event(LANG_CHANGE_EVENT));
  };

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang(lang === "es" ? "en" : "es"),
      t: translations[lang],
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
