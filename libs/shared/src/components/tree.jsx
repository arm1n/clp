import React, {
  Children,
  cloneElement,
  Fragment,
  createContext,
  useMemo,
  useEffect,
  useCallback,
  useContext,
  useReducer,
} from "react";

import { useMounted } from "hooks";
import { BFS, sanitizeRegex, arrayToObject } from "utils";

import { HTML } from "./html";
import { Link } from "./router";

import styles from "./tree.module.scss";

const TREE_CONTEXT_DEFAULT = {
  getNodeState: (/* node */) => {},
  getPathForNode: (/* node */) => {},
  onSelectNode: (/* node */) => {},
  onPointerEnterNode: (/* node */) => {},
  onPointerLeaveNode: (/* node */) => {},
};
const TreeContext = createContext(TREE_CONTEXT_DEFAULT);

/**
 * Component to display recursive nodes structures.
 * Includes filter capability to filter on labels.
 *
 * Nodes MUST contain (at least) the following:
 *
 * {
 *   id: string,
 *   text: string,
 *   nodes: Array<Node>
 * }
 *
 * Usage:
 *
 * <Tree {...props}>
 */
export const Tree = ({
  nodes,
  query,
  children,
  selectedNode,
  onSelectNode,
  onPointerEnterNode,
  onPointerLeaveNode,
  acceptNode,
  getPathForNode,
  highlightedNode,
  noResultsMessage,
  ...options
}) => {
  const {
    maxResults,
    openedLevels,
    autoCloseOpened,
    canSelectParent,
    matchLeavesOnly,
    matchWholeBranch,
    closeParentOnSelected,
    closeParentOnHighlighted,
  } = options;

  const [state, dispatch] = useReducer(
    nodesReducer,
    { nodes, openedLevels, acceptNode },
    nodesReducerInit
  );

  useEffect(() => {
    dispatch({
      type: "select",
      payload: {
        node: selectedNode,
        closeParentOnSelected,
      },
    });
  }, [selectedNode, closeParentOnSelected]);

  useMounted(() => {
    dispatch({
      type: "highlight",
      payload: {
        node: highlightedNode,
        closeParentOnHighlighted,
      },
    });
  }, [highlightedNode]);

  useMounted(
    () => {
      dispatch({
        type: "filter",
        payload: {
          query,
          maxResults,
          openedLevels,
          matchLeavesOnly,
          matchWholeBranch,
        },
      });
    },
    [query, matchWholeBranch, matchLeavesOnly],
    {
      shouldRunInitially: typeof query === "string" && query !== "",
    }
  );

  useMounted(() => {
    dispatch({
      type: "levels",
      payload: { openedLevels },
    });
  }, [openedLevels]);

  useMounted(() => {
    dispatch({
      type: "reset",
      payload: { nodes, openedLevels },
    });
  }, [nodes]);

  const selectNodeHandler = useCallback(
    (node) => {
      if (Array.isArray(node.nodes)) {
        dispatch({
          type: "toggle",
          payload: {
            node,
            autoCloseOpened,
          },
        });

        if (!canSelectParent) {
          return;
        }
      }

      onSelectNode(node);
    },
    [autoCloseOpened, canSelectParent, onSelectNode]
  );

  const getNodeState = useCallback((node) => state.nodesMap[node.id], [state.nodesMap]);

  const value = useMemo(
    () => ({
      acceptNode,
      getNodeState,
      getPathForNode,
      onPointerEnterNode,
      onPointerLeaveNode,
      onSelectNode: selectNodeHandler,
    }),
    [
      selectNodeHandler,
      onPointerEnterNode,
      onPointerLeaveNode,
      getNodeState,
      getPathForNode,
      acceptNode,
    ]
  );

  return (
    <TreeContext.Provider value={value}>
      <div className={styles.wrapper}>
        <Nodes nodes={nodes} />
      </div>
      <div className={styles.empty}>{Children.count(children) ? children : noResultsMessage}</div>
    </TreeContext.Provider>
  );
};

