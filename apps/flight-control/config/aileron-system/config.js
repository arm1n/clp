/**
 * AILERON SYSTEM DATA MODEL:
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
    id: "clp-to-spoiler",
    unit: "./units/fc/units/file.html",
    desc: "./units/fc/desc/file.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ail-geartab",
    unit: "./units/fc/units/ail_geartab.html",
    desc: "./units/fc/desc/ail_geartab.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ail-gndadjusttab",
    unit: "./units/fc/units/ail_gndadjusttab.html",
    desc: "./units/fc/desc/ail_gndadjusttab.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ail-surface",
    unit: "./units/fc/units/ail_surface.html",
    desc: "./units/fc/desc/ail_surface.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ail-lvdt",
    unit: "./units/fc/units/ail_lvdt.html",
    desc: "./units/fc/desc/ail_lvdt.html",
    info: {},
    access: {},
  },
  {
    id: "clp-pla",
    unit: "./units/cockpit/units/pla.html",
    desc: "./units/fc/desc/gustlock_mech_pla.html",
    info: {},
    access: {},
  },
  {
    id: "clp-gustlock-mech",
    unit: "./units/fc/units/gustlock_mech.html",
    desc: "./units/fc/desc/gustlock_mech.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ail-autopi-servo",
    unit: "./units/fc/units/ail_autopi_servo.html",
    desc: "./units/fc/desc/ail_autopi_servo.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ail-term-quad",
    unit: "./units/fc/units/ail_term_quad.html",
    desc: "./units/fc/desc/ail_term_quad.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ail-split-quad",
    unit: "./units/fc/units/ail_split_quad.html",
    desc: "./units/fc/desc/ail_split_quad.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ail-fwd-quad",
    unit: "./units/fc/units/ail_fwd_quad.html",
    desc: "./units/fc/desc/ail_fwd_quad.html",
    info: {},
    access: {},
  },
  {
    id: "clp-ail-trim-cent-unit",
    unit: "./units/fc/units/ail_trim_cent_unit.html",
    desc: "./units/fc/desc/ail_trim_cent_unit.html",
    info: {},
    access: {},
  },
  {
    id: "clp-roll-disc-handle",
    unit: "./units/cockpit/units/roll_disc_handle.html",
    desc: "./units/cockpit/desc/roll_disc_handle.html",
    info: {},
    access: {},
  },
  {
    id: "clp-trim-panel",
    unit: "./units/cockpit/units/trim_panel.html",
    desc: "./units/fc/desc/trim_panel_aileron_info.html",
    info: {},
    access: {},
  },
  {
    id: "clp-fcecu",
    unit: "./units/uf/units/fcecu.html",
    desc: "./units/fc/desc/fcecu_aileron_info.html",
    info: {},
    access: {},
  },
];

/**
 * AILERON SYSTEM SVG FILE:
 *
 * Path to Aileron System's interactive SVG file.
 */
export const SVG_PATH = "./apps/flight-control/config/aileron-system/pic/aileron-system.svg";

/**
 * AILERON SYSTEM INTRO FILE:
 *
 * Path to Aileron System's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/flight-control/config/aileron-system/desc/intro.html";
