import React from "react";

import { AutoComplete } from "./auto-complete";
import { Card } from "./card";

import styles from "./auto-complete.module.scss";

/**
 * UI wrapper component for <AutoComplete /> as search box.
 *
 * Usage:
 *
 * <SearchBox
 *   title="My search box"
 *   {...props} />
 */
export const SearchBox = ({ title, ...props }) => (
  <div className={styles.wrapper}>
    <Card title={title}>
      <AutoComplete {...props} />
    </Card>
  </div>
);

SearchBox.defaultProps = {
  ...AutoComplete.defaultProps,
  ...{
    title: null,
  },
};
