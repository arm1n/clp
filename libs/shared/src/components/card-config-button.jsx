import React, { Fragment, useCallback } from "react";
import { useRouter, useModal } from "hooks";
import { isURL } from "utils";

import { File } from "./file";
import { CardButtonInfo, CardButtonWrench } from "./card-button";

export const CARD_CONFIG_BUTTON_MODE_LINK = "LINK";
export const CARD_CONFIG_BUTTON_MODE_POPUP = "POPUP";
export const CARD_CONFIG_BUTTON_MODE_INLINE = "INLINE";

// import styles from "./card-mode-button.module.scss";

/**
 * A specialized card button accepting a config object to
 * process provided content depending on available modes:
 *
 * - LINK: simply links to another page
 * - POPUP: opens `content` in a modal dialog
 * - INLINE: overlays card's children with `content`
 *
 * Usage:
 *
 * <CardConfigButton
 *  config={
 *    path: "./path/to/html/file.html",
 *    mode: "INLINE" | "POPUP" | "LINK",
 *    title: "Title" (popup only)
 *    size: "size-1" | "size-2" | "size-3" | "size-4" (popup only)
 *  }
 *  button={<CardButton icon={IconComponent}/>}
 *  {...props}>
 *  Content
 * </CardConfigButton>
 */
export const CardConfigButton = ({ button, config: { path, mode, title, size }, onClick, ...props }) => {
  const [Modal, showModal] = useModal({
    // invoke onClick (= toggle) when modal
    // closes internally to sync `isActive`
    onClose: () => onClick(),
  });
  const { navigate } = useRouter();

  const clickHandler = useCallback(() => {
    switch (mode) {
      case CARD_CONFIG_BUTTON_MODE_POPUP:
        showModal();
        break;
      case CARD_CONFIG_BUTTON_MODE_LINK:
        if (isURL(path)) {
          const win = window.open();
          win.location = path;
          win.opener = null;
          break;
        }
        
        navigate(path);
        break;
      default:
    }

    onClick();
  }, [mode, path, navigate, showModal, onClick]);

  const { type: CardButton } = button;

  return (
    <Fragment>
      <CardButton onClick={clickHandler} {...props} />
      <Modal title={title} size={size}>
        <File path={path} />
      </Modal>
    </Fragment>
  );
};

CardConfigButton.defaultProps = {
  config: {},
  button: null,
  isActive: false,
  onClick: () => {},
};

/**
 * A predefined card button with a wrench icon.
 *
 * Usage:
 *
 * <CardConfigButtonWrench>Content</CardConfigButtonWrench>
 */
export const CardConfigButtonWrench = ({ ...props }) => (
  <CardConfigButton button={<CardButtonWrench />} {...props} />
);

/**
 * A predefined card button with an info icon.
 *
 * Usage:
 *
 * <CardConfigButtonInfo>Content</CardConfigButtonInfo>
 */
export const CardConfigButtonInfo = ({ ...props }) => (
  <CardConfigButton button={<CardButtonInfo />} {...props} />
);
