import React, { forwardRef, useRef, useMemo, useEffect, useCallback, useLayoutEffect } from "react";

import { withFetch } from "hocs";
import { arrayToObject, isObject } from "utils";

import { HTML } from "./html";

import styles from "./file-with-refs.module.scss";

export const HIGHLIGHT_TYPE_DEFAULT = "default";
export const HIGHLIGHT_TYPE_OPACITY = "opacity";

const CLASS_NAME_DEFAULT = "clp-ref";
const CLASS_NAME_SELECTED = "selected";
const CLASS_NAME_HIGHLIGHTED = "highlighted";

const syncElementAndData = (domRef, nodeRef, identifier, className) => {
  if (domRef.current !== null) {
    domRef.current.classList.remove(className);
  }

  if (!isObject(nodeRef)) {
    domRef.current = null;
    return;
  }

  domRef.current = document.getElementById(nodeRef[identifier]);
  if (domRef.current === null) {
    return;
  }

  domRef.current.classList.add(className);
};

const FileWithRefsComponent = forwardRef(
  (
    {
      data,
      refs,
      identifier,
      selectedRef,
      highlightType,
      highlightedRef,
      onSelectRef,
      onPointerEnterRef,
      onPointerLeaveRef,
      ...props
    },
    ref
  ) => {
    const refMap = useMemo(() => arrayToObject(refs, identifier), [refs, identifier]);
    const onPointerEnterRefHandler = useRef(null);
    const onPointerLeaveRefHandler = useRef(null);
    const onSelectRefHandler = useRef(null);
    const $highlightedRef = useRef(null);
    const $selectedRef = useRef(null);
    const $domRefs = useRef([]);

    const className = useMemo(() => {
      const selection = selectedRef ? styles.selection : "";
      const highlight = highlightedRef ? styles.highlight : "";

      switch (highlightType) {
        case HIGHLIGHT_TYPE_OPACITY:
          return [styles.opacity, highlight, selection].join(" ");
        default:
          return [styles.default, highlight, selection].join(" ");
      }
    }, [highlightType, selectedRef, highlightedRef]);

    const clickRefHandler = useCallback(
      (event) => {
        const { current: callback } = onSelectRefHandler;
        if (typeof callback !== "function") {
          return;
        }

        callback(refMap[event.currentTarget.id]);
      },
      [refMap, onSelectRefHandler]
    );

    const pointerEnterRefHandler = useCallback(
      (event) => {
        const { current: callback } = onPointerEnterRefHandler;
        if (typeof callback !== "function") {
          return;
        }

        callback(refMap[event.currentTarget.id]);
      },
      [refMap, onPointerEnterRefHandler]
    );

    const pointerLeaveRefHandler = useCallback(
      (event) => {
        const { current: callback } = onPointerLeaveRefHandler;
        if (typeof callback !== "function") {
          return;
        }
        
        callback(refMap[event.currentTarget.id]);
      },
      [refMap, onPointerLeaveRefHandler]
    );

    useEffect(() => {
      // avoid to re-run layout effect for registering
      // refs on each render, thus read from prev ref:
      // @see: https://reactjs.org/docs/hooks-faq.html
      onPointerEnterRefHandler.current = onPointerEnterRef;
      onPointerLeaveRefHandler.current = onPointerLeaveRef;
      onSelectRefHandler.current = onSelectRef;
    });

    useLayoutEffect(() => {
      $domRefs.current = refs
        .map(({ [identifier]: id }) => {
          const $ref = document.getElementById(id);
          if ($ref !== null) {
            $ref.addEventListener("click", clickRefHandler);
            $ref.addEventListener("pointerenter", pointerEnterRefHandler);
            $ref.addEventListener("pointerleave", pointerLeaveRefHandler);
            $ref.classList.add(CLASS_NAME_DEFAULT);
          }

          return $ref;
        })
        .filter(($ref) => $ref !== null);

      return () => {
        $domRefs.current.forEach(($ref) => {
          $ref.removeEventListener("click", clickRefHandler);
          $ref.classList.remove(CLASS_NAME_DEFAULT);
        });
        $domRefs.current = [];
      };
    }, [
      refs,
      refMap,
      identifier,
      clickRefHandler,
      pointerEnterRefHandler,
      pointerLeaveRefHandler,
      data /* => html change */,
    ]);

    useLayoutEffect(() => {
      syncElementAndData($selectedRef, selectedRef, identifier, CLASS_NAME_SELECTED);
    }, [selectedRef, identifier, data /* => html change */]);

    useLayoutEffect(() => {
      syncElementAndData($highlightedRef, highlightedRef, identifier, CLASS_NAME_HIGHLIGHTED);
    }, [highlightedRef, identifier, data /* => html change */]);

    return <HTML html={data} ref={ref} className={className} />;
  }
);

FileWithRefsComponent.defaultProps = {
  onPointerEnterRef: (/* ref */) => {},
  onPointerLeaveRef: (/* ref */) => {},
  onSelectRef: (/* ref */) => {},
  highlightType: HIGHLIGHT_TYPE_DEFAULT,
  highlightedRef: null,
  selectedRef: null,
  identifier: "id",
  refs: [],
};

/**
 * Component interactively act nodes from loaded file (e.g. SVG).
 *
 * Usage:
 *
 * <FileWithRefs
 *   refs={[
 *     { id: "dom-id-1" }, 
 *     { id: "dom-id-2" }
 *   ]}
 *   selectedRef={selectedRef}
 *   onSelectRef={selectHandler}
 *   {...props} />
 */
export const FileWithRefs = withFetch(FileWithRefsComponent);
