import React from "react";
import ReactDOM from "react-dom";

import { HTML, Link, Router } from "components";

import { Base } from "./clp-base";

// ----------------------------------------------------------------------------------------------------
// Component for creating <a> tags relative to root.
//
// Usage:
//
// <clp-a href="./path/to/file.pdf">My PDF</clp-a>
// ----------------------------------------------------------------------------------------------------
class LinkNav extends Base {
  render() {
    const path = this.getAttribute("path");

    ReactDOM.unmountComponentAtNode(this.$wrapper);
    ReactDOM.render(
      <Router>
        <Link path={path}>
          <HTML html={this.template} />
        </Link>
      </Router>,
      this.$wrapper
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

  static get observedAttributes() {
    return ["path"];
  }

  static get componentId() {
    return "link-nav";
  }
}

window.customElements.define("clp-link-nav", LinkNav);
export { LinkNav };
