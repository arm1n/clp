import React from "react";

import { CUSTOMER_LOGO } from "config/dashboard/config";
import styles from "./copyright.module.scss";

export const Copyright = () => (
  <div className={styles.wrapper}>
    <img src={CUSTOMER_LOGO} alt="Customer Logo" className={styles.svg} />
    <div className={styles.header}>Please note:</div>
    <div className={styles.notice}>THE CONTENT OF THIS "CLP" Q400 SOFTWARE IS FOR GUIDANCE, INFORMATION AND TRAINING ONLY.</div>
  </div>
);
