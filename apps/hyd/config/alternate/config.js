/**
 * ALTERNATE DATA MODEL:
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
 *   }
 * }
 */
export const DATA_SET = [
  {
    id: "clp-alt-ext-actuator",
    unit: "./units/gear/units/alt_ext_actuator.html",
    desc: "../units/gear/desc/alt_ext_actuator.html",
    info: {},
    access: {},
  },
  {
    id: "clp-alt-ext-res",
    unit: "./units/gear/units/alt_ext_res.html",
    desc: "./units/gear/desc/alt_ext_res.html",
    info: {},
    access: {},
  },
  {
    id: "clp-alt-ext-sel-vlv",
    unit: "./units/gear/units/alt_ext_sel_vlv.html",
    desc: "./units/gear/desc/alt_ext_sel_vlv.html",
    info: {},
    access: {},
  },
  {
    id: "clp-alt-ext-handpump",
    unit: "./units/gear/units/alt_ext_hand_pump.html",
    desc: "./units/gear/desc/alt_ext_hand_pump.html",
    info: {},
    access: {},
  },
  {
    id: "clp-nlg-alt-rel-handle",
    unit: "./units/cockpit/units/nlg_alt_rel_handle.html",
    desc: "./units/cockpit/desc/nlg_alt_rel_handle.html",
    info: {},
    access: {},
  },
];

/**
 * ALTERNATE SVG FILE:
 *
 * Path to Alternate's interactive SVG file.
 */
export const SVG_PATH = "./apps/hyd/config/alternate/pic/alternate.svg";

/**
 * ALTERNATE INTRO FILE:
 *
 * Path to Alternate's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/hyd/config/alternate/desc/intro.html";
