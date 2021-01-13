import React from "react";
import ReactDOM from "react-dom";

import { File as FileComponent } from "components";

import { Base } from "./clp-base";

// ----------------------------------------------------------------------------------------------------
// Component for loading and displaying a HTML file in-place.
//
// Usage:
//
// <clp-file path="/path/to/html.file">Text</clp-file>
// ----------------------------------------------------------------------------------------------------
class File extends Base {
  teardown() {
    ReactDOM.unmountComponentAtNode(this);
  }

  render() {
    const path = this.getAttribute("path");
    ReactDOM.render(<FileComponent path={path} />, this);
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
    return "file";
  }
}

window.customElements.define("clp-file", File);
export { File };
