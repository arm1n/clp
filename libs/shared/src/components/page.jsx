import React, { Fragment } from "react";

// import styles from "./page.module.scss";

export const PAGE_TYPE_POPUP = 'popup';
export const PAGE_TYPE_LINK = 'link';

/**
 * Dummy page element providing usable props.
 *
 * Usage:
 *
 * <Page path="/path" name="Page" type="type">
 *   <PageComponent>
 * </Page>
 */
export const Page = ({ children }) => <Fragment>{children}</Fragment>;

Page.defaultProps = {
  url: null,
  name: null,
  path: null,
  partial: true,
  type: 'default',
};
