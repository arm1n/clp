import { joinPaths, isURL } from "utils";
import { BASE_PATH } from "config";

import { Base } from "./clp-base";

// ----------------------------------------------------------------------------------------------------
// Component for creating <img> tags relative to root.
//
// Usage:
//
// <clp-img src="./relative/path/to/image.svg"></clp-img>
// ----------------------------------------------------------------------------------------------------
class Img extends Base {
  render() {
    let src = this.getAttribute("src");
    if (src === null) {
      return;
    }

    src = !isURL(src) ? joinPaths([BASE_PATH, src]) : src;

    const width = this.getAttribute("width") || "auto";
    const height = this.getAttribute("height") || "auto";

    this.innerHTML = `
      <img src="${src}" width="${width}" height="${height}" />
    `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "src":
      case "width":
      case "height":
        this.update();
        break;
      default:
    }
  }

  static get observedAttributes() {
    return ["src", "width", "height"];
  }

  static get componentId() {
    return "img";
  }
}

window.customElements.define("clp-img", Img);
export { Img };
