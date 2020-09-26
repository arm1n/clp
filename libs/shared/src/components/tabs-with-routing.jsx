import React, { useMemo, useCallback } from "react";

import { useRouter, useStateToUrl } from "hooks";

import { Tabs } from "./tabs";

// import styles from "./tabs-with-routing.module.scss";

/**
 * Specialization of <Tabs> reflecting `id` of <Tab> in route.
 *
 * Usage:
 *
 * <TabsWithRouting activeId="tab-2" getPathForTab={getPathForTab}>
 *   <Tab id="tab-1" name="Tab #1">
 *     Content 1
 *   </Tab>
 *   <Tab id="tab-2" name="Tab #2">
 *     Content 2
 *   </Tab>
 *   <Tab id="tab-3" name="Tab #3">
 *     Content 3
 *   </Tab>
 * </TabsWithRouting>
 */
export const TabsWithRouting = ({
  children,
  queryParam,
  selectedId: customSelectedId,
  getPathForTab: customGetPathForTab,
  ...props
}) => {
  const { queryParams } = useRouter();
  const { [queryParam]: param = null /* reset if unset */ } = queryParams;

  const defaultGetPathForTab = useStateToUrl();
  const getPathForTab = useCallback(
    (id) =>
      typeof customGetPathForTab === "function"
        ? customGetPathForTab(id)
        : defaultGetPathForTab({ ...queryParams, ...{ [queryParam]: id } }),
    [customGetPathForTab, defaultGetPathForTab, queryParams, queryParam]
  );

  const selectedId = useMemo(
    () => (typeof customSelectedId !== "undefined" ? customSelectedId : param),
    [customSelectedId, param]
  );

  return (
    <Tabs selectedId={selectedId} getPathForTab={getPathForTab} {...props}>
      {children}
    </Tabs>
  );
};

TabsWithRouting.defaultProps = {
  ...Tabs.defaultProps,
  ...{
    queryParam: "tab",
  },
};
