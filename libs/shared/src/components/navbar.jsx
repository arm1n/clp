import React, { Fragment, useState, useCallback, useEffect, useMemo } from "react";

import { LG, getProperty } from "utils";
import { useRouter, usePrevious, useMatchMedia } from "hooks";
import { Link } from "./router";

import styles from "./navbar.module.scss";

import MenuIcon from "img/menu.svg";
import HomeIcon from "img/home.svg";
import CloseIcon from "img/close.svg";

/**
 * Generic navbar component with optional left and right buttons.
 *
 * Usage:
 *
 * <Navbar
 *   left={buttonsLeft}
 *   after={afterLeft}
 *   before={beforeLeft}
 *   right={buttonsRight} />
 */
export const Navbar = ({ page, before, left, after, right }) => {
  const matches = useMatchMedia(`(min-width: ${LG}px)`);
  const [isOpen, setIsOpen] = useState(matches);
  const prevPage = usePrevious(page);
  const { goBack } = useRouter();

  const toggleHandler = useCallback(() => setIsOpen(!isOpen), [isOpen]);
  const clickCloseHandler = useCallback(() => goBack(), [goBack]);

  const showToggle = useMemo(() => left.length > 0 || right.length > 0, [
    left.length,
    right.length,
  ]);

  useEffect(() => {
    if (page === prevPage || matches) {
      return;
    }

    setIsOpen(false);
  }, [matches, page, prevPage]);

  useEffect(() => {
    setIsOpen(matches);
  }, [matches]);

  return (
    <nav className={styles.wrapper}>
      <div className={styles.bar}>
        <Link className={styles.home} path="/">
          <HomeIcon className={styles.icon} />
        </Link>
        <div className={styles.stretch} />
        {showToggle ? (
          <button className={styles.toggle} onClick={toggleHandler}>
            {isOpen ? <CloseIcon className={styles.icon} /> : <MenuIcon className={styles.icon} />}
          </button>
        ) : null}
      </div>
      <div className={styles.menu}>
        {isOpen ? (
          <Fragment>
            {matches ? (
              <Link path="/" className={`${styles.item} ${styles.home}`}>
                <HomeIcon className={styles.icon} />
              </Link>
            ) : null}
            {matches && before ? <div className={styles.before}>{before}</div> : null}
            {left.map((link, index) => {
              const { type: Link, props } = link;

              return (
                <Link
                  key={index}
                  className={styles.item}
                  activeClassName={styles.active}
                  {...props}
                />
              );
            })}
            {matches && after ? <div className={styles.after}>{after}</div> : null}
            <div className={styles.stretch} />
            {right.map((link, index) => {
              const { type: Link, props } = link;

              const activeClass = getProperty(Link, "propTypes.activeClassName")
                ? { activeClassName: styles.active }
                : {};

              return (
                <Link
                  key={index}
                  className={styles.item}
                  {...activeClass}
                  {...props}
                />
              );
            })}
            <button onClick={clickCloseHandler} className={`${styles.item} ${styles.close}`}>
              <CloseIcon className={styles.icon} />
            </button>
          </Fragment>
        ) : null}
      </div>
      {!matches ? (
        <Fragment>
          {before && <div className={styles.before}>{before}</div>}
          {after && <div className={styles.after}>{after}</div>}
        </Fragment>
      ) : null}
    </nav>
  );
};

Navbar.defaultProps = {
  left: [],
  right: [],
  before: null,
  after: null,
};
