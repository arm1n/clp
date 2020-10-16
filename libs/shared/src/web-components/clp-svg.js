import React from "react";
import ReactDOM from "react-dom";

import {
  // HTML,
} from "components";

import { childrenMatches } from "utils";

import { Base } from "./clp-base";

// ----------------------------------------------------------------------------------------------------
// Component for wrapping an interactive SVG with description and units.
//
// Usage:
//
// <clp-svg path="./path/to/file.svg">
//   <clp-svg-item></clp-svg-item>
// </clp-svg>
// ----------------------------------------------------------------------------------------------------
class SVG extends Base {
  setup() {
    this.$items = Array.from(childrenMatches(this.$template, "clp-svg-item"));
  }

  render() {
    // const path = this.getAttribute("path");

    ReactDOM.unmountComponentAtNode(this.$wrapper);
    // ReactDOM.render(
    //   <SVGWithDescAndUnitComponent svgPath={svgPath} svgData={svgData} />,
    //   this.$wrapper
    // );
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "path":
        this.update();
        break;
      default:
    }
  }

  static get observedAttributes() {
    return ["path"];
  }

  static get componentId() {
    return "svg";
  }
}

window.customElements.define("clp-svg", SVG);
export { SVG };
