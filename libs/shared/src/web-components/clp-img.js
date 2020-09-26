import { BASE_PATH } from "config";
import { joinPaths } from "utils";

// ----------------------------------------------------------------------------------------------------
// Component for creating <img> tags relative to root.
//
// Usage:
//
// <clp-img src="./relative/path/to/image.svg"></clp-img>
// ----------------------------------------------------------------------------------------------------
class Img extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<img class="clp-img" />`;
    this.$img = this.querySelector(".clp-img");

    this._connected = true;

    this._updateAttr('height');
    this._updateAttr('width');
    this._updateSrc();
  }

  disconnectedCallback() {
    this._connected = false;
  }

  _updateSrc() {
    if (!this._connected) {
      return;
    }

    let src = this.getAttribute("src");
    if (src === null) {
      return;
    }

    src = joinPaths([BASE_PATH, src]);
    this.$img.setAttribute("src", src);
  }

  _updateAttr(key) {
    if (!this._connected) {
      return;
    }

    let value = this.getAttribute(key);
    if (value === null) {
      return;
    }
    
    this.$img.setAttribute(key, value);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "src":
        this._updateSrc();
        break;
      case "width":
      case "height":
        this._updateAttr(name);
        break;
      default:
    }
  }

  static get observedAttributes() {
    return ["src", "width", "height"];
  }
}

window.customElements.define("clp-img", Img);
export { Img };
