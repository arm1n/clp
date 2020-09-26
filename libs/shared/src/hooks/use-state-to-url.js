import { useCallback } from "react";

import { useRouter } from "hooks";
import { serializeQueryParams, getProperty, removeProperty } from "utils";

export const useStateToUrl = () => {
  const { path } = useRouter();

  return useCallback(
    (state) => {
      let params = {};

      for (let key in state) {
        const value = getProperty(state, key);

        if (!value) {
          params = removeProperty(params, key);
        } else {
          params[key] = value;
        }
      }

      return `${path}${serializeQueryParams(params)}`;
    },
    [path]
  );
};
