import React from "react";

export const LanguageContext = React.createContext<{
  language: string;
  toggleLanguage: () => void;
}>({
  language: "",
  toggleLanguage: () => null
});
