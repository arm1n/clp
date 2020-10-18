import React from "react";

import { System, Page, PAGE_TYPE_POPUP } from "@clp/shared";
import { Engine } from "pages/engine/component";
import { Apu } from "pages/apu/component";
import { EngineChange } from "pages/engine-change/component";
import { EngingWiring } from "pages/engine-wiring/component";
import { ArcduReadout } from "pages/arcdu-readout/component";

import { DrainMast } from "pages/drain-mast/component";
import { CautionLights } from "pages/caution-lights/component";

export const App = (props) => (
  <System {...props}>
    <Page path="/" name="Engine" partial={false}>
      <Engine />
    </Page>

    <Page path="/apu" name="Apu">
      <Apu />
    </Page>

    <Page path="/engine-change" name="Engine Change">
      <EngineChange />
    </Page>

    <Page path="/engine-wiring" name="Eng Wiring">
      <EngingWiring />
    </Page>

    <Page path="/arcdu-readout" name="Arcdu Readout">
      <ArcduReadout />
    </Page>

    <Page name="Drain Mast" type={PAGE_TYPE_POPUP} path="/drain-mast">
      <DrainMast />
    </Page>
    <Page name="Caution Lights" type={PAGE_TYPE_POPUP} path="/caution-lights">
      <CautionLights />
    </Page>
  </System>
);
