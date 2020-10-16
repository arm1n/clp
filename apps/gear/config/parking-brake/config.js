/**
 * PARKING BRAKE DATA MODEL:
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
    id: "clp-cawlp",
    unit: "./units/cockpit/units/cawlp.html",
    desc: "./units/gear/desc/cl_parking_brake.html",
    info: {},
    access: {},
  },
  {
    id: "clp-park-brake-accu",
    unit: "./units/gear/units/park_brake_accu.html",
    desc: "./units/gear/desc/park_brake_accu.html",
    info: {},
    access: {},
  },
  {
    id: "clp-park-brake-charg-vlv",
    unit: "./units/gear/units/park_brake_charg_vlv.html",
    desc: "./units/gear/desc/park_brake_charg_vlv.html",
    info: {},
    access: {},
  },
  {
    id: "clp-park-brake-handpump",
    unit: "./units/gear/units/park_brake_handpump.html",
    desc: "./units/gear/desc/park_brake_handpump.html",
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
    id: "clp-park-brake-cont-vlv",
    unit: "./units/gear/units/park_brake_cont_vlv.html",
    desc: "./units/gear/desc/park_brake_cont_vlv.html",
    info: {},
    access: {},
  },
];

/**
 * PARKING BRAKE SVG FILE:
 *
 * Path to Parking Brake's interactive SVG file.
 */
export const SVG_PATH = "./apps/gear/config/parking-brake/pic/parking-brake.svg";

/**
 * PARKING BRAKE INTRO FILE:
 *
 * Path to Parking Brake's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/gear/config/parking-brake/desc/intro.html";
