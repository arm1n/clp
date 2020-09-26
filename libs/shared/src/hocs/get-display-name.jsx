import React from "react";

export const getDisplayName = (Component, name) =>
  `${name}(${Component.displayName || Component.name || "Component"})`;

export const forwardRefFunctionWithDisplayName = (Component, name) => {
  const ForwardRefComponent = (props, ref) => <Component {...props} forwardedRef={ref} />;

  ForwardRefComponent.displayName = getDisplayName(Component, name);

  return ForwardRefComponent;
};
