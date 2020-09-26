import React, { Fragment } from "react";

import { withRouting } from "@clp/shared";

// import styles from "./main.module.scss";

/**
 * Main component rendering routes of application.
 */
export const MainComponent = ({ outlet }) => (
  // as dashboard provides main entry
  // point, therefore we simply have
  // to render collected routes here
  <Fragment>{outlet}</Fragment>
);

export const Main = withRouting(MainComponent);
