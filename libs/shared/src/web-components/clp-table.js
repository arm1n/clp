// ----------------------------------------------------------------------------------------------------
// Component for creating tables.
//
// Usage:
//
// <clp-table>
// 	<clp-tr>
// 	 <clp-td>Cell #1</clp-td>
// 	 <clp-td>Cell #2</clp-td>
// 	</clp-tr>
// </clp-table>
// ----------------------------------------------------------------------------------------------------
class Table extends HTMLElement {}

window.customElements.define("clp-table", Table);
export { Table };

// ----------------------------------------------------------------------------------------------------
// Component for creating table rows.
//
// Usage:
//
// <clp-tr>
// 	<clp-td>
// 		Cell #1
// 	</clp-td>
// 	<clp-td>
// 		Cell #2
// 	</clp-td>
// </clp-tr>
// ----------------------------------------------------------------------------------------------------
class TR extends HTMLElement {}

window.customElements.define("clp-tr", TR);
export { TR };

// ----------------------------------------------------------------------------------------------------
// Component for creating table cells.
//
// Usage:
//
// <clp-td>
// 	Cell #1
// </clp-td>
// ----------------------------------------------------------------------------------------------------
class TD extends HTMLElement {}

window.customElements.define("clp-td", TD);
export { TD };
