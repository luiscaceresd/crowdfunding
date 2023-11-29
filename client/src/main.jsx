import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ThirdwebProvider ChainId={ChainId.Goerli}>
    <Router>
      <App />
    </Router>
  </ThirdwebProvider>
);
