import React, { Fragment, useCallback, useMemo, useState } from "react";

import { BFS } from "utils";
import { useRouter, useStateToUrl } from "hooks";

import { Tree } from "./tree";
import { Search } from "./search";
import { TreeWithAccordion } from "./tree-with-accordion";

import styles from "./menu-with-search.module.scss";

/**
 * Tree menu with integrated search bar and routing.
 *
 * Usage:
 *
 * <MenuWithSearch {...props} />
 */
export const MenuWithSearch = ({
  nodes,
  queryParam,
  canSelectParent,
  query: customQuery,
  acceptNode: customAcceptNode,
  treeComponent: TreeComponent,
  onSelectNode: customOnSelectNode,
  selectedNode: customSelectedNode,
  getPathForNode: customGetPathForNode,
  ...props
}) => {
  const { queryParams } = useRouter();
  const { [queryParam]: param } = queryParams;
  const nodeMap = useMemo(() => {
    if (typeof customSelectedNode !== "undefined") {
      return {};
    }

    const map = {};
    BFS({ nodes }, (node, parent) => {
      if (parent === null) {
        return;
      }

      map[node[queryParam]] = node;
    });

    return map;
  }, [customSelectedNode, nodes, queryParam]);
  const [isAccordionOpened, setIsAccordionOpened] = useState(false);
  const [query, setQuery] = useState("");

  const selectedNode = useMemo(
    () => (typeof customSelectedNode === "undefined" ? nodeMap[param] : customSelectedNode),
    [customSelectedNode, nodeMap, param]
  );
  const acceptNode = useCallback(
    (node) => {
      if (typeof customAcceptNode === "function") {
        return customAcceptNode(node);
      }

      return node.show_in_menu;
    },
    [customAcceptNode]
  );

  const defaultGetPathForNode = useStateToUrl();
  const getPathForNode = useCallback(
    (node) =>
      typeof customGetPathForNode === "function"
        ? customGetPathForNode(node)
        : canSelectParent || !Array.isArray(node.nodes)
        ? defaultGetPathForNode({
            ...queryParams,
            ...{
              [queryParam]: node[queryParam] !== param ? node[queryParam] : null,
            },
          })
        : null,
    [customGetPathForNode, defaultGetPathForNode, canSelectParent, queryParams, queryParam, param]
  );

  const inputHandler = useCallback((value) => {
    setIsAccordionOpened(!!value);
    setQuery(value);
  }, []);
  const selectNodeHandler = useCallback(
    (node) => {
      if (!Array.isArray(node.nodes)) {
        setIsAccordionOpened(false);
      }

      customOnSelectNode(node[queryParam] !== param ? node : null);
    },
    [param, queryParam, customOnSelectNode]
  );

  const clickAccordionHandler = useCallback(
    (isAccordionOpened) => setIsAccordionOpened(!isAccordionOpened),
    []
  );

  return (
    <Fragment>
      <div className={styles.search}>
        <Search focus={true} value={query} onInput={inputHandler} />
      </div>
      <div className={styles.tree}>
        <TreeComponent
          query={query}
          nodes={nodes}
          acceptNode={acceptNode}
          selectedNode={selectedNode}
          getPathForNode={getPathForNode}
          onSelectNode={selectNodeHandler}
          canSelectParent={canSelectParent}
          isAccordionOpened={isAccordionOpened}
          onClickAccordion={clickAccordionHandler}
          {...props}
        />
      </div>
    </Fragment>
  );
};

MenuWithSearch.defaultProps = {
  ...Tree.defaultProps,
  ...{
    queryParam: "id",
    acceptNode: undefined,
    canSelectParent: false,
    selectedNode: undefined,
    getPathForNode: undefined,
    treeComponent: TreeWithAccordion,
  },
};
