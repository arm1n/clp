/**
 * OVERVIEW DATA MODEL:
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
    id: "clp-park-brake-cont-vlv",
    unit: "./units/gear/units/park_brake_cont_vlv.html",
    desc: "./units/gear/desc/park_brake_cont_vlv.html",
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
    id: "clp-anti-skid-unit",
    unit: "./units/uf/units/anti_skid_unit.html",
    desc: "./units/uf/desc/anti_skid_unit.html",
    info: {},
    access: {},
  },
  {
    id: "clp-brake-cont-vlv",
    unit: "./units/gear/units/brake_cont_vlv.html",
    desc: "./units/gear/desc/brake_cont_vlv.html",
    info: {},
    access: {},
  },
  {
    id: "clp-lg-select-vlv",
    unit: "./units/gear/units/lg_select_vlv.html",
    desc: "./units/gear/desc/lg_select_vlv.html",
    info: {},
    access: {},
  },
  {
    id: "clp-anti-skid-cont-vlv",
    unit: "./units/gear/units/anti_skid_cont_vlv.html",
    desc: "./units/gear/desc/anti_skid_cont_vlv.html",
    info: {},
    access: {},
  },
  {
    id: "clp-brake-shutle-vlv",
    unit: "./units/gear/units/brake_shutle_vlv.html",
    desc: "./units/gear/desc/brake_shutle_vlv.html",
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
  {
    id: "clp-pseu",
    unit: "./units/wd/units/pseu.html",
    desc: "./units/wd/desc/pseu.html",
    info: {},
    access: {},
  },
  {
    id: "clp-rudd-brake-pedals",
    unit: "./units/gear/units/rudd_brake_pedals.html",
    desc: "./units/gear/desc/rudd_brake_pedals.html",
    info: {},
    access: {},
  },
  {
    id: "clp-park-brake-lever",
    unit: "./units/cockpit/units/park_brake_lever.html",
    desc: "./units/cockpit/desc/park_brake_lever.html",
    info: {},
    access: {},
  },
  {
    id: "clp-land-gear-cont-panel",
    unit: "./units/cockpit/units/land_gear_cont_panel.html",
    desc: "./units/cockpit/desc/land_gear_cont_panel.html",
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
    id: "clp-mlg-alt-rel-handle",
    unit: "./units/cockpit/units/mlg_alt_rel_handle.html",
    desc: "./units/cockpit/desc/mlg_alt_rel_handle.html",
    info: {},
    access: {},
  },
];

/**
 * OVERVIEW SVG FILE:
 *
 * Path to Overview's interactive SVG file.
 */
export const SVG_PATH = "./apps/gear/config/overview/pic/overview.svg";

/**
 * OVERVIEW INTRO FILE:
 *
 * Path to Overview's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/gear/config/overview/desc/intro.html";
