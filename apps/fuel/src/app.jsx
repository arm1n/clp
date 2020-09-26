import React from "react";

import { System, Page, PAGE_TYPE_POPUP } from "@clp/shared";
import { Overview } from "pages/overview/component";
import { FuelFeed } from "pages/fuel-feed/component";
import { MotiveFlow } from "pages/motive-flow/component";
import { RefuelDefuel } from "pages/refuel-defuel/component";
import { FuelTransfer } from "pages/fuel-transfer/component";
import { VentSystem } from "pages/vent-system/component";
import { Indications } from "pages/indications/component";
import { CautionLights } from "pages/caution-lights/component";

export const App = (props) => (
  <System {...props}>
    <Page path="/" name="Overview" partial={false}>
      <Overview />
    </Page>
    <Page path="/fuel-feed" name="Fuel Feed">
      <FuelFeed />
    </Page>
    <Page path="/motive-flow" name="Motive Flow">
      <MotiveFlow />
    </Page>
    <Page path="/refuel-defuel" name="Refuel/Defuel">
      <RefuelDefuel />
    </Page>
    <Page path="/fuel-transfer" name="Fuel Transfer">
      <FuelTransfer />
    </Page>
    <Page path="/vent-system" name="Vent System">
      <VentSystem />
    </Page>
    <Page path="/indications" name="Indications">
      <Indications />
    </Page>

    <Page name="Caution Lights" type={PAGE_TYPE_POPUP} path="/caution-lights">
      <CautionLights />
    </Page>
  </System>
);
