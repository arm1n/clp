/**
 * DC SYSTEM DATA MODEL:
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
  id: "clp-dc-cont-panel",
  unit: "./units/cockpit/units/dc_cont_panel.html",
  desc: "./units/cockpit/desc/dc_cont_panel.html"
}, {
  id: "clp-ac-cont-panel",
  unit: "./units/cockpit/units/ac_cont_panel.html",
  desc: "./units/cockpit/desc/ac_cont_panel.html"
}, {
  id: "clp-dc-stby-cont-box",
  unit: "./units/ele/units/cont_box_dc_stby.html",
  desc: "./units/ele/desc/cont_box_dc_stby.html"
}, {
  id: "clp-dc-cont-box",
  unit: "./units/ele/units/cont_box_dc.html",
  desc: "./units/ele/desc/cont_box_dc.html"
}, {
  id: "clp-pseu",
  unit: "./units/wd/units/pseu.html",
  desc: "./units/wd/desc/pseu.html"
}, {
  id: "clp-dc-cont-k1",
  unit: "./units/ele/units/dc_cont.html",
  desc: "./units/ele/desc/dc_cont_k1.html"
}, {
  id: "clp-dc-cont-k2",
  unit: "./units/ele/units/dc_cont.html",
  desc: "./units/ele/desc/dc_cont_k2.html"
}, {
  id: "clp-dc-cont-k3",
  unit: "./units/ele/units/dc_cont.html",
  desc: "./units/ele/desc/dc_cont_k3.html"
}, {
  id: "clp-dc-cont-k4",
  unit: "./units/ele/units/dc_cont.html",
  desc: "./units/ele/desc/dc_cont_k4.html"
}, {
  id: "clp-dc-cont-k5",
  unit: "./units/ele/units/dc_cont.html",
  desc: "./units/ele/desc/dc_cont_k5.html"
}, {
  id: "clp-dc-cont-k6",
  unit: "./units/ele/units/dc_cont.html",
  desc: "./units/ele/desc/dc_cont_k6.html"
}, {
  id: "clp-dc-cont-k7",
  unit: "./units/ele/units/dc_cont.html",
  desc: "./units/ele/desc/dc_cont_k7.html"
}, {
  id: "clp-dc-cont-k8",
  unit: "./units/ele/units/dc_cont.html",
  desc: "./units/ele/desc/dc_cont_k8.html"
}, {
  id: "clp-dc-cont-k9",
  unit: "./units/ele/units/dc_cont.html",
  desc: "./units/ele/desc/dc_cont_k9.html"
}, {
  id: "clp-dc-cont-k21",
  unit: "./units/ele/units/dc_cont.html",
  desc: "./units/ele/desc/dc_cont_k21.html"
}, {
  id: "clp-dc-cont-k22",
  unit: "./units/ele/units/dc_cont.html",
  desc: "./units/ele/desc/dc_cont_k22.html"
}, {
  id: "clp-stby-dc-cont-k24",
  unit: "./units/ele/units/dc_cont.html",
  desc: "./units/ele/desc/dc_cont_k24.html"
}, {
  id: "clp-stby-dc-cont-k25",
  unit: "./units/ele/units/dc_cont.html",
  desc: "./units/ele/desc/dc_cont_k25.html"
}, {
  id: "clp-dc-cont-k26",
  unit: "./units/ele/units/dc_cont.html",
  desc: "./units/ele/desc/dc_cont_k26.html"
}, {
  id: "clp-stby-batt",
  unit: "./units/ele/units/batt_stby.html",
  desc: "./units/ele/desc/batt_stby.html"
}, {
  id: "clp-aux-batt",
  unit: "./units/ele/units/batt_aux.html",
  desc: "./units/ele/desc/batt_aux.html"
}, {
  id: "clp-main-batt",
  unit: "./units/ele/units/batt_main.html",
  desc: "./units/ele/desc/batt_main.html"
}, {
  id: "clp-apu-gen",
  unit: "./units/apu/units/apu_gen.html",
  desc: "./units/apu/desc/apu_gen.html"
}, {
  id: "clp-apu-gcu",
  unit: "./units/uf/units/apu_gcu.html",
  desc: "./units/uf/desc/apu_gcu.html"
}, {
  id: "clp-dc-gcu1",
  unit: "./units/cockpit/units/dc_gcu.html",
  desc: "./units/cockpit/desc/dc_gcu.html"
}, {
  id: "clp-dc-gcu2",
  unit: "./units/cockpit/units/dc_gcu.html",
  desc: "./units/cockpit/desc/dc_gcu.html"
}, {
  id: "clp-dc-gen1",
  unit: "./units/eng/units/dc_gen_all.html",
  desc: "./units/eng/desc/dc_gen.html"
}, {
  id: "clp-dc-gen2",
  unit: "./units/eng/units/dc_gen_all.html",
  desc: "./units/eng/desc/dc_gen.html"
}, {
  id: "clp-epcu",
  unit: "./units/cockpit/units/epcu.html",
  desc: "./units/cockpit/desc/epcu.html"
}, {
  id: "clp-tru1",
  unit: "./units/ele/units/tru.html",
  desc: "./units/ele/desc/tru.html"
}, {
  id: "clp-tru2",
  unit: "./units/ele/units/tru.html",
  desc: "./units/ele/desc/tru.html"
}, {
  id: "clp-tru-cb1",
  unit: "./units/ele/units/cb_panel_115.html",
  desc: "./units/ele/desc/cb_panel_115.html"
}, {
  id: "clp-tru-cb2",
  unit: "./units/ele/units/cb_panel_115.html",
  desc: "./units/ele/desc/cb_panel_115.html"
}, {
  id: "clp-dc-gnd-recept",
  unit: "./units/access/units/113bl.html",
  desc: "./units/ele/desc/dc_gnd_recept.html"
}];
/**
 * DC SYSTEM SVG FILE:
 *
 * Path to DC system's interactive SVG file.
 */

export var SVG_PATH = "./apps/ele/config/dc-system/pic/dc_sys.svg";
/**
 * DC SYSTEM DEFAULT UNIT:
 *
 * Path to DC system's default unit shown initially.
 */

export var DEFAULT_UNIT = "./units/ele/dc-system/units/unit.html";
/**
 * DC SYSTEM INTRO FILE:
 *
 * Path to DC System's intro HTML file shown at bottom.
 */

export var INTRO_PATH = "./apps/ele/config/dc-system/desc/intro.html";