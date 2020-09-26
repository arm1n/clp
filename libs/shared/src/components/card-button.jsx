import React, { useCallback } from "react";

import styles from "./card-button.module.scss";

import InfoIcon from "img/info.svg";
import WrenchIcon from "img/wrench.svg";

/**
 * Generic card button for feeding card's navbar with buttons.
 * It children will be displayed once the button is activated.
 *
 * Usage:
 *
 * <CardButton {...props}>
 *  Content
 * </CardButton>
 */
export const CardButton = ({ onClick, isActive, content, icon: Icon }) => {
  const clickHandler = useCallback(() => onClick(content), [onClick, content]);

  return (
    <button
      onClick={clickHandler}
      className={[styles.button, isActive ? styles.active : ""].join(" ")}>
      {Icon && <Icon className={styles.icon} />}
    </button>
  );
};
CardButton.defaultProps = {
  icon: null,
  content: null,
  isActive: false,
  onClick: () => {},
};

/**
 * A predefined card button with a wrench icon.
 *
 * Usage:
 *
 * <CardButtonWrench>Content</CardButtonWrench>
 */
export const CardButtonWrench = ({ ...props }) => <CardButton icon={WrenchIcon} {...props} />;

/**
 * A predefined card button with an info icon.
 *
 * Usage:
 *
 * <CardButtonInfo>Content</CardButtonInfo>
 */
export const CardButtonInfo = ({ ...props }) => <CardButton icon={InfoIcon} {...props} />;
