import React from "react";

import { MAIN_NAV } from "config/dashboard/config";
import { NavButton } from "components/nav-button";
import styles from "./main-nav.module.scss";

export const MainNav = () => (
  <div className={styles.wrapper}>
    {MAIN_NAV.map(({ name, nodes }, index) => (
      <MainNavBlock key={index} name={name} nodes={nodes} />
    ))}
  </div>
);

export const MainNavBlock = ({ name, nodes }) => {
  return (
    <div className={styles.block}>
      <div className={styles.header}>{name}</div>
      <div className={styles.items}>
        {nodes.map(({ name, icon, path, mode, file }, index) => (
          <NavButton
            key={index}
            name={name}
            mode={mode}
            path={path}
            file={file}
            className={styles.item}>
            {icon && (
              <div className={styles.icon}>
                <img className={styles.svg} src={icon} alt={name} />
              </div>
            )}
            <div className={styles.name}>{name}</div>
          </NavButton>
        ))}
      </div>
    </div>
  );
};
