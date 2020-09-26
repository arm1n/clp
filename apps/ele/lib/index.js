import "@clp/shared/lib/polyfills";
import "@clp/shared/lib/web-components";
import "@clp/shared/lib/styles/index.scss";
import React, { StrictMode } from "react";
import { render } from "react-dom";
import { Router } from "@clp/shared";
import { App } from "./app";
render( /*#__PURE__*/React.createElement(StrictMode, null, /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(App, null))), document.getElementById("root"));