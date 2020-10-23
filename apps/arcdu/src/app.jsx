import React from "react";

import { System, Page, PAGE_TYPE_POPUP } from "@clp/shared";
import { ARCDUSimulator } from "pages/arcdu-simulator/component";
import { FADECFaultCode } from "pages/fadec-fault-code/component";
import { PECFaultCode } from "pages/pec-fault-code/component";

export const App = (props) => (
  <System {...props}>
    <Page path="/" name="ARCDU Simulator" partial={false}>
      <ARCDUSimulator />
    </Page>

    <Page type={PAGE_TYPE_POPUP} name="FADEC Fault Code" path="/fadec-fault-code">
      <FADECFaultCode />
    </Page>
    <Page type={PAGE_TYPE_POPUP} name="PEC Fault Code" path="/pec-fault-code">
      <PECFaultCode />
    </Page>
  </System>
);
