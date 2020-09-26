import React from "react";

import { System, Page, PAGE_TYPE_POPUP } from "@clp/shared";
import { DoorReset } from "pages/door-reset/component";
import { DoorSeals } from "pages/door-seals/component";
import { DoorSensors } from "pages/door-sensors/component";
import { PseuReadout } from "pages/pseu-readout/component";
import { FwdBaggDoor } from "pages/fwd-bagg-door/component";
import { FwdEmrgExit } from "pages/fwd-emrg-exit/component";
import { AftPaxDoor } from "pages/aft-pax-door/component";
import { AftBaggDoor } from "pages/aft-bagg-door/component";
import { ServiceDoor } from "pages/service-door/component";

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

    <Page name="Fwd Bagg Door" type={PAGE_TYPE_POPUP} path="/fwd-bagg-door">
      <FwdBaggDoor />
    </Page>
    <Page name="Fwd Emrg. Exit" type={PAGE_TYPE_POPUP} path="/fwd-emrg-exit">
      <FwdEmrgExit />
    </Page>
    <Page name="Aft Pax Door" type={PAGE_TYPE_POPUP} path="/aft-pax-door">
      <AftPaxDoor />
    </Page>
    <Page name="Aft Bagg Door" type={PAGE_TYPE_POPUP} path="/aft-bagg-door">
      <AftBaggDoor />
    </Page>
    <Page name="Service Door" type={PAGE_TYPE_POPUP} path="/service-door">
      <ServiceDoor />
    </Page>
  </System>
);