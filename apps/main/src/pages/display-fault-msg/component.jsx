import React from "react";

import { useRoute, getProperty } from "@clp/shared";

import { DISPLAY_FAULT_MSG } from "config/dashboard/config";
import { DisplayFaultMsgSearch } from "components/display-fault-msg-search";
import { SubPage } from "components/sub-page";

// import styles from "./component.module.scss";

export const DisplayFaultMsg = () => {
  const {
    params: { row },
  } = useRoute();

  const { name = null, file = null, buttons = [] } = getProperty(DISPLAY_FAULT_MSG, row) || {};

  return <SubPage name={name} file={file} buttons={buttons} search={<DisplayFaultMsgSearch />} />;
};
