import React from "react";

import { System, Page } from "@clp/shared";
import { Page as PageComponent } from "pages/page/component";

export const App = (props) => (
  <System {...props}>
    
    <Page path="/page" name="Page">
      <PageComponent />
    </Page>
    
  </System>
);
