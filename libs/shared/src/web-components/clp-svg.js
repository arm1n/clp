import React from "react";
import ReactDOM from "react-dom";

import { SVGWithConfig, Router } from "components";
import { childrenMatches } from "utils";

import { Base } from "./clp-base";

// https://webpack.js.org/loaders/file-loader/
// eslint-disable-next-line import/no-webpack-loader-syntax
import stylesheet from '!!file-loader!../styles/svg.css';

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
    this.$configs = Array.from(childrenMatches(this.$template, "clp-svg-config"));
    this.$shadow = this.$wrapper.attachShadow({ mode: "open" });

    this.$shadow.innerHTML = `
      <link rel="stylesheet" href="${stylesheet}"/>
      <div id="container">
        <!-- SVGWithConfig -->
      </div>
    `;

    this.$container = this.$shadow.getElementById('container');
  }

  render() {
    const svgPath = this.getAttribute("path");
    const svgData = this.$configs
      .map((element) => this._createConfig(element))
      .filter((config) => config !== null);

    ReactDOM.unmountComponentAtNode(this.$container);
    ReactDOM.render(
      <Router>
        <SVGWithConfig svgPath={svgPath} svgData={svgData} container={this.$shadow} />
      </Router>,
      this.$container
    );
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "path":
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
    return ["path"];
  }

  static get componentId() {
    return "svg";
  }
}

window.customElements.define("clp-svg", SVG);
export { SVG };
