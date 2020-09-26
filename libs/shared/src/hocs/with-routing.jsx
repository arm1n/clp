import React, { Fragment, Children, forwardRef, useMemo, useCallback } from "react";
import { Route, Switch, NavLink } from "react-router-dom";

import { Modal } from "components";
import { PAGE_TYPE_POPUP, PAGE_TYPE_LINK } from "components/page";
import { useRouter, useRoute, useStateToUrl } from "hooks";
import { arrayToObject, joinPaths, getProperty, isURL } from "utils";

import { forwardRefFunctionWithDisplayName } from "./get-display-name";

export const withRouting = (Component) => {
  const Routing = ({ forwardedRef, ...props }) => {
    const { path: basePath, url: baseUrl } = useRoute();
    const { navigate, queryParams } = useRouter();
    const { children } = props;

    const pagesMap = useMemo(() => {
      return arrayToObject(
        Children.toArray(children).filter(({ props: { path, type } }) => typeof path === "string"),
        ({ props: { path } }) => joinPaths([basePath, path])
      );
    }, [basePath, children]);

    const pathForPopupHandler = useStateToUrl();
    const linksMap = useMemo(() => {
      const linksMap = { default: [], [PAGE_TYPE_POPUP]: [], [PAGE_TYPE_LINK]: [] };

      for (let key in pagesMap) {
        let {
          props: { url, path, partial, name, type },
        } = pagesMap[key];

        url = typeof url === "string" ? url : path;

        switch (type) {
          case PAGE_TYPE_LINK:
            url = !isURL(url) ? joinPaths([baseUrl, url]) : url;
            break;
          default:
            url = joinPaths([baseUrl, url]);
        }

        const toHandler = () => {
          switch (type) {
            case PAGE_TYPE_POPUP: {
              return pathForPopupHandler({ ...queryParams, ...{ [PAGE_TYPE_POPUP]: url } });
            }
            default:
              return url;
          }
        };

        const isActiveHandler = (match, location) => {
          switch (type) {
            case PAGE_TYPE_POPUP:
              return queryParams[PAGE_TYPE_POPUP] === url;
            default:
              return match !== null;
          }
        };

        let linkComponent;
        switch (type) {
          case PAGE_TYPE_LINK:
            linkComponent = (
              <a href={url} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            );
            break;
          default:
            linkComponent = (
              <NavLink key={url} exact={!partial} to={toHandler} isActive={isActiveHandler}>
                {name}
              </NavLink>
            );
        }

        linksMap[type] = Array.isArray(linksMap[type]) ? linksMap[type] : [];
        linksMap[type].push(linkComponent);
      }

      return linksMap;
    }, [queryParams, baseUrl, pagesMap, pathForPopupHandler]);

    const modalPage = useMemo(() => pagesMap[queryParams[PAGE_TYPE_POPUP]] || null, [
      pagesMap,
      queryParams,
    ]);
    const modalTitle = useMemo(() => getProperty(modalPage, "props.name"), [modalPage]);

    const closeModalHandler = useCallback(
      () => navigate(pathForPopupHandler({ ...queryParams, ...{ [PAGE_TYPE_POPUP]: null } })),
      [pathForPopupHandler, queryParams, navigate]
    );

    const outlet = (
      <Fragment>
        <Switch>
          {Children.map(children, (child) => {
            let {
              props: { path, partial },
            } = child;

            path = path !== null ? joinPaths([basePath, path]) : null;

            return (
              <Route key={path} exact={!partial} path={path}>
                {child}
              </Route>
            );
          })}
        </Switch>
        {modalPage && (
          <Modal onClose={closeModalHandler} title={modalTitle}>
            {modalPage}
          </Modal>
        )}
      </Fragment>
    );

    return (
      <Component
        outlet={outlet}
        linksMap={linksMap}
        pagesMap={pagesMap}
        ref={forwardedRef}
        {...props}
      />
    );
  };

  Routing.defaultProps = {};

  const ForwardRef = forwardRef(forwardRefFunctionWithDisplayName(Routing, "withRouting"));

  ForwardRef.defaultProps = {
    ...Routing.defaultProps,
    ...Component.defaultProps,
  };

  return ForwardRef;
};
