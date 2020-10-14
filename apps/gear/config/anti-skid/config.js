/**
 * ANTI SKID DATA MODEL:
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
    id: "clp-mlg-wheel",
    unit: "./units/gear/units/mlg_wheel.html",
    desc: "./units/gear/desc/mlg_wheel.html",
    info: {},
    access: {},
  },
  {
    id: "clp-mlg-brake",
    unit: "./units/gear/units/mlg_brake.html",
    desc: "./units/gear/desc/mlg_brake.html",
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
    id: "clp-wheel-speed-tx",
    unit: "./units/gear/units/wheel_speed_tx.html",
    desc: "./units/gear/desc/wheel_speed_tx.html",
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
    id: "clp-anti-skid-unit",
    unit: "./units/uf/units/anti_skid_unit.html",
    desc: "./units/uf/desc/anti_skid_unit.html",
    info: {},
    access: {},
  },
  {
    id: "clp-anti-skid-sw",
    unit: "./units/cockpit/units/anti_skid_sw.html",
    desc: "./units/cockpit/desc/anti_skid_sw.html",
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
    id: "clp-cawlp",
    unit: "./units/cockpit/units/cawlp.html",
    desc: "./units/gear/desc/cl_anti_skid.html",
    info: {},
    access: {},
  },
];

/**
 * ANTI SKID SVG FILE:
 *
 * Path to Anti Skid's interactive SVG file.
 */
export const SVG_PATH = "./apps/gear/config/anti-skid/pic/anti-skid.svg";

/**
 * ANTI SKID INTRO FILE:
 *
 * Path to Anti Skid's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/gear/config/anti-skid/desc/intro.html";
