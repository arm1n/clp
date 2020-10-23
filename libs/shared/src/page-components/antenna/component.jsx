import React from "react";

import { MenuWithSVG } from "components";
import { DATA_SET, SVG_PATH, INTRO_PATH } from "config/antenna/config";

// import styles from "./component.module.scss";

export const Antenna = () => (
  <MenuWithSVG nodes={DATA_SET} svgPath={SVG_PATH} introPath={INTRO_PATH} />
);

