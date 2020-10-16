/**
 * ALTERNATE EXTENSION DATA MODEL:
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
    id: "clp-alt-ext-sys",
    unit: "./units/gear/units/alt_ext_sys.html",
    desc: "./units/gear/desc/alt_ext_sys.html",
    info: {},
    access: {},
  },
  {
    id: "clp-nlg-alt-rel-handle",
    unit: "./units/cockpit/units/nlg_alt_rel_handle.html",
    desc: "./units/gear/desc/nlg_alt_rel_handle.html",
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
    id: "clp-alt-ext-ind-sw",
    unit: "./units/gear/units/alt_ext_ind_sw.html",
    desc: "./units/gear/desc/alt_ext_ind_sw.html",
    info: {},
    access: {},
  },
  {
    id: "clp-mlg-alt-rel-handle",
    unit: "./units/cockpit/units/mlg_alt_rel_handle.html",
    desc: "./units/cockpit/desc/mlg_alt_rel_handle.html",
    info: {},
    access: {},
  },
  {
    id: "clp-lg-inh-sw",
    unit: "./units/cockpit/units/lg_inh_sw.html",
    desc: "./units/cockpit/desc/lg_inh_sw.html",
    info: {},
    access: {},
  },
  {
    id: "clp-mlg-alt-ext-act",
    unit: "./units/gear/units/mlg_alt_ext_act.html",
    desc: "./units/gear/desc/mlg_alt_ext_act.html",
    info: {},
    access: {},
  },
  {
    id: "clp-nlg-emerg-release",
    unit: "./units/gear/units/nlg_emerg_release.html",
    desc: "./units/gear/desc/nlg_emerg_release.html",
    info: {},
    access: {},
  },
  {
    id: "clp-nlg-emerg-release-door",
    unit: "./units/gear/units/nlg_emerg_release.html",
    desc: "./units/gear/desc/nlg_emerg_release.html",
    info: {},
    access: {},
  },
  {
    id: "clp-mlg-uplock-assy",
    unit: "./units/gear/units/mlg_uplock_assy.html",
    desc: "./units/gear/desc/mlg_uplock_assy.html",
    info: {},
    access: {},
  },
  {
    id: "clp-mlg-emerg-release",
    unit: "./units/gear/units/mlg_emerg_release.html",
    desc: "./units/gear/desc/mlg_emerg_release.html",
    info: {},
    access: {},
  },
  {
    id: "clp-alt-ext-byp-vlv",
    unit: "./units/gear/units/gear_byp_vlv.html",
    desc: "./units/gear/desc/gear_byp_vlv.html",
    info: {},
    access: {},
  },
];

/**
 * ALTERNATE EXTENSION SVG FILE:
 *
 * Path to Alternate Extension's interactive SVG file.
 */
export const SVG_PATH = "./apps/gear/config/alternate-extension/pic/alternate-extension.svg";

/**
 * ALTERNATE EXTENSION INTRO FILE:
 *
 * Path to Alternate Extension's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/gear/config/alternate-extension/desc/intro.html";
