import React, { forwardRef } from "react";

import { withFetch } from "hocs";

import { HTML } from "./html";

// import styles from "./file.module.scss";

const FileComponent = forwardRef(({ data }, ref) => <HTML ref={ref} html={data} />);

/**
 * Component to show HTML from external file in place
 *
 * Usage:
 *
 * <File path="./path/to/html/file.html" />
 */
export const File = withFetch(FileComponent);
