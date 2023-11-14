import React from "react";
import ReactDOM from "react-dom/client";
import SolanaProviders from "./context/SolanaProvider";
import App from "./App";
import "./styles/index.css";

const root = ReactDOM.createRoot(
  document.querySelector("#root")
);

root.render(
  <React.StrictMode>
    <SolanaProviders>
      <App />
    </SolanaProviders>
  </React.StrictMode>
);