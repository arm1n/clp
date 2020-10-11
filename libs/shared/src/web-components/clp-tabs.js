import React from "react";
import ReactDOM from "react-dom";

import {
  HTML,
  Tab as TabComponent,
  Tabs as TabsComponent,
} from "components";

import { childrenMatches } from "utils";

// ----------------------------------------------------------------------------------------------------
// Component for creating single tab with content.
//
// Usage:
//
// <clp-tab name="My Tab">
//   Content
// </clp-tab>
//
// name: text for tab name
// ----------------------------------------------------------------------------------------------------
class Tab extends HTMLElement {}

window.customElements.define("clp-tab", Tab);
export { Tab };

// ----------------------------------------------------------------------------------------------------
// Component for creating simple tabs with name.
//
// Usage:
//
// <clp-tabs>
//   <clp-tab name="Tab #1">Tab 1</clp-tab>
//   <clp-tab name="Tab #2">Tab 2</clp-tab>
// </clp-tabs>
// ----------------------------------------------------------------------------------------------------
class Tabs extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="clp-tabs-wrapper"></div>
      <div class="clp-tabs-template">${this.getTemplate()}</div>
    `;

    this.$wrapper = this.querySelector(".clp-tabs-wrapper");
    this.$template = this.querySelector(".clp-tabs-template");
    this.$tabs = Array.from(childrenMatches(this.$template, "clp-tab"));

    this._connected = true;
    this._render();
  }

  disconnectedCallback() {
    this._connected = false;
  }

  getTemplate() {
    var $template = this.querySelector(".clp-tabs-template");
    var reference = $template !== null ? $template : this;

    return reference.innerHTML;
  }

  _render() {
    if (!this._connected) {
      return;
    }

    const tabs = this.$tabs.map((tab, index) => this._createTab(tab, index));

    ReactDOM.unmountComponentAtNode(this.$wrapper);
    ReactDOM.render(<TabsComponent>{tabs}</TabsComponent>, this.$wrapper);
  }

  _createTab(element, index) {
    let name = element.getAttribute("name");
    let html = element.innerHTML;

    console.log(element);

    return (
      <TabComponent key={index} name={name}>
        <HTML html={html} />
      </TabComponent>
    );
  }
}

window.customElements.define("clp-tabs", Tabs);
export { Tabs };
