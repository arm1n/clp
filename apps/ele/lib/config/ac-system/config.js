/**
 * AC SYSTEM DATA MODEL:
 *
 * {
 *   id: ID matching the one in the SVG file,
 *   unit: relative path to unit file on the right,
 *   desc: relative path to desc file on the left,
 *   info: {
 *     path: "./path/to/html/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only),
 *     size: "size-1" | "size-2" | "size-3" (popup only)
 *   }
 *   access:  {
 *     path: "./path/to/html/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only),
 *     size: "size-1" | "size-2" | "size-3" (popup only)
 *   }
 * }
 */
export var DATA_SET = [{
  id: "clp-display-unit",
  unit: "./units/cockpit/units/display_unit_ele.html",
  desc: "./units/cockpit/desc/display_unit.html"
}, {
  id: "clp-ac-cont-panel",
  unit: "./units/cockpit/units/ac_cont_panel.html",
  desc: "./units/cockpit/desc/ac_cont_panel.html"
}, {
  id: "clp-hyd-spu",
  unit: "./units/hyd/units/hyd_spu.html",
  desc: "./units/hyd/desc/hyd_spu.html"
}, {
  id: "clp-ifc-iop",
  unit: "./units/wd/units/ifc_iop.html",
  desc: "./units/wd/desc/ifc_iop.html"
}, {
  id: "clp-epcu",
  unit: "./units/cockpit/units/epcu.html",
  desc: "./units/cockpit/desc/epcu.html"
}, {
  id: "clp-eppu",
  unit: "./units/ele/units/ac_eppu.html",
  desc: "./units/ele/desc/ac_eppu.html"
}, {
  id: "clp-ac-gcu1",
  unit: "./units/uf/units/ac_gcu.html",
  desc: "./units/uf/desc/ac_gcu.html"
}, {
  id: "clp-ac-gen1",
  unit: "./units/eng/units/ac_gen_all.html",
  desc: "./units/eng/desc/ac_gen.html"
}, {
  id: "clp-ac-gen1-cl",
  unit: "./units/cockpit/units/cawlp.html",
  desc: "./units/ele/desc/ac_gen_cl.html"
}, {
  id: "clp-ac-gen1-cl-hot",
  unit: "./units/cockpit/units/cawlp.html",
  desc: "./units/ele/desc/ac_gen_hot_cl.html"
}, {
  id: "clp-ac-gcu2",
  unit: "./units/uf/units/ac_gcu.html",
  desc: "../units/uf/desc/ac_gcu.html"
}, {
  id: "clp-ac-gen2",
  unit: "./units/eng/units/ac_gen_all.html",
  desc: "./units/eng/desc/ac_gen.html"
}, {
  id: "clp-ac-gen2-cl",
  unit: "./units/cockpit/units/cawlp.html",
  desc: "./units/ele/desc/ac_gen_cl.html"
}, {
  id: "clp-ac-gen2-cl-hot",
  unit: "./units/cockpit/units/cawlp.html",
  desc: "./units/ele/desc/ac_gen_hot_cl.html"
}, {
  id: "clp-ac-l-bus-cl",
  unit: "./units/cockpit/units/cawlp.html",
  desc: "./units/ele/desc/ac_bus_cl.html"
}, {
  id: "clp-ac-r-bus-cl",
  unit: "./units/cockpit/units/cawlp.html",
  desc: "./units/ele/desc/ac_bus_cl.html"
}, {
  id: "clp-ac-cont-k1",
  unit: "./units/ele/units/ac_cont_k1.html",
  desc: "./units/ele/desc/ac_cont_k1.html"
}, {
  id: "clp-ac-cont-k2",
  unit: "./units/ele/units/ac_cont_k2.html",
  desc: "./units/ele/desc/ac_cont_k2.html"
}, {
  id: "clp-ac-cont-k3",
  unit: "./units/ele/units/ac_cont_k3.html",
  desc: "./units/ele/desc/ac_cont_k3.html"
}, {
  id: "clp-ac-cont-k4",
  unit: "./units/ele/units/ac_cont_k4.html",
  desc: "./units/ele/desc/ac_cont_k4.html"
}, {
  id: "clp-ac-cont-k5",
  unit: "./units/ele/units/ac_cont_k5.html",
  desc: "./units/ele/desc/ac_cont_k5.html"
}, {
  id: "clp-ac-cont-k6",
  unit: "./units/ele/units/ac_cont_k6.html",
  desc: "./units/ele/desc/ac_cont_k6.html"
}, {
  id: "clp-ac-cont-k7",
  unit: "./units/ele/units/ac_cont_k7.html",
  desc: "./units/ele/desc/ac_cont_k7.html"
}, {
  id: "clp-ac-cont-box1",
  unit: "./units/ele/units/cont_box_ac_lh.html",
  desc: "./units/ele/desc/cont_box_ac.html"
}, {
  id: "clp-ac-cont-box2",
  unit: "./units/ele/units/cont_box_ac_rh.html",
  desc: "./units/ele/desc/cont_box_ac.html"
}, {
  id: "clp-ac-cont-panel_sw",
  unit: "./units/cockpit/units/ac_cont_panel.html",
  desc: "./units/cockpit/desc/ac_cont_panel.html"
}];
/**
 * AC SYSTEM SVG FILE:
 *
 * Path to AC system's interactive SVG file.
 */

export var SVG_PATH = "./apps/ele/config/ac-system/pic/ac_sys.svg";
/**
 * AC SYSTEM INTRO FILE:
 *
 * Path to AC System's intro HTML file shown at bottom.
 */

export var INTRO_PATH = "./apps/ele/config/ac-system/desc/intro.html";