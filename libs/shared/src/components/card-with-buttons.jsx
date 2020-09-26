import React, { useState, useMemo } from "react";

import { Card } from "./card";
import { arrayToObject } from "utils";

// import styles from "./card-with-buttons.module.scss";

/**
 * Special version of <Card> to display additional content with buttons.
 *
 * Usage:
 *
 * <CardWithButtons
 *   buttons={[<CardButton icon={IconComponent}>Button Content</CardButton>]}
 *   {...props}>
 *   Main Content
 * </CardWithButtons>
 */
export const CardWithButtons = ({ children, buttons, ...props }) => {
  const [activeStack, setActiveStack] = useState([-1]);
  const activeMap = useMemo(() => arrayToObject(activeStack), [activeStack]);

  const clickHandler = ({
    button: {
      props: { content, onClick },
    },
    index,
  }) => {
    setActiveStack(
      activeMap[index] ? activeStack.filter((i) => i !== index) : [...activeStack, ...[index]]
    );

    // `onClick` from consumer - provide the
    // current active information in callback
    if (typeof onClick === "function") {
      onClick(!activeMap[index]);
    }
  };

  // grab the current content from active stack
  // if there's a button content, show this one
  // or fallback to default content (= children)
  const stack = [...activeStack];

  let content = children;
  while (stack.length) {
    const button = buttons[stack.pop()];
    if (button && button.props.content) {
      content = button.props.content;
      break;
    }
  }

  return (
    <Card
      buttons={buttons.map((button, index) => {
        const {
          type: CardButton,
          props: { isActive, onClick, ...props },
        } = button;

        return (
          <CardButton
            key={index}
            isActive={activeMap[index]}
            onClick={() => clickHandler({ button, index })}
            {...props}
          />
        );
      })}
      {...props}>
      {content}
    </Card>
  );
};

CardWithButtons.defaultProps = {
  ...Card.defaultProps,
  ...{
    buttons: [],
  }
};
