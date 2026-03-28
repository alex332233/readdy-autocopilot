import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import NoIndexMeta from "./components/NoIndexMeta";


function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <NoIndexMeta />
      <AppRoutes />
    </I18nextProvider>
  );
}

export default App;
