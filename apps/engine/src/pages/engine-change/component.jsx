import React, { useMemo } from "react";

import { BFS, File, MenuWithSearch, useRouter, getProperty } from "@clp/shared";

import { DATA_SET, INTRO_PATH } from "config/engine-change/config";

import styles from "./component.module.scss";

const QUERY_PARAM = "id";

export const EngineChange = () => {
  const {
    queryParams: { [QUERY_PARAM]: param },
  } = useRouter();
  const nodeMap = useMemo(() => {
    const nodeMap = {};
    BFS({ nodes: DATA_SET }, (node, parent) => {
      if (parent === null) {
        return;
      }
      
      nodeMap[node.id] = node;
    });

    return nodeMap;
  }, []);
  const selectedNode = useMemo(() => nodeMap[param] || null, [nodeMap, param]);
  const filePath = useMemo(() => getProperty(selectedNode, "data.file") || INTRO_PATH, [
    selectedNode,
  ]);

  return (
    <div className={styles.grid}>
      <div className={styles.menu}>
        <MenuWithSearch
          nodes={DATA_SET}
          canSelectParent={true}
          queryParam={QUERY_PARAM}
          selectedNode={selectedNode}
        />
      </div>
      <div className={styles.main}>
        <File path={filePath} />
      </div>
    </div>
  );
};
