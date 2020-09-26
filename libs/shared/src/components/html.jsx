import React, { forwardRef } from "react";

// import styles from "./html.module.scss";

/**
 * Helper component to display HTLM from string.
 *
 * Usage:
 *
 * <HTML content="<strong>Bold</strong>" />
 */
export const HTML = forwardRef(({ html, ...props }, ref) =>
  html ? (
    <div
      ref={ref}
      dangerouslySetInnerHTML={{
        __html: html,
      }}
      {...props}
    />
  ) : null
);

HTML.defaultProps = {
  html: ""
};
