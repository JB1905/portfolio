import { useContext } from 'react';
import localStorage from 'localStorage';

import { LanguageContext } from '../providers/LanguageContext';

import { Language } from '../enums/Language';

export const useLanguages = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleLanguage = () => {
    if (language === Language.Polish) {
      localStorage.setItem('language', Language.English);
      setLanguage(Language.English);
    } else {
      localStorage.setItem('language', Language.Polish);
      setLanguage(Language.Polish);
    }
  };

  return { language, toggleLanguage };
};
