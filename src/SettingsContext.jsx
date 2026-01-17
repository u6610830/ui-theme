import { createContext, useContext, useEffect, useState } from "react";

const SettingsContext = createContext(null);

const DEFAULT_SETTINGS = {
  theme: "light",
  language: "en",
};

export function SettingsProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");

  // Load from localStorage (on start)
  useEffect(() => {
    const saved = localStorage.getItem("app-settings");
    if (saved) {
      const data = JSON.parse(saved);
      setTheme(data.theme || "light");
      setLanguage(data.language || "en");
    }
  }, []);

  // Save to localStorage (on change)
  useEffect(() => {
    localStorage.setItem(
      "app-settings",
      JSON.stringify({ theme, language })
    );
  }, [theme, language]);

  function resetSettings() {
    setTheme("light");
    setLanguage("en");
  }

  return (
    <SettingsContext.Provider
      value={{
        theme,
        language,
        setTheme,
        setLanguage,
        resetSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
