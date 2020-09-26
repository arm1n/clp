import React, { useMemo, useState, useCallback } from "react";

import { LG } from "utils";
import { useMatchMedia } from "hooks";

import { Tree } from "./tree";
import { Expandable } from "./accordion";

// import styles from "./tabs-with-routing.module.scss";

/**
 * Specialization of <Tree> hiding tree for small devices in expandable.
 *
 * Usage:
 *
 * <TreeWithAccordion {...props}>
 */
export const TreeWithAccordion = ({
  isAccordionOpened: customIsAccordionOpened,
  onSelectNode: customOnSelectNode,
  onClickAccordion: customOnClickAccordion,

  ...props
}) => {
  const isLG = useMatchMedia(`(min-width: ${LG}px)`);
  const [isAccordionOpenedInternal, setIsAccordionOpenedInternal] = useState(
    !!customIsAccordionOpened
  );
  const isOpened = useMemo(
    () =>
      typeof customIsAccordionOpened === "undefined"
        ? isAccordionOpenedInternal
        : customIsAccordionOpened,
    [isAccordionOpenedInternal, customIsAccordionOpened]
  );

  const clickAccordionHandler = useCallback(
    (isOpened) => {
      setIsAccordionOpenedInternal(!isOpened);
      customOnClickAccordion(isOpened);
    },
    [customOnClickAccordion]
  );
  const selectNodeHandler = useCallback(
    (node) => {
      // do not close when toggling parents
      if (!Array.isArray(node.nodes)) {
        setIsAccordionOpenedInternal(false);
      }

      customOnSelectNode(node);
    },
    [customOnSelectNode]
  );

  const tree = useMemo(() => <Tree onSelectNode={selectNodeHandler} {...props} />, [
    selectNodeHandler,
    props,
  ]);

  return !isLG ? (
    <Expandable isOpened={isOpened} onClick={clickAccordionHandler} name="Menu">
      {tree}
    </Expandable>
  ) : (
    tree
  );
};

TreeWithAccordion.defaultProps = {
  ...Tree.defaultProps,
  ...{
    isAccordionOpened: undefined,
    onClickAccordion: () => {},
  },
};
