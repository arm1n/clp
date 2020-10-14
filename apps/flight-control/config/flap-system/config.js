/**
 * FLAP SYSTEM DATA MODEL:
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
    id: "clp-ob-flaps",
    unit: "./units/fc/units/ob_flaps.html",
    desc: "./units/fc/desc/ob_flaps.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ib-flaps",
    unit: "./units/fc/units/ib_flaps.html",
    desc: "./units/fc/desc/ib_flaps.html",
    info: {},
    access: {},
  },
  {
    id: "clp-flap-shafts-transm",
    unit: "./units/fc/units/flap_shafts_transm.html",
    desc: "./units/fc/desc/flap_shafts_transm.html",
    info: {},
    access: {},
  },
  {
    id: "clp-flap-pos-trans",
    unit: "./units/fc/units/flap_pos_trans.html",
    desc: "./units/fc/desc/flap_pos_trans.html",
    info: {},
    access: {},
  },
  {
    id: "clp-flap-act-ib",
    unit: "./units/fc/units/flap_act_ib.html",
    desc: "./units/fc/desc/flap_act_ib.html",
    info: {},
    access: {},
  },
  {
    id: "clp-flap-act-ob",
    unit: "./units/fc/units/flap_act_ob.html",
    desc: "./units/fc/desc/flap_act_ob.html",
    info: {},
    access: {},
  },
  {
    id: "clp-flap-power-unit",
    unit: "./units/fc/units/flap_power_unit.html",
    desc: "./units/fc/desc/flap_power_unit.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ifc-iop",
    unit: "./units/wd/units/ifc_iop.html",
    desc: "./units/wd/desc/ifc_iop.html",
    info: {},
    access: {},
  },
  {
    id: "clp-pseu",
    unit: "./units/wd/units/pseu.html",
    desc: "./units/fc/desc/pseu_rudder_info.html",
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
    id: "clp-flap-cont-unit",
    unit: "./units/uf/units/flap_cont_unit.html",
    desc: "./units/uf/desc/flap_cont_unit.html",
    info: {},
    access: {},
  },
  {
    id: "clp-fpiu",
    unit: "./units/uf/units/fpiu.html",
    desc: "./units/uf/desc/fpiu.html",
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
    id: "clp-cawlp",
    unit: "./units/cockpit/units/cawlp.html",
    desc: "./units/fc/desc/cl_flap.html",
    info: {},
    access: {},
  },
  {
    id: "clp-wern-horn",
    unit: "./units/cockpit/units/land_gear_cont_panel.html",
    desc: "./units/fc/desc/worn_horn.html",
    info: {},
    access: {},
  },
  {
    id: "clp-display-unit",
    unit: "./units/cockpit/units/display_unit.html",
    desc: "./units/fc/desc/display_unit_flap.html",
    info: {},
    access: {},
  },
];

/**
 * FLAP SYSTEM SVG FILE:
 *
 * Path to Flap System's interactive SVG file.
 */
export const SVG_PATH = "./apps/flight-control/config/flap-system/pic/flap-system.svg";

/**
 * FLAP SYSTEM INTRO FILE:
 *
 * Path to Flap System's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/flight-control/config/flap-system/desc/intro.html";
