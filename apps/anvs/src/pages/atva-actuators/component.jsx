import React from "react";

import {
  DATA_SET_LH_SIDE,
  DATA_SET_RH_SIDE,
  SVG_PATH_LH_SIDE,
  SVG_PATH_RH_SIDE,
  INTRO_PATH,
} from "config/atva-actuators/config";
import { SearchBoxWithTabsAndSVG } from "components/search-box-with-tabs-and-svg";

// import styles from "./component.module.scss";

const TABS = [
  {
    id: "lh-side",
    name: "L/H Side",
    introPath: INTRO_PATH,
    svgData: DATA_SET_LH_SIDE,
    svgPath: SVG_PATH_LH_SIDE,
  },
  {
    id: "rh-side",
    name: "R/H Side",
    introPath: INTRO_PATH,
    svgData: DATA_SET_RH_SIDE,
    svgPath: SVG_PATH_RH_SIDE,
  },
];

export const ATVAActuators = () => (
  <SearchBoxWithTabsAndSVG
    tabs={TABS}
    searchTitle="Active Tuned Vibration Actuators (ATVA)"
    searchPlaceholder="Enter actuator ID"
  />
);
