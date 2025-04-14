import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { QuizProvider } from "./contexts/QuizContext.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </StrictMode>
);
