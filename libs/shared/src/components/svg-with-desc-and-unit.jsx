import React, { Fragment, useMemo, useCallback } from "react";

import { useRouter, useStateToUrl } from "hooks";
import { arrayToObject, getProperty } from "utils";
import { Card } from "./card";
import { File } from "./file";
import { FileWithRefs, HIGHLIGHT_TYPE_DEFAULT } from "./file-with-refs";
import { CardWithConfigButtons } from "./card-with-config-buttons";
import { CardConfigButtonInfo, CardConfigButtonWrench } from "./card-config-button";

import styles from "./svg-with-desc-and-unit.module.scss";

/**
 * Wrapper around <FileWithRefs> showing contents
 * for refs below from loaded file paths in cards.
 *
 * Usage:
 *
 * <SVGWithDescAndUnit {...props} />
 */
export const SVGWithDescAndUnit = ({
  svgPath,
  svgData,
  dataPath,
  introPath,
  identifier,
  queryParam,
  highlightType,
  highlightedRef,
  onPointerEnterRef,
  onPointerLeaveRef,
  onSelectRef: customOnSelectRef,
  selectedRef: customSelectedRef,
  getPathForRef: customGetPathForRef,
}) => {
  const { navigate, queryParams } = useRouter();
  const { [queryParam]: param } = queryParams;
  const dataMap = useMemo(() => arrayToObject(svgData, identifier), [svgData, identifier]);

  const selectedRef = useMemo(
    () => (typeof customSelectedRef === "undefined" ? dataMap[param] : customSelectedRef),
    [customSelectedRef, dataMap, param]
  );

  const defaultGetPathForRef = useStateToUrl();
  const getPathForRef = useCallback(
    (ref) =>
      typeof customGetPathForRef === "function"
        ? customGetPathForRef(ref)
        : defaultGetPathForRef({
            ...queryParams,
            ...{
              [queryParam]: ref !== null ? ref[queryParam] : null,
            },
          }),
    [customGetPathForRef, defaultGetPathForRef, queryParams, queryParam]
  );

  const selectRefHandler = useCallback(
    (ref) => {
      customOnSelectRef(ref);
      navigate(getPathForRef(ref));
    },
    [navigate, customOnSelectRef, getPathForRef]
  );

  const closeHandler = useCallback(() => selectRefHandler(null), [selectRefHandler]);

  const createPath = useCallback(
    (parts) => {
      parts = Array.isArray(parts) ? parts : [parts];

      return [dataPath, ...parts]
        .filter((part) => typeof part === "string" && part.length > 0)
        .join(".");
    },
    [dataPath]
  );

  const unit = useMemo(() => getProperty(selectedRef, createPath("unit")), [
    selectedRef,
    createPath,
  ]);
  const desc = useMemo(() => getProperty(selectedRef, createPath("desc")), [
    selectedRef,
    createPath,
  ]);
  const info = useMemo(() => getProperty(selectedRef, createPath("info")), [
    selectedRef,
    createPath,
  ]);
  const access = useMemo(() => getProperty(selectedRef, createPath("access")), [
    selectedRef,
    createPath,
  ]);

  const contentClassName = useMemo(
    () =>
      typeof desc === "string" && typeof unit === "string"
        ? [styles.content, styles.columns].join(" ")
        : styles.content,
    [desc, unit]
  );

  const descClassName = useMemo(() => [styles.desc, styles.card].join(" "), []);
  const unitClassName = useMemo(() => [styles.unit, styles.card].join(" "), [])

  return (
    <Fragment>
      <div className={styles.svg}>
        <FileWithRefs
          path={svgPath}
          refs={svgData}
          identifier={identifier}
          selectedRef={selectedRef}
          onSelectRef={selectRefHandler}
          highlightType={highlightType}
          highlightedRef={highlightedRef}
          onPointerEnterRef={onPointerEnterRef}
          onPointerLeaveRef={onPointerLeaveRef}
        />
      </div>
      {(selectedRef && (
        <div className={contentClassName}>
          {unit && (
            <div className={unitClassName}>
              <CardWithConfigButtons
                title="Unit"
                onClose={closeHandler}
                buttons={[
                  <CardConfigButtonInfo config={info} />,
                  <CardConfigButtonWrench config={access} />,
                ]}>
                <File path={unit} />
              </CardWithConfigButtons>
            </div>
          )}
          {desc && (
            <div className={descClassName}>
              <Card title="Description" onClose={closeHandler}>
                <File path={desc} />
              </Card>
            </div>
          )}
        </div>
      )) ||
        (introPath && (
          <div className={styles.intro}>
            <Card title="Introduction">
              <File path={introPath} />
            </Card>
          </div>
        ))}
    </Fragment>
  );
};

SVGWithDescAndUnit.defaultProps = {
  svgData: [],
  dataPath: "",
  svgPath: null,
  introPath: null,
  queryParam: "id",
  identifier: "id",
  highlightedRef: null,
  selectedRef: undefined,
  highlightType: HIGHLIGHT_TYPE_DEFAULT,
  onSelectRef: () => {},
  onPointerEnterRef: () => {},
  onPointerLeaveRef: () => {},
};
