import React from "react";

import { getProperty } from "utils";

import { File } from "./file";
import { CardWithButtons } from "./card-with-buttons";

export const CARD_CONFIG_BUTTON_MODE_LINK = "LINK";
export const CARD_CONFIG_BUTTON_MODE_POPUP = "POPUP";
export const CARD_CONFIG_BUTTON_MODE_INLINE = "INLINE";

// import styles from "./card-with-buttons.module.scss";

/**
 * Special implementation of <CardWithButtons> to process buttons with
 * a predefined config object displaying `content` in different modes.
 *
 * @see: ./card-config-button.jsx for more information.
 *
 * Usage:
 *
 * <CardWithConfigButtons
 *   buttons={[<CardConfigButton .../>]}
 *   {...props}>
 *   Main Content
 * </CardWithConfigButtons>
 */
export const CardWithConfigButtons = ({ children, buttons, ...props }) => {
  return (
    <CardWithButtons
      buttons={buttons
        .filter(({ props }) => {
          switch (getProperty(props, "config.mode")) {
            case CARD_CONFIG_BUTTON_MODE_LINK:
            case CARD_CONFIG_BUTTON_MODE_POPUP:
            case CARD_CONFIG_BUTTON_MODE_INLINE:
              return true;
            default:
              return false;
          }
        })
        .map((button, index) => {
          const {
            type: CardConfigButton,
            props: {
              config: { mode, path },
            },
            props,
          } = button;

          let content;
          switch (mode) {
            case CARD_CONFIG_BUTTON_MODE_LINK:
            case CARD_CONFIG_BUTTON_MODE_POPUP:
              content = null;
              break;

            default:
              content = <File path={path} />;
          }

          // note: `<CardWithButtons>` requires `content` to be set
          // to dynamically switch inlined content in `INLINE` mode
          return <CardConfigButton content={content} {...props} />;
        })}
      {...props}>
      {children}
    </CardWithButtons>
  );
};

CardWithConfigButtons.defaultProps = {
  ...CardWithButtons.defaultProps,
};
