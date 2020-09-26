import "@clp/shared/lib/polyfills";
import "@clp/shared/lib/web-components";
import "@clp/shared/lib/styles/index.scss";

import React, { StrictMode } from "react";
import { render } from "react-dom";

import { App } from "./app.jsx";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
