import { PDF_BASE_PATH } from "config";
import { joinPaths } from "utils";

import { Base } from "./clp-base";

const PATTERN = /^([A-Z]+)\s+TASK\s+([A-Z0-9-]+)$/; // f.e. `AIPC TASK 24-31-11-01`

// ----------------------------------------------------------------------------------------------------
// Component for creating PDF links to resolve to pre-configured directory.
//
// Usage:
//
// <clp-link-pdf>AMM TASK 12-10-32-210-801</clp-link-pdf>
//
// Output:
//
// http://www.domain.com/pdf/base/path/amm/pdf/AMM12-10-32-210-801.pdf
//
// ----------------------------------------------------------------------------------------------------
class LinkPDF extends Base {
  render() {
    const href = this._parseHrefFromText(this.template);

    this.$wrapper.innerHTML = `
      <a href="${href}" target="_blank" class="clp-link-pdf-a">
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

    // output: pdf/base/path/aipc/pdf/AIPC24-31-11-01.pdf
    return joinPaths([PDF_BASE_PATH, match[1].toLowerCase(), "pdf", `${match[1]}${match[2]}.pdf`]);
  }

  static get componentId() {
    return "link-pdf";
  }
}

window.customElements.define("clp-link-pdf", LinkPDF);
export { LinkPDF };
