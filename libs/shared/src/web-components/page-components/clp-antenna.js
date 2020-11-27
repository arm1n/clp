import React from "react";
import ReactDOM from "react-dom";

import { Router } from "components";
import { Antenna as AntennaComponent } from "page-components";

import { Base } from "../clp-base";

// ----------------------------------------------------------------------------------------------------
// Wraps <Antenna> into reusable webcomponent.
//
// Usage:
//
// <clp-antenna></clp-antenna>
// ----------------------------------------------------------------------------------------------------
class Antenna extends Base {
  render() {
    ReactDOM.unmountComponentAtNode(this);
    ReactDOM.render(
      <Router>
        <AntennaComponent />
      </Router>,
      this
    );
  }

  static get componentId() {
    return "antenna";
  }
}

window.customElements.define("clp-antenna", Antenna);
export { Antenna };
