import React, { useMemo, useCallback } from "react";

import { useRouter, AutoComplete } from "@clp/shared";

import { DISPLAY_FAULT_MSG } from "config/dashboard/config";

// import styles from "./display-fault-msg-search.module.scss";

export const DisplayFaultMsgSearch = () => {
  const { navigate } = useRouter();

  const items = useMemo(
    () =>
      DISPLAY_FAULT_MSG.map(({ name }, index) => ({
        id: index,
        text: name,
      })),
    []
  );

  const selectHandler = useCallback(({ id }) => {
    navigate(`/display-fault-msg/${id}`);
  }, [navigate]);

  return <AutoComplete items={items} onSelect={selectHandler} placeholder="Display Fault Msg..." />;
};
