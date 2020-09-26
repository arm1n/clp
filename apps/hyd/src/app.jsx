import React from "react";

import { System, Page, PAGE_TYPE_POPUP } from "@clp/shared";
import { Overview } from "pages/overview/component";
import { System1 } from "pages/system-1/component";
import { System2 } from "pages/system-2/component";
import { System3 } from "pages/system-3/component";
import { Alternate } from "pages/alternate/component";
import { IndicationLogic } from "pages/indication-logic/component";
import { Servicing } from "pages/servicing/component";

export const App = (props) => (
  <System {...props}>
    <Page path="/" name="Overview" partial={false}>
      <Overview />
    </Page>
    <Page path="/system-1" name="System 1">
      <System1 />
    </Page>
    <Page path="/system-2" name="System 2">
      <System2 />
    </Page>
    <Page path="/system-3" name="System 3">
      <System3 />
    </Page>
    <Page path="/alternate" name="Alternate">
      <Alternate />
    </Page>

    <Page name="Indication Logic" type={PAGE_TYPE_POPUP} path="/indication-logic">
      <IndicationLogic />
    </Page>
    <Page name="Servicing" type={PAGE_TYPE_POPUP} path="/servicing">
      <Servicing />
    </Page>
  </System>
);
