import React from "react";
import ReactDOM from "react-dom";

import {
  HTML,
  Router,
  CardWithConfigButtons,
  CardConfigButtonInfo,
  CardConfigButtonWrench,
} from "components";

import { childrenMatches } from "utils";

// ----------------------------------------------------------------------------------------------------
// Component for creating a configurable card buttons.
//
// Usage:
//
// <clp-card-button-info
//   mode="POPUP"
//   path="./path/to/popup.html"
//   title="Popup title for mode 'POPUP'">
// </clp-card-button-info>
//
// icon: 'INFO' or 'WRENCH'
// path: path to html/popup file or link.
// mode: 'INLINE', 'POPUP' or 'LINK'.
// title: text for popup title
// ----------------------------------------------------------------------------------------------------
class CardButton extends HTMLElement {}

window.customElements.define("clp-card-button", CardButton);
export { CardButton };

// ----------------------------------------------------------------------------------------------------
// Component for creating simple cards with title.
//
// Usage:
//
// <clp-card title="title">Text</clp-card>
// ----------------------------------------------------------------------------------------------------
class Card extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="clp-card-wrapper"></div>
      <div class="clp-card-template">${this.getTemplate()}</div>
    `;

    this.$wrapper = this.querySelector(".clp-card-wrapper");
    this.$template = this.querySelector(".clp-card-template");
    this.$buttons = Array.from(childrenMatches(this.$template, "clp-card-button"));

    this._connected = true;
    this._render();
  }

  disconnectedCallback() {
    this._connected = false;
  }

  getTemplate() {
    var $template = this.querySelector(".clp-card-template");
    var reference = $template !== null ? $template : this;

    return reference.innerHTML;
  }

  _render() {
    if (!this._connected) {
      return;
    }

    const title = this.getAttribute("title");
    const stretch = this.getAttribute("stretch") === "false" ? false : true;
    const buttons = this.$buttons.map((button, index) => this._createButton(button, index));

    ReactDOM.unmountComponentAtNode(this.$wrapper);
    ReactDOM.render(
      <Router>
        <CardWithConfigButtons title={title} stretch={stretch} buttons={buttons}>
          <HTML html={this.getTemplate()} />
        </CardWithConfigButtons>
      </Router>,
      this.$wrapper
    );
  }

  _createButton(element, index) {
    let Button;
    switch (element.getAttribute("icon")) {
      case "WRENCH":
        Button = CardConfigButtonWrench;
        break;
      default:
        Button = CardConfigButtonInfo;
    }

    const config = {
      path: element.getAttribute("path"),
      mode: element.getAttribute("mode"),
      title: element.getAttribute("title"),
    };

    return <Button key={index} config={config} />;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "title":
        this._render();
        break;
      case "stretch":
        this._render();
        break;
      default:
    }
  }

  static get observedAttributes() {
    return ["title", "stretch"];
  }
}

window.customElements.define("clp-card", Card);
export { Card };
