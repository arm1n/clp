import React from "react";

import {
  DATA_SET_CEILING,
  DATA_SET_SIDEWALL,
  SVG_PATH_CEILING,
  SVG_PATH_SIDEWALL,
  INTRO_PATH,
} from "config/microphones-accelerometers/config";
import { SearchBoxWithTabsAndSVG } from "components/search-box-with-tabs-and-svg";

// import styles from "./component.module.scss";

const TABS = [
  {
    id: "ceiling",
    name: "Ceiling",
    introPath: INTRO_PATH,
    svgData: DATA_SET_CEILING,
    svgPath: SVG_PATH_CEILING,
  },
  {
    id: "sidewall",
    name: "Sidwall",
    introPath: INTRO_PATH,
    svgData: DATA_SET_SIDEWALL,
    svgPath: SVG_PATH_SIDEWALL,
  },
];

export const MicrophonesAccelerometers = () => (
  <SearchBoxWithTabsAndSVG
    tabs={TABS}
    searchTitle="Sensors - Microphones and Accelerometers"
    searchPlaceholder="Enter microphone/accelerometer ID"
  />
);
