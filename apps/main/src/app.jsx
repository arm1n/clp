import React from "react";

import { Router, Page } from "@clp/shared";

import { App as Access } from "@clp/access";
import { App as ANVS } from "@clp/anvs";
import { App as ARCDU } from "@clp/arcdu";
import { App as Bleed } from "@clp/bleed";
import { App as ConnectorFinder } from "@clp/connector-finder";
import { App as Deicing } from "@clp/deicing";
import { App as Door } from "@clp/door";
import { App as Ele } from "@clp/ele";
import { App as Engine } from "@clp/engine";
import { App as FireProtection } from "@clp/fire-protection";
import { App as FlightControl } from "@clp/flight-control";
import { App as Fuel } from "@clp/fuel";
import { App as Gear } from "@clp/gear";
import { App as Hgs } from "@clp/hgs";
import { App as Hyd } from "@clp/hyd";
import { App as Lights } from "@clp/lights";
import { App as NuisanceWarning } from "@clp/nuisance-warning";
import { App as UnitLocation } from "@clp/unit-location";

import { Main } from "components/main";
import { Help } from "pages/help/component";
import { Legal } from "pages/legal/component";
import { NotFound } from "pages/not-found/component";
import { Dashboard } from "pages/dashboard/component";
import { CautionLights } from "pages/caution-lights/component";
import { DisplayFaultMsg } from "pages/display-fault-msg/component";
import { EngineApuEcsFaults } from "pages/engine-apu-ecs-faults/component";

import { EngineApuEcsFaultsSearch } from "components/engine-apu-ecs-faults-search";

export const App = () => (
  <Router>
    <Main>
      {/* MAIN */}
      <Page path="/" partial={false}>
        <Dashboard />
      </Page>

      <Page path="/caution-lights/:row/:col" name="Caution lights">
        <CautionLights />
      </Page>

      <Page path="/engine-apu-ecs-faults/:row" name="Engine/APU/ECS faults">
        <EngineApuEcsFaults />
      </Page>

      <Page path="/display-fault-msg/:row" name="Display Fault Msg">
        <DisplayFaultMsg />
      </Page>

      {/* SHOW */}
      <Page path="/access">
        <Access />
      </Page>
      <Page path="/connector-finder">
        <ConnectorFinder />
      </Page>
      <Page path="/nuisance-warning">
        <NuisanceWarning />
      </Page>
      <Page path="/unit-location">
        <UnitLocation />
      </Page>

      {/* READOUT */}
      <Page path="/arcdu">
        <ARCDU />
      </Page>

      {/* SYSTEMS */}
      <Page path="/anvs">
        <ANVS />
      </Page>
      <Page path="/bleed">
        <Bleed after={<EngineApuEcsFaultsSearch />} />
      </Page>

      <Page path="/deicing">
        <Deicing />
      </Page>
      <Page path="/door">
        <Door />
      </Page>
      <Page path="/ele">
        <Ele />
      </Page>
      <Page path="/engine">
        <Engine after={<EngineApuEcsFaultsSearch />} />
      </Page>
      <Page path="/fire-protection">
        <FireProtection />
      </Page>
      <Page path="/flight-control">
        <FlightControl />
      </Page>
      <Page path="/fuel">
        <Fuel />
      </Page>
      <Page path="/hgs">
        <Hgs />
      </Page>
      <Page path="/hyd">
        <Hyd />
      </Page>
      <Page path="/gear">
        <Gear />
      </Page>
      <Page path="/lights">
        <Lights />
      </Page>
      
      {/* Help */}
      <Page path="/help">
        <Help />
      </Page>

      {/* Legal */}
      <Page path="/legal">
        <Legal />
      </Page>

      {/* 404 */}
      <Page>
        <NotFound />
      </Page>

      {/* LINKS */}
    </Main>
  </Router>
);
