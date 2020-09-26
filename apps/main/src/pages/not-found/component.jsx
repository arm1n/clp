import React from "react";

import { Link } from "@clp/shared";

import styles from "./component.module.scss";

export const NotFound = () => (
  <div className={styles.wrapper}>
    <h1>Page Not Found!</h1>
    <p>Please go back to the start page here:</p>
    <Link path="/">&larr; Back to home</Link>
  </div>
);
