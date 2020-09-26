import React, { createContext, useMemo, useState, useCallback } from "react";

import { useMatchMedia, LG } from "@clp/shared";

import { SideNav } from "./side-nav";
import { CautionLights } from "./caution-lights";
import { Highlights } from "./highlights";
import { MainNav } from "./main-nav";
import { Copyright } from "./copyright";
import { Footer } from "./footer";

import { FaultSearchBox } from "components/fault-search-box";
import { CautionLightsSearch } from "components/caution-lights-search";
import { ObservedFaultsSearch } from "components/observed-faults-search";
import { EngineApuEcsFaultsSearch } from "components/engine-apu-ecs-faults-search";
import { DisplayFaultMsgSearch } from "components/display-fault-msg-search";

import styles from "./component.module.scss";

export const LINK_TYPE_SHOW = "SHOW";
export const LINK_TYPE_READOUT = "READOUT";
export const LINK_TYPE_SYSTEMS = "SYSTEMS";
export const LINK_TYPE_LINKS = "LINKS";

const DASHBOARD_CONTEXT_DEFAULT = {
  onClickCol: (/* node */) => {},
  onEnterEngine: () => {},
  onLeaveEngine: () => {},
  onEnterHighlight: (/* id */) => {},
  onLeaveHighlight: () => {},
  highlightId: null,
  showConfig: false,
};
export const DashboardContext = createContext(DASHBOARD_CONTEXT_DEFAULT);

export const Dashboard = () => {
  const showCautionLights = useMatchMedia(`(min-width: ${LG}px)`);
  const [highlightId, setHighlightId] = useState(null);
  const [showConfig, setShowConfig] = useState(false);

  const enterHighlightHandler = useCallback((id) => setHighlightId(id), [setHighlightId]);
  const leaveHighlightHandler = useCallback(() => setHighlightId(null), [setHighlightId]);

  const enterEngineHandler = useCallback(() => setShowConfig(true), [setShowConfig]);
  const leaveEngineHandler = useCallback(() => setShowConfig(false), [setShowConfig]);

  const getPathForCol = useCallback(({ row, col }) => `/caution-lights/${row + 1}/${col}`, []);

  const value = useMemo(
    () => ({
      onEnterHighlight: enterHighlightHandler,
      onLeaveHighlight: leaveHighlightHandler,
      onEnterEngine: enterEngineHandler,
      onLeaveEngine: leaveEngineHandler,
      getPathForCol,
      highlightId,
      showConfig,
    }),
    [
      enterHighlightHandler,
      leaveHighlightHandler,
      enterEngineHandler,
      leaveEngineHandler,
      getPathForCol,
      highlightId,
      showConfig,
    ]
  );

  return (
    <DashboardContext.Provider value={value}>
      <div className={styles.background}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.sidenav}>
              <SideNav />
            </div>

            {showCautionLights && (
              <div className={styles.top}>
                <div className={styles.cautionlights}>
                  <CautionLights highlightId={highlightId} />
                </div>
                <div className={styles.highlights}>
                  <Highlights />
                </div>
              </div>
            )}

            <div className={styles.middle}>
              {!showCautionLights && (
                <div className={styles.search}>
                  <FaultSearchBox header="CAUTION LIGHTS" search={<CautionLightsSearch />} />
                </div>
              )}
              <div className={styles.search}>
                <FaultSearchBox header="OBSERVED FAULTS" search={<ObservedFaultsSearch />} />
              </div>
              <div className={styles.search}>
                <FaultSearchBox header="ENGINE/APU/ECS FAULTS" search={<EngineApuEcsFaultsSearch />} />
              </div>
              <div className={styles.search}>
                <FaultSearchBox header="DISPLAY FAULT MSG" search={<DisplayFaultMsgSearch />} />
              </div>
            </div>

            <div className={styles.bottom}>
              <div className={styles.mainnav}>
                <MainNav />
              </div>
              <div className={styles.copyright}>
                <Copyright />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </DashboardContext.Provider>
  );
};
