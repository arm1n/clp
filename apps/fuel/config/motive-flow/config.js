/**
 * MOTIVE FLOW DATA MODEL:
 *
 * {
 *   id: ID matching the one in the SVG file,
 *   text: text to be used if item is shown in menu,
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
 *   show_in_menu: flag if this item is in menu or only in SVG,
 * }
 */
export const DATA_SET = [
  {
    id: "clp-surge-tank",
    text: "Surge Bays",
    unit: "./units/fuel/units/surge_tank.html",
    desc: "./units/fuel/desc/surge_tank.html",
    info: {},
    access: {},
    show_in_menu: false,
  },
  {
    id: "clp-fuel-flapper-cvlv",
    text: "Flapper Check Valves",
    unit: "./units/fuel/units/fuel_flapper_cvlv.html",
    desc: "./units/fuel/desc/fuel_flapper_cvlv.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-cl-fuel-press",
    text: "ENG FUEL PRESS Caution Light",
    unit: "./units/cockpit/units/cawlp.html",
    desc: "./units/fuel/desc/cl_eng_fuel_press.html",
    info: {},
    access: {},
    show_in_menu: false,
  },
  {
    id: "clp-coll-bay",
    text: "Collector Bays",
    unit: "./units/fuel/units/coll_bay.html",
    desc: "./units/fuel/desc/coll_bay.html",
    info: {},
    access: {},
    show_in_menu: false,
  },
  {
    id: "clp-line-motive-flow",
    text: "Motive Flow Lines",
    unit: "./units/fuel/units/line_motive_flow.html",
    desc: "./units/fuel/desc/line_motive_flow.html",
    info: {},
    access: {},
    show_in_menu: false,
  },
  {
    id: "clp-fuel-lowpx-sw",
    text: "Low Fuel Pressure Switch",
    unit: "./units/eng/units/fuel_lowpx_sw.html",
    desc: "./units/eng/desc/fuel_lowpx_sw.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-fuel-prim-eject-pump",
    text: "Primary Ejector Pump",
    unit: "./units/fuel/units/fuel_prim_eject_pump.html",
    desc: "./units/fuel/desc/fuel_prim_eject_pump.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-fuel-aux-pump",
    text: "Auxiliary Pump",
    unit: "./units/fuel/units/fuel_aux_pump.html",
    desc: "./units/fuel/desc/fuel_aux_pump.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-fuel-naca-vent",
    text: "NACA Vents",
    unit: "./units/fuel/units/fuel_naca_vent.html",
    desc: "./units/fuel/desc/fuel_naca_vent.html",
    info: {},
    access: {},
    show_in_menu: false,
  },
  {
    id: "clp-fuel-scavenge-eject",
    text: "Scavenge Ejectors",
    unit: "./units/fuel/units/fuel_scavenge_eject.html",
    desc: "./units/fuel/desc/fuel_scavenge_eject.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-fuel-mflow-cvlv",
    text: "Motive Flow Check Valves",
    unit: "./units/fuel/units/fuel_mflow_cvlv.html",
    desc: "./units/fuel/desc/fuel_mflow_cvlv.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-fmu",
    text: "Fuel Metering Unit (FMU)",
    unit: "./units/eng/units/fmu.html",
    desc: "./units/eng/desc/fmu.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
];

/**
 * MOTIVE FLOW SVG FILE:
 *
 * Path to Motive Flow's interactive SVG file.
 */
export const SVG_PATH = "./apps/fuel/config/motive-flow/pic/motive-flow.svg";

/**
 * MOTIVE FLOW INTRO FILE:
 *
 * Path to Motive Flow's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/fuel/config/motive-flow/desc/intro.html";
