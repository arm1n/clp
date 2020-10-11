import { PDF_BASE_PATH } from "config";
import { joinPaths } from "utils";

import { Base } from "./clp-base";

const PATTERN = /^\(TR-([A-Z]+)\)$/; // f.e. `(TR-AIPC)`

// ----------------------------------------------------------------------------------------------------
// Component for creating TR links to resolve to correct directory.
//
// Usage:
//
// <clp-link-tr>(TR-AIPC)</clp-link-tr>
//
// Output:
//
// http://www.domain.com/pdf/base/path/amm/loetr.html
//
// ----------------------------------------------------------------------------------------------------
class LinkTR extends Base {
  render() {
    const href = this._parseHrefFromText(this.template);

    this.$wrapper.innerHTML = `
      <a href="${href}" target="_blank" class="clp-link-tr-a">
        ${this.template}
      </a>
    `;
  }

  _parseHrefFromText(text) {
    text = typeof text === "string" ? text : "";

    const match = text.match(PATTERN);
    if (match === null) {
      return "#";
    }

    // output: `pdf/base/path/aipc/loetr.html`
    return joinPaths([PDF_BASE_PATH, match[1].toLowerCase(), "loetr.html"]);
  }

  static get componentId() {
    return "link-tr";
  }
}

window.customElements.define("clp-link-tr", LinkTR);
export { LinkTR };
