import React, { useMemo, useCallback } from "react";

import { useRouter, AutoComplete } from "@clp/shared";

import { CAUTION_LIGHTS } from "config/dashboard/config";

// import styles from "./caution-lights-search.module.scss";

const { rows, cols } = CAUTION_LIGHTS;

export const CautionLightsSearch = () => {
  const { navigate } = useRouter();

  const items = useMemo(
    () =>
      rows.reduce(
        (items, data, row) => [
          ...items,
          ...cols.map((col) => ({
            col,
            row,
            id: `${row}-${col}`,
            text: data[col].name,
          })),
        ],
        [
          /* items */
        ]
      ),
    []
  );

  const selectHandler = useCallback(
    ({ row, col }) => {
      navigate(`/caution-lights/${row + 1}/${col}`);
    },
    [navigate]
  );

  return <AutoComplete items={items} onSelect={selectHandler} placeholder="Caution lights..." />;
};
