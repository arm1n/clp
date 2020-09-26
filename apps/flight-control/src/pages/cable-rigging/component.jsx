import React, { useCallback } from "react";

import { Tab, TabsWithRouting, SVGWithDescAndUnit, useStateToUrl } from "@clp/shared";
import {
  DATA_SET_AILERON,
  DATA_SET_SPOILER,
  DATA_SET_RUDDER,
  DATA_SET_ELEVATOR,
  SVG_PATH_AILERON,
  SVG_PATH_SPOILER,
  SVG_PATH_RUDDER,
  SVG_PATH_ELEVATOR,
  INTRO_PATH_AILERON,
  INTRO_PATH_SPOILER,
  INTRO_PATH_RUDDER,
  INTRO_PATH_ELEVATOR,
} from "config/cable-rigging/config";

const TABS = [
  {
    id: "aileron",
    name: "Aileron",
    introPath: INTRO_PATH_AILERON,
    svgPath: SVG_PATH_AILERON,
    svgData: DATA_SET_AILERON,
  },
  {
    id: "roll-spoilers",
    name: "Roll Spoilers",
    introPath: INTRO_PATH_SPOILER,
    svgPath: SVG_PATH_SPOILER,
    svgData: DATA_SET_SPOILER,
  },
  {
    id: "rudder",
    name: "Rudder",
    introPath: INTRO_PATH_RUDDER,
    svgPath: SVG_PATH_RUDDER,
    svgData: DATA_SET_RUDDER,
  },
  {
    id: "elevators",
    name: "Elevators",
    introPath: INTRO_PATH_ELEVATOR,
    svgPath: SVG_PATH_ELEVATOR,
    svgData: DATA_SET_ELEVATOR,
  },
];

// import styles from "./component.module.scss";

const QUERY_PARAM_REF = "id";
const QUERY_PARAM_TAB = "tab";

export const CableRigging = () => {
  const pathHandler = useStateToUrl();
  const getPathForTab = useCallback(
    (tabId) => pathHandler({ [QUERY_PARAM_TAB]: tabId, [QUERY_PARAM_REF]: null }),
    [pathHandler]
  );

  return (
    <TabsWithRouting queryParam={QUERY_PARAM_TAB} getPathForTab={getPathForTab}>
      {TABS.map(({ id, name, svgPath, svgData, introPath }) => (
        <Tab key={id} id={id} name={name}>
          <SVGWithDescAndUnit svgData={svgData} svgPath={svgPath} introPath={introPath} />
        </Tab>
      ))}
    </TabsWithRouting>
  );
};
