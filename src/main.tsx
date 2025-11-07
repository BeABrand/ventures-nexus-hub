import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import ReloadPrompt from "./components/ReloadPrompt.tsx";
import PWAInstallPrompt from "./components/PWAInstallPrompt.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
    <ReloadPrompt />
    <PWAInstallPrompt />
  </HelmetProvider>
);
