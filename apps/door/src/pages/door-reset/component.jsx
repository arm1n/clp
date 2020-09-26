import React, { Fragment, useMemo, useCallback } from "react";

import {
  Card,
  Link,
  File,
  FileWithRefs,
  useRouter,
  useStateToUrl,
  BFS,
  getProperty,
} from "@clp/shared";
import { DATA_SET, SVG_PATH, INTRO_PATH } from "config/door-reset/config";

import styles from "./component.module.scss";

const QUERY_PARAM_REF = "id";

export const DoorReset = () => {
  const {
    navigate,
    queryParams: { [QUERY_PARAM_REF]: paramRef },
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

  const pathHandler = useStateToUrl();

  const selectedRef = useMemo(() => refMap[paramRef], [refMap, paramRef]);

  const selectRefHandler = useCallback(
    (ref) =>
      navigate(
        pathHandler({
          [QUERY_PARAM_REF]: ref.id,
        })
      ),
    [navigate, pathHandler]
  );

  const closeHandler = useCallback(() => navigate(pathHandler(null)), [navigate, pathHandler]);

  return (
    <Fragment>
      {selectedRef ? (
        <DoorResetDetail parentRef={selectedRef} onClose={closeHandler} />
      ) : (
        <DoorResetOverview onSelectRef={selectRefHandler} />
      )}
    </Fragment>
  );
};

const DoorResetOverview = ({ onSelectRef }) => (
  <div className={styles.overview}>
    <div className={styles.svg}>
      <FileWithRefs path={SVG_PATH} refs={DATA_SET} onSelectRef={onSelectRef} />
    </div>
    {INTRO_PATH && (
      <div className={styles.intro}>
        <File path={INTRO_PATH} />
      </div>
    )}
  </div>
);

DoorResetOverview.defaultProps = {
  onSelectRef: () => {},
};

const DoorResetDetail = ({ parentRef, selectedRef, onClose }) => {
  const { path: parentPath } = useRouter();

  const title = useMemo(() => getProperty(parentRef, "text"), [parentRef]);
  const path = useMemo(() => getProperty(parentRef, "data.path"), [parentRef]);

  return (
    <Fragment>
      <div className={styles.card}>
        <Card title={title} onClose={onClose}>
          <File path={path} />
        </Card>
      </div>
      <Link path={parentPath}>&larr; Back to overview</Link>
    </Fragment>
  );
};

DoorResetDetail.defaultProps = {
  parentRef: null,
  onClose: () => {},
};
