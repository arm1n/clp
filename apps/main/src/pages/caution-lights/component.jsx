import React from "react";

import { useRoute, getProperty } from "@clp/shared";

import { CAUTION_LIGHTS } from "config/dashboard/config";
import { CautionLightsSearch } from "components/caution-lights-search";
import { DisplayFaultMsgSearch } from "components/display-fault-msg-search";
import { EngineApuEcsFaultsSearch } from "components/engine-apu-ecs-faults-search";
import { SubPage } from "components/sub-page";

import styles from "./component.module.scss";

export const CautionLights = () => {
  const {
    params: { row, col },
  } = useRoute();

  // note: `row` is NOT zero-based when extracted from URL, thus we have to deduct 1
  const {
    name = null,
    file = null,
    buttons = [],
    show_display_fault_msg = false,
    show_eng_apu_ecs_search = false,
  } = getProperty(CAUTION_LIGHTS.rows, `${row - 1}.${col}`) || {};

  const search = (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <CautionLightsSearch />
      </div>
      {show_display_fault_msg ? (
        <div className={styles.search}>
          <DisplayFaultMsgSearch />
        </div>
      ) : null}
      {show_eng_apu_ecs_search ? (
        <div className={styles.search}>
          <EngineApuEcsFaultsSearch />
        </div>
      ) : null}
    </div>
  );

  return <SubPage name={name} file={file} buttons={buttons} search={search} />;
};
