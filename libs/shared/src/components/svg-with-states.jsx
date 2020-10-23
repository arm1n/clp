import React, { Fragment, useCallback, useMemo, useState } from "react";

import { isObject, getProperty } from "utils";

import { Card } from "./card";
import { File } from "./file";
import { FileWithRefs, HIGHLIGHT_TYPE_BUTTONS } from "./file-with-refs";

import styles from "./svg-with-states.module.scss";

/**
 * Wrapper around <FileWithRefs> switching between
 * different states (aka. svg files) on clicking.
 *
 * Usage:
 *
 * <SVGWithStates {...props} />
 */
export const SVGWithStates = ({
  children,
  config,
  showFile,
  svgClassName,
  onChangeState,
  currentState: customCurrentState,
}) => {
  const [currentStateInternal, setCurrentStateInternal] = useState(
    getProperty(config, "initialState")
  );

  const isValidState = useCallback(
    (state) => {
      return isObject(getProperty(config, `states.${state}`));
    },
    [config]
  );

  const currentState = useMemo(
    () =>
      typeof customCurrentState !== "undefined" && isValidState(customCurrentState)
        ? customCurrentState
        : currentStateInternal,
    [customCurrentState, currentStateInternal, isValidState]
  );

  const filePath = useMemo(
    () => (showFile ? getProperty(config, `states.${currentState}.file`) || null : null),
    [config, showFile, currentState]
  );

  const svgPath = useMemo(() => getProperty(config, `states.${currentState}.svg`) || null, [
    config,
    currentState,
  ]);

  const svgData = useMemo(() => {
    const transitions = getProperty(config, `transitions.${currentState}`) || {};

    return Object.keys(transitions).map((key) => ({ id: key }));
  }, [config, currentState]);

  const svgClassNames = useMemo(() => [styles.svg, svgClassName].join(" "), [svgClassName]);

  const selectRefHandler = useCallback(
    (ref) => {
      const nextState = getProperty(config, `transitions.${currentState}.${ref.id}`);
      if (!isValidState(nextState)) {
        return;
      }

      setCurrentStateInternal(nextState);
      onChangeState(nextState);
    },
    [config, currentState, isValidState, onChangeState]
  );

  return (
    <Fragment>
      <div className={svgClassNames}>
        <FileWithRefs
          path={svgPath}
          refs={svgData}
          onSelectRef={selectRefHandler}
          highlightType={HIGHLIGHT_TYPE_BUTTONS}
        />
      </div>
      {filePath && (
        <Card title="Description">
          <File path={filePath} />
        </Card>
      )}
    </Fragment>
  );
};

SVGWithStates.defaultProps = {
  config: {},
  showFile: true,
  svgClassName: "",
  currentState: undefined,
  onChangeState: () => {},
};
