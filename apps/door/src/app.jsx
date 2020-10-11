import React from "react";

import { System, Page } from "@clp/shared";
import { DoorReset } from "pages/door-reset/component";
import { DoorSeals } from "pages/door-seals/component";
import { DoorSensors } from "pages/door-sensors/component";
import { PseuReadout } from "pages/pseu-readout/component";

export const App = (props) => (
  <System {...props}>
    <Page path="/" name="Door Reset" partial={false}>
      <DoorReset />
    </Page>

    <Page path="/door-seals" name="Door Seals">
      <DoorSeals />
    </Page>

    <Page path="/door-sensors" name="Door Sensors">
      <DoorSensors />
    </Page>

    <Page path="/pseu-readout" name="Pseu Readout">
      <PseuReadout />
    </Page>
  </System>
);