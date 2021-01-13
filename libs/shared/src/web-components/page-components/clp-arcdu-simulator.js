import React from "react";
import ReactDOM from "react-dom";

import { ARCDUSimulator as ARCDUSimulatorComponent } from "page-components";

import { Base } from "../clp-base";

// ----------------------------------------------------------------------------------------------------
// Wraps <ARCDUSimulator> into reusable webcomponent.
//
// Usage:
//
// <clp-arcdu-simulator></clp-arcdu-simulator>
// ----------------------------------------------------------------------------------------------------
class ARCDUSimulator extends Base {
  teardown() {
    ReactDOM.unmountComponentAtNode(this);
  }

  render() {
    ReactDOM.render(<ARCDUSimulatorComponent />, this);
  }

  static get componentId() {
    return "arcdu-simulator";
  }
}

window.customElements.define("clp-arcdu-simulator", ARCDUSimulator);
export { ARCDUSimulator };
