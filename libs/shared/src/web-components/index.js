//
// WEB COMPONENTS
//

//
// load web component loader only for feature detection, which
// loads bundle files lazily on demand from path set in `root`:
//
import "@webcomponents/webcomponentsjs/webcomponents-loader.js";

// define all components to be loaded if polyfill/adapter ready
const COMPONENTS = [
  // common components
  "./clp-a",
  "./clp-accordion",
  "./clp-card",
  "./clp-file",
  "./clp-grid",
  "./clp-img",
  "./clp-info",
  "./clp-link-nav",
  "./clp-link-pdf",
  "./clp-link-popup",
  "./clp-link-ref",
  "./clp-link-tr",
  "./clp-svg.js",
  "./clp-table",
  "./clp-tabs",
  "./clp-text",

  // page components
  "./page-components/clp-antenna",
  "./page-components/clp-arcdu-simulator",
  "./page-components/clp-pseu-simulator",
];

//
// `waitFor` guarantees that all (potential) polyfills are ready
//
window.WebComponents = window.WebComponents || {};
window.WebComponents.root = "../assets/vendor/webcomponents/";
window.WebComponents.waitFor(async () => {
  // lazyily load the custom-elements-es5-adapter for all browsers supporting web components
  // natively. when this file has loaded all, custom element definitions would work properly
  if (window.customElements) {
    await import(
      /* webpackMode: "lazy" */
      /* webpackChunkName: "web-components-es5-adapter" */
      "@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js"
    );
  }

  // both potential polyfills and adapter is ready now, load all web components module path
  for (const component of COMPONENTS) {
    await import(
      /* webpackMode: "lazy-once" */
      /* webpackChunkName: "web-components" */
      `${component}`
    );
  }
});