Tree.defaultProps = {
  nodes: [],
  query: "",
  maxResults: null,
  openedLevels: [],
  selectedNode: null,
  highlightedNode: null,
  onSelectNode: () => {},
  onPointerEnterNode: () => {},
  onPointerLeaveNode: () => {},
  acceptNode: () => true,
  getPathForNode: undefined,
  canSelectParent: false,
  autoCloseOpened: false,
  matchLeavesOnly: false,
  matchWholeBranch: false,
  closeParentOnSelected: false,
  closeParentOnHighlighted: false,
  noResultsMessage: "No results found!",
};

const Nodes = ({ nodes }) => {
  const { acceptNode } = useContext(TreeContext);

  if (!Array.isArray(nodes)) {
    return null;
  }

  return nodes.filter(acceptNode).map((node) => <Node node={node} key={node.id} />);
};

Nodes.defaultProps = {
  nodes: [],
};

const Node = ({ node }) => {
  const {
    getNodeState,
    onSelectNode,
    onPointerEnterNode,
    onPointerLeaveNode,
    getPathForNode,
  } = useContext(TreeContext);
  const { isHidden, isOpened, isSelected, isMatching, isHighlighted, currentHtml } = getNodeState(
    node
  );

  const clickHandler = useCallback(() => onSelectNode(node), [onSelectNode, node]);
  const pointerEnterHandler = useCallback(() => onPointerEnterNode(node), [
    onPointerEnterNode,
    node,
  ]);
  const pointerLeaveHandler = useCallback(() => onPointerLeaveNode(node), [
    onPointerLeaveNode,
    node,
  ]);

  const pathForNode = useMemo(
    () => (typeof getPathForNode === "function" ? getPathForNode(node) : null),
    [getPathForNode, node]
  );

  const element = useMemo(() => (pathForNode ? <Link path={pathForNode} /> : <button />), [
    pathForNode,
  ]);

  if (!isHidden) {
    return (
      <Fragment>
        {cloneElement(
          element,
          {
            onClick: clickHandler,
            onPointerEnter: pointerEnterHandler,
            onPointerLeave: pointerLeaveHandler,
            className: [
              styles.button,
              isOpened ? styles.opened : "",
              isSelected ? styles.selected : "",
              isMatching ? styles.matching : "",
              isHighlighted ? styles.highlighted : "",
              Array.isArray(node.nodes) && node.nodes.length !== 0 ? styles.expandable : "",
            ].join(" "),
          },
          <HTML html={currentHtml} />
        )}
        {isOpened && (
          <div className={styles.nodes}>
            <Nodes nodes={node.nodes} />
          </div>
        )}
      </Fragment>
    );
  }

  return null;
};

Node.defaultProps = {
  node: {},
};

const walkParentNodes = (nodesMap, id, onVisit) => {
  let { parentId } = nodesMap[id] || {};

  while (parentId) {
    const parent = nodesMap[parentId];
    if (typeof onVisit === "function") {
      onVisit(parent, parentId);
    }

    parentId = parent.parentId;
  }
};

const nodesReducerInit = ({ nodes, openedLevels, acceptNode }) => {
  const openedLevelsMap = arrayToObject(openedLevels);
  const state = {
    nodes,
    nodesMap: {},
    openedId: {},
    selected: null,
    highlighted: null,
  };

  BFS({ nodes }, (node, parent, level) => {
    if (parent === null || !acceptNode(node)) {
      return;
    }

    const { id: parentId } = parent;
    const isOpened = openedLevelsMap[level];

    state.nodesMap[node.id] = {
      level,
      parentId,
      isOpened,
      isHidden: false,
      isSelected: false,
      isMatching: false,
      isHighlighted: false,
      currentHtml: node.text,
    };
  });

  return state;
};

