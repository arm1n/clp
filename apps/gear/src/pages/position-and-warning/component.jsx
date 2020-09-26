import React from "react";

import { SVGWithDescAndUnit } from "@clp/shared";
import { DATA_SET, SVG_PATH, INTRO_PATH } from "config/position-and-warning/config";

// import styles from "./component.module.scss";

export const PositionAndWarning = () => (
  <SVGWithDescAndUnit svgData={DATA_SET} svgPath={SVG_PATH} introPath={INTRO_PATH} />
);
