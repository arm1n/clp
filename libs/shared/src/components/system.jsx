import React, { useMemo } from "react";

import { useRouter } from "hooks";
import { withRouting } from "hocs";
import { Layout } from "./layout";
import { Navbar } from "./navbar";

// import styles from "./system.module.scss";

/**
 * Root component for sub systems with pages.
 *
 * Usage:
 *
 * <System>
 *   <Page path="/page-1" name="Page #1">
 *     <PageOne>
 *   </Page>
 *   <Page path="/page-2" name="Page #2">
 *     <PageTwo>
 *   </Page>
 *   <Page path="/page-3" name="Page #3">
 *     <PageThree>
 *   </Page>
 * </System>
 */
export const SystemComponent = ({
  after,
  before,
  outlet,
  pagesMap,
  linksMap: { default: left, popup, link },
}) => {
  const { path } = useRouter();
  const page = useMemo(() => {
    const page = pagesMap[path];
    if (typeof page === "undefined") {
      return null;
    }

    return page.props.name;
  }, [pagesMap, path]);

  return (
    <Layout navbar={<Navbar page={page} before={before} left={left} after={after} right={[...popup, ...link]} />}>
      {outlet}
    </Layout>
  );
};

export const System = withRouting(SystemComponent);

System.defaultProps = {
  before: null,
  after: null,
};
