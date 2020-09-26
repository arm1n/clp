import React from "react";
import { File } from "@clp/shared";
import { HTML_PATH } from "../../config/mfd-ele-page/config"; // import styles from "./component.module.scss";

export var MFDElePage = function MFDElePage() {
  return /*#__PURE__*/React.createElement(File, {
    path: HTML_PATH
  });
};