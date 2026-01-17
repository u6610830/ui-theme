import { useSettings } from "./SettingsContext.jsx";

export default function PreviewCard() {
  const { theme, language } = useSettings();

  return (
    <div>
      <p>Theme: {theme === "dark" ? "Dark" : "Light"} </p>
      <p>Language: {language.toUpperCase()}</p>
      <p>
        {language === "en"
          ? "This is your preference preview."
          : "นี่คือหน้าตัวอย่างการตั้งค่า"}
      </p>
    </div>
  );
}
