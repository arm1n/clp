import React from "react";

import { System, Page } from "@clp/shared";
import { ConnectorFinder } from "pages/connector-finder/component";

export const App = (props) => (
  <System {...props}>
    
    <Page path="/" name="Connector Finder" partial={false}>
      <ConnectorFinder />
    </Page>
    
  </System>
);
