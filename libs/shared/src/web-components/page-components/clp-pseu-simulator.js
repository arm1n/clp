import React from "react";
import ReactDOM from "react-dom";

import { PSEUSimulator as PSEUSimulatorComponent } from "page-components";

import { Base } from "../clp-base";

// ----------------------------------------------------------------------------------------------------
// Wraps <PSEUSimulator> into reusable webcomponent.
//
// Usage:
//
// <clp-pseu-simulator></clp-pseu-simulator>
// ----------------------------------------------------------------------------------------------------
class PSEUSimulator extends Base {
  render() {
    ReactDOM.unmountComponentAtNode(this.$wrapper);
    ReactDOM.render(<PSEUSimulatorComponent />, this.$wrapper);
  }

  static get componentId() {
    return "pseu-simulator";
  }
}

window.customElements.define("clp-pseu-simulator", PSEUSimulator);
export { PSEUSimulator };
