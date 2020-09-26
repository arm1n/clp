import React from "react";

import { System, Page, PAGE_TYPE_POPUP } from "@clp/shared";

import { Overview } from "pages/overview/component";
import { ElevatorSystem } from "pages/elevator-system/component";
import { AileronSystem } from "pages/aileron-system/component";
import { SpoilerSystem } from "pages/spoiler-system/component";
import { RudderSystem } from "pages/rudder-system/component";
import { FlapSystem } from "pages/flap-system/component";
import { StallSystem } from "pages/stall-system/component";
import { CableRigging } from "pages/cable-rigging/component";
import { CautionLights } from "pages/caution-lights/component";
import { FCECUChannels } from "pages/fcecu-channels/component";

export const App = (props) => (
  <System {...props}>
    <Page path="/" name="Overview" partial={false}>
      <Overview />
    </Page>
    <Page path="/elevator-system" name="Elevator System">
      <ElevatorSystem />
    </Page>
    <Page path="/aileron-system" name="Aileron System">
      <AileronSystem />
    </Page>
    <Page path="/spoiler-system" name="Spoiler System">
      <SpoilerSystem />
    </Page>
    <Page path="/rudder-system" name="Rudder System">
      <RudderSystem />
    </Page>
    <Page path="/flap-system" name="Flap System">
      <FlapSystem />
    </Page>
    <Page path="/stall-system" name="Stall System">
      <StallSystem />
    </Page>
    <Page path="/cable-rigging" name="Cable Rigging">
      <CableRigging />
    </Page>

    <Page name="Caution Lights" type={PAGE_TYPE_POPUP} path="/caution-lights">
      <CautionLights />
    </Page>
    <Page name="FCECU Channels" type={PAGE_TYPE_POPUP} path="/fcecu-channels">
      <FCECUChannels />
    </Page>
  </System>
);
