import React, { Fragment, useMemo, useCallback } from "react";

import {
  Card,
  CardWithConfigButtons,
  CardConfigButtonInfo,
  CardConfigButtonWrench,
  Link,
  File,
  FileWithRefs,
  SearchBox,
  useRouter,
  useStateToUrl,
  BFS,
  arrayToObject,
  getProperty,
} from "@clp/shared";
import { DATA_SET, SVG_PATH, INTRO_PATH } from "config/relay-finder/config";

import styles from "./component.module.scss";

const QUERY_PARAM_REF = "id";
const QUERY_PARAM_SUB_REF = "subId";
const COMPOSITION_SEPARATOR = "_____";

export const RelayFinder = () => {
  const {
    navigate,
    queryParams: { [QUERY_PARAM_REF]: paramRef, [QUERY_PARAM_SUB_REF]: paramSubRef },
  } = useRouter();

  const refMap = useMemo(() => {
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

    Object.keys(refMap).forEach((nodeId) => {
      const refs = getProperty(refMap, `${nodeId}.data.refs`) || [];
      nodes.push(
        ...refs.map(({ id, text }) => ({ id: `${nodeId}${COMPOSITION_SEPARATOR}${id}`, text }))
      );
    });

    return nodes;
  }, [refMap]);

  const pathHandler = useStateToUrl();

  const selectedRef = useMemo(() => refMap[paramRef], [refMap, paramRef]);
  const subRefMap = useMemo(() => {
    const refs = getProperty(selectedRef, "data.refs");
    return Array.isArray(refs) ? arrayToObject(refs) : {};
  }, [selectedRef]);

  const selectedSubRef = useMemo(() => subRefMap[paramSubRef], [subRefMap, paramSubRef]);

  const selectHandler = useCallback(
    (node) => {
      const [id, subId] = node.id.split(COMPOSITION_SEPARATOR);

      navigate(
        pathHandler({
          [QUERY_PARAM_REF]: id,
          [QUERY_PARAM_SUB_REF]: subId,
        })
      );
    },
    [navigate, pathHandler]
  );

  const selectRefHandler = useCallback(
    (ref) =>
      navigate(
        pathHandler({
          [QUERY_PARAM_REF]: ref.id,
        })
      ),
    [navigate, pathHandler]
  );

  const closeUnitHandler = useCallback(
    () =>
      navigate(
        pathHandler({
          [QUERY_PARAM_REF]: paramRef,
        })
      ),
    [navigate, pathHandler, paramRef]
  );

  const selectSubRefHandler = useCallback(
    (ref) =>
      navigate(
        pathHandler({
          [QUERY_PARAM_REF]: paramRef,
          [QUERY_PARAM_SUB_REF]: paramSubRef !== ref.id ? ref.id : null,
        })
      ),
    [navigate, pathHandler, paramRef, paramSubRef]
  );

  const closeHandler = useCallback(() => navigate(pathHandler(null)), [navigate, pathHandler]);

  return (
    <Fragment>
      <div className={styles.top}>
        {INTRO_PATH && (
          <div className={styles.intro}>
            <File path={INTRO_PATH} />
          </div>
        )}
        <SearchBox
          items={nodes}
          title="Relay Finder"
          placeholder="Enter relay ID"
          onSelect={selectHandler}
        />
      </div>
      {selectedRef ? (
        <RelayFinderDetail
          onClose={closeHandler}
          parentRef={selectedRef}
          selectedRef={selectedSubRef}
          onCloseUnit={closeUnitHandler}
          onSelectRef={selectSubRefHandler}
        />
      ) : (
        <RelayFinderOverview onSelectRef={selectRefHandler} />
      )}
    </Fragment>
  );
};

const RelayFinderOverview = ({ onSelectRef }) => (
  <div className={styles.overview}>
    <Card title="Location overview">
      <div className={styles.map}>
        <FileWithRefs path={SVG_PATH} refs={DATA_SET} onSelectRef={onSelectRef} />
      </div>
    </Card>
  </div>
);

RelayFinderOverview.defaultProps = {
  onSelectRef: () => {},
};

const RelayFinderDetail = ({ parentRef, selectedRef, onSelectRef, onCloseUnit, onClose }) => {
  const { path: parentPath } = useRouter();

  const title = useMemo(() => getProperty(parentRef, "text"), [parentRef]);
  const loc = useMemo(() => getProperty(parentRef, "data.loc"), [parentRef]);
  const main = useMemo(() => getProperty(parentRef, "data.main"), [parentRef]);
  const desc = useMemo(() => getProperty(parentRef, "data.desc"), [parentRef]);
  const refs = useMemo(() => getProperty(parentRef, "data.refs"), [parentRef]);
  const unit = useMemo(() => getProperty(parentRef, "data.unit"), [parentRef]);
  const info = useMemo(() => getProperty(parentRef, "data.info"), [parentRef]);
  const access = useMemo(() => getProperty(parentRef, "data.access"), [parentRef]);

  const selectedUnit = useMemo(() => getProperty(selectedRef, "unit"), [selectedRef]);
  const selectedInfo = useMemo(() => getProperty(selectedRef, "info"), [selectedRef]);
  const selectedAccess = useMemo(() => getProperty(selectedRef, "access"), [selectedRef]);
  const closeUnitHandler = useMemo(() => (selectedUnit ? () => onCloseUnit() : null), [
    selectedUnit,
    onCloseUnit,
  ]);

  const currentAccess = useMemo(() => selectedAccess || access, [selectedAccess, access]);
  const currentInfo = useMemo(() => selectedInfo || info, [selectedInfo, info]);
  const currentUnit = useMemo(() => selectedUnit || unit, [selectedUnit, unit]);
  const hasContent = useMemo(() => main || desc, [main, desc]);

  return (
    <Fragment>
      <h1>{title}</h1>
      <div className={[styles.detail, hasContent ? styles.complete : ""].join(" ")}>
        <div className={styles.sidebar}>
          <div className={styles.access}>
            <Card title="Access" onClose={onClose}>
              <clp-img src={loc} />
            </Card>
          </div>
          {currentUnit && (
            <div className={styles.unit}>
              <CardWithConfigButtons
                title="Unit"
                onClose={closeUnitHandler}
                buttons={[
                  <CardConfigButtonInfo config={currentInfo} />,
                  <CardConfigButtonWrench config={currentAccess} />,
                ]}>
                <File path={currentUnit} />
              </CardWithConfigButtons>
            </div>
          )}
        </div>
        {hasContent && (
          <div className={styles.content}>
            <Card title="Location" onClose={onClose} stretch={true}>
              {main && (
                <div className={styles.main}>
                  <div className={styles.refs}>
                    <FileWithRefs
                      path={main}
                      refs={refs}
                      selectedRef={selectedRef}
                      onSelectRef={onSelectRef}
                    />
                  </div>
                </div>
              )}

              {desc && (
                <div className={styles.desc}>
                  <File path={desc} />
                </div>
              )}
            </Card>
          </div>
        )}
      </div>
      <Link path={parentPath} className={styles.back}>
        &larr; Back to overview
      </Link>
    </Fragment>
  );
};

RelayFinderDetail.defaultProps = {
  parentRef: null,
  selectedRef: null,
  onClose: () => {},
  onCloseUnit: () => {},
  onSelectRef: () => {},
};
