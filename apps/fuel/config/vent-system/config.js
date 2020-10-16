/**
 * VENT SYSTEM DATA MODEL:
 *
 * {
 *   id: ID matching the one in the SVG file,
 *   text: text to be used if item is shown in menu,
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
 *   show_in_menu: flag if this item is in menu or only in SVG,
 * }
 */
export const DATA_SET = [
  {
    id: "clp-surge-tank",
    text: "Surge Tank",
    unit: "./units/fuel/units/surge_tank.html",
    desc: "./units/fuel/desc/surge_tank.html",
    info: {},
    access: {},
    show_in_menu: false,
  },
  {
    id: "clp-fuel-flapper-cvlv",
    text: "Vent Line",
    unit: "/units/fuel/units/fuel_flapper_cvlv.html",
    desc: "./units/fuel/desc/fuel_flapper_cvlv.html",
    info: {},
    access: {},
    show_in_menu: false,
  },
  {
    id: "clp-fuel-vent-float-vlv",
    text: "Vent Float Valves",
    unit: "./units/fuel/units/fuel_vent_float_vlv.html",
    desc: "./units/fuel/desc/fuel_vent_float_vlv.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-coll-bay",
    text: "Collector Bay",
    unit: "./units/fuel/units/coll_bay.html",
    desc: "./units/fuel/desc/coll_bay.html",
    info: {},
    access: {},
    show_in_menu: false,
  },
  {
    id: "clp-line-vent",
    text: "Vent Line",
    unit: "./units/fuel/units/line_vent.html",
    desc: "./units/fuel/desc/line_vent.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-fuel-ref-vent-vlv",
    text: "High Level Sensor & Refuel Vent Valve",
    unit: "/units/fuel/units/fuel_ref_vent_vlv.html",
    desc: "./units/fuel/desc/fuel_ref_vent_vlv.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-fuel-naca-vent",
    text: "Fuel Naca Vent",
    unit: "/units/fuel/units/fuel_naca_vent.html",
    desc: "./units/fuel/desc/fuel_naca_vent.html",
    info: {},
    access: {},
    show_in_menu: false,
  },
];

/**
 * VENT SYSTEM SVG FILE:
 *
 * Path to Vent System's interactive SVG file.
 */
export const SVG_PATH = "./apps/fuel/config/vent-system/pic/vent-system.svg";

/**
 * VENT SYSTEM INTRO FILE:
 *
 * Path to Vent System's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/fuel/config/vent-system/desc/intro.html";
