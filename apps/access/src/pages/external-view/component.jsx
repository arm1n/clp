import React, { Fragment, useMemo, useState, useCallback } from "react";

import {
  LG,
  BFS,
  File,
  FileWithRefs,
  TabsWithRouting,
  Tab,
  TreeWithAccordion,
  SearchBox,
  SVGWithDescAndUnit,
  useRouter,
  useMatchMedia,
  useStateToUrl,
  getProperty,
} from "@clp/shared";

import { DATA_SET, SVG_PATH, INTRO_PATH } from "config/external-view/config";

import styles from "./component.module.scss";

const QUERY_PARAM_REF = "id";
const QUERY_PARAM_TAB = "tab";
const QUERY_PARAM_SUB_REF = "subId";
const COMPOSITION_SEPARATOR = "_____";

export const ExternalView = () => {
  const {
    navigate,
    queryParams: { [QUERY_PARAM_REF]: paramRef },
  } = useRouter();

  const nodeMap = useMemo(() => {
    const map = {};
    BFS({ nodes: DATA_SET }, (node, parent) => {
      if (parent === null) {
        return;
      }

      map[node.id] = node;
    });

    return map;
  }, []);

  const nodes = useMemo(() => {
    const nodes = [];

    Object.keys(nodeMap).forEach((nodeId) => {
      const tabs = getProperty(nodeMap, `${nodeId}.data`) || [];
      tabs.forEach(({ id: tabId, refs = [] }) =>
        nodes.push(
          ...refs.map(({ id, text }) => ({
            id: `${nodeId}${COMPOSITION_SEPARATOR}${tabId}${COMPOSITION_SEPARATOR}${id}`,
            text,
          }))
        )
      );
    });

    return nodes;
  }, [nodeMap]);

  const isLG = useMatchMedia(`(min-width: ${LG}px)`);
  const [highlightedNode, setHighlightedNode] = useState(null);
  const selectedRef = useMemo(() => nodeMap[paramRef] || null, [nodeMap, paramRef]);

  const pathHandler = useStateToUrl();
  const getPathForNode = useCallback(
    ({ id }) => pathHandler({ [QUERY_PARAM_REF]: paramRef !== id ? id : null }),
    [pathHandler, paramRef]
  );

  const pointerEnterNodeHandler = useCallback((node) => isLG && setHighlightedNode(node), [isLG]);
  const pointerLeaveNodeHandler = useCallback((node) => isLG && setHighlightedNode(null), [isLG]);
  const selectRefHandler = useCallback((node) => navigate(getPathForNode(node)), [
    navigate,
    getPathForNode,
  ]);

  const selectHandler = useCallback(
    (node) => {
      const [id, tabId, subId] = node.id.split(COMPOSITION_SEPARATOR);

      navigate(
        pathHandler({
          [QUERY_PARAM_REF]: id,
          [QUERY_PARAM_TAB]: tabId,
          [QUERY_PARAM_SUB_REF]: subId,
        })
      );
    },
    [navigate, pathHandler]
  );

  return (
    <div className={styles.grid}>
      <div className={styles.menu}>
        <div className={styles.searchbox}>
          <SearchBox
            items={nodes}
            title="Access Panel"
            placeholder="Enter panel ID"
            onSelect={selectHandler} />
        </div>

        <TreeWithAccordion
          nodes={DATA_SET}
          getPathForNode={getPathForNode}
          selectedNode={selectedRef}
          onPointerEnterNode={pointerEnterNodeHandler}
          onPointerLeaveNode={pointerLeaveNodeHandler}
        />
      </div>

      <div className={styles.view}>
        {(selectedRef && <ExternalViewDetail parentRef={selectedRef} getPathFor />) || (
          <ExternalViewOverview
            svgRefs={DATA_SET}
            svgPath={SVG_PATH}
            introPath={INTRO_PATH}
            onSelectRef={selectRefHandler}
            highlightedRef={highlightedNode}
          />
        )}
      </div>
    </div>
  );
};

const ExternalViewOverview = ({ svgPath, introPath, svgRefs, highlightedRef, onSelectRef }) => (
  <Fragment>
    <FileWithRefs
      path={svgPath}
      refs={svgRefs}
      onSelectRef={onSelectRef}
      highlightedRef={highlightedRef}
    />
    {INTRO_PATH && (
      <div className={styles.intro}>
        <File path={INTRO_PATH} />
      </div>
    )}
  </Fragment>
);

const ExternalViewDetail = ({ parentRef }) => {
  const {
    queryParams: {
      [QUERY_PARAM_TAB]: paramTab,
      [QUERY_PARAM_REF]: paramNode,

      [QUERY_PARAM_SUB_REF]: paramRef,
    },
  } = useRouter();
  const pathHandler = useStateToUrl();
  const getPathForTab = useCallback(
    (tab) =>
      pathHandler({
        [QUERY_PARAM_REF]: paramNode,
        [QUERY_PARAM_TAB]: tab,

        [QUERY_PARAM_SUB_REF]: null,
      }),
    [pathHandler, paramNode]
  );
  const getPathForRef = useCallback(
    ({ id }) =>
      pathHandler({
        [QUERY_PARAM_REF]: paramNode,
        [QUERY_PARAM_TAB]: paramTab,
        [QUERY_PARAM_SUB_REF]: paramRef !== id ? id : null,
      }),
    [pathHandler, paramNode, paramTab, paramRef]
  );
  const title = useMemo(() => getProperty(parentRef, "text"), [parentRef]);
  const content = useMemo(() => {
    const data = getProperty(parentRef, "data");
    if (!Array.isArray(data)) {
      return [];
    }

    const tabs = data.map(({ id, text, main: svgPath, intro: introPath, refs: svgData }) => (
      <SVGWithDescAndUnit
        svgPath={svgPath}
        svgData={svgData}
        introPath={introPath}
        queryParam={QUERY_PARAM_SUB_REF}
        getPathForRef={getPathForRef}
      />
    ));

    return (
      <TabsWithRouting queryParam={QUERY_PARAM_TAB} getPathForTab={getPathForTab}>
        {data.map(({ id, text }, index) => (
          <Tab key={id} id={id} name={text}>
            {tabs[index]}
          </Tab>
        ))}
      </TabsWithRouting>
    );
  }, [parentRef, getPathForRef, getPathForTab]);

  return (
    <Fragment>
      <h1>{title}</h1>
      {content}
    </Fragment>
  );
};
