import React from "react";
import ReactDOM from "react-dom";

import { File, Modal } from "components";

import { Base } from "./clp-base";

// ----------------------------------------------------------------------------------------------------
// Component for creating links opening a popup with given HTML file.
//
// Usage:
//
// <clp-link-popup path="/path/to/html.file">Text</clp-link-popup>
// ----------------------------------------------------------------------------------------------------
class LinkPopup extends Base {
  constructor() {
    super();

    this._clickListener = this._clickCallback.bind(this);
    this._closeListener = this._closeCallback.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();

    this.$link = this.querySelector(".clp-link-popup-a");
    this.$link.addEventListener("click", this._clickListener);

    this.$container = this.querySelector(".clp-link-popup-container");
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this.$link.removeEventListener("click", this._clickListener);
  }

  render() {
    const path = this.getAttribute("path") || "";
    const name = this.getAttribute("name") || "";
    const size = this.getAttribute("size") || "";

    this.$wrapper.innerHTML = `
      <a 
        href="#"
        target="_blank"
        data-path="${path}"
        data-name="${name}"
        data-size="${size}"
        class="clp-link-popup-a">
        ${this.template}
      </a>
      <div class="clp-link-popup-container"></div>
    `;
  }

  _closeCallback() {
    ReactDOM.unmountComponentAtNode(this.$container);
  }

  _clickCallback(event) {
    event.preventDefault();

    let {
      currentTarget: {
        dataset: { path, name, size },
      },
    } = event;

    ReactDOM.render(
      <Modal title={name} size={size} onClose={this._closeListener} domNode={this.$container}>
        <File path={path} />
      </Modal>,
      this.$container
    );
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "path":
      case "name":
      case "size":
        this.update();
        break;
      default:
    }
  }

  static get observedAttributes() {
    return ["path", "name", "size"];
  }

  static get componentId() {
    return "link-popup";
  }
}

window.customElements.define("clp-link-popup", LinkPopup);
export { LinkPopup };
