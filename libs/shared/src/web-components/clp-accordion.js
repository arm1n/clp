import React from "react";
import ReactDOM from "react-dom";

import {
  HTML,
  Expandable as ExpandableComponent,
  Accordion as AccordionComponent,
} from "components";

import { childrenMatches } from "utils";

// ----------------------------------------------------------------------------------------------------
// Component for creating single expandable with content.
//
// Usage:
//
// <clp-expandable title="My Expandable">
//   Content
// </clp-expandable>
//
// title: text for expandable title
// ----------------------------------------------------------------------------------------------------
class Expandable extends HTMLElement {
  connectedCallback() {
    if (!this._isStandalone()) {
      return;
    }

    this.innerHTML = `
      <div class="clp-expandable-wrapper"></div>
      <div class="clp-expandable-template">${this.getTemplate()}</div>
    `;

    this.$wrapper = this.querySelector(".clp-expandable-wrapper");

    this._connected = true;
    this._render();
  }

  disconnectedCallback() {
    this._connected = false;
  }

  getTemplate() {
    var $template = this.querySelector(".clp-expandable-template");
    var reference = $template !== null ? $template : this;

    return reference.innerHTML;
  }

  _isStandalone() {
    if (this.parentNode !== null) {
      const { tagName, className } = this.parentNode;
      for (let name of [tagName, className]) {
        if (name.match(/clp-accordion/gi)) {
          return false;
        }
      }
    }

    return true;
  }

  _render() {
    if (!this._connected) {
      return;
    }

    const name = this.getAttribute("title");

    ReactDOM.unmountComponentAtNode(this.$wrapper);
    ReactDOM.render(
      <ExpandableComponent name={name}>
        <HTML html={this.getTemplate()} />
      </ExpandableComponent>,
      this.$wrapper
    );
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
//   <clp-expandable title="Expandable #1">Expandable 1</clp-expandable>
//   <clp-expandable title="Expandable #2">Expandable 2</clp-expandable>
// </clp-accordion>
// ----------------------------------------------------------------------------------------------------
class Accordion extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="clp-accordion-wrapper"></div>
      <div class="clp-accordion-template">${this.getTemplate()}</div>
    `;

    this.$wrapper = this.querySelector(".clp-accordion-wrapper");
    this.$template = this.querySelector(".clp-accordion-template");
    this.$expandables = Array.from(childrenMatches(this.$template, "clp-expandable"));

    this._connected = true;
    this._render();
  }

  disconnectedCallback() {
    this._connected = false;
  }

  getTemplate() {
    var $template = this.querySelector(".clp-accordion-template");
    var reference = $template !== null ? $template : this;

    return reference.innerHTML;
  }

  _render() {
    if (!this._connected) {
      return;
    }

    const expandables = this.$expandables.map((expandable, index) =>
      this._createExpandable(expandable, index)
    );

    ReactDOM.unmountComponentAtNode(this.$wrapper);
    ReactDOM.render(<AccordionComponent>{expandables}</AccordionComponent>, this.$wrapper);
  }

  _createExpandable(element, index) {
    let name = element.getAttribute("title");
    let html = element.getTemplate();

    return (
      <ExpandableComponent key={index} name={name}>
        <HTML html={html} />
      </ExpandableComponent>
    );
  }
}

window.customElements.define("clp-accordion", Accordion);
export { Accordion };
