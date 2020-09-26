import React from "react";

import { SVGWithDescAndUnit } from "@clp/shared";
import { DATA_SET, SVG_PATH, INTRO_PATH } from "config/prop/config";

// import styles from "./component.module.scss";

export const Prop = () => (
  <SVGWithDescAndUnit svgData={DATA_SET} svgPath={SVG_PATH} introPath={INTRO_PATH} />
);
