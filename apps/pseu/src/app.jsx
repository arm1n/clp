import React from "react";

import { System, Page, PAGE_TYPE_POPUP } from "@clp/shared";
import { PSEUSimulator } from "pages/pseu-simulator/component";
import { GearsSensors } from "pages/gears-sensors/component";
import { WowSensors } from "pages/wow-sensors/component";
import { DoorsSensors } from "pages/doors-sensors/component";

export const App = (props) => (
  <System {...props}>
    <Page path="/" name="PSEU Simulator" partial={false}>
      <PSEUSimulator />
    </Page>

    <Page type={PAGE_TYPE_POPUP} name="Gears Sensors" path="/gears-sensors">
      <GearsSensors />
    </Page>
    <Page type={PAGE_TYPE_POPUP} name="Wow Sensors" path="/wow-sensors">
      <WowSensors />
    </Page>
    <Page type={PAGE_TYPE_POPUP} name="Doors Sensors" path="/doors-sensors">
      <DoorsSensors />
    </Page>
  </System>
);
