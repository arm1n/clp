import React from "react";

import { SVGWithStates } from "components";
import { CONFIG_PSEU } from "config/pseu-simulator/config";

import styles from "./component.module.scss";

export const PSEUSimulator = () => <SVGWithStates svgClassName={styles.svg} config={CONFIG_PSEU} />;
