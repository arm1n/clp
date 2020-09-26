import React from "react";

import { MenuWithSVG } from "@clp/shared";
import { DATA_SET, SVG_PATH, INTRO_PATH } from "config/show-nlg/config";

// import styles from "./component.module.scss";

export const ShowNlg = () => (
  <MenuWithSVG nodes={DATA_SET} svgPath={SVG_PATH} introPath={INTRO_PATH} />
);
