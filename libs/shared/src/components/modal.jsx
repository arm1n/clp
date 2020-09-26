import React, { forwardRef, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

import { useKeyPress } from "hooks";
import { Card } from "./card";

import styles from "./modal.module.scss";

/**
 * Component to show dialogs on current page.
 *
 * Usage:
 *
 * <Modal 
 *   title="My Dialog"
 *   {...props}>
 *  Content
 * </Modal>
 */
export const Modal = forwardRef(
  ({ title, onClose, closeOnBackdropClick, closeOnEscapeKeyPress, domNode, children }, modalRef) => {
    const isEscapeKeyPressed = useKeyPress("Escape");
    const closeHandler = useCallback(() => {
      onClose();
    }, [onClose]);
    const wrapperRef = useRef(null);

    const clickHandler = useCallback(
      (event) => {
        if (event.target !== wrapperRef.current) {
          return;
        }

        if (!closeOnBackdropClick) {
          return;
        }

        closeHandler();
      },
      [wrapperRef, closeOnBackdropClick, closeHandler]
    );

    useEffect(() => {
      document.body.style = "overflow: hidden";

      return () => {
        document.body.style = "";
      };
    }, []);

    useEffect(() => {
      if (isEscapeKeyPressed && closeOnEscapeKeyPress) {
        closeHandler();
      }
    }, [isEscapeKeyPressed, closeOnEscapeKeyPress, closeHandler]);

    const content = (
      <div ref={wrapperRef} className={styles.wrapper} onClick={clickHandler}>
        <div ref={modalRef} className={styles.content}>
          <Card title={title} onClose={closeHandler}>
            {children}
          </Card>
        </div>
      </div>
    );

    return createPortal(content, domNode || document.body);
  }
);

Modal.defaultProps = {
  title: null,
  domNode: null,
  onClose: () => {},
  closeOnBackdropClick: true,
  closeOnEscapeKeyPress: true,
};