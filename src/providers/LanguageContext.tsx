import React, { useState, Dispatch, SetStateAction } from 'react';
import localStorage from 'localStorage';

import { Language } from '../enums/Language';

export const LanguageContext = React.createContext<{
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
}>({
  language: Language.English,
  setLanguage: () => null,
});

export const LanguageProvider: React.FC = ({ children }) => {
  const [language, setLanguage] = useState<Language>(
    localStorage.language || Language.Polish
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
