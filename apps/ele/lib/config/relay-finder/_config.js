/**
 * RELAY FINDER DATA MODEL:
 *
 * {
 *   id: Unique id for this (sub) item
 *   text: Text shown in user interface
 *   data: {
 *     loc: relative path to location svg
 *     main: relative path to main svg/html
 *     desc: relative path to desc below main svg/html
 *     unit: relative path to unit below locatio svg (optional)
 *     refs: [
 *       // collection of references belonging to this part
 *       {
 *         id: ID matching the one in the SVG file (if any)
 *         text: gets shown for the search dropdown field
 *         unit: relative path to unit file on the left
 *       },
 *       ...
 *     ]
 *   },
 *   nodes: [
 *   	// recursive structure for children of this menu entry
 *   ]
 * }
 *
 * note: all paths are relative to the root directory (= clp)!
 */
export var DATA_SET = [{
  /**
   * L AC CONTACTOR BOX
   */
  id: "clp-relaybox-ac-lh",
  text: "L AC CONTACTOR BOX",
  data: {
    loc: "./apps/ele/config/relay-finder/pic/relaybox_ac_loc.svg",
    main: "./apps/ele/config/relay-finder/pic/relaybox_ac_lh.svg",
    desc: "./units/ele/relay-finder/desc/l_ac_contactor_box/desc.html",
    unit: null,
    refs: [{
      id: "clp-2421-k1",
      text: "2421-K1",
      unit: "./units/ele/relay-finder/units/l_ac_contactor_box/2421-k1.html"
    }, {
      id: "clp-2421-k3",
      text: "2421-K3",
      unit: "./units/ele/relay-finder/units/l_ac_contactor_box/2421-k3.html"
    }, {
      id: "clp-2421-k5",
      text: "2421-K5",
      unit: "./units/ele/relay-finder/units/l_ac_contactor_box/2421-k5.html"
    }]
  }
}, {
  /**
   * RELAY JUNCTION BOX
   */
  id: "clp-rjb",
  text: "Relay Junction Box",
  data: {
    loc: "./apps/ele/config/relay-finder/pic/relay_junction_box_loc.svg",
    main: "./apps/ele/config/relay-finder/desc/relay_junction_box.html",
    desc: null,
    unit: null,
    refs: [{
      id: "clp-rjb-1",
      text: "Relay Junction Box 1",
      unit: "./units/ele/relay-finder/units/relay_junction_box/clp-rjb-1.html"
    }, {
      id: "clp-rjb-2",
      text: "Relay Junction Box 2",
      unit: "./units/ele/relay-finder/units/relay_junction_box/clp-rjb-2.html"
    }, {
      id: "clp-rjb-3",
      text: "Relay Junction Box 3",
      unit: "./units/ele/relay-finder/units/relay_junction_box/clp-rjb-3.html"
    }]
  }
}, {
  /**
   * FEATH PUMP CONT
   */
  id: "clp-feath-pump-cont",
  text: "Feathering Pump Contactor",
  data: {
    loc: "./apps/ele/config/relay-finder/pic/feath_pump_cont_loc.svg",
    unit: "./units/ele/relay-finder/units/feath_pump_cont/unit.html",
    refs: [{
      id: "clp-6100-K2",
      text: "6100-K2"
    }, {
      id: "clp-6100-K3",
      text: "6100-K3"
    }]
  }
}];
/**
 * RELAY FINDER SVG FILE:
 *
 * Path to relay finder overview's interactive SVG file.
 */

export var SVG_PATH = "./apps/ele/config/relay-finder/pic/relay_finder_start02.svg";
/**
 * RELAY FINDER INTRO FILE:
 *
 * Path to Relay Finder's intro HTML file shown at top.
 */

export var INTRO_PATH = "./apps/ele/config/relay-finder/desc/intro.html";