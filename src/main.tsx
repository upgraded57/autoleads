import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="w-full max-w-screen-2xl mx-auto">
      <Toaster />
      <App />
    </div>
  </StrictMode>
);
