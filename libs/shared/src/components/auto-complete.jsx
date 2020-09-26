import React, { useState, useCallback } from "react";

import { useMounted } from "hooks";
import { debounce } from "utils";
import { Search } from "./search";
import { Tree } from "./tree";

import styles from "./auto-complete.module.scss";

/**
 * Auto complete search box using <Search> and <Tree>.
 *
 * Usage:
 *
 * <AutoComplete {...props} />
 */
export const AutoComplete = ({
  items,
  value,
  placeholder,
  focus,
  maxResults,
  onSearch,
  onSelect,
  ...props
}) => {
  const [currentValue, setCurrentValue] = useState(value);
  const [selectedNode, setSelectedNode] = useState(null);
  const [isTreeVisible, setIsTreeVisible] = useState(false);

  const inputHandler = useCallback(
    debounce((value) => {
      setSelectedNode(value ? selectedNode : null);
      setIsTreeVisible(!!value);
      setCurrentValue(value);

      onSearch(value);
    }),
    [onSearch]
  );

  const selectNodeHandler = useCallback(
    (node) => {
      setCurrentValue(node.text);
      setIsTreeVisible(false);
      setSelectedNode(node);
      
      onSelect(node);
    },
    [onSelect]
  );

  useMounted(() => {
    setCurrentValue(value);
  }, [value]);

  return (
    <div className={styles.wrapper}>
      <Search focus={focus} value={currentValue} onInput={inputHandler} placeholder={placeholder} />

      {isTreeVisible && (
        <div className={styles.tree}>
          <Tree
            nodes={items}
            query={currentValue}
            autoCloseOpened={true}
            maxResults={maxResults}
            selectedNode={selectedNode}
            onSelectNode={selectNodeHandler}
            {...props}>
            No results found.
          </Tree>
        </div>
      )}
    </div>
  );
};

AutoComplete.defaultProps = {
  items: [],
  value: "",
  focus: true,
  maxResults: 15,
  placeholder: "Search...",
  onSelect: (/* item */) => {},
  onSearch: (/* query */) => {},
};
