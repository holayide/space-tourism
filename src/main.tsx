import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SpaceDataProvider } from "./contexts/dataContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SpaceDataProvider>
      <App />
    </SpaceDataProvider>
  </StrictMode>
);
