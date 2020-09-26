import React from "react";

import { System, Page } from "@clp/shared";
import { Overview } from "pages/overview/component";
import { ShowNlg } from "pages/show-nlg/component";
import { ShowMlg } from "pages/show-mlg/component";
import { ExtensionRetraction } from "pages/extension-retraction/component";
import { AlternateExtension } from "pages/alternate-extension/component";
import { NormalBrake } from "pages/normal-brake/component";
import { AntiSkid } from "pages/anti-skid/component";
import { ParkingBrake } from "pages/parking-brake/component";
import { NosewheelSteering } from "pages/nosewheel-steering/component";
import { PositionAndWarning } from "pages/position-and-warning/component";
import { PseuReadout } from "pages/pseu-readout/component";

export const App = (props) => (
  <System {...props}>
    <Page path="/" name="Overview" partial={false}>
      <Overview />
    </Page>
    <Page path="/show-nlg" name="Show NLG">
      <ShowNlg />
    </Page>
    <Page path="/show-mlg" name="Show MLG">
      <ShowMlg />
    </Page>
    <Page path="/extension-retraction" name="Extension Retraction">
      <ExtensionRetraction />
    </Page>
    <Page path="/alternate-extension" name="Alternate Extension">
      <AlternateExtension />
    </Page>
    <Page path="/normal-brake" name="Normal Brake">
      <NormalBrake />
    </Page>
    <Page path="/anti-skid" name="Anti Skid">
      <AntiSkid />
    </Page>
    <Page path="/parking-brake" name="Parking Brake">
      <ParkingBrake />
    </Page>
    <Page path="/nosewheel-steering" name="Nosewheel Steering">
      <NosewheelSteering />
    </Page>
    <Page path="/position-warning" name="Position & Warning">
      <PositionAndWarning />
    </Page>
    <Page path="/pseu-readout" name="Pseu Readout">
      <PseuReadout />
    </Page>
  </System>
);
