/**
 * OVERVIEW DATA MODEL:
 *
 * {
 *   id: ID matching the one in the SVG file,
 *   unit: relative path to unit file on the right,
 *   desc: relative path to desc file on the left,
 *   info: {
 *     path: "./path/to/html/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only)
 *   }
 *   access:  {
 *     path: "./path/to/html/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only)
 *   }
 * }
 */
export const DATA_SET = [
  {
    id: "clp-dc-cont-panel",
    unit: "./units/cockpit/units/dc_cont_panel.html",
    desc: "./units/cockpit/desc/dc_cont_panel.html",
  },
  {
    id: "clp-ac-cont-panel",
    unit: "./units/cockpit/units/ac_cont_panel.html",
    desc: "./units/cockpit/desc/ac_cont_panel.html",
  },
  {
    id: "clp-apu-cont-panel",
    unit: "./units/cockpit/units/apu_cont_panel.html",
    desc: "./units/cockpit/desc/apu_cont_panel.html",
  },
  {
    id: "clp-epcu",
    unit: "./units/cockpit/units/epcu.html",
    desc: "./units/cockpit/desc/epcu.html",
  },
  {
    id: "clp-ac-cont-box1",
    unit: "./units/ele/units/cont_box_ac_lh.html",
    desc: "./units/ele/desc/cont_box_ac.html",
  },
  {
    id: "clp-ac-cont-box2",
    unit: "./units/ele/units/cont_box_ac_rh.html",
    desc: "./units/ele/desc/cont_box_ac.html",
  },
  {
    id: "clp-ac-gcu1",
    unit: "./units/uf/units/ac_gcu.html",
    desc: "./units/uf/desc/ac_gcu.html",
  },
  {
    id: "clp-ac-gen1",
    unit: "./units/eng/units/ac_gen_all.html",
    desc: "./units/eng/desc/ac_gen.html",
  },
  {
    id: "clp-ac-gcu2",
    unit: "./units/uf/units/ac_gcu.html",
    desc: "./units/uf/desc/ac_gcu.html",
  },
  {
    id: "clp-ac-gen2",
    unit: "./units/eng/units/ac_gen_all.html",
    desc: "./units/eng/desc/ac_gen.html",
  },
  {
    id: "clp-ac-gnd-recept",
    unit: "./units/access/units/423fl.html",
    desc: "./units/ele/desc/ac_gnd_recept.html",
  },
  {
    id: "clp-dc-stby-cont-box",
    unit: "./units/ele/units/cont_box_dc_stby.html",
    desc: "./units/ele/desc/cont_box_dc_stby.html",
  },
  {
    id: "clp-dc-cont-box",
    unit: "./units/ele/units/cont_box_dc.html",
    desc: "./units/ele/desc/cont_box_dc.html",
  },
  {
    id: "clp-dc-gnd-recept",
    unit: "./units/access/units/113bl.html",
    desc: "./units/ele/desc/dc_gnd_recept.html",
  },
  {
    id: "clp-dc-gcu1",
    unit: "./units/cockpit/units/dc_gcu.html",
    desc: "./units/cockpit/desc/dc_gcu.html",
  },
  {
    id: "clp-dc-gen1",
    unit: "./units/eng/units/dc_gen_all.html",
    desc: "./units/eng/desc/dc_gen.html",
  },
  {
    id: "clp-dc-gcu2",
    unit: "./units/cockpit/units/dc_gcu.html",
    desc: "./units/cockpit/desc/dc_gcu.html",
  },
  {
    id: "clp-dc-gen2",
    unit: "./units/eng/units/dc_gen_all.html",
    desc: "./units/eng/desc/dc_gen.html",
  },
  {
    id: "clp-stby-batt",
    unit: "./units/ele/units/batt_stby.html",
    desc: "./units/ele/desc/batt_stby.html",
  },
  {
    id: "clp-aux-batt",
    unit: "./units/ele/units/batt_aux.html",
    desc: "./units/ele/desc/batt_aux.html",
  },
  {
    id: "clp-main-batt",
    unit: "./units/ele/units/batt_main.html",
    desc: "./units/ele/desc/batt_main.html",
  },
  {
    id: "clp-apu-gcu",
    unit: "./units/uf/units/apu_gcu.html",
    desc: "./units/uf/desc/apu_gcu.html",
  },
  {
    id: "clp-apu-gen",
    unit: "./units/apu/units/apu_gen.html",
    desc: "./units/apu/desc/apu_gen.html",
  },
  {
    id: "clp-tru1",
    unit: "./units/ele/units/tru.html",
    desc: "./units/ele/desc/tru.html",
  },
  {
    id: "clp-tru2",
    unit: "./units/ele/units/tru.html",
    desc: "./units/ele/desc/tru.html",
  },
];

/**
 * OVERVIEW SVG FILE:
 *
 * Path to overview's interactive SVG file.
 */
export const SVG_PATH = "./apps/ele/config/overview/pic/ele_start.svg";

/**
 * OVERVIEW INTRO FILE:
 *
 * Path to overview's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/ele/config/overview/desc/intro.html";
