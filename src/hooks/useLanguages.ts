import { useContext } from 'react';
import localStorage from 'localStorage';

import { LanguageContext } from '../providers/LanguageContext';

import { Languages } from '../enums/Languages';

export const useLanguages = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleLanguage = () => {
    if (language === Languages.Polish) {
      localStorage.setItem('language', Languages.English);
      setLanguage(Languages.English);
    } else {
      localStorage.setItem('language', Languages.Polish);
      setLanguage(Languages.Polish);
    }
  };

  return { language, toggleLanguage };
};
