import React from "react";
import ReactDOM from "react-dom";

import { HTML } from "components";
import InfoIcon from "img/info.svg";
import CloseIcon from "img/close.svg";

// ----------------------------------------------------------------------------------------------------
// Component for creating links for text refs with info/close icon.
//
// Usage:
//
// <clp-link-ref id="refId">Text</clp-link-ref>
// ----------------------------------------------------------------------------------------------------
class LinkRef extends HTMLElement {
  connectedCallback() {
    this._html = this.innerHTML;
    this.innerHTML = `<div class="clp-link-ref-wrapper"></div>`
    this.$wrapper = this.querySelector(".clp-link-ref-wrapper");

    ReactDOM.render(
      <button className="clp-link-ref">
        <span className="clp-link-ref-text">
          <HTML html={this._html} />
        </span>
        <InfoIcon className="clp-link-ref-icon clp-link-ref-info" />
        <CloseIcon className="clp-link-ref-icon clp-link-ref-close" />
      </button>,
      this.$wrapper
    );
  }

  disconnectedCallback() {
     ReactDOM.unmountComponentAtNode(this.$wrapper);
  }
}

window.customElements.define("clp-link-ref", LinkRef);
export { LinkRef };
