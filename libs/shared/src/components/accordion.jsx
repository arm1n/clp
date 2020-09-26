import React, {
  Children,
  Fragment,
  cloneElement,
  createContext,
  useCallback,
  useMemo,
  useState,
  useContext,
} from "react";

import { arrayToObject } from "utils";
import { ArrowDownIcon, ArrowUpIcon } from "img";

import { Link } from "./router";

import styles from "./accordion.module.scss";

const ACCORDION_CONTEXT_DEFAULT = {
  openedId: null,
  isAccordionEnabled: false,
  onToggleExpandable: (/* id */) => {},
  getPathForExpandable: (/* id */) => {},
};
const AccordionContext = createContext(ACCORDION_CONTEXT_DEFAULT);

/**
 * Accordion managing collapsible children.
 *
 * Usage:
 *
 * <Accordion>
 *  <Expandable id="expandable-1" name="Expandable #1">
 *     Content 1
 *   </Expandable>
 *   <Expandable id="expandable-2" name="Expandable #1">
 *     Content 2
 *   </Expandable>
 *   <Expandable id="expandable-3" name="Expandable #1">
 *     Content 3
 *   </Expandable>
 * </Accordion>
 */
export const Accordion = ({
  children,
  openedId: customOpenedId,
  getPathForExpandable,
  onToggleExpandable: customOnToggleExpandable,
}) => {
  const expandables = useMemo(() => {
    return Children.toArray(children)
      .filter(({ type }) => type === Expandable)
      .map((tab, index) => cloneElement(tab, { id: tab.props.id || index }));
  }, [children]);
  const expandablesMap = useMemo(() => arrayToObject(expandables, "props.id"), [expandables]);

  const [openedIdInternal, setOpenedIdInternal] = useState(null);
  const openedId = useMemo(
    () =>
      typeof customOpenedId !== "undefined"
        ? customOpenedId in expandablesMap
          ? customOpenedId
          : null
        : openedIdInternal,

    [customOpenedId, openedIdInternal, expandablesMap]
  );

  const toggleExpandableHandler = useCallback(
    (id) => {
      setOpenedIdInternal(openedId === id ? null : id);
      customOnToggleExpandable(id);
    },
    [openedId, customOnToggleExpandable]
  );

  const value = useMemo(
    () => ({
      openedId,
      getPathForExpandable,
      isAccordionEnabled: true,
      onToggleExpandable: toggleExpandableHandler,
    }),
    [openedId, getPathForExpandable, toggleExpandableHandler]
  );

  return (
    <AccordionContext.Provider value={value}>
      <div className={styles.wrapper}>{children}</div>
    </AccordionContext.Provider>
  );
};

Accordion.defaultProps = {
  openedId: undefined,
  getPathForExpandable: undefined,
  onToggleExpandable: () => {},
};

let EXPANDABLE_AUTO_ID = 0;

/**
 * A child component for <Tabs>
 *
 * Usage:
 *
 * <Expandable id="1" name="Expandable #1" isOpened={true|false} onClick={clickHandler}>
 *   Content 1
 * </Expandable>
 */
export const Expandable = ({ id: customId, isOpened: customIsOpened, name, onClick, children }) => {
  const { openedId, onToggleExpandable, getPathForExpandable, isAccordionEnabled } = useContext(
    AccordionContext
  );
  const id = useMemo(() => (typeof customId === "string" ? customId : EXPANDABLE_AUTO_ID++), [
    customId,
  ]);
  const [isOpenedInternal, setIsOpenedInternal] = useState(!!customIsOpened);

  const isOpened = useMemo(
    () =>
      isAccordionEnabled
        ? openedId === id
        : typeof customIsOpened === "undefined"
        ? isOpenedInternal
        : customIsOpened,
    [isAccordionEnabled, isOpenedInternal, customIsOpened, openedId, id]
  );

  const clickHandler = useCallback(() => {
    if (!isAccordionEnabled) {
      setIsOpenedInternal(!isOpenedInternal);
    } else {
      onToggleExpandable(id);
    }

    onClick(isOpened);
  }, [isAccordionEnabled, onToggleExpandable, id, isOpenedInternal, onClick, isOpened]);

  const pathForExpandable = useMemo(
    () => (typeof getPathForTab === "function" ? getPathForExpandable(id) : null),
    [getPathForExpandable, id]
  );

  const element = useMemo(
    () => (pathForExpandable ? <Link path={pathForExpandable} /> : <button />),
    [pathForExpandable]
  );

  const button = useMemo(
    () =>
      cloneElement(
        element,
        {
          onClick: clickHandler,
          className: [styles.button, isOpened ? styles.active : ""].join(" "),
        },
        <Fragment>
          <span className={styles.label}>{name}</span>
          <span className={styles.icon}>{isOpened ? <ArrowUpIcon /> : <ArrowDownIcon />}</span>
        </Fragment>
      ),

    [element, clickHandler, isOpened, name]
  );

  const content = useMemo(
    () => (isOpened ? <div className={styles.content}>{children}</div> : null),
    [isOpened, children]
  );

  return (
    <div className={styles.expandable}>
      {button}
      {content}
    </div>
  );
};

Expandable.defaultProps = {
  id: null,
  name: null,
  isOpened: undefined,
  onClick: () => {},
};
