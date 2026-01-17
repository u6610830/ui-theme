import { useSettings } from "./SettingsContext.jsx";

export default function Header() {
  const { language } = useSettings();

  return (
    <h1>
      {language === "en" ? "Welcome" : "ยินดีต้อนรับ"}
    </h1>
  );
}
