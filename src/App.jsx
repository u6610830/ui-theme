import Header from "./Header.jsx";
import SettingsPanel from "./SettingsPanel.jsx";
import PreviewCard from "./PreviewCard.jsx";
import { useSettings } from "./SettingsContext.jsx";

export default function App() {
  const { theme } = useSettings();

  return (
    <div className={`app ${theme}`}>
      <Header />
      <SettingsPanel />
      <PreviewCard />
    </div>
  );
}
