import React, { Fragment, useMemo, useState, useCallback } from "react";

import { useRouter } from "hooks";
import { getProperty } from "utils";

import { FileWithRefs } from "./file-with-refs";
import { Modal } from "./modal";
import { Card } from "./card";
import { File } from "./file";

import styles from "./svg-with-config.module.scss";

const MODE_LINK = "LINK";
const MODE_POPUP = "POPUP";
const MODE_INLINE = "INLINE";

/**
 * Wrapper around <FileWithRefs> handling different
 * interaction modes for configured layer ids.
 *
 * Usage:
 *
 * <SVGWithConfig {...props} />
 */
export const SVGWithConfig = ({ svgPath, svgData, svgWidth, svgHeight, introPath }) => {
  const [selectedRef, setSelectedRef] = useState(null);
  const { navigate } = useRouter();

  const selectRefHandler = useCallback(
    (ref) => {
      setSelectedRef(ref);
      if (ref === null) {
        return;
      }

      switch (ref.mode) {
        case MODE_LINK:
          navigate(ref.path);
          break;

        case MODE_INLINE:
          break;
        case MODE_POPUP:
          break;
        default:
      }
    },
    [navigate]
  );

  const closeHandler = useCallback(() => selectRefHandler(null), [selectRefHandler]);

  const mode = useMemo(() => getProperty(selectedRef, "mode"), [selectedRef]);
  const path = useMemo(() => getProperty(selectedRef, "path"), [selectedRef]);
  const name = useMemo(() => getProperty(selectedRef, "name"), [selectedRef]);
  const size = useMemo(() => getProperty(selectedRef, "size"), [selectedRef]);
  const isInline = useMemo(() => mode === MODE_INLINE, [mode]);
  const isPopup = useMemo(() => mode === MODE_POPUP, [mode]);

  const showIntro = useMemo(() => {
    if (typeof introPath !== "string") {
      return false;
    }

    switch (mode) {
      case MODE_INLINE:
        return !selectedRef;
      default:
        return true;
    }
  }, [mode, selectedRef, introPath]);

  const svgStyle = useMemo(() => {
    const height = +svgHeight ? `${svgHeight}px` : "auto";
    const width = +svgWidth ? `${svgWidth}px` : "auto";

    return { width, height };
  }, [svgWidth, svgHeight]);

  return (
    <Fragment>
      <div className={styles.svg} style={svgStyle}>
        <FileWithRefs
          path={svgPath}
          refs={svgData}
          selectedRef={selectedRef}
          onSelectRef={selectRefHandler}
        />
      </div>

      {isPopup && (
        <Modal title={name} size={size} onClose={closeHandler}>
          <File path={path} />
        </Modal>
      )}

      {isInline && (
        <Card title={name} onClose={closeHandler}>
          <File path={path} />
        </Card>
      )}

      {showIntro && (
        <Card>
          <File path={introPath} />
        </Card>
      )}
    </Fragment>
  );
};

SVGWithConfig.defaultProps = {
  svgData: [],
  svgPath: null,
  svgWidth: null,
  svgHeight: null,
  introPath: null,
};
