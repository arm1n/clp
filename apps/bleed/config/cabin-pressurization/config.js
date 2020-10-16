/**
 * CABIN PRESSURIZATION DATA MODEL:
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
export const DATA_SET = [
  {
    id: "clp-air-jet-pump",
    unit: "./units/bleed/units/air_jet_pump.html",
    desc: "./units/bleed/desc/air_jet_pump.html",
    info: {},
    access: {},
  },
  {
    id: "clp-aft-safety-vlv",
    unit: "./units/bleed/units/aft_safety_vlv.html",
    desc: "./units/bleed/desc/aft_safety_vlv.html",
    info: {},
    access: {},
  },
  {
    id: "clp-cab-ind-module",
    unit: "./units/cockpit/units/cab_ind_module.html",
    desc: "./units/cockpit/desc/cab_ind_module.html",
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
    id: "clp-pla",
    unit: "./units/cockpit/units/pla.html",
    desc: "./units/bleed/desc/pla_bleed_info.html",
    info: {},
    access: {},
  },
  {
    id: "clp-cl-cabin-px",
    unit: "./units/cockpit/units/cawlp.html",
    desc: "./units/bleed/desc/cl_cabin_px.html",
    info: {},
    access: {},
  },
  {
    id: "clp-fwd-savety-vlv-sel",
    unit: "./units/cockpit/units/fwd_savety_vlv_sel.html",
    desc: "./units/cockpit/desc/fwd_savety_vlv_sel.html",
    info: {},
    access: {},
  },
  {
    id: "clp-cabin-pc-cot-panel",
    unit: "./units/cockpit/units/cabin_pc_cot_panel.html",
    desc: "./units/cockpit/desc/cabin_pc_cot_panel.html",
    info: {},
    access: {},
  },
  {
    id: "clp-cabin-px-cont",
    unit: "./units/wd/units/cabin_px_cont.html",
    desc: "./units/wd/desc/cabin_px_cont.html",
    info: {},
    access: {},
  },
  {
    id: "clp-fwd-safety-vlv",
    unit: "./units/bleed/units/fwd_safety_vlv.html",
    desc: "./units/bleed/desc/fwd_safety_vlv.html",
    info: {},
    access: {},
  },
  {
    id: "clp-aft-outfl-vlv",
    unit: "./units/bleed/units/aft_outfl_vlv.html",
    desc: "./units/bleed/desc/aft_outfl_vlv.html",
    info: {},
    access: {},
  },
];

/**
 * CABIN PRESSURIZATION SVG FILE:
 *
 * Path to Cabin Pressurization's interactive SVG file.
 */
export const SVG_PATH = "./apps/bleed/config/cabin-pressurization/pic/cabin_pressurization.svg";

/**
 * CABIN PRESSURIZATION INTRO FILE:
 *
 * Path to Cabin Pressurization's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/bleed/config/cabin-pressurization/desc/intro.html";
