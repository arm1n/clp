import React from "react";

import { LG, useMatchMedia } from "@clp/shared";

import { FOOTER_LOGOS } from "config/dashboard/config";
import styles from "./footer.module.scss";

export const Footer = () => {
  const showFooter = useMatchMedia(`(min-width: ${LG}px)`);

  return showFooter ? (
    <div className={styles.wrapper}>
      {FOOTER_LOGOS.map(({ logo, path }) => (
        <a key={logo} className={styles.link} href={path} rel="noopener noreferrer" target="_blank">
          <img src={logo} alt="Logo" className={styles.svg} />
        </a>
      ))}
    </div>
  ) : null;
};
