import React from "react";
import ReactDOM from "react-dom";

import { HTML, Tab as TabComponent, Tabs as TabsComponent } from "components";

import { childrenMatches } from "utils";

import { Base } from "./clp-base";

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
class Tabs extends Base {
  setup() {
    this.$tabs = childrenMatches(this.$template, "clp-tab");
  }

  teardown() {
    ReactDOM.unmountComponentAtNode(this);
  }

  render() {
    const tabs = this.$tabs.map((tab, index) => this._createTab(tab, index));

    ReactDOM.render(<TabsComponent>{tabs}</TabsComponent>, this);
  }

  _createTab(element, index) {
    const name = element.getAttribute("name");
    const html = element.innerHTML;

    return (
      <TabComponent key={index} name={name}>
        <HTML html={html} />
      </TabComponent>
    );
  }

  static get componentId() {
    return "tabs";
  }
}

window.customElements.define("clp-tabs", Tabs);
export { Tabs };
