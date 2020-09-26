import React from "react";

import styles from "./layout.module.scss";

/**
 * Generic layout component wrapping navbar and content.
 *
 * Usage:
 *
 * <Layout 
 *   navbar={
 *     <Navbar 
 *       page={pageName}
 *       left={leftButtons}
 *       right={rightButtons} />
 *   }
 * >
 *   <!-- content -->
 * </Layout>
 */
export const Layout = ({ children, navbar }) => (
  <div className={styles.wrapper}>
    <div className={styles.navbar}>{navbar}</div>
    <main className={styles.view}>{children}</main>
  </div>
);
Layout.defaultProps = {
  navbar: null,
};
