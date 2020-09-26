import React from "react";

import styles from "./box.module.scss";

/**
 * Simple box component.
 *
 * Usage:
 *
 * <Box {...props}>
 *   Content
 * </Box>
 */
export const Box = ({ children, inverse }) => (
  <div className={[styles.wrapper, inverse ? styles.inverse : ""].join(" ")}>{children}</div>
);

Box.defaultProps = {
  inverse: false,
};