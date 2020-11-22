/**
 * RUDDER SYSTEM DATA MODEL:
 *
 * {
 *   id: ID matching the one in the SVG file,
 *   unit: relative path to unit file on the right,
 *   desc: relative path to desc file on the left,
 *   info: {
 *     path: "./path/to/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only),
 *     size: "size-1" | "size-2" | "size-3" (popup only)
 *   }
 *   access:  {
 *     path: "./path/to/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only),
 *     size: "size-1" | "size-2" | "size-3" (popup only)
 *   },
 * }
 */
export const DATA_SET = [
  {
    id: "clp-rudd-surfaces",
    unit: "./units/fc/units/rudd_surfaces.html",
    desc: "./units/fc/desc/rudd_surfaces.html",
    info: {},
    access: {},
  },
  {
    id: "clp-rudd-bungee",
    unit: "./units/fc/units/rudd_bungee.html",
    desc: "./units/fc/desc/rudd_bungee.html",
    info: {},
    access: {},
  },
  {
    id: "clp-rud-trim-act",
    unit: "./units/fc/units/rud_trim_act.html",
    desc: "./units/fc/desc/rud_trim_act.html",
    info: {},
    access: {},
  },
  {
    id: "clp-yaw-damper-act",
    unit: "./units/fc/units/yaw_damper_act.html",
    desc: "./units/fc/desc/yaw_damper_act.html",
    info: {},
    access: {},
  },
  {
    id: "clp-rudd-lvdt",
    unit: "./units/fc/units/rudd_lvdt.html",
    desc: "./units/fc/desc/rudd_lvdt.html",
    info: {},
    access: {},
  },
  {
    id: "clp-rudd-pcu",
    unit: "./units/fc/units/rudd_pcu.html",
    desc: "./units/fc/desc/rudd_pcu.html",
    info: {},
    access: {},
  },
  {
    id: "clp-rudd-sov",
    unit: "./units/fc/units/rudd_sov.html",
    desc: "./units/fc/desc/rudd_sov.html",
    info: {},
    access: {},
  },
  {
    id: "clp-rud-aftquad",
    unit: "./units/fc/units/rud_aftquad.html",
    desc: "./units/fc/desc/rud_aftquad.html",
    info: {},
    access: {},
  },
  {
    id: "clp-rud-mixquad",
    unit: "./units/fc/units/rud_mixquad.html",
    desc: "./units/fc/desc/rud_mixquad.html",
    info: {},
    access: {},
  },
  {
    id: "clp-rud-fwdquad-lh",
    unit: "./units/fc/units/rud_fwdquad_lh.html",
    desc: "./units/fc/desc/rud_fwdquad_lh.html",
    info: {},
    access: {},
  },
  {
    id: "clp-rud-fwdquad-rh",
    unit: "./units/fc/units/rud_fwdquad_rh.html",
    desc: "./units/fc/desc/rud_fwdquad_rh.html",
    info: {},
    access: {},
  },
  {
    id: "clp-rud-pedal",
    unit: "./units/fc/units/rud_pedal.html",
    desc: "./units/fc/desc/rud_pedal.html",
    info: {},
    access: {},
  },
  {
    id: "clp-fcecu",
    unit: "./units/uf/units/fcecu.html",
    desc: "./units/fc/desc/fcecu_rudder_info.html",
    info: {},
    access: {},
  },
  {
    id: "clp-display-unit",
    unit: "./units/cockpit/units/display_unit_ele.html",
    desc: "./units/fc/desc/display_unit_rudder.html",
    info: {},
    access: {},
  },
  {
    id: "clp-trim-panel",
    unit: "./units/cockpit/units/trim_panel.html",
    desc: "./units/fc/desc/trim_panel_rudder_info.html",
    info: {},
    access: {},
  },
  {
    id: "clp-flap-cont-modul",
    unit: "./units/cockpit/units/flap_cont_modul.html",
    desc: "./units/cockpit/desc/flap_cont_modul.html",
    info: {},
    access: {},
  },
  {
    id: "clp-rudder-push-off-sw",
    unit: "./units/cockpit/units/rudder_push_off_sw.html",
    desc: "./units/cockpit/desc/rudder_push_off_sw.html",
    info: {},
    access: {},
  },
  {
    id: "clp-cawlp",
    unit: "./units/cockpit/units/cawlp.html",
    desc: "./units/fc/desc/cl_rudder.html",
    info: {},
    access: {},
  },
];

/**
 * RUDDER SYSTEM SVG FILE:
 *
 * Path to Rudder System's interactive SVG file.
 */
export const SVG_PATH = "./apps/flight-control/config/rudder-system/pic/rudder-system.svg";

/**
 * RUDDER SYSTEM INTRO FILE:
 *
 * Path to Rudder System's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/flight-control/config/rudder-system/desc/intro.html";
