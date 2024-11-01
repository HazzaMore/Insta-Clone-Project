import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "./components/ui/provider";
import { Theme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <Theme appearance="dark">
          <Toaster />
          <App />
        </Theme>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
