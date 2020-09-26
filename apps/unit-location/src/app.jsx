import React from "react";

import { System, Page } from "@clp/shared";
import { CockpitInstruments } from "pages/cockpit-instruments/component";
import { CockpitUnitShelf } from "pages/cockpit-unit-shelf/component";
import { WardrobeAvionicRack } from "pages/wardrobe-avionic-rack/component";
import { Underfloor } from "pages/underfloor/component";
import { Antenna } from "pages/antenna/component";

export const App = (props) => (
  <System {...props}>
    <Page path="/" name="Cockpit Instruments" partial={false}>
      <CockpitInstruments />
    </Page>
    <Page path="/cockpit-unit-shelf" name="Cockpit Unit Shelf">
      <CockpitUnitShelf />
    </Page>
    <Page path="/wardrobe-avionic-rack" name="Wardrobe Avionic Rack">
      <WardrobeAvionicRack />
    </Page>
    <Page path="/underfloor" name="Underfloor">
      <Underfloor />
    </Page>
    <Page path="/antenna" name="Antenna">
      <Antenna />
    </Page>
  </System>
);
