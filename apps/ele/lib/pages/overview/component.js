import React from "react";
import { SVGWithDescAndUnit } from "@clp/shared";
import { DATA_SET, SVG_PATH, INTRO_PATH } from "../../config/overview/config"; // import styles from "./component.module.scss";

export var Overview = function Overview() {
  return /*#__PURE__*/React.createElement(SVGWithDescAndUnit, {
    svgPath: SVG_PATH,
    svgData: DATA_SET,
    introPath: INTRO_PATH
  });
};