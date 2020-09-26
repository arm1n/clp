import React, { forwardRef } from "react";

import { useFetch } from "hooks";
import { forwardRefFunctionWithDisplayName } from "./get-display-name";

export const withFetch = (Component) => {
  const File = ({ forwardedRef, path, ...props }) => {
    const { data, error, loading } = useFetch(path);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error !== null) {
      return (
        <div>
          Could not load file: <code>{path || 'No path given!'}</code>
        </div>
      );
    }

    return <Component ref={forwardedRef} data={data} {...props} />;
  };

  File.defaultProps = {
    path: null
  };

  const ForwardRef = forwardRef(forwardRefFunctionWithDisplayName(File, "withFetch"));

  ForwardRef.defaultProps = {
    ...File.defaultProps,
    ...Component.defaultProps,
  };

  return ForwardRef;
};
