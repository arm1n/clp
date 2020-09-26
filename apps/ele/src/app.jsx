import React from "react";

import { System, Page, PAGE_TYPE_POPUP } from "@clp/shared";

import { Overview } from "pages/overview/component";
import { DCSystem } from "pages/dc-system/component";
import { ACSystem } from "pages/ac-system/component";
import { CBLocation } from "pages/cb-location/component";
import { RelayFinder } from "pages/relay-finder/component";
import { MFDElePage } from "pages/mfd-ele-page/component";
import { CautionLights } from "pages/caution-lights/component";

export const App = (props) => (
  <System {...props}>
    <Page path="/" name="Overview" partial={false}>
      <Overview />
    </Page>
    <Page path="/dc-system" name="DC System">
      <DCSystem />
    </Page>
    <Page path="/ac-system" name="AC System">
      <ACSystem />
    </Page>
    <Page path="/relay-finder" name="Relay Finder">
      <RelayFinder />
    </Page>
    <Page path="/cb-location" name="CB Location">
      <CBLocation />
    </Page>
    <Page name="MFD ELE Page" type={PAGE_TYPE_POPUP} path="/mfd-ele-page">
      <MFDElePage />
    </Page>
    <Page name="Caution Lights" type={PAGE_TYPE_POPUP} path="/caution-lights">
      <CautionLights />
    </Page>
  </System>
);
