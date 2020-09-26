/**
 * NORMAL BRAKE DATA MODEL:
 *
 * {
 *   id: ID matching the one in the SVG file,
 *   unit: relative path to unit file on the right,
 *   desc: relative path to desc file on the left,
 *   info: {
 *     path: "./path/to/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only)
 *   }
 *   access:  {
 *     path: "./path/to/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only)
 *   },
 * }
 */
export const DATA_SET = [
  {
    id: "clp-mlg-brake",
    unit: "./units/gear/units/mlg_brake.html",
    desc: "./units/gear/desc/mlg_brake.html",
    info: {},
    access: {},
  },
  {
    id: "clp-mlg-wheel",
    unit: "./units/gear/units/mlg_wheel.html",
    desc: "./units/gear/desc/mlg_wheel.html",
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
    id: "clp-anti-skid-cont-vlv",
    unit: "./units/gear/units/anti_skid_cont_vlv.html",
    desc: "./units/gear/desc/anti_skid_cont_vlv.html",
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
    id: "clp-rudd-brake-pedals",
    unit: "./units/gear/units/rudd_brake_pedals.html",
    desc: "./units/gear/desc/rudd_brake_pedals.html",
    info: {},
    access: {},
  },
];

/**
 * NORMAL BRAKE SVG FILE:
 *
 * Path to Normal Brake's interactive SVG file.
 */
export const SVG_PATH = "./apps/gear/config/normal-brake/pic/normal-brake.svg";

/**
 * NORMAL BRAKE INTRO FILE:
 *
 * Path to Normal Brake's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/gear/config/normal-brake/desc/intro.html";
