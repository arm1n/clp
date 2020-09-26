import React, { useState, useCallback, useMemo } from "react";

import {
  LG,
  Tab,
  TabsWithRouting,
  FileWithRefs,
  SVGWithDescAndUnit,
  HIGHLIGHT_TYPE_OPACITY,
  useStateToUrl,
  useRouter,
  useMatchMedia,
  arrayToObject,
} from "@clp/shared";
import { DATA_SET_NAV, SVG_PATH_NAV } from "config/cockpit-instruments/config";

import styles from "./component.module.scss";

const QUERY_PARAM_TAB = "tab";
const QUERY_PARAM_REF = "id";

export const CockpitInstruments = () => {
  const {
    navigate,
    queryParams: { [QUERY_PARAM_TAB]: paramTab },
  } = useRouter();
  const showOverviewSVG = useMatchMedia(`(min-width: ${LG}px)`);

  const navMap = useMemo(() => arrayToObject(DATA_SET_NAV, "tab"), []); /* map by `tab`! */
  const selectedRef = useMemo(() => navMap[paramTab] || DATA_SET_NAV[0], [navMap, paramTab]);

  const [highlightedRef, setHighlightedRef] = useState(null);

  const pathHandler = useStateToUrl();
  const getPathForTab = useCallback(
    (tabId) => pathHandler({ [QUERY_PARAM_TAB]: tabId, [QUERY_PARAM_REF]: null }),
    [pathHandler]
  );

  const selectRefHandler = useCallback(
    ({ tab }) => {
      const path = getPathForTab(paramTab === tab ? null : tab);
      setHighlightedRef(null);
      navigate(path);
    },
    [paramTab, navigate, getPathForTab]
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        <TabsWithRouting queryParam={QUERY_PARAM_TAB} getPathForTab={getPathForTab}>
          {DATA_SET_NAV.map(({ tab, text, svgPath, svgData, introPath }, index) => (
            <Tab key={tab} id={tab} name={text}>
              <SVGWithDescAndUnit
                svgPath={svgPath}
                svgData={svgData}
                introPath={introPath}
                queryParam={QUERY_PARAM_REF}
                highlightType={HIGHLIGHT_TYPE_OPACITY}
              />
            </Tab>
          ))}
        </TabsWithRouting>
      </div>

      {showOverviewSVG && (
        <div className={styles.map}>
          <FileWithRefs
            path={SVG_PATH_NAV}
            refs={DATA_SET_NAV}
            selectedRef={selectedRef}
            onSelectRef={selectRefHandler}
            highlightedRef={highlightedRef}
            highlightType={HIGHLIGHT_TYPE_OPACITY}
          />
        </div>
      )}
    </div>
  );
};
