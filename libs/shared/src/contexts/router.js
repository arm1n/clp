import React, { createContext, useMemo, useCallback, useEffect, useRef, useState } from "react";
import { matchPath, useLocation, useHistory, HashRouter } from "react-router-dom";

import { deserializeQueryParams } from "utils";

const ROOT_PATH = "/";

const getBasePath = (path) => {
  const [pathName] = path.split("?");
  const [, basePath] = pathName.split("/");

  return basePath || ROOT_PATH;
};

export const RouterProvider = ({ children }) => {
  const [observers, setObservers] = useState([]);
  const { pathname, search } = useLocation();
  const stack = useRef([pathname]);
  const history = useHistory();

  const fullPath = useMemo(() => `${pathname}${search}`, [pathname, search]);
  const matches = useCallback(
    (path, partial = true) => matchPath(pathname, { path, exact: !partial }),
    [pathname]
  );
  const navigate = useCallback((path) => history.push(path), [history]);
  const queryParams = useMemo(() => deserializeQueryParams(search), [search]);

  const observe = useCallback((observer) => {
    setObservers((observers) => [...observers, ...[observer]]);

    return () => setObservers((observers) => observers.filter((current) => current !== observer));
  }, []);

  const goBack = useCallback(() => {
    // remove current page from stack first
    const newStack = [...stack.current];
    newStack.pop();

    // try to go last one, fallback to root
    const { [newStack.length - 1]: path } = newStack;
    history.push(path || ROOT_PATH);

    // update the reduced stack
    stack.current = newStack;
  }, [history, stack]);

  const value = useMemo(
    () => ({
      path: pathname,
      queryParams,

      fullPath,
      navigate,

      matches,
      observe,
      search,
      goBack,
      stack,
    }),
    [pathname, queryParams, fullPath, navigate, matches, observe, search, goBack]
  );

  useEffect(() => {
    const unlisten = history.listen(({ pathname, search }) => {
      const { current: array } = stack;
      const lastIdx = array.length - 1;

      // notify all observers immediately
      observers.forEach((observer) => observer());

      // if getting back to root, reset
      if (pathname === ROOT_PATH) {
        stack.current = [ROOT_PATH];
        return;
      }

      // check if base path has changed,
      // i.e. switching between systems
      const lastPath = array[lastIdx] || ROOT_PATH;
      const baseNew = getBasePath(pathname);
      const baseOld = getBasePath(lastPath);
      if (baseNew === baseOld) {
        array[lastIdx] = `${pathname}${search}`;
        return;
      }

      // if pathname already exists, remove
      // all items before starting at index
      const index = array.indexOf(pathname);
      if (index >= 0) {
        array.splice(index, array.length - index);
      }

      // finally push path name onto stack
      array.push(pathname);
    });

    return () => unlisten();
  }, [stack, observers, history]);

  return (
    <HashRouter>
      <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
    </HashRouter>
  );
};

const ROUTER_CONTEXT_DEFAULT = {
  path: "",
  stack: [],
  params: {},
  fullPath: "",
  queryParams: {},
  goBack: () => {},
  observe: () => {},
  matches: (/* path */) => {},
  navigate: (/* path */) => {},
};

export const RouterContext = createContext(ROUTER_CONTEXT_DEFAULT);
