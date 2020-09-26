import { useRef, useEffect } from "react";

export const useMounted = (fn, deps = [], { shouldRunInitially = false } = {}) => {
  const ref = useRef(false);
  useEffect(() => {
    if (!ref.current) {
      ref.current = true;
      if (!shouldRunInitially) {
        return;
      }
    }

    fn();
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps

  return ref.current;
};
