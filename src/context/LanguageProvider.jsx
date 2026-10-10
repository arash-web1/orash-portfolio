import {
  useEffect,
  useMemo,
  useState,
} from "react";
import LanguageContext from "./LanguageContext";
import translations from "./translations";

function getValue(object, path) {
  return path
    .split(".")
    .reduce(
      (current, key) =>
        current?.[key],
      object
    );
}

function getInitialLanguage() {
  const storedLanguage =
    localStorage.getItem(
      "portfolio-language"
    );

  if (
    storedLanguage === "ru" ||
    storedLanguage === "tj" ||
    storedLanguage === "en"
  ) {
    return storedLanguage;
  }

  return "ru";
}

function LanguageProvider({
  children,
}) {
  const [language, setLanguage] =
    useState(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem(
      "portfolio-language",
      language
    );

    const htmlLanguages = {
      ru: "ru",
      tj: "tg",
      en: "en",
    };

    document.documentElement.lang =
      htmlLanguages[language];
  }, [language]);

  const value = useMemo(() => {
    const t = (path) => {
      const translated =
        getValue(
          translations[language],
          path
        );

      if (translated !== undefined) {
        return translated;
      }

      const english =
        getValue(
          translations.en,
          path
        );

      return english ?? path;
    };

    return {
      language,
      setLanguage,
      t,
    };
  }, [language]);

  return (
    <LanguageContext.Provider
      value={value}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;