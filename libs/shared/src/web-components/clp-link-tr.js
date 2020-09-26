import { PDF_BASE_PATH } from "config";
import { joinPaths } from "utils";

// ----------------------------------------------------------------------------------------------------
// Component for creating TR links to resolve to correct directory.
//
// Usage:
//
// <clp-link-tr>(AMM-TR)</clp-link-tr>
//
// Output:
//
// http://www.domain.com/pdf/base/path/amm/loetr.html
//
// ----------------------------------------------------------------------------------------------------
class LinkTR extends HTMLElement {
  connectedCallback() {
    const href = this._parseHrefFromText(this.innerText);

    this.innerHTML = `
      <a 
        href="${href}"
        target="_blank"
        class="clp-link-tr">
        ${this.innerHTML}
      </a>
    `;
  }

  _parseHrefFromText(text) {
    const match = text.match(/^\(TR-([A-Z]+)\)$/); // f.e. `(TR-AIPC)`
    if (match === null) {
      return "#";
    }

    // output: `pdf/base/path/aipc/loetr.html`
    return joinPaths([PDF_BASE_PATH, match[1].toLowerCase(), "loetr.html"]);
  }
}

window.customElements.define("clp-link-tr", LinkTR);
export { LinkTR };
