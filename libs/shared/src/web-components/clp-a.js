import { BASE_PATH } from "config";
import { joinPaths } from "utils";

// ----------------------------------------------------------------------------------------------------
// Component for creating <a> tags relative to root.
//
// Usage:
//
// <clp-a href="./path/to/file.pdf">My PDF</clp-a>
// ----------------------------------------------------------------------------------------------------
class A extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<a class="clp-a" target="_blank">${this.innerHTML}</a>`;
    this.$a = this.querySelector(".clp-a");

    this._connected = true;
    this._updateHref();
  }

  disconnectedCallback() {
    this._connected = false;
  }

  _updateHref() {
    if (!this._connected) {
      return;
    }

    let href = this.getAttribute("href");
    if (href === null) {
      return;
    }

    href = joinPaths([BASE_PATH, href]);
    this.$a.setAttribute("href", href);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "href":
        this._updateHref();
        break;
      default:
    }
  }

  static get observedAttributes() {
    return ["href"];
  }
}

window.customElements.define("clp-a", A);
export { A };
