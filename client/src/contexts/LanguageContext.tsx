import { translations, type Language, type Translation } from "@/lib/translations";
import React, { createContext, useContext, useEffect, useState } from "react";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  useEffect(() => {
    const savedLang = localStorage.getItem("affplus-lang") as Language;
    if (savedLang && (savedLang === "es" || savedLang === "en" || savedLang === "pt")) {
      setLanguage(savedLang);
    } else {
      // Detect browser language
      const browserLang = navigator.language.split("-")[0];
      if (browserLang === "en") {
        setLanguage("en");
      } else if (browserLang === "pt") {
        setLanguage("pt");
      }
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("affplus-lang", lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
