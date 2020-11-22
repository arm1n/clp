import { joinPaths, isURL } from "utils";
import { BASE_PATH } from "config";

import { Base } from "./clp-base";

// ----------------------------------------------------------------------------------------------------
// Component for creating <a> tags relative to root.
//
// Usage:
//
// <clp-a href="./path/to/file.pdf">My PDF</clp-a>
// ----------------------------------------------------------------------------------------------------
class A extends Base {
  render() {
    let href = this.getAttribute("href");
    if (href === null) {
      return;
    }

    href = !isURL(href) ? joinPaths([BASE_PATH, href]) : href;
    this.$wrapper.innerHTML = `
      <a href="${href}" target="_blank">
        ${this.template}
      </a>
    `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "href":
        this.update();
        break;
      default:
    }
  }

  static get observedAttributes() {
    return ["href"];
  }

  static get componentId() {
    return "a";
  }
}

window.customElements.define("clp-a", A);
export { A };
