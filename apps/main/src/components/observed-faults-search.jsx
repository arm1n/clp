import React, { useMemo, useCallback } from "react";

import { AutoComplete, getProperty, joinPaths, PDF_BASE_PATH } from "@clp/shared";

import { OBSERVED_FAULTS } from "config/dashboard/config";

// import styles from "./observed-faults-search.module.scss";

export const ObservedFaultsSearch = () => {
  const items = useMemo(
    () =>
      OBSERVED_FAULTS.map(({ name, desc, code }, index) => {
        name = name ? `${name} - ` : "";
        desc = desc ? `${desc}` : "";
        code = code ? ` (${code})` : "";

        return {
          id: index,
          text: `${name}${desc}${code}`,
        };
      }),
    []
  );

  const selectHandler = useCallback(({ id: index }) => {
    const code = getProperty(OBSERVED_FAULTS, `${index}.code`) || "";
    const match = code.match(/^([A-Z]+)\s+([\d-]+)$/); // f.e. `FIM 23-21-00-810-801`
    if (match === null) {
      return;
    }

    const win = window.open();
    win.location = joinPaths([
      PDF_BASE_PATH,
      match[1].toLowerCase(),
      "pdf",
      `${match[1]}${match[2]}.pdf`,
    ]);
    win.opener = null;
  }, []);

  return <AutoComplete items={items} onSelect={selectHandler} placeholder="Observed Faults..." />;
};
