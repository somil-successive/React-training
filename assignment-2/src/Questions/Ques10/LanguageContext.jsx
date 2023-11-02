import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const UserLanguage = ({ children }) => {
  const [language, setLanguage] = useState("English");
  return (
    <>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        {children}
      </LanguageContext.Provider>
    </>
  );
};
