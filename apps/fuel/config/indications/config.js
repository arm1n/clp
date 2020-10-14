/**
 * INDICATIONS DATA MODEL:
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
 *     size: "size-1" | "size-2" | "size-3" | "size-4" (popup only)
 *   }
 *   access:  {
 *     path: "./path/to/file.html",
 *     mode: "INLINE" | "POPUP" | "LINK",
 *     title: "Title" (popup only),
 *     size: "size-1" | "size-2" | "size-3" | "size-4" (popup only)
 *   },
 *   show_in_menu: flag if this item is in menu or only in SVG,
 * }
 */
export const DATA_SET = [
  {
    id: "clp-ed-display-unit",
    text: "clp-ed-display-unit",
    unit: "./units/cockpit/units/display_unit.html",
    desc: "./units/fuel/desc/indication_ed.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-eng-cont-panel",
    text: "clp-eng-cont-panel",
    unit: "./units/cockpit/units/eng_cont_panel.html",
    desc: "./units/fuel/desc/eng_fuel_cont_panel.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-mf-display-unit",
    text: "clp-mf-display-unit",
    unit: "./units/cockpit/units/display_unit.html",
    desc: "./units/fuel/desc/indication_mfd.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-fuel-rd-panel",
    text: "REFUEL/DEFUEL CONTROL PANEL",
    unit: "./units/fuel/units/fuel_rd_panel.html",
    desc: "./units/fuel/desc/fuel_rd_panel.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-fuel-dipstick",
    text: "MAGNETIC DIPSTICK",
    unit: "./units/fuel/units/fuel_dipstick.html",
    desc: "./units/fuel/desc/fuel_dipstick.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-fuel-quantity-probe",
    text: "clp-fuel-quantity-probe",
    unit: "./units/fuel/units/fuel_quantity_probe.html",
    desc: "./units/fuel/desc/fuel_quantity_probe.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-fuel-temp-sens",
    text: "TEMPERATURE SENSOR",
    unit: "./units/fuel/units/fuel_temp_sens.html",
    desc: "./units/fuel/desc/fuel_temp_sens.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-fuel-low-lvl-float-sw",
    text: "clp-fuel-low-lvl-float-sw",
    unit: "./units/fuel/units/fuel_low_lvl_float_sw.html",
    desc: "./units/fuel/desc/fuel_low_lvl_float_sw.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-fuel-qty-comp",
    text: "Fuel Quantity Computer",
    unit: "./units/uf/units/fuel_qty_comp.html",
    desc: "./units/uf/desc/fuel_qty_comp.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-high-level-cont-unit",
    text: "clp-high-level-cont-unit",
    unit: "./units/uf/units/high_level_cont_unit.html",
    desc: "./units/uf/desc/high_level_cont_unit.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
  {
    id: "clp-fuel-highlevel-sensor",
    text: "clp-fuel-highlevel-sensor",
    unit: "./units/fuel/units/fuel_ref_vent_vlv.html",
    desc: "./units/fuel/units/fuel_ref_vent_vlv.html",
    info: {},
    access: {},
    show_in_menu: true,
  },
];

/**
 * INDICATIONS SVG FILE:
 *
 * Path to Indication's interactive SVG file.
 */
export const SVG_PATH = "./apps/fuel/config/indications/pic/indications.svg";

/**
 * INDICATIONS INTRO FILE:
 *
 * Path to Indication's intro HTML file shown at bottom.
 */
export const INTRO_PATH = "./apps/fuel/config/indications/desc/intro.html";
