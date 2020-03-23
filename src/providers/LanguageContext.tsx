import React, { useState, Dispatch, SetStateAction } from 'react';
import localStorage from 'localStorage';

export const LanguageContext = React.createContext<{
  language: 'pl' | 'en';
  setLanguage: Dispatch<SetStateAction<'pl' | 'en'>>;
}>({
  language: 'en',
  setLanguage: () => null,
});

export const LanguageProvider: React.FC = ({ children }) => {
  const [language, setLanguage] = useState<'pl' | 'en'>(
    localStorage.language || 'pl'
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
