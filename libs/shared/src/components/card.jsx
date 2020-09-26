import React from "react";

import styles from "./card.module.scss";

import CloseIcon from "img/close.svg";

/**
 * Simple card component with optional close handler.
 *
 * Usage:
 *
 * <Card {...props}>
 *   Content
 * </Card>
 */
export const Card = ({ children, title, buttons, stretch, onClose }) => (
  <div className={[styles.wrapper, stretch ? styles.stretch : ""].join(" ")}>
    <div className={styles.header}>
      <div className={styles.title}>{title}</div>
      <div className={styles.buttons}>
        {Array.isArray(buttons) && buttons}
        {typeof onClose === "function" && (
          <button className={styles.close} onClick={onClose}>
            <CloseIcon className={styles.icon} />
          </button>
        )}
      </div>
    </div>
    <div className={styles.content}>{children}</div>
  </div>
);

Card.defaultProps = {
  title: null,
  stretch: false,
  buttons: null,
  onClose: null,
};
