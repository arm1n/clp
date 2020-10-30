import React from "react";

import { System, Page, PAGE_TYPE_LINK } from "@clp/shared";
import { PSEUSimulator } from "pages/pseu-simulator/component";
import { REDIRECT_PATH as GEARS_REDIRECT_PATH } from "config/gears-sensors/config";
import { REDIRECT_PATH as DOORS_REDIRECT_PATH } from "config/doors-sensors/config";

export const App = (props) => (
  <System {...props}>
    <Page path="/" name="PSEU Simulator" partial={false}>
      <PSEUSimulator />
    </Page>

    <Page type={PAGE_TYPE_LINK} name="Gears Sensors" path={GEARS_REDIRECT_PATH} />
    <Page type={PAGE_TYPE_LINK} name="Doors Sensors" path={DOORS_REDIRECT_PATH} />
  </System>
);
