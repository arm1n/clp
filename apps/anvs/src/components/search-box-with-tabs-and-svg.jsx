import React, { Fragment, useMemo, useCallback } from "react";

import {
  arrayToObject,
  getProperty,
  useRouter,
  useStateToUrl,
  SearchBox,
  SVGWithDescAndUnit,
  Tab,
  TabsWithRouting,
} from "@clp/shared";

import styles from "./search-box-with-tabs-and-svg.module.scss";

const QUERY_PARAM_NODE = "id";
const QUERY_PARAM_TAB = "tab";

/**
 * Composition of <SearchBox>, <TabsWithRouting> and <SVGWithDescAndUnit>.
 *
 * Usage:
 *
 * <SearchBoxWithTabsAndSVG {...props} />
 */
export const SearchBoxWithTabsAndSVG = ({ tabs, tabsMapping, searchTitle, searchPlaceholder }) => {
  const {
    navigate,
    queryParams: { [QUERY_PARAM_NODE]: paramNode },
  } = useRouter();

  const { nodes, nodeMap } = useMemo(() => {
    const nodes = tabs.reduce(
      (data, { id: tab, svgData }) => [
        ...data,
        ...svgData.map((node) => ({ ...node, ...{ tab } })),
      ],
      []
    );

    const nodeMap = arrayToObject(nodes);

    return { nodes, nodeMap };
  }, [tabs]);

  const filteredNodes = useMemo(() => nodes.filter(({ show_in_search }) => show_in_search), [
    nodes,
  ]);
  const selectedNode = useMemo(() => nodeMap[paramNode] || null, [nodeMap, paramNode]);

  const pathForTabHandler = useStateToUrl();
  const getPathForTab = useCallback(
    (tabId) => {
      // note: unset node if tab is not corresponding one
      const nodeId = getProperty(selectedNode, QUERY_PARAM_NODE);
      const tabIdForNode = getProperty(selectedNode, "tab");

      return pathForTabHandler({
        [QUERY_PARAM_TAB]: tabId,
        [QUERY_PARAM_NODE]: tabId === tabIdForNode ? nodeId : null,
      });
    },
    [pathForTabHandler, selectedNode]
  );

  const pathHandler = useStateToUrl();
  const selectHandler = useCallback(
    ({ id, tab: tabId }) => {
      navigate(
        pathHandler({
          [QUERY_PARAM_NODE]: id,
          [QUERY_PARAM_TAB]: tabId,
        })
      );
    },
    [navigate, pathHandler]
  );

  return (
    <Fragment>
      <div className={styles.searchbox}>
        <SearchBox
          title={searchTitle}
          items={filteredNodes}
          placeholder={searchPlaceholder}
          onSelect={selectHandler}
        />
      </div>

      <div className={styles.main}>
        <TabsWithRouting queryParam={QUERY_PARAM_TAB} getPathForTab={getPathForTab}>
          {tabs.map(({ id, name, svgData, svgPath, introPath }) => (
            <Tab key={id} id={id} name={name}>
              <SVGWithDescAndUnit
                svgData={svgData}
                svgPath={svgPath}
                introPath={introPath}
                selectedRef={selectedNode}
              />
            </Tab>
          ))}
        </TabsWithRouting>
      </div>
    </Fragment>
  );
};

SearchBoxWithTabsAndSVG.defaultProps = {
  searchPlaceholder: "Search...",
  searchTitle: null,
  tabsMapping: {},
  nodes: [],
  tabs: [],
};
