import React from "react";

import { SIDE_NAV } from "config/dashboard/config";
import { NavButton } from "components/nav-button";
import styles from "./side-nav.module.scss";

export const SideNav = () => (
  <div className={styles.wrapper}>
    {SIDE_NAV.map(({ name, path, mode, file }, index) => {
      return (
        <NavButton
          key={index}
          name={name}
          mode={mode}
          path={path}
          file={file}
          className={styles.link}>
          {name}
        </NavButton>
      );
    })}
  </div>
);
