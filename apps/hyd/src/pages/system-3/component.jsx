import React from "react";

import { SVGWithDescAndUnit } from "@clp/shared";
import { DATA_SET, SVG_PATH, INTRO_PATH } from "config/system-3/config";

// import styles from "./component.module.scss";

export const System3 = () => (
  <SVGWithDescAndUnit svgPath={SVG_PATH} svgData={DATA_SET} introPath={INTRO_PATH} />
);
