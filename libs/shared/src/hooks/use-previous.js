import { useRef, useEffect } from "react";

export const usePrevious = (value, { initialValue = null, shouldUpdate = true } = {}) => {
  const ref = useRef(initialValue);
  useEffect(() => {
    ref.current = shouldUpdate ? value : ref.current;
  });

  return ref.current;
};
