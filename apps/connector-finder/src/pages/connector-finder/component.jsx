import React, { Fragment, useMemo, useCallback } from "react";

import {
  Card,
  Link,
  File,
  FileWithRefs,
  SearchBox,
  useRouter,
  useStateToUrl,
  BFS,
  getProperty,
  setProperty,
} from "@clp/shared";
import { DATA_SET, INTRO_PATH } from "config/connector-finder/config";

import styles from "./component.module.scss";

const QUERY_PARAM_NODE = "id";
const QUERY_PARAM_REF = "subId";

export const ConnectorFinder = () => {
  const {
    navigate,
    queryParams: { [QUERY_PARAM_NODE]: paramNode, [QUERY_PARAM_REF]: paramRef },
  } = useRouter();

  const { nodeMap, refMap, refs } = useMemo(() => {
    const refs = [];
    const refMap = {};
    const nodeMap = {};

    BFS({ nodes: DATA_SET }, (node, parent) => {
      if (parent === null) {
        return;
      }

      // add `nodeId` to get back reference to node from refs
      refs.push(
        ...setProperty(
          node,
          "data.refs",
          (getProperty(node, "data.refs") || []).map((ref) => {
            refMap[ref.id] = {
              ...ref,
              ...{
                nodeId: node.id,
              },
            };

            return refMap[ref.id];
          })
        )
      );

      nodeMap[node.id] = node;
    });

    return { nodeMap, refMap, refs };
  }, []);

  const pathHandler = useStateToUrl();

  const selectedRef = useMemo(() => refMap[paramRef], [refMap, paramRef]);
  const selectedNode = useMemo(() => nodeMap[paramNode], [nodeMap, paramNode]);

  const selectRefHandler = useCallback(
    ({ id, nodeId }) =>
      navigate(
        pathHandler({
          [QUERY_PARAM_NODE]: nodeId,
          [QUERY_PARAM_REF]: id,
        })
      ),
    [navigate, pathHandler]
  );

  const closeRefHandler = useCallback(
    () =>
      navigate(
        pathHandler({
          [QUERY_PARAM_NODE]: selectedRef.nodeId,
        })
      ),
    [navigate, pathHandler, selectedRef]
  );
  const closeHandler = useCallback(() => navigate(pathHandler(null)), [navigate, pathHandler]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.aside}>
        <div className={styles.searchbox}>
          <SearchBox
            items={refs}
            title="Connector"
            placeholder="Enter connector ID"
            onSelect={selectRefHandler}
          />
        </div>
        {selectedRef && (
          <div className={styles.selection}>
            <Card title={selectedRef.text} onClose={closeRefHandler}>
              <File path={selectedRef.file} />
            </Card>
          </div>
        )}
      </div>

      <div className={styles.main}>
        {selectedNode ? (
          <ConnectorFinderDetail
            parentNode={selectedNode}
            selectedRef={selectedRef}
            onSelectRef={selectRefHandler}
            onClose={closeHandler}
          />
        ) : (
          <ConnectorFinderOverview />
        )}
      </div>
    </div>
  );
};

const ConnectorFinderOverview = () => (
  <Fragment>{INTRO_PATH && <File path={INTRO_PATH} />}</Fragment>
);

const ConnectorFinderDetail = ({ parentNode, selectedRef, onClose, onSelectRef }) => {
  const { path: parentPath } = useRouter();

  const title = useMemo(() => getProperty(parentNode, "text"), [parentNode]);
  const path = useMemo(() => getProperty(parentNode, "data.path"), [parentNode]);
  const data = useMemo(() => getProperty(parentNode, "data.refs"), [parentNode]);

  return (
    <Fragment>
      <div className={styles.svg}>
        <Card title={title} onClose={onClose}>
          <FileWithRefs
            path={path}
            refs={data}
            selectedRef={selectedRef}
            onSelectRef={onSelectRef}
          />
        </Card>
      </div>
      <Link path={parentPath}>&larr; Back to overview</Link>
    </Fragment>
  );
};

ConnectorFinderDetail.defaultProps = {
  parentRef: null,
  selectedRef: null,
  onClose: () => {},
  onSelect: () => {},
};
