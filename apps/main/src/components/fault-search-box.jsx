import React from "react";

import styles from "./fault-search-box.module.scss";

/**
 * Reusable search box for different faults.
 */
export const FaultSearchBox = ({ header, search }) => (
  <div className={styles.wrapper}>
    <div className={styles.header}>{header}</div>
    <div className={styles.search}>{search}</div>
  </div>
);

FaultSearchBox.defaultProps = {
	header: null,
	search: null
};