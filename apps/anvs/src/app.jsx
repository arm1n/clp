import React from "react";

import { System, Page } from "@clp/shared";
import { ActiveNoiseAndVibrationSystem } from "pages/active-noise-and-vibration-system/component";
import { ATVAActuators } from "pages/atva-actuators/component";
import { MicrophonesAccelerometers } from "pages/microphones-accelerometers/component";

export const App = (props) => (
  <System {...props}>
    <Page path="/" name="Active Noise & Vibration System" partial={false}>
      <ActiveNoiseAndVibrationSystem />
    </Page>

    <Page path="/atva-actuators" name="ATVA Actuators">
      <ATVAActuators />
    </Page>

    <Page path="/microphones-accelerometers" name="Microphones Accelerometers">
      <MicrophonesAccelerometers />
    </Page>
  </System>
);
