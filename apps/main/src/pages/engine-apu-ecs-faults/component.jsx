import React from "react";

import { useRoute, getProperty } from "@clp/shared";

import { ENGINE_APU_ECS_FAULTS } from "config/dashboard/config";
import { EngineApuEcsFaultsSearch } from "components/engine-apu-ecs-faults-search";
import { SubPage } from "components/sub-page";

// import styles from "./component.module.scss";

export const EngineApuEcsFaults = () => {
  const {
    params: { row },
  } = useRoute();

  const { name = null, file = null, buttons = [] } = getProperty(ENGINE_APU_ECS_FAULTS, row) || {};

  return (
    <SubPage name={name} file={file} buttons={buttons} search={<EngineApuEcsFaultsSearch />} />
  );
};
