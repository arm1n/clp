import React from "react";

import { System, Page, PAGE_TYPE_POPUP } from "@clp/shared";
import { BleedSystem } from "pages/bleed-system/component";
import { ArcduReadout } from "pages/arcdu-readout/component";
import { CabinPressurization } from "pages/cabin-pressurization/component";
import { SystemSchematic } from "pages/system-schematic/component";
import { CautionLights } from "pages/caution-lights/component";

export const App = (props) => (
  <System {...props}>
    <Page path="/" name="Bleed" partial={false}>
      <BleedSystem />
    </Page>

    <Page path="/cabin-pressurization" name="Cabin Pressurization">
      <CabinPressurization />
    </Page>

    <Page path="/arcdu-readout" name="Arcdu Readout">
      <ArcduReadout />
    </Page>

    <Page name="System Schematic" type={PAGE_TYPE_POPUP} path="/system-schematic">
      <SystemSchematic />
    </Page>
    <Page name="Caution Lights" type={PAGE_TYPE_POPUP} path="/caution-lights">
      <CautionLights />
    </Page>
  </System>
);
