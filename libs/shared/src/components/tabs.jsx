import React, {
  Children,
  cloneElement,
  createContext,
  useCallback,
  useRef,
  useMemo,
  useState,
  useContext,
} from "react";

import { arrayToObject, getProperty, isOverflowing } from "utils";
import { Link } from "./router";

import styles from "./tabs.module.scss";

const TABS_CONTEXT_DEFAULT = {
  selectedId: null,
  onSelectTab: (/* id */) => {},
  getPathForTab: (/* id */) => {},
};
const TabsContext = createContext(TABS_CONTEXT_DEFAULT);

/**
 * Root component for tabs.
 *
 * Usage:
 *
 * <Tabs activeId="tab-2">
 *   <Tab id="tab-1" name="Tab #1">
 *     Content 1
 *   </Tab>
 *   <Tab id="tab-2" name="Tab #2">
 *     Content 2
 *   </Tab>
 *   <Tab id="tab-3" name="Tab #3">
 *     Content 3
 *   </Tab>
 * </Tabs>
 */
export const Tabs = ({
  children,
  getPathForTab,
  selectedId: customSelectedId,
  onSelectTab: customOnSelectTab,
}) => {
  const ref = useRef(null);
  const tabs = useMemo(() => {
    return Children.toArray(children)
      .filter(({ type }) => type === Tab)
      .map((tab, index) => cloneElement(tab, { id: tab.props.id || index }));
  }, [children]);

  const defaultId = useMemo(() => getProperty(tabs, `0.props.id`), [tabs]);
  const tabsMap = useMemo(() => arrayToObject(tabs, "props.id"), [tabs]);

  const [selectedIdInternal, setSelectedIdInternal] = useState(defaultId);
  const selectedId = useMemo(
    () =>
      typeof customSelectedId !== "undefined"
        ? customSelectedId in tabsMap
          ? customSelectedId
          : defaultId
        : selectedIdInternal,

    [customSelectedId, selectedIdInternal, defaultId, tabsMap]
  );

  const buttons = useMemo(
    () => tabs.map(({ type: Tab, props }, index) => <Tab key={index} {...props} />),
    [tabs]
  );
  const panel = useMemo(() => getProperty(tabsMap, `${selectedId}.props.children`), [
    tabsMap,
    selectedId,
  ]);
  const selectTabHandler = useCallback(
    (id) => {
      const { current: scrollarea } = ref;

      setSelectedIdInternal(id);
      customOnSelectTab(id);

      return scrollarea !== null ? isOverflowing(scrollarea) : false;
    },
    [customOnSelectTab]
  );

  const value = useMemo(() => ({ selectedId, onSelectTab: selectTabHandler, getPathForTab }), [
    selectedId,
    getPathForTab,
    selectTabHandler,
  ]);

  return (
    <TabsContext.Provider value={value}>
      <div className={styles.scrollframe}>
        <div className={styles.scrollarea} ref={ref}>
          <div className={styles.buttons}>{buttons}</div>
        </div>
      </div>
      <div className={styles.panel}>{panel}</div>
    </TabsContext.Provider>
  );
};

Tabs.defaultProps = {
  selectedId: undefined,
  getPathForTab: undefined,
  onSelectTab: () => {},
};

/**
 * A child component for <Tabs>
 *
 * Usage:
 *
 * <Tab id="1" name="Tab #1" onClick={clickHandler}>
 *   Content 1
 * </Tab>
 */
export const Tab = ({ id, name, onClick }) => {
  const { selectedId, onSelectTab, getPathForTab } = useContext(TabsContext);
  const clickHandler = useCallback(() => {
    const { current: element } = ref;
    const doScroll = onSelectTab(id);
    onClick(id);

    if (doScroll) {
      element.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "center",
      });
    }
  }, [id, onClick, onSelectTab]);

  const pathForTab = useMemo(
    () => (typeof getPathForTab === "function" ? getPathForTab(id) : null),
    [getPathForTab, id]
  );

  const ref = useRef(null);

  const element = useMemo(
    () => (pathForTab ? <Link ref={ref} path={pathForTab} /> : <button ref={ref} />),
    [pathForTab]
  );

  return cloneElement(
    element,
    {
      onClick: clickHandler,
      className: [styles.button, id === selectedId ? styles.active : ""].join(" "),
    },
    name
  );
};

Tab.defaultProps = {
  id: null,
  name: null,
  onClick: () => {},
};
