import { useMemo, useEffect, useState, useCallback } from "react";

export const useMatchMedia = (expr) => {
  const handler = useCallback(({ matches }) => setMatches(matches), []);
  const mql = useMemo(() => window.matchMedia(expr), [expr]);
  const [matches, setMatches] = useState(mql.matches);
  
  useEffect(() => {
    mql.addListener(handler);

    return () => mql.removeListener(handler);
  }, [mql, handler]);

  return matches;
};
