import React, { useState, Dispatch, SetStateAction } from 'react';
import localStorage from 'localStorage';

import { Languages } from '../enums/Languages';

export const LanguageContext = React.createContext<{
  language: Languages;
  setLanguage: Dispatch<SetStateAction<Languages>>;
}>({
  language: Languages.English,
  setLanguage: () => null,
});

export const LanguageProvider: React.FC = ({ children }) => {
  const [language, setLanguage] = useState<Languages>(
    localStorage.language || Languages.Polish
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
