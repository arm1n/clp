import React, { useMemo } from "react";

import {
  Card,
  CardWithConfigButtons,
  CardConfigButtonInfo,
  CardConfigButtonWrench,
  File,
  MenuWithSearch,
  getProperty,
  useRouter,
  BFS,
} from "@clp/shared";
import { DATA_SET, SVG_PATH, INTRO_PATH } from "config/cb-location/config";

import styles from "./component.module.scss";

const QUERY_PARAM_NODE = "id";

export const CBLocation = () => {
  const {
    queryParams: { [QUERY_PARAM_NODE]: param },
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
  const selectedNode = useMemo(() => nodeMap[param] || null, [nodeMap, param]);

  const title = useMemo(() => getProperty(selectedNode, "text"), [selectedNode]);
  const units = useMemo(() => getProperty(selectedNode, "data.units") || [], [selectedNode]);
  const panels = useMemo(() => getProperty(selectedNode, "data.panels") || {}, [selectedNode]);

  return (
    <div className={styles.grid}>
      <div className={styles.menu}>
        <MenuWithSearch nodes={DATA_SET} queryParam={QUERY_PARAM_NODE} selectedNode={selectedNode} />
      </div>

      <div className={styles.main}>
        {title && <h2 className={styles.title}>{title}</h2>}

        <div className={styles.cb}>
          <div className={styles.top}>
            <div className={styles.panel}>
              <Card title="115V AC CB PANEL (Copilot side)">
                {panels.AC && <File path={panels.AC} />}
              </Card>
            </div>
            <div className={styles.panel}>
              <Card title="AVIONICS CB PANEL (Pilot side)">
                {panels.AVIONICS && <File path={panels.AVIONICS} />}
              </Card>
            </div>
          </div>

          <div className={styles.middle}>
            <div className={styles.svg}>
              <File path={SVG_PATH} />
            </div>
          </div>

          <div className={styles.bottom}>
            <div className={styles.panel}>
              <Card title="RIGHT CB PANEL (Copilot side)">
                {panels.RIGHT && <File path={panels.RIGHT} />}
              </Card>
            </div>
            <div className={styles.panel}>
              <Card title="LEFT CIRCUIT BRAKER PANEL (Pilot side)">
                {panels.LEFT && <File path={panels.LEFT} />}
              </Card>
            </div>
          </div>
        </div>

        <div className={styles.units}>
          {units.map((item, index) => (
            <div key={index} className={styles.unit}>
              <CardWithConfigButtons
                title="Unit"
                buttons={[
                  <CardConfigButtonInfo config={item.info} />,
                  <CardConfigButtonWrench config={item.access} />,
                ].filter(Boolean)}>
                <File path={item.unit} />
              </CardWithConfigButtons>
            </div>
          ))}
        </div>

        {INTRO_PATH && (
          <div className={styles.intro}>
            <File path={INTRO_PATH} />
          </div>
        )}
      </div>
    </div>
  );
};
