/**
 * AOA DATA MODEL:
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
    id: "clp-aoa",
    unit: "./units/deice/units/aoa.html",
    desc: "./units/deice/desc/aoa.html",
    info: {},
    access: {},
  },
  {
    id: "clp-stick-pusher",
    unit: "./units/fc/units/stick_pusher.html",
    desc: "./units/fc/desc/stick_pusher.html",
    info: {},
    access: {},
  },
  {
    id: "clp-stick-shaker",
    unit: "./units/cockpit/units/stick_shaker.html",
    desc: "./units/cockpit/desc/stick_shaker.html",
    info: {},
    access: {},
  },
  {
    id: "clp-rad-alt-units",
    unit: "./units/antenna/units/rad_alt_units.html",
    desc: "./units/antenna/desc/rad_alt_units.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ifc-spm",
    unit: "./units/wd/units/ifc_spm.html",
    desc: "./units/wd/desc/ifc_spm.html",
    info: {},
    access: {},
  },
  {
    id: "clp-pseu",
    unit: "./units/wd/units/pseu.html",
    desc: "./units/wd/desc/pseu.html",
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
    id: "clp-adc",
    unit: "./units/cockpit/units/adc.html",
    desc: "./units/cockpit/desc/adc.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ahru",
    unit: "./units/uf/units/ahru.html",
    desc: "./units/uf/desc/ahru.html",
    info: {},
    access: {},
  },
  {
    id: "clp-stick-push-sw",
    unit: "./units/cockpit/units/stick_push_sw.html",
    desc: "./units/cockpit/desc/stick_push_sw.html",
    info: {},
    access: {},
  },
  {
    id: "clp-pilot-side-panel",
    unit: "./units/cockpit/units/pilot_side_panel.html",
    desc: "./units/cockpit/desc/pilot_side_panel_stall.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ice-prot-panel",
    unit: "./units/cockpit/units/ice_prot_panel.html",
    desc: "./units/deice/desc/ice_prot_panel_ref_speed.html",
    info: {},
    access: {},
  },
  {
    id: "clp-cawlp",
    unit: "/units/cockpit/units/cawlp.html",
    desc: "./units/fc/desc/cl_aoa.html",
    info: {},
    access: {},
  },
];

/**
 * AOA SVG FILE:
 *
 * Path to AOA's interactive SVG file.
 */
export const SVG_PATH = "./apps/deicing/config/aoa/pic/aoa.svg";

/**
 * AOA INTRO FILE:
 *
 * Path to AOA's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/deicing/config/aoa/desc/intro.html";
