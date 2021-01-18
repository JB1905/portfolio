import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ['localStorage', 'navigator'],
    },
    fallbackLng: 'en',
    whitelist: ['en', 'pl'],
    resources: {
      pl: {
        translations: require('./locales/pl/translations.json'),
      },
      en: {
        translations: require('./locales/en/translations.json'),
      },
    },
    defaultNS: 'translations',
  });

export default i18n;