const nodesReducer = (state, { type, payload = {} }) => {
  switch (type) {
    case "reset": {
      const { nodes, openedLevels, acceptNode } = payload;
      return nodesReducerInit({ nodes, openedLevels, acceptNode });
    }

    case "levels": {
      const nodesMap = {};
      const { openedLevels } = payload;
      const openedLevelsMap = arrayToObject(openedLevels);

      BFS({ nodes: state.nodes }, (node, parent, level) => {
        const isOpened = openedLevelsMap[level];

        const next = { isOpened };
        const prev = state.nodesMap[node.id];
        nodesMap[node.id] = { ...prev, ...next };
      });

      return {
        ...state,
        ...{
          nodesMap: { ...state.nodesMap, ...nodesMap },
        },
      };
    }

    case "toggle": {
      const nodesMap = {};
      const openedId = {};
      const { node, autoCloseOpened } = payload;

      // switch state of toggled node now
      const prev = state.nodesMap[node.id];
      const next = { isOpened: !prev.isOpened };
      nodesMap[node.id] = { ...prev, ...next };
      if (next.isOpened) {
        openedId[node.id] = true;
      }

      // closes all items from other branches
      // if entering another root level branch
      if (autoCloseOpened) {
        if (next.isOpened && prev.level === 1) {
          for (let id in state.openedId) {
            const prev = state.nodesMap[id];
            const next = { isOpened: false };
            nodesMap[id] = { ...prev, ...next };
          }
        }
      }

      // open eventual closed parent nodes from current
      walkParentNodes(state.nodesMap, node.id, (prev, id) => {
        nodesMap[id] = { ...prev, ...{ isOpened: true } };
        if (next.isOpened) {
          openedId[id] = true;
        }
      });

      return {
        ...state,
        ...{
          openedId: { ...openedId },
          nodesMap: { ...state.nodesMap, ...nodesMap },
        },
      };
    }

    case "highlight": {
      const nodesMap = {};
      const openedId = {};
      const ignoreId = {};
      const { node, closeParentOnHighlighted } = payload;

      const traversalNode = node === null ? state.highlighted : node;
      const isOpened = node === null ? !closeParentOnHighlighted : true;

      // mark as highlighted if node is truthy
      if (node !== null) {
        const next = { isHighlighted: true };
        const prev = state.nodesMap[node.id];
        nodesMap[node.id] = { ...prev, ...next };
      }

      // unmark previously highlighted node if truthy
      if (state.highlighted !== null) {
        const next = { isHighlighted: false };
        const prev = state.nodesMap[state.highlighted.id];
        nodesMap[state.highlighted.id] = { ...prev, ...next };
      }

      // capture all parent ids from currently selected node, they have to
      // be ignored in the following traversal, where (auto)closing parents
      if (state.selected !== null) {
        walkParentNodes(state.nodesMap, state.selected.id, (prev, id) => {
          if (!isOpened) {
            ignoreId[id] = true;
          }
        });
      }

      // toggle parent nodes when selecting a node, so either:
      // a) `node` truthy: close parent node if `closeParentOnHighlighted`
      // b) `node` falsy: open parent node so that `node` gets visible
      if (traversalNode !== null) {
        walkParentNodes(state.nodesMap, traversalNode.id, (prev, id) => {
          // ignore the node if it's black listed in the ignore map, i.e.
          // it's a parent node belonging to the currently selected node!
          if (id in ignoreId) {
            return;
          }

          // note: if traversal node equals `state.highlighted` it might
          // be already modified above, if so, use the latest state here!
          nodesMap[id] = { ...(nodesMap[id] || prev), ...{ isOpened } };
          if (isOpened) {
            openedId[id] = true;
          }
        });
      }

      return {
        ...state,
        ...{
          highlighted: node,
          nodesMap: { ...state.nodesMap, ...nodesMap },
          openedId: { ...state.openedId, ...openedId },
        },
      };
    }

    case "select": {
      const nodesMap = {};
      const openedId = {};
      const { node, closeParentOnSelected } = payload;

      const traversalNode = node === null ? state.selected : node;
      const isOpened = node === null ? !closeParentOnSelected : true;

      // mark as selected if node is truthy
      if (node !== null) {
        const next = { isSelected: true };
        const prev = state.nodesMap[node.id];
        nodesMap[node.id] = { ...prev, ...next };
      }

      // unmark previously selected node if truthy
      if (state.selected !== null) {
        const next = { isSelected: false };
        const prev = state.nodesMap[state.selected.id];
        nodesMap[state.selected.id] = { ...prev, ...next };
      }

      // toggle parent nodes when selecting a node, so either:
      // a) `node` truthy: close parent node if `closeParentOnSelected`
      // b) `node` falsy: open parent node so that `node` gets visible
      if (traversalNode !== null) {
        walkParentNodes(state.nodesMap, traversalNode.id, (prev, id) => {
          nodesMap[id] = { ...(nodesMap[id] || prev), ...{ isOpened } };
          if (isOpened) {
            openedId[id] = true;
          }
        });
      }

      return {
        ...state,
        ...{
          selected: node,
          nodesMap: { ...state.nodesMap, ...nodesMap },
          openedId: { ...state.openedId, ...openedId },
        },
      };
    }

    case "filter": {
      const nodesMap = {};
      const { query, openedLevels, matchLeavesOnly, matchWholeBranch, maxResults } = payload;
      const regex = new RegExp(sanitizeRegex(query), "gi");
      const openedLevelsMap = arrayToObject(openedLevels);
      const openAndShowParentNodes = (node) => {
        walkParentNodes(state.nodesMap, node.id, (prev, id) => {
          const next = { isHidden: false, isOpened: true };
          nodesMap[id] = { ...prev, ...nodesMap[id], ...next };
        });
      };
      let curResults = 0;

      BFS({ nodes: state.nodes }, (node, parent, level) => {
        // ignore root node from processing
        if (parent === null) {
          return;
        }

        const prev = state.nodesMap[node.id];
        const { id, text, nodes } = node;

        // reset to previous state if no query
        if (query === "") {
          const isOpened = openedLevelsMap[level];
          const next = {
            isOpened,
            isHidden: false,
            isMatching: false,
            currentHtml: node.text,
          };

          if (prev.isSelected) {
            openAndShowParentNodes(node);
          }

          nodesMap[id] = { ...prev, ...next };
          return;
        }

        // hide all nodes if reached maximum
        if (typeof maxResults === "number" && curResults >= maxResults) {
          const next = { isHidden: true };
          nodesMap[id] = { ...prev, ...next };
          return;
        }

        // `matchLeavesOnly` ignores parents
        if (matchLeavesOnly && Array.isArray(nodes)) {
          const next = { isHidden: true };
          nodesMap[id] = { ...prev, ...next };
          return;
        }

        // perform regex search on node text
        // and hide all elements not matching
        if (text.search(regex) < 0) {
          // usually non matching nodes are hidden
          if (!matchWholeBranch) {
            const next = { isHidden: true };
            nodesMap[id] = { ...prev, ...next };
            return;
          }

          // `matchWholeBranch` would show all nodes
          // and open parents in case parents match
          let hasMatchinParents = false;
          walkParentNodes(state.nodesMap, node.id, (prev, id) => {
            prev = nodesMap[id] || prev;
            if (!prev.isMatching) {
              return;
            }

            hasMatchinParents = true;
            const next = { isOpened: true };
            nodesMap[id] = { ...prev, ...next };
          });

          if (!hasMatchinParents) {
            const next = { isHidden: true };
            nodesMap[id] = { ...prev, ...next };
          }

          return;
        }

        // mark node as matching and prepare text highlight
        const next = {
          isHidden: false,
          isMatching: true,
          currentHtml: text.replace(regex, (match) => `<strong>${match}</strong>`),
        };

        nodesMap[id] = { ...prev, ...next };

        // finally open all the parent nodes for this one
        openAndShowParentNodes(node);

        // and increment matching counter for `maxResults`
        curResults++;
      });

      return {
        ...state,
        ...{
          nodesMap: { ...state.nodesMap, ...nodesMap },
        },
      };
    }

    default:
      throw new Error(`Unsupported action: ${type}!`);
  }
};
