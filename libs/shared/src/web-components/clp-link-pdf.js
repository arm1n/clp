import { PDF_BASE_PATH } from "config";
import { joinPaths } from "utils";

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
class LinkPDF extends HTMLElement {
  connectedCallback() {
    const href = this._parseHrefFromText(this.innerText);

    this.innerHTML = `
      <a 
        href="${href}"
        target="_blank"
        class="clp-link-pdf">
        ${this.innerHTML}
      </a>
    `;
  }

  _parseHrefFromText(text) {
    const match = text.match(/^([A-Z]+)\s+TASK\s+([A-Z0-9-]+)$/); // f.e. `AIPC TASK 24-31-11-01`
    if (match === null) {
      return "#";
    }

    // output: pdf/base/path/aipc/pdf/AIPC24-31-11-01.pdf
    return joinPaths([PDF_BASE_PATH, match[1].toLowerCase(), "pdf", `${match[1]}${match[2]}.pdf`]);
  }
}

window.customElements.define("clp-link-pdf", LinkPDF);
export { LinkPDF };
