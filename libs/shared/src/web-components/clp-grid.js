// ----------------------------------------------------------------------------------------------------
// Component for creating grids.
//
// Usage:
//
// <clp-grid>
//   <clp-grid-column>Column #1</clp-grid-column>
//   <clp-grid-column>Column #2</clp-grid-column>
// </clp-grid>
// ----------------------------------------------------------------------------------------------------
class Grid extends HTMLElement {
  
}

window.customElements.define("clp-grid", Grid);
export { Grid };

// ----------------------------------------------------------------------------------------------------
// Component for creating grid columns.
//
// Usage:
//
// <clp-grid-column>
// </clp-grid-column>
// ----------------------------------------------------------------------------------------------------
class GridColumn extends HTMLElement {}

window.customElements.define("clp-grid-column", GridColumn);
export { GridColumn };
