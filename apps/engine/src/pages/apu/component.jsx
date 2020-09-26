import React from "react";

import {
  DATA_SET,
  INTRO_PATH,
  SVG_PATH_FROM_LEFT,
  SVG_PATH_FROM_RIGHT,
  SVG_FROM_TOP_PATH,
} from "config/apu/config";

import { MenuWithTabsAndSvg } from "components/menu-with-tabs-and-svg";

// import styles from "./component.module.scss";

const VIEW_LEFT = "LEFT";
const VIEW_RIGHT = "RIGHT";
const VIEW_TOP = "TOP";

const TAB_LEFT = "from-left";
const TAB_RIGHT = "from-right";
const TAB_TOP = "from-top";

const TABS_MAPPING = {
  [VIEW_LEFT]: TAB_LEFT,
  [VIEW_RIGHT]: TAB_RIGHT,
  [VIEW_TOP]: TAB_TOP,
};

const TABS = [
  {
    id: TAB_LEFT,
    name: "From Left",
    introPath: INTRO_PATH,
    svgPath: SVG_PATH_FROM_LEFT,
  },
  {
    id: TAB_RIGHT,
    name: "From Right",
    introPath: INTRO_PATH,
    svgPath: SVG_PATH_FROM_RIGHT,
  },
  {
    id: TAB_TOP,
    name: "From Top",
    introPath: INTRO_PATH,
    svgPath: SVG_FROM_TOP_PATH,
  },
];

export const Apu = () => (
  <MenuWithTabsAndSvg nodes={DATA_SET} tabs={TABS} tabsMapping={TABS_MAPPING} />
);