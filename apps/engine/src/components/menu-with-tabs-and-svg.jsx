import React, { useState, useMemo, useCallback } from "react";

import {
  LG,
  BFS,
  useRouter,
  useStateToUrl,
  useMatchMedia,
  MenuWithSearch,
  TabsWithRouting,
  Tab,
  SVGWithDescAndUnit,
  getProperty,
} from "@clp/shared";

import styles from "./menu-with-tabs-and-svg.module.scss";

const QUERY_PARAM_NODE = "id";
const QUERY_PARAM_TAB = "tab";

export const MenuWithTabsAndSvg = ({ nodes, tabs, tabsMapping }) => {
  const {
    queryParams: { [QUERY_PARAM_NODE]: paramNode },
  } = useRouter();

  const { tabMap, nodeMap } = useMemo(() => {
    const tabMap = {};
    const nodeMap = {};

    BFS({ nodes }, (node, parent) => {
      if (parent === null) {
        return;
      }

      const tabId = tabsMapping[getProperty(node, "data.view")];
      const nodeId = node[QUERY_PARAM_NODE];

      tabMap[tabId] = Array.isArray(tabMap[tabId]) ? tabMap[tabId] : [];

      nodeMap[nodeId] = node;
      tabMap[tabId].push(node);
    });

    return { nodeMap, tabMap };
  }, [nodes, tabsMapping]);

  const [highlightedNode, setHighlightedNode] = useState(null);

  const isLG = useMatchMedia(`(min-width: ${LG}px)`);
  const pointerEnterNodeHandler = useCallback((node) => isLG && setHighlightedNode(node), [isLG]);
  const pointerLeaveNodeHandler = useCallback((node) => isLG && setHighlightedNode(null), [isLG]);

  const getTabIdForNode = useCallback((node) => tabsMapping[getProperty(node, "data.view")], [
    tabsMapping,
  ]);
  const selectedNode = useMemo(() => nodeMap[paramNode] || null, [nodeMap, paramNode]);

  const pathForNodeHandler = useStateToUrl();
  const getPathForNode = useCallback(
    (node) => {
      if (Array.isArray(node.nodes)) {
        return null;
      }

      // note: set corresponding tab with node path, but reset
      // to initial state if current page equals current node!
      return pathForNodeHandler({
        [QUERY_PARAM_TAB]: paramNode !== node.id ? getTabIdForNode(node) : null,
        [QUERY_PARAM_NODE]: paramNode !== node.id ? getProperty(node, "id") : null,
      });
    },
    [getTabIdForNode, pathForNodeHandler, paramNode]
  );

  const pathForTabHandler = useStateToUrl();
  const getPathForTab = useCallback(
    (tabId) =>
      pathForTabHandler({
        [QUERY_PARAM_TAB]: tabId,
        [QUERY_PARAM_NODE]: null,
      }),
    [pathForTabHandler]
  );

  return (
    <div className={styles.grid}>
      <div className={styles.menu}>
        <MenuWithSearch
          nodes={nodes}
          queryParam={QUERY_PARAM_NODE}
          getPathForNode={getPathForNode}
          highlightedNode={highlightedNode}
          onPointerEnterNode={pointerEnterNodeHandler}
          onPointerLeaveNode={pointerLeaveNodeHandler}
        />
      </div>

      <div className={styles.main}>
        <TabsWithRouting queryParam={QUERY_PARAM_TAB} getPathForTab={getPathForTab}>
          {tabs.map(({ id, name, svgPath, introPath }) => (
            <Tab key={id} id={id} name={name}>
              <SVGWithDescAndUnit
                dataPath="data"
                svgPath={svgPath}
                svgData={tabMap[id]}
                introPath={introPath}
                selectedRef={selectedNode}
                highlightedRef={highlightedNode}
              />
            </Tab>
          ))}
        </TabsWithRouting>
      </div>
    </div>
  );
};

MenuWithTabsAndSvg.defaultProps = {
  tabsMapping: {},
  nodes: [],
  tabs: [],
};
