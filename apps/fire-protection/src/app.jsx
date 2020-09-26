import React from "react";

import { System, Page } from "@clp/shared";
import { Overview } from "pages/overview/component";

export const App = (props) => (
  <System {...props}>
    <Page path="/" name="Overview" partial={false}>
      <Overview />
    </Page>
  </System>
);
