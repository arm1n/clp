import React from "react";

import { System, Page, PAGE_TYPE_POPUP, PAGE_TYPE_LINK } from "@clp/shared";
import { ExternalView } from "pages/external-view/component";
import { Antenna } from "pages/antenna/component";
import { DamageEvaluation } from "pages/damage-evaluation/component";
import { DamageReporting } from "pages/damage-reporting/component";

import { LightningStrikesGenericRDs } from "pages/lightning-strikes-generic-rds/component";

export const App = () => (
  <System>
    <Page path="/" name="External View" partial={false}>
      <ExternalView />
    </Page>
    <Page path="/antenna" name="Antenna">
      <Antenna />
    </Page>
    <Page path="/damage-evaluation" name="Damage Evaluation">
      <DamageEvaluation />
    </Page>
    <Page path="/damage-reporting" name="Damage Reporting">
      <DamageReporting />
    </Page>

    <Page
      type={PAGE_TYPE_POPUP}
      name="Lightning Strikes Generic RD's"
      path="/lightning-strikes-generic-rds">
      <LightningStrikesGenericRDs />
    </Page>

    <Page name="Pictorial RD Index" type={PAGE_TYPE_LINK} path="http://www.infotools.at/clp/Standalone/collects_sa/q400/pdf_manuals/srm/pdf/SRM010000.pdf" />
  </System>
);
