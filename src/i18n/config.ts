import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

export const LANGUAGES = {
  ENGLISH: "en",
  ARABIC: "ar",
};

export const supportedLngs = {
  [LANGUAGES.ENGLISH]: "English",
  [LANGUAGES.ARABIC]: "Arabic (العربية)",
};

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: LANGUAGES.ENGLISH,
    supportedLngs: Object.keys(supportedLngs),
    debug: import.meta.env.DEV,
  });

export default i18next;
