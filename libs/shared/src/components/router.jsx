import React, { useMemo, forwardRef } from "react";
import {
  NavLink as ProxyLink,
  HashRouter as ProxyRouter,
  Redirect as ProxyRedirect,
} from "react-router-dom";

import { RouterProvider } from "contexts";

// import styles from "./router.module.scss";

/**
 * Top level router including router provider.
 *
 * Usage:
 *
 * <Router>
 *   <Page path="/page-1" name="Page #1">
 *     <PageOne>
 *   </Page>
 *   <Page path="/page-2" name="Page #2">
 *     <PageTwo>
 *   </Page>
 *   <Page path="/page-3" name="Page #3">
 *     <PageThree>
 *   </Page>
 * </Router>
 */
export const Router = ({ children }) => (
  <ProxyRouter>
    <RouterProvider>{children}</RouterProvider>
  </ProxyRouter>
);

/**
 * Link element to navigate to routes.
 *
 * Usage:
 *
 * <Link path="/path">Label</Link>
 */
export const Link = forwardRef(({ path, children, ...props }, ref) => {
  const to = useMemo(() => (typeof path === "string" ? path : ""), [path]);

  return (
    <ProxyLink ref={ref} to={to} {...props}>
      {children}
    </ProxyLink>
  );
});

Link.defaultProps = {
  path: null,
};

/**
 * Redirect element to redirect to routes.
 *
 * Usage:
 *
 * <Redirect path="/path" />
 */
export const Redirect = ({ path, ...props }) => <ProxyRedirect to={path} />;

Redirect.defaultProps = {
  path: null,
};
