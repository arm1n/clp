import React, { useState, useMemo, useCallback } from "react";

import { LG, BFS, getProperty } from "utils";
import { useMatchMedia, useRouter, useStateToUrl } from "hooks";
import { MenuWithSearch, SVGWithDescAndUnit } from "components";

import styles from "./menu-with-svg.module.scss";

const QUERY_PARAM_NODE = "id";

/**
 * Composition of <MenuWithSearch> and <SVGWithDescAndUnit>.
 *
 * Usage:
 *
 * <MenuWithSVG {...props} />
 */
export const MenuWithSVG = ({ nodes, svgPath, introPath }) => {
  const {
    queryParams: { [QUERY_PARAM_NODE]: paramNode },
  } = useRouter();

  const { array: svgData, map: nodeMap } = useMemo(() => {
    const map = {};
    const array = [];
    BFS({ nodes }, (node, parent) => {
      if (parent === null) {
        return;
      }

      map[node[QUERY_PARAM_NODE]] = node;
      array.push(node);
    });

    return { map, array };
  }, [nodes]);

  const [highlightedNode, setHighlightedNode] = useState(null);

  const isLG = useMatchMedia(`(min-width: ${LG}px)`);
  const pointerEnterNodeHandler = useCallback((node) => isLG && setHighlightedNode(node), [isLG]);
  const pointerLeaveNodeHandler = useCallback((node) => isLG && setHighlightedNode(null), [isLG]);

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
        [QUERY_PARAM_NODE]: paramNode !== node.id ? getProperty(node, "id") : null,
      });
    },
    [pathForNodeHandler, paramNode]
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
        <SVGWithDescAndUnit
          svgData={svgData}
          svgPath={svgPath}
          introPath={introPath}
          selectedRef={selectedNode}
          highlightedRef={highlightedNode}
        />
      </div>
    </div>
  );
};

MenuWithSVG.defaultProps = {
  nodes: [],
  svgPath: null,
  introPath: null,
};
