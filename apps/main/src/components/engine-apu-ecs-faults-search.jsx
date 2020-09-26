import React, { useMemo, useCallback } from "react";

import { AutoComplete, useRouter } from "@clp/shared";

import { ENGINE_APU_ECS_FAULTS } from "config/dashboard/config";

// import styles from "./engine-apu-ecs-faults-search.module.scss";

export const EngineApuEcsFaultsSearch = () => {
  const { navigate } = useRouter();

  const items = useMemo(
    () =>
      ENGINE_APU_ECS_FAULTS.map(({ name }, index) => ({
        id: index,
        text: name,
      })),
    []
  );

  const selectHandler = useCallback(({ id }) => {
    navigate(`/engine-apu-ecs-faults/${id}`);
  }, [navigate]);

  return <AutoComplete items={items} onSelect={selectHandler} placeholder="Engine/APU/ECS fault..."/>;
};
