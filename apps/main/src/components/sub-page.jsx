import React from "react";

import { Layout, Navbar, File } from "@clp/shared";

import { NavButton } from "./nav-button";

// import styles from "./sub-page.module.scss";

/**
 * Reusable sub page component providing navbar and HTML outlet.
 */
export const SubPage = ({ name, search, buttons, file }) => (
  <Layout
    navbar={
      <Navbar
        page={name}
        before={search}
        right={
          Array.isArray(buttons)
            ? buttons.map(({ name, ...props }) => <NavButton {...props}>{name}</NavButton>)
            : []
        }
      />
    }>
    <File path={file} />
  </Layout>
);

SubPage.defaultProps = {
  name: "",
  file: null,
  search: null,
  buttons: [],
};
