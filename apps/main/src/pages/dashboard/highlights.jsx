import React, { useContext } from "react";

import { ArrowLeftIcon } from "@clp/shared";

import { HIGHLIGHTS } from "config/dashboard/config";
import { DashboardContext } from "./component";
import styles from "./highlights.module.scss";

const { nodes, config } = HIGHLIGHTS;

export const Highlights = () => {
  const { onEnterEngine, onLeaveEngine, showConfig } = useContext(DashboardContext);

  const enterEngineHandler = () => onEnterEngine();
  const leaveEngineHandler = () => onLeaveEngine();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h3 className={styles.header}>Highlights</h3>
        <div className={styles.items}>
          {Array.isArray(nodes) &&
            nodes.map(({ id, name }) => <Highlight key={id} id={id} name={name} />)}
        </div>
        {showConfig && (
          <div className={styles.configuration}>
            <h3 className={styles.header}>Configuration</h3>
            <div className={styles.buttons}>
              {Array.isArray(config) &&
                config.map((name, index) => (
                  <div key={index} className={styles.button}>
                    {name}
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
      <button
        className={styles.engine}
        onPointerEnter={enterEngineHandler}
        onPointerLeave={leaveEngineHandler}>
        <ArrowLeftIcon className={styles.icon} />
        <span className={styles.name}>GND-ENG STOPPED</span>
      </button>
    </div>
  );
};

export const Highlight = ({ id, name }) => {
  const { onEnterHighlight, onLeaveHighlight } = useContext(DashboardContext);

  const enterHighlightHandler = () => onEnterHighlight(id);
  const leaveHighlightHandler = () => onLeaveHighlight(null);

  return (
    <button
      className={styles.button}
      onPointerEnter={enterHighlightHandler}
      onPointerLeave={leaveHighlightHandler}>
      <ArrowLeftIcon className={styles.icon} />
      <span className={styles.name}>{name}</span>
    </button>
  );
};
