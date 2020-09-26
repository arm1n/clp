import React from "react";
import ReactDOM from "react-dom";

import { File, Modal } from "components";

// ----------------------------------------------------------------------------------------------------
// Component for creating links opening a popup with given HTML file.
//
// Usage:
//
// <clp-link-popup path="/path/to/html.file">Text</clp-link-popup>
// ----------------------------------------------------------------------------------------------------
class LinkPopup extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <a 
        href="#"
        target="_blank"
        class="clp-link-popup">
        ${this.innerHTML}
      </a>
      <div class="clp-link-popup-wrapper"></div>
    `;

    this.$link = this.querySelector(".clp-link-popup");
    this.$wrapper = this.querySelector(".clp-link-popup-wrapper");

    this._clickListener = this._clickCallback.bind(this);
    this._closeListener = this._closeCallback.bind(this);

    this.$link.addEventListener("click", this._clickListener);

    this._connected = true;
    this._updateTitle();
    this._updatePath();
  }

  disconnectedCallback() {
    this.$link.removeEventListener("click", this._clickListener);
    this._connected = false;
  }

  _closeCallback() {
    ReactDOM.unmountComponentAtNode(this.$wrapper);
  }

  _clickCallback(event) {
    event.preventDefault();

    let {
      currentTarget: {
        dataset: { path, title },
      },
    } = event;

    ReactDOM.render(
      <Modal title={title} onClose={this._closeListener} domNode={this.$wrapper}>
        <File path={path} />
      </Modal>,
      this.$wrapper
    );
  }

  _updatePath() {
    if (!this._connected) {
      return;
    }

    const path = this.getAttribute("path");
    this.$link.dataset.path = path;
  }

  _updateTitle() {
    if (!this._connected) {
      return;
    }

    const title = this.getAttribute("title");
    this.$link.dataset.title = typeof title === "string" ? title : "";
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "path":
        this._updatePath();
        break;
      case "title":
        this._updateTitle();
        break;
      default:
    }
  }

  static get observedAttributes() {
    return ["path", "title"];
  }
}

window.customElements.define("clp-link-popup", LinkPopup);
export { LinkPopup };
