import React, { forwardRef, useMemo, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

import { useKeyPress } from "hooks";
import { Card } from "./card";

import styles from "./modal.module.scss";

const SIZE_STYLES = {
  "size-1": styles.size1,
  "size-2": styles.size2,
  "size-3": styles.size3,
  "size-4": styles.size4
};

/**
 * Component to show dialogs on current page.
 *
 * Usage:
 *
 * <Modal
 *   title="My Dialog"
 *   size="size-3"
 *   {...props}>
 *  Content
 * </Modal>
 */
export const Modal = forwardRef(
  (
    { title, size, onClose, closeOnBackdropClick, closeOnEscapeKeyPress, domNode, children },
    modalRef
  ) => {
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

    const contentClasses = useMemo(() => {
      return [styles.content, SIZE_STYLES[size] || ""].join(" ");
    }, [size]);

    const content = (
      <div ref={wrapperRef} className={styles.wrapper} onClick={clickHandler}>
        <div ref={modalRef} className={contentClasses}>
          <Card title={title} onClose={closeHandler}>
            {children}
          </Card>
        </div>
      </div>
    );

    return createPortal(content, domNode || document.body);
  }
);

Modal.defaultProps = {
  size: null,
  title: null,
  domNode: null,
  onClose: () => {},
  closeOnBackdropClick: true,
  closeOnEscapeKeyPress: true,
};
