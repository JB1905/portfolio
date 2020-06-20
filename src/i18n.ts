import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).init({
  resources: {
    pl: {
      translations: require('./locales/pl/translations.json'),
    },
    en: {
      translations: require('./locales/en/translations.json'),
    },
  },
  // ns: ['translations'],
  defaultNS: 'translations',
});

export default i18n;
