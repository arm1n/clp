import React from "react";
import ReactDOM from "react-dom";

import {
  HTML,
  Expandable as ExpandableComponent,
  Accordion as AccordionComponent,
} from "components";

import { childrenMatches } from "utils";

import { Base } from "./clp-base";

// ----------------------------------------------------------------------------------------------------
// Component for creating single expandable with content.
//
// Usage:
//
// <clp-expandable name="My Expandable">
//   Content
// </clp-expandable>
//
// name: text for expandable name
// ----------------------------------------------------------------------------------------------------
class Expandable extends Base {
  teardown() {
    ReactDOM.unmountComponentAtNode(this);
  }

  render() {
    if (!this._isStandalone()) {
      return;
    }

    const name = this.getAttribute("name");

    ReactDOM.render(
      <ExpandableComponent name={name}>
        <HTML html={this.template} />
      </ExpandableComponent>,
      this
    );
  }

  _isStandalone() {
    if (this.parentNode !== null) {
      const { tagName, className } = this.parentNode;
      for (const name of [tagName, className]) {
        if (name.match(/clp-accordion/gi)) {
          return false;
        }
      }
    }

    return true;
  }

  static get componentId() {
    return "expandable";
  }
}

window.customElements.define("clp-expandable", Expandable);
export { Expandable };

// ----------------------------------------------------------------------------------------------------
// Component for wrapping expandables to auto-close them.
//
// Usage:
//
// <clp-accordion>
//   <clp-expandable name="Expandable #1">Expandable 1</clp-expandable>
//   <clp-expandable name="Expandable #2">Expandable 2</clp-expandable>
// </clp-accordion>
// ----------------------------------------------------------------------------------------------------
class Accordion extends Base {
  setup() {
    this.$expandables = childrenMatches(this.$template, "clp-expandable");
  }

  render() {
    const expandables = this.$expandables.map((expandable, index) =>
      this._createExpandable(expandable, index)
    );

    ReactDOM.unmountComponentAtNode(this);
    ReactDOM.render(<AccordionComponent>{expandables}</AccordionComponent>, this);
  }

  _createExpandable(element, index) {
    const name = element.getAttribute("name");
    const html = element.innerHTML;

    return (
      <ExpandableComponent key={index} name={name}>
        <HTML html={html} />
      </ExpandableComponent>
    );
  }

  static get componentId() {
    return "accordion";
  }
}

window.customElements.define("clp-accordion", Accordion);
export { Accordion };
