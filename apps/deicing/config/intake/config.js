/**
 * INTAKE DATA MODEL:
 *
 * {
 *   id: ID matching the one in the SVG file,
 *   unit: relative path to unit file on the right,
 *   desc: relative path to desc file on the left,
 *   info: {
 *     path: "./path/to/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only),
 *     size: "size-1" | "size-2" | "size-3" | "size-4" (popup only)
 *   }
 *   access:  {
 *     path: "./path/to/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only),
 *     size: "size-1" | "size-2" | "size-3" | "size-4" (popup only)
 *   },
 * }
 */
export const DATA_SET = [
  {
    id: "clp-eng-int-heater",
    unit: "./units/eng/units/eng_int_heater.html",
    desc: "./units/eng/desc/eng_int_heater.html",
    info: {},
    access: {},
  },
  {
    id: "clp-adv-cont-unit",
    unit: "./units/cockpit/units/adv_cont_unit.html",
    desc: "./units/cockpit/desc/adv_cont_unit.html",
    info: {},
    access: {},
  },
  {
    id: "clp-tmu",
    unit: "./units/wd/units/tmu.html",
    desc: "./units/wd/desc/tmu_intake_heater.html",
    info: {},
    access: {},
  },
  {
    id: "clp-eng-int-heater-relay-k3",
    unit: "./units/ele/units/wd_relay_panel.html",
    desc: "./units/deice/desc/eng_intake_heater_relay.html",
    info: {},
    access: {},
  },
  {
    id: "clp-eng-int-heater-relay-k1",
    unit: "./units/ele/units/wd_relay_panel.html",
    desc: "/units/deice/desc/eng_intake_heater_relay.html",
    info: {},
    access: {},
  },
  {
    id: "clp-eng-int-byp-door-act",
    unit: "./units/eng/units/eng_int_byp_door_act.html",
    desc: "./units/eng/desc/eng_int_byp_door_act.html",
    info: {},
    access: {},
  },
  {
    id: "clp-eng-int-heater-therm",
    unit: "./units/deice/units/eng_int_heater_therm.html",
    desc: "./units/deice/desc/eng_int_heater_therm.html",
    info: {},
    access: {},
  },
  {
    id: "clp-cb-panel-dc-left",
    unit: "./units/ele/units/cb_panel_dc_left.html",
    desc: "./units/ele/desc/cb_panel_dc.html",
    info: {},
    access: {},
  },
  {
    id: "clp-cb-panel-dc-right",
    unit: "./units/ele/units/cb_panel_dc_right.html",
    desc: "./units/ele/desc/cb_panel_dc.html",
    info: {},
    access: {},
  },
  {
    id: "clp-cb-panel-115",
    unit: "./units/ele/units/cb_panel_115.html",
    desc: "./units/ele/desc/cb_panel_ac.html",
    info: {},
    access: {},
  },
  {
    id: "clp-lh-ac-cont-box",
    unit: "./units/ele/units/cont_box_ac_lh.html",
    desc: "./units/ele/desc/cont_box_ac.html",
    info: {},
    access: {},
  },
  {
    id: "clp-relay-junc-box",
    unit: "./units/uf/units/rjb.html",
    desc: "./units/uf/desc/rjb.html",
    info: {},
    access: {},
  },
  {
    id: "clp-cawlp",
    unit: "./units/cockpit/units/cawlp.html",
    desc: "./units/deice/desc/cl_intake.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ice-prot-panel",
    unit: "./units/cockpit/units/ice_prot_panel.html",
    desc: "./units/deice/desc/ice_prot_panel_intake.html",
    info: {},
    access: {},
  },
];

/**
 * INTAKE SVG FILE:
 *
 * Path to Window's interactive SVG file.
 */
export const SVG_PATH = "./apps/deicing/config/intake/pic/intake.svg";

/**
 * INTAKE INTRO FILE:
 *
 * Path to Intake's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/deicing/config/intake/desc/intro.html";
