import { useContext } from "react";
import localStorage from "localStorage";

import { LanguageContext } from "../providers/LanguageContext";

export const useLanguages = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleLanguage = () => {
    if (language === `pl`) {
      localStorage.setItem(`language`, `en`);
      setLanguage(`en`);
    } else {
      localStorage.setItem(`language`, `pl`);
      setLanguage(`pl`);
    }
  };

  return { language, toggleLanguage };
};
