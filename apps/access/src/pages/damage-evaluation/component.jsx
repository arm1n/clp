import React, { Fragment } from "react";

import { File, SVGWithDescAndUnit } from "@clp/shared";
import { FAQ_UNIT_PATH, DATA_SET, SVG_PATH, INTRO_PATH } from "config/damage-evaluation/config";

import styles from "./component.module.scss";

export const DamageEvaluation = () => (
  <Fragment>
    <div className={styles.top}>
      <File path={FAQ_UNIT_PATH} />
    </div>
    <div className={styles.bottom}>
      <SVGWithDescAndUnit svgPath={SVG_PATH} svgData={DATA_SET} introPath={INTRO_PATH} />
    </div>
  </Fragment>
);
