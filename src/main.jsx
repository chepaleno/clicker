import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ClickerProvider } from "./context/ClickerContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClickerProvider>
      <App />
    </ClickerProvider>
  </StrictMode>,
);
