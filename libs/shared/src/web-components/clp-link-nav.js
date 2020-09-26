import React from "react";
import ReactDOM from "react-dom";

import {
  HTML,
  Link,
  Router,
} from "components";

// ----------------------------------------------------------------------------------------------------
// Component for creating <a> tags relative to root.
//
// Usage:
//
// <clp-a href="./path/to/file.pdf">My PDF</clp-a>
// ----------------------------------------------------------------------------------------------------
class LinkNav extends HTMLElement {
  connectedCallback() {
    this._html = this.innerHTML;
    this.innerHTML = `<div class="clp-link-nav-wrapper"></div>`
    this.$wrapper = this.querySelector(".clp-link-nav-wrapper");

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
    ReactDOM.render(
      <Router>
        <Link path={path}>
          <HTML html={this._html} />
        </Link>
      </Router>,
      this.$wrapper
    );
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

window.customElements.define("clp-link-nav", LinkNav);
export { LinkNav };
