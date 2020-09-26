import React from "react";
import ReactDOM from "react-dom";

import { File as FileComponent } from "components";

// ----------------------------------------------------------------------------------------------------
// Component for loading and displaying a HTML file in-place.
//
// Usage:
//
// <clp-file path="/path/to/html.file">Text</clp-file>
// ----------------------------------------------------------------------------------------------------
class File extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="clp-file-wrapper"></div>
    `;

    this.$wrapper = this.querySelector(".clp-file-wrapper");
    this._connected = true;
    this._render();
  }

  disconnectedCallback() {
    this._connected = false;
  }

  _render() {
    if (!this._connected) {
      return;
    }

    const path = this.getAttribute("path");

    ReactDOM.unmountComponentAtNode(this.$wrapper);
    ReactDOM.render(<FileComponent path={path} />, this.$wrapper);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "path":
        this._render();
        break;
      default:
    }
  }

  static get observedAttributes() {
    return ["path"];
  }
}

window.customElements.define("clp-file", File);
export { File };
