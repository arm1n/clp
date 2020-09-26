import React, { Fragment, useMemo, useCallback } from "react";

import { File, Link, Modal, useRouter, useStateToUrl, PAGE_TYPE_POPUP } from "@clp/shared";

// import styles from "./nav-button.module.scss";

export const NAV_BUTTON_MODE_POPUP = "POPUP";
export const NAV_bUTTON_MODE_INTERNAL = "INTERNAL";
export const NAV_BUTTON_MODE_EXTERNAL = "EXTERNAL";

/**
 * Nav button component for sub pages supporting different modi:
 *
 * <NavButton
 *  name='Name'
 *  mode='POPUP|INTERNAL|EXTERNAL'
 *  path='./path/to/internal/external/popup'
 *  file='./path/to/popup/file.html' />
 */
export const NavButton = ({ children, name, mode, path, file, className }) => {
  const { navigate, queryParams } = useRouter();
  const { [PAGE_TYPE_POPUP]: param } = queryParams;

  const pathForPopupHandler = useStateToUrl();
  const closePopupHandler = useCallback(
    () => navigate(pathForPopupHandler({ ...queryParams, ...{ [PAGE_TYPE_POPUP]: null } })),
    [pathForPopupHandler, queryParams, navigate]
  );

  const pathForPopup = useMemo(
    () => pathForPopupHandler({ ...queryParams, ...{ [PAGE_TYPE_POPUP]: path } }),
    [pathForPopupHandler, queryParams, path]
  );

  switch (mode) {
    case NAV_BUTTON_MODE_POPUP:
      return (
        <Fragment>
          <Link path={pathForPopup} className={className}>
            {children}
          </Link>
          {param === path && (
            <Modal title={name} onClose={closePopupHandler}>
              <File path={file} />
            </Modal>
          )}
        </Fragment>
      );
    case NAV_BUTTON_MODE_EXTERNAL:
      return (
        <a className={className} href={path} rel="noopener noreferrer" target="_blank">
          {children}
        </a>
      );

    default:
      return (
        <Link path={path} className={className}>
          {children}
        </Link>
      );
  }
};

NavButton.defaultProps = {
  name: null,
  mode: NAV_bUTTON_MODE_INTERNAL,
  path: null,
  file: null,
};
