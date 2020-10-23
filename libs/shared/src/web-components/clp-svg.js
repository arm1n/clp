import React from "react";
import ReactDOM from "react-dom";

import { SVGWithConfig, Router } from "components";
import { childrenMatches } from "utils";

import { Base } from "./clp-base";

// ----------------------------------------------------------------------------------------------------
// Component for creating a configurable svg layer.
//
// Usage:
//
// <clp-svg-config
//   ref="clp-ref"
//   mode="POPUP"
//   path="./path/to/popup.html"
//   name="Popup name for mode 'POPUP'">
// </clp-svg-config>
//
// ref: identifier of the layer in the SVG
// path: path to html/popup file or link.
// mode: 'INLINE', 'POPUP' or 'LINK'.
// name: text for box or popup ('INLINE' or 'POPUP')
// size: 'size-1', 'size-2', 'size-3' or '' (= auto)
// ----------------------------------------------------------------------------------------------------
class SVGConfig extends HTMLElement {}

window.customElements.define("clp-svg-config", SVGConfig);
export { SVGConfig };

// ----------------------------------------------------------------------------------------------------
// Component for creating a intro view for svg.
//
// Usage:
//
// <clp-svg-intro
//   path="./path/to/popup.html">
// </clp-svg-intro>
//
// path: path to html file to be shown.
// ----------------------------------------------------------------------------------------------------
class SVGIntro extends HTMLElement {}

window.customElements.define("clp-svg-intro", SVGIntro);
export { SVGIntro };

// ----------------------------------------------------------------------------------------------------
// Component for wrapping an interactive SVG with description and units.
//
// Usage:
//
// <clp-svg svg-path="./path/to/file.svg">
//   <clp-svg-config></clp-svg-config>
// </clp-svg>
// ----------------------------------------------------------------------------------------------------
class SVG extends Base {
  setup() {
    this.$configs = childrenMatches(this.$template, "clp-svg-config");
    this.$intros = childrenMatches(this.$template, "clp-svg-intro");
  }

  render() {
    const svgPath = this.getAttribute("path");
    const svgWidth = this.getAttribute("width");
    const svgHeight = this.getAttribute("height");
    const svgData = this.$configs
      .map((element) => this._createConfig(element))
      .filter((config) => config !== null);
    const introPath = this.$intros[0] ? this.$intros[0].getAttribute("path") : null;

    ReactDOM.unmountComponentAtNode(this.$wrapper);
    ReactDOM.render(
      <Router>
        <SVGWithConfig
          svgPath={svgPath}
          svgData={svgData}
          svgWidth={svgWidth}
          svgHeight={svgHeight}
          introPath={introPath}
        />
      </Router>,
      this.$wrapper
    );
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "path":
      case "width":
      case "height":
        this.update();
        break;
      default:
    }
  }

  _createConfig(element) {
    const mode = element.getAttribute("mode");
    const path = element.getAttribute("path");
    const name = element.getAttribute("name");
    const size = element.getAttribute("size");
    const id = element.getAttribute("ref");

    switch (mode) {
      case "LINK":
      case "POPUP":
      case "INLINE":
        return {
          id,
          mode,
          path,
          name,
          size,
        };

      default:
        return null;
    }
  }

  static get observedAttributes() {
    return ["path", "width", "height"];
  }

  static get componentId() {
    return "svg";
  }
}

window.customElements.define("clp-svg", SVG);
export { SVG };
