import React from "react";

import { System, Page, PAGE_TYPE_POPUP } from "@clp/shared";
import { Overview } from "pages/overview/component";
import { IceDetect } from "pages/ice-detect/component";
import { Windows } from "pages/windows/component";
import { PitotStatic } from "pages/pitot-static/component";
import { Boots } from "pages/boots/component";
import { P3Switching } from "pages/p3-switching/component";
import { Prop } from "pages/prop/component";
import { Intake } from "pages/intake/component";
import { AOA } from "pages/aoa/component";
import { CautionLights } from "pages/caution-lights/component";

export const App = (props) => (
  <System {...props}>
    <Page path="/" name="Overview" partial={false}>
      <Overview />
    </Page>
    <Page path="/ice-detect" name="Ice Detect">
      <IceDetect />
    </Page>
    <Page path="/windows" name="Windows">
      <Windows />
    </Page>
    <Page path="/pitot-static" name="Pitot Static">
      <PitotStatic />
    </Page>
    <Page path="/boots" name="Boots">
      <Boots />
    </Page>
    <Page path="/p3-switching" name="P3 Switching">
      <P3Switching />
    </Page>
    <Page path="/prop" name="Prop">
      <Prop />
    </Page>
    <Page path="/intake" name="Intake">
      <Intake />
    </Page>
    <Page path="/aoa" name="AOA">
      <AOA />
    </Page>

    <Page name="Caution Lights" type={PAGE_TYPE_POPUP} path="/caution-lights">
      <CautionLights />
    </Page>
  </System>
);
