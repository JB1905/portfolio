import React from "react";

export const LanguageContext = React.createContext<{
  language: "pl" | "en";
  toggleLanguage: () => void;
}>({
  language: "en",
  toggleLanguage: () => null
});
