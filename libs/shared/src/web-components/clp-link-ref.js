import React from "react";
import ReactDOM from "react-dom";

import { HTML } from "components";
import InfoIcon from "img/info.svg";
import CloseIcon from "img/close.svg";

import { Base } from "./clp-base";

// ----------------------------------------------------------------------------------------------------
// Component for creating links for text refs with info/close icon.
//
// Usage:
//
// <clp-link-ref id="refId">Text</clp-link-ref>
// ----------------------------------------------------------------------------------------------------
class LinkRef extends Base {
  teardown() {
    ReactDOM.unmountComponentAtNode(this);
  }

  render() {
    ReactDOM.render(
      <button className="clp-link-ref">
        <span className="clp-link-ref-text">
          <HTML html={this.template} />
        </span>
        <InfoIcon className="clp-link-ref-icon clp-link-ref-info" />
        <CloseIcon className="clp-link-ref-icon clp-link-ref-close" />
      </button>,
      this
    );
  }

  static get componentId() {
    return "link-ref";
  }
}

window.customElements.define("clp-link-ref", LinkRef);
export { LinkRef };
