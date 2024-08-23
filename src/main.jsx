import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ReactDOM } from "react";
import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ClerkProvider
      publishableKey="pk_live_Y2xlcmsuZmxhc2hpZnkub25saW5lJA"
      afterSignOutUrl="/"
    >
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);
