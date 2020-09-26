import React, { Fragment, useContext, useMemo } from "react";

import { Link, arrayToObject, TOOLTIP_POSITIONS } from "@clp/shared";

import { CAUTION_LIGHTS } from "config/dashboard/config";
import { DashboardContext } from "./component";
import styles from "./caution-lights.module.scss";

const { rows, cols } = CAUTION_LIGHTS;

export const CautionLights = () => {
  return (
    <div className={styles.wrapper}>
      {["", ...cols].map((col, index) => (
        <div key={index} className={styles.label}>
          {col}
        </div>
      ))}
      {Array.isArray(rows) &&
        rows.map((row, index) => <Row key={index} data={row} index={index} />)}
    </div>
  );
};

CautionLights.defaultProps = { highlightId: null };

const Row = ({ data: rowData, index: rowIndex }) => (
  <Fragment>
    <div className={styles.label}>{rowIndex + 1}</div>
    {Array.isArray(cols) &&
      cols.map((col) => <Col key={col} row={rowIndex} col={col} data={rowData} />)}
  </Fragment>
);

const Col = ({ row, col }) => {
  const {
    name,
    file,
    highlights,
    gnd_eng_stopped,
    gnd_eng_stopped_tooltip: tooltip,
    gnd_eng_stopped_tooltip_pos,
  } = rows[row][col];

  const highlightsMap = useMemo(() => arrayToObject(highlights), [highlights]);
  const { getPathForCol, showConfig, highlightId } = useContext(DashboardContext);

  const path = useMemo(() => getPathForCol({ row, col }), [getPathForCol, row, col]);

  const isHighlighted = (showConfig && gnd_eng_stopped) || highlightId in highlightsMap;
  const hasFile = typeof file === "string";

  const tooltipPos =
    gnd_eng_stopped_tooltip_pos in TOOLTIP_POSITIONS ? gnd_eng_stopped_tooltip_pos : "TOP";
  const tooltipVisible = showConfig ? "1" : "0";
  const tooltipLength = "SM";

  return (
    <Link
      path={path}
      data-tooltip={tooltip}
      data-tooltip-pos={tooltipPos}
      data-tooltip-length={tooltipLength}
      data-tooltip-visible={tooltipVisible}
      className={[
        styles.col,
        hasFile ? styles.link : "",
        isHighlighted ? styles.highlighted : "",
      ].join(" ")}>
      {name}
    </Link>
  );
};
