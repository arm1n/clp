import React, { Fragment, useCallback, useMemo, useState } from "react";

import { getProperty } from "utils";
import { Card, File, SVGWithStates } from "components";
import { CONFIG_MAIN, CONFIG_ARCDU } from "config/arcdu-simulator/config";

import styles from "./component.module.scss";

export const ARCDUSimulator = () => {
  const [arcduState, setArcduState] = useState(CONFIG_ARCDU.initialState);
  const [mainState, setMainState] = useState(CONFIG_MAIN.initialState);

  const filePath = useMemo(() => {
    switch (arcduState) {
      case "arcdu_off":
        return getProperty(CONFIG_MAIN, `states.${mainState}.file`);
      default:
        return getProperty(CONFIG_ARCDU, `states.${arcduState}.file`);
    }
  }, [arcduState, mainState]);

  const changeMainStateHandler = useCallback((state) => {
    switch (state) {
      case "main_off":
        setArcduState("arcdu_off");
        break;
      case "main_on":
        setArcduState("arcdu_off2");
        break;
      default:
    }

    setMainState(state);
  }, []);

  const changeArcduStateHandler = useCallback((state, file) => {
    setArcduState(state);
  }, []);

  return (
    <Fragment>
      <div className={styles.svg}>
        <div className={styles.main}>
          <SVGWithStates
            showFile={false}
            config={CONFIG_MAIN}
            currentState={mainState}
            onChangeState={changeMainStateHandler}
          />
        </div>
        <div className={styles.arcdu}>
          <SVGWithStates
            showFile={false}
            config={CONFIG_ARCDU}
            currentState={arcduState}
            onChangeState={changeArcduStateHandler}
          />
        </div>
      </div>
      {filePath && (
        <Card title="Description">
          <File path={filePath} />
        </Card>
      )}
    </Fragment>
  );
};
